import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Solutions from "@/components/sections/Solutions";
import FeaturedERP from "@/components/sections/FeaturedERP";
import Industries from "@/components/sections/Industries";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Clients from "@/components/sections/Clients";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustBar />
      <LogoMarquee />
      <Solutions />
      <FeaturedERP />
      <Industries />
      <Services />
      <About />
      <Clients />
      <Footer />
    </main>
  );
}