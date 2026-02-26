// Insights / macro analysis page
import { statsByCoin, statsByStrategy, statsByRisk, formatUSD, formatPct } from '../analytics.js';

export function renderInsights(trades, container) {
  if (trades.length === 0) {
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h2 class="page-title">Insights</h2>
          <p class="page-subtitle">Performance per strategy, risk and coin</p>
        </div>
      </div>
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <h3 class="empty-state-title">No trades to analyze</h3>
        <p class="empty-state-text">Import trades and add strategies and risk levels to see the analysis.</p>
      </div>
    `;
    return;
  }

  const byCoin = statsByCoin(trades);
  const byStrategy = statsByStrategy(trades);
  const byRisk = statsByRisk(trades);

  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2 class="page-title">Insights</h2>
        <p class="page-subtitle">Performance per strategy, risk and coin</p>
      </div>
    </div>

    <div class="insights-grid">
      <!-- Per Strategy -->
      <div class="card animate-in">
        <div class="chart-card-title">📊 Performance per Strategy</div>
        ${Object.keys(byStrategy).length === 0 ? '<p class="text-muted" style="padding:1rem">Add strategies to your trades to see the analysis.</p>' : renderStatsTable(byStrategy)}
      </div>

      <!-- Per Risk -->
      <div class="card animate-in">
        <div class="chart-card-title">⚡ Performance per Risk Level</div>
        ${Object.keys(byRisk).length === 0 ? '<p class="text-muted" style="padding:1rem">Add risk levels to your trades to see the analysis.</p>' : renderStatsTable(byRisk)}
      </div>

      <!-- Per Coin -->
      <div class="card animate-in">
        <div class="chart-card-title">🪙 Performance per Coin</div>
        ${renderStatsTable(byCoin)}
      </div>

      <!-- Top/Bottom trades -->
      <div class="card animate-in">
        <div class="chart-card-title">🏆 Top 5 Trades</div>
        ${renderTopTrades(trades, 'top')}
      </div>

      <div class="card animate-in">
        <div class="chart-card-title">💀 Worst 5 Trades</div>
        ${renderTopTrades(trades, 'bottom')}
      </div>

      <!-- Key Insights -->
      <div class="card animate-in">
        <div class="chart-card-title">💡 Insights</div>
        ${renderKeyInsights(trades, byStrategy, byRisk, byCoin)}
      </div>
    </div>
  `;
}

function renderStatsTable(groupedStats) {
  const entries = Object.entries(groupedStats);
  if (entries.length === 0) return '<p class="text-muted">No data.</p>';

  return `
    <table class="insight-table">
      <thead>
        <tr>
          <th>Group</th>
          <th>Trades</th>
          <th>P&L</th>
          <th>Win Rate</th>
          <th>Profit Factor</th>
          <th>Avg Win</th>
          <th>Avg Loss</th>
        </tr>
      </thead>
      <tbody>
        ${entries.map(([key, s]) => `
          <tr>
            <td class="fw-bold">${key}</td>
            <td>${s.closingTrades}</td>
            <td class="${s.totalPnl >= 0 ? 'text-profit' : 'text-loss'} fw-bold">${formatUSD(s.totalPnl)}</td>
            <td class="${s.winRate >= 50 ? 'text-profit' : 'text-loss'}">${formatPct(s.winRate)}</td>
            <td>${s.profitFactor === Infinity ? '∞' : s.profitFactor.toFixed(2)}</td>
            <td class="text-profit">${formatUSD(s.avgWin)}</td>
            <td class="text-loss">${formatUSD(-s.avgLoss)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderTopTrades(trades, mode) {
  const closing = trades.filter(t => t.closedPnl !== 0 || t.action === 'Close');
  const sorted = [...closing].sort((a, b) => mode === 'top' ? b.closedPnl - a.closedPnl : a.closedPnl - b.closedPnl);
  const top = sorted.slice(0, 5);

  return `
    <table class="insight-table">
      <thead>
        <tr><th>Date</th><th>Coin</th><th>Dir</th><th>P&L</th><th>Strategy</th></tr>
      </thead>
      <tbody>
        ${top.map(t => `
          <tr>
            <td>${new Date(t.time).toLocaleDateString('en-US')}</td>
            <td class="cell-coin">${t.coin}</td>
            <td><span class="cell-dir ${t.direction === 'Long' ? 'long' : 'short'}">${t.direction}</span></td>
            <td class="${t.closedPnl >= 0 ? 'text-profit' : 'text-loss'} fw-bold">${formatUSD(t.closedPnl)}</td>
            <td>${t.strategy ? `<span class="strategy-badge">${t.strategy}</span>` : '-'}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderKeyInsights(trades, byStrategy, byRisk, byCoin) {
  const insights = [];

  // Best/worst coin
  const coinEntries = Object.entries(byCoin || {});
  if (coinEntries.length > 0) {
    const bestCoin = coinEntries.reduce((a, b) => a[1].totalPnl > b[1].totalPnl ? a : b);
    const worstCoin = coinEntries.reduce((a, b) => a[1].totalPnl < b[1].totalPnl ? a : b);
    insights.push(`🪙 <strong>Most profitable coin</strong>: ${bestCoin[0]} (${formatUSD(bestCoin[1].totalPnl)}, ${formatPct(bestCoin[1].winRate)} win rate, ${bestCoin[1].closingTrades} trades)`);
    if (worstCoin[0] !== bestCoin[0]) {
      insights.push(`📉 <strong>Weakest coin</strong>: ${worstCoin[0]} (${formatUSD(worstCoin[1].totalPnl)}, ${formatPct(worstCoin[1].winRate)} win rate, ${worstCoin[1].closingTrades} trades)`);
    }
  }

  // Best strategy
  const stratEntries = Object.entries(byStrategy);
  if (stratEntries.length > 0) {
    const bestStrat = stratEntries.reduce((a, b) => a[1].totalPnl > b[1].totalPnl ? a : b);
    const worstStrat = stratEntries.reduce((a, b) => a[1].totalPnl < b[1].totalPnl ? a : b);
    insights.push(`✅ <strong>Best strategy</strong>: ${bestStrat[0]} (${formatUSD(bestStrat[1].totalPnl)}, ${formatPct(bestStrat[1].winRate)} win rate)`);
    if (worstStrat[0] !== bestStrat[0]) {
      insights.push(`❌ <strong>Worst strategy</strong>: ${worstStrat[0]} (${formatUSD(worstStrat[1].totalPnl)}, ${formatPct(worstStrat[1].winRate)} win rate)`);
    }
  }

  // Risk analysis
  const riskEntries = Object.entries(byRisk);
  if (riskEntries.length > 0) {
    const bestRisk = riskEntries.reduce((a, b) => a[1].profitFactor > b[1].profitFactor ? a : b);
    insights.push(`⚡ <strong>Best risk/reward ratio</strong>: ${bestRisk[0]} (PF: ${bestRisk[1].profitFactor === Infinity ? '∞' : bestRisk[1].profitFactor.toFixed(2)})`);
  }

  // Consecutive analysis
  const closing = [...trades].filter(t => t.closedPnl !== 0).sort((a, b) => a.time.localeCompare(b.time));
  let maxWinStreak = 0, maxLossStreak = 0, winStreak = 0, lossStreak = 0;
  closing.forEach(t => {
    if (t.closedPnl > 0) { winStreak++; lossStreak = 0; maxWinStreak = Math.max(maxWinStreak, winStreak); }
    else { lossStreak++; winStreak = 0; maxLossStreak = Math.max(maxLossStreak, lossStreak); }
  });
  insights.push(`🔥 <strong>Max win streak</strong>: ${maxWinStreak} consecutive trades`);
  insights.push(`💀 <strong>Max loss streak</strong>: ${maxLossStreak} consecutive trades`);

  return `
    <div style="display:flex; flex-direction:column; gap:0.75rem; padding:0.5rem 0">
      ${insights.map(i => `<div style="font-size:0.9rem; line-height:1.5">${i}</div>`).join('')}
    </div>
  `;
}
