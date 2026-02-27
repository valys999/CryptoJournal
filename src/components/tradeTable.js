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
            ${tableHeader('strategy', 'Strategy')}
            <th>Tags</th>
            ${tableHeader('risk', 'Risk')}
            ${tableHeader('mae', 'MAE%')}
            ${tableHeader('mfe', 'MFE%')}
            <th>📷</th>
          </tr>
        </thead>
        <tbody>
          ${paged.length === 0 ? `<tr><td colspan="15" class="text-center text-muted" style="padding:2rem">No trades found</td></tr>` : ''}
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
  const riskStars = t.risk > 0 ? '★'.repeat(t.risk) + '☆'.repeat(5 - t.risk) : '<span class="text-muted">—</span>';

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
      <td>${t.size}</td>
      <td class="text-muted">$${Math.abs(t.fee).toFixed(2)}</td>
      <td class="${pnlClass}">${isActive ? '<span class="text-muted">—</span>' : formatUSD(t.closedPnl)}</td>
      <td>${t.strategy ? `<span class="strategy-badge">${t.strategy}</span>` : ''}</td>
      <td>${(t.tags || []).length > 0 ? t.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join('') : ''}</td>
      <td><span class="risk-stars" style="font-size:0.75rem;">${riskStars}</span></td>
      <td class="text-muted">${t.mae != null ? t.mae + '%' : '—'}</td>
      <td class="text-muted">${t.mfe != null ? t.mfe + '%' : '—'}</td>
      <td><div class="image-thumbs" data-trade-id="${t.id}" style="display:flex; gap:3px;">${(t.images || []).length > 0 ? '<span class="text-muted" style="font-size:0.7rem">⏳</span>' : ''}</div></td>
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

    // Load ALL images for lightbox navigation
    const allUrls = [];
    for (const imgId of trade.images) {
      const dataUrl = await loadImage(imgId);
      if (dataUrl) allUrls.push(dataUrl);
    }

    // Show only first 2 as thumbnails
    let thumbsHtml = '';
    allUrls.slice(0, 2).forEach((url) => {
      thumbsHtml += `<img src="${url}" class="image-thumb" data-full-src="${url}" alt="Screenshot" />`;
    });
    if (allUrls.length > 2) {
      thumbsHtml += `<span class="image-thumb-more" style="font-size:0.7rem; align-self:center; cursor:pointer; color:var(--text-muted);">+${allUrls.length - 2}</span>`;
    }
    thumbsContainer.innerHTML = thumbsHtml;

    // Bind click — open lightbox with ALL images
    thumbsContainer.querySelectorAll('.image-thumb').forEach((img, i) => {
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        if (window.openLightbox) window.openLightbox(allUrls, i);
      });
    });
    // Also make +N badge open lightbox at image 3
    const moreBtn = thumbsContainer.querySelector('.image-thumb-more');
    if (moreBtn) {
      moreBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (window.openLightbox) window.openLightbox(allUrls, 2);
      });
    }
  }
}
