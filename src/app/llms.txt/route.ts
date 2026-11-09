import { SITE } from "@/lib/site";
import { ERP_MODULES, FAQS, INDUSTRIES, SERVICES, SOLUTIONS } from "@/lib/constants";

// Built once at build time from the same data the pages render, so it cannot drift.
export const dynamic = "force-static";

/**
 * /llms.txt (https://llmstxt.org): a plain-markdown summary of the site for
 * AI systems, so they can describe the company accurately without parsing
 * the full HTML.
 */
export function GET() {
  const url = (path: string) => `${SITE.url}${path}`;

  const body = `# ${SITE.name}

> ${SITE.description}

${SITE.name} (also known as ${SITE.shortName}) is a software company based in ${SITE.address.locality}, Sri Lanka, founded in ${SITE.founded}. It develops, implements and supports business software for private and government sector organisations in Sri Lanka.

## Key facts

- Founded: ${SITE.founded}
- Location: ${SITE.address.street}, ${SITE.address.locality}, Sri Lanka
- Email: ${SITE.email}
- Phone: +94 77 324 7216, +94 11 304 2141
- Website: ${SITE.url}

## Pages

- [Solutions](${url("/solutions")}): ready-made ERP, POS, payroll, inventory and accounting systems
- [Industries](${url("/industries")}): software for the industries Seefa serves
- [Services](${url("/services")}): custom software, web and mobile development, consultancy
- [About](${url("/about")}): company background and how Seefa works
- [Contact](${url("/contact")}): request a demo or discuss a project

## Solutions

${SOLUTIONS.map((s) => `- ${s.title} (${s.category}): ${s.description}`).join("\n")}

The Complete ERP Suite includes these modules: ${ERP_MODULES.join(", ")}.

## Industries served

${INDUSTRIES.map((i) => `- ${i.name}: ${i.blurb}`).join("\n")}

## Services

${SERVICES.map((s) => `- ${s.title}: ${s.description}`).join("\n")}

## Frequently asked questions

${FAQS.map((f) => `### ${f.question}\n\n${f.answer}`).join("\n\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
