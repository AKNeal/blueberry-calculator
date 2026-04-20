"use client";

import { useState, useMemo } from "react";
import ThemeBody from "@/components/ThemeBody";
import CalculatorPage from "@/components/CalculatorPage";
import ResultBox from "@/components/ResultBox";
import { getBySlug } from "@/lib/calculators";
import { BERRY, LB_GRAMS, formatNumber } from "@/lib/constants";

const calc = getBySlug("distance")!;

const TARGETS = [
  { v: "0.1", label: "Across a dinner plate" },
  { v: "2", label: "Across a football field (US)" },
  { v: "1609", label: "1 mile" },
  { v: "42195", label: "Marathon distance" },
  { v: "100000", label: "NYC → Boston" },
  { v: "4828032", label: "Coast to coast (USA)" },
  { v: "40075017", label: "Around the equator" },
  { v: "384400000", label: "Earth to the Moon" },
  { v: "149600000000", label: "Earth to the Sun" },
];

export default function Distance() {
  const [target, setTarget] = useState("42195");

  const result = useMemo(() => {
    const m = parseFloat(target);
    const count = (m * 1000) / BERRY.DIAMETER_MM;
    const lb = (count * BERRY.MASS_G) / LB_GRAMS;
    const tons = lb / 2000;
    const pies = count / 450;
    return { count, tons, pies };
  }, [target]);

  return (
    <>
      <ThemeBody theme="absurd" />
      <CalculatorPage
        calc={calc}
        usageCount="412k"
        tags={[{ label: "ABSURD", variant: "hot" }]}
      >
        <div className="calc-form">
          <div className="field">
            <label>Destination</label>
            <select value={target} onChange={(e) => setTarget(e.target.value)}>
              {TARGETS.map((t) => (
                <option key={t.v} value={t.v}>{t.label}</option>
              ))}
            </select>
          </div>
        </div>

        <ResultBox
          icon="🛰️"
          value={formatNumber(result.count)}
          unit="blueberries"
          sub={`= ${formatNumber(result.tons, 1)} tons · ≈ ${formatNumber(result.pies)} 9-inch pies worth`}
        />

        <div className="dyk">
          <strong>Scale:</strong> At 12.7mm per berry, you'd need roughly 30.3 billion
          blueberries to reach the Moon — which is about one year of total US blueberry
          production. So it's technically possible. Not recommended.
        </div>
      </CalculatorPage>
    </>
  );
}
