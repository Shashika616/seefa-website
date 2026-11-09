import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  /** For sections on dark backgrounds. */
  invert?: boolean;
  className?: string;
}

/** The h2 + lede pattern every section opens with, in one place. */
export default function SectionHeading({ title, lede, align = "left", invert, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-12 md:mb-16", align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      <h2 className={cn("text-3xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl", invert && "text-white")}>{title}</h2>
      {lede && (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", invert ? "text-white/70" : "text-slate-600")}>
          {lede}
        </p>
      )}
    </Reveal>
  );
}
