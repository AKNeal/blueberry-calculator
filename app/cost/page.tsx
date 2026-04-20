"use client";

import { useState, useMemo } from "react";
import ThemeBody from "@/components/ThemeBody";
import CalculatorPage from "@/components/CalculatorPage";
import ResultBox from "@/components/ResultBox";
import { getBySlug } from "@/lib/calculators";
import { BERRY, OZ_GRAMS, LB_GRAMS, formatNumber } from "@/lib/constants";

const calc = getBySlug("cost")!;

export default function CostCalc() {
  const [price, setPrice] = useState(5.99);
  const [size, setSize] = useState(6);
  const [unit, setUnit] = useState("oz");

  const result = useMemo(() => {
    let grams = 0;
    if (unit === "g") grams = size;
    else if (unit === "oz") grams = size * OZ_GRAMS;
    else if (unit === "lb") grams = size * LB_GRAMS;
    else if (unit === "kg") grams = size * 1000;
    else if (unit === "pint") grams = size * 296;
    const count = grams / BERRY.MASS_G;
    const perBerry = count > 0 ? (price / count) * 100 : 0;
    const perKg = grams > 0 ? (price / grams) * 1000 : 0;
    return { perBerry, perKg, count };
  }, [price, size, unit]);

  return (
    <>
      <ThemeBody theme="technical" />
      <CalculatorPage
        calc={calc}
        usageCount="480k"
        tags={[{ label: "COST" }]}
      >
        <div className="calc-form">
          <div className="field">
            <label>Price Paid ($)</label>
            <input
              type="number"
              value={price}
              step="0.01"
              onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
            />
          </div>
          <div className="field">
            <label>Package Size</label>
            <input
              type="number"
              value={size}
              step="any"
              onChange={(e) => setSize(parseFloat(e.target.value) || 0)}
            />
          </div>
          <div className="field">
            <label>Size Unit</label>
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="oz">Ounces</option>
              <option value="g">Grams</option>
              <option value="lb">Pounds</option>
              <option value="kg">Kilograms</option>
              <option value="pint">US Pint</option>
            </select>
          </div>
        </div>

        <ResultBox
          icon="💰"
          value={`¢${result.perBerry.toFixed(2)}`}
          unit="/ berry"
          sub={`≈ ${formatNumber(result.count)} berries in package · $${result.perKg.toFixed(2)}/kg`}
        />

        <div className="spec-sheet">
          <h4>Typical Market Ranges</h4>
          <table>
            <tbody>
              <tr><td>Peak-season (USA)</td><td>¢2 – ¢4 / berry</td></tr>
              <tr><td>Off-season (imported)</td><td>¢5 – ¢8 / berry</td></tr>
              <tr><td>Organic premium</td><td>+30 – 80%</td></tr>
              <tr><td>Frozen bulk</td><td>¢1 – ¢2 / berry</td></tr>
            </tbody>
          </table>
        </div>
      </CalculatorPage>
    </>
  );
}
