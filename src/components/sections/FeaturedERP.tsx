"use client";
import { memo, useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { ERP_MODULES, TECH_STACK, ERP_FEATURED_IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const FeaturedERP = memo(function FeaturedERP() {
  const [[index, direction], setState] = useState<[number, number]>([0, 1]);
  const prefersReducedMotion = useReducedMotion();

  const paginate = useCallback((dir: number) => {
    setState(([i]) => [(i + dir + ERP_FEATURED_IMAGES.length) % ERP_FEATURED_IMAGES.length, dir]);
  }, []);

  // Auto-advance every 5s (offset from hero's 6.5s so they don't sync)
  useEffect(() => {
    if (prefersReducedMotion) return;
    const t = setInterval(() => paginate(1), 5000);
    return () => clearInterval(t);
  }, [paginate, prefersReducedMotion, index]);

  return (
    <section aria-label="Featured ERP solution" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">Featured Solution</p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-5">
            Everything your business needs, <span className="text-gradient">connected</span>.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            Our complete ERP suite links sales, inventory, finance and production in one
            system — so every department works from the same live data.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {ERP_MODULES.map((m) => (
              <li key={m} className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 size={17} className="text-brand-green mt-0.5 shrink-0" /> {m}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 w-fit bg-brand-orange text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange">
              Request a Demo <ArrowUpRight size={16} />
            </a>
            <p className="text-xs text-slate-500">
              Built on modern, reliable technology: <span className="font-semibold text-slate-600">{TECH_STACK.join(" · ")}</span>
            </p>
          </div>
        </div>

        {/* Right: image slider */}
        <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100">
          <AnimatePresence initial={false}>
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <Image
                src={ERP_FEATURED_IMAGES[index]}
                alt={`SEEFALK ERP showcase ${index + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index === 0}
                className="object-cover"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.src !== ERP_FEATURED_IMAGES[0]) {
                    img.src = ERP_FEATURED_IMAGES[0];
                  }
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Subtle bottom gradient for dot readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent pointer-events-none" />

          {/* Dot indicators */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {ERP_FEATURED_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setState([i, i > index ? 1 : -1])}
                aria-label={`View slide ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-8 bg-white" : "w-1.5 bg-white/60 hover:bg-white/80"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default FeaturedERP;