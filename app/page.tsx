import Link from "next/link";
import {
  CALCULATORS,
  CATEGORIES,
  getByCategory,
  getBySlug,
  type Calculator,
} from "@/lib/calculators";
import { RECIPES } from "@/lib/recipes";
import ThemeBody from "@/components/ThemeBody";
import { getTopTrending } from "@/lib/telemetry";

// Re-render the homepage every 60s so trending data stays fresh
export const revalidate = 60;

interface TrendingItem {
  calc: Calculator;
  views: number;
}

function formatViews(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M views`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k views`;
  if (n === 1) return "1 view";
  return `${n} views`;
}

export default async function Home() {
  // Pull real trending data from the telemetry layer.
  // While view counts accumulate (or if KV isn't yet configured), we fall back
  // to calculators marked `trending: true` so the widget is never empty.
  const liveTrending = await getTopTrending(5);

  const liveItems: TrendingItem[] = liveTrending
    .map((row) => {
      const calc = getBySlug(row.slug);
      return calc ? { calc, views: row.views } : null;
    })
    .filter((x): x is TrendingItem => x !== null);

  const trendingItems: TrendingItem[] =
    liveItems.length > 0
      ? liveItems
      : CALCULATORS.filter((c) => c.trending)
          .slice(0, 5)
          .map((calc) => ({ calc, views: 0 }));

  return (
    <>
      <ThemeBody theme="country" />

      {/* Top banner ad */}
      <div className="ad-banner-wrap">
        <div className="ad-slot">
          <div className="ad-inner">
            <span style={{ fontSize: 28 }}>🫐</span>
            <div style={{ textAlign: "left" }}>
              <strong>BerryMaster Pro 5000</strong> — The only kitchen scale
              calibrated in individual blueberries.{" "}
              <span style={{ color: "var(--text-muted)", fontSize: 12 }}>
                Now 24% off →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-main">
          <div className="hero-eyebrow">▸ The Definitive Resource Since 2011</div>
          <h1>
            Every blueberry. <em>Calculated.</em>
          </h1>
          <p className="hero-sub">
            From the median berry (diameter: 12.7mm) to exactly how many fit in a
            9-inch pie dish — BlueberryCalculator.com has computed it. Bakers,
            scientists, and the mildly obsessed — welcome home.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">{CALCULATORS.length}</div>
              <div className="label">Calculators</div>
            </div>
            <div className="hero-stat">
              <div className="num">1.2B</div>
              <div className="label">Berries Counted</div>
            </div>
            <div className="hero-stat">
              <div className="num">14yr</div>
              <div className="label">Serving Bakers</div>
            </div>
            <div className="hero-stat">
              <div className="num">#1</div>
              <div className="label">On Google*</div>
            </div>
          </div>
        </div>

        <div className="hero-side">
          <div className="trending-box">
            <div className="trending-head">
              <span>🔥 Trending Now</span>
              <span>{liveItems.length > 0 ? "Live" : "Featured"}</span>
            </div>
            <ol className="trending-list">
              {trendingItems.map((item, i) => (
                <li key={item.calc.slug}>
                  <span className="rank">{i + 1}</span>
                  <span className="t-title">
                    <Link href={`/${item.calc.slug}`}>{item.calc.short}</Link>
                  </span>
                  <span className="t-views">
                    {item.views > 0 ? formatViews(item.views) : "Featured"}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Featured Recipes strip */}
      <section className="wrap" style={{ marginTop: 10 }}>
        <div className="section-head">
          <h2>Featured Recipes</h2>
          <span className="count">
            <Link href="/recipes" style={{ color: "inherit", textDecoration: "none" }}>
              View all {RECIPES.length} recipes →
            </Link>
          </span>
        </div>
        <div className="recipe-hub-grid" style={{ maxWidth: "none", padding: 0, marginTop: 16 }}>
          {RECIPES.slice(0, 3).map((r) => (
            <Link key={r.slug} href={`/recipes/${r.slug}`} className="recipe-card-link">
              <div
                className="recipe-card-img"
                style={{ backgroundImage: `url(${r.heroImage})` }}
              >
                <span className="recipe-card-cat">{r.category}</span>
              </div>
              <div className="recipe-card-body">
                <h3>{r.title}</h3>
                <div className="recipe-card-meta">
                  <span>{r.time.total}</span>
                  <span>{r.difficulty}</span>
                  <span>{r.yield.split("·")[0].trim()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Category sections */}
      <section className="wrap" style={{ marginTop: 10 }}>
        {CATEGORIES.map((cat) => {
          const items = getByCategory(cat);
          return (
            <div key={cat}>
              <div className="section-head">
                <h2>{cat}</h2>
                <span className="count">{items.length} calculators</span>
              </div>
              <div className="cat-grid">
                {items.map((c) => (
                  <Link key={c.slug} href={`/${c.slug}`} className="cat-card">
                    <span className="ic">{c.icon}</span>
                    <h3>{c.short}</h3>
                    <p>{c.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
