"use client";

import { useState, useMemo } from "react";
import ThemeBody from "@/components/ThemeBody";
import CalculatorPage from "@/components/CalculatorPage";
import ResultBox from "@/components/ResultBox";
import { getBySlug } from "@/lib/calculators";
import { BERRY, LB_GRAMS, formatNumber } from "@/lib/constants";

const calc = getBySlug("body")!;

export default function Body() {
  const [weight, setWeight] = useState(70);
  const [unit, setUnit] = useState("kg");

  const result = useMemo(() => {
    const grams = unit === "kg" ? weight * 1000 : weight * LB_GRAMS;
    const count = grams / BERRY.MASS_G;
    const cost = count * BERRY.COST_PER_BERRY_USD;
    return { count, cost };
  }, [weight, unit]);

  return (
    <>
      <ThemeBody theme="absurd" />
      <CalculatorPage
        calc={calc}
        usageCount="680k"
        tags={[{ label: "ABSURD", variant: "hot" }]}
      >
        <div className="calc-form">
          <div className="field">
            <label>Your Weight</label>
            <input
              type="number"
              value={weight}
              step="0.1"
              onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
            />
          </div>
          <div className="field">
            <label>Unit</label>
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="kg">Kilograms</option>
              <option value="lb">Pounds</option>
            </select>
          </div>
        </div>

        <ResultBox
          icon="⚖️"
          value={formatNumber(result.count)}
          unit="blueberries"
          sub={`= your exact mass · $${formatNumber(result.cost, 0)} worth of berries at average grocery price`}
        />

        <div className="dyk">
          <strong>Disclaimer:</strong> Reconstituting yourself from blueberries is
          not medically advised. You would be mostly air (36% void between berries)
          and entirely juice. The existential implications are beyond this site's scope.
        </div>
      </CalculatorPage>
    </>
  );
}
