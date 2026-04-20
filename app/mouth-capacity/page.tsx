"use client";

import { useState, useMemo } from "react";
import ThemeBody from "@/components/ThemeBody";
import CalculatorPage from "@/components/CalculatorPage";
import ResultBox from "@/components/ResultBox";
import { getBySlug } from "@/lib/calculators";
import { BERRY } from "@/lib/constants";

const calc = getBySlug("mouth-capacity")!;

export default function MouthCapacity() {
  const [size, setSize] = useState("71");
  const [safety, setSafety] = useState("0.85");

  const count = useMemo(() => {
    const ml = parseFloat(size);
    return Math.floor(
      (ml / BERRY.VOLUME_CM3) * BERRY.PACKING_EFFICIENCY * parseFloat(safety)
    );
  }, [size, safety]);

  return (
    <>
      <ThemeBody theme="absurd" />
      <CalculatorPage
        calc={calc}
        usageCount="1.8M"
        tags={[{ label: "ABSURD", variant: "hot" }]}
      >
        <div className="calc-form">
          <div className="field">
            <label>Mouth Size</label>
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="45">Small (child)</option>
              <option value="71">Average adult (71 mL)</option>
              <option value="90">Large</option>
              <option value="120">Competitive eater</option>
            </select>
          </div>
          <div className="field">
            <label>Safety Setting</label>
            <select value={safety} onChange={(e) => setSafety(e.target.value)}>
              <option value="0.85">Responsible adult (85%)</option>
              <option value="0.95">Risk tolerant (95%)</option>
              <option value="1.0">No self-preservation (100%)</option>
            </select>
          </div>
        </div>

        <ResultBox
          icon="😬"
          value={count.toString()}
          unit="blueberries"
          sub="Do not attempt. For reference only. Seriously."
        />

        <div className="dyk">
          <strong>Medical note:</strong> The average adult oral cavity holds about
          71.2 mL. Factoring in tongue displacement, packing inefficiency, and a
          15% "don't choke" safety margin, this is a thought exercise. Not a goal.
        </div>
      </CalculatorPage>
    </>
  );
}
