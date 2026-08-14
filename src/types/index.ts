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

export interface CaseStudy {
  id: number;
  title: string;
  category: string;
  metric: string;
  description: string;
  gradient: string;
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