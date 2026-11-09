import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white/60 border-y border-slate-900/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Trusted by the people who <span className="text-gradient">run on us</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.role}
              className="bg-white rounded-2xl border border-slate-900/5 p-8 shadow-sm hover:shadow-lg hover:shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} className="text-brand-orange fill-brand-orange" />
                  ))}
                </div>
              </div>
              <blockquote className="text-slate-700 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-slate-900/5">
                <div className="font-bold text-sm">{t.role}</div>
                <div className="text-xs text-slate-500 mt-0.5">{t.location}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}