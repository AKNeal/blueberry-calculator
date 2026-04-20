"use client";

import { useState, useMemo } from "react";
import ThemeBody from "@/components/ThemeBody";
import CalculatorPage from "@/components/CalculatorPage";
import ResultBox from "@/components/ResultBox";
import { getBySlug } from "@/lib/calculators";
import { BERRY, CUP_GRAMS, LB_GRAMS, formatNumber } from "@/lib/constants";

const calc = getBySlug("jam-yield")!;

export default function JamYield() {
  const [input, setInput] = useState(2);
  const [unit, setUnit] = useState("lb");
  const [type, setType] = useState("1.5");

  const result = useMemo(() => {
    let lb = 0;
    if (unit === "lb") lb = input;
    else if (unit === "kg") lb = input * 2.205;
    else if (unit === "count") lb = (input * BERRY.MASS_G) / LB_GRAMS;
    else if (unit === "cup") lb = (input * CUP_GRAMS) / LB_GRAMS;
    const cups = lb * parseFloat(type);
    const jars = cups; // 8oz jar ≈ 1 cup
    return { cups, jars };
  }, [input, unit, type]);

  return (
    <>
      <ThemeBody theme="country" />
      <CalculatorPage
        calc={calc}
        usageCount="190k"
        tags={[{ label: "BAKING" }]}
      >
        <div className="calc-form">
          <div className="field">
            <label>Starting Berries</label>
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
              <option value="lb">Pounds</option>
              <option value="kg">Kilograms</option>
              <option value="count">Berry count</option>
              <option value="cup">Cups</option>
            </select>
          </div>
          <div className="field">
            <label>Making</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="1.5">Jam (cups out)</option>
              <option value="1">Syrup (cups out)</option>
              <option value="0.66">Compote (cups out)</option>
              <option value="2.2">Pie filling (cups out)</option>
            </select>
          </div>
        </div>

        <ResultBox
          icon="🍯"
          value={result.cups.toFixed(2)}
          unit="cups"
          sub={`= ${result.jars.toFixed(1)} standard 8-oz jars`}
        />

        <div className="recipe-card">
          <h4>Farmhouse Rule</h4>
          <p style={{ fontSize: 15, fontStyle: "italic" }}>
            One pound of blueberries reduces to about 1.5 cups of jam, 1 cup of
            syrup, or two-thirds of a cup of thick compote. Sugar and cook time
            shift the yield slightly.
          </p>
        </div>
      </CalculatorPage>
    </>
  );
}
