// ============================================
// ARTICLE REGISTRY — single source of truth
// Add an article here, it appears on the hub + gets its own page automatically
// ============================================

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export type ArticleCategory =
  | "Measuring"
  | "Storage & Freezing"
  | "Baking Science"
  | "Buying & Growing";

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  "Measuring",
  "Storage & Freezing",
  "Baking Science",
  "Buying & Growing",
];

export interface Article {
  slug: string;
  title: string;
  short: string;
  dek: string;
  category: ArticleCategory;
  published: string;   // ISO date
  updated?: string;    // ISO date
  readMinutes: number;
  body: Block[];
  relatedCalculator?: string;
  relatedRecipes?: string[];
}

// Inline links use [label](/path) inside any text field and are rendered
// as real React elements — never injected as raw HTML.
export const ARTICLES: Article[] = [
  {
    slug: "how-many-blueberries-in-a-cup",
    title: "How Many Blueberries Are in a Cup?",
    short: "How Many Blueberries in a Cup?",
    dek: "The short answer is about 100 — but the number moves a lot depending on what kind of berry you bought and whether it is frozen.",
    category: "Measuring",
    published: "2026-08-05",
    readMinutes: 5,
    relatedCalculator: "median-berry",
    relatedRecipes: ["blueberry-muffins", "classic-blueberry-pie"],
    body: [
      { type: "p", text: "A US cup of fresh cultivated blueberries holds roughly **100 berries** and weighs about **148 grams**, or 5.2 ounces. If you only needed one number, that is the one." },
      { type: "p", text: "But that figure hides a surprising amount of variation, and if you are scaling a recipe up or costing out a harvest, the variation is the part that matters." },
      { type: "h2", text: "Why it is not just volume divided by berry size" },
      { type: "p", text: "The intuitive approach is to divide the volume of a cup by the volume of one berry. A US cup is 236.6 mL and a median blueberry is about 1.07 cm³, which suggests roughly 221 berries per cup." },
      { type: "p", text: "That answer is wrong by more than double, because berries are spheres and spheres do not tile. Pour any quantity of equal spheres into a container and they settle into what physicists call random close packing, occupying about **64%** of the available space. The remaining 36% is air in the gaps." },
      { type: "p", text: "Apply that correction and you get roughly 151 mL of actual fruit in a cup, which lands at about 100 to 141 berries depending on berry size. Our [median berry converter](/median-berry) does this arithmetic for you." },
      { type: "callout", title: "The rule of thumb", text: "One cup of fresh cultivated blueberries is about 100 berries and 148 g. One pint is about 2 cups. One pound is about 3 cups, or roughly 300 berries." },
      { type: "h2", text: "Cultivated versus wild changes everything" },
      { type: "p", text: "Almost every published figure, including ours, assumes cultivated highbush blueberries — the large ones sold in plastic clamshells. Wild lowbush berries are dramatically smaller, commonly around 40% less volume per berry." },
      { type: "p", text: "That means a cup of wild blueberries can contain 200 or more individual berries at a similar total weight. If a recipe was written for wild berries and you use cultivated ones by count, you will add far too much fruit." },
      {
        type: "table",
        head: ["Measure", "Cultivated (approx.)", "Weight"],
        rows: [
          ["1 cup", "100 berries", "148 g / 5.2 oz"],
          ["1 pint", "200 berries", "296 g / 10.4 oz"],
          ["1 pound", "300 berries", "454 g / 16 oz"],
          ["1 quart", "400 berries", "592 g / 20.9 oz"],
        ],
      },
      { type: "h2", text: "Frozen berries measure differently" },
      { type: "p", text: "Water expands roughly 9% when it freezes, and a blueberry is about 84% water. Frozen berries are therefore slightly larger and, more importantly, they do not settle the same way — ice crystals on the surface make them cling instead of flowing into gaps." },
      { type: "p", text: "In practice a cup of frozen blueberries holds a few percent fewer berries than a cup of fresh. For baking this rarely matters. For anything where you are counting, measure frozen fruit by weight instead of volume." },
      { type: "h2", text: "How to measure accurately" },
      { type: "ol", items: [
        "Use a kitchen scale if you have one. Weight ignores packing entirely and is the only truly reliable method.",
        "If measuring by volume, spoon berries into the cup rather than scooping. Scooping compacts them and overfills by up to 10%.",
        "Do not level the top with a knife the way you would with flour. You will crush fruit and change the measure.",
        "For frozen berries, do not thaw before measuring. Thawed fruit collapses and packs far denser.",
      ]},
      { type: "h2", text: "Does the precision actually matter?" },
      { type: "p", text: "For most baking, no. A muffin batter tolerates a quarter cup either way without complaint. Where it does matter is in pie and preserves, because both depend on the ratio of fruit to thickener." },
      { type: "p", text: "Too much fruit in a pie and the filling floods when you cut it; too little and the crust caves. If you are sizing a pie, the [pie dish calculator](/pie-dish) works from your actual dish dimensions, and our [classic blueberry pie](/recipes/classic-blueberry-pie) lists both cups and berry counts." },
      { type: "p", text: "The full set of constants behind these figures, and their limitations, is documented on our [methodology page](/methodology)." },
    ],
  },

  {
    slug: "how-to-freeze-blueberries",
    title: "How to Freeze Blueberries the Right Way",
    short: "How to Freeze Blueberries",
    dek: "Do not wash them first. That single mistake is why most home-frozen blueberries end up as one solid purple brick.",
    category: "Storage & Freezing",
    published: "2026-08-05",
    readMinutes: 6,
    relatedRecipes: ["blueberry-jam", "blueberry-muffins"],
    body: [
      { type: "p", text: "Blueberries freeze better than almost any other fruit. They hold their shape, they keep for a year, and unlike strawberries they do not collapse into mush on thawing. The technique is simple, but there is one counterintuitive rule that determines whether it works." },
      { type: "callout", title: "The one rule", text: "Do not wash blueberries before freezing. Surface moisture turns to ice and cements the berries into a single mass. Rinse them after freezing, as you use them." },
      { type: "h2", text: "Why washing first ruins them" },
      { type: "p", text: "A fresh blueberry is coated in a natural waxy bloom — the dusty pale film on the skin. That bloom is a moisture barrier the plant produced to protect the fruit, and it is exactly what keeps individual berries from fusing in the freezer." },
      { type: "p", text: "Wash the bloom away and you leave a wet skin. Water on the surface freezes into bridges between adjacent berries, and within hours you have a solid block you have to chisel apart. The berries inside are fine, but you can no longer pour out a half cup." },
      { type: "h2", text: "The method" },
      { type: "ol", items: [
        "Sort, do not wash. Pick out stems, leaves, and any soft or split berries. One rotting berry will taint the batch.",
        "Dry them if they are already damp. Spread on a towel and pat gently. Damp fruit must be dried before it goes in.",
        "Freeze in a single layer. Spread the berries on a parchment-lined sheet pan so they are not touching, and freeze for 2 to 4 hours until firm.",
        "Transfer to bags. Move the frozen berries into freezer bags or airtight containers, pressing out as much air as you can.",
        "Label with the date. They keep well for 10 to 12 months, and you will not remember otherwise.",
      ]},
      { type: "p", text: "Step three is what commercial processors call IQF, or individually quick frozen. It is the entire reason store-bought frozen berries pour freely, and it takes about four minutes of actual work at home." },
      { type: "h2", text: "Can you skip the sheet pan?" },
      { type: "p", text: "You can, and the berries will still be perfectly edible — they will simply be clumped. If you plan to use the whole bag at once for jam or a batch of syrup, dumping them straight into a bag is a reasonable shortcut. If you want to grab a handful for pancakes in February, spend the four minutes." },
      { type: "h2", text: "Using frozen blueberries" },
      { type: "p", text: "The universal rule for baking with frozen fruit is **do not thaw**. Thawed berries bleed, and the juice both streaks the batter grey-green and adds water the recipe did not budget for." },
      {
        type: "table",
        head: ["Use", "Thaw first?", "Adjustment"],
        rows: [
          ["Muffins, scones, pancakes", "No", "Toss frozen berries in flour; add 2-3 min bake time"],
          ["Pie and cobbler", "No", "Add 1 extra tbsp cornstarch; expect 10 min longer"],
          ["Jam and syrup", "No", "None — they break down anyway"],
          ["Smoothies", "No", "Frozen is better; replaces ice"],
          ["Topping yogurt or cereal", "Partially", "5 min at room temperature"],
        ],
      },
      { type: "p", text: "Our [muffin scaler](/muffin-scaler) and [jam yield calculator](/jam-yield) both work identically for fresh and frozen fruit, since they operate on weight." },
      { type: "h2", text: "How long do they actually last?" },
      { type: "p", text: "Frozen blueberries remain safe indefinitely at 0°F, but quality declines. Expect excellent results for 10 to 12 months, acceptable results through about 18 months, and a noticeable loss of texture and flavour after that." },
      { type: "p", text: "Freezer burn shows up as pale, dry, shrivelled patches. It is not dangerous, but those berries taste like cardboard. Pressing air out of the bag is the single best defence." },
      { type: "h2", text: "Does freezing destroy the nutrition?" },
      { type: "p", text: "No. Freezing preserves anthocyanins and vitamin C well — often better than a week of refrigeration, because the fruit is typically frozen at peak ripeness. Some studies find anthocyanins become marginally more available after freezing, as ice crystals rupture cell walls." },
      { type: "p", text: "You can compare figures for any quantity with the [nutrition calculator](/nutrition)." },
    ],
  },

  {
    slug: "why-blueberries-turn-green-in-baking",
    title: "Why Blueberries Turn Green in Muffins and Pancakes",
    short: "Why Blueberries Turn Green",
    dek: "Your batter is not spoiled. It is a pH reaction, it is harmless, and it is entirely preventable once you know the cause.",
    category: "Baking Science",
    published: "2026-08-05",
    readMinutes: 5,
    relatedRecipes: ["blueberry-muffins", "blueberry-pancakes"],
    body: [
      { type: "p", text: "You fold blueberries into a pale muffin batter, bake them, and pull out muffins shot through with streaks of grey-green. Nothing has gone wrong with your ingredients. You have run a chemistry experiment." },
      { type: "h2", text: "The pigment is a pH indicator" },
      { type: "p", text: "Blueberry colour comes from anthocyanins, a family of plant pigments that also colour red cabbage, blackberries, and purple sweet potatoes. Anthocyanins are natural pH indicators: they physically change molecular structure depending on the acidity around them." },
      { type: "p", text: "In acidic conditions they appear red to purple. Around neutral they shift toward violet-blue. In alkaline conditions they turn blue-green, then genuinely green." },
      { type: "p", text: "The interior of a muffin is a mildly alkaline environment, and where berry juice bleeds into batter, the pigment reports that alkalinity honestly by turning green." },
      { type: "callout", title: "It is completely safe", text: "Green blueberry streaks are a colour change in a plant pigment, not spoilage, mould, or a chemical contaminant. The taste is unaffected." },
      { type: "h2", text: "Baking soda is the usual culprit" },
      { type: "p", text: "Sodium bicarbonate is a base. It is in your batter to react with acid and produce carbon dioxide for lift, but any excess remains in the crumb and pushes pH up." },
      { type: "p", text: "This is why the problem is far more common in recipes that lean on baking soda than in those leaning on baking powder. Baking powder is a balanced product containing both a base and its own acid, so it disturbs pH much less." },
      { type: "p", text: "If your recipe calls for more than about a quarter teaspoon of baking soda per cup of flour and you are getting green streaks, the soda is almost certainly the cause." },
      { type: "h2", text: "Five ways to prevent it" },
      { type: "ol", items: [
        "Do not thaw frozen berries. Thawed fruit bleeds juice into the batter, and bleeding is what spreads pigment into contact with alkaline crumb.",
        "Toss berries in flour before folding. A thin flour coating is a physical barrier that slows juice migration.",
        "Fold minimally. Every extra stroke ruptures more berries. Six to eight folds is plenty.",
        "Add a little acid. A tablespoon of lemon juice, buttermilk instead of milk, or sour cream lowers pH enough to hold the colour.",
        "Drop berries onto pancakes in the pan rather than stirring them into the batter — the approach our [blueberry pancakes](/recipes/blueberry-pancakes) recipe uses for exactly this reason.",
      ]},
      { type: "h2", text: "Why store-bought muffins never do this" },
      { type: "p", text: "Commercial bakeries have the same chemistry problem and solve it with tools most home kitchens lack: buffered leavening systems that hold pH steady, berries coated in a sealing glaze, and in some cases added acidulants like citric acid specifically to protect colour." },
      { type: "p", text: "Some also use dried or infused berries, which contain far less free juice to bleed in the first place." },
      { type: "h2", text: "The same reaction, deliberately" },
      { type: "p", text: "You can demonstrate this in about a minute. Mash a few blueberries in two small bowls with a splash of water. Stir a pinch of baking soda into one and a squeeze of lemon juice into the other." },
      { type: "p", text: "The soda bowl shifts green within seconds. The lemon bowl turns bright reddish-purple. Same pigment, opposite ends of the pH scale — and a clear picture of what is happening inside your muffins." },
    ],
  },

  {
    slug: "how-to-store-fresh-blueberries",
    title: "How to Store Fresh Blueberries So They Last",
    short: "Storing Fresh Blueberries",
    dek: "Most blueberries spoil days early for one reason: they were stored in the container they were sold in.",
    category: "Storage & Freezing",
    published: "2026-08-05",
    readMinutes: 4,
    body: [
      { type: "p", text: "Handled properly, fresh blueberries keep for two to three weeks in the refrigerator. Handled the ordinary way — left in the clamshell on a middle shelf — they typically last five or six days before the first fuzzy one appears." },
      { type: "h2", text: "What actually spoils them" },
      { type: "p", text: "Three things, in order of importance: **moisture**, **ethylene and warmth**, and **one bad berry**." },
      { type: "p", text: "Surface moisture is the primary enemy. Mould spores are already present on the fruit and are harmless while the skin stays dry. Add water and they germinate. This is why washing before storage is such a costly mistake, and why condensation inside a sealed container is nearly as bad." },
      { type: "callout", title: "The core rule", text: "Store dry, unwashed, cold, and with airflow. Wash only the portion you are about to eat." },
      { type: "h2", text: "The method" },
      { type: "ol", items: [
        "Sort on arrival. Remove any soft, split, shrivelled, or mouldy berries. A single spoiling berry accelerates everything touching it.",
        "Do not wash. Leave the natural waxy bloom intact until you are ready to eat them.",
        "Get them out of the clamshell. Those containers trap humidity against the fruit at the bottom.",
        "Line a container with paper towel. Use a shallow container, add a paper towel, and store the berries no more than two or three deep.",
        "Leave the lid slightly open. Airflow lets moisture escape rather than condensing on the fruit.",
        "Refrigerate at the back. The back of a middle shelf is the most temperature-stable spot. Avoid the door.",
      ]},
      { type: "h2", text: "Should you use the vinegar rinse?" },
      { type: "p", text: "The popular vinegar soak — one part white vinegar to three parts water, a brief soak, then a thorough dry — does genuinely kill surface mould spores and can extend life noticeably." },
      { type: "p", text: "The catch is the drying step. Berries must be completely dry before they go back in the refrigerator, and if you rush it you have made things worse by removing the protective bloom while leaving moisture behind. Only worth doing if you will dry them properly on towels for an hour." },
      { type: "h2", text: "The crisper drawer question" },
      { type: "p", text: "Crisper drawers are designed to hold humidity, which is right for leafy greens and wrong for berries. If your drawer has a humidity slider, set it to low. Otherwise use an open shelf." },
      {
        type: "table",
        head: ["Storage method", "Expected life", "Notes"],
        rows: [
          ["Original clamshell, fridge", "5-7 days", "The default. Trapped humidity is the problem."],
          ["Lined container, lid ajar, fridge", "2-3 weeks", "Best fresh-storage method."],
          ["Countertop, room temperature", "1-2 days", "Only for berries eaten today."],
          ["Frozen (IQF method)", "10-12 months", "See [how to freeze blueberries](/articles/how-to-freeze-blueberries)."],
        ],
      },
      { type: "h2", text: "When to give up and freeze" },
      { type: "p", text: "The moment berries start looking dull, soft, or slightly wrinkled, stop trying to keep them fresh. They are still perfectly good for baking, and freezing them at that point captures what quality remains." },
      { type: "p", text: "Slightly past-prime berries are ideal for [small-batch jam](/recipes/blueberry-jam) or [compote](/recipes/blueberry-compote), where texture no longer matters and the concentrated sweetness of very ripe fruit is an advantage." },
    ],
  },

  {
    slug: "fresh-vs-frozen-blueberries-baking",
    title: "Fresh vs. Frozen Blueberries in Baking",
    short: "Fresh vs. Frozen for Baking",
    dek: "Frozen berries work in nearly every blueberry recipe. Here is what genuinely changes, and the two adjustments that matter.",
    category: "Baking Science",
    published: "2026-08-05",
    readMinutes: 5,
    relatedRecipes: ["blueberry-crisp", "blueberry-scones"],
    body: [
      { type: "p", text: "Frozen blueberries are cheaper, available year-round, and frequently picked riper than the fresh fruit next to them in the store. For most baking they are not a compromise. But they are not a drop-in substitute either, and two differences drive every adjustment you need to make." },
      { type: "h2", text: "Difference one: water" },
      { type: "p", text: "Freezing forms ice crystals inside the fruit that puncture cell walls. When the berry warms, those ruptured cells release juice that a fresh berry would have held. A frozen berry going into a hot oven sheds noticeably more liquid." },
      { type: "p", text: "In a pie or cobbler that extra liquid has to be absorbed by the thickener. In a muffin it becomes steam, which is why frozen-berry muffins often need a few extra minutes." },
      { type: "h2", text: "Difference two: structure" },
      { type: "p", text: "Those same ruptured cell walls make frozen berries softer once heated. They collapse more readily and are more likely to smear if you stir them into a batter. In a crisp or cobbler this is irrelevant. In a delicate scone it is the difference between distinct fruit and purple marbling." },
      { type: "callout", title: "The two universal adjustments", text: "1. Never thaw. Use frozen berries straight from the freezer. 2. Add one extra tablespoon of cornstarch to any pie, cobbler, or crisp filling." },
      { type: "h2", text: "Recipe by recipe" },
      {
        type: "table",
        head: ["Recipe type", "Frozen works?", "What to change"],
        rows: [
          ["Muffins and quick breads", "Yes", "Toss in flour, fold minimally, add 2-3 min"],
          ["Pancakes and waffles", "Yes", "Drop onto batter in the pan, not into the bowl"],
          ["Pie and cobbler", "Yes", "+1 tbsp cornstarch, +10 min bake"],
          ["Crisp and crumble", "Yes, excellent", "+1 tbsp cornstarch"],
          ["Scones", "Yes", "Use straight from freezer; work dough fast"],
          ["Jam, syrup, compote", "Yes, identical", "No change at all"],
          ["Fresh tart topping", "No", "Uncooked frozen berries weep and look dull"],
          ["Garnish", "No", "Use fresh"],
        ],
      },
      { type: "h2", text: "Why you must not thaw" },
      { type: "p", text: "Thawing is the single most common mistake. A thawed berry has already released its juice into a puddle at the bottom of the bowl, and that juice does three unhelpful things: it dyes the batter, it adds unmeasured liquid, and it reacts with alkaline leavening to produce [green streaks](/articles/why-blueberries-turn-green-in-baking)." },
      { type: "p", text: "Frozen berries folded in solid stay intact long enough for the surrounding batter to set around them." },
      { type: "h2", text: "The flour trick, and why it works" },
      { type: "p", text: "Tossing berries in a tablespoon of flour taken from the recipe's measured amount does two jobs at once. The coating absorbs surface juice as the berry warms, and it adds enough friction against the batter to slow the berry sinking to the bottom during baking." },
      { type: "p", text: "It is not a myth, but it is not magic either. It reduces sinking; it does not eliminate it. A thick batter matters more." },
      { type: "h2", text: "Cost and nutrition" },
      { type: "p", text: "Frozen fruit is typically cheaper per pound and dramatically cheaper out of season. Because it is picked and frozen at peak ripeness rather than shipped underripe, the nutritional profile often matches or exceeds supermarket fresh fruit." },
      { type: "p", text: "You can compare real prices per berry with the [cost calculator](/cost)." },
      { type: "h2", text: "The one place fresh genuinely wins" },
      { type: "p", text: "Anywhere the berry is not cooked. On top of a [lemon blueberry tart](/recipes/lemon-blueberry-tart), scattered over yogurt, or as a garnish, fresh fruit has a firmness and gloss that thawed fruit simply cannot reproduce." },
    ],
  },

  {
    slug: "how-many-blueberries-does-a-bush-produce",
    title: "How Many Blueberries Does One Bush Produce?",
    short: "Yield Per Bush",
    dek: "A mature highbush plant gives 5 to 10 pounds a season — but it takes six years to get there, and most first-time growers give up in year two.",
    category: "Buying & Growing",
    published: "2026-08-05",
    readMinutes: 5,
    relatedCalculator: "bush-yield",
    body: [
      { type: "p", text: "A healthy mature highbush blueberry produces **5 to 10 pounds** of fruit per season — somewhere between 1,500 and 3,000 individual berries. Exceptional plants in ideal conditions reach 15 pounds or more." },
      { type: "p", text: "The number that surprises people is how long it takes to get there." },
      { type: "h2", text: "Yield by plant age" },
      {
        type: "table",
        head: ["Age", "Typical yield", "Approx. berries"],
        rows: [
          ["Year 1-2", "0 (remove flowers)", "0"],
          ["Year 3", "1-2 lb", "300-600"],
          ["Year 4", "2-4 lb", "600-1,200"],
          ["Year 5", "4-7 lb", "1,200-2,100"],
          ["Year 6+", "5-10 lb", "1,500-3,000"],
          ["Year 8-15 (peak)", "8-15 lb", "2,400-4,500"],
        ],
      },
      { type: "p", text: "Our [bush yield calculator](/bush-yield) estimates totals for a given number of plants and ages." },
      { type: "h2", text: "Why you should remove the first years' flowers" },
      { type: "p", text: "It feels perverse, but pinching off every blossom in years one and two is the single highest-return thing a new grower can do. A young plant that is allowed to fruit spends its limited energy on berries instead of roots and canes." },
      { type: "p", text: "Sacrifice two seasons of a handful of fruit and you get a substantially larger plant that produces more, sooner, for decades. A well-managed highbush blueberry stays productive for 40 to 50 years." },
      { type: "h2", text: "What limits yield" },
      { type: "ul", items: [
        "**Soil pH.** This is the big one. Blueberries need acidic soil, pH 4.5 to 5.5. Above about 6.0 they cannot take up iron, leaves yellow, and yield collapses. Most garden soil is too alkaline without amendment.",
        "**Pollination.** Blueberries are partially self-fertile but yield far better with a second compatible variety nearby. Two different cultivars can increase production by 30% or more.",
        "**Water.** Shallow roots and no tolerance for drought or standing water. Consistent moisture during fruit development is critical.",
        "**Sun.** Six or more hours of direct sun. Shaded plants survive and barely fruit.",
        "**Pruning.** Old canes stop producing. Removing the oldest wood each winter keeps the plant renewing itself.",
        "**Birds.** An unnetted bush in a bird-heavy area can lose most of its crop in days.",
      ]},
      { type: "h2", text: "Highbush, lowbush, and rabbiteye" },
      { type: "p", text: "**Northern highbush** is the standard garden and commercial plant, and every figure above refers to it. **Rabbiteye** varieties suit hot southern climates and can exceed highbush yields at maturity, though they take longer to establish. **Lowbush** — the wild type — spreads as a low mat and yields far less per plant, but the berries are smaller, more intensely flavoured, and more numerous per pound." },
      { type: "h2", text: "How many plants do you need?" },
      { type: "p", text: "For fresh eating, two mature plants per person is a reasonable rule. A household that also wants to freeze fruit and make preserves should plan on four to six mature plants." },
      { type: "p", text: "At 5 to 10 pounds each, six mature bushes yield 30 to 60 pounds a season — roughly 90 to 180 cups. That is well beyond fresh eating, so plan for [freezing](/articles/how-to-freeze-blueberries) and [jam](/recipes/blueberry-jam) before the harvest arrives rather than during it." },
      { type: "callout", title: "A note on our numbers", text: "These are typical ranges from horticultural guidance, not a prediction for your garden. Climate, cultivar, soil, and management swing results enormously. Your regional agricultural extension service will have figures specific to where you live." },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(cat: ArticleCategory) {
  return ARTICLES.filter((a) => a.category === cat);
}
