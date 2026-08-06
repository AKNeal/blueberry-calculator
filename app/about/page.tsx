import type { Metadata } from "next";
import ThemeBody from "@/components/ThemeBody";
import { SITE } from "@/lib/site";
import { RECIPES } from "@/lib/recipes";
import { CALCULATORS } from "@/lib/calculators";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Who builds BlueberryCalculator.com, why a site devoted entirely to blueberry measurement exists, and how we decide what goes on it.",
};

export default function AboutPage() {
  return (
    <>
      <ThemeBody theme="country" />
      <main className="doc-page">
        <div className="doc-inner">
          <div className="doc-eyebrow">▸ About</div>
          <h1>About this site</h1>

          <p className="doc-lede">
            {SITE.name} is a free reference for blueberry measurement and cooking. It
            currently hosts {CALCULATORS.length} calculators and {RECIPES.length} recipes,
            and it is published by {SITE.publisher}.
          </p>

          <h2>Why this exists</h2>
          <p>
            Blueberry questions are unusually hard to answer well. How many berries are in
            a cup? How much fruit does a 9-inch pie actually need? If a recipe calls for
            two pounds and your scale is broken, what does that look like in a mixing bowl?
            Search results for questions like these tend to be a thicket of contradictory
            numbers wrapped in a thousand words of preamble.
          </p>
          <p>
            We built the thing we wanted instead: a set of calculators that answer one
            question each, immediately, from a stated and consistent basis — plus recipes
            that start with the ingredient list rather than a childhood anecdote.
          </p>

          <h2>What we publish</h2>
          <p>
            <strong>Calculators.</strong> Each one runs entirely in your browser and works
            from the same reference berry, so results are consistent across the site. The{" "}
            <a href="/methodology">methodology page</a> documents exactly which figures we
            use and where they come from.
          </p>
          <p>
            <strong>Recipes.</strong> Ingredients, steps, two photographs, and the
            occasional note explaining why a step matters. Where a recipe pairs with a
            calculator — scaling muffins, sizing a pie dish, estimating jam yield — we link
            them directly.
          </p>
          <p>
            <strong>Articles.</strong> Longer explanations for questions that need more
            than a number: storage, freezing, substitutions, and why blueberry baked goods
            sometimes turn green.
          </p>

          <h2>How we handle accuracy</h2>
          <p>
            Every calculator is built on published reference data rather than estimates we
            invented, and the underlying constants are stated openly so you can check our
            work or substitute your own figures.
          </p>
          <p>
            We are also honest about the limits. A median berry is a statistical
            convenience, not a real object — actual blueberries vary by cultivar, season,
            and ripeness, and wild berries are markedly smaller than cultivated ones. Our
            results are good estimates, not measurements of your specific fruit.
          </p>
          <p>
            Recipes carry a <strong>TESTED</strong> stamp only after they have been cooked
            in our own kitchen. Untested recipes are developed from established technique
            and clearly carry no stamp. We would rather show you which is which than
            pretend everything has been through the oven.
          </p>

          <h2>How the site is funded</h2>
          <p>
            {SITE.name} is free and supported by advertising. Ads never determine which
            recipes we publish or what a calculator returns. If we ever add affiliate links
            or sponsored content, they will be labeled as such on the page where they
            appear.
          </p>

          <h2>Corrections</h2>
          <p>
            If a number here looks wrong, we want to know — a measurement site that will not
            take corrections is not worth much. Email{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> with the page and the figure
            you are questioning, and we will check it against our sources and correct it if
            you are right.
          </p>

          <h2>Contact</h2>
          <p>
            Questions, corrections, and requests for new calculators are all welcome via
            our <a href="/contact">contact page</a>.
          </p>
        </div>
      </main>
    </>
  );
}
