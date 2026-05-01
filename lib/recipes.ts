// ============================================
// RECIPE REGISTRY — single source of truth
// Add a recipe here, it appears on the hub + gets its own page automatically
// ============================================

export interface Ingredient {
  amount: string;       // "2 cups" or "1/2 tsp"
  item: string;         // "blueberries, fresh or frozen"
  berries?: number;     // optional — # of median blueberries this represents
}

export interface Recipe {
  slug: string;
  title: string;
  short: string;        // listing-card title
  category: RecipeCategory;
  yield: string;        // "9-inch pie, serves 8"
  time: {
    prep: string;
    cook: string;
    total: string;
  };
  difficulty: "Easy" | "Medium" | "Advanced";
  // Image paths — relative to /public.
  // Convention: /placeholders/recipes/{slug}-hero.jpg until the real photo is added,
  // then move to /recipes/{slug}-hero.jpg and update both fields here.
  heroImage: string;
  ingredientsImage: string;
  ingredients: Ingredient[];
  steps: string[];
  // Which calculator on the site this pairs with
  relatedCalculator?: string;
  notes?: string[];
  // Marked true ONLY after Neal has personally tested the recipe in his own kitchen.
  // When true, the "TESTED" stamp renders on the recipe hub card and recipe page.
  tested?: boolean;
}

export type RecipeCategory =
  | "Pies & Tarts"
  | "Breakfast"
  | "Preserves"
  | "Baked Goods";

export const RECIPE_CATEGORIES: RecipeCategory[] = [
  "Pies & Tarts",
  "Breakfast",
  "Preserves",
  "Baked Goods",
];

// Image path helpers.
// All recipes currently use a single shared placeholder SVG — the slug+kind
// arguments are kept in the signature for self-documentation only.
//
// Workflow when a real photo arrives:
//   1. Drop the file at /public/recipes/{slug}-{hero|ingredients}.jpg
//   2. In that recipe's entry below, swap `placeholderImg("foo", "hero")`
//      for `recipeImg("foo", "hero")` and the same for ingredients.
//   3. Commit. The new image will appear on next build.
//
// See /public/placeholders/README.md for image specs (1200×800, JPEG, etc.).
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const placeholderImg = (_slug: string, _kind: "hero" | "ingredients") =>
  `/placeholders/recipe-placeholder.svg`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const recipeImg = (slug: string, kind: "hero" | "ingredients") =>
  `/recipes/${slug}-${kind}.jpg`;

