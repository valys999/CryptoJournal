// CSV Uploader component
import { parseHyperliquidCSV } from '../csvParser.js';

export function openUploader(modalOverlay, modalContainer, onImport) {
  modalContainer.innerHTML = `
    <div class="modal-header">
      <h3 class="modal-title">📥 Import CSV — Hyperliquid</h3>
      <button class="modal-close" id="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <div class="upload-zone" id="upload-zone">
        <div class="upload-zone-icon">📄</div>
        <p class="upload-zone-text">
          Drop the CSV file here or <strong>click to select</strong>
        </p>
        <p class="text-muted" style="font-size:0.8rem; margin-top:0.5rem">Accepted format: CSV export from Hyperliquid</p>
        <input type="file" id="csv-input" accept=".csv" style="display:none" />
      </div>
      <div id="upload-status" style="margin-top:1rem"></div>
      <div id="upload-preview" style="margin-top:1rem"></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost" id="modal-cancel">Cancel</button>
      <button class="btn btn-primary hidden" id="modal-import">📥 Import Trades</button>
    </div>
  `;

  modalOverlay.classList.remove('hidden');

  let parsedTrades = [];

  const closeModal = () => { modalOverlay.classList.add('hidden'); };
  modalContainer.querySelector('#modal-close').addEventListener('click', closeModal);
  modalContainer.querySelector('#modal-cancel').addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });

  const zone = modalContainer.querySelector('#upload-zone');
  const fileInput = modalContainer.querySelector('#csv-input');
  const status = modalContainer.querySelector('#upload-status');
  const preview = modalContainer.querySelector('#upload-preview');
  const importBtn = modalContainer.querySelector('#modal-import');

  zone.addEventListener('click', () => fileInput.click());
  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
  });
  fileInput.addEventListener('change', e => {
    if (e.target.files.length) handleFile(e.target.files[0]);
  });

  async function handleFile(file) {
    if (!file.name.endsWith('.csv')) {
      status.innerHTML = '<span class="text-loss">❌ File must be a .csv</span>';
      return;
    }
    status.innerHTML = '<span class="text-muted">⏳ Parsing...</span>';
    try {
      parsedTrades = await parseHyperliquidCSV(file);
      status.innerHTML = `<span class="text-profit">✅ ${parsedTrades.length} trades found</span>`;

      // Preview first 5
      const previewData = parsedTrades.slice(0, 5);
      preview.innerHTML = `
        <div style="font-size:0.8rem; color: var(--text-muted); margin-bottom:0.5rem">Preview (primele ${Math.min(5, parsedTrades.length)}):</div>
        <div class="table-container" style="max-height:200px; overflow-y:auto">
          <table class="data-table">
            <thead>
              <tr><th>Date</th><th>Coin</th><th>Dir</th><th>Price</th><th>P&L</th></tr>
            </thead>
            <tbody>
              ${previewData.map(t => `
                <tr>
                  <td>${new Date(t.time).toLocaleString('en-US')}</td>
                  <td class="cell-coin">${t.coin}</td>
                  <td><span class="cell-dir ${t.direction === 'Long' ? 'long' : 'short'}">${t.direction}</span></td>
                  <td>$${t.price.toFixed(2)}</td>
                  <td class="${t.closedPnl >= 0 ? 'cell-profit' : 'cell-loss'}">${t.closedPnl >= 0 ? '+' : ''}$${t.closedPnl.toFixed(2)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;

      importBtn.classList.remove('hidden');
    } catch (err) {
      status.innerHTML = `<span class="text-loss">❌ Eroare la parsare: ${err.message}</span>`;
      console.error(err);
    }
  }

  importBtn.addEventListener('click', () => {
    if (parsedTrades.length > 0) {
      onImport(parsedTrades);
      closeModal();
    }
  });
}
