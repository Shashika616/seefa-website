"use client";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before revealing, for staggering siblings. */
  delay?: number;
  /** Distance in px the content rises from. */
  y?: number;
}

/*
 * One IntersectionObserver for the whole page, shared by every Reveal, instead
 * of a JavaScript animation per element. When an element enters view it gets
 * data-in, and a CSS transition (opacity and transform, on the compositor)
 * does the rest. data-in is not a React-managed attribute, so a re-render can
 * never strip it and hide the content again.
 */
let observer: IntersectionObserver | null = null;
function observe(el: HTMLElement) {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        (entry.target as HTMLElement).dataset.in = "";
        observer?.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px" }
  );
  observer.observe(el);
  return () => observer?.unobserve(el);
}

/**
 * Fades and lifts content into place the first time it scrolls into view.
 *
 * Content only starts hidden when JavaScript is running (html.js), so without
 * JavaScript it is simply visible, and the text is in the server HTML either
 * way for crawlers and AI engines. Do not wrap above-the-fold headings in
 * this, since it delays their paint.
 */
export default function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => (ref.current ? observe(ref.current) : undefined), []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={{ "--rd": `${Math.round(delay * 1000)}ms`, "--ry": `${y}px` } as CSSProperties}
    >
      {children}
    </div>
  );
}
