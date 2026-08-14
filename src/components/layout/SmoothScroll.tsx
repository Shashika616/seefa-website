"use client";
import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    // Native scroll is best on touch devices & for reduced-motion users
    if (prefersReducedMotion || isMobile) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [prefersReducedMotion, isMobile]);

  return <>{children}</>;
}