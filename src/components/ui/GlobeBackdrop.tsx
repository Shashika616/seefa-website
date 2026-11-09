"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import GlobeCarousel from "@/components/ui/GlobeCarousel";
import type { Photo } from "@/lib/images";

/**
 * The hero globe carousel plus an off-screen pause: once the hero scrolls out
 * of view the globe stops turning, so a page left open costs nothing.
 */
export default function GlobeBackdrop({ photos }: { photos: Photo[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "120px 0px" });

  return (
    <div ref={ref} className="fade-in absolute inset-0" style={{ "--d": "60ms" } as React.CSSProperties}>
      <GlobeCarousel photos={photos} paused={!inView} />
    </div>
  );
}
