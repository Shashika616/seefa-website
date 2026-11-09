import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessSteps from "@/components/sections/ProcessSteps";
import { PHOTOS } from "@/lib/images";
import { SITE } from "@/lib/site";
import { STATS, WHY_US } from "@/lib/constants";

/**
 * Plain, self-contained statements of fact. Search and AI answer engines quote
 * this kind of list directly, so each item must stand on its own.
 */
const FACTS = [
  { term: "Founded", detail: `${SITE.founded}, in Sri Lanka` },
  { term: "Headquarters", detail: `${SITE.address.street}, ${SITE.address.locality}` },
  { term: "Sectors served", detail: "Private and government organisations" },
  { term: "Products", detail: "ERP, POS, payroll with EPF/ETF, inventory and accounting software" },
  { term: "Services", detail: "Custom, web and mobile application development, and consultancy" },
  { term: "Support", detail: "Ongoing maintenance and long-term local support" },
];

export default function About() {
  return (
    <>
      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              A partner, not just a <span className="text-gradient">provider</span>.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              <p>
                <span className="font-semibold text-ink">{SITE.name}</span> has been one of Sri Lanka&apos;s
                leading IT solutions providers since {SITE.founded}, delivering quality software to private
                and government sectors alike.
              </p>
              <p>
                We empower businesses to achieve outstanding outcomes, developing and implementing innovative
                systems for ERP, retail, hospitality, education, logistics and more.
              </p>
              <p>Every solution is built around real business workflows and backed by long-term, local support.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/15 sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={PHOTOS.aboutTeam.src}
                alt={PHOTOS.aboutTeam.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                placeholder="blur"
                blurDataURL={PHOTOS.aboutTeam.blur}
                className="object-cover"
              />
              {/* Stat set inside the frame over a soft floor gradient, rather than a card
                  hanging off the corner half over the photo and half over the page. */}
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white sm:p-8">
                <p className="font-display text-5xl font-bold leading-none sm:text-6xl">{STATS[0].value}</p>
                <p className="mt-2 text-sm font-medium text-white/80 sm:text-base">{STATS[0].label}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* At a glance */}
      <section aria-labelledby="glance-heading" className="border-y border-slate-900/5 bg-white/60 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 id="glance-heading" className="mb-10 text-2xl font-bold sm:text-3xl">{SITE.name} at a glance</h2>
          </Reveal>
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {FACTS.map((f, i) => (
              <Reveal key={f.term} delay={i * 0.04} y={14} className="border-t border-slate-900/10 pt-5">
                <dt className="text-sm font-semibold text-slate-500">{f.term}</dt>
                <dd className="mt-2 text-base font-medium leading-relaxed text-ink">{f.detail}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              title={<>From first call to <span className="text-gradient">long-term support</span>.</>}
              lede="Every engagement follows the same four steps, whether we are fitting a ready-made system or building something new."
              className="mb-0 md:mb-0"
            />
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* Why us */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative isolate overflow-hidden rounded-3xl bg-ink px-6 py-14 text-white sm:px-12 md:py-20">
            <Image
              src={PHOTOS.aboutOffice.src}
              alt=""
              fill
              sizes="(min-width: 1152px) 1152px, 100vw"
              placeholder="blur"
              blurDataURL={PHOTOS.aboutOffice.blur}
              className="-z-10 object-cover opacity-30"
            />
            <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />

            <Reveal className="max-w-2xl">
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                Why businesses choose <span className="text-gradient-light">Seefa</span>
              </h2>
              <ul className="mt-8 space-y-4">
                {WHY_US.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/85">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
