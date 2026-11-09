import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { PHOTOS, type Photo } from "@/lib/images";
import { cn } from "@/lib/utils";

interface Tile {
  href: string;
  title: string;
  body: string;
  photo: Photo;
  /** Grid placement on large screens. */
  span: string;
}

// Each tile reuses its destination page's header photo, so the click-through
// lands somewhere that already looks familiar.
const TILES: Tile[] = [
  {
    href: "/solutions",
    title: "Solutions",
    body: "ERP, POS, payroll, inventory and accounting systems, ready to run your business.",
    photo: PHOTOS.pageSolutions,
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    href: "/industries",
    title: "Industries",
    body: "Retail, manufacturing, restaurants, education, travel and more.",
    photo: PHOTOS.pageIndustries,
    span: "lg:col-span-2",
  },
  {
    href: "/services",
    title: "Services",
    body: "Custom web, mobile and enterprise development.",
    photo: PHOTOS.pageServices,
    span: "",
  },
  {
    href: "/about",
    title: "About us",
    body: "25+ years building software in Sri Lanka.",
    photo: PHOTOS.pageAbout,
    span: "",
  },
];

export default function ExploreGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title={<>Everything we do, <span className="text-gradient">in one place</span>.</>}
          lede="Start with a ready-made system, find the software built for your industry, or have us build something new."
        />

        <div className="grid auto-rows-[260px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[300px] lg:grid-cols-4 lg:gap-5">
          {TILES.map((t, i) => (
            <Reveal key={t.href} delay={i * 0.07} className={cn("h-full", t.span)}>
              <Link
                href={t.href}
                className="group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-3xl bg-ink p-6 text-white md:p-8"
              >
                <Image
                  src={t.photo.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                  placeholder="blur"
                  blurDataURL={t.photo.blur}
                  className="zoom-img -z-10 object-cover"
                />
                <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/95 via-ink/40 to-ink/5" />

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className={cn("font-bold", i === 0 ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl")}>{t.title}</h3>
                    <p className={cn("mt-2 max-w-md text-white/75", i === 0 ? "text-base md:text-lg" : "text-sm")}>{t.body}</p>
                  </div>
                  <span
                    aria-hidden
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20 transition-all duration-500 group-hover:bg-white group-hover:text-ink"
                  >
                    <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
