// Trade Editor Modal — edit all fields of a simple trade
import { loadStrategies, loadTags, saveImage, loadImage, deleteImage } from '../storage.js';

function toLocalDatetime(isoStr) {
  const d = new Date(isoStr);
  const offset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 16);
}

function fmtPrice(v) {
  return v != null ? '$' + v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '—';
}

export function openTradeEditor(trade, modalOverlay, modalContainer, onSave, onDelete) {
  const strategies = loadStrategies();
  const availableTags = loadTags();
  const direction = trade.direction || 'Long';

  // State
  let currentRisk = trade.risk || 0;
  let currentTags = [...(trade.tags || [])];
  let currentImages = [...(trade.images || [])];
  let newImageFiles = [];

  function renderEditor() {
    const isActive = trade.status === 'Active';

    modalContainer.innerHTML = `
    <div class="modal-header">
      <h3 class="modal-title">✏️ Edit — ${trade.coin} ${trade.direction}
        <span class="status-badge ${isActive ? 'status-active' : 'status-completed'}" style="margin-left:0.5rem; font-size:0.7rem;">
          ${isActive ? '<span class="status-dot"></span> Active' : '✓ Completed'}
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

      <!-- Trade Data -->
      <h4 style="margin:0 0 0.75rem; font-size:0.9rem;">📊 Trade Data</h4>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Entry Price</label>
          <input type="number" step="0.01" id="edit-entry-price" class="input" value="${trade.entryPrice || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">Exit Price</label>
          <input type="number" step="0.01" id="edit-exit-price" class="input" value="${trade.exitPrice || ''}" placeholder="Leave empty if active" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Size</label>
          <input type="number" step="0.0001" id="edit-size" class="input" value="${trade.size || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">Fee</label>
          <input type="number" step="0.01" id="edit-fee" class="input" value="${trade.fee || 0}" />
        </div>
        <div class="form-group">
          <label class="form-label">Data Închidere</label>
          <input type="datetime-local" id="edit-exit-time" class="input" value="${trade.exitTime ? toLocalDatetime(trade.exitTime) : ''}" />
        </div>
      </div>

      <!-- Auto-calc P&L display -->
      <div id="pnl-preview" style="padding:0.75rem; background:var(--bg-surface); border-radius:var(--radius-md); margin-bottom:1rem;">
        <span class="form-label" style="font-size:0.7rem;">CALCULATED P&L</span>
        <strong id="pnl-value" style="margin-left:0.5rem;">—</strong>
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

  // Initial render
  renderEditor();
  modalOverlay.classList.remove('hidden');

  // Load existing images
  loadExistingImages(currentImages);

  // Update P&L preview
  updatePnlPreview();

  // --- Bind Events ---
  bindEvents();

  function updatePnlPreview() {
    const entryPrice = parseFloat(modalContainer.querySelector('#edit-entry-price')?.value) || 0;
    const exitPrice = parseFloat(modalContainer.querySelector('#edit-exit-price')?.value) || 0;
    const size = parseFloat(modalContainer.querySelector('#edit-size')?.value) || 0;
    const fee = parseFloat(modalContainer.querySelector('#edit-fee')?.value) || 0;
    const dir = modalContainer.querySelector('#edit-direction')?.value || 'Long';
    const el = modalContainer.querySelector('#pnl-value');
    if (!el) return;

    if (exitPrice > 0 && entryPrice > 0 && size > 0) {
      const pnl = dir === 'Long'
        ? (exitPrice - entryPrice) * size - fee
        : (entryPrice - exitPrice) * size - fee;
      el.style.color = pnl >= 0 ? 'var(--color-profit)' : 'var(--color-loss)';
      el.textContent = (pnl >= 0 ? '+' : '') + '$' + Math.abs(pnl).toFixed(2);
    } else {
      el.style.color = 'var(--text-muted)';
      el.textContent = '—';
    }
  }

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

    // Auto-calc P&L on input change
    ['#edit-entry-price', '#edit-exit-price', '#edit-size', '#edit-fee', '#edit-direction'].forEach(sel => {
      modalContainer.querySelector(sel)?.addEventListener('input', updatePnlPreview);
      modalContainer.querySelector(sel)?.addEventListener('change', updatePnlPreview);
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
      const entryPrice = parseFloat(modalContainer.querySelector('#edit-entry-price').value) || 0;
      const exitPriceVal = modalContainer.querySelector('#edit-exit-price').value;
      const exitPrice = exitPriceVal && parseFloat(exitPriceVal) > 0 ? parseFloat(exitPriceVal) : null;
      const size = parseFloat(modalContainer.querySelector('#edit-size').value) || 0;
      const fee = parseFloat(modalContainer.querySelector('#edit-fee').value) || 0;
      const timeVal = modalContainer.querySelector('#edit-time').value;
      const exitTimeVal = modalContainer.querySelector('#edit-exit-time').value;

      // Compute P&L
      let closedPnl = 0;
      if (exitPrice && entryPrice && size) {
        closedPnl = dir === 'Long'
          ? (exitPrice - entryPrice) * size - fee
          : (entryPrice - exitPrice) * size - fee;
      }

      const updatedData = {
        time: timeVal ? new Date(timeVal).toISOString() : trade.time,
        exitTime: exitPrice ? (exitTimeVal ? new Date(exitTimeVal).toISOString() : trade.exitTime || new Date().toISOString()) : null,
        coin: (modalContainer.querySelector('#edit-coin').value || trade.coin).toUpperCase(),
        direction: dir,
        entryPrice,
        exitPrice,
        size,
        notional: entryPrice * size,
        fee,
        closedPnl,
        status: exitPrice ? 'Completed' : 'Active',
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
      if (window.openLightbox) window.openLightbox([dataUrl], 0);
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
