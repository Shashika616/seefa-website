/**
 * Single source of truth for site-wide identity used by metadata,
 * sitemap/robots and structured data.
 */
export const SITE = {
  name: "Seefa Business Solutions",
  shortName: "Seefa",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.seefalk.com",
  description:
    "Business software built around your business since 1999. ERP, POS, payroll, inventory and industry-specific solutions, developed and supported in Sri Lanka.",
  email: "info@Seefalk.com",
  phones: ["+94773247216", "+94113042141"],
  address: {
    street: "No-38, Obahena Road",
    locality: "Madiwela, Kotte",
    country: "LK",
  },
  founded: "1999",
} as const;

/** Routes included in the sitemap, in navigation order. */
export const ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/solutions", priority: 0.9, changeFrequency: "monthly" },
  { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
] as const;
