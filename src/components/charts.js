// Charts component — Chart.js visualizations
import {
    Chart,
    LineController, BarController, DoughnutController, ScatterController,
    LineElement, BarElement, PointElement, ArcElement,
    CategoryScale, LinearScale, TimeScale, Filler, Legend, Tooltip
} from 'chart.js';

Chart.register(
    LineController, BarController, DoughnutController, ScatterController,
    LineElement, BarElement, PointElement, ArcElement,
    CategoryScale, LinearScale, Filler, Legend, Tooltip
);

// Store chart instances to destroy on re-render
const chartInstances = {};

function getOrCreate(canvasId, config) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;

    if (chartInstances[canvasId]) {
        chartInstances[canvasId].destroy();
    }

    const ctx = canvas.getContext('2d');
    chartInstances[canvasId] = new Chart(ctx, config);
    return chartInstances[canvasId];
}

// Common Chart.js theme
const gridColor = 'rgba(148, 163, 184, 0.08)';
const tickColor = '#64748b';
const fontFamily = 'Inter, sans-serif';

const defaultScales = {
    x: {
        grid: { color: gridColor, drawBorder: false },
        ticks: { color: tickColor, font: { family: fontFamily, size: 11 } }
    },
    y: {
        grid: { color: gridColor, drawBorder: false },
        ticks: { color: tickColor, font: { family: fontFamily, size: 11 } }
    }
};

const defaultPlugins = {
    legend: { display: false },
    tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        titleFont: { family: fontFamily, size: 12 },
        bodyFont: { family: fontFamily, size: 12 },
        padding: 10,
        cornerRadius: 8,
        borderColor: 'rgba(148, 163, 184, 0.2)',
        borderWidth: 1
    }
};

/**
 * Render equity curve
 */
