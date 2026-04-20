# BlueberryCalculator.com

The internet's most comprehensive blueberry measurement resource. 13 calculators
spanning baking, measurement, physics, and the absurd — all built on the USDA
median blueberry (12.7mm, 1.5g, 1.07cm³).

## Tech stack

- **Next.js 14** (App Router) — industry-standard React framework, used by most
  high-traffic calculator/utility sites
- **TypeScript**
- **CSS custom properties** for the dual-theme system (country / technical / absurd)
- Zero runtime dependencies beyond React

## Theme system

Each calculator sets its own theme via a `data-theme` attribute on `<body>`:

- **`country`** — Kitchen & Recipes. Warm cream and barn-red, Fraunces serif,
  Caveat handwritten accents, subtle grid paper. Recipes, pies, muffins, jam, nutrition.
- **`technical`** — Measurement & Science. Drafting-blue on graph paper,
  Space Grotesk + JetBrains Mono, ruler graphics and spec tables. Unit conversion,
  volume, physics, bush yield, cost.
- **`absurd`** — Just For Fun. Deep berry purple with yellow accents. Bathtub,
  distance to the Moon, body mass, mouth capacity.

## Project structure

```
app/
  layout.tsx              # Root layout with header, footer, fact marquee
  page.tsx                # Homepage — hero, trending, category grid
  globals.css             # All three themes + layout
  [slug]/page.tsx         # One page per calculator (13 total)
components/
  Header.tsx              # Dropdown nav by category
  Footer.tsx              # Footer + scrolling fact marquee
  CalculatorPage.tsx      # Shared wrapper with sidebar + related calcs
  ResultBox.tsx           # Result display with copy-to-clipboard
  ThemeBody.tsx           # Applies data-theme attribute
lib/
  calculators.ts          # Single source of truth for all 13 calcs (nav, routing, theme)
  constants.ts            # Berry physical constants + formatters
```

Adding a new calculator takes three steps:
1. Add an entry to `CALCULATORS` in `lib/calculators.ts`
2. Create `app/[slug]/page.tsx` following any existing page as a template
3. The dropdown nav, homepage, footer, and related-calcs sidebar all update automatically

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploying to Vercel

1. Push this repo to GitHub
2. On vercel.com → "Add New → Project" → import the repo
3. Framework preset: **Next.js** (auto-detected)
4. Click Deploy. You'll have a `*.vercel.app` URL in under a minute.
5. Project Settings → Domains → add `blueberrycalculator.com` and `www.blueberrycalculator.com`

Since the domain was purchased through Vercel, DNS is configured automatically.

## The 13 calculators

**Kitchen & Recipes (country theme)**
- `/pie-dish` — Pie Dish Blueberry Calculator
- `/muffin-scaler` — Muffin & Batch Recipe Scaler
- `/jam-yield` — Jam, Syrup & Preserve Yield
- `/nutrition` — Blueberry Nutrition Calculator

**Measurement & Science (technical theme)**
- `/median-berry` — Median Blueberry Unit Converter
- `/volume` — Volume → Berry Count Converter
- `/physics` — Blueberry Physics (drop, terminal velocity, stack)
- `/bush-yield` — Bush Yield & Harvest Estimator
- `/cost` — Cost-per-Blueberry Calculator

**Just For Fun (absurd theme)**
- `/bathtub` — Blueberries-to-Fill-Your-Bathtub
- `/distance` — Blueberries End-to-End Distance
- `/body` — Your Body in Blueberries
- `/mouth-capacity` — Maximum Mouth Capacity
