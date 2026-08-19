"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { PRODUCT_CHIPS } from "@/lib/constants";

const Hero = memo(function Hero() {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
      <div aria-hidden className="absolute -top-[20%] -left-[15%] w-[50rem] h-[50rem] gpu bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.16),transparent_60%)]" />
      <div aria-hidden className="absolute -top-[10%] -right-[15%] w-[45rem] h-[45rem] gpu bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.14),transparent_60%)]" />
      <div aria-hidden className="absolute -bottom-[20%] -left-[10%] w-[40rem] h-[40rem] gpu bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_60%)]" />
      <div aria-hidden className="absolute -bottom-[15%] -right-[10%] w-[40rem] h-[40rem] gpu bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_60%)]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05]"
        >
          Business software built around <span className="text-gradient">your business</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8"
        >
          Powerful ERP, POS, payroll, inventory and accounting plus industry-specific
          systems for retail, restaurants, workshops, travel and education.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {PRODUCT_CHIPS.map((chip) => (
            <span key={chip} className="glass px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-slate-700">
              {chip}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <a href="#solutions" className="bg-ink text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-ink">
            Explore Our Solutions
          </a>
          <a href="#contact" className="glass text-ink font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple">
            Request a Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
});

export default Hero;