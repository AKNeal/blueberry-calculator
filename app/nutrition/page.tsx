"use client";

import { useState, useMemo } from "react";
import ThemeBody from "@/components/ThemeBody";
import CalculatorPage from "@/components/CalculatorPage";
import ResultBox from "@/components/ResultBox";
import { getBySlug } from "@/lib/calculators";
import { BERRY, CUP_GRAMS, OZ_GRAMS, formatNumber } from "@/lib/constants";

const calc = getBySlug("nutrition")!;

export default function Nutrition() {
  const [input, setInput] = useState(150);
  const [unit, setUnit] = useState("g");

  const nut = useMemo(() => {
    let grams = 0;
    if (unit === "g") grams = input;
    else if (unit === "count") grams = input * BERRY.MASS_G;
    else if (unit === "cup") grams = input * CUP_GRAMS;
    else if (unit === "oz") grams = input * OZ_GRAMS;
    const per100 = grams / 100;
    return {
      kcal: 57 * per100,
      carbs: 14.5 * per100,
      fiber: 2.4 * per100,
      sugar: 9.7 * per100,
      protein: 0.7 * per100,
    };
  }, [input, unit]);

  return (
    <>
      <ThemeBody theme="country" />
      <CalculatorPage
        calc={calc}
        usageCount="890k"
        tags={[{ label: "NUTRITION" }]}
      >
        <div className="calc-form">
          <div className="field">
            <label>Amount</label>
            <input
              type="number"
              value={input}
              step="any"
              onChange={(e) => setInput(parseFloat(e.target.value) || 0)}
            />
          </div>
          <div className="field">
            <label>Unit</label>
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="count">Berries</option>
              <option value="g">Grams</option>
              <option value="cup">Cups</option>
              <option value="oz">Ounces</option>
            </select>
          </div>
        </div>

        <ResultBox
          icon="🌿"
          value={formatNumber(nut.kcal)}
          unit="kcal"
          sub={`${formatNumber(nut.carbs, 1)}g carbs · ${formatNumber(nut.fiber, 1)}g fiber · ${formatNumber(nut.sugar, 1)}g sugar · ${formatNumber(nut.protein, 1)}g protein`}
        />

        <div className="recipe-card">
          <h4>Good to Know</h4>
          <p style={{ fontSize: 15, fontStyle: "italic" }}>
            A single median blueberry delivers about 0.86 calories — so you can
            eat roughly 116 of them for a 100-calorie snack. They're also loaded
            with antioxidants called anthocyanins.
          </p>
        </div>
      </CalculatorPage>
    </>
  );
}
