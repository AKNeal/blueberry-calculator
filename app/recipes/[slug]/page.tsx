import Link from "next/link";
import { notFound } from "next/navigation";
import ThemeBody from "@/components/ThemeBody";
import PageViewTracker from "@/components/PageViewTracker";
import { RECIPES, getRecipeBySlug, type Recipe } from "@/lib/recipes";
import { getBySlug as getCalc } from "@/lib/calculators";

// Pre-generate routes for all recipes at build time
export function generateStaticParams() {
  return RECIPES.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const recipe = getRecipeBySlug(params.slug);
  if (!recipe) return { title: "Recipe not found" };
  const desc = `${recipe.title} recipe — ${recipe.yield}. ${recipe.time.total} total. ${recipe.difficulty}.`;
  const img = recipe.heroImage.startsWith("http")
    ? recipe.heroImage
    : `${SITE_ORIGIN}${recipe.heroImage}`;
  return {
    title: recipe.title,
    description: desc,
    alternates: { canonical: `/recipes/${recipe.slug}` },
    openGraph: {
      type: "article",
      title: recipe.title,
      description: desc,
      url: `${SITE_ORIGIN}/recipes/${recipe.slug}`,
      images: [{ url: img, width: 1200, height: 800, alt: recipe.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: recipe.title,
      description: desc,
      images: [img],
    },
  };
}

const SITE_ORIGIN = "https://www.blueberrycalculator.com";

// ISO-8601 duration formatter — Schema.org requires durations like PT25M / PT1H20M.
function toIso8601Duration(human: string): string {
  // Accept "25 min", "1 hr 20 min", "55 min", "1 hr". Strip stray words.
  const cleaned = human.toLowerCase().replace(/[^0-9hr min ]/g, "");
  const hMatch = cleaned.match(/(\d+)\s*hr/);
  const mMatch = cleaned.match(/(\d+)\s*min/);
  const h = hMatch ? parseInt(hMatch[1], 10) : 0;
  const m = mMatch ? parseInt(mMatch[1], 10) : 0;
  if (!h && !m) return "PT0M";
  return `PT${h ? `${h}H` : ""}${m ? `${m}M` : ""}`;
}

function buildRecipeJsonLd(recipe: Recipe) {
  const url = `${SITE_ORIGIN}/recipes/${recipe.slug}`;
  const heroAbsolute = recipe.heroImage.startsWith("http")
    ? recipe.heroImage
    : `${SITE_ORIGIN}${recipe.heroImage}`;

  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: `${recipe.title} — ${recipe.yield}. ${recipe.time.total} total time. ${recipe.difficulty}.`,
    image: [heroAbsolute],
    author: {
      "@type": "Organization",
      name: "BlueberryCalculator.com",
      url: SITE_ORIGIN,
    },
    recipeCategory: recipe.category,
    recipeCuisine: "American",
    keywords: ["blueberry", recipe.category.toLowerCase(), recipe.title.toLowerCase()].join(", "),
    recipeYield: recipe.yield,
    prepTime: toIso8601Duration(recipe.time.prep),
    cookTime: toIso8601Duration(recipe.time.cook),
    totalTime: toIso8601Duration(recipe.time.total),
    recipeIngredient: recipe.ingredients.map((ing) => `${ing.amount} ${ing.item}`),
    recipeInstructions: recipe.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: step,
    })),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };
}

function buildBreadcrumbJsonLd(recipe: Recipe) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
      { "@type": "ListItem", position: 2, name: "Recipes", item: `${SITE_ORIGIN}/recipes` },
      {
        "@type": "ListItem",
        position: 3,
        name: recipe.title,
        item: `${SITE_ORIGIN}/recipes/${recipe.slug}`,
      },
    ],
  };
}

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = getRecipeBySlug(params.slug);
  if (!recipe) notFound();

  const relatedCalc = recipe.relatedCalculator
    ? getCalc(recipe.relatedCalculator)
    : null;

  const jsonLd = buildRecipeJsonLd(recipe);

  return (
    <>
      <ThemeBody theme="country" />

      <PageViewTracker slug={`recipe:${recipe.slug}`} />

      {/* Recipe JSON-LD for Google rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbJsonLd(recipe)),
        }}
      />

      <div className="recipe-page">
        <div className="recipe-breadcrumb">
          <Link href="/">Home</Link> / <Link href="/recipes">Recipes</Link> /{" "}
          {recipe.category}
        </div>

        <div className="recipe-title-block">
          <span className="recipe-category-tag">{recipe.category}</span>
          <h1>
            {recipe.title}
            {recipe.tested && (
              <span
                className="tested-stamp tested-stamp-page"
                aria-label="Kitchen-tested"
              >
                Tested
              </span>
            )}
          </h1>
          <div className="recipe-stats">
            <div className="recipe-stat">
              <span className="stat-label">Prep</span>
              <span className="stat-value">{recipe.time.prep}</span>
            </div>
            <div className="recipe-stat">
              <span className="stat-label">Cook</span>
              <span className="stat-value">{recipe.time.cook}</span>
            </div>
            <div className="recipe-stat">
              <span className="stat-label">Total</span>
              <span className="stat-value">{recipe.time.total}</span>
            </div>
            <div className="recipe-stat">
              <span className="stat-label">Yield</span>
              <span className="stat-value">{recipe.yield}</span>
            </div>
            <div className="recipe-stat">
              <span className="stat-label">Difficulty</span>
              <span className="stat-value">{recipe.difficulty}</span>
            </div>
          </div>
        </div>

        <div
          className="recipe-hero-img"
          style={{ backgroundImage: `url(${recipe.heroImage})` }}
          role="img"
          aria-label={`Finished ${recipe.title}`}
        />

        <div className="recipe-content">
          <div className="recipe-ingredients">
            <div
              className="recipe-ingredients-img"
              style={{ backgroundImage: `url(${recipe.ingredientsImage})` }}
              role="img"
              aria-label={`Ingredients for ${recipe.title}`}
            />
            <h2>Ingredients</h2>
            <ul>
              {recipe.ingredients.map((ing, i) => (
                <li key={i}>
                  <span className="amount">{ing.amount}</span>
                  <span className="item">
                    {ing.item}
                    {ing.berries && (
                      <span className="berry-note">
                        ≈ {ing.berries} median blueberries
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="recipe-steps">
            <h2>Steps</h2>
            <ol>
              {recipe.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>

            {recipe.notes && recipe.notes.length > 0 && (
              <div className="recipe-notes">
                <h3>Notes</h3>
                <ul>
                  {recipe.notes.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              </div>
            )}

            {relatedCalc && (
              <div className="recipe-related-calc">
                <div>
                  <strong>Scale this recipe</strong>
                  <p>
                    Making a different-sized batch? Run the numbers through the{" "}
                    {relatedCalc.short} calculator.
                  </p>
                </div>
                <Link href={`/${relatedCalc.slug}`}>Open Calculator →</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
