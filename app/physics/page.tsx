"use client";

import { useState, useMemo } from "react";
import ThemeBody from "@/components/ThemeBody";
import CalculatorPage from "@/components/CalculatorPage";
import ResultBox from "@/components/ResultBox";
import { getBySlug } from "@/lib/calculators";

const calc = getBySlug("physics")!;

export default function Physics() {
  const [height, setHeight] = useState(2);
  const [mode, setMode] = useState("impact");

  const result = useMemo(() => {
    if (mode === "impact") {
      const v = Math.sqrt(2 * 9.81 * height);
      return {
        value: v.toFixed(2),
        unit: "m/s",
        sub: `= ${(v * 2.237).toFixed(1)} mph · from ${height}m vacuum drop (ignoring air resistance)`,
      };
    }
    if (mode === "terminal") {
      return {
        value: "9.1",
        unit: "m/s",
        sub: "≈ 20.4 mph · steady-state in still air (~1.5g sphere, Cd ≈ 0.47)",
      };
    }
    return {
      value: "≈ 30",
      unit: "berries",
      sub: "38 cm theoretical maximum · bottom berry skin ruptures under load",
    };
  }, [height, mode]);

  return (
    <>
      <ThemeBody theme="technical" />
      <CalculatorPage
        calc={calc}
        usageCount="210k"
        tags={[{ label: "SCIENCE" }]}
      >
        <div className="ruler" />

        <div className="calc-form">
          <div className="field">
            <label>Drop Height (m)</label>
            <input
              type="number"
              value={height}
              step="0.1"
              onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
            />
          </div>
          <div className="field">
            <label>Calculation Mode</label>
            <select value={mode} onChange={(e) => setMode(e.target.value)}>
              <option value="impact">Impact velocity (vacuum)</option>
              <option value="terminal">Terminal velocity (air)</option>
              <option value="stack">Maximum theoretical stack</option>
            </select>
          </div>
        </div>

        <ResultBox
          icon="🔬"
          value={result.value}
          unit={result.unit}
          sub={result.sub}
        />

        <div className="spec-sheet">
          <h4>Physical Constants</h4>
          <table>
            <tbody>
              <tr><td>Berry mass (m)</td><td>1.5 g (1.5 × 10⁻³ kg)</td></tr>
              <tr><td>Cross-sectional area (A)</td><td>126.7 mm²</td></tr>
              <tr><td>Drag coefficient (Cd)</td><td>≈ 0.47 (sphere)</td></tr>
              <tr><td>Gravity (g)</td><td>9.81 m/s²</td></tr>
              <tr><td>Air density (ρ)</td><td>1.225 kg/m³</td></tr>
              <tr><td>Skin rupture threshold</td><td>≈ 0.5 N vertical load</td></tr>
            </tbody>
          </table>
        </div>
      </CalculatorPage>
    </>
  );
}
