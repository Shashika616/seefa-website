import type { Photo } from "@/lib/images";

export interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: "code" | "globe" | "smartphone" | "lightbulb";
  color: string;
  dotColor: string;
  glow: string;
  photo: Photo;
  /** Concrete deliverables, shown as a checklist on the card. */
  points: string[];
}

export type SolutionCategory = "ERP & Finance" | "Retail & POS" | "HR & Payroll" | "Industry";

export interface Solution {
  id: number;
  title: string;
  description: string;
  category: SolutionCategory;
  icon: string;
  badge?: "NEW" | "FEATURED";
  modules?: string[];
  photo: Photo;
}

export interface Industry {
  id: number;
  name: string;
  icon: string;
  items: string[];
  /** One factual sentence; also used as the industry's description in structured data. */
  blurb: string;
  photo: Photo;
}

export interface Screenshot {
  src: string;
  label: string;
}

export interface ClientLogo {
  src: string;
  name: string;
}

export interface Testimonial {
  quote: string;
  role: string;
  location: string;
}

export interface Faq {
  question: string;
  answer: string;
}
