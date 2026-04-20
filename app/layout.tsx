import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer, { FactMarquee } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "BlueberryCalculator.com — The Internet's Blueberry Measurement Resource",
    template: "%s · BlueberryCalculator.com",
  },
  description:
    "13 free calculators for everything blueberry-related. Pie dishes, nutrition, conversions, distances, and the absurd. Based on the USDA median blueberry (12.7mm, 1.5g).",
  metadataBase: new URL("https://www.blueberrycalculator.com"),
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
      </body>
    </html>
  );
}
