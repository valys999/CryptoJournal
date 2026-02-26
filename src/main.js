// Main entry point — app initialization, routing, event handling
import './style.css';
import { loadTrades, saveTrades, loadStrategies, exportAll, importAll } from './storage.js';
import { mergeTrades, migrateTrades, autoMergeTrades, recalcLegsPnl, computeFromLegs } from './csvParser.js';
import { equityCurve, dailyPnl, pnlByCoin, pnlByStrategy, maeMfeData } from './analytics.js';
import { renderDashboard } from './components/dashboard.js';
import { renderTradeTable } from './components/tradeTable.js';
import { openTradeEditor } from './components/tradeEditor.js';
import { openTradeForm } from './components/tradeForm.js';
import { renderPositionDetail } from './components/positionDetail.js';
import { renderAllDashboardCharts } from './components/charts.js';
import { openUploader } from './components/uploader.js';
import { renderInsights } from './components/insights.js';
import { renderCalendar } from './components/calendar.js';

// --- App State ---
let trades = autoMergeTrades(migrateTrades(loadTrades()));
saveTrades(trades); // persist any migration/merge changes
let currentPage = 'dashboard';

// --- DOM Elements ---
const mainContent = document.getElementById('main-content');
const modalOverlay = document.getElementById('modal-overlay');
const modalContainer = document.getElementById('modal-container');

// --- Navigation ---
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        if (page) navigateTo(page);
    });
});

function navigateTo(page) {
    currentPage = page;

    // Update active nav
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector(`[data-page="${page}"]`)?.classList.add('active');

    renderCurrentPage();
}

function renderCurrentPage() {
    switch (currentPage) {
        case 'dashboard':
            renderDashboard(trades, mainContent);
            if (trades.length > 0) {
                const eq = equityCurve(trades);
                const daily = dailyPnl(trades);
                const coins = pnlByCoin(trades);
                const strats = pnlByStrategy(trades);
                const maemfe = maeMfeData(trades);
                renderAllDashboardCharts(eq, daily, coins, strats, maemfe);
            }
            break;
        case 'trades':
            renderTradeTable(trades, mainContent, handleEditTrade);
            break;
        case 'insights':
            renderInsights(trades, mainContent);
            break;
        case 'calendar':
            renderCalendar(trades, mainContent);
            break;
    }
}

// --- Trade Actions ---
function handleEditTrade(trade) {
    renderPositionDetail(trade, mainContent,
        // onBack
        () => { navigateTo('trades'); },
        // onUpdate
        (tradeId, updatedData) => {
            trades = trades.map(t => t.id === tradeId ? { ...t, ...updatedData } : t);
            saveTrades(trades);
        },
        // onDelete
        (tradeId) => {
            trades = trades.filter(t => t.id !== tradeId);
            saveTrades(trades);
        }
    );
}

function handleImportCSV(newTrades) {
    trades = mergeTrades(trades, newTrades);
    saveTrades(trades);
    renderCurrentPage();
}

function handleAddManualTrade(newTrade) {
    // Check if position already exists for this coin + direction
    const existingIdx = trades.findIndex(t =>
        t.coin === newTrade.coin && t.direction === newTrade.direction
    );

    if (existingIdx !== -1) {
        // Merge: add new trade's legs into existing position
        const existing = trades[existingIdx];
        const mergedLegs = [...(existing.legs || []), ...(newTrade.legs || [])];
        const finalLegs = recalcLegsPnl(mergedLegs, existing.direction);
        const computed = computeFromLegs(finalLegs);
        trades[existingIdx] = {
            ...existing,
            legs: finalLegs,
            ...computed,
            exitTime: computed.status === 'Completed' ? new Date().toISOString() : null,
        };
    } else {
        trades.push(newTrade);
    }
    saveTrades(trades);
    renderCurrentPage();
}

// --- Button Events ---
document.getElementById('btn-import-csv').addEventListener('click', () => {
    openUploader(modalOverlay, modalContainer, handleImportCSV);
});

document.getElementById('btn-add-trade').addEventListener('click', () => {
    openTradeForm(modalOverlay, modalContainer, handleAddManualTrade);
});

document.getElementById('btn-export-data').addEventListener('click', async () => {
    try {
        const data = await exportAll();
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `crypto-journal-backup-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
    } catch (err) {
        console.error('Export failed:', err);
        alert('Eroare la export: ' + err.message);
    }
});

document.getElementById('btn-import-data').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        try {
            const text = await file.text();
            const data = JSON.parse(text);
            await importAll(data);
            trades = loadTrades();
            renderCurrentPage();
            alert(`✅ Backup importat cu succes! (${data.trades?.length || 0} trade-uri)`);
        } catch (err) {
            console.error('Import failed:', err);
            alert('Eroare la import: ' + err.message);
        }
    });
    input.click();
});

// --- Lightbox ---
document.getElementById('lightbox-close').addEventListener('click', () => {
    document.getElementById('lightbox').classList.add('hidden');
});
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        e.currentTarget.classList.add('hidden');
    }
});

// --- Mobile Menu ---
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('sidebar-backdrop');

function toggleSidebar() {
    sidebar.classList.toggle('open');
    hamburger.classList.toggle('open');
    backdrop.classList.toggle('open');
}

function closeSidebar() {
    sidebar.classList.remove('open');
    hamburger.classList.remove('open');
    backdrop.classList.remove('open');
}

hamburger.addEventListener('click', toggleSidebar);
backdrop.addEventListener('click', closeSidebar);

// Close sidebar on navigation (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Close sidebar on action buttons
['btn-import-csv', 'btn-add-trade', 'btn-export-data', 'btn-import-data'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', closeSidebar);
});

// --- Init ---
renderCurrentPage();
