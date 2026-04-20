"use client";

import { useState, useMemo } from "react";
import ThemeBody from "@/components/ThemeBody";
import CalculatorPage from "@/components/CalculatorPage";
import ResultBox from "@/components/ResultBox";
import { getBySlug } from "@/lib/calculators";
import { BERRY, CUP_GRAMS, formatNumber } from "@/lib/constants";

const calc = getBySlug("pie-dish")!;

const DISHES = [
  { v: "7,1.25", label: '7" Mini Pie Dish', area: Math.PI * 3.5 ** 2, depth: 1.25, servings: 4 },
  { v: "8,1.5", label: '8" Standard Pie Dish', area: Math.PI * 4 ** 2, depth: 1.5, servings: 6 },
  { v: "9,1.75", label: '9" Classic Pie Dish', area: Math.PI * 4.5 ** 2, depth: 1.75, servings: 8 },
  { v: "9.5,2", label: '9.5" Deep-Dish Pie', area: Math.PI * 4.75 ** 2, depth: 2, servings: 8 },
  { v: "10,2", label: '10" Extra-Large Pie', area: Math.PI * 5 ** 2, depth: 2, servings: 10 },
  { v: "13x9,2", label: "13×9 Sheet / Slab Pie", area: 13 * 9, depth: 2, servings: 12 },
  { v: "12,1.5", label: '12" Tart Pan', area: Math.PI * 6 ** 2, depth: 1.5, servings: 10 },
  { v: "muffin,1.5", label: "Muffin tin (12 cups)", area: 12 * Math.PI * 1.25 ** 2, depth: 1.5, servings: 12 },
];

export default function PieDishCalculator() {
  const [dish, setDish] = useState(DISHES[2].v);
  const [density, setDensity] = useState("0.75");
  const [crust, setCrust] = useState("1.1");

  const result = useMemo(() => {
    const d = DISHES.find((x) => x.v === dish)!;
    const volIn3 = d.area * d.depth;
    const volCm3 = volIn3 * 16.387;
    const count =
      (volCm3 * parseFloat(density) * parseFloat(crust)) /
      BERRY.VOLUME_CM3 *
      BERRY.PACKING_EFFICIENCY;
    const grams = count * BERRY.MASS_G;
    return { count, grams, cups: grams / CUP_GRAMS, servings: d.servings };
  }, [dish, density, crust]);

  const dots = Math.min(Math.round(result.count), 80);

  return (
    <>
      <ThemeBody theme="country" />
      <CalculatorPage
        calc={calc}
        usageCount="4.8M"
        tags={[{ label: "BAKING" }, { label: "#1 THIS WEEK", variant: "hot" }]}
      >
        <div className="calc-form">
          <div className="field">
            <label>Dish Type</label>
            <select value={dish} onChange={(e) => setDish(e.target.value)}>
              {DISHES.map((d) => (
                <option key={d.v} value={d.v}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>Filling Density</label>
            <select value={density} onChange={(e) => setDensity(e.target.value)}>
              <option value="0.85">Packed (very juicy)</option>
              <option value="0.75">Standard (juicy-but-set)</option>
              <option value="0.65">Loose (more filling, less berry)</option>
            </select>
          </div>
          <div className="field">
            <label>Crust Style</label>
            <select value={crust} onChange={(e) => setCrust(e.target.value)}>
              <option value="1">Full top crust</option>
              <option value="1.1">Lattice (+10% for gaps)</option>
              <option value="1.15">Crumble top</option>
              <option value="0.95">Open (galette)</option>
            </select>
          </div>
        </div>

        <ResultBox
          icon="🥧"
          value={formatNumber(result.count)}
          unit="blueberries"
          sub={`= ${formatNumber(result.grams)} g · ${result.cups.toFixed(2)} cups · serves ~${result.servings}`}
        />

        <div className="dish-visual" title="Each dot = 1 blueberry">
          {Array.from({ length: dots }).map((_, i) => (
            <span key={i} className="berry-dot" />
          ))}
          {result.count > 80 && (
            <span
              style={{
                position: "absolute",
                bottom: 8,
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                background: "var(--bg-card)",
                padding: "2px 10px",
                border: "1px solid var(--border-soft)",
                zIndex: 2,
              }}
            >
              + {formatNumber(result.count - 80)} more
            </span>
          )}
        </div>

        <div className="recipe-card">
          <h4>Grandma's Ratio</h4>
          <p style={{ fontSize: 15, fontStyle: "italic" }}>
            For a lattice top, add about 10% extra berries — the visible filling
            settles as it bakes. For open galettes, reduce by 5% to prevent run-off.
          </p>
        </div>
      </CalculatorPage>
    </>
  );
}
