// Trade table component — sortable, filterable, paginated
import { formatDate, formatUSD } from '../analytics.js';
import { loadStrategies, loadImage } from '../storage.js';

const PAGE_SIZE = 25;

let currentPage = 1;
let sortKey = 'time';
let sortDir = 'desc';
let filters = { coin: '', direction: '', strategy: '', dateFrom: '', dateTo: '' };

export function renderTradeTable(trades, container, onEditTrade) {
  const strategies = loadStrategies();
  const coins = [...new Set(trades.map(t => t.coin))].sort();

  const filtered = applyFilters(trades);
  const sorted = applySort(filtered);
  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  if (currentPage > totalPages) currentPage = totalPages;
  const paged = sorted.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2 class="page-title">Trades</h2>
        <p class="page-subtitle">${trades.length} total trades • ${filtered.length} filtered</p>
      </div>
    </div>

    <div class="filters-bar">
      <div class="filter-group">
        <label class="filter-label">Coin</label>
        <select id="filter-coin" class="input filter-input">
          <option value="">All</option>
          ${coins.map(c => `<option value="${c}" ${filters.coin === c ? 'selected' : ''}>${c}</option>`).join('')}
        </select>
      </div>
      <div class="filter-group">
        <label class="filter-label">Direction</label>
        <select id="filter-dir" class="input filter-input">
          <option value="">All</option>
          <option value="Long" ${filters.direction === 'Long' ? 'selected' : ''}>Long</option>
          <option value="Short" ${filters.direction === 'Short' ? 'selected' : ''}>Short</option>
        </select>
      </div>
      <div class="filter-group">
        <label class="filter-label">Strategy</label>
        <select id="filter-strategy" class="input filter-input">
          <option value="">All</option>
          ${strategies.map(s => `<option value="${s}" ${filters.strategy === s ? 'selected' : ''}>${s}</option>`).join('')}
        </select>
      </div>
      <div class="filter-group">
        <label class="filter-label">From</label>
        <input type="date" id="filter-from" class="input filter-input" value="${filters.dateFrom}" />
      </div>
      <div class="filter-group">
        <label class="filter-label">To</label>
        <input type="date" id="filter-to" class="input filter-input" value="${filters.dateTo}" />
      </div>
      <button id="btn-clear-filters" class="btn btn-ghost btn-sm">✕ Reset</button>
    </div>

    <div class="table-container">
      <table class="data-table" id="trade-table">
        <thead>
          <tr>
            ${tableHeader('time', 'Data')}
            ${tableHeader('coin', 'Coin')}
            ${tableHeader('direction', 'Dir')}
            ${tableHeader('status', 'Status')}
            ${tableHeader('entryPrice', 'Entry')}
            ${tableHeader('exitPrice', 'Exit')}
            ${tableHeader('size', 'Size')}
            ${tableHeader('fee', 'Fee')}
            ${tableHeader('closedPnl', 'P&L')}
          </tr>
        </thead>
        <tbody>
          ${paged.length === 0 ? `<tr><td colspan="9" class="text-center text-muted" style="padding:2rem">No trades found</td></tr>` : ''}
          ${paged.map(t => tradeRow(t)).join('')}
        </tbody>
      </table>
    </div>

    ${renderPagination(currentPage, totalPages, filtered.length)}
  `;

  // Event listeners
  bindFilterEvents(container, trades, onEditTrade);
  bindSortEvents(container, trades, onEditTrade);
  bindPaginationEvents(container, trades, onEditTrade);
  bindEditEvents(container, trades, onEditTrade);

  // Load image thumbnails async
  loadImageThumbnails(container, paged);
}

function tableHeader(key, label) {
  const active = sortKey === key;
  const arrow = active ? (sortDir === 'asc' ? '↑' : '↓') : '↕';
  return `<th data-sort="${key}" class="${active ? 'sorted' : ''}">${label} <span class="sort-indicator">${arrow}</span></th>`;
}

function tradeRow(t) {
  const pnlClass = t.closedPnl > 0 ? 'cell-profit' : t.closedPnl < 0 ? 'cell-loss' : '';
  const dirClass = t.direction === 'Long' ? 'long' : t.direction === 'Short' ? 'short' : '';
  const isActive = t.status === 'Active';
  const entryPrice = t.entryPrice || 0;
  const exitPrice = t.exitPrice;
  const legsCount = (t.legs || []).length;

  return `
    <tr data-id="${t.id}" class="${isActive ? 'row-active' : ''} row-clickable">
      <td>${formatDate(t.time)}</td>
      <td class="cell-coin">${t.coin}</td>
      <td><span class="cell-dir ${dirClass}">${t.direction}</span></td>
      <td>${isActive
      ? '<span class="status-badge status-active"><span class="status-dot"></span> Active</span>'
      : '<span class="status-badge status-completed">✓ Completed</span>'
    }</td>
      <td>$${entryPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
      <td>${exitPrice != null ? '$' + exitPrice.toLocaleString('en-US', { minimumFractionDigits: 2 }) : '<span class="text-muted">—</span>'}</td>
      <td>${t.remainingSize != null && t.remainingSize !== t.size ? `<span style="color:var(--accent-primary)">${t.remainingSize}</span>/${t.size}` : t.size}</td>
      <td class="text-muted">$${Math.abs(t.fee).toFixed(2)}</td>
      <td class="${pnlClass}">${isActive ? '<span class="text-muted">—</span>' : formatUSD(t.closedPnl)}</td>
    </tr>
  `;
}

function renderPagination(current, total, totalItems) {
  if (total <= 1) return '';
  let pages = '';
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - 2 && i <= current + 2)) {
      pages += `<button class="pagination-btn ${i === current ? 'active' : ''}" data-page="${i}">${i}</button>`;
    } else if (i === current - 3 || i === current + 3) {
      pages += `<span class="pagination-info">...</span>`;
    }
  }
  return `
    <div class="pagination">
      <button class="pagination-btn" data-page="${current - 1}" ${current <= 1 ? 'disabled' : ''}>‹</button>
      ${pages}
      <button class="pagination-btn" data-page="${current + 1}" ${current >= total ? 'disabled' : ''}>›</button>
      <span class="pagination-info">${totalItems} trade-uri</span>
    </div>
  `;
}

function applyFilters(trades) {
  return trades.filter(t => {
    if (filters.coin && t.coin !== filters.coin) return false;
    if (filters.direction && t.direction !== filters.direction) return false;
    if (filters.strategy && t.strategy !== filters.strategy) return false;
    if (filters.dateFrom && t.time < filters.dateFrom) return false;
    if (filters.dateTo && t.time > filters.dateTo + 'T23:59:59') return false;
    return true;
  });
}

function applySort(trades) {
  const arr = [...trades];
  arr.sort((a, b) => {
    let va = a[sortKey], vb = b[sortKey];
    if (typeof va === 'string') {
      const comp = va.localeCompare(vb);
      return sortDir === 'asc' ? comp : -comp;
    }
    return sortDir === 'asc' ? va - vb : vb - va;
  });
  return arr;
}

function bindFilterEvents(container, trades, onEditTrade) {
  const rerender = () => renderTradeTable(trades, container, onEditTrade);
  container.querySelector('#filter-coin')?.addEventListener('change', e => { filters.coin = e.target.value; currentPage = 1; rerender(); });
  container.querySelector('#filter-dir')?.addEventListener('change', e => { filters.direction = e.target.value; currentPage = 1; rerender(); });
  container.querySelector('#filter-strategy')?.addEventListener('change', e => { filters.strategy = e.target.value; currentPage = 1; rerender(); });
  container.querySelector('#filter-from')?.addEventListener('change', e => { filters.dateFrom = e.target.value; currentPage = 1; rerender(); });
  container.querySelector('#filter-to')?.addEventListener('change', e => { filters.dateTo = e.target.value; currentPage = 1; rerender(); });
  container.querySelector('#btn-clear-filters')?.addEventListener('click', () => {
    filters = { coin: '', direction: '', strategy: '', dateFrom: '', dateTo: '' };
    currentPage = 1;
    rerender();
  });
}

function bindSortEvents(container, trades, onEditTrade) {
  container.querySelectorAll('th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const key = th.dataset.sort;
      if (sortKey === key) {
        sortDir = sortDir === 'asc' ? 'desc' : 'asc';
      } else {
        sortKey = key;
        sortDir = 'desc';
      }
      renderTradeTable(trades, container, onEditTrade);
    });
  });
}

function bindPaginationEvents(container, trades, onEditTrade) {
  container.querySelectorAll('.pagination-btn[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = parseInt(btn.dataset.page);
      if (!isNaN(page) && page >= 1) {
        currentPage = page;
        renderTradeTable(trades, container, onEditTrade);
      }
    });
  });
}

function bindEditEvents(container, trades, onEditTrade) {
  // Make entire row clickable
  container.querySelectorAll('tr[data-id]').forEach(row => {
    row.addEventListener('click', () => {
      const trade = trades.find(t => t.id === row.dataset.id);
      if (trade && onEditTrade) onEditTrade(trade);
    });
  });
}

async function loadImageThumbnails(container, trades) {
  for (const trade of trades) {
    if (!trade.images || trade.images.length === 0) continue;
    const thumbsContainer = container.querySelector(`.image-thumbs[data-trade-id="${trade.id}"]`);
    if (!thumbsContainer) continue;

    let thumbsHtml = '';
    const loadedImages = [];
    for (const imgId of trade.images.slice(0, 3)) {
      const dataUrl = await loadImage(imgId);
      if (dataUrl) {
        loadedImages.push(dataUrl);
        thumbsHtml += `<img src="${dataUrl}" class="image-thumb" data-full-src="${dataUrl}" alt="Screenshot" />`;
      }
    }
    if (trade.images.length > 3) {
      thumbsHtml += `<span class="text-muted" style="font-size:0.7rem; align-self:center">+${trade.images.length - 3}</span>`;
    }
    thumbsContainer.innerHTML = thumbsHtml;

    // Bind click for lightbox
    thumbsContainer.querySelectorAll('.image-thumb').forEach(img => {
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = img.dataset.fullSrc;
        lightbox.classList.remove('hidden');
      });
    });
  }
}
