import type { MetadataRoute } from "next";
import { ROUTES, SITE } from "@/lib/site";
import { PHOTOS, type Photo } from "@/lib/images";
import { GLOBE_PHOTOS, INDUSTRIES, SERVICES, SOLUTIONS } from "@/lib/constants";

/** The photos each page actually shows, so Google Images can index them. */
const PAGE_IMAGES: Record<string, Photo[]> = {
  "/": [...GLOBE_PHOTOS.home, PHOTOS.pageSolutions, PHOTOS.pageIndustries, PHOTOS.pageServices, PHOTOS.pageAbout],
  "/solutions": [...GLOBE_PHOTOS.solutions, ...SOLUTIONS.map((s) => s.photo)],
  "/industries": [...GLOBE_PHOTOS.industries, ...INDUSTRIES.map((i) => i.photo)],
  "/services": [...GLOBE_PHOTOS.services, ...SERVICES.map((s) => s.photo)],
  "/about": [...GLOBE_PHOTOS.about, PHOTOS.aboutTeam, PHOTOS.aboutOffice],
  "/contact": GLOBE_PHOTOS.contact,
};

const urls = (photos: Photo[]) => [...new Set(photos.map((p) => p.src))].map((src) => `${SITE.url}${src}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE.url}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: urls(PAGE_IMAGES[route.path] ?? []),
  }));
}
