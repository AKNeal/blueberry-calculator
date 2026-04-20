"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { CATEGORIES, getByCategory } from "@/lib/calculators";
import { RECIPES, RECIPE_CATEGORIES, getRecipesByCategory } from "@/lib/recipes";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <>
      {/* Utility bar */}
      <div className="util">
        <div className="util-inner">
          <div>
            <span className="live">4,281 USERS CALCULATING NOW</span>
            <span style={{ opacity: 0.6, marginLeft: 16 }}>EST. 2011 · v 14.2.7</span>
          </div>
          <div>
            <a href="#">Sign In</a>
            <a href="#">Pro Tools</a>
            <a href="#">API</a>
            <a href="#">🇺🇸 EN ▾</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="main-header">
        <div className="header-inner">
          <Link href="/" className="logo">
            <span className="logo-berry" />
            Blueberry<span className="net">Calculator</span>
          </Link>

          <nav ref={navRef} className="primary">
            {/* Recipes dropdown — featured first */}
            <div
              className={`nav-item ${openMenu === "Recipes" ? "open" : ""}`}
              onMouseEnter={() => setOpenMenu("Recipes")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className="nav-trigger"
                onClick={() =>
                  setOpenMenu(openMenu === "Recipes" ? null : "Recipes")
                }
              >
                Recipes
                <span className="chev">▼</span>
              </button>
              <div className="dropdown">
                <Link
                  href="/recipes"
                  onClick={() => setOpenMenu(null)}
                  style={{ fontWeight: 700 }}
                >
                  <span className="ic">📖</span>
                  <span>All Recipes ({RECIPES.length})</span>
                </Link>
                {RECIPES.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/recipes/${r.slug}`}
                    onClick={() => setOpenMenu(null)}
                  >
                    <span className="ic">🫐</span>
                    <span>{r.short}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Calculator category dropdowns */}
            {CATEGORIES.map((cat) => {
              const items = getByCategory(cat);
              const isOpen = openMenu === cat;
              return (
                <div
                  key={cat}
                  className={`nav-item ${isOpen ? "open" : ""}`}
                  onMouseEnter={() => setOpenMenu(cat)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className="nav-trigger"
                    onClick={() => setOpenMenu(isOpen ? null : cat)}
                  >
                    {cat}
                    <span className="chev">▼</span>
                  </button>
                  <div className="dropdown">
                    {items.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/${c.slug}`}
                        onClick={() => setOpenMenu(null)}
                      >
                        <span className="ic">{c.icon}</span>
                        <span>{c.short}</span>
                        {c.trending && <span className="trend">HOT</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
            <Link
              href="/"
              className="nav-trigger"
              style={{ textDecoration: "none" }}
            >
              All Calculators
            </Link>
          </nav>

          <div className="header-search">
            <input type="text" placeholder="Search calculators..." />
            <button>🔍</button>
          </div>
        </div>
      </header>
    </>
  );
}
