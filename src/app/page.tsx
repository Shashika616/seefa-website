import { lazy, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";

const Solutions = lazy(() => import("@/components/sections/Solutions"));

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <About />
      <Services />
      <Suspense fallback={<div className="h-[50vh]" aria-hidden />}>
        <Solutions />
      </Suspense>
      <Footer />
    </main>
  );
}