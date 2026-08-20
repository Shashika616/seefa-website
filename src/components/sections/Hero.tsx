"use client";
import { memo, useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES, PRODUCT_CHIPS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { HeroSlide } from "@/types";

const Hero = memo(function Hero() {
  const [[index, direction], setState] = useState<[number, number]>([0, 1]);
  const prefersReducedMotion = useReducedMotion();

  const paginate = useCallback((dir: number) => {
    setState(([i]) => [(i + dir + HERO_SLIDES.length) % HERO_SLIDES.length, dir]);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const t = setInterval(() => paginate(1), 6500);
    return () => clearInterval(t);
  }, [paginate, prefersReducedMotion, index]);

  const slide = HERO_SLIDES[index];

  return (
    <section className="relative min-h-[92dvh] flex items-center overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16">
        <div className="max-w-2xl min-h-[280px] sm:min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${index}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
                {slide.title} <span className="text-gradient">{slide.highlight}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-xl">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 mb-8">
          <Link href="/solutions" className="bg-ink text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-black transition-colors text-center focus:outline-none focus:ring-2 focus:ring-ink">
            Explore Our Solutions
          </Link>
          <Link href="/contact" className="glass text-ink font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white transition-colors text-center focus:outline-none focus:ring-2 focus:ring-brand-purple">
            Request a Demo
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {PRODUCT_CHIPS.map((chip) => (
            <span key={chip} className="glass px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-slate-700">
              {chip}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous slide"
            className="w-11 h-11 rounded-full glass text-slate-700 flex items-center justify-center hover:bg-white hover:text-ink transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => paginate(1)}
            aria-label="Next slide"
            className="w-11 h-11 rounded-full glass text-slate-700 flex items-center justify-center hover:bg-white hover:text-ink transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple"
          >
            <ChevronRight size={18} />
          </button>
          <div className="flex gap-2 ml-2">
            {HERO_SLIDES.map((_: HeroSlide, i: number) => (
              <button
                key={i}
                onClick={() => setState([i, i > index ? 1 : -1])}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === index ? "w-8 bg-ink" : "w-2 bg-slate-900/20 hover:bg-slate-900/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;