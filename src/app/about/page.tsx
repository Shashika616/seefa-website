import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import About from "@/components/sections/About";
import PageHero from "@/components/ui/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { GLOBE_PHOTOS } from "@/lib/constants";
import { webPageSchema } from "@/lib/schema";

const TITLE = "About Us: Sri Lankan Software Company Since 1999";
const DESCRIPTION =
  "Seefa Business Solutions has built ERP, POS, payroll and custom software for Sri Lankan private and government organisations since 1999.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/about" });

export default function AboutPage() {
  return (
    <main id="main" className="relative">
      <PageHero
        photos={GLOBE_PHOTOS.about}
        title={<>Built in Sri Lanka. <span className="text-gradient-light">Since 1999</span>.</>}
        lede="For more than 25 years we've written the software that Sri Lankan businesses run on, and stayed on to support it."
        crumbs={[{ name: "About", path: "/about" }]}
      />

      <About />

      <JsonLd data={webPageSchema({ type: "AboutPage", path: "/about", name: TITLE, description: DESCRIPTION })} />
    </main>
  );
}
