import { STATS } from "@/lib/constants";
import CountUp from "@/components/ui/CountUp";

export default function TrustBar() {
  return (
    <section aria-label="Company track record" className="border-y border-slate-900/5 bg-white/60">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-4 py-12 sm:px-6 md:grid-cols-4 md:divide-x md:divide-slate-900/5 md:py-14">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col-reverse items-center text-center md:px-6">
            {/* dt after dd visually, but first in source so the label reads before the number */}
            <dt className="mt-2 text-xs text-slate-600 sm:text-sm">{s.label}</dt>
            <dd>
              <CountUp value={s.value} className="font-display text-4xl font-bold tabular-nums text-gradient sm:text-5xl" />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
