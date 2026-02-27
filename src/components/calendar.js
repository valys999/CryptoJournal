// Calendar heatmap component
import { calendarData, formatUSD } from '../analytics.js';

export function renderCalendar(trades, container) {
  const data = calendarData(trades);

  if (trades.length === 0) {
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h2 class="page-title">Calendar</h2>
          <p class="page-subtitle">Daily P&L Heatmap</p>
        </div>
      </div>
      <div class="empty-state">
        <div class="empty-state-icon">📅</div>
        <h3 class="empty-state-title">No trades</h3>
        <p class="empty-state-text">Import trades to see the P&L calendar.</p>
      </div>
    `;
    return;
  }

  // Find date range
  const dates = Object.keys(data).sort();
  const startDate = new Date(dates[0]);
  const endDate = new Date(dates[dates.length - 1]);

  // Get all P&L values for scaling
  const pnlValues = Object.values(data).map(d => Math.abs(d.pnl));
  const maxPnl = Math.max(...pnlValues, 1);

  // Generate months
  const months = [];
  const current = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
  while (current <= endDate) {
    months.push(new Date(current));
    current.setMonth(current.getMonth() + 1);
  }

  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2 class="page-title">Calendar</h2>
        <p class="page-subtitle">Daily P&L Heatmap — ${dates.length} active days</p>
      </div>
    </div>
    <div class="card">
      ${months.map(m => renderMonth(m, data, maxPnl)).join('')}
    </div>
  `;

  // Click handler for day cells
  container.querySelectorAll('.calendar-cell.has-data').forEach(cell => {
    cell.style.cursor = 'pointer';
    cell.addEventListener('click', () => {
      const dateStr = cell.dataset.date;
      if (dateStr) showDayDetail(dateStr, trades, container);
    });
  });
}

function renderMonth(monthDate, data, maxPnl) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const monthName = monthDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDow = (firstDay.getDay() + 6) % 7; // Monday = 0

  const days = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su'];

  let cells = '';

  // Day headers
  cells += days.map(d => `<div class="calendar-header-cell">${d}</div>`).join('');

  // Empty cells before first day
  for (let i = 0; i < startDow; i++) {
    cells += '<div class="calendar-cell empty"></div>';
  }

  // Day cells
  for (let d = 1; d <= lastDay.getDate(); d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const dayData = data[dateStr];

    if (dayData) {
      const intensity = getIntensity(dayData.pnl, maxPnl);
      const colorClass = dayData.pnl >= 0 ? `cal-profit-${intensity}` : `cal-loss-${intensity}`;
      cells += `
        <div class="calendar-cell has-data ${colorClass}" data-date="${dateStr}" title="${dateStr}: ${formatUSD(dayData.pnl)} (${dayData.trades} trades)">
          <span class="calendar-day">${d}</span>
          <span class="calendar-pnl ${dayData.pnl >= 0 ? 'text-profit' : 'text-loss'}">${shortPnl(dayData.pnl)}</span>
        </div>
      `;
    } else {
      cells += `
        <div class="calendar-cell">
          <span class="calendar-day">${d}</span>
        </div>
      `;
    }
  }

  return `
    <div class="calendar-month-header">${monthName}</div>
    <div class="calendar-grid">${cells}</div>
  `;
}

function showDayDetail(dateStr, trades, container) {
  // Find trades that had activity on this day
  const dayTrades = trades.filter(t => {
    if (t.time && t.time.slice(0, 10) === dateStr) return true;
    if (t.exitTime && t.exitTime.slice(0, 10) === dateStr) return true;
    return false;
  });

  // Build per-trade rows
  const rows = [];
  dayTrades.forEach(t => {
    const pnlClass = t.closedPnl > 0 ? 'cell-profit' : t.closedPnl < 0 ? 'cell-loss' : '';
    const dirClass = t.direction === 'Long' ? 'long' : 'short';
    const isCompleted = t.status === 'Completed';
    rows.push(`
      <tr>
        <td>${new Date(t.time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</td>
        <td class="cell-coin">${t.coin}</td>
        <td><span class="cell-dir ${dirClass}">${t.direction}</span></td>
        <td><span class="status-badge ${isCompleted ? 'status-completed' : 'status-active'}" style="font-size:0.7rem">${isCompleted ? '✓ Completed' : 'Active'}</span></td>
        <td>$${(t.entryPrice || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
        <td>${t.size}</td>
        <td class="${pnlClass}" style="font-weight:600">${isCompleted ? formatUSD(t.closedPnl) : '<span class="text-muted">—</span>'}</td>
        <td>${t.strategy ? `<span class="strategy-badge">${t.strategy}</span>` : ''}</td>
      </tr>
    `);
  });

  // Total P&L for the day
  const totalPnl = dayTrades.reduce((s, t) => s + (t.closedPnl || 0), 0);
  const totalClass = totalPnl >= 0 ? 'cell-profit' : 'cell-loss';

  const niceDate = new Date(dateStr).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  // Show overlay
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:500; display:flex; align-items:center; justify-content:center; padding:1rem;';
  overlay.innerHTML = `
        <div style="background:var(--bg-card); border-radius:var(--radius-lg); padding:1.5rem; width:700px; max-width:95vw; border:1px solid var(--border-medium); max-height:85vh; overflow-y:auto;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                <div>
                    <h3 style="margin:0; font-size:1.1rem;">📅 ${niceDate}</h3>
                    <p style="margin:0.25rem 0 0; font-size:0.85rem; color:var(--text-muted);">${dayTrades.length} trades • Total: <strong class="${totalClass}">${formatUSD(totalPnl)}</strong></p>
                </div>
                <button id="day-detail-close" style="background:none; border:none; font-size:1.5rem; cursor:pointer; color:var(--text-secondary);">✕</button>
            </div>
            <div class="table-container">
                <table class="data-table">
                    <thead><tr>
                        <th>Ora</th>
                        <th>Coin</th>
                        <th>Dir</th>
                        <th>Status</th>
                        <th>Entry</th>
                        <th>Size</th>
                        <th>P&L</th>
                        <th>Strategy</th>
                    </tr></thead>
                    <tbody>
                        ${rows.length > 0 ? rows.join('') : '<tr><td colspan="8" style="text-align:center; padding:1.5rem; color:var(--text-muted)">No trades</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
    `;

  document.body.appendChild(overlay);
  overlay.querySelector('#day-detail-close').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
}

function getIntensity(pnl, maxPnl) {
  const ratio = Math.abs(pnl) / maxPnl;
  if (ratio < 0.15) return 1;
  if (ratio < 0.35) return 2;
  if (ratio < 0.65) return 3;
  return 4;
}

function shortPnl(val) {
  if (Math.abs(val) >= 1000) return (val >= 0 ? '+' : '') + (val / 1000).toFixed(1) + 'k';
  return (val >= 0 ? '+' : '') + val.toFixed(0);
}
