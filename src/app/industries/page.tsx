import type { Metadata } from "next";
import Industries from "@/components/sections/Industries";

export const metadata: Metadata = {
  title: "Industries",
  description: "Software solutions for retail, manufacturing, restaurants, education, workshops, travel and more.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <main id="main" className="relative pt-24 md:pt-32">
      <Industries />
    </main>
  );
}