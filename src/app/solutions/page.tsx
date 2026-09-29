import type { Metadata } from "next";
import Solutions from "@/components/sections/Solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Complete business software solutions — ERP, POS, payroll, inventory, and industry-specific systems.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions | Seefa Business Solutions",
    description: "Complete business software solutions — ERP, POS, payroll, inventory, and industry-specific systems.",
    url: "/solutions",
    siteName: "Seefa Business Solutions",
    locale: "en_LK",
    type: "website",
  },
};

export default function SolutionsPage() {
  return (
    <main id="main" className="relative pt-24 md:pt-32">
      <Solutions />
    </main>
  );
}