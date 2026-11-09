import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Suspense } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { GLOBE_PHOTOS } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import EnquiryForm from "@/components/sections/EnquiryForm";
import { SITE } from "@/lib/site";
import { ORG_ID, webPageSchema } from "@/lib/schema";

const TITLE = "Contact Us: Request a Demo";
const DESCRIPTION =
  "Contact Seefa Business Solutions in Kotte, Sri Lanka. Request a demo of our ERP, POS or payroll software, or discuss a custom software project.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/contact" });

const PHONES = [
  { href: "tel:+94773247216", label: "+94 (077) 324 7216" },
  { href: "tel:+94113042141", label: "+94 (011) 304 2141" },
];

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${SITE.name}, ${SITE.address.street}, ${SITE.address.locality}, Sri Lanka`
)}`;

/** Holds the form's footprint while it hydrates, so nothing shifts. */
function FormSkeleton() {
  return (
    <div aria-hidden className="rounded-3xl border border-slate-900/5 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-10">
      <div className="skeleton h-8 w-2/3" />
      <div className="skeleton mt-3 h-4 w-1/2" />
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="skeleton h-12 rounded-xl" />
        ))}
        <div className="skeleton h-12 rounded-xl sm:col-span-2" />
        <div className="skeleton h-32 rounded-xl sm:col-span-2" />
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main id="main" className="relative">
      <PageHero
        photos={GLOBE_PHOTOS.contact}
        title={<>Let&apos;s <span className="text-gradient-light">talk</span>.</>}
        lede="Ready to transform your business with better software? Tell us what you need, or call the team directly."
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <section id="enquiry" className="scroll-mt-24 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-14">
          {/* Direct contact details */}
          <div className="flex flex-col gap-5">
            <Reveal className="rounded-3xl border border-slate-900/5 bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue">
                <MapPin size={20} className="text-white" />
              </div>
              <h2 className="text-lg font-bold">Visit us</h2>
              <address className="mt-2 not-italic leading-relaxed text-slate-600">
                {SITE.address.street},<br />
                {SITE.address.locality},<br />
                Sri Lanka.
              </address>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple"
              >
                Open in Google Maps
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>

            <Reveal delay={0.06} className="rounded-3xl border border-slate-900/5 bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-cyan-400">
                <Phone size={20} className="text-white" />
              </div>
              <h2 className="text-lg font-bold">Call us</h2>
              <div className="mt-2 space-y-1">
                {PHONES.map((p) => (
                  <a key={p.href} href={p.href} className="block text-slate-600 transition-colors hover:text-ink">
                    {p.label}
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12} className="rounded-3xl border border-slate-900/5 bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-amber-400">
                <Mail size={20} className="text-white" />
              </div>
              <h2 className="text-lg font-bold">Email us</h2>
              <a href={`mailto:${SITE.email}`} className="mt-2 block text-slate-600 transition-colors hover:text-ink">
                {SITE.email}
              </a>
            </Reveal>
          </div>

          {/* Enquiry form reads ?topic=, so it must sit inside Suspense to keep the page prerendered */}
          <Suspense fallback={<FormSkeleton />}>
            <EnquiryForm />
          </Suspense>
        </div>
      </section>

      <JsonLd
        data={[
          {
            ...webPageSchema({ type: "ContactPage", path: "/contact", name: TITLE, description: DESCRIPTION }),
            mainEntity: {
              "@id": ORG_ID,
              contactPoint: PHONES.map((p) => ({
                "@type": "ContactPoint",
                telephone: p.href.replace("tel:", ""),
                email: SITE.email,
                contactType: "sales",
                areaServed: "LK",
              })),
            },
          },
        ]}
      />
    </main>
  );
}
