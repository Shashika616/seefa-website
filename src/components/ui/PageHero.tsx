import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import GlobeBackdrop from "@/components/ui/GlobeBackdrop";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import type { Photo } from "@/lib/images";

interface PageHeroProps {
  /** The six photos this page's hero globe turns through (see GLOBE_PHOTOS). */
  photos: Photo[];
  title: ReactNode;
  lede: ReactNode;
  /** Trail after Home, e.g. [{ name: "Solutions", path: "/solutions" }]. */
  crumbs: Crumb[];
  children?: ReactNode;
}

/**
 * Header shared by every inner page: the same rotating photo globe as the
 * homepage, filled with photos for this page, then breadcrumbs, one h1 and a
 * lede, so every section of the site opens the same way.
 *
 * Text is server-rendered and enters with a CSS animation, so it paints
 * without waiting for JavaScript. Visible breadcrumbs are mirrored as
 * BreadcrumbList structured data from the same source.
 */
export default function PageHero({ photos, title, lede, crumbs, children }: PageHeroProps) {
  const trail: Crumb[] = [{ name: "Home", path: "/" }, ...crumbs];

  return (
    <section className="relative isolate flex min-h-[70svh] items-end overflow-hidden bg-ink text-white md:min-h-[76svh]">
      <GlobeBackdrop photos={photos} />

      {/* Legibility scrims: a floor gradient for the text, a side wash for wide screens */}
      <div aria-hidden className="absolute inset-0 bg-ink/45" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />
      <div aria-hidden className="absolute -bottom-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.3),transparent_65%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-36 sm:px-6 md:pb-20">
        <nav aria-label="Breadcrumb" className="rise mb-8" style={{ "--d": "40ms" } as React.CSSProperties}>
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
            {trail.map((c, i) => {
              const last = i === trail.length - 1;
              return (
                <li key={c.path} className="flex items-center gap-1.5">
                  {last ? (
                    <span aria-current="page" className="text-white/90">{c.name}</span>
                  ) : (
                    <>
                      <Link href={c.path} className="transition-colors hover:text-white">{c.name}</Link>
                      <ChevronRight size={14} aria-hidden className="text-white/35" />
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <h1
          className="rise max-w-4xl text-4xl font-bold leading-[1.04] sm:text-6xl lg:text-7xl"
          style={{ "--d": "140ms" } as React.CSSProperties}
        >
          {title}
        </h1>
        <p
          className="rise mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg md:text-xl"
          style={{ "--d": "220ms" } as React.CSSProperties}
        >
          {lede}
        </p>
        {children && (
          <div className="rise mt-9" style={{ "--d": "300ms" } as React.CSSProperties}>
            {children}
          </div>
        )}
      </div>

      <JsonLd data={breadcrumbSchema(trail)} />
    </section>
  );
}
