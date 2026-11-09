import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Solutions from "@/components/sections/Solutions";
import PageHero from "@/components/ui/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { SOLUTIONS, GLOBE_PHOTOS } from "@/lib/constants";
import { serviceListSchema, webPageSchema } from "@/lib/schema";

const TITLE = "ERP, POS & Payroll Software Solutions";
const DESCRIPTION =
  "Ready-made business software from Seefa, Sri Lanka: complete ERP, retail POS, payroll with EPF/ETF, inventory and industry-specific systems.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/solutions" });

export default function SolutionsPage() {
  return (
    <main id="main" className="relative">
      <PageHero
        photos={GLOBE_PHOTOS.solutions}
        title={<>One company. <span className="text-gradient-light">Complete business solutions</span>.</>}
        lede="ERP, point of sale, payroll, inventory and accounting systems, developed in Sri Lanka and running real businesses today."
        crumbs={[{ name: "Solutions", path: "/solutions" }]}
      >
        <Link
          href="/contact?topic=Solution%20demo#enquiry"
          className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
        >
          Book a demo
          <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </PageHero>

      <Solutions />

      <JsonLd
        data={[
          webPageSchema({ type: "CollectionPage", path: "/solutions", name: TITLE, description: DESCRIPTION }),
          serviceListSchema({
            path: "/solutions",
            name: "Seefa business software solutions",
            items: SOLUTIONS.map((s) => ({ name: s.title, description: s.description, category: s.category })),
          }),
        ]}
      />
    </main>
  );
}
