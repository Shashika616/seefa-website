import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Services from "@/components/sections/Services";
import PageHero from "@/components/ui/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { SERVICES, GLOBE_PHOTOS } from "@/lib/constants";
import { serviceListSchema, webPageSchema } from "@/lib/schema";

const TITLE = "Custom Software, Web & Mobile App Development";
const DESCRIPTION =
  "Custom applications, web applications, mobile apps and technology consultancy from Seefa Business Solutions, a Sri Lankan software company since 1999.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/services" });

export default function ServicesPage() {
  return (
    <main id="main" className="relative">
      <PageHero
        photos={GLOBE_PHOTOS.services}
        title={<>Need something <span className="text-gradient-light">beyond off-the-shelf</span>?</>}
        lede="The same team behind our products designs and builds custom web, mobile and enterprise software tailored to the way you work."
        crumbs={[{ name: "Services", path: "/services" }]}
      />

      <Services />

      <JsonLd
        data={[
          webPageSchema({ path: "/services", name: TITLE, description: DESCRIPTION }),
          serviceListSchema({
            path: "/services",
            name: "Seefa software development services",
            items: SERVICES.map((s) => ({ name: s.title, description: s.description })),
          }),
        ]}
      />
    </main>
  );
}
