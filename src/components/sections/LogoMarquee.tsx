import { TECH_STACK } from "@/lib/constants";

/**
 * Infinite tech-stack ticker as a pure CSS animation. The previous Framer
 * version ran a JavaScript loop every frame for as long as the page was open;
 * this runs on the compositor with no script at all, and pauses on hover.
 *
 * The list is rendered twice and translated by exactly half its width, so the
 * loop is seamless. The duplicate is hidden from assistive technology.
 */
export default function LogoMarquee() {
  return (
    <section aria-label="Technologies we work with" className="marquee relative overflow-hidden border-y border-slate-900/5 bg-white/60 py-14">
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0" aria-hidden={copy === 1 || undefined}>
            {TECH_STACK.map((t) => (
              <li
                key={t}
                className="mr-12 whitespace-nowrap font-display text-lg font-semibold text-ink/20 transition-colors duration-300 hover:text-ink/60 md:mr-20 md:text-2xl"
              >
                {t}
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Edge fades */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
    </section>
  );
}
