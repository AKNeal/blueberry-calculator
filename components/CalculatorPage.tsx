"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { CALCULATORS, type Calculator } from "@/lib/calculators";
import PageViewTracker from "@/components/PageViewTracker";

interface Props {
  calc: Calculator;
  usageCount: string;
  tags?: Array<{ label: string; variant?: "default" | "hot" | "new" }>;
  children: ReactNode;
}

export default function CalculatorPage({ calc, usageCount, tags = [], children }: Props) {
  const related = CALCULATORS.filter(
    (c) => c.category === calc.category && c.slug !== calc.slug
  ).slice(0, 4);

  return (
    <div className="main-layout">
      <PageViewTracker slug={calc.slug} />
      <div>
        <div className="ad-banner-wrap" style={{ padding: 0, marginBottom: 18 }}>
          <div className="ad-slot">
            <div className="ad-inner">
              <span style={{ fontSize: 26 }}>🫐</span>
              <div style={{ textAlign: "left" }}>
                <strong>BerryMaster Pro 5000</strong> — The only kitchen scale
                calibrated in individual blueberries.
                <span style={{ color: "var(--text-muted)", fontSize: 12 }}>
                  &nbsp;Now 24% off →
                </span>
              </div>
            </div>
          </div>
        </div>

        <article className="calc-card">
          <div className="calc-head">
            <div>
              <div style={{ marginBottom: 6 }}>
                {tags.map((t, i) => (
                  <span
                    key={i}
                    className="tag"
                    style={
                      t.variant === "hot"
                        ? { background: "var(--bb-red)", color: "white" }
                        : t.variant === "new"
                        ? { background: "var(--bb-green)", color: "white" }
                        : undefined
                    }
                  >
                    {t.label}
                  </span>
                ))}
              </div>
              <h1>{calc.title}</h1>
            </div>
            <span className="meta">Used {usageCount} × this month</span>
          </div>
          <div className="calc-body">
            <p className="calc-desc">{calc.description}</p>
            {children}
          </div>
        </article>

        {related.length > 0 && (
          <div className="related-strip">
            <h3>Related calculators in {calc.category}</h3>
            <div className="related-grid">
              {related.map((r) => (
                <Link key={r.slug} href={`/${r.slug}`} className="related-card">
                  <span className="ic">{r.icon}</span>
                  <div>
                    <strong>{r.short}</strong>
                    <span>{r.slug}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Sidebar />
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="side-box">
        <div className="side-head">📖 Quick Reference</div>
        <div className="side-body">
          <table className="conv-table">
            <tbody>
              <tr><td>1 median berry</td><td>1.5 g</td></tr>
              <tr><td>Berry diameter</td><td>12.7 mm</td></tr>
              <tr><td>Berry volume</td><td>1.07 cm³</td></tr>
              <tr><td>1 cup berries</td><td>≈ 148 g</td></tr>
              <tr><td>1 cup (count)</td><td>≈ 99 berries</td></tr>
              <tr><td>1 pint berries</td><td>≈ 2 cups</td></tr>
              <tr><td>1 lb berries</td><td>≈ 302 berries</td></tr>
              <tr><td>1 kg berries</td><td>≈ 666 berries</td></tr>
              <tr><td>Pie (9") needs</td><td>≈ 450 berries</td></tr>
              <tr><td>1 berry calories</td><td>≈ 0.86 kcal</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="ad-square">
        <div className="ad-inner">
          <h4>BerryCount™ App</h4>
          <p>
            AI-powered blueberry counting straight from your phone's camera. Count
            1,000+ berries per second.
          </p>
          <button>Download Free</button>
        </div>
      </div>

      <div className="newsletter">
        <h3>Berry Digest</h3>
        <p>One absurdly specific blueberry fact delivered weekly. 94k subscribers.</p>
        <input type="email" placeholder="you@email.com" />
        <button>Subscribe →</button>
      </div>

      <div className="side-box">
        <div className="side-head">⭐ Most Shared</div>
        <div className="side-body">
          <ul style={{ listStyle: "none", fontSize: 13, display: "flex", flexDirection: "column", gap: 9 }}>
            <li>▸ <Link href="/body" style={{ color: "var(--accent)", textDecoration: "none" }}>You in Blueberries</Link></li>
            <li>▸ <Link href="/distance" style={{ color: "var(--accent)", textDecoration: "none" }}>Berries to the Moon</Link></li>
            <li>▸ <Link href="/mouth-capacity" style={{ color: "var(--accent)", textDecoration: "none" }}>The Mouth Limit</Link></li>
            <li>▸ <Link href="/pie-dish" style={{ color: "var(--accent)", textDecoration: "none" }}>Pie Dish Calculator</Link></li>
            <li>▸ <Link href="/bathtub" style={{ color: "var(--accent)", textDecoration: "none" }}>Fill Your Bathtub</Link></li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
