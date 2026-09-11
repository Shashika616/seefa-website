"use client";
import { memo, useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, MotionConfig, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { HERO_SLIDES, PRODUCT_CHIPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6500;

const Hero = memo(function Hero() {
  const [[index, direction], setState] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const paginate = useCallback((dir: number) => {
    setState(([i]) => [(i + dir + HERO_SLIDES.length) % HERO_SLIDES.length, dir]);
  }, []);

  const goTo = useCallback((next: number) => {
    setState(([i]) => [next, next > i ? 1 : -1]);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || paused) return;
    const t = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paginate, prefersReducedMotion, paused, index]);

  const slide = HERO_SLIDES[index];

  return (
    <MotionConfig reducedMotion="user">
    <section
      className="relative min-h-[92dvh] flex items-center overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Seefa highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
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
            fetchPriority={index === 0 ? "high" : "auto"}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16">
        <div
          className="max-w-2xl min-h-[280px] sm:min-h-[320px]"
          aria-live="polite"
          aria-atomic="true"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${index}`}
              initial={{ opacity: 0, x: direction * 40, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">
                <span className="sr-only">Slide {index + 1} of {HERO_SLIDES.length}: </span>
                {slide.tag}
              </p>
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
          <Link
            href="/solutions"
            className="bg-ink text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-black hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/15 transition-all duration-300 text-center"
          >
            Explore Our Solutions
          </Link>
          <Link
            href="/contact"
            className="glass text-ink font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white hover:-translate-y-0.5 transition-all duration-300 text-center"
          >
            Request a Demo
          </Link>
        </div>

        <ul className="flex flex-wrap gap-2 mb-10" aria-label="Product range">
          {PRODUCT_CHIPS.map((chip) => (
            <li
              key={chip}
              className="glass px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-slate-700"
            >
              {chip}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous slide"
            className="w-11 h-11 rounded-full glass text-slate-700 flex items-center justify-center hover:bg-white hover:text-ink transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next slide"
            className="w-11 h-11 rounded-full glass text-slate-700 flex items-center justify-center hover:bg-white hover:text-ink transition-colors"
          >
            <ChevronRight size={18} />
          </button>

          <button
            type="button"
            onClick={() => setPaused((v) => !v)}
            aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
            className="w-11 h-11 rounded-full glass text-slate-700 flex items-center justify-center hover:bg-white hover:text-ink transition-colors"
          >
            {paused ? <Play size={16} /> : <Pause size={16} />}
          </button>

          <div className="flex gap-2 ml-2">
            {HERO_SLIDES.map((s, i) => (
              <button
                type="button"
                key={s.tag}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}: ${s.tag}`}
                aria-current={i === index ? "true" : undefined}
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
    </MotionConfig>
  );
});

export default Hero;
