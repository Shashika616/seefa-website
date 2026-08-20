"use client";
import { memo, useEffect, useRef, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import {
  Users, ShoppingCart, UtensilsCrossed, Wrench, Wallet, ShoppingBag, Boxes,
  GraduationCap, Warehouse, Plane, BookOpen, Banknote, ArrowUpRight, Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SOLUTIONS, SOLUTION_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Solution, SolutionCategory } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  users: Users, cart: ShoppingCart, restaurant: UtensilsCrossed, wrench: Wrench,
  wallet: Wallet, bag: ShoppingBag, boxes: Boxes, graduation: GraduationCap,
  warehouse: Warehouse, plane: Plane, book: BookOpen, banknote: Banknote,
};

const CATEGORY_STYLES: Record<SolutionCategory, { chip: string; iconBg: string; glow: string }> = {
  "ERP & Finance": { chip: "bg-brand-purple/10 text-brand-purple", iconBg: "from-brand-purple to-brand-purple-light", glow: "rgba(124,58,237,0.12)" },
  "Retail & POS": { chip: "bg-brand-blue/10 text-brand-blue", iconBg: "from-brand-blue to-cyan-400", glow: "rgba(14,165,233,0.12)" },
  "HR & Payroll": { chip: "bg-brand-green/10 text-brand-green", iconBg: "from-brand-green to-emerald-400", glow: "rgba(16,185,129,0.12)" },
  Industry: { chip: "bg-brand-orange/10 text-brand-orange", iconBg: "from-brand-orange to-amber-400", glow: "rgba(249,115,22,0.12)" },
};

/* ---------- Real card: cheap staggered fade-in, no layout animation ---------- */
const SolutionCard = memo(function SolutionCard({ solution, index }: { solution: Solution; index: number }) {
  const Icon = iconMap[solution.icon];
  const style = CATEGORY_STYLES[solution.category];
  const featured = solution.badge === "FEATURED";

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut", delay: Math.min(index * 0.04, 0.4) }}
      className={cn(
        "group relative bg-white rounded-2xl border border-slate-900/5 p-6 flex flex-col gap-4 shadow-sm",
        featured && "sm:col-span-2"
      )}
    >
      {/* Hover shadow via opacity crossfade (no repaint-heavy shadow transitions) */}
      <div aria-hidden className="absolute inset-0 rounded-2xl shadow-xl shadow-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div aria-hidden className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at top right, ${style.glow}, transparent 60%)` }} />
      </div>

      <div className="relative z-10 flex items-start justify-between gap-2">
        <div className={cn("rounded-xl bg-gradient-to-br flex items-center justify-center", style.iconBg, featured ? "p-4" : "p-3")}>
          <Icon size={featured ? 26 : 22} className="text-white" />
        </div>
        <div className="flex items-center gap-2">
          {solution.badge === "NEW" && (
            <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-green/10 text-brand-green px-2 py-1 rounded-full">New</span>
          )}
          {solution.badge === "FEATURED" && (
            <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-orange/10 text-brand-orange px-2 py-1 rounded-full flex items-center gap-1">
              <Sparkles size={10} /> Featured
            </span>
          )}
          <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full ${style.chip}`}>
            {solution.category}
          </span>
        </div>
      </div>

      <div className="relative z-10 flex-1">
        <h3 className="text-lg font-bold mb-1.5">{solution.title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{solution.description}</p>
      </div>

      {featured && solution.modules && (
        <ul className="relative z-10 flex flex-wrap gap-2">
          {solution.modules.map((m: string) => (
            <li key={m} className="text-xs text-slate-600 bg-slate-900/5 px-2.5 py-1 rounded-full">{m}</li>
          ))}
        </ul>
      )}

      <div className="relative z-10 mt-auto">
        <a
          href="#contact"
          className="group/btn inline-flex items-center gap-1.5 self-start px-4 py-2 rounded-full border border-slate-900/15 bg-white text-sm font-semibold text-slate-700 hover:bg-ink hover:text-white hover:border-ink focus:outline-none focus:ring-2 focus:ring-brand-purple transition-colors"
          aria-label={`Request ${solution.title}`}
        >
          Request solution
          <ArrowUpRight size={14} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
        </a>
      </div>
    </motion.article>
  );
});

/* ---------- Skeleton: mirrors the real card's shape so the swap is seamless ---------- */
const SkeletonCard = memo(function SkeletonCard({ wide }: { wide?: boolean }) {
  return (
    <div
      aria-hidden
      className={cn("relative bg-white rounded-2xl border border-slate-900/5 p-6 flex flex-col gap-4", wide && "sm:col-span-2")}
    >
      <div className="flex items-start justify-between">
        <div className="skeleton h-11 w-11 rounded-xl" />
        <div className="flex gap-2">
          <div className="skeleton h-5 w-16 rounded-full" />
          <div className="skeleton h-5 w-20 rounded-full" />
        </div>
      </div>
      <div className="flex-1 space-y-2.5">
        <div className="skeleton h-5 w-3/4" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-2/3" />
      </div>
      {wide && (
        <div className="flex flex-wrap gap-2">
          <div className="skeleton h-6 w-20 rounded-full" />
          <div className="skeleton h-6 w-24 rounded-full" />
          <div className="skeleton h-6 w-16 rounded-full" />
        </div>
      )}
      <div className="skeleton h-9 w-36 rounded-full" />
    </div>
  );
});

/* ---------- Section ---------- */
const Solutions = memo(function Solutions() {
  const [active, setActive] = useState<"All" | SolutionCategory>("All");
  const [ready, setReady] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filtered = active === "All" ? SOLUTIONS : SOLUTIONS.filter((s: Solution) => s.category === active);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const handleFilter = (cat: "All" | SolutionCategory) => {
    if (cat === active) return;
    setActive(cat);          // chip updates instantly — feedback while skeletons show
    setReady(false);         // swap to skeletons immediately
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setReady(true), 450); // then reveal real cards
  };

  return (
    <MotionConfig reducedMotion="user">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">Our Solutions</p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
              One company. <span className="text-gradient">Complete business solutions</span>.
            </h2>
            <p className="text-slate-600">
              Ready-made systems running real businesses today. Pick a ready-made solution or ask us to build yours.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter solutions by category">
            {(["All", ...SOLUTION_CATEGORIES] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                role="tab"
                aria-selected={active === cat}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple",
                  active === cat
                    ? "bg-ink text-white"
                    : "bg-white border border-slate-900/10 text-slate-600 hover:border-slate-900/25"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* No AnimatePresence, no layout projection — skeletons + staggered fade only */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" aria-busy={!ready}>
            {!ready
              ? filtered.map((s: Solution, i: number) => (
                  <SkeletonCard key={`sk-${s.id}`} wide={s.badge === "FEATURED"} />
                ))
              : filtered.map((s: Solution, i: number) => (
                  <SolutionCard key={s.id} solution={s} index={i} />
                ))}

            <a
              href="#contact"
              className="rounded-2xl border-2 border-dashed border-slate-900/15 p-6 flex flex-col items-start justify-center gap-3 text-slate-500 hover:border-brand-purple hover:text-ink transition-colors"
            >
              <Sparkles size={22} className="text-brand-purple" />
              <p className="font-semibold">Need something custom?</p>
              <p className="text-sm">We design and build to order, tell us your workflow.</p>
            </a>
          </div>
        </div>
    </MotionConfig>
  );
});

export default Solutions;