"use client";
import { memo, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Check, Code2, Globe, Lightbulb, Smartphone } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { Service } from "@/types";

const iconMap = { code: Code2, globe: Globe, smartphone: Smartphone, lightbulb: Lightbulb };

type CardRef = { current: HTMLDivElement | null };

interface ServiceCardProps {
  service: Service;
  isLast: boolean;
  isMobile: boolean;
  nextRef: CardRef;
  setRef: (el: HTMLDivElement | null) => void;
}

/**
 * Each card pins in place, then recedes (fades and shrinks slightly) as the
 * next card slides up over it. Scroll-linked values flatten for reduced-motion
 * users, after hydration, so the server render is unaffected.
 */
const ServiceCard = memo(function ServiceCard({
  service, isLast, isMobile, nextRef, setRef,
}: ServiceCardProps) {
  const Icon = iconMap[service.icon];
  const reduce = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({ target: nextRef, offset: ["start end", "start start"] });
  const still = isLast || reduce;
  const opacity = useTransform(scrollYProgress, [0.2, 0.85], [1, still ? 1 : 0.35]);
  const scale = useTransform(scrollYProgress, [0.2, 0.85], [1, still ? 1 : isMobile ? 0.96 : 0.92]);

  return (
    <div ref={setRef} className="sticky top-0 flex h-svh items-center justify-center px-4 sm:px-6">
      <m.article
        style={{ opacity, scale }}
        className="gpu relative grid h-[78svh] w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-900/5 bg-white shadow-2xl shadow-slate-900/10 md:h-[70svh] md:grid-cols-[1.1fr_1fr]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: `radial-gradient(circle at top left, ${service.glow}, transparent 55%)` }}
        />

        <div className="relative z-10 flex flex-col justify-between gap-6 p-6 sm:p-10 md:p-14">
          <div className="flex items-center justify-between">
            <div className={`rounded-2xl bg-gradient-to-br p-3 sm:p-4 ${service.color}`}>
              <Icon size={24} className="text-white" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{service.title}</h2>
            <p className={`mt-2 bg-gradient-to-r bg-clip-text text-lg font-medium text-transparent sm:text-xl ${service.color}`}>
              {service.subtitle}
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">{service.description}</p>
            <ul className="mt-6 hidden gap-2.5 sm:grid">
              {service.points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${service.color}`}>
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={`/contact?topic=${encodeURIComponent(service.title)}#enquiry`}
            className="group inline-flex items-center gap-2 self-start rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg hover:shadow-slate-900/20"
          >
            Start a {service.title.toLowerCase().replace(/s$/, "")} project
            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="relative hidden overflow-hidden md:block">
          <Image
            src={service.photo.src}
            alt={service.photo.alt}
            fill
            sizes="(min-width: 768px) 45vw, 0px"
            placeholder="blur"
            blurDataURL={service.photo.blur}
            className="object-cover"
          />
        </div>
      </m.article>
    </div>
  );
});

const Services = memo(function Services() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const refs = useMemo<CardRef[]>(() => SERVICES.map(() => ({ current: null })), []);

  return (
    <section aria-label="Our services" className="pt-10 md:pt-16">
      {SERVICES.map((s, i) => (
        <ServiceCard
          key={s.id}
          service={s}
          isLast={i === SERVICES.length - 1}
          isMobile={isMobile}
          nextRef={refs[Math.min(i + 1, SERVICES.length - 1)]}
          setRef={(el) => { refs[i].current = el; }}
        />
      ))}
      <div className="h-[16vh]" />
    </section>
  );
});

export default Services;
