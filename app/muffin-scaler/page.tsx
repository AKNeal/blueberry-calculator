"use client";

import { useState, useMemo } from "react";
import ThemeBody from "@/components/ThemeBody";
import CalculatorPage from "@/components/CalculatorPage";
import ResultBox from "@/components/ResultBox";
import { getBySlug } from "@/lib/calculators";
import { BERRY, CUP_GRAMS, formatNumber } from "@/lib/constants";

const calc = getBySlug("muffin-scaler")!;

const TYPES = [
  { v: "8", label: "Standard Muffin" },
  { v: "14", label: "Bakery-Style Muffin" },
  { v: "20", label: "Jumbo Muffin" },
  { v: "4", label: "Mini Muffin" },
  { v: "18", label: "Scone (wedge)" },
  { v: "30", label: "9×5 Loaf (per slice)" },
  { v: "6", label: "Pancake (standard)" },
  { v: "3", label: "Waffle quadrant" },
];

export default function MuffinScaler() {
  const [type, setType] = useState("14");
  const [qty, setQty] = useState(12);

  const total = useMemo(() => parseFloat(type) * qty, [type, qty]);
  const grams = total * BERRY.MASS_G;
  const cups = grams / CUP_GRAMS;

  return (
    <>
      <ThemeBody theme="country" />
      <CalculatorPage
        calc={calc}
        usageCount="720k"
        tags={[{ label: "BAKING" }]}
      >
        <div className="calc-form">
          <div className="field">
            <label>Baked Good</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              {TYPES.map((t) => (
                <option key={t.v} value={t.v}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>Quantity</label>
            <input
              type="number"
              value={qty}
              min={1}
              onChange={(e) => setQty(parseInt(e.target.value) || 0)}
            />
          </div>
        </div>

        <ResultBox
          icon="🧁"
          value={formatNumber(total)}
          unit="blueberries"
          sub={`= ${formatNumber(grams)} g · ≈ ${cups.toFixed(2)} cups`}
        />

        <div className="recipe-card">
          <h4>Baker's Note</h4>
          <p style={{ fontSize: 15, fontStyle: "italic" }}>
            Standard muffins use about 8 berries each. Premium bakery-style muffins
            use 12–15 for that signature burst-in-every-bite quality.
          </p>
        </div>
      </CalculatorPage>
    </>
  );
}
