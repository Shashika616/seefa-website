import type { Metadata } from "next";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Seefa Business Solutions — 25+ years of software development excellence in Sri Lanka.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main" className="relative pt-24 md:pt-32">
      <About />
    </main>
  );
}