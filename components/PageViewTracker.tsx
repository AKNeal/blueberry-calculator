"use client";

import { useEffect } from "react";

/**
 * Fires a single POST /api/track call on mount with the current slug.
 * Drop into any calculator or recipe page to register a view in the
 * telemetry counter that powers the homepage trending widget.
 */
export default function PageViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    if (!slug) return;
    // Fire and forget — errors are swallowed server-side too.
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
      keepalive: true,
    }).catch(() => {});
  }, [slug]);

  return null;
}
