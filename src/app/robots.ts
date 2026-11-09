import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * AI answer engines crawl with their own user agents. They are allowed
 * explicitly so the site can be cited in ChatGPT, Claude, Perplexity, Gemini
 * and Google AI Overviews answers. Each group repeats the client-login
 * disallow, because a crawler follows only the most specific group that
 * matches it and ignores the "*" group entirely.
 */
const AI_CRAWLERS = [
  "GPTBot", // OpenAI training
  "OAI-SearchBot", // ChatGPT search results
  "ChatGPT-User", // ChatGPT fetching a page a user asked about
  "ClaudeBot", // Anthropic
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended", // Gemini and AI Overviews grounding
  "Applebot-Extended",
  "CCBot", // Common Crawl, a source for many models
];

const PRIVATE = ["/client-login"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: PRIVATE },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
