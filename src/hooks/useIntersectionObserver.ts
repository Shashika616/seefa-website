import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver<T extends HTMLElement>(
  options: { threshold?: number; rootMargin?: string; triggerOnce?: boolean } = {}
) {
  const { threshold = 0, rootMargin = "0px", triggerOnce = true } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && triggerOnce) observer.unobserve(el);
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isIntersecting };
}