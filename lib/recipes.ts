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
    heroImage: recipeImg("classic-blueberry-pie", "hero"),
    ingredientsImage: recipeImg("classic-blueberry-pie", "ingredients"),
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
    heroImage: recipeImg("blueberry-muffins", "hero"),
    ingredientsImage: recipeImg("blueberry-muffins", "ingredients"),
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
    heroImage: recipeImg("blueberry-pancakes", "hero"),
    ingredientsImage: recipeImg("blueberry-pancakes", "ingredients"),
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
    heroImage: recipeImg("blueberry-jam", "hero"),
    ingredientsImage: recipeImg("blueberry-jam", "ingredients"),
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
    heroImage: recipeImg("blueberry-scones", "hero"),
    ingredientsImage: recipeImg("blueberry-scones", "ingredients"),
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
    heroImage: recipeImg("blueberry-cobbler", "hero"),
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

  // ============ PIES & TARTS (batch 2) ============
  {
    slug: "blueberry-galette",
    title: "Rustic Blueberry Galette",
    short: "Blueberry Galette",
    category: "Pies & Tarts",
    yield: "One 10-inch galette · serves 6",
    time: { prep: "20 min", cook: "40 min", total: "1 hr + cooling" },
    difficulty: "Medium",
    heroImage: recipeImg("blueberry-galette", "hero"),
    ingredientsImage: recipeImg("blueberry-galette", "ingredients"),
    tested: false,
    ingredients: [
      { amount: "1 (9-inch)", item: "pie crust, chilled (homemade or store-bought)" },
      { amount: "3 cups", item: "fresh blueberries", berries: 297 },
      { amount: "1/3 cup", item: "granulated sugar" },
      { amount: "3 tbsp", item: "cornstarch" },
      { amount: "1 tbsp", item: "lemon juice" },
      { amount: "1/2 tsp", item: "lemon zest" },
      { amount: "1/4 tsp", item: "fine salt" },
      { amount: "1 tbsp", item: "unsalted butter, cut into small pieces" },
      { amount: "1", item: "egg, beaten (for wash)" },
      { amount: "1 tbsp", item: "coarse sugar (for topping)" },
    ],
    steps: [
      "Preheat oven to 400°F (205°C). Line a baking sheet with parchment.",
      "Roll the crust into a rough 12-inch circle on the parchment. Ragged edges are fine — that's the point of a galette.",
      "Toss blueberries with sugar, cornstarch, lemon juice, zest, and salt.",
      "Mound the filling in the center of the crust, leaving a 2-inch border. Dot with butter.",
      "Fold the border up and over the filling, pleating every 2–3 inches. The center stays open.",
      "Brush the crust with beaten egg and sprinkle with coarse sugar.",
      "Bake 35–40 minutes, until the crust is deep golden and the filling bubbles in the center.",
      "Cool on the sheet for at least 45 minutes before slicing — the filling sets as it cools.",
    ],
    relatedCalculator: "pie-dish",
    notes: [
      "If juice leaks through a pleat, leave it — it bakes into a jammy edge.",
      "Frozen berries work; do not thaw, and add 1 extra teaspoon of cornstarch.",
    ],
  },

  {
    slug: "blueberry-hand-pies",
    title: "Baked Blueberry Hand Pies",
    short: "Blueberry Hand Pies",
    category: "Pies & Tarts",
    yield: "8 hand pies",
    time: { prep: "30 min", cook: "22 min", total: "1 hr" },
    difficulty: "Medium",
    heroImage: recipeImg("blueberry-hand-pies", "hero"),
    ingredientsImage: recipeImg("blueberry-hand-pies", "ingredients"),
    tested: false,
    ingredients: [
      { amount: "2 (9-inch)", item: "pie crusts, chilled" },
      { amount: "2 cups", item: "fresh blueberries", berries: 198 },
      { amount: "1/4 cup", item: "granulated sugar" },
      { amount: "2 tbsp", item: "cornstarch" },
      { amount: "2 tsp", item: "lemon juice" },
      { amount: "1/4 tsp", item: "fine salt" },
      { amount: "1", item: "egg, beaten (for wash)" },
      { amount: "1 tbsp", item: "coarse sugar (for topping)" },
    ],
    steps: [
      "Cook blueberries, sugar, cornstarch, lemon juice, and salt in a saucepan over medium heat for 5–6 minutes, until thick and jammy. Cool completely — hot filling melts the crust.",
      "Preheat oven to 400°F (205°C). Line a baking sheet with parchment.",
      "Roll each crust to a 12-inch circle and cut eight 4-inch rounds total, re-rolling scraps once.",
      "Spoon 1 heaping tablespoon of cooled filling onto one half of each round, leaving a 1/2-inch border.",
      "Brush the border with egg, fold into a half-moon, and press the edge closed with a fork.",
      "Space the pies on the sheet, brush tops with egg, sprinkle with coarse sugar, and cut a small vent slit in each.",
      "Bake 20–22 minutes, until deep golden. Cool 15 minutes — the filling is lava-hot straight out.",
    ],
    relatedCalculator: "pie-dish",
    notes: [
      "Overfilling is the #1 cause of blowouts. One heaping tablespoon, no more.",
      "Unbaked pies freeze well; bake from frozen and add 3–4 minutes.",
    ],
  },

  {
    slug: "lemon-blueberry-tart",
    title: "Lemon Blueberry Cream Tart",
    short: "Lemon Blueberry Tart",
    category: "Pies & Tarts",
    yield: "One 9-inch tart · serves 8",
    time: { prep: "25 min", cook: "22 min", total: "3 hr (incl. chilling)" },
    difficulty: "Advanced",
    heroImage: recipeImg("lemon-blueberry-tart", "hero"),
    ingredientsImage: recipeImg("lemon-blueberry-tart", "ingredients"),
    tested: false,
    ingredients: [
      { amount: "1 1/4 cups", item: "all-purpose flour" },
      { amount: "1/4 cup", item: "powdered sugar" },
      { amount: "1/4 tsp", item: "fine salt" },
      { amount: "1/2 cup", item: "cold unsalted butter, cubed" },
      { amount: "1", item: "large egg yolk" },
      { amount: "8 oz", item: "cream cheese, softened" },
      { amount: "1/3 cup", item: "powdered sugar (for filling)" },
      { amount: "1/2 cup", item: "heavy cream, cold" },
      { amount: "2 tbsp", item: "lemon juice" },
      { amount: "1 tbsp", item: "lemon zest (about 2 lemons)" },
      { amount: "2 cups", item: "fresh blueberries", berries: 198 },
      { amount: "2 tbsp", item: "blueberry jam or apricot jam (for glaze)" },
    ],
    steps: [
      "Pulse flour, powdered sugar, and salt in a food processor. Add butter and pulse to coarse crumbs, then add the yolk and pulse until the dough clumps.",
      "Press the dough evenly into a 9-inch tart pan with a removable bottom, going up the sides. Freeze 15 minutes.",
      "Preheat oven to 375°F (190°C). Prick the base with a fork and bake 20–22 minutes, until golden. Cool completely.",
      "Beat cream cheese with 1/3 cup powdered sugar until smooth. Add lemon juice and zest.",
      "In a separate bowl, whip the cold cream to stiff peaks, then fold into the cream cheese mixture.",
      "Spread the filling into the cooled shell and arrange blueberries over the top in a single tight layer.",
      "Warm the jam with 1 teaspoon of water and brush over the berries for shine.",
      "Chill at least 2 hours before removing the ring and slicing.",
    ],
    relatedCalculator: "pie-dish",
    notes: [
      "The shell must be fully cool before filling or the cream will slide.",
      "Skip the glaze if serving within the hour; it mainly protects the berries overnight.",
    ],
  },

  // ============ BREAKFAST (batch 2) ============
  {
    slug: "blueberry-baked-oatmeal",
    title: "Blueberry Baked Oatmeal",
    short: "Baked Oatmeal",
    category: "Breakfast",
    yield: "9×9 pan · serves 6",
    time: { prep: "10 min", cook: "40 min", total: "50 min" },
    difficulty: "Easy",
    heroImage: recipeImg("blueberry-baked-oatmeal", "hero"),
    ingredientsImage: recipeImg("blueberry-baked-oatmeal", "ingredients"),
    tested: false,
    ingredients: [
      { amount: "2 cups", item: "old-fashioned rolled oats" },
      { amount: "1 tsp", item: "baking powder" },
      { amount: "1 tsp", item: "ground cinnamon" },
      { amount: "1/2 tsp", item: "fine salt" },
      { amount: "1 3/4 cups", item: "milk (any kind)" },
      { amount: "1/4 cup", item: "maple syrup" },
      { amount: "1", item: "large egg" },
      { amount: "3 tbsp", item: "unsalted butter, melted" },
      { amount: "1 tsp", item: "vanilla extract" },
      { amount: "2 cups", item: "fresh blueberries, divided", berries: 198 },
    ],
    steps: [
      "Preheat oven to 375°F (190°C). Butter a 9×9-inch baking dish.",
      "Stir oats, baking powder, cinnamon, and salt in a large bowl.",
      "Whisk milk, maple syrup, egg, melted butter, and vanilla in a second bowl.",
      "Scatter 1 1/2 cups of the blueberries over the bottom of the dish. Cover with the oat mixture, then pour the liquid evenly over everything.",
      "Scatter the remaining 1/2 cup berries on top.",
      "Bake 35–40 minutes, until the top is golden and the center no longer jiggles.",
      "Rest 10 minutes before serving. Serve warm, with a splash of cold milk.",
    ],
    notes: [
      "Refrigerates well for 4 days; reheat squares in the microwave for 60 seconds.",
      "Use rolled oats only — quick oats turn to mush and steel-cut won't cook through.",
    ],
  },

  {
    slug: "blueberry-banana-smoothie",
    title: "Blueberry Banana Smoothie",
    short: "Blueberry Smoothie",
    category: "Breakfast",
    yield: "2 large smoothies · about 24 oz",
    time: { prep: "5 min", cook: "0 min", total: "5 min" },
    difficulty: "Easy",
    heroImage: recipeImg("blueberry-banana-smoothie", "hero"),
    ingredientsImage: recipeImg("blueberry-banana-smoothie", "ingredients"),
    tested: false,
    ingredients: [
      { amount: "1 1/2 cups", item: "frozen blueberries", berries: 148 },
      { amount: "1", item: "ripe banana" },
      { amount: "3/4 cup", item: "plain Greek yogurt" },
      { amount: "3/4 cup", item: "milk (any kind)" },
      { amount: "1 tbsp", item: "honey or maple syrup (optional)" },
      { amount: "1 tbsp", item: "peanut or almond butter (optional)" },
    ],
    steps: [
      "Add milk and yogurt to the blender first, then banana, then frozen blueberries on top.",
      "Blend on high for 45–60 seconds, until completely smooth. Scrape down once if needed.",
      "Taste. Add honey only if your berries are tart. Blend 5 more seconds and pour.",
    ],
    relatedCalculator: "nutrition",
    notes: [
      "Frozen berries are non-negotiable — they replace ice without watering it down.",
      "Too thick: add milk a splash at a time. Too thin: add 3–4 more frozen berries.",
    ],
  },

  {
    slug: "blueberry-french-toast-bake",
    title: "Overnight Blueberry French Toast Bake",
    short: "French Toast Bake",
    category: "Breakfast",
    yield: "9×13 pan · serves 8",
    time: { prep: "20 min", cook: "50 min", total: "1 hr 10 min + overnight" },
    difficulty: "Medium",
    heroImage: recipeImg("blueberry-french-toast-bake", "hero"),
    ingredientsImage: recipeImg("blueberry-french-toast-bake", "ingredients"),
    tested: false,
    ingredients: [
      { amount: "1 (1-lb) loaf", item: "brioche or challah, cut into 1-inch cubes (slightly stale is best)" },
      { amount: "8", item: "large eggs" },
      { amount: "2 cups", item: "whole milk" },
      { amount: "1/2 cup", item: "heavy cream" },
      { amount: "1/2 cup", item: "light brown sugar, packed" },
      { amount: "1 tbsp", item: "vanilla extract" },
      { amount: "1 tsp", item: "ground cinnamon" },
      { amount: "1/2 tsp", item: "fine salt" },
      { amount: "2 cups", item: "fresh blueberries", berries: 198 },
      { amount: "1/3 cup", item: "all-purpose flour (for streusel)" },
      { amount: "1/3 cup", item: "light brown sugar (for streusel)" },
      { amount: "4 tbsp", item: "cold unsalted butter, cubed (for streusel)" },
    ],
    steps: [
      "Butter a 9×13-inch baking dish. Spread half the bread cubes in the dish, scatter 1 cup of blueberries over them, then layer the remaining bread and another 1 cup of berries.",
      "Whisk eggs, milk, cream, 1/2 cup brown sugar, vanilla, cinnamon, and salt. Pour evenly over the bread, pressing cubes down to soak.",
      "Cover and refrigerate at least 4 hours, ideally overnight.",
      "Preheat oven to 350°F (175°C). While it heats, rub the streusel flour, brown sugar, and cold butter together into coarse crumbs.",
      "Uncover the dish, scatter the streusel on top, and bake 45–50 minutes, until puffed, golden, and set in the center (a knife should come out without wet custard).",
      "Rest 10 minutes. Serve with maple syrup.",
    ],
    notes: [
      "Fresh soft bread turns soggy — dry the cubes in a 300°F oven for 10 minutes if your loaf is fresh.",
      "If the top browns before the center sets, tent loosely with foil.",
    ],
  },

  // ============ PRESERVES (batch 2) ============
  {
    slug: "blueberry-syrup",
    title: "Homemade Blueberry Syrup",
    short: "Blueberry Syrup",
    category: "Preserves",
    yield: "About 1 1/2 cups",
    time: { prep: "5 min", cook: "15 min", total: "20 min" },
    difficulty: "Easy",
    heroImage: recipeImg("blueberry-syrup", "hero"),
    ingredientsImage: recipeImg("blueberry-syrup", "ingredients"),
    tested: false,
    ingredients: [
      { amount: "2 cups", item: "fresh blueberries", berries: 198 },
      { amount: "1/2 cup", item: "granulated sugar" },
      { amount: "1/2 cup", item: "water" },
      { amount: "1 tbsp", item: "lemon juice" },
      { amount: "1 pinch", item: "fine salt" },
    ],
    steps: [
      "Combine blueberries, sugar, water, lemon juice, and salt in a saucepan over medium heat.",
      "Bring to a simmer and cook 10 minutes, mashing the berries against the side of the pan as they soften.",
      "For smooth syrup, strain through a fine-mesh sieve, pressing on the solids. For chunky pancake-house style, skip the strain.",
      "Return to the pan and simmer 3–5 more minutes, until it coats the back of a spoon. It thickens further as it cools.",
      "Cool and store in a jar in the refrigerator for up to 2 weeks.",
    ],
    relatedCalculator: "jam-yield",
    notes: [
      "Frozen berries work identically here — no adjustment needed.",
      "It will look thin while hot. Do not reduce past the spoon-coating stage or it turns to jelly in the fridge.",
    ],
  },

  {
    slug: "blueberry-compote",
    title: "5-Ingredient Blueberry Compote",
    short: "Blueberry Compote",
    category: "Preserves",
    yield: "About 1 1/2 cups",
    time: { prep: "5 min", cook: "10 min", total: "15 min" },
    difficulty: "Easy",
    heroImage: recipeImg("blueberry-compote", "hero"),
    ingredientsImage: recipeImg("blueberry-compote", "ingredients"),
    tested: false,
    ingredients: [
      { amount: "2 cups", item: "fresh blueberries, divided", berries: 198 },
      { amount: "3 tbsp", item: "granulated sugar" },
      { amount: "1 tbsp", item: "lemon juice" },
      { amount: "1 tbsp", item: "water" },
      { amount: "1 pinch", item: "fine salt" },
    ],
    steps: [
      "Combine 1 1/2 cups of the blueberries, sugar, lemon juice, water, and salt in a small saucepan over medium heat.",
      "Simmer 8–10 minutes, stirring occasionally, until the berries burst and the liquid is glossy and slightly thickened.",
      "Off heat, stir in the remaining 1/2 cup whole berries — they keep their shape and give the compote texture.",
      "Serve warm over pancakes, yogurt, or ice cream, or refrigerate up to 1 week.",
    ],
    relatedCalculator: "jam-yield",
    notes: [
      "The two-stage berry add is the difference between compote and jam. Don't skip it.",
      "Swap 1 teaspoon of the water for vanilla extract or add a cinnamon stick while simmering.",
    ],
  },

  {
    slug: "blueberry-chia-jam",
    title: "No-Cook-Down Blueberry Chia Jam",
    short: "Blueberry Chia Jam",
    category: "Preserves",
    yield: "About 1 1/4 cups · one 12-oz jar",
    time: { prep: "5 min", cook: "10 min", total: "45 min (incl. setting)" },
    difficulty: "Easy",
    heroImage: recipeImg("blueberry-chia-jam", "hero"),
    ingredientsImage: recipeImg("blueberry-chia-jam", "ingredients"),
    tested: false,
    ingredients: [
      { amount: "2 cups", item: "fresh blueberries", berries: 198 },
      { amount: "2 tbsp", item: "maple syrup or honey" },
      { amount: "1 tbsp", item: "lemon juice" },
      { amount: "2 tbsp", item: "chia seeds" },
      { amount: "1/2 tsp", item: "vanilla extract (optional)" },
    ],
    steps: [
      "Cook blueberries, maple syrup, and lemon juice in a saucepan over medium heat for 8–10 minutes, mashing as they soften, until fully broken down.",
      "Remove from heat and stir in chia seeds and vanilla.",
      "Rest 30 minutes at room temperature, stirring twice — the chia gels the jam without pectin or long cooking.",
      "Transfer to a jar and refrigerate. It thickens further overnight. Keeps 2 weeks.",
    ],
    relatedCalculator: "jam-yield",
    notes: [
      "Uses a third of the sugar of traditional jam — expect a fruit-forward, less candied flavor.",
      "If it sets too firm, stir in warm water a teaspoon at a time.",
    ],
  },

  // ============ BAKED GOODS (batch 2) ============
  {
    slug: "lemon-blueberry-loaf",
    title: "Glazed Lemon Blueberry Loaf",
    short: "Lemon Blueberry Loaf",
    category: "Baked Goods",
    yield: "One 9×5 loaf · 10 slices",
    time: { prep: "15 min", cook: "60 min", total: "1 hr 15 min + cooling" },
    difficulty: "Easy",
    heroImage: placeholderImg("lemon-blueberry-loaf", "hero"),
    ingredientsImage: placeholderImg("lemon-blueberry-loaf", "ingredients"),
    tested: false,
    ingredients: [
      { amount: "1 1/2 cups", item: "all-purpose flour, plus 1 tbsp for the berries" },
      { amount: "2 tsp", item: "baking powder" },
      { amount: "1/2 tsp", item: "fine salt" },
      { amount: "1 cup", item: "granulated sugar" },
      { amount: "2 tbsp", item: "lemon zest (about 2 lemons)" },
      { amount: "2", item: "large eggs" },
      { amount: "1/2 cup", item: "plain yogurt or sour cream" },
      { amount: "1/2 cup", item: "neutral oil" },
      { amount: "3 tbsp", item: "lemon juice, divided" },
      { amount: "1 tsp", item: "vanilla extract" },
      { amount: "1 1/2 cups", item: "fresh blueberries", berries: 148 },
      { amount: "1 cup", item: "powdered sugar (for glaze)" },
    ],
    steps: [
      "Preheat oven to 350°F (175°C). Grease a 9×5-inch loaf pan and line with a parchment sling.",
      "Whisk flour, baking powder, and salt in a bowl.",
      "In a large bowl, rub the lemon zest into the sugar with your fingers until fragrant. Whisk in eggs, yogurt, oil, 1 tablespoon of the lemon juice, and vanilla.",
      "Fold the dry ingredients into the wet until just combined.",
      "Toss blueberries with 1 tablespoon flour and fold in gently.",
      "Scrape into the pan and bake 55–60 minutes, until a skewer in the center comes out clean. Tent with foil at 40 minutes if browning fast.",
      "Cool 15 minutes in the pan, then lift out and cool completely on a rack.",
      "Whisk powdered sugar with the remaining 2 tablespoons lemon juice and drizzle over the fully cooled loaf.",
    ],
    relatedCalculator: "muffin-scaler",
    notes: [
      "Rubbing zest into sugar releases the oils — it's worth the 30 seconds.",
      "Glazing a warm loaf melts the glaze into a wet mess. Fully cool means fully cool.",
    ],
  },

  {
    slug: "blueberry-crumble-bars",
    title: "Blueberry Oat Crumble Bars",
    short: "Crumble Bars",
    category: "Baked Goods",
    yield: "8×8 pan · 12 bars",
    time: { prep: "15 min", cook: "45 min", total: "1 hr + cooling" },
    difficulty: "Easy",
    heroImage: placeholderImg("blueberry-crumble-bars", "hero"),
    ingredientsImage: placeholderImg("blueberry-crumble-bars", "ingredients"),
    tested: false,
    ingredients: [
      { amount: "1 1/2 cups", item: "all-purpose flour" },
      { amount: "1 cup", item: "old-fashioned rolled oats" },
      { amount: "3/4 cup", item: "light brown sugar, packed" },
      { amount: "1/2 tsp", item: "baking powder" },
      { amount: "1/2 tsp", item: "fine salt" },
      { amount: "3/4 cup", item: "unsalted butter, melted" },
      { amount: "2 cups", item: "fresh blueberries", berries: 198 },
      { amount: "1/4 cup", item: "granulated sugar" },
      { amount: "1 tbsp", item: "cornstarch" },
      { amount: "1 tbsp", item: "lemon juice" },
    ],
    steps: [
      "Preheat oven to 375°F (190°C). Line an 8×8-inch pan with a parchment sling.",
      "Stir flour, oats, brown sugar, baking powder, and salt. Pour in melted butter and mix until evenly clumpy.",
      "Press two-thirds of the mixture firmly into the pan. Reserve the rest for topping.",
      "Toss blueberries with granulated sugar, cornstarch, and lemon juice; spread over the base.",
      "Crumble the reserved oat mixture over the berries in uneven clumps.",
      "Bake 40–45 minutes, until the top is golden and the filling bubbles at the edges.",
      "Cool completely in the pan — at least 2 hours — before lifting out and cutting. Warm bars fall apart.",
    ],
    notes: [
      "One bowl does the base and the topping. Resist adding extra butter; the bars firm up as they cool.",
      "Refrigerated bars cut cleaner and keep 5 days.",
    ],
  },

  {
    slug: "blueberry-crisp",
    title: "Old-Fashioned Blueberry Crisp",
    short: "Blueberry Crisp",
    category: "Baked Goods",
    yield: "9×9 pan · serves 8",
    time: { prep: "15 min", cook: "40 min", total: "55 min" },
    difficulty: "Easy",
    heroImage: placeholderImg("blueberry-crisp", "hero"),
    ingredientsImage: placeholderImg("blueberry-crisp", "ingredients"),
    tested: false,
    ingredients: [
      { amount: "5 cups", item: "fresh blueberries", berries: 495 },
      { amount: "1/3 cup", item: "granulated sugar" },
      { amount: "2 tbsp", item: "cornstarch" },
      { amount: "1 tbsp", item: "lemon juice" },
      { amount: "3/4 cup", item: "all-purpose flour" },
      { amount: "3/4 cup", item: "old-fashioned rolled oats" },
      { amount: "2/3 cup", item: "light brown sugar, packed" },
      { amount: "1/2 tsp", item: "ground cinnamon" },
      { amount: "1/4 tsp", item: "fine salt" },
      { amount: "1/2 cup", item: "cold unsalted butter, cubed" },
    ],
    steps: [
      "Preheat oven to 375°F (190°C). Butter a 9×9-inch baking dish.",
      "Toss blueberries with granulated sugar, cornstarch, and lemon juice in the dish.",
      "Stir flour, oats, brown sugar, cinnamon, and salt in a bowl. Work in the cold butter with your fingertips until the mixture forms moist clumps.",
      "Scatter the topping evenly over the berries.",
      "Bake 35–40 minutes, until the topping is deep golden and the filling bubbles around the edges.",
      "Cool 15 minutes before serving. Vanilla ice cream is not optional in spirit.",
    ],
    notes: [
      "Crisp = oats in the topping, crumble = none. This is a crisp.",
      "Frozen berries: don't thaw, add 1 extra tablespoon of cornstarch, and expect 5 extra minutes.",
    ],
  },
];

export function getRecipeBySlug(slug: string) {
  return RECIPES.find((r) => r.slug === slug);
}

export function getRecipesByCategory(cat: RecipeCategory) {
  return RECIPES.filter((r) => r.category === cat);
}
