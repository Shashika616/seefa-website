import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import GlobeBackdrop from "@/components/ui/GlobeBackdrop";
import { GLOBE_PHOTOS, PRODUCT_CHIPS } from "@/lib/constants";

/** Stagger offset for a CSS .rise entrance. */
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/**
 * Cinematic hero: a slowly turning globe of technical photography behind one
 * confident headline and two actions.
 *
 * No JavaScript of its own. The entrance is CSS (.rise), the globe is CSS 3D,
 * and the copy's fade as you scroll away is a native scroll-driven animation
 * (.hero-copy), so all of it runs on the compositor and the headline paints
 * before any script loads.
 */
export default function Hero() {
  return (
    <section className="hero-frame relative isolate flex h-svh min-h-[640px] items-end overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 -z-10">
        <GlobeBackdrop photos={GLOBE_PHOTOS.home} />
      </div>

      {/* Scrims: keep the headline legible while letting the globe glow through */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/45" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />
      <div aria-hidden className="absolute -bottom-40 -left-40 -z-10 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.35),transparent_65%)]" />

      <div className="relative w-full">
        <div className="hero-copy mx-auto max-w-6xl px-4 pb-10 pt-32 sm:px-6 md:pb-14">
          <h1 className="max-w-5xl text-[clamp(2.75rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tight">
            <span className="rise block" style={delay(100)}>Business software</span>
            <span className="rise block" style={delay(220)}>
              built around <span className="text-gradient-light">your business.</span>
            </span>
          </h1>

          <p className="rise mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg md:text-xl" style={delay(360)}>
            ERP, POS, payroll, inventory and accounting, developed and supported in Sri Lanka for over 25 years.
          </p>

          <div className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4" style={delay(480)}>
            <Link
              href="/solutions"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/40"
            >
              Explore our solutions
              <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact?topic=Product%20demo#enquiry"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition-colors duration-500 hover:border-white/60 hover:bg-white/10"
            >
              Book a demo
              <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Product links along the foot of the hero */}
        <div className="rise border-t border-white/10" style={delay(620)}>
          <nav aria-label="Products" className="no-scrollbar mx-auto flex max-w-6xl gap-x-6 overflow-x-auto px-4 py-5 sm:px-6 md:gap-x-9">
            {PRODUCT_CHIPS.map((chip) => (
              <Link
                key={chip}
                href="/solutions"
                className="shrink-0 text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                {chip}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
