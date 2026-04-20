"use client";

import { useState } from "react";

interface Props {
  icon: string;
  value: string;
  unit?: string;
  sub?: string;
  copyText?: string;
}

export default function ResultBox({ icon, value, unit, sub, copyText }: Props) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    const text = copyText ?? `${value}${unit ? " " + unit : ""}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 900);
  };

  return (
    <div className="result">
      <span className="result-icon">{icon}</span>
      <div>
        <div className="result-main">
          {value}
          {unit && <span className="unit">{unit}</span>}
        </div>
        {sub && <div className="result-sub">{sub}</div>}
      </div>
      <button className="copy-btn" onClick={onCopy}>
        {copied ? "✓" : "Copy"}
      </button>
    </div>
  );
}
