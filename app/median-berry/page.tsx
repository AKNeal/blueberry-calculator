"use client";

import { useState, useMemo } from "react";
import ThemeBody from "@/components/ThemeBody";
import CalculatorPage from "@/components/CalculatorPage";
import ResultBox from "@/components/ResultBox";
import { getBySlug } from "@/lib/calculators";
import { BERRY, CUP_ML, OZ_GRAMS, formatNumber } from "@/lib/constants";

const calc = getBySlug("median-berry")!;

export default function MedianBerry() {
  const [input, setInput] = useState(100);
  const [from, setFrom] = useState("count");
  const [to, setTo] = useState("g");
  const [sizeMult, setSizeMult] = useState("1");

  const result = useMemo(() => {
    const m = parseFloat(sizeMult);
    const g = BERRY.MASS_G * m;
    const cm3 = BERRY.VOLUME_CM3 * m;
    const P = BERRY.PACKING_EFFICIENCY;

    // to canonical count
    let count = 0;
    if (from === "count") count = input;
    else if (from === "g") count = input / g;
    else if (from === "oz") count = (input * OZ_GRAMS) / g;
    else if (from === "cm3" || from === "ml") count = (input / cm3) * P;
    else if (from === "cup") count = ((input * CUP_ML) / cm3) * P;

    // from canonical count to output unit
    let out = 0;
    let unit = "";
    if (to === "count") { out = count; unit = "berries"; }
    else if (to === "g") { out = count * g; unit = "g"; }
    else if (to === "oz") { out = (count * g) / OZ_GRAMS; unit = "oz"; }
    else if (to === "cm3") { out = (count * cm3) / P; unit = "cm³"; }
    else if (to === "ml") { out = (count * cm3) / P; unit = "mL"; }
    else if (to === "cup") { out = (count * cm3) / P / CUP_ML; unit = "cups"; }
    return { out, unit, count, grams: count * g };
  }, [input, from, to, sizeMult]);

  return (
    <>
      <ThemeBody theme="technical" />
      <CalculatorPage
        calc={calc}
        usageCount="2.1M"
        tags={[{ label: "MEASUREMENT" }, { label: "STAPLE", variant: "new" }]}
      >
        <div className="ruler" />

        <div className="calc-form">
          <div className="field">
            <label>Input Value</label>
            <input
              type="number"
              value={input}
              step="any"
              onChange={(e) => setInput(parseFloat(e.target.value) || 0)}
            />
          </div>
          <div className="field">
            <label>From Unit</label>
            <select value={from} onChange={(e) => setFrom(e.target.value)}>
              <option value="count">Berries (count)</option>
              <option value="g">Grams</option>
              <option value="oz">Ounces</option>
              <option value="cm3">Cubic centimeters (cm³)</option>
              <option value="ml">Milliliters</option>
              <option value="cup">US Cups</option>
            </select>
          </div>
          <div className="field">
            <label>To Unit</label>
            <select value={to} onChange={(e) => setTo(e.target.value)}>
              <option value="g">Grams</option>
              <option value="count">Berries (count)</option>
              <option value="oz">Ounces</option>
              <option value="cm3">Cubic centimeters (cm³)</option>
              <option value="ml">Milliliters</option>
              <option value="cup">US Cups</option>
            </select>
          </div>
          <div className="field">
            <label>Berry Size Class</label>
            <select value={sizeMult} onChange={(e) => setSizeMult(e.target.value)}>
              <option value="1">Median (standard)</option>
              <option value="0.7">Small / Wild (≈ 8mm)</option>
              <option value="1.5">Large (≈ 16mm)</option>
              <option value="2.2">Jumbo (≈ 20mm)</option>
            </select>
          </div>
        </div>

        <ResultBox
          icon="📐"
          value={formatNumber(result.out, 2)}
          unit={result.unit}
          sub={`${formatNumber(result.count, 0)} berries equivalent · ${formatNumber(result.grams, 1)}g mass`}
        />

        <div className="spec-sheet">
          <h4>Reference Specification — Median Highbush Blueberry</h4>
          <table>
            <tbody>
              <tr><td>Mass (μ)</td><td>1.500 g</td></tr>
              <tr><td>Volume (V)</td><td>1.070 cm³</td></tr>
              <tr><td>Diameter (d)</td><td>12.70 mm</td></tr>
              <tr><td>Density (ρ)</td><td>1.402 g/cm³</td></tr>
              <tr><td>Random packing (φ)</td><td>0.64</td></tr>
            </tbody>
          </table>
        </div>
      </CalculatorPage>
    </>
  );
}
