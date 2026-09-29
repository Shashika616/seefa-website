import type { Metadata } from "next";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services",
  description: "Custom web, mobile, and enterprise software development services tailored to your business.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Seefa Business Solutions",
    description: "Custom web, mobile, and enterprise software development services tailored to your business.",
    url: "/services",
    siteName: "Seefa Business Solutions",
    locale: "en_LK",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main id="main" className="relative pt-24 md:pt-32">
      <Services />
    </main>
  );
}