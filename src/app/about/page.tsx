import About from "@/components/sections/About";

export const metadata = {
  title: "About Us | Seefa Business Solutions",
  description: "Learn about Seefa Business Solutions — 25+ years of software development excellence in Sri Lanka.",
};

export default function AboutPage() {
  return (
    <main className="relative pt-24 md:pt-32">
      <About />
    </main>
  );
}