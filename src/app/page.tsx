import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import LogoMarquee from "@/components/sections/LogoMarquee";
import StatementBand from "@/components/sections/StatementBand";
import FeaturedERP from "@/components/sections/FeaturedERP";
import Testimonials from "@/components/sections/Testimonials";
import Clients from "@/components/sections/Clients";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <TrustBar />
      <LogoMarquee />
      <FeaturedERP />
      <StatementBand />
      <Testimonials />
      <Clients />

      {/* Explore more */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Explore <span className="text-gradient">more</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">
            Discover our complete range of solutions, services, and industry expertise.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/solutions" className="bg-white rounded-2xl border border-slate-900/5 p-6 hover:shadow-lg hover:shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold mb-2">Solutions</h3>
              <p className="text-sm text-slate-600">ERP, POS, Payroll & more</p>
            </Link>
            <Link href="/industries" className="bg-white rounded-2xl border border-slate-900/5 p-6 hover:shadow-lg hover:shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold mb-2">Industries</h3>
              <p className="text-sm text-slate-600">Retail, Manufacturing & more</p>
            </Link>
            <Link href="/services" className="bg-white rounded-2xl border border-slate-900/5 p-6 hover:shadow-lg hover:shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold mb-2">Services</h3>
              <p className="text-sm text-slate-600">Custom development</p>
            </Link>
            <Link href="/about" className="bg-white rounded-2xl border border-slate-900/5 p-6 hover:shadow-lg hover:shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold mb-2">About Us</h3>
              <p className="text-sm text-slate-600">Our story & expertise</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}