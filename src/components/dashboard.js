// Dashboard component — KPI cards
import { computeOverallStats, formatUSD, formatPct } from '../analytics.js';

export function renderDashboard(trades, container) {
  const stats = computeOverallStats(trades);

  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2 class="page-title">Dashboard</h2>
        <p class="page-subtitle">Trading performance overview</p>
      </div>
    </div>

    ${trades.length === 0 ? renderEmptyDashboard() : renderDashboardContent(stats, trades)}
  `;
}

function renderEmptyDashboard() {
  return `
    <div class="empty-state">
      <div class="empty-state-icon">📊</div>
      <h3 class="empty-state-title">No trades imported</h3>
      <p class="empty-state-text">Import a CSV from Hyperliquid or add a manual trade to see the dashboard.</p>
    </div>
  `;
}

function renderDashboardContent(stats, trades) {
  const activeTrades = trades.filter(t => t.status === 'Active');
  const investedNow = activeTrades.reduce((sum, t) => {
    const remaining = t.remainingSize != null ? t.remainingSize : t.size;
    return sum + (t.entryPrice || 0) * remaining;
  }, 0);

  return `
    <div class="kpi-grid">
      ${kpiCard('Invested Now', '$' + investedNow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), 'neutral', `${activeTrades.length} active trades`, 'stagger-1')}
      ${kpiCard('Total P&L', formatUSD(stats.totalPnl), stats.totalPnl >= 0 ? 'profit' : 'loss', `${stats.closingTrades} closing trades`, 'stagger-2')}
      ${kpiCard('Net P&L', formatUSD(stats.netPnl), stats.netPnl >= 0 ? 'profit' : 'loss', `Fees: ${formatUSD(-stats.totalFees)}`, 'stagger-3')}
      ${kpiCard('Win Rate', formatPct(stats.winRate), stats.winRate >= 50 ? 'profit' : 'loss', `${stats.wins}W / ${stats.losses}L`, 'stagger-4')}
      ${kpiCard('Profit Factor', stats.profitFactor === Infinity ? '∞' : stats.profitFactor.toFixed(2), stats.profitFactor >= 1 ? 'profit' : 'loss', '', 'stagger-5')}
      ${kpiCard('Avg Win', formatUSD(stats.avgWin), 'profit', '', 'stagger-6')}
      ${kpiCard('Avg Loss', formatUSD(-stats.avgLoss), 'loss', '', 'stagger-7')}
      ${kpiCard('Best Trade', formatUSD(stats.bestTrade), 'profit', '', 'stagger-8')}
      ${kpiCard('Worst Trade', formatUSD(stats.worstTrade), 'loss', '', '')}
    </div>

    <!-- Charts rendered by charts.js -->
    <div class="chart-grid">
      <div class="chart-card chart-card-full animate-in">
        <div class="chart-card-title">Equity Curve</div>
        <div class="chart-wrapper"><canvas id="chart-equity"></canvas></div>
      </div>
      <div class="chart-card animate-in">
        <div class="chart-card-title">Daily P&L</div>
        <div class="chart-wrapper"><canvas id="chart-daily"></canvas></div>
      </div>
      <div class="chart-card animate-in">
        <div class="chart-card-title">P&L per Coin</div>
        <div class="chart-wrapper"><canvas id="chart-coins"></canvas></div>
      </div>
      <div class="chart-card animate-in">
        <div class="chart-card-title">P&L per Strategy</div>
        <div class="chart-wrapper"><canvas id="chart-strategies"></canvas></div>
      </div>
      <div class="chart-card animate-in">
        <div class="chart-card-title">MAE% vs MFE%</div>
        <div class="chart-wrapper"><canvas id="chart-maemfe"></canvas></div>
      </div>
    </div>
  `;
}

function kpiCard(label, value, colorClass, sub, stagger) {
  return `
    <div class="kpi-card animate-in ${stagger}">
      <div class="kpi-label">${label}</div>
      <div class="kpi-value ${colorClass}">${value}</div>
      ${sub ? `<div class="kpi-sub">${sub}</div>` : ''}
    </div>
  `;
}
