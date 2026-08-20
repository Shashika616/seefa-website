"use client";
import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";

const LogoMarquee = memo(function LogoMarquee() {
  const prefersReducedMotion = useReducedMotion();
  // Three copies = seamless loop (third copy replaces first invisibly)
  const row = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <section aria-label="Technologies we work with" className="relative py-14 border-y border-slate-900/5 overflow-hidden bg-white/60">
      <motion.div
        className="flex w-max"
        animate={prefersReducedMotion ? undefined : { x: ["0%", "-33.333%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {row.map((t: string, i: number) => (
          <span
            key={i}
            className="mr-12 md:mr-20 text-lg md:text-2xl font-display font-semibold text-ink/20 whitespace-nowrap"
          >
            {t}
          </span>
        ))}
      </motion.div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
    </section>
  );
});

export default LogoMarquee;