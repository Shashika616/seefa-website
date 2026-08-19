import { STATS } from "@/lib/constants";

export default function TrustBar() {
  return (
    <section aria-label="Company track record" className="border-y border-slate-900/5 bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">{s.value}</div>
            <div className="text-xs sm:text-sm text-slate-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}