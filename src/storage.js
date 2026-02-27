// Storage module — hybrid: localStorage (offline) + Firestore (logged in)
import { saveUserData, loadUserData, uploadImageCloud, downloadImageCloud, deleteImageCloud } from './firebase.js';

const TRADES_KEY = 'cj_trades';
const STRATEGIES_KEY = 'cj_strategies';
const TAGS_KEY = 'cj_tags';
const DB_NAME = 'CryptoJournalDB';
const DB_VERSION = 1;
const IMG_STORE = 'images';

let _currentUid = null;

export function setCurrentUser(uid) {
    _currentUid = uid;
}

export function getCurrentUser() {
    return _currentUid;
}

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

// --- Cloud sync ---
export async function syncToCloud() {
    if (!_currentUid) return;
    const trades = loadTrades();
    const strategies = loadStrategies();
    const tags = loadTags();
    // Note: images stay in IndexedDB (too large for Firestore doc)
    console.log(`[SYNC] Uploading to cloud: ${trades.length} trades, ${strategies.length} strategies, ${tags.length} tags`);
    await saveUserData(_currentUid, { trades, strategies, tags, lastSync: new Date().toISOString() });
    console.log('[SYNC] Upload complete');
}

export async function syncFromCloud() {
    if (!_currentUid) { console.log('[SYNC] No user, skipping download'); return false; }
    console.log('[SYNC] Downloading from cloud for uid:', _currentUid);
    const data = await loadUserData(_currentUid);
    if (!data) { console.log('[SYNC] No cloud data found'); return false; }
    console.log(`[SYNC] Cloud data found: ${(data.trades || []).length} trades, lastSync: ${data.lastSync}`);
    if (data.trades) saveTrades(data.trades);
    if (data.strategies) saveStrategies(data.strategies);
    if (data.tags) saveTags(data.tags);
    return true;
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
    // Save locally (IndexedDB cache)
    const db = await openDB();
    await new Promise((resolve, reject) => {
        const tx = db.transaction(IMG_STORE, 'readwrite');
        tx.objectStore(IMG_STORE).put({ id, dataUrl });
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
    });
    // Also upload to cloud (non-blocking)
    if (_currentUid) {
        try {
            await uploadImageCloud(_currentUid, id, dataUrl);
            console.log(`[IMG] Uploaded to cloud: ${id}`);
        } catch (err) {
            console.warn(`[IMG] Cloud upload failed for ${id}:`, err.message);
        }
    }
}

export async function loadImage(id) {
    // Try local cache first
    const db = await openDB();
    const localResult = await new Promise((resolve, reject) => {
        const tx = db.transaction(IMG_STORE, 'readonly');
        const req = tx.objectStore(IMG_STORE).get(id);
        req.onsuccess = () => resolve(req.result?.dataUrl || null);
        req.onerror = () => reject(req.error);
    });
    if (localResult) return localResult;

    // Fall back to cloud
    if (_currentUid) {
        try {
            const cloudUrl = await downloadImageCloud(_currentUid, id);
            if (cloudUrl) {
                console.log(`[IMG] Loaded from cloud: ${id}`);
                return cloudUrl;
            }
        } catch (err) {
            console.warn(`[IMG] Cloud load failed for ${id}:`, err.message);
        }
    }
    return null;
}

export async function deleteImage(id) {
    // Delete locally
    const db = await openDB();
    await new Promise((resolve, reject) => {
        const tx = db.transaction(IMG_STORE, 'readwrite');
        tx.objectStore(IMG_STORE).delete(id);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
    });
    // Also delete from cloud (non-blocking)
    if (_currentUid) {
        try {
            await deleteImageCloud(_currentUid, id);
            console.log(`[IMG] Deleted from cloud: ${id}`);
        } catch (err) {
            console.warn(`[IMG] Cloud delete failed for ${id}:`, err.message);
        }
    }
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
    // Auto-sync to cloud after import
    await syncToCloud();
}
