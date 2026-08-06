// Single source of truth for site-wide identity and contact details.
// Used by the legal pages, contact page, and structured data.

export const SITE = {
  name: "BlueberryCalculator.com",
  url: "https://www.blueberrycalculator.com",
  publisher: "Neal Media & Production",
  email: "nealmedia@yahoo.com",
  // Year the site actually launched.
  launched: 2026,
  // Last substantive review of the legal pages. Update when they change.
  policyUpdated: "August 5, 2026",
} as const;
