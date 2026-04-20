"use client";

import { useState, useMemo } from "react";
import ThemeBody from "@/components/ThemeBody";
import CalculatorPage from "@/components/CalculatorPage";
import ResultBox from "@/components/ResultBox";
import { getBySlug } from "@/lib/calculators";
import { BERRY, LB_GRAMS, formatNumber } from "@/lib/constants";

const calc = getBySlug("bush-yield")!;

export default function BushYield() {
  const [bushes, setBushes] = useState(4);
  const [age, setAge] = useState("1");
  const [variety, setVariety] = useState("7");

  const result = useMemo(() => {
    const lb = bushes * parseFloat(age) * parseFloat(variety);
    const berries = (lb * LB_GRAMS) / BERRY.MASS_G;
    const pies = berries / 450;
    return { lb, berries, pies };
  }, [bushes, age, variety]);

  return (
    <>
      <ThemeBody theme="technical" />
      <CalculatorPage
        calc={calc}
        usageCount="340k"
        tags={[{ label: "GARDENING" }]}
      >
        <div className="ruler" />

        <div className="calc-form">
          <div className="field">
            <label>Number of Bushes</label>
            <input
              type="number"
              value={bushes}
              min={1}
              onChange={(e) => setBushes(parseInt(e.target.value) || 0)}
            />
          </div>
          <div className="field">
            <label>Plant Maturity</label>
            <select value={age} onChange={(e) => setAge(e.target.value)}>
              <option value="0.1">Year 1 (establishing)</option>
              <option value="0.4">Year 2–3</option>
              <option value="0.8">Year 4–5</option>
              <option value="1">Year 6+ (mature)</option>
              <option value="0.6">Aging (15+ yrs)</option>
            </select>
          </div>
          <div className="field">
            <label>Variety</label>
            <select value={variety} onChange={(e) => setVariety(e.target.value)}>
              <option value="7">Highbush (standard)</option>
              <option value="9">Rabbiteye (high-yield)</option>
              <option value="4">Lowbush (wild)</option>
              <option value="3">Half-high / northern</option>
            </select>
          </div>
        </div>

        <ResultBox
          icon="📊"
          value={formatNumber(result.lb, 1)}
          unit="lb / season"
          sub={`≈ ${formatNumber(result.berries)} berries · ${formatNumber(result.pies, 1)} 9-inch pies worth`}
        />

        <div className="spec-sheet">
          <h4>Reference Yields (lb / mature bush / season)</h4>
          <table>
            <tbody>
              <tr><td>Highbush cultivars</td><td>5 – 10 lb</td></tr>
              <tr><td>Rabbiteye cultivars</td><td>7 – 15 lb</td></tr>
              <tr><td>Lowbush (wild)</td><td>2 – 6 lb</td></tr>
              <tr><td>Half-high / northern</td><td>2 – 5 lb</td></tr>
            </tbody>
          </table>
        </div>
      </CalculatorPage>
    </>
  );
}
