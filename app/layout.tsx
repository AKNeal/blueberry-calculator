import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer, { FactMarquee } from "@/components/Footer";
import { SITE } from "@/lib/site";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const DESCRIPTION =
  "Free blueberry calculators and tested recipes. Pie dishes, nutrition, conversions, jam yield, and more — all based on the USDA median blueberry (12.7mm, 1.5g).";

export const metadata: Metadata = {
  title: {
    default: "BlueberryCalculator.com — The Internet's Blueberry Measurement Resource",
    template: "%s · BlueberryCalculator.com",
  },
  description: DESCRIPTION,
  metadataBase: new URL(SITE.url),
  alternates: { canonical: "/" },
  applicationName: SITE.name,
  authors: [{ name: SITE.publisher }],
  creator: SITE.publisher,
  publisher: SITE.publisher,
  keywords: [
    "blueberry calculator",
    "blueberries in a cup",
    "blueberry recipes",
    "blueberry nutrition",
    "blueberry conversion",
    "blueberry pie calculator",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: "BlueberryCalculator.com — The Internet's Blueberry Measurement Resource",
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/recipes/classic-blueberry-pie-hero.jpg",
        width: 1200,
        height: 800,
        alt: "A classic blueberry pie with a golden lattice crust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueberryCalculator.com",
    description: DESCRIPTION,
    images: ["/recipes/classic-blueberry-pie-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-theme="country">
        <Header />
        {children}
        <FactMarquee />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
