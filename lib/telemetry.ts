// ============================================
// TELEMETRY — page-view counters + trending data
// ============================================
//
// Two backends are supported:
//
// 1. **Vercel KV** (preferred for production)
//    Auto-enabled when KV_REST_API_URL + KV_REST_API_TOKEN env vars exist.
//    Vercel → Storage → Create Database → KV. Connect it to the project and
//    Vercel will inject the env vars automatically.
//
// 2. **In-memory** (default; works locally and as serverless fallback)
//    Counters reset on cold start, which means they are unreliable in
//    production. Set up KV before relying on the homepage trending widget.
//
// Counters live in a single sorted set so we can pull the top-N in one query.
// Daily rotation is intentionally not implemented yet — once we have real
// traffic we'll add a daily-rolling sorted set keyed by YYYY-MM-DD.

const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;
const KV_AVAILABLE = Boolean(KV_URL && KV_TOKEN);

const SORTED_SET_KEY = "trending:calculators";

// In-memory fallback (per server instance)
const memoryCounts = new Map<string, number>();

async function kvFetch(command: (string | number)[]): Promise<unknown> {
  if (!KV_AVAILABLE) throw new Error("KV not configured");
  const res = await fetch(KV_URL!, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${KV_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    // KV writes don't need to be cached
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`KV error: ${res.status}`);
  const data = await res.json();
  return data.result;
}

/**
 * Increment the view counter for a calculator (or recipe) slug.
 * Safe to await — failures are swallowed (telemetry should never break a page view).
 */
export async function trackView(slug: string): Promise<void> {
  if (!slug) return;
  try {
    if (KV_AVAILABLE) {
      // ZINCRBY trending:calculators 1 <slug>
      await kvFetch(["zincrby", SORTED_SET_KEY, 1, slug]);
    } else {
      memoryCounts.set(slug, (memoryCounts.get(slug) ?? 0) + 1);
    }
  } catch (err) {
    // never throw from telemetry
    console.warn("trackView failed", err);
  }
}

export interface TrendingRow {
  slug: string;
  views: number;
}

/**
 * Returns the top-N most-viewed slugs in descending order.
 * Empty array if no data has been recorded yet.
 */
export async function getTopTrending(n = 5): Promise<TrendingRow[]> {
  try {
    if (KV_AVAILABLE) {
      // ZREVRANGE trending:calculators 0 n-1 WITHSCORES
      const result = (await kvFetch([
        "zrevrange",
        SORTED_SET_KEY,
        0,
        n - 1,
        "WITHSCORES",
      ])) as string[] | null;
      if (!result || !Array.isArray(result)) return [];
      const rows: TrendingRow[] = [];
      for (let i = 0; i < result.length; i += 2) {
        rows.push({ slug: result[i], views: Number(result[i + 1] ?? 0) });
      }
      return rows;
    }
    // In-memory fallback
    return Array.from(memoryCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, n)
      .map(([slug, views]) => ({ slug, views }));
  } catch (err) {
    console.warn("getTopTrending failed", err);
    return [];
  }
}

export const TELEMETRY_BACKEND: "kv" | "memory" = KV_AVAILABLE ? "kv" : "memory";
