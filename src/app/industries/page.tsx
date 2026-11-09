import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Industries from "@/components/sections/Industries";
import PageHero from "@/components/ui/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { INDUSTRIES, GLOBE_PHOTOS } from "@/lib/constants";
import { serviceListSchema, webPageSchema } from "@/lib/schema";

const TITLE = "Industry Software for Retail, Manufacturing & More";
const DESCRIPTION =
  "Business software for Sri Lankan retail, manufacturing, restaurants, education, workshops, travel, distribution and HR, built by Seefa since 1999.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/industries" });

export default function IndustriesPage() {
  return (
    <main id="main" className="relative">
      <PageHero
        photos={GLOBE_PHOTOS.industries}
        title={<>Software for <span className="text-gradient-light">your industry</span>.</>}
        lede="If your business runs on it, we've built software for it. Eight industries, each with the modules it actually needs."
        crumbs={[{ name: "Industries", path: "/industries" }]}
      />

      <Industries />

      <JsonLd
        data={[
          webPageSchema({ type: "CollectionPage", path: "/industries", name: TITLE, description: DESCRIPTION }),
          serviceListSchema({
            path: "/industries",
            name: "Industries served by Seefa",
            items: INDUSTRIES.map((i) => ({ name: `${i.name} software`, description: i.blurb })),
          }),
        ]}
      />
    </main>
  );
}
