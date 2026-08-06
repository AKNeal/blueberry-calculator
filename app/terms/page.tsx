import type { Metadata } from "next";
import ThemeBody from "@/components/ThemeBody";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms governing your use of BlueberryCalculator.com, including accuracy disclaimers for recipes and calculator results.",
};

export default function TermsPage() {
  return (
    <>
      <ThemeBody theme="country" />
      <main className="doc-page">
        <div className="doc-inner">
          <div className="doc-eyebrow">▸ Legal</div>
          <h1>Terms of Use</h1>
          <p className="doc-updated">Last updated: {SITE.policyUpdated}</p>

          <p className="doc-lede">
            By using {SITE.name}, you agree to these terms. If you disagree with any part
            of them, please do not use the site.
          </p>

          <h2>What this site is</h2>
          <p>
            {SITE.name} provides free measurement calculators and recipes related to
            blueberries. It is an informational and entertainment resource operated by{" "}
            {SITE.publisher}. It is not a professional advisory service of any kind.
          </p>

          <h2>Accuracy of calculators</h2>
          <p>
            Our calculators are built on published reference figures — principally USDA
            data for the dimensions and nutritional content of a median cultivated
            blueberry. Real blueberries vary considerably by cultivar, growing conditions,
            ripeness, and season. A wild blueberry is substantially smaller than a
            cultivated one.
          </p>
          <p>
            Results are estimates. We make no guarantee that any figure produced by this
            site is exact for your particular berries. Do not rely on these calculators
            where precision genuinely matters — commercial purchasing, agricultural
            contracts, laboratory work, or medical decisions among them.
          </p>

          <h2>Recipes, food safety, and allergies</h2>
          <p>
            Recipes are provided for personal, non-commercial use. Cooking involves
            inherent risks including heat, sharp tools, and foodborne illness. You are
            responsible for safe kitchen practice, including verifying that food reaches
            safe temperatures and that preserved foods are processed and stored correctly.
          </p>
          <p>
            Recipes may contain or omit allergens. Always check ingredients against your
            own dietary needs. Where a recipe involves canning or preserving, follow
            current guidance from a food-safety authority such as the USDA or your national
            equivalent; our instructions are not a substitute for it.
          </p>

          <h2>Nutritional information</h2>
          <p>
            Any nutritional figures shown are estimates derived from standard reference
            data. They are not a substitute for advice from a physician, registered
            dietitian, or other qualified health professional. If you have a medical
            condition affected by diet, consult a professional rather than a website about
            blueberries.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The text, recipes, calculators, photography, and design on this site are the
            property of {SITE.publisher} unless otherwise credited. You may print or save
            content for your own personal use, and you may quote brief excerpts with clear
            attribution and a link back to the source page.
          </p>
          <p>
            You may not republish substantial portions of the site, scrape it at scale,
            present our content as your own, or use it to train commercial machine learning
            models without written permission.
          </p>

          <h2>Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Attempt to disrupt, overload, or gain unauthorized access to the site or its infrastructure.</li>
            <li>Use automated tools to harvest content at a rate that burdens the service.</li>
            <li>Interfere with the advertising that funds the site, or attempt to generate invalid ad activity.</li>
            <li>Use the site for any unlawful purpose.</li>
          </ul>

          <h2>Advertising</h2>
          <p>
            This site is supported by advertising. Ads are supplied by third-party networks
            and their presence is not an endorsement of the advertised product or company.
            We do not control which specific ads appear. See our{" "}
            <a href="/privacy">privacy policy</a> for how advertising cookies work and how
            to opt out of personalization.
          </p>

          <h2>Third-party links</h2>
          <p>
            We link to external sites where it is useful — reference sources, food-safety
            authorities, and similar. We do not control those sites and are not responsible
            for their content, accuracy, or practices.
          </p>

          <h2>Disclaimer of warranties</h2>
          <p>
            The site is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without
            warranties of any kind, whether express or implied, including any implied
            warranties of merchantability, fitness for a particular purpose, or accuracy.
            We do not warrant that the site will be uninterrupted, error-free, or free of
            harmful components.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {SITE.publisher} is not liable for any
            indirect, incidental, or consequential damages arising from your use of this
            site — including reliance on a calculator result, the outcome of a recipe, or
            any loss connected to content found here.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We may revise these terms from time to time. Continued use of the site after a
            change constitutes acceptance of the revised terms. The &ldquo;last
            updated&rdquo; date above reflects the current version.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </div>
      </main>
    </>
  );
}
