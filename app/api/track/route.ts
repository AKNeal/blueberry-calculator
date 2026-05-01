// POST /api/track — increment the view counter for a calculator or recipe slug.
// Body: { slug: string }
//
// Called from the client on every calculator/recipe page view. The endpoint
// is intentionally minimal — no auth, no rate limiting yet. Add a per-IP
// cap (and a referrer/origin check) once real traffic justifies it.

import { trackView } from "@/lib/telemetry";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { slug?: unknown };
    const slug = typeof body.slug === "string" ? body.slug.trim() : "";
    if (!slug || slug.length > 80 || !/^[a-z0-9-]+$/i.test(slug)) {
      return Response.json({ ok: false, error: "invalid_slug" }, { status: 400 });
    }
    await trackView(slug);
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }
}