export function renderEquityChart(data) {
    if (!data.length) return;
    getOrCreate('chart-equity', {
        type: 'line',
        data: {
            labels: data.map(d => d.date),
            datasets: [{
                label: 'Equity',
                data: data.map(d => d.equity),
                borderColor: '#818cf8',
                backgroundColor: 'rgba(129, 140, 248, 0.1)',
                fill: true,
                borderWidth: 2,
                tension: 0.3,
                pointRadius: 0,
                pointHoverRadius: 4,
                pointHoverBackgroundColor: '#818cf8'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                ...defaultPlugins,
                tooltip: {
                    ...defaultPlugins.tooltip,
                    callbacks: {
                        label: (ctx) => `P&L: $${ctx.parsed.y.toFixed(2)}`
                    }
                }
            },
            scales: {
                ...defaultScales,
                y: {
                    ...defaultScales.y,
                    ticks: {
                        ...defaultScales.y.ticks,
                        callback: (v) => '$' + v.toLocaleString()
                    }
                }
            }
        }
    });
}

/**
 * Render daily P&L bar chart
 */
export function renderDailyPnlChart(data) {
    if (!data.length) return;
    getOrCreate('chart-daily', {
        type: 'bar',
        data: {
            labels: data.map(d => d.date),
            datasets: [{
                label: 'P&L',
                data: data.map(d => d.pnl),
                backgroundColor: data.map(d => d.pnl >= 0 ? 'rgba(34, 197, 94, 0.7)' : 'rgba(239, 68, 68, 0.7)'),
                borderColor: data.map(d => d.pnl >= 0 ? '#22c55e' : '#ef4444'),
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                ...defaultPlugins,
                tooltip: {
                    ...defaultPlugins.tooltip,
                    callbacks: {
                        label: (ctx) => `P&L: $${ctx.parsed.y.toFixed(2)}`
                    }
                }
            },
            scales: {
                ...defaultScales,
                y: {
                    ...defaultScales.y,
                    ticks: {
                        ...defaultScales.y.ticks,
                        callback: (v) => '$' + v.toLocaleString()
                    }
                }
            }
        }
    });
}

/**
 * Render P&L by coin horizontal bar chart
 */
export function renderCoinPnlChart(data) {
    if (!data.length) return;
    getOrCreate('chart-coins', {
        type: 'bar',
        data: {
            labels: data.map(d => d.coin),
            datasets: [{
                label: 'P&L',
                data: data.map(d => d.pnl),
                backgroundColor: data.map(d => d.pnl >= 0 ? 'rgba(34, 197, 94, 0.7)' : 'rgba(239, 68, 68, 0.7)'),
                borderColor: data.map(d => d.pnl >= 0 ? '#22c55e' : '#ef4444'),
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                ...defaultPlugins,
                tooltip: {
                    ...defaultPlugins.tooltip,
                    callbacks: {
                        label: (ctx) => `P&L: $${ctx.parsed.x.toFixed(2)}`
                    }
                }
            },
            scales: {
                x: {
                    ...defaultScales.x,
                    ticks: {
                        ...defaultScales.x.ticks,
                        callback: (v) => '$' + v.toLocaleString()
                    }
                },
                y: defaultScales.y
            }
        }
    });
}

/**
 * Render P&L by strategy
 */
export function renderStrategyPnlChart(data) {
    if (!data.length) return;
    getOrCreate('chart-strategies', {
        type: 'bar',
        data: {
            labels: data.map(d => d.strategy),
            datasets: [{
                label: 'P&L',
                data: data.map(d => d.pnl),
                backgroundColor: data.map(d => d.pnl >= 0 ? 'rgba(34, 197, 94, 0.7)' : 'rgba(239, 68, 68, 0.7)'),
                borderColor: data.map(d => d.pnl >= 0 ? '#22c55e' : '#ef4444'),
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: defaultPlugins,
            scales: {
                x: {
                    ...defaultScales.x,
                    ticks: {
                        ...defaultScales.x.ticks,
                        callback: (v) => '$' + v.toLocaleString()
                    }
                },
                y: defaultScales.y
            }
        }
    });
}

/**
 * Render MAE/MFE scatter plot
 */
export function renderMaeMfeChart(data) {
    if (!data.length) return;
    const wins = data.filter(d => d.isWin);
    const losses = data.filter(d => !d.isWin);

    getOrCreate('chart-maemfe', {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: 'Wins',
                    data: wins.map(d => ({ x: d.mae, y: d.mfe })),
                    backgroundColor: 'rgba(34, 197, 94, 0.6)',
                    borderColor: '#22c55e',
                    pointRadius: 6,
                    pointHoverRadius: 8
                },
                {
                    label: 'Losses',
                    data: losses.map(d => ({ x: d.mae, y: d.mfe })),
                    backgroundColor: 'rgba(239, 68, 68, 0.6)',
                    borderColor: '#ef4444',
                    pointRadius: 6,
                    pointHoverRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                ...defaultPlugins,
                legend: { display: true, labels: { color: tickColor, font: { family: fontFamily } } },
                tooltip: {
                    ...defaultPlugins.tooltip,
                    callbacks: {
                        label: (ctx) => `MAE: ${ctx.parsed.x}% | MFE: ${ctx.parsed.y}%`
                    }
                }
            },
            scales: {
                x: {
                    ...defaultScales.x,
                    title: { display: true, text: 'MAE%', color: tickColor, font: { family: fontFamily } }
                },
                y: {
                    ...defaultScales.y,
                    title: { display: true, text: 'MFE%', color: tickColor, font: { family: fontFamily } }
                }
            }
        }
    });
}

/**
 * Render all dashboard charts
 */
export function renderAllDashboardCharts(equityData, dailyData, coinData, strategyData, maeMfeDataPoints) {
    // Small delay to ensure DOM is ready
    requestAnimationFrame(() => {
        renderEquityChart(equityData);
        renderDailyPnlChart(dailyData);
        renderCoinPnlChart(coinData);
        renderStrategyPnlChart(strategyData);
        renderMaeMfeChart(maeMfeDataPoints);
    });
}
