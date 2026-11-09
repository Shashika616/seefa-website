"use client";
import { memo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { SOLUTIONS, SOLUTION_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Solution, SolutionCategory } from "@/types";

const enquiryHref = (topic: string) => `/contact?topic=${encodeURIComponent(topic)}#enquiry`;

const SolutionCard = memo(function SolutionCard({ solution }: { solution: Solution }) {
  const featured = solution.badge === "FEATURED";

  return (
    <m.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ type: "spring", stiffness: 170, damping: 28 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-slate-900/5 bg-white shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-slate-900/10",
        featured && "sm:col-span-2 lg:grid lg:grid-cols-2"
      )}
    >
      <div className={cn("relative overflow-hidden", featured ? "aspect-[16/10] lg:aspect-auto lg:h-full" : "aspect-[16/10]")}>
        <Image
          src={solution.photo.src}
          alt={solution.photo.alt}
          fill
          sizes={featured ? "(min-width: 1024px) 33vw, (min-width: 640px) 100vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          placeholder="blur"
          blurDataURL={solution.photo.blur}
          className="zoom-img object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
      </div>

      <div className={cn("flex flex-1 flex-col p-6", featured && "lg:p-10")}>
        <h3 className={cn("font-bold", featured ? "text-2xl lg:text-3xl" : "text-lg")}>{solution.title}</h3>
        <p className={cn("mt-2 leading-relaxed text-slate-600", featured ? "text-base" : "text-sm")}>{solution.description}</p>

        {featured && solution.modules && (
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {solution.modules.map((m) => (
              <li key={m} className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-green" /> {m}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-6">
        <Link
          href={enquiryHref(solution.title)}
          className="group/btn inline-flex items-center gap-1.5 rounded-full border border-slate-900/15 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-ink hover:bg-ink hover:text-white"
          aria-label={`Enquire about ${solution.title}`}
        >
          Enquire about this
          <ArrowUpRight size={14} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
        </Link>
        </div>
      </div>
    </m.article>
  );
});

const Solutions = memo(function Solutions() {
  const [active, setActive] = useState<"All" | SolutionCategory>("All");
  const filtered = active === "All" ? SOLUTIONS : SOLUTIONS.filter((s) => s.category === active);

  return (
    <section aria-label="Solutions catalogue" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-slate-600">
            {SOLUTIONS.length} ready-made systems, each running real businesses today. Filter by area, or ask us to build yours.
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter solutions by category">
            {(["All", ...SOLUTION_CATEGORIES] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === cat ? "text-white" : "border border-slate-900/10 bg-white text-slate-600 hover:border-slate-900/25"
                )}
              >
                {active === cat && (
                  <m.span
                    layoutId="solution-filter"
                    className="absolute inset-0 -z-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {filtered.length} {filtered.length === 1 ? "solution" : "solutions"}
          {active === "All" ? "" : ` in ${active}`}
        </p>

        <m.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((s) => (
              <SolutionCard key={s.id} solution={s} />
            ))}
          </AnimatePresence>

          <m.div layout>
            <Link
              href={enquiryHref("Custom software")}
              className="flex h-full min-h-56 flex-col items-start justify-center gap-3 rounded-3xl border-2 border-dashed border-slate-900/15 p-6 text-slate-500 transition-colors hover:border-brand-purple hover:text-ink"
            >
              <Sparkles size={22} className="text-brand-purple" />
              <span className="font-semibold">Need something custom?</span>
              <span className="text-sm">We design and build to order. Tell us your workflow.</span>
            </Link>
          </m.div>
        </m.div>
      </div>
    </section>
  );
});

export default Solutions;
