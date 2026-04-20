"use client";

import { useState, useMemo } from "react";
import ThemeBody from "@/components/ThemeBody";
import CalculatorPage from "@/components/CalculatorPage";
import ResultBox from "@/components/ResultBox";
import { getBySlug } from "@/lib/calculators";
import { BERRY, formatNumber } from "@/lib/constants";

const calc = getBySlug("volume")!;

const UNITS = [
  { v: "236.588", label: "US Cup" },
  { v: "15", label: "Tablespoon" },
  { v: "5", label: "Teaspoon" },
  { v: "473.176", label: "US Pint" },
  { v: "946.353", label: "US Quart" },
  { v: "3785.41", label: "US Gallon" },
  { v: "1000", label: "Liter" },
  { v: "29.5735", label: "Fluid Ounce" },
];

export default function VolumeCalc() {
  const [input, setInput] = useState(1);
  const [unit, setUnit] = useState("236.588");
  const [pack, setPack] = useState("0.64");

  const result = useMemo(() => {
    const ml = input * parseFloat(unit);
    const count = (ml / BERRY.VOLUME_CM3) * parseFloat(pack);
    const grams = count * BERRY.MASS_G;
    return { count, grams };
  }, [input, unit, pack]);

  return (
    <>
      <ThemeBody theme="technical" />
      <CalculatorPage
        calc={calc}
        usageCount="1.4M"
        tags={[{ label: "VOLUME" }]}
      >
        <div className="ruler" />

        <div className="calc-form">
          <div className="field">
            <label>Volume</label>
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
              {UNITS.map((u) => (
                <option key={u.v} value={u.v}>{u.label}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>Packing Efficiency</label>
            <select value={pack} onChange={(e) => setPack(e.target.value)}>
              <option value="0.64">Natural / random (64%)</option>
              <option value="0.74">Tight / hand-packed (74%)</option>
              <option value="0.52">Loose / jiggled in (52%)</option>
            </select>
          </div>
        </div>

        <ResultBox
          icon="⚗️"
          value={formatNumber(result.count)}
          unit="berries"
          sub={`= ${formatNumber(result.grams, 0)} g · ${(result.grams / 1000).toFixed(2)} kg`}
        />

        <div className="spec-sheet">
          <h4>Methodology</h4>
          <table>
            <tbody>
              <tr><td>Single berry volume</td><td>1.07 cm³</td></tr>
              <tr><td>Packing factor (φ)</td><td>{pack} ({(parseFloat(pack) * 100).toFixed(0)}%)</td></tr>
              <tr><td>Effective berry volume</td><td>{(BERRY.VOLUME_CM3 / parseFloat(pack)).toFixed(2)} cm³</td></tr>
              <tr><td>Formula</td><td>count = V_total · φ / V_berry</td></tr>
            </tbody>
          </table>
        </div>
      </CalculatorPage>
    </>
  );
}
