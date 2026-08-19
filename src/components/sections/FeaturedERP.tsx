"use client";
import { memo } from "react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { ERP_MODULES, TECH_STACK } from "@/lib/constants";

const FeaturedERP = memo(function FeaturedERP() {
  return (
    <section aria-label="Featured ERP solution" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">Featured Solution</p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-5">
            Everything your business needs, <span className="text-gradient">connected</span>.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            Our complete ERP suite links sales, inventory, finance and production in one
            system so every department works from the same live data.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {ERP_MODULES.map((m) => (
              <li key={m} className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 size={17} className="text-brand-green mt-0.5 shrink-0" /> {m}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 w-fit bg-brand-orange text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-500 transition-colors">
              Request a Demo <ArrowUpRight size={16} />
            </a>
            <p className="text-xs text-slate-500">
              Built on modern, reliable technology: <span className="font-semibold text-slate-600">{TECH_STACK.join(" · ")}</span>
            </p>
          </div>
        </div>

        <div />
      </div>
    </section>
  );
});

export default FeaturedERP;
