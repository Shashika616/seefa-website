import { PROCESS } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

/**
 * The engagement process as a vertical timeline whose line draws in as the
 * visitor scrolls through it. The draw is a native scroll-driven animation
 * (.process-line in globals.css), so there is no JavaScript per frame; where
 * unsupported, or for reduced motion, the full line simply shows.
 */
export default function ProcessSteps() {
  return (
    <div className="process-frame relative ml-5 md:ml-6">
      <div aria-hidden className="absolute bottom-2 left-0 top-2 w-px bg-slate-900/10" />
      <div aria-hidden className="process-line absolute bottom-2 left-0 top-2 w-px bg-gradient-to-b from-brand-purple to-brand-blue" />

      <ol className="relative">
        {PROCESS.map((p, i) => (
          <li key={p.step} className="relative pb-12 pl-10 last:pb-0 md:pl-14">
            <span
              aria-hidden
              className="absolute -left-5 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/10 bg-white font-mono text-xs font-semibold text-brand-purple shadow-sm md:-left-6 md:h-12 md:w-12"
            >
              {p.step}
            </span>
            <Reveal delay={i * 0.08} y={16}>
              <h3 className="pt-1.5 text-xl font-bold md:pt-2.5 md:text-2xl">{p.title}</h3>
              <p className="mt-2 max-w-md leading-relaxed text-slate-600">{p.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
