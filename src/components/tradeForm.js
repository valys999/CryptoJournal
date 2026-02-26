// Manual trade form modal
import { loadStrategies, loadTags, saveImage } from '../storage.js';
import { createManualTrade } from '../csvParser.js';

export function openTradeForm(modalOverlay, modalContainer, onAdd) {
  const strategies = loadStrategies();
  const availableTags = loadTags();

  modalContainer.innerHTML = `
    <div class="modal-header">
      <h3 class="modal-title">➕ Add Manual Trade</h3>
      <button class="modal-close" id="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <!-- Basic info -->
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Date & Time</label>
          <input type="datetime-local" id="trade-time" class="input" value="${localDatetimeNow()}" />
        </div>
        <div class="form-group">
          <label class="form-label">Coin</label>
          <input type="text" id="trade-coin" class="input" placeholder="BTC, ETH, SOL..." />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Direction</label>
          <select id="trade-direction" class="input">
            <option value="Long">Long</option>
            <option value="Short">Short</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Size</label>
          <input type="number" step="0.0001" id="trade-size" class="input" placeholder="0.0" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Entry Price <span style="color:var(--color-profit)">*</span></label>
          <input type="number" step="0.01" id="trade-entry-price" class="input" placeholder="Entry price" />
        </div>
        <div class="form-group">
          <label class="form-label">Exit Price</label>
          <input type="number" step="0.01" id="trade-exit-price" class="input" placeholder="Exit price" />
        </div>
      </div>

      <div class="form-row-3">
        <div class="form-group">
          <label class="form-label">Fee</label>
          <input type="number" step="0.01" id="trade-fee" class="input" placeholder="0.00" />
        </div>
        <div class="form-group">
          <label class="form-label">P&L (Closed)</label>
          <input type="number" step="0.01" id="trade-pnl" class="input" placeholder="0.00" />
        </div>
        <div class="form-group">
          <label class="form-label">Value <span class="text-muted">(auto)</span></label>
          <input type="number" step="0.01" id="trade-notional" class="input" placeholder="auto" />
        </div>
      </div>

      <hr style="border-color: var(--border-subtle); margin: 1.25rem 0;" />

      <!-- Annotations -->
      <div class="form-group">
        <label class="form-label">Risk Level</label>
        <div id="risk-selector">
          ${[1, 2, 3, 4, 5].map(i => `
            <button class="risk-star-btn" data-risk="${i}" style="
              background: none; border: none; font-size: 1.5rem; cursor: pointer;
              color: #374151; transition: color 150ms ease;
            ">★</button>
          `).join('')}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Strategy</label>
        <select id="trade-strategy" class="input">
          <option value="">— Select —</option>
          ${strategies.map(s => `<option value="${s}">${s}</option>`).join('')}
        </select>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">MAE%</label>
          <input type="number" step="0.01" id="trade-mae" class="input" placeholder="ex: -2.5" />
        </div>
        <div class="form-group">
          <label class="form-label">MFE%</label>
          <input type="number" step="0.01" id="trade-mfe" class="input" placeholder="ex: 5.3" />
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Tags</label>
        <div id="tags-container" style="display:flex; flex-wrap:wrap; gap:0.5rem;">
          ${availableTags.map(tag => `
            <button class="tag-toggle-btn" data-tag="${tag}" style="
              padding: 0.3rem 0.7rem; border-radius: var(--radius-sm); border: 1px solid var(--border-medium);
              background: transparent; color: var(--text-secondary); font-size: 0.8rem;
              cursor: pointer; font-family: inherit; transition: all 150ms ease;
            ">${tag}</button>
          `).join('')}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Notes</label>
        <textarea id="trade-notes" class="input" rows="3" placeholder="Observations, reasoning..."></textarea>
      </div>

      <div class="form-group">
        <label class="form-label">Screenshots</label>
        <div id="trade-img-gallery" style="display:flex; flex-wrap:wrap; gap:0.35rem; margin-bottom:0.5rem;"></div>
        <label class="btn btn-secondary btn-sm" style="cursor:pointer; display:inline-flex; align-items:center; gap:0.35rem;">📷 Add photos<input type="file" accept="image/*" id="trade-img-upload" style="display:none" multiple /></label>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost" id="modal-cancel">Cancel</button>
      <button class="btn btn-primary" id="modal-save">➕ Add Trade</button>
    </div>
  `;

  modalOverlay.classList.remove('hidden');

  let currentRisk = 0;
  let currentTags = [];
  let newImageFiles = [];

  // Image upload
  modalContainer.querySelector('#trade-img-upload').addEventListener('change', (e) => {
    const gallery = modalContainer.querySelector('#trade-img-gallery');
    Array.from(e.target.files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const id = 'img_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
        newImageFiles.push({ id, dataUrl: ev.target.result });
        const thumb = document.createElement('img');
        thumb.src = ev.target.result;
        thumb.style.cssText = 'width:48px;height:48px;object-fit:cover;border-radius:4px;border:1px solid var(--border-subtle);';
        gallery.appendChild(thumb);
      };
      reader.readAsDataURL(file);
    });
  });

  // Close
  const closeModal = () => { modalOverlay.classList.add('hidden'); };
  modalContainer.querySelector('#modal-close').addEventListener('click', closeModal);
  modalContainer.querySelector('#modal-cancel').addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });

  // Auto-calc notional + P&L
  const entryPriceEl = modalContainer.querySelector('#trade-entry-price');
  const exitPriceEl = modalContainer.querySelector('#trade-exit-price');
  const sizeEl = modalContainer.querySelector('#trade-size');
  const ntlEl = modalContainer.querySelector('#trade-notional');
  const feeEl = modalContainer.querySelector('#trade-fee');
  const dirEl = modalContainer.querySelector('#trade-direction');
  const pnlEl = modalContainer.querySelector('#trade-pnl');

  function autoCalc() {
    const entry = parseFloat(entryPriceEl.value) || 0;
    const exit = parseFloat(exitPriceEl.value) || 0;
    const size = parseFloat(sizeEl.value) || 0;
    const fee = parseFloat(feeEl.value) || 0;
    // Auto-calc notional
    if (entry && size && !ntlEl.value) ntlEl.placeholder = (entry * size).toFixed(2);
    // Auto-calc P&L
    if (entry > 0 && exit > 0 && size > 0) {
      const dir = dirEl.value;
      const rawPnl = dir === 'Long'
        ? (exit - entry) * size
        : (entry - exit) * size;
      pnlEl.value = (rawPnl - fee).toFixed(2);
    }
  }

  entryPriceEl.addEventListener('input', autoCalc);
  exitPriceEl.addEventListener('input', autoCalc);
  sizeEl.addEventListener('input', autoCalc);
  feeEl.addEventListener('input', autoCalc);
  dirEl.addEventListener('change', autoCalc);

  // Risk
  modalContainer.querySelectorAll('.risk-star-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentRisk = parseInt(btn.dataset.risk);
      modalContainer.querySelectorAll('.risk-star-btn').forEach(b => {
        b.style.color = parseInt(b.dataset.risk) <= currentRisk ? '#f59e0b' : '#374151';
      });
    });
  });

  // Tags
  modalContainer.querySelectorAll('.tag-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag;
      if (currentTags.includes(tag)) {
        currentTags = currentTags.filter(t => t !== tag);
        btn.style.background = 'transparent';
        btn.style.color = 'var(--text-secondary)';
        btn.style.borderColor = 'var(--border-medium)';
      } else {
        currentTags.push(tag);
        btn.style.background = 'var(--accent-glow)';
        btn.style.color = 'var(--accent-primary)';
        btn.style.borderColor = 'var(--accent-primary)';
      }
    });
  });

  // Save
  modalContainer.querySelector('#modal-save').addEventListener('click', async () => {
    const coin = modalContainer.querySelector('#trade-coin').value.trim();
    if (!coin) {
      alert('Please fill in the coin!');
      return;
    }

    // Save images first
    for (const img of newImageFiles) { await saveImage(img.id, img.dataUrl); }

    const timeVal = modalContainer.querySelector('#trade-time').value;
    const trade = createManualTrade({
      time: timeVal ? new Date(timeVal).toISOString() : new Date().toISOString(),
      coin,
      direction: modalContainer.querySelector('#trade-direction').value,
      entryPrice: modalContainer.querySelector('#trade-entry-price').value,
      exitPrice: modalContainer.querySelector('#trade-exit-price').value || null,
      size: modalContainer.querySelector('#trade-size').value,
      notional: modalContainer.querySelector('#trade-notional').value,
      fee: modalContainer.querySelector('#trade-fee').value,
      closedPnl: modalContainer.querySelector('#trade-pnl').value,
      risk: currentRisk,
      strategy: modalContainer.querySelector('#trade-strategy').value,
      notes: modalContainer.querySelector('#trade-notes').value,
      tags: currentTags,
      images: newImageFiles.map(i => i.id),
      mae: modalContainer.querySelector('#trade-mae').value || null,
      mfe: modalContainer.querySelector('#trade-mfe').value || null,
    });

    onAdd(trade);
    closeModal();
  });
}

function localDatetimeNow() {
  const d = new Date();
  const offset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 16);
}
