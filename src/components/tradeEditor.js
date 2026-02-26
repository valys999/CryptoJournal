// Trade Editor Modal — edit ALL fields + annotations, images, MAE/MFE + LEGS
import { loadStrategies, loadTags, saveImage, loadImage, deleteImage } from '../storage.js';
import { computeFromLegs, recalcLegsPnl } from '../csvParser.js';

function toLocalDatetime(isoStr) {
  const d = new Date(isoStr);
  const offset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 16);
}

function fmtDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: '2-digit' }) +
    ' ' + d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

function fmtPrice(v) {
  return v != null ? '$' + v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '—';
}

export function openTradeEditor(trade, modalOverlay, modalContainer, onSave, onDelete) {
  const strategies = loadStrategies();
  const availableTags = loadTags();

  // Initialize legs from trade
  let currentLegs = JSON.parse(JSON.stringify(trade.legs || []));
  const direction = trade.direction || 'Long';

  function renderLegsSection() {
    const computed = computeFromLegs(currentLegs);
    const entries = currentLegs.filter(l => l.type === 'entry');
    const exits = currentLegs.filter(l => l.type === 'exit');

    return `
      <div class="legs-section">
        <div class="legs-summary" style="display:grid; grid-template-columns:1fr 1fr 1fr 1fr; gap:0.5rem; margin-bottom:1rem; padding:0.75rem; background:var(--bg-surface); border-radius:var(--radius-md);">
          <div><span class="form-label" style="display:block;font-size:0.65rem;">AVG ENTRY</span><strong>${fmtPrice(computed.entryPrice)}</strong></div>
          <div><span class="form-label" style="display:block;font-size:0.65rem;">AVG EXIT</span><strong>${computed.exitPrice ? fmtPrice(computed.exitPrice) : '—'}</strong></div>
          <div><span class="form-label" style="display:block;font-size:0.65rem;">REMAINING</span><strong>${computed.remainingSize} / ${computed.size}</strong></div>
          <div><span class="form-label" style="display:block;font-size:0.65rem;">REALIZED P&L</span><strong style="color:${computed.closedPnl >= 0 ? 'var(--color-profit)' : 'var(--color-loss)'}">${computed.closedPnl !== 0 ? (computed.closedPnl > 0 ? '+' : '') + '$' + Math.abs(computed.closedPnl).toFixed(2) : '$0.00'}</strong></div>
        </div>

        <div style="margin-bottom:0.75rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <span class="form-label" style="font-size:0.75rem; color:var(--color-profit); font-weight:700;">📥 ENTRIES (${entries.length})</span>
            <button class="btn btn-sm btn-primary" id="btn-add-entry" style="font-size:0.7rem; padding:0.3rem 0.6rem;">+ Entry</button>
          </div>
          <table class="data-table" style="width:100%; font-size:0.8rem;">
            <thead><tr>
              <th style="padding:0.4rem">Data</th>
              <th style="padding:0.4rem">Price</th>
              <th style="padding:0.4rem">Size</th>
              <th style="padding:0.4rem">Fee</th>
              <th style="padding:0.4rem">Strat.</th>
              <th style="padding:0.4rem">Note</th>
              <th style="padding:0.4rem"></th>
            </tr></thead>
            <tbody>
              ${entries.length === 0 ? '<tr><td colspan="7" style="padding:0.5rem; text-align:center; color:var(--text-muted)">No entry</td></tr>' : ''}
              ${entries.map((l, i) => `
                <tr>
                  <td style="padding:0.4rem">${fmtDate(l.time)}</td>
                  <td style="padding:0.4rem">${fmtPrice(l.price)}</td>
                  <td style="padding:0.4rem">${l.size}</td>
                  <td style="padding:0.4rem">$${(l.fee || 0).toFixed(2)}</td>
                  <td style="padding:0.4rem">${l.strategy ? `<span class="strategy-badge">${l.strategy}</span>` : ''}</td>
                  <td style="padding:0.4rem; max-width:80px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${(l.notes || '').replace(/"/g, '&quot;')}">${l.notes ? '📝' : ''}</td>
                  <td style="padding:0.4rem"><button class="btn btn-ghost btn-sm leg-remove" data-type="entry" data-idx="${i}" style="font-size:0.7rem;color:var(--color-loss);">✕</button></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <span class="form-label" style="font-size:0.75rem; color:var(--color-loss); font-weight:700;">📤 EXITS (${exits.length})</span>
            <button class="btn btn-sm btn-primary" id="btn-add-exit" style="font-size:0.7rem; padding:0.3rem 0.6rem;" ${computed.remainingSize <= 0 ? 'disabled' : ''}>+ Exit</button>
          </div>
          <table class="data-table" style="width:100%; font-size:0.8rem;">
            <thead><tr>
              <th style="padding:0.4rem">Data</th>
              <th style="padding:0.4rem">Price</th>
              <th style="padding:0.4rem">Size</th>
              <th style="padding:0.4rem">Fee</th>
              <th style="padding:0.4rem">P&L</th>
              <th style="padding:0.4rem">Strat.</th>
              <th style="padding:0.4rem">Note</th>
              <th style="padding:0.4rem"></th>
            </tr></thead>
            <tbody>
              ${exits.length === 0 ? '<tr><td colspan="8" style="padding:0.5rem; text-align:center; color:var(--text-muted)">No exit</td></tr>' : ''}
              ${exits.map((l, i) => `
                <tr>
                  <td style="padding:0.4rem">${fmtDate(l.time)}</td>
                  <td style="padding:0.4rem">${fmtPrice(l.price)}</td>
                  <td style="padding:0.4rem">${l.size}</td>
                  <td style="padding:0.4rem">$${(l.fee || 0).toFixed(2)}</td>
                  <td style="padding:0.4rem; color:${(l.pnl || 0) >= 0 ? 'var(--color-profit)' : 'var(--color-loss)'}; font-weight:600;">${(l.pnl || 0) >= 0 ? '+' : ''}$${Math.abs(l.pnl || 0).toFixed(2)}</td>
                  <td style="padding:0.4rem">${l.strategy ? `<span class="strategy-badge">${l.strategy}</span>` : ''}</td>
                  <td style="padding:0.4rem; max-width:80px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${(l.notes || '').replace(/"/g, '&quot;')}">${l.notes ? '📝' : ''}</td>
                  <td style="padding:0.4rem"><button class="btn btn-ghost btn-sm leg-remove" data-type="exit" data-idx="${i}" style="font-size:0.7rem;color:var(--color-loss);">✕</button></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderEditor() {
    const computed = computeFromLegs(currentLegs);

    modalContainer.innerHTML = `
    <div class="modal-header">
      <h3 class="modal-title">✏️ Edit — ${trade.coin} ${trade.direction}
        <span class="status-badge ${computed.status === 'Active' ? 'status-active' : 'status-completed'}" style="margin-left:0.5rem; font-size:0.7rem;">
          ${computed.status === 'Active' ? '<span class="status-dot"></span> Active' : '✓ Completed'}
        </span>
      </h3>
      <button class="modal-close" id="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <!-- Core info -->
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Data Deschidere</label>
          <input type="datetime-local" id="edit-time" class="input" value="${toLocalDatetime(trade.time)}" />
        </div>
        <div class="form-group">
          <label class="form-label">Coin</label>
          <input type="text" id="edit-coin" class="input" value="${trade.coin}" />
        </div>
        <div class="form-group">
          <label class="form-label">Direction</label>
          <select id="edit-direction" class="input">
            <option value="Long" ${trade.direction === 'Long' ? 'selected' : ''}>Long</option>
            <option value="Short" ${trade.direction === 'Short' ? 'selected' : ''}>Short</option>
          </select>
        </div>
      </div>

      <hr style="border-color: var(--border-subtle); margin: 1rem 0;" />

      <!-- LEGS Section -->
      <h4 style="margin:0 0 0.75rem; font-size:0.9rem;">📊 Legs (Entries & Exits)</h4>
      <div id="legs-container">
        ${renderLegsSection()}
      </div>

      <hr style="border-color: var(--border-subtle); margin: 1rem 0;" />

      <!-- Risk -->
      <div class="form-group">
        <label class="form-label">Risk Level</label>
        <div class="risk-selector" id="risk-selector">
          ${[1, 2, 3, 4, 5].map(i => `
            <button class="risk-star-btn ${trade.risk >= i ? 'active' : ''}" data-risk="${i}" style="
              background: none; border: none; font-size: 1.5rem; cursor: pointer;
              color: ${trade.risk >= i ? '#f59e0b' : '#374151'}; transition: color 150ms ease;
            ">★</button>
          `).join('')}
          <button class="btn btn-ghost btn-sm" id="risk-clear" style="margin-left:0.5rem; font-size:0.75rem">Clear</button>
        </div>
      </div>

      <!-- Strategy -->
      <div class="form-group">
        <label class="form-label">Strategy</label>
        <select id="edit-strategy" class="input">
          <option value="">— Selectează —</option>
          ${strategies.map(s => `<option value="${s}" ${trade.strategy === s ? 'selected' : ''}>${s}</option>`).join('')}
        </select>
      </div>

      <!-- MAE / MFE -->
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">MAE%</label>
          <input type="number" step="0.01" id="edit-mae" class="input" value="${trade.mae != null ? trade.mae : ''}" placeholder="ex: -2.5" />
        </div>
        <div class="form-group">
          <label class="form-label">MFE%</label>
          <input type="number" step="0.01" id="edit-mfe" class="input" value="${trade.mfe != null ? trade.mfe : ''}" placeholder="ex: 5.0" />
        </div>
      </div>

      <!-- Notes -->
      <div class="form-group">
        <label class="form-label">Notes</label>
        <textarea id="edit-notes" class="input" rows="3" placeholder="Ce ai gândit? Ce ai observat?">${trade.notes || ''}</textarea>
      </div>

      <!-- Tags -->
      <div class="form-group">
        <label class="form-label">Tag-uri</label>
        <div class="tag-selector" id="tag-selector">
          ${availableTags.map(tag => `
            <button class="tag-toggle-btn ${currentTags.includes(tag) ? 'active' : ''}" data-tag="${tag}" style="
              display: inline-block; padding: 0.25rem 0.6rem; border-radius: var(--radius-sm);
              border: 1px solid ${currentTags.includes(tag) ? 'var(--accent-primary)' : 'var(--border-subtle)'};
              background: ${currentTags.includes(tag) ? 'var(--accent-glow)' : 'transparent'};
              color: ${currentTags.includes(tag) ? 'var(--accent-primary)' : 'var(--text-secondary)'};
              cursor: pointer; font-size: 0.8rem; margin: 0.15rem; transition: all 150ms ease;
            ">${tag}</button>
          `).join('')}
        </div>
      </div>

      <!-- Images -->
      <div class="form-group">
        <label class="form-label">Screenshots</label>
        <div id="edit-image-gallery" class="image-gallery" style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.5rem;"></div>
        <label class="btn btn-secondary btn-sm" style="cursor:pointer; display:inline-flex; align-items: center; gap: 0.35rem;">
          📷 Add Image
          <input type="file" accept="image/*" id="edit-image-upload" style="display:none" multiple />
        </label>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-danger btn-sm" id="modal-delete">🗑️ Delete</button>
      <div style="flex:1"></div>
      <button class="btn btn-ghost" id="modal-cancel">Cancel</button>
      <button class="btn btn-primary" id="modal-save">💾 Save</button>
    </div>
  `;
  }

  // State
  let currentRisk = trade.risk || 0;
  let currentTags = [...(trade.tags || [])];
  let currentImages = [...(trade.images || [])];
  let newImageFiles = [];

  // Initial render
  renderEditor();
  modalOverlay.classList.remove('hidden');

  // Load existing images
  loadExistingImages(currentImages);

  // --- Bind Events ---
  bindEvents();

  function bindEvents() {
    const closeModal = () => { modalOverlay.classList.add('hidden'); };
    modalContainer.querySelector('#modal-close').addEventListener('click', closeModal);
    modalContainer.querySelector('#modal-cancel').addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });

    // Delete
    modalContainer.querySelector('#modal-delete').addEventListener('click', () => {
      if (confirm(`Sigur vrei să ștergi trade-ul ${trade.coin} ${trade.direction}?`)) {
        if (onDelete) onDelete(trade.id);
        closeModal();
      }
    });

    // Add Entry leg
    modalContainer.querySelector('#btn-add-entry')?.addEventListener('click', () => {
      const computed = computeFromLegs(currentLegs);
      const lastEntry = currentLegs.filter(l => l.type === 'entry').at(-1);
      const newLeg = {
        type: 'entry',
        time: new Date().toISOString(),
        price: lastEntry?.price || 0,
        size: 0,
        fee: 0,
      };
      showLegPrompt('entry', newLeg, computed);
    });

    // Add Exit leg
    modalContainer.querySelector('#btn-add-exit')?.addEventListener('click', () => {
      const computed = computeFromLegs(currentLegs);
      if (computed.remainingSize <= 0) return;
      const newLeg = {
        type: 'exit',
        time: new Date().toISOString(),
        price: 0,
        size: computed.remainingSize,
        fee: 0,
        pnl: 0,
      };
      showLegPrompt('exit', newLeg, computed);
    });

    // Remove leg
    modalContainer.querySelectorAll('.leg-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.type;
        const idx = parseInt(btn.dataset.idx);
        const legs = currentLegs.filter(l => l.type === type);
        const legToRemove = legs[idx];
        if (legToRemove) {
          currentLegs = currentLegs.filter(l => l !== legToRemove);
          currentLegs = recalcLegsPnl(currentLegs, modalContainer.querySelector('#edit-direction').value);
          refreshLegs();
        }
      });
    });

    // Risk stars
    modalContainer.querySelectorAll('.risk-star-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentRisk = parseInt(btn.dataset.risk);
        modalContainer.querySelectorAll('.risk-star-btn').forEach(b => {
          const r = parseInt(b.dataset.risk);
          b.style.color = r <= currentRisk ? '#f59e0b' : '#374151';
          b.classList.toggle('active', r <= currentRisk);
        });
      });
    });
    modalContainer.querySelector('#risk-clear')?.addEventListener('click', () => {
      currentRisk = 0;
      modalContainer.querySelectorAll('.risk-star-btn').forEach(b => {
        b.style.color = '#374151';
        b.classList.remove('active');
      });
    });

    // Tags
    modalContainer.querySelectorAll('.tag-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tag = btn.dataset.tag;
        if (currentTags.includes(tag)) {
          currentTags = currentTags.filter(t => t !== tag);
          btn.style.border = '1px solid var(--border-subtle)';
          btn.style.background = 'transparent';
          btn.style.color = 'var(--text-secondary)';
          btn.classList.remove('active');
        } else {
          currentTags.push(tag);
          btn.style.border = '1px solid var(--accent-primary)';
          btn.style.background = 'var(--accent-glow)';
          btn.style.color = 'var(--accent-primary)';
          btn.classList.add('active');
        }
      });
    });

    // Image upload
    const uploadInput = modalContainer.querySelector('#edit-image-upload');
    if (uploadInput) {
      uploadInput.addEventListener('change', (e) => {
        Array.from(e.target.files).forEach(file => {
          const reader = new FileReader();
          reader.onload = (ev) => {
            const id = 'img_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
            newImageFiles.push({ id, dataUrl: ev.target.result });
            currentImages.push(id);
            addImageToGallery(id, ev.target.result);
          };
          reader.readAsDataURL(file);
        });
      });
    }

    // Save
    modalContainer.querySelector('#modal-save').addEventListener('click', async () => {
      for (const img of newImageFiles) {
        await saveImage(img.id, img.dataUrl);
      }

      const dir = modalContainer.querySelector('#edit-direction').value;
      const finalLegs = recalcLegsPnl(currentLegs, dir);
      const computed = computeFromLegs(finalLegs);
      const timeVal = modalContainer.querySelector('#edit-time').value;

      const updatedData = {
        time: timeVal ? new Date(timeVal).toISOString() : trade.time,
        coin: (modalContainer.querySelector('#edit-coin').value || trade.coin).toUpperCase(),
        direction: dir,
        legs: finalLegs,
        ...computed,
        exitTime: computed.status === 'Completed' ? (trade.exitTime || new Date().toISOString()) : null,
        risk: currentRisk,
        strategy: modalContainer.querySelector('#edit-strategy').value,
        notes: modalContainer.querySelector('#edit-notes').value,
        tags: currentTags,
        images: currentImages,
        mae: modalContainer.querySelector('#edit-mae').value ? parseFloat(modalContainer.querySelector('#edit-mae').value) : null,
        mfe: modalContainer.querySelector('#edit-mfe').value ? parseFloat(modalContainer.querySelector('#edit-mfe').value) : null,
      };

      onSave(trade.id, updatedData);
      modalOverlay.classList.add('hidden');
    });
  }

  function showLegPrompt(type, defaultLeg, computed) {
    const maxSize = type === 'exit' ? computed.remainingSize : 999999;
    const label = type === 'entry' ? 'Entry' : 'Exit';
    const strategies = loadStrategies();
    const overlay = document.createElement('div');
    overlay.className = 'leg-prompt-overlay';
    overlay.style.cssText = 'position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:500; display:flex; align-items:center; justify-content:center;';
    overlay.innerHTML = `
      <div style="background:var(--bg-card); border-radius:var(--radius-lg); padding:1.5rem; width:400px; max-width:90vw; border:1px solid var(--border-medium); max-height:90vh; overflow-y:auto;">
        <h4 style="margin:0 0 1rem; font-size:1rem;">➕ Add ${label}</h4>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; margin-bottom:0.75rem;">
          <div class="form-group">
            <label class="form-label">Price</label>
            <input type="number" step="0.01" class="input" id="leg-price" value="${defaultLeg.price || ''}" placeholder="Price ${label.toLowerCase()}" />
          </div>
          <div class="form-group">
            <label class="form-label">Size ${type === 'exit' ? `(max: ${maxSize})` : ''}</label>
            <input type="number" step="0.0001" class="input" id="leg-size" value="${defaultLeg.size || ''}" placeholder="Cantitate" />
          </div>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; margin-bottom:0.75rem;">
          <div class="form-group">
            <label class="form-label">Fee</label>
            <input type="number" step="0.01" class="input" id="leg-fee" value="0" placeholder="0.00" />
          </div>
          <div class="form-group">
            <label class="form-label">Data & Ora</label>
            <input type="datetime-local" class="input" id="leg-time" value="${toLocalDatetime(defaultLeg.time)}" />
          </div>
        </div>
        <hr style="border-color:var(--border-subtle); margin:0.75rem 0;" />
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; margin-bottom:0.75rem;">
          <div class="form-group">
            <label class="form-label">Strategy</label>
            <select class="input" id="leg-strategy">
              <option value="">— Selectează —</option>
              ${strategies.map(s => `<option value="${s}">${s}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Risk</label>
            <div id="leg-risk-selector" style="display:flex; gap:0.15rem; padding-top:0.3rem;">
              ${[1, 2, 3, 4, 5].map(i => `
                <button class="leg-risk-btn" data-risk="${i}" style="
                  background:none; border:none; font-size:1.2rem; cursor:pointer; padding:0;
                  color:#374151; transition:color 150ms ease;
                ">★</button>
              `).join('')}
            </div>
          </div>
        </div>
        <div class="form-group" style="margin-bottom:1rem;">
          <label class="form-label">Notes</label>
          <textarea class="input" id="leg-notes" rows="2" placeholder="Observații pentru acest leg..." style="resize:vertical;"></textarea>
        </div>
        <div style="display:flex; gap:0.5rem; justify-content:flex-end;">
          <button class="btn btn-ghost" id="leg-cancel">Cancel</button>
          <button class="btn btn-primary" id="leg-confirm">✓ Add</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    // Risk stars logic
    let legRisk = 0;
    overlay.querySelectorAll('.leg-risk-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        legRisk = parseInt(btn.dataset.risk);
        overlay.querySelectorAll('.leg-risk-btn').forEach(b => {
          b.style.color = parseInt(b.dataset.risk) <= legRisk ? '#f59e0b' : '#374151';
        });
      });
    });

    overlay.querySelector('#leg-cancel').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });

    overlay.querySelector('#leg-confirm').addEventListener('click', () => {
      const price = parseFloat(overlay.querySelector('#leg-price').value);
      const size = parseFloat(overlay.querySelector('#leg-size').value);
      const fee = parseFloat(overlay.querySelector('#leg-fee').value) || 0;
      const timeVal = overlay.querySelector('#leg-time').value;
      const strategy = overlay.querySelector('#leg-strategy').value;
      const notes = overlay.querySelector('#leg-notes').value;

      if (!price || price <= 0 || !size || size <= 0) {
        alert('Invalid price or size.');
        return;
      }
      if (type === 'exit' && size > maxSize + 0.00001) {
        alert(`Size-ul maxim de exit este ${maxSize}`);
        return;
      }

      const leg = {
        type,
        time: timeVal ? new Date(timeVal).toISOString() : new Date().toISOString(),
        price,
        size: Math.min(size, type === 'exit' ? maxSize : size),
        fee,
        strategy,
        risk: legRisk,
        notes,
        tags: [],
        images: [],
      };

      if (type === 'exit') {
        const dir = modalContainer.querySelector('#edit-direction').value;
        const avgEntry = computed.entryPrice;
        leg.pnl = dir === 'Long'
          ? (price - avgEntry) * leg.size - fee
          : (avgEntry - price) * leg.size - fee;
      }

      currentLegs.push(leg);
      currentLegs = recalcLegsPnl(currentLegs, modalContainer.querySelector('#edit-direction').value);
      overlay.remove();
      refreshLegs();
    });
  }

  function refreshLegs() {
    const container = modalContainer.querySelector('#legs-container');
    if (container) {
      container.innerHTML = renderLegsSection();
      // Rebind leg events
      container.querySelector('#btn-add-entry')?.addEventListener('click', () => {
        const computed = computeFromLegs(currentLegs);
        const lastEntry = currentLegs.filter(l => l.type === 'entry').at(-1);
        showLegPrompt('entry', { type: 'entry', time: new Date().toISOString(), price: lastEntry?.price || 0, size: 0, fee: 0 }, computed);
      });
      container.querySelector('#btn-add-exit')?.addEventListener('click', () => {
        const computed = computeFromLegs(currentLegs);
        if (computed.remainingSize <= 0) return;
        showLegPrompt('exit', { type: 'exit', time: new Date().toISOString(), price: 0, size: computed.remainingSize, fee: 0, pnl: 0 }, computed);
      });
      container.querySelectorAll('.leg-remove').forEach(btn => {
        btn.addEventListener('click', () => {
          const type = btn.dataset.type;
          const idx = parseInt(btn.dataset.idx);
          const legs = currentLegs.filter(l => l.type === type);
          const legToRemove = legs[idx];
          if (legToRemove) {
            currentLegs = currentLegs.filter(l => l !== legToRemove);
            currentLegs = recalcLegsPnl(currentLegs, modalContainer.querySelector('#edit-direction').value);
            refreshLegs();
          }
        });
      });
    }
  }

  async function loadExistingImages(imageIds) {
    const gallery = modalContainer.querySelector('#edit-image-gallery');
    if (!gallery) return;
    for (const id of imageIds) {
      const dataUrl = await loadImage(id);
      if (dataUrl) addImageToGallery(id, dataUrl);
    }
  }

  function addImageToGallery(id, dataUrl) {
    const gallery = modalContainer.querySelector('#edit-image-gallery');
    if (!gallery) return;
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.style.cssText = 'position:relative; width:64px; height:64px;';
    item.innerHTML = `
      <img src="${dataUrl}" style="width:100%; height:100%; object-fit:cover; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); cursor:pointer;" />
      <button class="gallery-item-remove" style="position:absolute; top:-6px; right:-6px; width:20px; height:20px; border-radius:50%; background:var(--color-loss); color:white; border:none; cursor:pointer; font-size:0.7rem; display:flex; align-items:center; justify-content:center;">✕</button>
    `;
    item.querySelector('img').addEventListener('click', () => {
      const lb = document.getElementById('lightbox');
      document.getElementById('lightbox-img').src = dataUrl;
      lb.classList.remove('hidden');
    });
    item.querySelector('.gallery-item-remove').addEventListener('click', (e) => {
      e.stopPropagation();
      currentImages = currentImages.filter(i => i !== id);
      newImageFiles = newImageFiles.filter(f => f.id !== id);
      item.remove();
      deleteImage(id);
    });
    gallery.appendChild(item);
  }
}
