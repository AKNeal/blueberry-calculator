import Link from "next/link";
import { notFound } from "next/navigation";
import ThemeBody from "@/components/ThemeBody";
import PageViewTracker from "@/components/PageViewTracker";
import ArticleBody from "@/components/ArticleBody";
import { ARTICLES, getArticleBySlug, type Article } from "@/lib/articles";
import { getRecipeBySlug } from "@/lib/recipes";
import { getBySlug as getCalc } from "@/lib/calculators";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.dek,
    alternates: { canonical: `${SITE.url}/articles/${article.slug}` },
  };
}

function buildArticleJsonLd(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.dek,
    datePublished: article.published,
    dateModified: article.updated ?? article.published,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/articles/${article.slug}`,
    },
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.publisher },
    articleSection: article.category,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const calc = article.relatedCalculator ? getCalc(article.relatedCalculator) : undefined;
  const recipes = (article.relatedRecipes ?? [])
    .map((s) => getRecipeBySlug(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <>
      <ThemeBody theme="country" />
      <PageViewTracker slug={`articles/${article.slug}`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildArticleJsonLd(article)) }}
      />

      <main className="doc-page">
        <div className="doc-inner">
          <div className="recipe-breadcrumb">
            <Link href="/">Home</Link> <span>/</span>{" "}
            <Link href="/articles">Articles</Link> <span>/</span> {article.short}
          </div>

          <div className="doc-eyebrow">▸ {article.category}</div>
          <h1>{article.title}</h1>
          <p className="doc-updated">
            {article.readMinutes} min read · Published{" "}
            {new Date(article.published + "T00:00:00").toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <p className="doc-lede">{article.dek}</p>

          <ArticleBody blocks={article.body} />

          {calc && (
            <div className="recipe-related-calc">
              <span>Related calculator</span>
              <Link href={`/${calc.slug}`}>
                {calc.icon} {calc.title} →
              </Link>
            </div>
          )}

          {recipes.length > 0 && (
            <>
              <h2>Recipes using this</h2>
              <ul>
                {recipes.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/recipes/${r.slug}`}>{r.title}</Link> — {r.yield}
                  </li>
                ))}
              </ul>
            </>
          )}

          <h2>More guides</h2>
          <ul>
            {ARTICLES.filter((a) => a.slug !== article.slug)
              .slice(0, 5)
              .map((a) => (
                <li key={a.slug}>
                  <Link href={`/articles/${a.slug}`}>{a.title}</Link>
                </li>
              ))}
          </ul>
        </div>
      </main>
    </>
  );
}
