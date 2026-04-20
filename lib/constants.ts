// The canonical median blueberry — all calculations reference this
export const BERRY = {
  MASS_G: 1.5,
  VOLUME_CM3: 1.07,
  DIAMETER_MM: 12.7,
  PACKING_EFFICIENCY: 0.64, // random sphere packing
  CAL_PER_BERRY: 0.86,
  COST_PER_BERRY_USD: 0.03,
} as const;

export const CUP_ML = 236.588;
export const CUP_GRAMS = 148;
export const OZ_GRAMS = 28.3495;
export const LB_GRAMS = 453.592;

export function formatNumber(n: number, decimals = 0): string {
  if (!isFinite(n)) return "∞";
  if (Math.abs(n) >= 1e12) return (n / 1e12).toFixed(2) + "T";
  if (Math.abs(n) >= 1e9) return (n / 1e9).toFixed(2) + "B";
  if (Math.abs(n) >= 1e6) return (n / 1e6).toFixed(2) + "M";
  if (Math.abs(n) >= 10000)
    return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
  return n.toLocaleString("en-US", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: 0,
  });
}
