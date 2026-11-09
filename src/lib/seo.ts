import type { Metadata } from "next";
import { SITE } from "@/lib/site";

/** The 1200x630 share card (src/app/opengraph-image.png). */
const SHARE_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: `${SITE.name}: business software built around your business`,
};

interface PageMeta {
  /** Page-specific title; the root layout's template appends " | Seefa". Keep it under ~50 characters. */
  title: string;
  /** Keep under ~155 characters, or search engines truncate it. */
  description: string;
  path: string;
  /** For utility pages that should stay out of search results. */
  noindex?: boolean;
}

/**
 * Complete metadata for one page.
 *
 * Next.js merges metadata shallowly: a page that defines its own openGraph or
 * twitter object replaces the root layout's entirely, share image included.
 * Building every page's metadata here means none can silently drop a field.
 */
export function pageMetadata({ title, description, path, noindex }: PageMeta): Metadata {
  const shareTitle = `${title} | ${SITE.shortName}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: shareTitle,
      description,
      url: path,
      siteName: SITE.name,
      locale: "en_LK",
      type: "website",
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [SHARE_IMAGE.url],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
