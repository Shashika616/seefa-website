import { Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/ui/JsonLd";
import { faqSchema } from "@/lib/schema";
import type { Faq as FaqItem } from "@/types";

/**
 * Accordion built on native <details>: no JavaScript, keyboard accessible, and
 * every answer stays in the HTML while collapsed, so crawlers and AI answer
 * engines that skip JavaScript still read all of it. The FAQPage structured
 * data is generated from the same array, so the two cannot drift apart.
 */
export default function Faq({ faqs, title, lede }: { faqs: FaqItem[]; title?: React.ReactNode; lede?: string }) {
  return (
    <section aria-label="Frequently asked questions" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            title={title ?? <>Questions, <span className="text-gradient">answered</span>.</>}
            lede={lede ?? "The things businesses ask us most before they get in touch."}
            className="mb-0 md:mb-0"
          />
        </div>

        <div className="divide-y divide-slate-900/10 border-y border-slate-900/10">
          {faqs.map((f, i) => (
            <Reveal key={f.question} delay={Math.min(i * 0.04, 0.24)} y={12}>
              <details className="faq group py-1" name="faq">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-semibold text-ink transition-colors hover:text-brand-purple sm:text-lg [&::-webkit-details-marker]:hidden">
                  {f.question}
                  <span
                    aria-hidden
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-900/10 transition-all duration-300 group-open:rotate-45 group-open:border-brand-purple group-open:bg-brand-purple group-open:text-white"
                  >
                    <Plus size={16} />
                  </span>
                </summary>
                <p className="pb-6 pr-12 leading-relaxed text-slate-600">{f.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>

      <JsonLd data={faqSchema(faqs)} />
    </section>
  );
}
