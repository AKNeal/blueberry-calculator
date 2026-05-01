# Recipe placeholder system

Until real food photography exists, every recipe in `lib/recipes.ts` renders a
shared placeholder SVG (`recipe-placeholder.svg`) for both its hero image and
its ingredients image. The placeholder is intentionally loud so it never ships
to production accidentally.

## Image spec for real photos

| Slot              | Aspect | Min size  | Format | Notes                              |
| ----------------- | ------ | --------- | ------ | ---------------------------------- |
| Hero              | 3:2    | 1200×800  | JPEG   | The "money shot" of the finished dish. Slight overhead or 3/4 angle, soft natural light. |
| Ingredients       | 3:2    | 1200×800  | JPEG   | Top-down flat-lay of every ingredient before mixing. |

Save real photos at:

```
/public/recipes/{slug}-hero.jpg
/public/recipes/{slug}-ingredients.jpg
```

…where `{slug}` matches the recipe's `slug` field in `lib/recipes.ts`
(e.g. `classic-blueberry-pie-hero.jpg`).

## Switching a recipe from placeholder → real photo

In `lib/recipes.ts`, change that recipe's two image lines from:

```ts
heroImage: placeholderImg("classic-blueberry-pie", "hero"),
ingredientsImage: placeholderImg("classic-blueberry-pie", "ingredients"),
```

…to:

```ts
heroImage: recipeImg("classic-blueberry-pie", "hero"),
ingredientsImage: recipeImg("classic-blueberry-pie", "ingredients"),
```

Commit. The next deploy ships the real images.

## Generating images via Grok / Midjourney / etc.

Suggested prompt skeleton:

> Photorealistic food photography of [DISH NAME], shot 3/4 overhead on a
> [SURFACE — wood / linen / marble], natural window light from upper-left, 50mm
> lens, shallow depth of field, magazine quality, no text, no watermark.
> Aspect 3:2, 1200×800.

Keep the visual language consistent across the catalog — same surface tones,
same light direction, same lens character — so the recipe vault feels like one
publication and not a stock-photo bin.
