import Link from "next/link";
import { notFound } from "next/navigation";
import ThemeBody from "@/components/ThemeBody";
import { RECIPES, getRecipeBySlug } from "@/lib/recipes";
import { getBySlug as getCalc } from "@/lib/calculators";

// Pre-generate routes for all recipes at build time
export function generateStaticParams() {
  return RECIPES.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const recipe = getRecipeBySlug(params.slug);
  if (!recipe) return { title: "Recipe not found" };
  return {
    title: recipe.title,
    description: `${recipe.title} recipe — ${recipe.yield}. ${recipe.time.total} total. ${recipe.difficulty}.`,
  };
}

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = getRecipeBySlug(params.slug);
  if (!recipe) notFound();

  const relatedCalc = recipe.relatedCalculator
    ? getCalc(recipe.relatedCalculator)
    : null;

  return (
    <>
      <ThemeBody theme="country" />

      <div className="recipe-page">
        <div className="recipe-breadcrumb">
          <Link href="/">Home</Link> / <Link href="/recipes">Recipes</Link> /{" "}
          {recipe.category}
        </div>

        <div className="recipe-title-block">
          <span className="recipe-category-tag">{recipe.category}</span>
          <h1>{recipe.title}</h1>
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
