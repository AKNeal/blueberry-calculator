import type { Metadata } from "next";
import Link from "next/link";
import ThemeBody from "@/components/ThemeBody";
import { ARTICLES, ARTICLE_CATEGORIES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles & Guides",
  description:
    "Practical blueberry guides: measuring, freezing, storage, baking science, and growing. Clear answers with the reasoning shown.",
};

export default function ArticlesHub() {
  return (
    <>
      <ThemeBody theme="country" />

      <section className="recipe-hub-header">
        <div className="inner">
          <div className="eyebrow">▸ Articles — Answers With The Reasoning Shown</div>
          <h1>
            Blueberry <em>guides.</em>
          </h1>
          <p>
            {ARTICLES.length} guides covering the questions a calculator cannot answer on
            its own — how to store fruit, why it turns green, what changes when you use
            frozen berries, and how much a bush actually produces.
          </p>
        </div>
      </section>

      <main className="doc-page">
        <div className="article-hub-grid">
          {ARTICLE_CATEGORIES.map((cat) => {
            const items = ARTICLES.filter((a) => a.category === cat);
            if (items.length === 0) return null;
            return (
              <section key={cat} className="article-cat-block">
                <h2 className="article-cat-title">{cat}</h2>
                {items.map((a) => (
                  <Link key={a.slug} href={`/articles/${a.slug}`} className="article-card">
                    <h3>{a.title}</h3>
                    <p>{a.dek}</p>
                    <div className="article-card-meta">
                      <span>{a.readMinutes} min read</span>
                      <span className="article-card-cat">{a.category}</span>
                    </div>
                  </Link>
                ))}
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}
