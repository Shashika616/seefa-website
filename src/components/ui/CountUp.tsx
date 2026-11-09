"use client";
import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Counts a stat like "25+" up from zero when it scrolls into view.
 *
 * The final value is server-rendered, so crawlers and no-JS visitors always
 * see the real number. Animation is skipped when the element is already on
 * screen at load (it would flash the real value, then zero, then count), for
 * years such as "1999" (counting to a year reads oddly), and for
 * reduced-motion users. Updates write textContent directly, so counting
 * does not re-render React.
 */
export default function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = usePrefersReducedMotion();
  const startedVisible = useRef<boolean | null>(null);

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : NaN;
  const suffix = match ? match[2] : "";
  const animatable = Number.isFinite(target) && target < 1000;

  // Record, once, whether the stat was already visible when the page loaded.
  useEffect(() => {
    const el = ref.current;
    if (!el || startedVisible.current !== null) return;
    const rect = el.getBoundingClientRect();
    startedVisible.current = rect.top < window.innerHeight && rect.bottom > 0;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView || !animatable || reduce || startedVisible.current) return;
    const controls = animate(0, target, {
      duration: 2.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (n) => {
        el.textContent = `${Math.round(n)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, animatable, reduce, target, suffix]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
