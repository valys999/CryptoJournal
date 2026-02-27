// CSV Parser for Hyperliquid exports
import Papa from 'papaparse';

/**
 * Parse a Hyperliquid CSV file and return normalized trade objects.
 * CSV columns: time, coin, dir, px, sz, ntl, fee, closedPnl
 * Automatically pairs Open+Close rows into single position records.
 */
export function parseHyperliquidCSV(file) {
    return new Promise((resolve, reject) => {
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            dynamicTyping: false,
            complete(results) {
                if (results.errors.length > 0) {
                    console.warn('CSV parse warnings:', results.errors);
                }
                try {
                    const rows = results.data
                        .filter(row => row.time && row.coin)
                        .map(row => parseRow(row));
                    const trades = pairTrades(rows);
                    resolve(trades);
                } catch (err) {
                    reject(err);
                }
            },
            error(err) {
                reject(err);
            }
        });
    });
}

/**
 * Parse a single CSV row into a raw entry
 */
function parseRow(row) {
    const dir = (row.dir || '').trim();
    const isLong = /long/i.test(dir);
    const isShort = /short/i.test(dir);
    const isOpen = /open/i.test(dir);
    const isClose = /close/i.test(dir);

    return {
        time: parseTimestamp(row.time),
        coin: (row.coin || '').trim().toUpperCase(),
        direction: isLong ? 'Long' : isShort ? 'Short' : dir,
        action: isOpen ? 'Open' : isClose ? 'Close' : 'Unknown',
        dirRaw: dir,
        price: parseNum(row.px),
        size: parseNum(row.sz),
        notional: parseNum(row.ntl),
        fee: parseNum(row.fee),
        closedPnl: parseNum(row.closedPnl),
    };
}

/**
 * Pair Open+Close rows into single position trades.
 * Unpaired Opens become Active trades, unpaired Closes become standalone Completed.
 */
function pairTrades(rows) {
    // Sort by time ascending
    rows.sort((a, b) => a.time.localeCompare(b.time));

    const openPositions = {}; // key: coin+direction -> array of opens
    const trades = [];

    for (const row of rows) {
        const key = `${row.coin}_${row.direction}`;

        if (row.action === 'Open') {
            if (!openPositions[key]) openPositions[key] = [];
            openPositions[key].push(row);
        } else if (row.action === 'Close') {
            // Try to pair with an open
            if (openPositions[key] && openPositions[key].length > 0) {
                const openRow = openPositions[key].shift();
                trades.push(createPairedTrade(openRow, row));
            } else {
                // No matching open — standalone completed trade
                trades.push(createStandaloneTrade(row, true));
            }
        } else {
            // Unknown action — treat as standalone
            trades.push(createStandaloneTrade(row, row.closedPnl !== 0));
        }
    }

    // Remaining unpaired opens → Active trades
    for (const opens of Object.values(openPositions)) {
        for (const openRow of opens) {
            trades.push(createStandaloneTrade(openRow, false));
        }
    }

    // Sort by time descending (newest first)
    trades.sort((a, b) => b.time.localeCompare(a.time));
    return trades;
}

/**
 * Create a paired trade from Open + Close rows
 */
function createPairedTrade(openRow, closeRow) {
    return {
        id: generateTradeId(openRow.time, openRow.coin, openRow.direction, openRow.price),
        time: openRow.time,
        exitTime: closeRow.time,
        coin: openRow.coin,
        direction: openRow.direction,
        entryPrice: openRow.price,
        exitPrice: closeRow.price,
        size: openRow.size,
        notional: openRow.notional,
        fee: openRow.fee + closeRow.fee,
        closedPnl: closeRow.closedPnl,
        status: 'Completed',
        // Annotations
        risk: 0,
        strategy: '',
        notes: '',
        tags: [],
        images: [],
        mae: null,
        mfe: null,
        source: 'csv'
    };
}

/**
 * Create a standalone trade (either Active or Completed)
 */
