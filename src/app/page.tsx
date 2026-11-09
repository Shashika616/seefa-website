import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import LogoMarquee from "@/components/sections/LogoMarquee";
import ExploreGrid from "@/components/sections/ExploreGrid";
import FeaturedERP from "@/components/sections/FeaturedERP";
import IndustryShowcase from "@/components/sections/IndustryShowcase";
import StatementBand from "@/components/sections/StatementBand";
// import Testimonials from "@/components/sections/Testimonials"; // hidden until client feedback is collected
import Clients from "@/components/sections/Clients";
import Faq from "@/components/sections/Faq";
import { FAQS } from "@/lib/constants";

// Order runs broad to specific: who we are, proof, where to go next, the
// flagship product, industries served, why us, who trusts us, then questions.
export default function Home() {
  return (
    <main id="main" className="relative">
      <Hero />
      <TrustBar />
      <LogoMarquee />
      <ExploreGrid />
      <FeaturedERP />
      <IndustryShowcase />
      <StatementBand />
      {/* <Testimonials /> hidden for now, re-enable once real client feedback is ready */}
      <Clients />
      <Faq faqs={FAQS} />
    </main>
  );
}
