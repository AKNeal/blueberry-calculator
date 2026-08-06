import type { Metadata } from "next";
import ThemeBody from "@/components/ThemeBody";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "How to reach BlueberryCalculator.com with corrections, recipe questions, calculator requests, or business inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <ThemeBody theme="country" />
      <main className="doc-page">
        <div className="doc-inner">
          <div className="doc-eyebrow">▸ Contact</div>
          <h1>Contact us</h1>

          <p className="doc-lede">
            There is one inbox and a real person reads it. Email{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> and we will usually reply
            within a few business days.
          </p>

          <div className="doc-callout">
            <div className="doc-callout-label">Email</div>
            <a className="doc-callout-value" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <p>Published by {SITE.publisher}</p>
          </div>

          <h2>What to include</h2>
          <p>
            A little context saves a round trip. Whatever you are writing about, the page
            URL is the single most useful thing you can include.
          </p>

          <h3>Reporting an error</h3>
          <p>
            Tell us the page, the number you saw, and the number you expected. If you have
            a source for the correct figure, include it. Corrections are the most useful
            mail we get, and we act on them.
          </p>

          <h3>Recipe questions</h3>
          <p>
            Include the recipe name and the step you are stuck on. If something went wrong,
            details help enormously: pan size, whether the berries were fresh or frozen,
            and what the result actually looked like.
          </p>

          <h3>Requesting a calculator</h3>
          <p>
            Describe the question you are trying to answer and we will consider building it.
            Several calculators on the site started as reader suggestions.
          </p>

          <h3>Press and business</h3>
          <p>
            For advertising, licensing, syndication, or press inquiries, email the address
            above with &ldquo;Business&rdquo; in the subject line.
          </p>

          <h3>Privacy requests</h3>
          <p>
            For access, correction, or deletion requests, write to the same address with
            &ldquo;Privacy&rdquo; in the subject line. Our{" "}
            <a href="/privacy">privacy policy</a> explains what we collect, which is very
            little.
          </p>

          <h2>What we cannot help with</h2>
          <p>
            We are a measurement and recipe site, not agronomists, dietitians, or
            physicians. We cannot diagnose plant disease, give medical or nutritional
            advice, or advise on commercial farming decisions. For those, please consult a
            qualified professional or your regional agricultural extension service.
          </p>
        </div>
      </main>
    </>
  );
}