function createStandaloneTrade(row, isCompleted) {
    return {
        id: generateTradeId(row.time, row.coin, row.direction, row.price),
        time: row.time,
        exitTime: isCompleted ? row.time : null,
        coin: row.coin,
        direction: row.direction,
        entryPrice: isCompleted ? 0 : row.price,
        exitPrice: isCompleted ? row.price : null,
        size: row.size,
        notional: row.notional,
        fee: row.fee,
        closedPnl: row.closedPnl,
        status: isCompleted ? 'Completed' : 'Active',
        // Annotations
        risk: 0,
        strategy: '',
        notes: '',
        tags: [],
        images: [],
        mae: null,
        mfe: null,
        source: 'csv'
    };
}

/**
 * Create a manual trade object with defaults
 */
export function createManualTrade(data) {
    const entryPrice = parseNum(data.entryPrice);
    const exitPrice = data.exitPrice != null && data.exitPrice !== '' && parseNum(data.exitPrice) !== 0 ? parseNum(data.exitPrice) : null;
    const size = parseNum(data.size);
    const fee = parseNum(data.fee);
    const direction = data.direction || 'Long';

    // Compute P&L
    let closedPnl = 0;
    if (exitPrice && entryPrice && size) {
        closedPnl = direction === 'Long'
            ? (exitPrice - entryPrice) * size - fee
            : (entryPrice - exitPrice) * size - fee;
    }
    if (parseNum(data.closedPnl)) {
        closedPnl = parseNum(data.closedPnl);
    }

    return {
        id: 'manual_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8),
        time: data.time || new Date().toISOString(),
        exitTime: exitPrice ? (data.exitTime || data.time || new Date().toISOString()) : null,
        coin: (data.coin || '').toUpperCase(),
        direction,
        entryPrice,
        exitPrice,
        size,
        notional: entryPrice * size,
        fee,
        closedPnl,
        status: exitPrice ? 'Completed' : 'Active',
        risk: data.risk || 0,
        strategy: data.strategy || '',
        notes: data.notes || '',
        tags: data.tags || [],
        images: data.images || [],
        mae: data.mae != null ? parseNum(data.mae) : null,
        mfe: data.mfe != null ? parseNum(data.mfe) : null,
        source: 'manual'
    };
}

/**
 * Generate a unique ID for a trade
 */
function generateTradeId(time, coin, direction, price) {
    const str = `${time}_${coin}_${direction}_${price}`;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return 'hl_' + Math.abs(hash).toString(36);
}

function parseTimestamp(str) {
    if (!str) return new Date().toISOString();
    const d = new Date(str.trim());
    return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

function parseNum(val) {
    if (val == null || val === '') return 0;
    const n = parseFloat(String(val).replace(/,/g, ''));
    return isNaN(n) ? 0 : n;
}

/**
 * Merge imported trades with existing, avoiding duplicates
 */
export function mergeTrades(existing, imported) {
    const existingIds = new Set(existing.map(t => t.id));
    const newTrades = imported.filter(t => !existingIds.has(t.id));
    return [...existing, ...newTrades];
}

/**
 * Migrate old format trades — strip legs, keep flat fields
 */
export function migrateTrades(trades) {
    return trades.map(t => {
        // Migrate price -> entryPrice/exitPrice
        if (t.entryPrice === undefined && t.price !== undefined) {
            t = {
                ...t,
                entryPrice: t.action === 'Open' ? t.price : 0,
                exitPrice: t.action === 'Close' ? t.price : null,
                exitTime: t.action === 'Close' ? t.time : null,
                status: (t.action === 'Close' || t.closedPnl !== 0) ? 'Completed' : 'Active',
            };
        }

        // If trade has legs, flatten it back to a simple trade
        if (t.legs && t.legs.length > 0) {
            const entries = t.legs.filter(l => l.type === 'entry');
            const exits = t.legs.filter(l => l.type === 'exit');

            // If this was a merged position with multiple entries/exits,
            // keep the trade's existing flat fields (entryPrice, exitPrice, closedPnl)
            // They were already computed. Just remove the legs array.
            t = { ...t };
            delete t.legs;
            delete t.remainingSize;
            delete t._tradeId;
        }

        // Ensure required fields exist
        if (t.status === undefined) {
            t.status = t.exitPrice ? 'Completed' : 'Active';
        }
        if (t.notional === undefined) {
            t.notional = (t.entryPrice || 0) * (t.size || 0);
        }

        return t;
    });
}
