import { NextResponse } from "next/server";
import { PORTAL_FALLBACK_URL } from "@/lib/site";

// Read at request time, not build time, so CLIENT_PORTAL_URL can be changed in
// Coolify and picked up with a restart instead of a rebuild.
export const dynamic = "force-dynamic";

export function GET() {
  const target = process.env.CLIENT_PORTAL_URL?.trim() || PORTAL_FALLBACK_URL;

  let destination: URL;
  try {
    destination = new URL(target);
  } catch {
    console.error(
      `CLIENT_PORTAL_URL is not a valid absolute URL: ${JSON.stringify(target)}`
    );
    return new NextResponse("Client portal is not configured correctly.", {
      status: 500,
    });
  }

  if (destination.protocol !== "http:" && destination.protocol !== "https:") {
    console.error(`CLIENT_PORTAL_URL must be http or https, got ${destination.protocol}`);
    return new NextResponse("Client portal is not configured correctly.", {
      status: 500,
    });
  }

  // 307 keeps this out of browser and proxy caches, so a changed env var takes
  // effect immediately rather than being remembered from a previous value.
  return NextResponse.redirect(destination, {
    status: 307,
    headers: { "Cache-Control": "no-store" },
  });
}
