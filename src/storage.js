// Storage module — localStorage for trades/settings, IndexedDB for images
const TRADES_KEY = 'cj_trades';
const STRATEGIES_KEY = 'cj_strategies';
const TAGS_KEY = 'cj_tags';
const DB_NAME = 'CryptoJournalDB';
const DB_VERSION = 1;
const IMG_STORE = 'images';

// --- localStorage helpers ---
export function saveTrades(trades) {
    localStorage.setItem(TRADES_KEY, JSON.stringify(trades));
}

export function loadTrades() {
    try {
        const data = localStorage.getItem(TRADES_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

export function saveStrategies(strategies) {
    localStorage.setItem(STRATEGIES_KEY, JSON.stringify(strategies));
}

export function loadStrategies() {
    try {
        const data = localStorage.getItem(STRATEGIES_KEY);
        return data ? JSON.parse(data) : [
            'Breakout', 'Mean Reversion', 'Trend Following', 'Scalp',
            'News/Event', 'Range Trading', 'Momentum', 'DCA'
        ];
    } catch {
        return ['Breakout', 'Mean Reversion', 'Trend Following', 'Scalp'];
    }
}

export function saveTags(tags) {
    localStorage.setItem(TAGS_KEY, JSON.stringify(tags));
}

export function loadTags() {
    try {
        const data = localStorage.getItem(TAGS_KEY);
        return data ? JSON.parse(data) : [
            'Plan followed', 'FOMO', 'Overtrading', 'Revenge trade',
            'Good execution', 'Stop moved', 'Profit taken too early'
        ];
    } catch {
        return [];
    }
}

// --- IndexedDB for images ---
let dbInstance = null;

function openDB() {
    return new Promise((resolve, reject) => {
        if (dbInstance) return resolve(dbInstance);
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            dbInstance = request.result;
            resolve(dbInstance);
        };
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(IMG_STORE)) {
                db.createObjectStore(IMG_STORE, { keyPath: 'id' });
            }
        };
    });
}

export async function saveImage(id, dataUrl) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(IMG_STORE, 'readwrite');
        tx.objectStore(IMG_STORE).put({ id, dataUrl });
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
    });
}

export async function loadImage(id) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(IMG_STORE, 'readonly');
        const req = tx.objectStore(IMG_STORE).get(id);
        req.onsuccess = () => resolve(req.result?.dataUrl || null);
        req.onerror = () => reject(req.error);
    });
}

export async function deleteImage(id) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(IMG_STORE, 'readwrite');
        tx.objectStore(IMG_STORE).delete(id);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
    });
}

export async function getAllImages() {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(IMG_STORE, 'readonly');
        const req = tx.objectStore(IMG_STORE).getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => reject(req.error);
    });
}

// --- Full export/import ---
export async function exportAll() {
    const trades = loadTrades();
    const strategies = loadStrategies();
    const tags = loadTags();
    const images = await getAllImages();
    return { trades, strategies, tags, images, exportDate: new Date().toISOString() };
}

export async function importAll(data) {
    if (data.trades) saveTrades(data.trades);
    if (data.strategies) saveStrategies(data.strategies);
    if (data.tags) saveTags(data.tags);
    if (data.images) {
        for (const img of data.images) {
            await saveImage(img.id, img.dataUrl);
        }
    }
}
