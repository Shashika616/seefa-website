import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  ShoppingCart, Factory, UtensilsCrossed, GraduationCap, Wrench, Plane, Truck, Users, type LucideIcon,
} from "lucide-react";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Reveal from "@/components/ui/Reveal";
import { INDUSTRIES, industryTopic } from "@/lib/constants";
import { cn, slugify } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  cart: ShoppingCart, factory: Factory, restaurant: UtensilsCrossed, graduation: GraduationCap,
  wrench: Wrench, plane: Plane, truck: Truck, users: Users,
};

/**
 * One editorial row per industry, image and copy alternating sides. Each row
 * carries an anchor id so homepage cards can deep-link straight to it.
 */
export default function Industries() {
  return (
    <section aria-label="Industries we serve" className="py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-4 sm:px-6 md:gap-32">
        {INDUSTRIES.map((ind, i) => {
          const Icon = iconMap[ind.icon];
          const flip = i % 2 === 1;
          return (
            <article
              key={ind.id}
              id={slugify(ind.name)}
              className="grid scroll-mt-28 items-center gap-10 md:grid-cols-2 md:gap-16"
            >
              <Reveal className={cn("relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-200 shadow-2xl shadow-slate-900/10", flip && "md:order-2")}>
                <ParallaxImage photo={ind.photo} strength={0.16} sizes="(min-width: 768px) 50vw, 100vw" />
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple to-brand-blue text-white shadow-lg shadow-brand-purple/25">
                  <Icon size={22} />
                </div>
                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{ind.name}</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{ind.blurb}</p>

                <p className="mt-5 text-sm font-medium text-slate-700">
                  <span className="sr-only">Modules: </span>
                  {ind.items.join(" · ")}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link
                    href={`/contact?topic=${encodeURIComponent(industryTopic(ind.name))}#enquiry`}
                    className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg hover:shadow-slate-900/20"
                  >
                    Talk to us about {ind.name.toLowerCase()}
                    <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  <Link href="/solutions" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-ink">
                    See solutions
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </Reveal>
            </article>
          );
        })}
      </div>
    </section>
  );
}
