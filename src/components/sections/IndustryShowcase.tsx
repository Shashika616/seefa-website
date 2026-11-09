"use client";
import { useEffect, useRef, type FocusEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";
import { slugify } from "@/lib/utils";

/** When the rail pins and slides. Must match the .rail-* rules in globals.css. */
const PINNED_QUERY = "(min-width: 768px) and (hover: hover) and (prefers-reduced-motion: no-preference)";
const isPinned = () =>
  typeof CSS !== "undefined" &&
  CSS.supports("animation-timeline: view()") &&
  window.matchMedia(PINNED_QUERY).matches;

/**
 * Industries as a horizontal rail of photo cards.
 *
 * On desktop the section pins while vertical scroll slides the rail sideways.
 * The pinning, the slide and the progress bar are native CSS scroll-driven
 * animations (.rail-* in globals.css), so they run on the compositor with no
 * per-frame JavaScript. Script only measures how far the rail must travel
 * (--rail-distance), once and on resize. Touch screens, reduced-motion users
 * and browsers without scroll-driven animations get a native swipe rail.
 */
export default function IndustryShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    const measure = () => {
      const distance = Math.max(0, track.scrollWidth - window.innerWidth);
      section.style.setProperty("--rail-distance", `${distance}px`);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // A card tabbed to while slid off-screen would stay hidden; scroll the page
  // to the point where the rail brings it into view.
  const revealOnFocus = (e: FocusEvent<HTMLElement>) => {
    const section = sectionRef.current;
    if (!section || !isPinned()) return;
    const distance = parseFloat(getComputedStyle(section).getPropertyValue("--rail-distance")) || 0;
    if (distance === 0) return;
    const card = e.currentTarget;
    const centred = card.offsetLeft - (window.innerWidth - card.offsetWidth) / 2;
    const p = Math.min(1, Math.max(0, centred / distance));
    const top = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + p * distance, behavior: "auto" });
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="industries-heading"
      className="rail-frame relative bg-ink text-white"
    >
      <div className="rail-pin py-20 md:py-28">
        {/* Soft brand light behind the rail */}
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/4 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.22),transparent_65%)]" />

        <div className="relative mx-auto mb-10 flex w-full max-w-6xl items-end justify-between gap-6 px-4 sm:px-6 md:mb-12">
          <div className="max-w-2xl">
            <h2 id="industries-heading" className="text-3xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              If your business runs on it, <span className="text-gradient-light">we&apos;ve built for it</span>.
            </h2>
          </div>
          <Link
            href="/industries"
            className="group hidden shrink-0 items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition-colors duration-500 hover:bg-white hover:text-ink md:inline-flex"
          >
            All industries
            <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div ref={trackRef} className="rail-track no-scrollbar relative flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:px-6 md:gap-6">
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.id}
              href={`/industries#${slugify(ind.name)}`}
              onFocus={revealOnFocus}
              className="group relative isolate flex h-[440px] w-[78vw] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-3xl p-6 sm:w-[340px] md:h-[min(520px,62vh)] md:w-[380px] md:p-7"
            >
              <Image
                src={ind.photo.src}
                alt=""
                fill
                sizes="(min-width: 768px) 380px, 78vw"
                placeholder="blur"
                blurDataURL={ind.photo.blur}
                className="zoom-img -z-10 object-cover"
              />
              <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/45 to-transparent" />

              <h3 className="text-2xl font-bold md:text-3xl">{ind.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{ind.blurb}</p>
              <p className="mt-4 text-xs font-medium text-white/60">
                <span className="sr-only">Modules: </span>
                {ind.items.join(" · ")}
              </p>
              <span aria-hidden className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100 md:right-7 md:top-7">
                <ArrowUpRight size={17} />
              </span>
            </Link>
          ))}

          <Link
            href="/industries"
            onFocus={revealOnFocus}
            className="group flex h-[440px] w-[78vw] shrink-0 snap-start flex-col items-start justify-end rounded-3xl border border-white/15 p-7 transition-colors duration-500 hover:border-white/40 hover:bg-white/5 sm:w-[340px] md:h-[min(520px,62vh)] md:w-[320px]"
          >
            <span className="mb-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink">
              <ArrowRight size={20} className="transition-transform duration-500 group-hover:translate-x-0.5" />
            </span>
            <span className="text-2xl font-bold">See every industry</span>
            <span className="mt-2 text-sm text-white/65">And the modules built for each one.</span>
          </Link>
        </div>

        <div aria-hidden className="rail-progress mx-auto mt-10 h-px w-full max-w-6xl px-4 sm:px-6">
          <div className="h-px w-full bg-white/10">
            <div className="rail-progress-bar h-px origin-left bg-gradient-to-r from-brand-purple-light to-sky-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
