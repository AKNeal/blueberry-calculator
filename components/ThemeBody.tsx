"use client";

import { useEffect } from "react";
import type { Theme } from "@/lib/calculators";

export default function ThemeBody({ theme }: { theme: Theme }) {
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return null;
}
