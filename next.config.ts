import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Content-Security-Policy without nonces, per the Next.js CSP guide. A nonce
 * policy would force every page to render dynamically and lose static
 * prerendering, so this keeps 'unsafe-inline' for scripts (Next injects inline
 * bootstrap scripts) but blocks everything else an attacker would reach for:
 * external scripts, plugins, <base> hijacking, foreign form targets, framing.
 *
 * No upgrade-insecure-requests: it could rewrite the http:// client-portal
 * link to https://, which that host does not serve. HSTS already enforces
 * HTTPS for this site's own origin.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

/** Sent on every response. Conservative defaults for a static marketing site. */
const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Matches frame-ancestors 'none' for browsers that predate CSP framing rules.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Isolates this site's window from pages it opens and pages that open it.
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  // Emits .next/standalone so the Docker image ships without node_modules.
  // Only for the Docker build: Vercel does its own tracing and fails with it set.
  output: process.env.DOCKER_BUILD === "1" ? "standalone" : undefined,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Next 16 only serves allow-listed qualities. 60 is for the small hero globe panels.
    qualities: [60, 75],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
