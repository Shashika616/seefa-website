import { ShoppingCart, Factory, UtensilsCrossed, GraduationCap, Wrench, Plane, Truck, Users, type LucideIcon } from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  cart: ShoppingCart, factory: Factory, restaurant: UtensilsCrossed, graduation: GraduationCap,
  wrench: Wrench, plane: Plane, truck: Truck, users: Users,
};

export default function Industries() {
  return (
    <section id="industries" className="relative py-20 md:py-28 bg-white/60 border-y border-slate-900/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">Industries</p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Solutions for <span className="text-gradient">your industry</span>.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">If your business runs on it, we&apos;ve built software for it.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((ind) => {
            const Icon = iconMap[ind.icon];
            return (
              <div key={ind.id} className="bg-white rounded-2xl border border-slate-900/5 p-5 shadow-sm hover:shadow-lg hover:shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center mb-4">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold mb-3">{ind.name}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {ind.items.map((item) => (
                    <span key={item} className="text-[11px] font-medium text-slate-600 bg-slate-900/5 px-2 py-1 rounded-full">{item}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}