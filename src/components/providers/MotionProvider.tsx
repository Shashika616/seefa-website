"use client";
import { LazyMotion, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Animation features stream in after the initial bundle instead of inside it,
// so pages become interactive sooner. Components use `m.*`, not `motion.*`.
const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

/**
 * Site-wide motion defaults. reducedMotion="user" makes every Framer animation
 * honour the visitor's OS setting without per-component checks. The default
 * transition is a soft, slightly overdamped spring, so motion eases in and
 * settles slowly rather than snapping or bouncing. `strict` makes any stray `motion.*` throw in development, so the
 * full bundle can't be pulled back in by accident.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig
        reducedMotion="user"
        transition={{ type: "spring", stiffness: 140, damping: 26, mass: 1 }}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
