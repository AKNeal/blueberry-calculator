"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ThemeBody from "@/components/ThemeBody";
import { RECIPES, RECIPE_CATEGORIES, type RecipeCategory } from "@/lib/recipes";

export default function RecipesHub() {
  const [filter, setFilter] = useState<RecipeCategory | "All">("All");

  const visible = useMemo(
    () => (filter === "All" ? RECIPES : RECIPES.filter((r) => r.category === filter)),
    [filter]
  );

  const testedCount = RECIPES.filter((r) => r.tested).length;

  return (
    <>
      <ThemeBody theme="country" />

      <section className="recipe-hub-header">
        <div className="inner">
          <div className="eyebrow">▸ Recipes — No Fluff, No Life Story</div>
          <h1>
            Just the <em>recipes.</em>
          </h1>
          <p>
            {RECIPES.length} blueberry recipes. Ingredients, steps, and two photos.
            Everything else — pie dish math, muffin scaling, jam yield — lives in the
            calculators, linked where it matters.
            {testedCount > 0 && (
              <>
                {" "}
                Recipes carrying the <strong>TESTED</strong> stamp ({testedCount} of{" "}
                {RECIPES.length}) have been personally tested in our kitchen.
              </>
            )}
          </p>
        </div>
      </section>

      <div className="recipe-filter-bar">
        <span className="label">Filter:</span>
        <button
          className={`recipe-filter ${filter === "All" ? "active" : ""}`}
          onClick={() => setFilter("All")}
        >
          All Recipes
        </button>
        {RECIPE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`recipe-filter ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="recipe-hub-grid">
        {visible.map((r) => (
          <Link key={r.slug} href={`/recipes/${r.slug}`} className="recipe-card-link">
            {r.tested && (
              <span
                className="tested-stamp tested-stamp-card"
                aria-label="Kitchen-tested"
              >
                Tested
              </span>
            )}
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
    </>
  );
}
