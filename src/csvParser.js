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
 * Compute aggregate fields from legs array
 */
export function computeFromLegs(legs) {
    if (!legs || legs.length === 0) {
        return { entryPrice: 0, exitPrice: null, size: 0, remainingSize: 0, notional: 0, fee: 0, closedPnl: 0, status: 'Active' };
    }

    const entries = legs.filter(l => l.type === 'entry');
    const exits = legs.filter(l => l.type === 'exit');

    const totalEntrySize = entries.reduce((s, l) => s + l.size, 0);
    const totalExitSize = exits.reduce((s, l) => s + l.size, 0);
    const remainingSize = Math.max(0, +(totalEntrySize - totalExitSize).toFixed(8));

    // Weighted average entry price
    const entryPrice = totalEntrySize > 0
        ? entries.reduce((s, l) => s + l.price * l.size, 0) / totalEntrySize
        : 0;

    // Weighted average exit price
    const exitPrice = totalExitSize > 0
        ? exits.reduce((s, l) => s + l.price * l.size, 0) / totalExitSize
        : null;

    const totalFee = legs.reduce((s, l) => s + (l.fee || 0), 0);
    const notional = entries.reduce((s, l) => s + l.price * l.size, 0);

    // Realized P&L per exit leg (using avg entry price)
    // For Long: (exitPrice - avgEntry) * exitSize
    // For Short: (avgEntry - exitPrice) * exitSize
    // We store per-leg pnl if available, otherwise we'll let the editor compute
    const closedPnl = exits.reduce((s, l) => s + (l.pnl || 0), 0);

    const status = remainingSize > 0 ? 'Active' : (totalExitSize > 0 ? 'Completed' : 'Active');

    return { entryPrice, exitPrice, size: totalEntrySize, remainingSize, notional, fee: totalFee, closedPnl, status };
}

/**
 * Recalculate exit leg P&L based on direction and avg entry price.
 * Includes proportional entry fees in the P&L calculation.
 */
export function recalcLegsPnl(legs, direction) {
    if (!legs) return legs;
    const entries = legs.filter(l => l.type === 'entry');
    const totalEntrySize = entries.reduce((s, l) => s + l.size, 0);
    const avgEntry = totalEntrySize > 0
        ? entries.reduce((s, l) => s + l.price * l.size, 0) / totalEntrySize
        : 0;

    // Total entry fees to distribute proportionally across exits
    const totalEntryFee = entries.reduce((s, l) => s + (l.fee || 0), 0);

    return legs.map(l => {
        if (l.type !== 'exit') return l;
        // Proportional share of entry fees for this exit
        const entryFeeShare = totalEntrySize > 0
            ? totalEntryFee * (l.size / totalEntrySize)
            : 0;
        const pnl = direction === 'Long'
            ? (l.price - avgEntry) * l.size - (l.fee || 0) - entryFeeShare
            : (avgEntry - l.price) * l.size - (l.fee || 0) - entryFeeShare;
        return { ...l, pnl };
    });
}

/**
 * Create a manual trade object with defaults — now with legs
 */
