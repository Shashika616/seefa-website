export interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: "code" | "globe" | "smartphone" | "lightbulb";
  color: string;
  dotColor: string;
  glow: string;
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
}

export interface Industry {
  id: number;
  name: string;
  icon: string;
  items: string[];
}

export interface Screenshot {
  src: string;
  label: string;
}

export interface ClientLogo {
  src: string;
  name: string;
}