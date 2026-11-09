import { useMediaQuery } from "@/hooks/useMediaQuery";

/**
 * Hydration-safe reduced-motion preference.
 *
 * Framer's useReducedMotion() reads the media query during render, which the
 * server cannot know, so using it to pick rendered values causes hydration
 * mismatches. This returns false for SSR and the hydration pass, then the real
 * preference right after, via useSyncExternalStore.
 *
 * Use it for scroll-linked motion values (parallax, horizontal scroll), which
 * MotionConfig's reducedMotion setting does not cover.
 */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
