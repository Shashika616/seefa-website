import { TECH } from "@/lib/constants";

export default function LogoMarquee() {
  const row = [...TECH, ...TECH];
  return (
    <section aria-label="Technologies we work with" className="relative py-14 border-y border-slate-900/5 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {row.map((t, i) => (
          <span key={i} className="mr-12 md:mr-20 text-lg md:text-2xl font-display font-semibold text-ink/20 whitespace-nowrap">
            {t}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
    </section>
  );
}