export function createManualTrade(data) {
    const entryPrice = parseNum(data.entryPrice);
    const exitPrice = data.exitPrice != null && data.exitPrice !== '' && parseNum(data.exitPrice) !== 0 ? parseNum(data.exitPrice) : null;
    const size = parseNum(data.size);
    const fee = parseNum(data.fee);
    const direction = data.direction || 'Long';

    // Annotations go on each leg
    const legAnnotations = {
        strategy: data.strategy || '',
        risk: data.risk || 0,
        notes: data.notes || '',
        tags: data.tags || [],
        images: data.images || [],
        mae: data.mae != null ? parseNum(data.mae) : null,
        mfe: data.mfe != null ? parseNum(data.mfe) : null,
    };

    // Build legs
    const legs = [];
    if (entryPrice > 0 && size > 0) {
        legs.push({
            type: 'entry',
            time: data.time || new Date().toISOString(),
            price: entryPrice,
            size: size,
            fee: exitPrice ? 0 : fee,
            ...legAnnotations,
        });
    }
    if (exitPrice && size > 0) {
        legs.push({
            type: 'exit',
            time: data.exitTime || data.time || new Date().toISOString(),
            price: exitPrice,
            size: size,
            fee: fee,
            pnl: direction === 'Long'
                ? (exitPrice - entryPrice) * size - fee
                : (entryPrice - exitPrice) * size - fee,
            ...legAnnotations,
        });
    }

    const computed = computeFromLegs(legs);

    return {
        id: 'manual_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8),
        time: data.time || new Date().toISOString(),
        exitTime: exitPrice ? (data.exitTime || data.time || new Date().toISOString()) : null,
        coin: (data.coin || '').toUpperCase(),
        direction,
        legs,
        ...computed,
        closedPnl: parseNum(data.closedPnl) || computed.closedPnl,
        risk: 0,
        strategy: '',
        notes: '',
        tags: [],
        images: [],
        mae: null,
        mfe: null,
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
 * Migrate old format trades — adds legs array if missing
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

        // Migrate to legs format
        if (!t.legs) {
            const legAnnotations = {
                strategy: t.strategy || '',
                risk: t.risk || 0,
                notes: t.notes || '',
                tags: t.tags || [],
                images: t.images || [],
            };
            const legs = [];
            if (t.entryPrice && t.size) {
                legs.push({
                    type: 'entry',
                    time: t.time,
                    price: t.entryPrice,
                    size: t.size,
                    fee: t.exitPrice ? 0 : (t.fee || 0),
                    ...legAnnotations,
                });
            }
            if (t.exitPrice && t.size) {
                legs.push({
                    type: 'exit',
                    time: t.exitTime || t.time,
                    price: t.exitPrice,
                    size: t.size,
                    fee: t.fee || 0,
                    pnl: t.closedPnl || 0,
                    ...legAnnotations,
                });
            }
            t = { ...t, legs };
            // Recompute from legs
            const computed = computeFromLegs(legs);
            t.remainingSize = computed.remainingSize;
            t.status = computed.status;
        }

        return t;
    });
}

/**
 * Auto-merge trades on same coin + direction into single positions with multiple legs.
 * Keeps all annotations (strategy, risk, notes, tags, images) from all merged trades.
 */
export function autoMergeTrades(trades) {
    const groups = {};

    trades.forEach(t => {
        const key = `${t.coin}_${t.direction}`;
        if (!groups[key]) groups[key] = [];
        groups[key].push(t);
    });

    const merged = [];
    for (const [key, group] of Object.entries(groups)) {
        if (group.length <= 1) {
            merged.push(group[0]);
            continue;
        }

        // Sort by time (earliest first)
        group.sort((a, b) => a.time.localeCompare(b.time));
        const base = group[0];

        // Merge all legs, stamping each with its source trade's annotations
        const allLegs = [];
        for (const t of group) {
            if (t.legs && t.legs.length > 0) {
                for (const leg of t.legs) {
                    allLegs.push({
                        ...leg,
                        // Carry annotations from the source trade if leg doesn't already have them
                        strategy: leg.strategy || t.strategy || '',
                        risk: leg.risk != null ? leg.risk : (t.risk || 0),
                        notes: leg.notes || t.notes || '',
                        tags: leg.tags || t.tags || [],
                        images: leg.images || t.images || [],
                    });
                }
            }
        }

        // Sort legs by time
        allLegs.sort((a, b) => (a.time || '').localeCompare(b.time || ''));

        // Recalculate P&L on exit legs
        const finalLegs = recalcLegsPnl(allLegs, base.direction);
        const computed = computeFromLegs(finalLegs);

        merged.push({
            ...base,
            legs: finalLegs,
            ...computed,
            exitTime: computed.status === 'Completed' ? (group.at(-1).exitTime || group.at(-1).time) : null,
            // Position-level annotations: first non-empty
            strategy: group.map(t => t.strategy).filter(Boolean)[0] || '',
            risk: Math.max(...group.map(t => t.risk || 0)),
            notes: '',
            tags: [...new Set(group.flatMap(t => t.tags || []))],
            images: [...new Set(group.flatMap(t => t.images || []))],
            mae: null,
            mfe: null,
        });
    }

    return merged;
}
