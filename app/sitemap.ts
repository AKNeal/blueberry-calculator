import type { MetadataRoute } from "next";
import { CALCULATORS } from "@/lib/calculators";
import { RECIPES } from "@/lib/recipes";
import { ARTICLES } from "@/lib/articles";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/recipes`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/articles`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/methodology`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const calculators: MetadataRoute.Sitemap = CALCULATORS.map((c) => ({
    url: `${SITE.url}/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const recipes: MetadataRoute.Sitemap = RECIPES.map((r) => ({
    url: `${SITE.url}/recipes/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const articles: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${SITE.url}/articles/${a.slug}`,
    lastModified: new Date(a.updated ?? a.published),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...calculators, ...recipes, ...articles];
}
