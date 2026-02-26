// Position Detail — full-page view of a trade's legs, mirror of trades table format
import { formatUSD } from '../analytics.js';
import { computeFromLegs, recalcLegsPnl } from '../csvParser.js';
import { loadStrategies, loadTags, saveImage, loadImage, deleteImage } from '../storage.js';

function formatDate(isoStr) {
  const d = new Date(isoStr);
  return d.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }) +
    ' ' + d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

function fmtPrice(v) {
  return v != null ? '$' + v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '—';
}

function toLocalDatetime(isoStr) {
  const d = new Date(isoStr);
  const offset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 16);
}

/**
 * Render position detail page
 * @param {Object} trade  — the position object
 * @param {HTMLElement} container — main-content div
 * @param {Function} onBack — called to go back to trades
 * @param {Function} onUpdate — called with (tradeId, updatedData) when legs change
 * @param {Function} onDelete — called with (tradeId) to delete position
 */
export function renderPositionDetail(trade, container, onBack, onUpdate, onDelete) {
  let currentLegs = JSON.parse(JSON.stringify(trade.legs || []));
  const strategies = loadStrategies();

  function render() {
    const computed = computeFromLegs(currentLegs);
    const entries = currentLegs.filter(l => l.type === 'entry');
    const exits = currentLegs.filter(l => l.type === 'exit');

    container.innerHTML = `
    <div class="page-header" style="margin-bottom:1.5rem;">
      <div style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap;">
        <button class="btn btn-ghost btn-sm" id="btn-back">← Back</button>
        <div>
          <h2 class="page-title" style="display:flex; align-items:center; gap:0.5rem;">
            ${trade.coin} ${trade.direction}
            <span class="status-badge ${computed.status === 'Active' ? 'status-active' : 'status-completed'}" style="font-size:0.75rem;">
              ${computed.status === 'Active' ? '<span class="status-dot"></span> Active' : '✓ Completed'}
            </span>
          </h2>
          <p class="page-subtitle">${entries.length} entries • ${exits.length} exits • ${currentLegs.length} legs total</p>
        </div>
      </div>
    </div>

    <!-- Position Summary KPIs -->
    <div class="kpi-grid" style="margin-bottom:1.5rem;">
      <div class="kpi-card animate-in stagger-1">
        <div class="kpi-label">Avg Entry</div>
        <div class="kpi-value">${fmtPrice(computed.entryPrice)}</div>
      </div>
      <div class="kpi-card animate-in stagger-2">
        <div class="kpi-label">Avg Exit</div>
        <div class="kpi-value">${computed.exitPrice ? fmtPrice(computed.exitPrice) : '—'}</div>
      </div>
      <div class="kpi-card animate-in stagger-3">
        <div class="kpi-label">Size</div>
        <div class="kpi-value">${computed.remainingSize !== computed.size ? `<span style="color:var(--accent-primary)">${computed.remainingSize}</span> / ${computed.size}` : computed.size}</div>
      </div>
      <div class="kpi-card animate-in stagger-4">
        <div class="kpi-label">P&L <span style="font-size:0.65rem; color:var(--text-muted)">(net of fees)</span></div>
        <div class="kpi-value ${computed.closedPnl >= 0 ? 'profit' : 'loss'}">${formatUSD(computed.closedPnl)}</div>
      </div>
      <div class="kpi-card animate-in stagger-5">
        <div class="kpi-label">Invested</div>
        <div class="kpi-value">${fmtPrice(computed.notional)}</div>
      </div>
      <div class="kpi-card animate-in stagger-6">
        <div class="kpi-label">Fee Total</div>
        <div class="kpi-value loss">-$${computed.fee.toFixed(2)}</div>
      </div>
    </div>

    <!-- Entries Table -->
    <div class="card" style="margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; padding:1rem 1.25rem 0.5rem;">
        <h3 style="margin:0; font-size:1rem;">📥 Entries (${entries.length})</h3>
        <button class="btn btn-primary btn-sm" id="btn-add-entry">+ Add Entry</button>
      </div>
      <div class="table-container">
        <table class="data-table">
          <thead><tr>
            <th>Data</th>
            <th>Price</th>
            <th>Size</th>
            <th>Value</th>
            <th>Fee</th>
            <th>Risk</th>
            <th>Strategy</th>
            <th>Notes</th>
            <th>MAE%</th>
            <th>MFE%</th>
            <th>📷</th>
          </tr></thead>
          <tbody>
            ${entries.length === 0 ? '<tr><td colspan="11" style="text-align:center; padding:1.5rem; color:var(--text-muted)">No entries — add the first entry</td></tr>' : ''}
            ${entries.map((l, i) => legRow(l, 'entry', i)).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Exits Table -->
    <div class="card" style="margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; padding:1rem 1.25rem 0.5rem;">
        <h3 style="margin:0; font-size:1rem;">📤 Exits (${exits.length})</h3>
        <button class="btn btn-primary btn-sm" id="btn-add-exit" ${computed.remainingSize <= 0 ? 'disabled' : ''}>+ Add Exit ${computed.remainingSize > 0 ? `(max: ${computed.remainingSize})` : ''}</button>
      </div>
      <div class="table-container">
        <table class="data-table">
          <thead><tr>
            <th>Data</th>
            <th>Price</th>
            <th>Size</th>
            <th>Fee</th>
            <th>P&L</th>
            <th>Risk</th>
            <th>Strategy</th>
            <th>Notes</th>
            <th>MAE%</th>
            <th>MFE%</th>
            <th>📷</th>
          </tr></thead>
          <tbody>
            ${exits.length === 0 ? '<tr><td colspan="11" style="text-align:center; padding:1.5rem; color:var(--text-muted)">No exits — fully open position</td></tr>' : ''}
            ${exits.map((l, i) => exitLegRow(l, i, computed)).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Actions -->
    <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
      <button class="btn btn-ghost btn-sm" id="btn-back-bottom">← Back to Trades</button>
      <div style="flex:1"></div>
      <button class="btn btn-danger btn-sm" id="btn-delete-position">🗑️ Delete Position</button>
    </div>
    `;

    bindEvents();
  }

  function legRow(l, type, idx) {
    const riskStars = l.risk > 0 ? '★'.repeat(l.risk) + '☆'.repeat(5 - l.risk) : '<span class="text-muted">-</span>';
    const notional = l.price * l.size;
    const imgCount = (l.images || []).length;
    return `
      <tr class="row-clickable" data-type="${type}" data-idx="${idx}">
        <td>${formatDate(l.time)}</td>
        <td>${fmtPrice(l.price)}</td>
        <td>${l.size}</td>
        <td class="text-muted">${fmtPrice(notional)}</td>
        <td class="text-muted">$${(l.fee || 0).toFixed(2)}</td>
        <td><span class="risk-stars">${riskStars}</span></td>
        <td>${l.strategy ? `<span class="strategy-badge">${l.strategy}</span>` : '<span class="text-muted">-</span>'}</td>
        <td style="max-width:150px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${(l.notes || '').replace(/"/g, '&quot;')}">${l.notes || ''}</td>
        <td class="text-muted">${l.mae != null ? l.mae + '%' : ''}</td>
        <td class="text-muted">${l.mfe != null ? l.mfe + '%' : ''}</td>
        <td>${imgCount > 0 ? `<button class="btn btn-ghost btn-sm leg-gallery-btn" data-type="${type}" data-idx="${idx}" style="font-size:0.75rem; padding:0.15rem 0.4rem; cursor:pointer;">📷 ${imgCount}</button>` : ''}</td>
      </tr>
    `;
  }

  function exitLegRow(l, idx, computed) {
    const riskStars = l.risk > 0 ? '★'.repeat(l.risk) + '☆'.repeat(5 - l.risk) : '<span class="text-muted">-</span>';
    const pnlClass = (l.pnl || 0) >= 0 ? 'cell-profit' : 'cell-loss';
    const imgCount = (l.images || []).length;
    return `
      <tr class="row-clickable" data-type="exit" data-idx="${idx}">
        <td>${formatDate(l.time)}</td>
        <td>${fmtPrice(l.price)}</td>
        <td>${l.size}</td>
        <td class="text-muted">$${(l.fee || 0).toFixed(2)}</td>
        <td class="${pnlClass}" style="font-weight:600;">${formatUSD(l.pnl || 0)}</td>
        <td><span class="risk-stars">${riskStars}</span></td>
        <td>${l.strategy ? `<span class="strategy-badge">${l.strategy}</span>` : '<span class="text-muted">-</span>'}</td>
        <td style="max-width:150px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${(l.notes || '').replace(/"/g, '&quot;')}">${l.notes || ''}</td>
        <td class="text-muted">${l.mae != null ? l.mae + '%' : ''}</td>
        <td class="text-muted">${l.mfe != null ? l.mfe + '%' : ''}</td>
        <td>${imgCount > 0 ? `<button class="btn btn-ghost btn-sm leg-gallery-btn" data-type="exit" data-idx="${idx}" style="font-size:0.75rem; padding:0.15rem 0.4rem; cursor:pointer;">📷 ${imgCount}</button>` : ''}</td>
      </tr>
    `;
  }

  function bindEvents() {
    // Back buttons
    container.querySelector('#btn-back')?.addEventListener('click', onBack);
    container.querySelector('#btn-back-bottom')?.addEventListener('click', onBack);

    // Delete position
    container.querySelector('#btn-delete-position')?.addEventListener('click', () => {
      if (confirm(`Are you sure you want to delete the entire ${trade.coin} ${trade.direction} position?`)) {
        onDelete(trade.id);
        onBack();
      }
    });

    // Add Entry
    container.querySelector('#btn-add-entry')?.addEventListener('click', () => {
      const computed = computeFromLegs(currentLegs);
      const lastEntry = currentLegs.filter(l => l.type === 'entry').at(-1);
      showLegPrompt('entry', { price: lastEntry?.price || 0, time: new Date().toISOString(), size: 0 }, computed);
    });

    // Add Exit
    container.querySelector('#btn-add-exit')?.addEventListener('click', () => {
      const computed = computeFromLegs(currentLegs);
      if (computed.remainingSize <= 0) return;
      showLegPrompt('exit', { price: 0, time: new Date().toISOString(), size: computed.remainingSize }, computed);
    });


    // Click row to edit leg
    container.querySelectorAll('tr.row-clickable[data-type]').forEach(row => {
      row.addEventListener('click', (e) => {
        if (e.target.closest('.leg-remove-btn')) return;
        const type = row.dataset.type;
        const idx = parseInt(row.dataset.idx);
        const legs = currentLegs.filter(l => l.type === type);
        const leg = legs[idx];
        if (leg) showLegEditor(leg, type, idx);
      });
    });

    // Gallery buttons
    container.querySelectorAll('.leg-gallery-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const type = btn.dataset.type;
        const idx = parseInt(btn.dataset.idx);
        const legs = currentLegs.filter(l => l.type === type);
        const leg = legs[idx];
        if (leg && leg.images && leg.images.length > 0) showLegGallery(leg);
      });
    });
  }

  async function showLegGallery(leg) {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed; inset:0; background:rgba(0,0,0,0.85); z-index:600; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1rem;';
    overlay.innerHTML = `<button style="position:absolute; top:1rem; right:1rem; background:none; border:none; color:white; font-size:2rem; cursor:pointer; z-index:10;">✕</button><div style="display:flex; flex-wrap:wrap; gap:1rem; justify-content:center; max-height:90vh; overflow-y:auto; padding:1rem;"></div>`;
    const imgContainer = overlay.querySelector('div');
    for (const imgId of leg.images) {
      const dataUrl = await loadImage(imgId);
      if (dataUrl) {
        const img = document.createElement('img');
        img.src = dataUrl;
        img.style.cssText = 'max-width:90vw; max-height:80vh; border-radius:8px; object-fit:contain; cursor:pointer;';
        img.addEventListener('click', () => {
          const lb = document.getElementById('lightbox');
          if (lb) { document.getElementById('lightbox-img').src = dataUrl; lb.classList.remove('hidden'); }
        });
        imgContainer.appendChild(img);
      }
    }
    overlay.querySelector('button').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
  }

  function saveAndRender() {
    currentLegs = recalcLegsPnl(currentLegs, trade.direction);
    const computed = computeFromLegs(currentLegs);
    onUpdate(trade.id, {
      legs: currentLegs,
      ...computed,
      exitTime: computed.status === 'Completed' ? new Date().toISOString() : null,
    });
    render();
  }

  function showLegPrompt(type, defaults, computed) {
    const maxSize = type === 'exit' ? computed.remainingSize : 999999;
    const label = type === 'entry' ? 'Entry' : 'Exit';
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:500; display:flex; align-items:center; justify-content:center;';
    overlay.innerHTML = `
      <div style="background:var(--bg-card); border-radius:var(--radius-lg); padding:1.5rem; width:420px; max-width:90vw; border:1px solid var(--border-medium); max-height:90vh; overflow-y:auto;">
        <h4 style="margin:0 0 1rem;">➕ Add ${label}</h4>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem;">
          <div class="form-group"><label class="form-label">Price</label><input type="number" step="0.01" class="input" id="lp-price" value="${defaults.price || ''}" /></div>
          <div class="form-group"><label class="form-label">Size ${type === 'exit' ? `(max: ${maxSize})` : ''}</label><input type="number" step="0.0001" class="input" id="lp-size" value="${defaults.size || ''}" /></div>
          <div class="form-group"><label class="form-label">Fee</label><input type="number" step="0.01" class="input" id="lp-fee" value="0" /></div>
          <div class="form-group"><label class="form-label">Date</label><input type="datetime-local" class="input" id="lp-time" value="${toLocalDatetime(defaults.time)}" /></div>
          <div class="form-group"><label class="form-label">Strategy</label><select class="input" id="lp-strategy"><option value="">—</option>${strategies.map(s => `<option value="${s}">${s}</option>`).join('')}</select></div>
          <div class="form-group"><label class="form-label">Risk</label><div id="lp-risk" style="display:flex; gap:0.1rem; padding-top:0.3rem;">${[1, 2, 3, 4, 5].map(i => `<button class="lp-risk-btn" data-r="${i}" style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:#374151;">★</button>`).join('')}</div></div>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-top:0.75rem;">
          <div class="form-group"><label class="form-label">MAE%</label><input type="number" step="0.01" class="input" id="lp-mae" placeholder="ex: -2.5" /></div>
          <div class="form-group"><label class="form-label">MFE%</label><input type="number" step="0.01" class="input" id="lp-mfe" placeholder="ex: 5.3" /></div>
        </div>
        <div class="form-group" style="margin-top:0.75rem;"><label class="form-label">Notes</label><textarea class="input" id="lp-notes" rows="2" placeholder="Observations..." style="resize:vertical;"></textarea></div>
        <div class="form-group" style="margin-top:0.75rem;"><label class="form-label">Screenshots</label><div id="lp-gallery" style="display:flex; flex-wrap:wrap; gap:0.35rem; margin-bottom:0.5rem;"></div><label class="btn btn-secondary btn-sm" style="cursor:pointer; display:inline-flex; align-items:center; gap:0.35rem;">📷 Add<input type="file" accept="image/*" id="lp-img-upload" style="display:none" multiple /></label></div>
        <div style="display:flex; gap:0.5rem; justify-content:flex-end; margin-top:1rem;">
          <button class="btn btn-ghost" id="lp-cancel">Cancel</button>
          <button class="btn btn-primary" id="lp-confirm">✓ Add</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    let legRisk = 0;
    let newImages = [];
    overlay.querySelectorAll('.lp-risk-btn').forEach(b => b.addEventListener('click', () => {
      legRisk = parseInt(b.dataset.r);
      overlay.querySelectorAll('.lp-risk-btn').forEach(x => x.style.color = parseInt(x.dataset.r) <= legRisk ? '#f59e0b' : '#374151');
    }));

    overlay.querySelector('#lp-img-upload').addEventListener('change', (e) => {
      Array.from(e.target.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (ev) => {
          const id = 'img_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
          newImages.push({ id, dataUrl: ev.target.result });
          const thumb = document.createElement('img');
          thumb.src = ev.target.result;
          thumb.style.cssText = 'width:48px;height:48px;object-fit:cover;border-radius:4px;border:1px solid var(--border-subtle);';
          overlay.querySelector('#lp-gallery').appendChild(thumb);
        };
        reader.readAsDataURL(file);
      });
    });

    overlay.querySelector('#lp-cancel').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });

    overlay.querySelector('#lp-confirm').addEventListener('click', async () => {
      const price = parseFloat(overlay.querySelector('#lp-price').value);
      const size = parseFloat(overlay.querySelector('#lp-size').value);
      if (!price || !size || price <= 0 || size <= 0) { alert('Invalid price/size.'); return; }
      if (type === 'exit' && size > maxSize + 0.0001) { alert(`Max exit: ${maxSize}`); return; }

      for (const img of newImages) { await saveImage(img.id, img.dataUrl); }

      const leg = {
        type,
        time: overlay.querySelector('#lp-time').value ? new Date(overlay.querySelector('#lp-time').value).toISOString() : new Date().toISOString(),
        price,
        size: Math.min(size, type === 'exit' ? maxSize : size),
        fee: parseFloat(overlay.querySelector('#lp-fee').value) || 0,
        strategy: overlay.querySelector('#lp-strategy').value,
        risk: legRisk,
        notes: overlay.querySelector('#lp-notes').value,
        tags: [],
        images: newImages.map(i => i.id),
        mae: overlay.querySelector('#lp-mae').value ? parseFloat(overlay.querySelector('#lp-mae').value) : null,
        mfe: overlay.querySelector('#lp-mfe').value ? parseFloat(overlay.querySelector('#lp-mfe').value) : null,
      };
      if (type === 'exit') {
        const avgEntry = computed.entryPrice;
        leg.pnl = trade.direction === 'Long' ? (price - avgEntry) * leg.size - leg.fee : (avgEntry - price) * leg.size - leg.fee;
      }
      currentLegs.push(leg);
      overlay.remove();
      saveAndRender();
    });
  }

  function showLegEditor(leg, type, idx) {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:500; display:flex; align-items:center; justify-content:center;';
    overlay.innerHTML = `
      <div style="background:var(--bg-card); border-radius:var(--radius-lg); padding:1.5rem; width:420px; max-width:90vw; border:1px solid var(--border-medium); max-height:90vh; overflow-y:auto;">
        <h4 style="margin:0 0 1rem;">✏️ Edit ${type === 'entry' ? 'Entry' : 'Exit'} #${idx + 1}</h4>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem;">
          <div class="form-group"><label class="form-label">Price</label><input type="number" step="0.01" class="input" id="le-price" value="${leg.price}" /></div>
          <div class="form-group"><label class="form-label">Size</label><input type="number" step="0.0001" class="input" id="le-size" value="${leg.size}" /></div>
          <div class="form-group"><label class="form-label">Fee</label><input type="number" step="0.01" class="input" id="le-fee" value="${leg.fee || 0}" /></div>
          <div class="form-group"><label class="form-label">Data</label><input type="datetime-local" class="input" id="le-time" value="${toLocalDatetime(leg.time)}" /></div>
          <div class="form-group"><label class="form-label">Strategy</label><select class="input" id="le-strategy"><option value="">—</option>${strategies.map(s => `<option value="${s}" ${leg.strategy === s ? 'selected' : ''}>${s}</option>`).join('')}</select></div>
          <div class="form-group"><label class="form-label">Risk</label><div id="le-risk" style="display:flex; gap:0.1rem; padding-top:0.3rem;">${[1, 2, 3, 4, 5].map(i => `<button class="le-risk-btn" data-r="${i}" style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:${i <= (leg.risk || 0) ? '#f59e0b' : '#374151'};">★</button>`).join('')}</div></div>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-top:0.75rem;">
          <div class="form-group"><label class="form-label">MAE%</label><input type="number" step="0.01" class="input" id="le-mae" value="${leg.mae != null ? leg.mae : ''}" placeholder="ex: -2.5" /></div>
          <div class="form-group"><label class="form-label">MFE%</label><input type="number" step="0.01" class="input" id="le-mfe" value="${leg.mfe != null ? leg.mfe : ''}" placeholder="ex: 5.3" /></div>
        </div>
        <div class="form-group" style="margin-top:0.75rem;"><label class="form-label">Notes</label><textarea class="input" id="le-notes" rows="3" style="resize:vertical;">${leg.notes || ''}</textarea></div>
        <div class="form-group" style="margin-top:0.75rem;"><label class="form-label">Screenshots</label><div id="le-gallery" style="display:flex; flex-wrap:wrap; gap:0.35rem; margin-bottom:0.5rem;"></div><label class="btn btn-secondary btn-sm" style="cursor:pointer; display:inline-flex; align-items:center; gap:0.35rem;">📷 Add<input type="file" accept="image/*" id="le-img-upload" style="display:none" multiple /></label></div>
        <div style="display:flex; gap:0.5rem; justify-content:flex-end; margin-top:1rem;">
          <button class="btn btn-danger btn-sm" id="le-delete">🗑️ Delete Leg</button>
          <div style="flex:1"></div>
          <button class="btn btn-ghost" id="le-cancel">Cancel</button>
          <button class="btn btn-primary" id="le-save">💾 Save</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    let legRisk = leg.risk || 0;
    let legImages = [...(leg.images || [])];
    let newEditorImages = [];

    // Load existing images
    const gallery = overlay.querySelector('#le-gallery');
    legImages.forEach(async (imgId) => {
      const dataUrl = await loadImage(imgId);
      if (dataUrl) {
        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'position:relative; width:48px; height:48px;';
        wrapper.innerHTML = `<img src="${dataUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;border:1px solid var(--border-subtle);" /><button data-img="${imgId}" style="position:absolute;top:-4px;right:-4px;width:16px;height:16px;border-radius:50%;background:var(--color-loss);color:white;border:none;cursor:pointer;font-size:0.6rem;display:flex;align-items:center;justify-content:center;">✕</button>`;
        wrapper.querySelector('button').addEventListener('click', () => {
          legImages = legImages.filter(i => i !== imgId);
          deleteImage(imgId);
          wrapper.remove();
        });
        gallery.appendChild(wrapper);
      }
    });

    overlay.querySelectorAll('.le-risk-btn').forEach(b => b.addEventListener('click', () => {
      legRisk = parseInt(b.dataset.r);
      overlay.querySelectorAll('.le-risk-btn').forEach(x => x.style.color = parseInt(x.dataset.r) <= legRisk ? '#f59e0b' : '#374151');
    }));

    overlay.querySelector('#le-img-upload').addEventListener('change', (e) => {
      Array.from(e.target.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (ev) => {
          const id = 'img_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
          newEditorImages.push({ id, dataUrl: ev.target.result });
          legImages.push(id);
          const thumb = document.createElement('img');
          thumb.src = ev.target.result;
          thumb.style.cssText = 'width:48px;height:48px;object-fit:cover;border-radius:4px;border:1px solid var(--border-subtle);';
          gallery.appendChild(thumb);
        };
        reader.readAsDataURL(file);
      });
    });

    overlay.querySelector('#le-cancel').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });

    // Delete leg
    overlay.querySelector('#le-delete').addEventListener('click', () => {
      if (confirm('Are you sure you want to delete this leg?')) {
        currentLegs = currentLegs.filter(l => l !== leg);
        currentLegs = recalcLegsPnl(currentLegs, trade.direction);
        overlay.remove();
        saveAndRender();
      }
    });

    overlay.querySelector('#le-save').addEventListener('click', async () => {
      for (const img of newEditorImages) { await saveImage(img.id, img.dataUrl); }
      leg.price = parseFloat(overlay.querySelector('#le-price').value) || leg.price;
      leg.size = parseFloat(overlay.querySelector('#le-size').value) || leg.size;
      leg.fee = parseFloat(overlay.querySelector('#le-fee').value) || 0;
      leg.time = overlay.querySelector('#le-time').value ? new Date(overlay.querySelector('#le-time').value).toISOString() : leg.time;
      leg.strategy = overlay.querySelector('#le-strategy').value;
      leg.risk = legRisk;
      leg.notes = overlay.querySelector('#le-notes').value;
      leg.images = legImages;
      leg.mae = overlay.querySelector('#le-mae').value ? parseFloat(overlay.querySelector('#le-mae').value) : null;
      leg.mfe = overlay.querySelector('#le-mfe').value ? parseFloat(overlay.querySelector('#le-mfe').value) : null;
      overlay.remove();
      saveAndRender();
    });
  }

  // Initial render
  render();
}
