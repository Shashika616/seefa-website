import Industries from "@/components/sections/Industries";

export const metadata = {
  title: "Industries | Seefa Business Solutions",
  description: "Software solutions for retail, manufacturing, restaurants, education, workshops, travel and more.",
};

export default function IndustriesPage() {
  return (
    <main className="relative pt-24 md:pt-32">
      <Industries />
    </main>
  );
}