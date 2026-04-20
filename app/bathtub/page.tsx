"use client";

import { useState, useMemo } from "react";
import ThemeBody from "@/components/ThemeBody";
import CalculatorPage from "@/components/CalculatorPage";
import ResultBox from "@/components/ResultBox";
import { getBySlug } from "@/lib/calculators";
import { BERRY, LB_GRAMS, formatNumber } from "@/lib/constants";

const calc = getBySlug("bathtub")!;

const PRESETS = [
  { v: "110", label: "Standard bathtub (110 gal)" },
  { v: "80", label: "Apartment tub (80 gal)" },
  { v: "200", label: "Clawfoot soaking tub (200 gal)" },
  { v: "660000", label: "Olympic swimming pool" },
  { v: "16", label: "Kitchen sink" },
  { v: "45", label: "Wheelbarrow" },
  { v: "8", label: "Office wastebasket" },
  { v: "2.5", label: "A shoe (men's size 10)" },
  { v: "custom", label: "Custom (gallons)" },
];

export default function Bathtub() {
  const [preset, setPreset] = useState("110");
  const [custom, setCustom] = useState(50);

  const result = useMemo(() => {
    const gal = preset === "custom" ? custom : parseFloat(preset);
    const ml = gal * 3785.41;
    const count = (ml / BERRY.VOLUME_CM3) * BERRY.PACKING_EFFICIENCY;
    const lb = (count * BERRY.MASS_G) / LB_GRAMS;
    const cost = count * BERRY.COST_PER_BERRY_USD;
    return { count, lb, cost };
  }, [preset, custom]);

  return (
    <>
      <ThemeBody theme="absurd" />
      <CalculatorPage
        calc={calc}
        usageCount="1.1M"
        tags={[{ label: "ABSURD", variant: "hot" }, { label: "VIRAL", variant: "new" }]}
      >
        <div className="calc-form">
          <div className="field">
            <label>Container</label>
            <select value={preset} onChange={(e) => setPreset(e.target.value)}>
              {PRESETS.map((p) => (
                <option key={p.v} value={p.v}>{p.label}</option>
              ))}
            </select>
          </div>
          {preset === "custom" && (
            <div className="field">
              <label>Custom Gallons</label>
              <input
                type="number"
                value={custom}
                onChange={(e) => setCustom(parseFloat(e.target.value) || 0)}
              />
            </div>
          )}
        </div>

        <ResultBox
          icon="🛁"
          value={formatNumber(result.count)}
          unit="blueberries"
          sub={`= ${formatNumber(result.lb, 0)} lb of berries · ≈ $${formatNumber(result.cost, 0)} at average grocery price`}
        />

        <div className="dyk">
          <strong>Context:</strong> At average grocery prices, filling a standard
          bathtub with blueberries costs more than most used cars. Do not, under
          any circumstances, do this.
        </div>
      </CalculatorPage>
    </>
  );
}
