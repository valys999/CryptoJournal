// Trade Detail — editable full-page view of a single trade
import { formatUSD } from '../analytics.js';
import { loadStrategies, saveStrategies, loadTags, saveTags, saveImage, loadImage, deleteImage } from '../storage.js';

function toLocalDatetime(isoStr) {
  if (!isoStr) return '';
  const d = new Date(isoStr);
  const offset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 16);
}

export function renderPositionDetail(trade, container, onBack, onUpdate, onDelete) {
  let currentRisk = trade.risk || 0;
  let currentTags = [...(trade.tags || [])];

  function render() {
    const strategies = loadStrategies();
    const availableTags = loadTags();
    container.innerHTML = `
    <div class="page-header" style="margin-bottom:1.5rem;">
      <div style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap;">
        <button class="btn btn-ghost btn-sm" id="btn-back">← Back</button>
        <div style="flex:1">
          <h2 class="page-title" style="display:flex; align-items:center; gap:0.5rem;">
            ${trade.coin} ${trade.direction}
            <span class="status-badge ${trade.status === 'Active' ? 'status-active' : 'status-completed'}" style="font-size:0.75rem;">
              ${trade.status === 'Active' ? '<span class="status-dot"></span> Active' : '✓ Completed'}
            </span>
          </h2>
        </div>
        <span id="autosave-status" style="font-size:0.75rem; color:var(--text-muted); display:flex; align-items:center; gap:0.25rem;">✅ Saved</span>
      </div>
    </div>

    <!-- Trade Data -->
    <div class="card" style="margin-bottom:1.5rem; padding:1.25rem;">
      <h3 style="margin:0 0 1rem; font-size:1rem;">📊 Trade Data</h3>
      <div class="detail-grid">
        <div class="form-group">
          <label class="form-label">Coin</label>
          <input type="text" id="ed-coin" class="input" value="${trade.coin}" />
        </div>
        <div class="form-group">
          <label class="form-label">Direction</label>
          <select id="ed-direction" class="input">
            <option value="Long" ${trade.direction === 'Long' ? 'selected' : ''}>Long</option>
            <option value="Short" ${trade.direction === 'Short' ? 'selected' : ''}>Short</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Entry Price</label>
          <input type="number" step="0.01" id="ed-entry" class="input" value="${trade.entryPrice || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">Exit Price</label>
          <input type="number" step="0.01" id="ed-exit" class="input" value="${trade.exitPrice || ''}" placeholder="— active —" />
        </div>
        <div class="form-group">
          <label class="form-label">Size</label>
          <input type="number" step="0.0001" id="ed-size" class="input" value="${trade.size || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">Fee</label>
          <input type="number" step="0.01" id="ed-fee" class="input" value="${trade.fee || 0}" />
        </div>
        <div class="form-group">
          <label class="form-label">Data Deschidere</label>
          <input type="datetime-local" id="ed-time" class="input" value="${toLocalDatetime(trade.time)}" />
        </div>
        <div class="form-group">
          <label class="form-label">Data Închidere</label>
          <input type="datetime-local" id="ed-exit-time" class="input" value="${toLocalDatetime(trade.exitTime)}" />
        </div>
      </div>
      <div id="pnl-preview" style="margin-top:0.75rem; padding:0.75rem; background:var(--bg-surface); border-radius:var(--radius-md); display:flex; align-items:center; gap:0.5rem;">
        <span class="form-label" style="font-size:0.7rem; margin:0;">CALCULATED P&L</span>
        <strong id="pnl-value" style="font-size:1.1rem;">—</strong>
      </div>
    </div>

    <div class="card" style="margin-bottom:1.5rem; padding:1.25rem;">
      <h3 style="margin:0 0 1rem; font-size:1rem;">📝 Annotations</h3>
      <div class="detail-grid">
        <div class="form-group">
          <label class="form-label">Risk Level</label>
          <div id="risk-selector" style="display:flex; align-items:center; gap:4px; padding:0.5rem 0;">
            ${[1, 2, 3, 4, 5].map(i => `
              <button class="risk-star-btn" data-risk="${i}" style="
                background:none; border:none; font-size:1.5rem; cursor:pointer; padding:0;
                color:${currentRisk >= i ? '#f59e0b' : '#374151'}; transition:color 150ms ease;
              ">★</button>
            `).join('')}
            <button class="btn btn-ghost btn-sm" id="risk-clear" style="margin-left:0.5rem; font-size:0.7rem; padding:0.15rem 0.4rem;">✕</button>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Strategy</label>
          <select id="ed-strategy" class="input">
            <option value="">— None —</option>
            ${strategies.map(s => `<option value="${s}" ${trade.strategy === s ? 'selected' : ''}>${s}</option>`).join('')}
            ${trade.strategy && !strategies.includes(trade.strategy) ? `<option value="${trade.strategy}" selected>${trade.strategy}</option>` : ''}
          </select>
          <div style="display:flex; gap:0.35rem; align-items:center; margin-top:0.4rem;">
            <input type="text" id="new-strategy-input" class="input" placeholder="New strategy..." style="flex:1; padding:0.4rem 0.6rem; font-size:0.85rem;" />
            <button class="btn btn-secondary btn-sm" id="btn-add-strategy" style="padding:0.4rem 0.65rem; font-size:0.8rem; white-space:nowrap;">+ Add</button>
            <button class="btn btn-danger btn-sm" id="btn-delete-strategy" style="padding:0.4rem 0.65rem; font-size:0.8rem;">🗑️</button>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">MAE%</label>
          <input type="number" step="0.01" id="ed-mae" class="input" value="${trade.mae != null ? trade.mae : ''}" placeholder="-2.5" />
        </div>
        <div class="form-group">
          <label class="form-label">MFE%</label>
          <input type="number" step="0.01" id="ed-mfe" class="input" value="${trade.mfe != null ? trade.mfe : ''}" placeholder="5.0" />
        </div>
      </div>

      <!-- Tags -->
      <div class="form-group" style="margin-top:0.5rem;">
        <label class="form-label">Tags</label>
        <div id="tag-selector" style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:0.5rem;">
          ${availableTags.map(tag => `
            <span style="display:inline-flex; align-items:center;">
              <button class="tag-toggle-btn ${currentTags.includes(tag) ? 'active' : ''}" data-tag="${tag}" style="
                display:inline-block; padding:0.4rem 0.65rem; border-radius:var(--radius-sm) 0 0 var(--radius-sm);
                border:1px solid ${currentTags.includes(tag) ? 'var(--accent-primary)' : 'var(--border-subtle)'};
                border-right:none;
                background:${currentTags.includes(tag) ? 'var(--accent-glow)' : 'transparent'};
                color:${currentTags.includes(tag) ? 'var(--accent-primary)' : 'var(--text-secondary)'};
                cursor:pointer; font-size:0.85rem; transition:all 150ms ease;
              ">${tag}</button><button class="tag-delete-btn" data-tag="${tag}" title="Remove from list" style="
                padding:0.4rem 0.4rem; border-radius:0 var(--radius-sm) var(--radius-sm) 0;
                border:1px solid ${currentTags.includes(tag) ? 'var(--accent-primary)' : 'var(--border-subtle)'};
                background:${currentTags.includes(tag) ? 'var(--accent-glow)' : 'transparent'};
                color:var(--text-muted); cursor:pointer; font-size:0.7rem; transition:all 150ms ease;
              ">✕</button>
            </span>
          `).join('')}
        </div>
        <div style="display:flex; gap:0.4rem; align-items:center;">
          <input type="text" id="new-tag-input" class="input" placeholder="New tag..." style="max-width:200px; padding:0.4rem 0.6rem; font-size:0.85rem;" />
          <button class="btn btn-secondary btn-sm" id="btn-add-tag" style="padding:0.4rem 0.65rem; font-size:0.8rem;">+ Add</button>
        </div>
      </div>
    </div>

    <!-- Notes -->
    <div class="card" style="margin-bottom:1.5rem; padding:1.25rem;">
      <h3 style="margin:0 0 0.75rem; font-size:1rem;">📋 Notes</h3>
      <textarea id="ed-notes" class="input" rows="4" placeholder="Adaugă notițe despre trade..." style="width:100%; resize:vertical; font-size:0.85rem;">${trade.notes || ''}</textarea>
    </div>

    <!-- Images -->
    <div class="card" style="margin-bottom:1.5rem; padding:1.25rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
        <h3 style="margin:0; font-size:1rem;">📷 Screenshots (${(trade.images || []).length})</h3>
        <label class="btn btn-secondary btn-sm" style="cursor:pointer; display:inline-flex; align-items:center; gap:0.35rem;">
          📷 Add Image
          <input type="file" accept="image/*" id="detail-image-upload" style="display:none" multiple />
        </label>
      </div>
      <div id="trade-gallery" style="display:flex; flex-wrap:wrap; gap:0.5rem;"></div>
      ${(trade.images || []).length === 0 ? '<p class="text-muted" style="font-size:0.85rem; margin:0;">No screenshots yet.</p>' : ''}
    </div>

    <!-- Actions -->
    <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
      <button class="btn btn-ghost btn-sm" id="btn-back-bottom">← Back to Trades</button>
      <div style="flex:1"></div>
      <button class="btn btn-danger btn-sm" id="btn-delete-trade">🗑️ Delete</button>
    </div>
    `;

    bindEvents();
    loadImages();
    updatePnlPreview();
  }

  function updatePnlPreview() {
    const entry = parseFloat(container.querySelector('#ed-entry')?.value) || 0;
    const exit = parseFloat(container.querySelector('#ed-exit')?.value) || 0;
    const size = parseFloat(container.querySelector('#ed-size')?.value) || 0;
    const fee = parseFloat(container.querySelector('#ed-fee')?.value) || 0;
    const dir = container.querySelector('#ed-direction')?.value || 'Long';
    const el = container.querySelector('#pnl-value');
    if (!el) return;

    if (exit > 0 && entry > 0 && size > 0) {
      const pnl = dir === 'Long' ? (exit - entry) * size - fee : (entry - exit) * size - fee;
      el.style.color = pnl >= 0 ? 'var(--color-profit)' : 'var(--color-loss)';
      el.textContent = (pnl >= 0 ? '+' : '') + '$' + Math.abs(pnl).toFixed(2);
    } else {
      el.style.color = 'var(--text-muted)';
      el.textContent = '—';
    }
  }

  function collectAndSave() {
    const dir = container.querySelector('#ed-direction').value;
    const entryPrice = parseFloat(container.querySelector('#ed-entry').value) || 0;
    const exitVal = container.querySelector('#ed-exit').value;
    const exitPrice = exitVal && parseFloat(exitVal) > 0 ? parseFloat(exitVal) : null;
    const size = parseFloat(container.querySelector('#ed-size').value) || 0;
    const fee = parseFloat(container.querySelector('#ed-fee').value) || 0;
    const timeVal = container.querySelector('#ed-time').value;
    const exitTimeVal = container.querySelector('#ed-exit-time').value;

    let closedPnl = 0;
    if (exitPrice && entryPrice && size) {
      closedPnl = dir === 'Long' ? (exitPrice - entryPrice) * size - fee : (entryPrice - exitPrice) * size - fee;
    }

    const updatedData = {
      coin: (container.querySelector('#ed-coin').value || trade.coin).toUpperCase(),
      direction: dir,
      time: timeVal ? new Date(timeVal).toISOString() : trade.time,
      exitTime: exitPrice ? (exitTimeVal ? new Date(exitTimeVal).toISOString() : trade.exitTime || new Date().toISOString()) : null,
      entryPrice, exitPrice, size, fee, closedPnl,
      notional: entryPrice * size,
      status: exitPrice ? 'Completed' : 'Active',
      risk: currentRisk,
      strategy: container.querySelector('#ed-strategy').value,
      mae: container.querySelector('#ed-mae').value ? parseFloat(container.querySelector('#ed-mae').value) : null,
      mfe: container.querySelector('#ed-mfe').value ? parseFloat(container.querySelector('#ed-mfe').value) : null,
      notes: container.querySelector('#ed-notes').value,
      tags: currentTags,
      images: trade.images || [],
    };

    Object.assign(trade, updatedData);
    onUpdate(trade.id, updatedData);

    // Auto-persist new strategy if it's not in the list
    const strategyVal = updatedData.strategy;
    if (strategyVal) {
      const existing = loadStrategies();
      if (!existing.includes(strategyVal)) {
        existing.push(strategyVal);
        saveStrategies(existing);
      }
    }
    return updatedData;
  }

  // Debounced auto-save
  let saveTimer = null;
  function triggerAutoSave() {
    const status = container.querySelector('#autosave-status');
    if (status) { status.textContent = '⏳ Saving...'; status.style.color = 'var(--accent-primary)'; }
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      collectAndSave();
      if (status) { status.textContent = '✅ Saved'; status.style.color = 'var(--text-muted)'; }
    }, 800);
  }

  function bindEvents() {
    container.querySelector('#btn-back')?.addEventListener('click', onBack);
    container.querySelector('#btn-back-bottom')?.addEventListener('click', onBack);

    // Manual save still works
    container.querySelector('#btn-save-all')?.addEventListener('click', () => {
      clearTimeout(saveTimer);
      collectAndSave();
      const status = container.querySelector('#autosave-status');
      if (status) { status.textContent = '✅ Saved!'; status.style.color = 'var(--text-muted)'; }
    });

    // Delete
    container.querySelector('#btn-delete-trade')?.addEventListener('click', () => {
      if (confirm(`Sigur vrei să ștergi trade-ul ${trade.coin} ${trade.direction}?`)) {
        onDelete(trade.id);
        onBack();
      }
    });

    // Live P&L preview + auto-save on all trade fields
    ['#ed-coin', '#ed-entry', '#ed-exit', '#ed-size', '#ed-fee', '#ed-direction', '#ed-time', '#ed-exit-time', '#ed-strategy', '#ed-mae', '#ed-mfe', '#ed-notes'].forEach(sel => {
      container.querySelector(sel)?.addEventListener('input', () => { updatePnlPreview(); triggerAutoSave(); });
      container.querySelector(sel)?.addEventListener('change', () => { updatePnlPreview(); triggerAutoSave(); });
    });

    // Risk stars
    container.querySelectorAll('.risk-star-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentRisk = parseInt(btn.dataset.risk);
        container.querySelectorAll('.risk-star-btn').forEach(b => {
          b.style.color = parseInt(b.dataset.risk) <= currentRisk ? '#f59e0b' : '#374151';
        });
        triggerAutoSave();
      });
    });
    container.querySelector('#risk-clear')?.addEventListener('click', () => {
      currentRisk = 0;
      container.querySelectorAll('.risk-star-btn').forEach(b => { b.style.color = '#374151'; });
      triggerAutoSave();
    });

    // Add new strategy
    const addStrategy = () => {
      const input = container.querySelector('#new-strategy-input');
      const val = (input.value || '').trim();
      if (!val) return;
      const existing = loadStrategies();
      if (!existing.includes(val)) {
        existing.push(val);
        saveStrategies(existing);
      }
      trade.strategy = val;
      render();
    };
    container.querySelector('#btn-add-strategy')?.addEventListener('click', addStrategy);
    container.querySelector('#new-strategy-input')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); addStrategy(); }
    });

    // Delete selected strategy from global list
    container.querySelector('#btn-delete-strategy')?.addEventListener('click', () => {
      const selected = container.querySelector('#ed-strategy').value;
      if (!selected) return;
      const existing = loadStrategies().filter(s => s !== selected);
      saveStrategies(existing);
      trade.strategy = '';
      render();
    });

    // Tags toggle
    container.querySelectorAll('.tag-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tag = btn.dataset.tag;
        if (currentTags.includes(tag)) {
          currentTags = currentTags.filter(t => t !== tag);
        } else {
          currentTags.push(tag);
        }
        triggerAutoSave();
        render();
      });
    });

    // Tags delete (from global list only, NOT from trade)
    container.querySelectorAll('.tag-delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const tag = btn.dataset.tag;
        const allTags = loadTags().filter(t => t !== tag);
        saveTags(allTags);
        render(); // re-render — tag disappears from suggestions but stays in currentTags
      });
    });

    // Add new tag
    const addTag = () => {
      const input = container.querySelector('#new-tag-input');
      const val = (input.value || '').trim();
      if (!val) return;
      // Save to global tags list
      const allTags = loadTags();
      if (!allTags.includes(val)) {
        allTags.push(val);
        saveTags(allTags);
      }
      // Toggle it active
      if (!currentTags.includes(val)) currentTags.push(val);
      render(); // re-render to show new tag button
    };
    container.querySelector('#btn-add-tag')?.addEventListener('click', addTag);
    container.querySelector('#new-tag-input')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); addTag(); }
    });
  }

  async function loadImages() {
    const gallery = container.querySelector('#trade-gallery');
    if (!gallery) return;
    const loadedUrls = [];

    for (const imgId of (trade.images || [])) {
      const dataUrl = await loadImage(imgId);
      if (dataUrl) {
        const idx = loadedUrls.length;
        loadedUrls.push(dataUrl);
        const item = document.createElement('div');
        item.style.cssText = 'position:relative; width:80px; height:80px;';
        item.innerHTML = `
          <img src="${dataUrl}" style="width:100%; height:100%; object-fit:cover; border-radius:6px; border:1px solid var(--border-subtle); cursor:pointer;" />
          <button class="img-delete-btn" data-img-id="${imgId}" style="position:absolute; top:-6px; right:-6px; width:20px; height:20px; border-radius:50%; background:var(--color-loss); color:white; border:none; cursor:pointer; font-size:0.65rem; display:flex; align-items:center; justify-content:center;">✕</button>
        `;
        item.querySelector('img').addEventListener('click', () => {
          if (window.openLightbox) window.openLightbox(loadedUrls, idx);
        });
        item.querySelector('.img-delete-btn').addEventListener('click', async (e) => {
          e.stopPropagation();
          const id = e.currentTarget.dataset.imgId;
          await deleteImage(id);
          trade.images = (trade.images || []).filter(i => i !== id);
          onUpdate(trade.id, { images: trade.images });
          render();
        });
        gallery.appendChild(item);
      }
    }

    // Bind upload
    const uploadInput = container.querySelector('#detail-image-upload');
    if (uploadInput) {
      uploadInput.addEventListener('change', (e) => {
        Array.from(e.target.files).forEach(file => {
          const reader = new FileReader();
          reader.onload = async (ev) => {
            const id = 'img_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
            await saveImage(id, ev.target.result);
            if (!trade.images) trade.images = [];
            trade.images.push(id);
            onUpdate(trade.id, { images: trade.images });
            render();
          };
          reader.readAsDataURL(file);
        });
      });
    }
  }

  // Initial render
  render();
}
