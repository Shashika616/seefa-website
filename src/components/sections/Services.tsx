"use client";
import { memo, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Globe, Smartphone, Lightbulb } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import type { Service } from "@/types";

const iconMap = { code: Code2, globe: Globe, smartphone: Smartphone, lightbulb: Lightbulb };

type CardRef = { current: HTMLDivElement | null };

interface ServiceCardProps {
  service: Service;
  index: number;
  isLast: boolean;
  isMobile: boolean;
  nextRef: CardRef;
  setRef: (el: HTMLDivElement | null) => void;
}

const ServiceCard = memo(function ServiceCard({
  service, index, isLast, isMobile, nextRef, setRef,
}: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  const { scrollYProgress } = useScroll({
    target: nextRef,
    offset: ["start end", "start start"],
  });
  const opacity = useTransform(scrollYProgress, [0.15, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.15, 0.75], [1, isMobile ? 0.97 : 0.92]);

  return (
    <div ref={setRef} className="h-dvh sticky top-0 flex items-center justify-center px-4 sm:px-6">
      <motion.div
        style={isLast ? undefined : { opacity, scale }}
        className="w-full max-w-5xl h-[50dvh] sm:h-[58dvh] bg-white rounded-2xl sm:rounded-3xl border border-slate-900/5 p-6 sm:p-8 md:p-16 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-slate-900/10 gpu"
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ backgroundImage: `radial-gradient(circle at top right, ${service.glow}, transparent 60%)` }}
        />

        <div className="flex items-start justify-between relative z-10">
          <div className="flex items-center gap-3" />
          <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color}`}>
            <Icon size={24} className="text-white sm:w-8 sm:h-8" />
          </div>
        </div>

        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-4 leading-tight">
            {service.title}
          </h2>
          <h3 className={`text-lg sm:text-xl md:text-2xl font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4 sm:mb-6`}>
            {service.subtitle}
          </h3>
          <p className="text-sm sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="relative z-10 flex justify-between items-end">
          <button className="flex items-center gap-2 text-slate-500 hover:text-ink transition-colors font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-brand-purple rounded">
            Learn more <span aria-hidden>→</span>
          </button>
          <span className="text-xs sm:text-sm text-slate-400 hidden md:block">
            Built with modern tech stacks
          </span>
        </div>
      </motion.div>
    </div>
  );
});

const Services = memo(function Services() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const refs = useMemo<CardRef[]>(() => SERVICES.map(() => ({ current: null })), []);

  return (
    <section aria-label="Our services">
      {/* Section intro — reframed as custom-development capability */}
      <div
        id="services"
        className="pt-24 lg:pt-28 pb-8 md:pb-10 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">
            Custom Development
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Need something <span className="text-gradient">beyond off-the-shelf</span>?
          </h2>
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed">
            The same team behind our products designs and builds custom web, mobile and
            enterprise software tailored to the way you work.
          </p>
        </div>
      </div>

      {/* Sticky service cards */}
      {SERVICES.map((s: Service, i: number) => (
        <ServiceCard
          key={s.id}
          service={s}
          index={i}
          isLast={i === SERVICES.length - 1}
          isMobile={isMobile}
          nextRef={refs[Math.min(i + 1, SERVICES.length - 1)]}
          setRef={(el) => { refs[i].current = el; }}
        />
      ))}
      <div className="h-[20vh] sm:h-[30vh]" />
    </section>
  );
});

export default Services;