export const RECIPES: Recipe[] = [
  // ============ PIES & TARTS ============
  {
    slug: "classic-blueberry-pie",
    title: "Classic Blueberry Pie",
    short: "Classic Blueberry Pie",
    category: "Pies & Tarts",
    yield: "One 9-inch pie · serves 8",
    time: { prep: "25 min", cook: "55 min", total: "1 hr 20 min + cooling" },
    difficulty: "Medium",
    heroImage: placeholderImg("classic-blueberry-pie", "hero"),
    ingredientsImage: placeholderImg("classic-blueberry-pie", "ingredients"),
    tested: false,
    ingredients: [
      { amount: "2 (9-inch)", item: "pie crusts, chilled (homemade or store-bought)" },
      { amount: "6 cups", item: "fresh blueberries", berries: 594 },
      { amount: "3/4 cup", item: "granulated sugar" },
      { amount: "1/4 cup", item: "cornstarch" },
      { amount: "1 tbsp", item: "lemon juice" },
      { amount: "1 tsp", item: "lemon zest" },
      { amount: "1/4 tsp", item: "ground cinnamon" },
      { amount: "1/4 tsp", item: "fine salt" },
      { amount: "2 tbsp", item: "unsalted butter, cut into small pieces" },
      { amount: "1", item: "egg, beaten (for wash)" },
      { amount: "1 tbsp", item: "coarse sugar (for topping)" },
    ],
    steps: [
      "Preheat oven to 400°F (205°C). Place a rack in the lower third and put a foil-lined baking sheet on it.",
      "Roll out one pie crust and fit it into a 9-inch pie dish. Refrigerate while making the filling.",
      "In a large bowl, toss blueberries with sugar, cornstarch, lemon juice, lemon zest, cinnamon, and salt until evenly coated.",
      "Pour the filling into the chilled crust and mound it slightly in the center. Dot the top with butter pieces.",
      "Roll out the second crust. Either place it whole over the pie and cut 4–5 steam vents, or cut into strips and weave a lattice. Crimp the edges.",
      "Brush the top crust with beaten egg and sprinkle with coarse sugar.",
      "Bake for 20 minutes at 400°F, then reduce heat to 375°F (190°C) and bake another 35–45 minutes, until the filling is bubbling thickly in the center and the crust is deep golden.",
      "Cool on a wire rack for at least 3 hours — this is not optional. The filling needs time to set or it will run.",
    ],
    relatedCalculator: "pie-dish",
    notes: [
      "Frozen blueberries work — do not thaw, and add an extra tablespoon of cornstarch.",
      "If the crust edges brown too fast, cover them with foil strips or a pie shield.",
    ],
  },

  // ============ BREAKFAST ============
  {
    slug: "blueberry-muffins",
    title: "Bakery-Style Blueberry Muffins",
    short: "Blueberry Muffins",
    category: "Breakfast",
    yield: "12 muffins",
    time: { prep: "15 min", cook: "25 min", total: "40 min" },
    difficulty: "Easy",
    heroImage: placeholderImg("blueberry-muffins", "hero"),
    ingredientsImage: placeholderImg("blueberry-muffins", "ingredients"),
    tested: false,
    ingredients: [
      { amount: "2 cups", item: "all-purpose flour" },
      { amount: "1 cup", item: "granulated sugar" },
      { amount: "2 tsp", item: "baking powder" },
      { amount: "1/2 tsp", item: "fine salt" },
      { amount: "1/2 cup", item: "unsalted butter, melted and slightly cooled" },
      { amount: "2", item: "large eggs" },
      { amount: "1/2 cup", item: "whole milk" },
      { amount: "1/2 cup", item: "sour cream or Greek yogurt" },
      { amount: "1 tsp", item: "vanilla extract" },
      { amount: "1 1/2 cups", item: "fresh blueberries", berries: 148 },
      { amount: "2 tbsp", item: "coarse sugar (for topping)" },
    ],
    steps: [
      "Preheat oven to 425°F (220°C). Line a standard 12-cup muffin tin with paper liners.",
      "Whisk flour, sugar, baking powder, and salt in a large bowl.",
      "In a separate bowl, whisk melted butter, eggs, milk, sour cream, and vanilla until smooth.",
      "Pour the wet ingredients into the dry and fold with a spatula until just combined — lumps are fine. Do not overmix.",
      "Toss the blueberries with 1 tablespoon of flour (from the measured amount above), then fold gently into the batter.",
      "Divide the batter evenly among the 12 cups, filling them to the top. Sprinkle each with coarse sugar.",
      "Bake at 425°F for 5 minutes, then reduce heat to 375°F (190°C) without opening the oven. Bake for another 18–20 minutes, until tops are domed and a toothpick comes out clean.",
      "Let cool in the pan for 5 minutes, then transfer to a wire rack.",
    ],
    relatedCalculator: "muffin-scaler",
    notes: [
      "The initial 425°F burst gives you the tall, domed bakery shape.",
      "Tossing berries in flour keeps them suspended instead of sinking.",
    ],
  },

  {
    slug: "blueberry-pancakes",
    title: "Buttermilk Blueberry Pancakes",
    short: "Blueberry Pancakes",
    category: "Breakfast",
    yield: "About 12 pancakes · serves 4",
    time: { prep: "10 min", cook: "15 min", total: "25 min" },
    difficulty: "Easy",
    heroImage: placeholderImg("blueberry-pancakes", "hero"),
    ingredientsImage: placeholderImg("blueberry-pancakes", "ingredients"),
    tested: false,
    ingredients: [
      { amount: "1 1/2 cups", item: "all-purpose flour" },
      { amount: "2 tbsp", item: "granulated sugar" },
      { amount: "2 tsp", item: "baking powder" },
      { amount: "1/2 tsp", item: "baking soda" },
      { amount: "1/2 tsp", item: "fine salt" },
      { amount: "1 1/4 cups", item: "buttermilk" },
      { amount: "2", item: "large eggs" },
      { amount: "3 tbsp", item: "unsalted butter, melted (plus more for the pan)" },
      { amount: "1 tsp", item: "vanilla extract" },
      { amount: "1 cup", item: "fresh blueberries", berries: 99 },
    ],
    steps: [
      "Whisk flour, sugar, baking powder, baking soda, and salt in a large bowl.",
      "In a separate bowl, whisk buttermilk, eggs, melted butter, and vanilla.",
      "Pour the wet into the dry and stir just until combined. The batter should be thick and lumpy — overmixing makes tough pancakes.",
      "Heat a non-stick skillet or griddle over medium-low. Butter it lightly.",
      "Pour 1/4 cup of batter per pancake. Immediately drop 6–8 blueberries onto each one.",
      "Cook 2–3 minutes until bubbles form across the surface and the edges look set. Flip and cook another 1–2 minutes until golden.",
      "Keep finished pancakes warm in a 200°F oven in a single layer while you cook the rest.",
    ],
    notes: [
      "Dropping berries onto the batter in the pan (rather than stirring them in) prevents the batter from turning gray.",
      "If you only have regular milk, add 1 tablespoon of lemon juice or vinegar and let it sit 5 minutes.",
    ],
  },

  // ============ PRESERVES ============
  {
    slug: "blueberry-jam",
    title: "Small-Batch Blueberry Jam",
    short: "Blueberry Jam",
    category: "Preserves",
    yield: "About 3 cups · three 8-oz jars",
    time: { prep: "10 min", cook: "25 min", total: "35 min" },
    difficulty: "Easy",
    heroImage: placeholderImg("blueberry-jam", "hero"),
    ingredientsImage: placeholderImg("blueberry-jam", "ingredients"),
    tested: false,
    ingredients: [
      { amount: "2 lb", item: "fresh blueberries (about 6 cups)", berries: 604 },
      { amount: "1 1/2 cups", item: "granulated sugar" },
      { amount: "3 tbsp", item: "lemon juice (about 1 large lemon)" },
      { amount: "1 tsp", item: "lemon zest" },
      { amount: "1/4 tsp", item: "fine salt" },
    ],
    steps: [
      "Combine blueberries, sugar, lemon juice, zest, and salt in a heavy wide-bottomed pot. Stir to coat.",
      "Let the mixture sit for 10 minutes — the sugar will draw out the blueberry juice.",
      "Place a small plate in the freezer (you'll use this to test the set later).",
      "Bring the mixture to a boil over medium-high heat, stirring often. Once boiling, mash about half the berries with a potato masher or the back of a spoon.",
      "Continue boiling, stirring frequently to prevent scorching, for about 15–20 minutes. The jam should thicken and reduce by roughly a third.",
      "Test the set: drop a small spoonful on the cold plate. Wait 30 seconds, then push it with your finger. If it wrinkles and holds its shape, it's done. If it runs, cook another 2–3 minutes and test again.",
      "Ladle into clean 8-oz jars, leaving 1/4 inch of headspace. Cool to room temperature, then refrigerate.",
    ],
    relatedCalculator: "jam-yield",
    notes: [
      "Refrigerator jam keeps for 3 weeks. For shelf-stable jam, process sealed jars in a boiling water bath for 10 minutes.",
      "No pectin needed — the lemon juice and cooking time do the work.",
    ],
  },

  // ============ BAKED GOODS ============
  {
    slug: "blueberry-scones",
    title: "Blueberry Cream Scones",
    short: "Blueberry Scones",
    category: "Baked Goods",
    yield: "8 scones",
    time: { prep: "15 min", cook: "22 min", total: "37 min" },
    difficulty: "Medium",
    heroImage: placeholderImg("blueberry-scones", "hero"),
    ingredientsImage: placeholderImg("blueberry-scones", "ingredients"),
    tested: false,
    ingredients: [
      { amount: "2 1/2 cups", item: "all-purpose flour" },
      { amount: "1/3 cup", item: "granulated sugar" },
      { amount: "1 tbsp", item: "baking powder" },
      { amount: "1/2 tsp", item: "fine salt" },
      { amount: "1/2 cup", item: "cold unsalted butter, cubed" },
      { amount: "1 cup", item: "fresh blueberries", berries: 99 },
      { amount: "3/4 cup", item: "heavy cream, plus 2 tbsp for brushing" },
      { amount: "1", item: "large egg" },
      { amount: "1 tsp", item: "vanilla extract" },
      { amount: "2 tbsp", item: "coarse sugar (for topping)" },
    ],
    steps: [
      "Preheat oven to 400°F (205°C). Line a baking sheet with parchment.",
      "Whisk flour, sugar, baking powder, and salt in a large bowl.",
      "Add cold cubed butter. Use your fingertips or a pastry cutter to work it in until the mixture looks like coarse crumbs with some pea-sized butter pieces remaining.",
      "Gently toss the blueberries into the flour mixture.",
      "Whisk the 3/4 cup cream, egg, and vanilla in a separate bowl. Pour into the flour and stir with a fork until a shaggy dough forms.",
      "Turn the dough onto a lightly floured surface. Pat — don't roll — into an 8-inch disc about 1 inch thick. Cut into 8 wedges with a sharp knife.",
      "Transfer wedges to the baking sheet, spacing them 2 inches apart. Brush tops with the extra cream and sprinkle with coarse sugar.",
      "Bake for 20–22 minutes, until the tops are golden and the edges look set. Cool for 5 minutes before serving.",
    ],
    notes: [
      "Keep everything cold. Warm butter = flat scones.",
      "Frozen blueberries work — use straight from the freezer, do not thaw.",
    ],
  },

  {
    slug: "blueberry-cobbler",
    title: "Southern Blueberry Cobbler",
    short: "Blueberry Cobbler",
    category: "Baked Goods",
    yield: "9×9 pan · serves 8",
    time: { prep: "15 min", cook: "45 min", total: "1 hr" },
    difficulty: "Easy",
    heroImage: placeholderImg("blueberry-cobbler", "hero"),
    ingredientsImage: placeholderImg("blueberry-cobbler", "ingredients"),
    tested: false,
    ingredients: [
      { amount: "6 cups", item: "fresh blueberries", berries: 594 },
      { amount: "3/4 cup", item: "granulated sugar (for filling)" },
      { amount: "2 tbsp", item: "cornstarch" },
      { amount: "1 tbsp", item: "lemon juice" },
      { amount: "1 cup", item: "all-purpose flour" },
      { amount: "1/2 cup", item: "granulated sugar (for topping)" },
      { amount: "2 tsp", item: "baking powder" },
      { amount: "1/2 tsp", item: "fine salt" },
      { amount: "6 tbsp", item: "cold unsalted butter, cubed" },
      { amount: "1/2 cup", item: "boiling water" },
      { amount: "1 tbsp", item: "coarse sugar (for topping)" },
    ],
    steps: [
      "Preheat oven to 375°F (190°C). Butter a 9×9-inch baking dish.",
      "In a bowl, toss blueberries with 3/4 cup sugar, cornstarch, and lemon juice. Pour into the prepared dish and spread evenly.",
      "In another bowl, whisk flour, 1/2 cup sugar, baking powder, and salt.",
      "Add cold butter cubes and work them into the flour with your fingertips until the mixture resembles coarse sand.",
      "Pour the boiling water over the flour mixture and stir just until it comes together into a thick, spoonable batter.",
      "Drop spoonfuls of the batter over the blueberries — don't worry about covering every gap, the topping will spread as it bakes.",
      "Sprinkle coarse sugar over the top.",
      "Bake for 40–45 minutes, until the filling bubbles thickly around the edges and the topping is deep golden brown.",
      "Cool for at least 20 minutes before serving. Excellent with vanilla ice cream.",
    ],
    notes: [
      "The boiling water is the trick — it activates the baking powder instantly and gives the topping a cakey-biscuit texture.",
    ],
  },
];

export function getRecipeBySlug(slug: string) {
  return RECIPES.find((r) => r.slug === slug);
}

export function getRecipesByCategory(cat: RecipeCategory) {
  return RECIPES.filter((r) => r.category === cat);
}
