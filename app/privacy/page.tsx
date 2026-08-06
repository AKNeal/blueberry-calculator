import type { Metadata } from "next";
import ThemeBody from "@/components/ThemeBody";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How BlueberryCalculator.com collects, uses, and protects your information, including cookies, analytics, and advertising partners.",
};

export default function PrivacyPage() {
  return (
    <>
      <ThemeBody theme="country" />
      <main className="doc-page">
        <div className="doc-inner">
          <div className="doc-eyebrow">▸ Legal</div>
          <h1>Privacy Policy</h1>
          <p className="doc-updated">Last updated: {SITE.policyUpdated}</p>

          <p className="doc-lede">
            {SITE.name} is operated by {SITE.publisher}. This policy explains what
            information we collect when you visit the site, why we collect it, and the
            choices you have. We have tried to write it in plain language rather than
            legal boilerplate.
          </p>

          <h2>The short version</h2>
          <ul>
            <li>We do not ask you to create an account, and we do not sell your personal information.</li>
            <li>Anything you type into a calculator is processed in your browser and is not sent to us or stored.</li>
            <li>We use analytics to count page views and understand which calculators people use.</li>
            <li>We display advertising, and our advertising partners may use cookies.</li>
          </ul>

          <h2>Information we collect</h2>

          <h3>Information you enter into calculators</h3>
          <p>
            Every calculator on this site runs entirely in your web browser. The numbers
            you type — quantities, dish sizes, costs, body weights, or anything else — are
            used to compute a result on your own device. They are not transmitted to our
            servers, not written to a database, and not retained after you close or reload
            the page.
          </p>

          <h3>Information collected automatically</h3>
          <p>
            Like most websites, we collect a limited amount of technical information
            automatically when you visit. This may include your approximate location
            derived from your IP address (typically at the country or region level), your
            browser type and version, your device type and screen size, the pages you
            visit and how long you stay, and the referring site or search engine that sent
            you here.
          </p>
          <p>
            We use this in aggregate to understand what is useful and what is broken. We do
            not attempt to identify individual visitors from it.
          </p>

          <h3>Information you send us directly</h3>
          <p>
            If you email us, we receive whatever you choose to include in that message,
            including your email address. We use it only to reply to you and to address the
            issue you raised. We do not add you to a mailing list from an email inquiry.
          </p>

          <h2>Cookies and similar technologies</h2>
          <p>
            A cookie is a small text file a website stores in your browser. We and our
            partners use them for a few distinct purposes:
          </p>
          <ul>
            <li>
              <strong>Essential:</strong> remembering interface preferences, such as your
              selected display theme, so the site behaves consistently between visits.
            </li>
            <li>
              <strong>Analytics:</strong> distinguishing one visit from another so that
              traffic counts are meaningful.
            </li>
            <li>
              <strong>Advertising:</strong> set by our advertising partners to measure ad
              performance and, where permitted, to show more relevant ads.
            </li>
          </ul>
          <p>
            You can block or delete cookies in your browser settings. Every major browser
            allows this. Blocking cookies will not break the calculators, though it may
            reset your display preferences on each visit.
          </p>

          <h2>Analytics</h2>
          <p>
            We use Vercel Analytics and Vercel Speed Insights to measure traffic and page
            performance. These services are designed to be privacy-friendly and report
            aggregate data such as page view counts and load times. We also record basic
            page view events on our own infrastructure for the same purpose.
          </p>

          <h2>Advertising</h2>
          <p>
            This site is supported by advertising. We work with third-party advertising
            partners, which may include Google AdSense and other advertising networks, to
            display ads on our pages.
          </p>
          <p>
            Third-party vendors, including Google, use cookies to serve ads based on your
            prior visits to this or other websites. Google&rsquo;s use of advertising
            cookies enables it and its partners to serve ads to you based on your visit to
            this site and other sites on the internet.
          </p>
          <p>
            You may opt out of personalized advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>
            . You can also opt out of third-party vendor cookies for personalized
            advertising at{" "}
            <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
              aboutads.info/choices
            </a>{" "}
            or{" "}
            <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">
              optout.networkadvertising.org
            </a>
            . Opting out means you will still see ads, but they will be less relevant to
            you.
          </p>

          <h2>Your rights</h2>
          <p>
            Depending on where you live, you may have specific rights regarding your
            personal information.
          </p>
          <p>
            <strong>If you are in the European Economic Area or the United Kingdom (GDPR):</strong>{" "}
            you have the right to access the personal data we hold about you, to have it
            corrected or erased, to restrict or object to its processing, and to lodge a
            complaint with your national data protection authority.
          </p>
          <p>
            <strong>If you are a California resident (CCPA/CPRA):</strong> you have the
            right to know what personal information is collected about you, to request its
            deletion, and to opt out of its sale or sharing. We do not sell personal
            information as that term is commonly understood.
          </p>
          <p>
            To exercise any of these rights, email us at{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Because we do not maintain
            user accounts, we may need additional information to locate any records
            associated with you.
          </p>

          <h2>Children&rsquo;s privacy</h2>
          <p>
            This site is intended for a general audience and is not directed at children
            under 13. We do not knowingly collect personal information from children under
            13. If you believe a child has provided us with personal information, contact
            us and we will delete it.
          </p>

          <h2>Data retention and security</h2>
          <p>
            Aggregate analytics data is retained only as long as it is useful for
            understanding site trends. Email correspondence is retained as long as needed
            to resolve the matter it concerns. We take reasonable measures to protect the
            limited information we hold, though no method of transmission over the internet
            is completely secure.
          </p>

          <h2>Third-party links</h2>
          <p>
            Our pages sometimes link to outside websites, including sources we cite for
            nutritional or measurement data. We are not responsible for the privacy
            practices of those sites, and we encourage you to read their policies.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy as the site changes or as legal requirements evolve.
            When we do, we will revise the &ldquo;last updated&rdquo; date at the top of
            this page. Material changes will be noted prominently.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, or through our{" "}
            <a href="/contact">contact page</a>.
          </p>
        </div>
      </main>
    </>
  );
}
