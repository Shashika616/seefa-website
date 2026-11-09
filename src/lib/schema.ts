import { SITE } from "@/lib/site";

/**
 * Schema.org builders. Every node references the Organization defined once in
 * the root layout by @id, so search and AI engines see one connected entity
 * graph instead of disconnected fragments that each restate the company.
 */
export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;

const abs = (path: string) => (path === "/" ? SITE.url : `${SITE.url}${path}`);

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

/** A typed page node (AboutPage, ContactPage, CollectionPage...) tied to the site. */
export function webPageSchema(opts: {
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": opts.type ?? "WebPage",
    "@id": `${abs(opts.path)}#webpage`,
    url: abs(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

/** A list of offerings, each a Service provided by the organization. */
export function serviceListSchema(opts: {
  path: string;
  name: string;
  items: { name: string; description: string; category?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${abs(opts.path)}#list`,
    name: opts.name,
    numberOfItems: opts.items.length,
    itemListElement: opts.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: item.name,
        description: item.description,
        ...(item.category ? { category: item.category } : {}),
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "Sri Lanka" },
      },
    })),
  };
}

export interface Faq {
  question: string;
  answer: string;
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
