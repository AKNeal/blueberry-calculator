import type { Metadata } from "next";
import ThemeBody from "@/components/ThemeBody";
import { SITE } from "@/lib/site";
import { BERRY, CUP_ML, CUP_GRAMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "The reference figures behind every BlueberryCalculator.com result — median berry mass, volume, diameter, packing efficiency — and the limits of each.",
};

export default function MethodologyPage() {
  const berriesPerCup = Math.round((CUP_ML * BERRY.PACKING_EFFICIENCY) / BERRY.VOLUME_CM3);

  return (
    <>
      <ThemeBody theme="technical" />
      <main className="doc-page">
        <div className="doc-inner">
          <div className="doc-eyebrow">▸ Reference</div>
          <h1>Methodology</h1>
          <p className="doc-updated">Last reviewed: {SITE.policyUpdated}</p>

          <p className="doc-lede">
            Every calculator on this site resolves to the same reference berry. This page
            documents those constants, how they are applied, and where the approach breaks
            down. If you disagree with a figure, you will at least be able to see exactly
            what you are disagreeing with.
          </p>

          <h2>The reference berry</h2>
          <p>
            We model a single median <em>cultivated highbush</em> blueberry
            (<em>Vaccinium corymbosum</em>), the type sold in clamshells in most
            supermarkets.
          </p>

          <table className="doc-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>Value</th>
                <th>Applied in</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mass</td>
                <td>{BERRY.MASS_G} g</td>
                <td>Weight conversions, nutrition, cost</td>
              </tr>
              <tr>
                <td>Volume</td>
                <td>{BERRY.VOLUME_CM3} cm³</td>
                <td>Volume and container fill</td>
              </tr>
              <tr>
                <td>Diameter</td>
                <td>{BERRY.DIAMETER_MM} mm</td>
                <td>Length, distance, stacking</td>
              </tr>
              <tr>
                <td>Packing efficiency</td>
                <td>{BERRY.PACKING_EFFICIENCY}</td>
                <td>Any &ldquo;how many fit in&rdquo; result</td>
              </tr>
              <tr>
                <td>Energy</td>
                <td>{BERRY.CAL_PER_BERRY} kcal</td>
                <td>Nutrition</td>
              </tr>
            </tbody>
          </table>

          <h2>Why packing efficiency matters</h2>
          <p>
            Berries are roughly spherical, and spheres poured into a container do not fill
            it completely — air occupies the gaps. Random close packing of equal spheres
            converges on about 64% of the available volume, which is the{" "}
            {BERRY.PACKING_EFFICIENCY} figure we apply.
          </p>
          <p>
            This is why you cannot simply divide container volume by berry volume. A
            US cup is {CUP_ML} mL, but only about{" "}
            {Math.round(CUP_ML * BERRY.PACKING_EFFICIENCY)} mL of that becomes fruit —
            roughly <strong>{berriesPerCup} berries</strong>, weighing about {CUP_GRAMS} g.
            Ignoring packing would overstate the count by more than a third.
          </p>

          <h2>Where these figures come from</h2>
          <p>
            Mass and nutritional values derive from USDA FoodData Central entries for raw
            cultivated blueberries. Dimensional figures reflect typical commercial grading
            for fresh highbush fruit. Packing efficiency comes from the standard random
            close packing constant for equal spheres, not from blueberry-specific research.
          </p>
          <p>
            You can consult the underlying nutritional data yourself at{" "}
            <a href="https://fdc.nal.usda.gov/" target="_blank" rel="noopener noreferrer">
              USDA FoodData Central
            </a>
            .
          </p>

          <h2>Known limitations</h2>
          <p>
            We would rather state these plainly than let a confident-looking number imply
            precision that is not there.
          </p>
          <ul>
            <li>
              <strong>Wild berries are much smaller.</strong> Lowbush or &ldquo;wild&rdquo;
              blueberries can run 40% smaller than cultivated fruit. For wild berries,
              counts will be substantially underestimated and weights overestimated.
            </li>
            <li>
              <strong>Cultivar variation is large.</strong> Individual berries commonly
              range from under 1 g to over 3 g. Any single-berry constant is a midpoint,
              not a description of your fruit.
            </li>
            <li>
              <strong>Berries are not perfect spheres.</strong> They are slightly oblate and
              deform under their own weight, so real packing in a deep container is
              modestly denser than the model.
            </li>
            <li>
              <strong>Frozen berries behave differently.</strong> Ice adds volume, and
              frozen fruit does not settle the same way. Expect a few percent of drift.
            </li>
            <li>
              <strong>Cost figures are illustrative.</strong> The default price per berry is
              a placeholder that varies enormously by region and season. Override it with
              your own price for a meaningful result.
            </li>
          </ul>

          <h2>Rounding</h2>
          <p>
            Calculations are performed at full floating-point precision and rounded only
            for display. Very large results are abbreviated (K, M, B, T) for readability,
            which means the displayed figure may differ slightly from the exact value.
          </p>

          <h2>Recipe testing</h2>
          <p>
            Recipes marked <strong>TESTED</strong> have been prepared in our own kitchen and
            the written method reflects what actually worked. Recipes without the stamp are
            developed from established baking and preserving technique but have not yet been
            through our kitchen. We label the difference rather than obscure it.
          </p>

          <h2>Corrections</h2>
          <p>
            If you believe a constant or a formula here is wrong, email{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> with your reasoning and a
            source. We publish our inputs precisely so they can be checked.
          </p>
        </div>
      </main>
    </>
  );
}
