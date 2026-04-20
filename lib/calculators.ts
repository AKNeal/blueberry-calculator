export type Theme = "country" | "technical" | "absurd";

export interface Calculator {
  slug: string;
  title: string;
  short: string;
  category: Category;
  theme: Theme;
  icon: string;
  trending?: boolean;
  description: string;
}

export type Category =
  | "Recipes"
  | "Measurement & Science"
  | "Just For Fun";

export const CALCULATORS: Calculator[] = [
  // ============ RECIPES (country theme) ============
  {
    slug: "pie-dish",
    title: "Pie Dish Blueberry Calculator",
    short: "Pie Dish",
    category: "Recipes",
    theme: "country",
    icon: "🥧",
    trending: true,
    description:
      "How many blueberries you actually need for your pie — accounts for dish size, filling depth, and crust style.",
  },
  {
    slug: "muffin-scaler",
    title: "Muffin & Batch Recipe Scaler",
    short: "Muffin Scaler",
    category: "Recipes",
    theme: "country",
    icon: "🧁",
    description:
      "Scale any baked-good recipe. Standard muffins use about 8 berries; bakery-style run 12–15.",
  },
  {
    slug: "jam-yield",
    title: "Jam, Syrup & Preserve Yield",
    short: "Jam Yield",
    category: "Recipes",
    theme: "country",
    icon: "🍯",
    description:
      "One pound of blueberries produces about 1.5 cups of jam after reduction. Calculate your exact yield.",
  },
  {
    slug: "nutrition",
    title: "Blueberry Nutrition Calculator",
    short: "Nutrition",
    category: "Recipes",
    theme: "country",
    icon: "🌿",
    description:
      "Calories, carbs, fiber, sugar, and protein for any quantity of fresh blueberries.",
  },

  // ============ MEASUREMENT & SCIENCE (technical theme) ============
  {
    slug: "median-berry",
    title: "Median Blueberry Unit Converter",
    short: "Unit Converter",
    category: "Measurement & Science",
    theme: "technical",
    icon: "📐",
    trending: true,
    description:
      "Convert between berry count, grams, ounces, volume, and cups using the USDA median berry (12.7mm, 1.5g).",
  },
  {
    slug: "volume",
    title: "Volume → Berry Count Converter",
    short: "Volume",
    category: "Measurement & Science",
    theme: "technical",
    icon: "⚗️",
    description:
      "Any kitchen volume to berry count, factoring in natural packing efficiency (~64%).",
  },
  {
    slug: "physics",
    title: "Blueberry Physics Calculator",
    short: "Physics",
    category: "Measurement & Science",
    theme: "technical",
    icon: "🔬",
    description:
      "Impact velocity, terminal velocity, and maximum stack height before structural collapse.",
  },
  {
    slug: "bush-yield",
    title: "Bush Yield & Harvest Estimator",
    short: "Bush Yield",
    category: "Measurement & Science",
    theme: "technical",
    icon: "📊",
    description:
      "A mature highbush plant yields 5–10 lb per season. Estimate harvest by variety, age, and count.",
  },
  {
    slug: "cost",
    title: "Cost-per-Blueberry Calculator",
    short: "Cost Per Berry",
    category: "Measurement & Science",
    theme: "technical",
    icon: "💰",
    description:
      "Settle any grocery debate — translates price and package size into cost per individual berry.",
  },

  // ============ JUST FOR FUN (absurd theme) ============
  {
    slug: "bathtub",
    title: "Blueberries-to-Fill-Your-Bathtub",
    short: "Bathtub Fill",
    category: "Just For Fun",
    theme: "absurd",
    icon: "🛁",
    trending: true,
    description:
      "The question that started everything. Fill containers ranging from a shoe to an Olympic pool.",
  },
  {
    slug: "distance",
    title: "Blueberries End-to-End Distance",
    short: "Distance",
    category: "Just For Fun",
    theme: "absurd",
    icon: "🛰️",
    description:
      "How many berries to span a marathon, the US coast-to-coast, or the distance to the Moon.",
  },
  {
    slug: "body",
    title: "Your Body in Blueberries",
    short: "Body Mass",
    category: "Just For Fun",
    theme: "absurd",
    icon: "⚖️",
    description:
      "How many blueberries equal your exact body mass — and what that would cost at grocery store prices.",
  },
  {
    slug: "mouth-capacity",
    title: "Maximum Mouth Capacity",
    short: "Mouth Capacity",
    category: "Just For Fun",
    theme: "absurd",
    icon: "😬",
    description:
      "An estimate of maximum oral blueberry volume, with a responsible-adult safety setting. For reference only.",
  },
];

export const CATEGORIES: Category[] = [
  "Recipes",
  "Measurement & Science",
  "Just For Fun",
];

export function getBySlug(slug: string) {
  return CALCULATORS.find((c) => c.slug === slug);
}

export function getByCategory(cat: Category) {
  return CALCULATORS.filter((c) => c.category === cat);
}
