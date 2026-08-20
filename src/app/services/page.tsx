import Services from "@/components/sections/Services";

export const metadata = {
  title: "Services | Seefa Business Solutions",
  description: "Custom web, mobile, and enterprise software development services tailored to your business.",
};

export default function ServicesPage() {
  return (
    <main className="relative pt-24 md:pt-32">
      <Services />
    </main>
  );
}