// Analytics module — compute all metrics from trade data

/**
 * Compute overall stats from an array of trades
 */
export function computeOverallStats(trades) {
    const closingTrades = trades.filter(t => t.closedPnl !== 0 || t.action === 'Close');
    const wins = closingTrades.filter(t => t.closedPnl > 0);
    const losses = closingTrades.filter(t => t.closedPnl < 0);

    const totalPnl = closingTrades.reduce((s, t) => s + t.closedPnl, 0);
    const totalFees = trades.reduce((s, t) => s + Math.abs(t.fee), 0);
    const netPnl = totalPnl - totalFees;

    const avgWin = wins.length ? wins.reduce((s, t) => s + t.closedPnl, 0) / wins.length : 0;
    const avgLoss = losses.length ? Math.abs(losses.reduce((s, t) => s + t.closedPnl, 0) / losses.length) : 0;

    const grossProfit = wins.reduce((s, t) => s + t.closedPnl, 0);
    const grossLoss = Math.abs(losses.reduce((s, t) => s + t.closedPnl, 0));
    const profitFactor = grossLoss > 0 ? grossProfit / grossLoss : grossProfit > 0 ? Infinity : 0;

    const bestTrade = closingTrades.length ? Math.max(...closingTrades.map(t => t.closedPnl)) : 0;
    const worstTrade = closingTrades.length ? Math.min(...closingTrades.map(t => t.closedPnl)) : 0;

    const winRate = closingTrades.length ? (wins.length / closingTrades.length) * 100 : 0;

    // MAE / MFE averages
    const tradesWithMae = closingTrades.filter(t => t.mae != null && t.mae !== 0);
    const tradesWithMfe = closingTrades.filter(t => t.mfe != null && t.mfe !== 0);
    const avgMae = tradesWithMae.length ? tradesWithMae.reduce((s, t) => s + t.mae, 0) / tradesWithMae.length : null;
    const avgMfe = tradesWithMfe.length ? tradesWithMfe.reduce((s, t) => s + t.mfe, 0) / tradesWithMfe.length : null;

    return {
        totalTrades: trades.length,
        closingTrades: closingTrades.length,
        wins: wins.length,
        losses: losses.length,
        totalPnl,
        totalFees,
        netPnl,
        winRate,
        avgWin,
        avgLoss,
        profitFactor,
        bestTrade,
        worstTrade,
        avgMae,
        avgMfe
    };
}

/**
 * Group trades by a key and compute stats per group
 */
export function computeGroupedStats(trades, keyFn) {
    const groups = {};
    trades.forEach(t => {
        const key = keyFn(t);
        if (!key) return;
        if (!groups[key]) groups[key] = [];
        groups[key].push(t);
    });

    const result = {};
    for (const [key, group] of Object.entries(groups)) {
        result[key] = computeOverallStats(group);
    }
    return result;
}

/**
 * Stats per coin
 */
export function statsByCoin(trades) {
    return computeGroupedStats(trades, t => t.coin);
}

/**
 * Stats per strategy
 */
export function statsByStrategy(trades) {
    return computeGroupedStats(trades, t => t.strategy || null);
}

/**
 * Stats per risk level
 */
export function statsByRisk(trades) {
    return computeGroupedStats(trades, t => t.risk > 0 ? `Risk ${t.risk}` : null);
}

/**
 * Daily P&L time series
 */
export function dailyPnl(trades) {
    const closing = trades.filter(t => t.closedPnl !== 0 || t.action === 'Close');
    const grouped = {};
    closing.forEach(t => {
        const day = t.time.slice(0, 10);
        if (!grouped[day]) grouped[day] = { date: day, pnl: 0, trades: 0, fees: 0 };
        grouped[day].pnl += t.closedPnl;
        grouped[day].trades += 1;
        grouped[day].fees += Math.abs(t.fee);
    });
    return Object.values(grouped).sort((a, b) => a.date.localeCompare(b.date));
}

/**
 * Cumulative equity curve
 */
export function equityCurve(trades) {
    const daily = dailyPnl(trades);
    let cumulative = 0;
    return daily.map(d => {
        cumulative += d.pnl;
        return { date: d.date, equity: cumulative };
    });
}

/**
 * P&L per coin (for bar chart)
 */
export function pnlByCoin(trades) {
    const closing = trades.filter(t => t.closedPnl !== 0 || t.action === 'Close');
    const grouped = {};
    closing.forEach(t => {
        if (!grouped[t.coin]) grouped[t.coin] = 0;
        grouped[t.coin] += t.closedPnl;
    });
    return Object.entries(grouped)
        .map(([coin, pnl]) => ({ coin, pnl }))
        .sort((a, b) => b.pnl - a.pnl);
}

/**
 * P&L per strategy
 */
export function pnlByStrategy(trades) {
    const closing = trades.filter(t => t.strategy && (t.closedPnl !== 0 || t.action === 'Close'));
    const grouped = {};
    closing.forEach(t => {
        if (!grouped[t.strategy]) grouped[t.strategy] = 0;
        grouped[t.strategy] += t.closedPnl;
    });
    return Object.entries(grouped)
        .map(([strategy, pnl]) => ({ strategy, pnl }))
        .sort((a, b) => b.pnl - a.pnl);
}

/**
 * MAE/MFE data points for scatter chart
 */
export function maeMfeData(trades) {
    return trades
        .filter(t => t.mae != null && t.mfe != null && (t.mae !== 0 || t.mfe !== 0))
        .map(t => ({
            mae: t.mae,
            mfe: t.mfe,
            pnl: t.closedPnl,
            coin: t.coin,
            isWin: t.closedPnl > 0
        }));
}

/**
 * Calendar data — P&L per day for heatmap
 */
export function calendarData(trades) {
    const daily = dailyPnl(trades);
    const map = {};
    daily.forEach(d => { map[d.date] = d; });
    return map;
}

/**
 * Format number as currency
 */
export function formatUSD(val) {
    if (val == null) return '-';
    const sign = val > 0 ? '+' : val < 0 ? '-' : '';
    return sign + '$' + Math.abs(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/**
 * Format percentage
 */
export function formatPct(val) {
    if (val == null) return '-';
    return val.toFixed(1) + '%';
}

/**
 * Format date string
 */
export function formatDate(isoStr) {
    if (!isoStr) return '-';
    const d = new Date(isoStr);
    return d.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }) +
        ' ' + d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

export function formatDateShort(isoStr) {
    if (!isoStr) return '-';
    const d = new Date(isoStr);
    return d.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit' });
}
