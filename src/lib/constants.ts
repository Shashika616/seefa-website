import type { Service, Solution, SolutionCategory, Industry, Screenshot } from "@/types";

export const NAV_LINKS = ["Solutions", "Industries", "Services", "About", "Contact"];

export const PRODUCT_CHIPS = ["ERP", "POS", "Payroll", "Inventory", "Accounting", "Industry Solutions"];

export const STATS = [
  { value: "25+", label: "Years of Excellence" },
  { value: "100+", label: "Clients Served" },
  { value: "100+", label: "Projects Delivered" },
  { value: "1999", label: "Serving Sri Lanka Since" },
];

export const ERP_MODULES = ["Purchase", "Sales / Distribution", "Inventory / Warehouse", "Financial Accounting", "Production", "Service Management", "Analysis Reports"];

export const TECH_STACK = ["React", "Node.js", "SQL", "Azure", "Docker", "Next.js"];

export const WHY_US = [
  "25+ years of software development experience",
  "Solutions designed around actual business workflows",
  "Local Sri Lankan support private & government sectors",
  "Customization when your business needs it",
  "Ongoing maintenance and long-term support",
];

/* ── ADD REAL SCREENSHOTS HERE ─────────────────────────────
   1. Drop files into /public/images/screenshots/
   2. Add entries below, e.g.:
      { src: "/images/screenshots/erp-dashboard.png", label: "Dashboard" }
   The Featured ERP section switches from mockups to your real images automatically. */
export const ERP_SCREENSHOTS: Screenshot[] = [];

/* Client logos need no manual list anymore — Clients.tsx scans
   /public/images/clients/ automatically at build time. */

export const INDUSTRIES: Industry[] = [
  { id: 1, name: "Retail & POS", icon: "cart", items: ["POS", "Inventory", "Purchasing", "Sales"] },
  { id: 2, name: "Manufacturing", icon: "factory", items: ["Production", "Stock", "Costing", "Planning"] },
  { id: 3, name: "Restaurants", icon: "restaurant", items: ["POS", "Kitchen", "Tables", "Delivery"] },
  { id: 4, name: "Education", icon: "graduation", items: ["Students", "Courses", "Fees", "Administration"] },
  { id: 5, name: "Workshops", icon: "wrench", items: ["Job Cards", "Spare Parts", "Inventory"] },
  { id: 6, name: "Travel & Tours", icon: "plane", items: ["Bookings", "Vehicles", "Customers", "Invoicing"] },
  { id: 7, name: "Distribution", icon: "truck", items: ["Debtors", "Deliveries", "Warehousing"] },
  { id: 8, name: "Services & HR", icon: "users", items: ["Payroll", "EPF / ETF", "Attendance"] },
];

export const SERVICES: Service[] = [
  { id: 1, title: "Custom Applications", subtitle: "Development & Maintenance", description: "Bespoke software tailored to your exact business logic, built to scale and maintained for longevity.", icon: "code", color: "from-brand-purple to-brand-purple-light", dotColor: "bg-brand-purple", glow: "rgba(124,58,237,0.14)" },
  { id: 2, title: "Web Applications", subtitle: "Development", description: "High-performance, responsive web platforms utilizing Next.js, React, and modern cloud architectures.", icon: "globe", color: "from-brand-blue to-cyan-400", dotColor: "bg-brand-blue", glow: "rgba(14,165,233,0.14)" },
  { id: 3, title: "Mobile Applications", subtitle: "Development", description: "Native and cross-platform mobile experiences that feel intuitive, fast, and beautifully designed.", icon: "smartphone", color: "from-brand-green to-emerald-400", dotColor: "bg-brand-green", glow: "rgba(16,185,129,0.14)" },
  { id: 4, title: "Consultancy", subtitle: "Services", description: "Strategic technical guidance. Architecture reviews, team scaling, and digital transformation roadmaps.", icon: "lightbulb", color: "from-brand-orange to-amber-400", dotColor: "bg-brand-orange", glow: "rgba(249,115,22,0.14)" },
];

export const SOLUTION_CATEGORIES: readonly SolutionCategory[] = ["ERP & Finance", "Retail & POS", "HR & Payroll", "Industry"] as const;

export const SOLUTIONS: Solution[] = [
  { id: 1, title: "Complete ERP Suite", description: "Your next business solution every module your company needs, unified in one system.", category: "ERP & Finance", icon: "boxes", badge: "FEATURED", modules: ERP_MODULES },
  { id: 2, title: "Employee Management System", description: "Attendance, leave, records and performance your whole workforce in one place.", category: "HR & Payroll", icon: "users" },
  { id: 3, title: "Retail & Point of Sales", description: "Fast billing, live inventory sync and daily sales reports for retail outlets.", category: "Retail & POS", icon: "cart" },
  { id: 4, title: "Restaurant Management System", description: "Orders, kitchen flow, tables and billing streamlined for busy restaurants.", category: "Industry", icon: "restaurant" },
  { id: 5, title: "Tools Hiring System", description: "Equipment availability, rentals and deposits tracked to the last item.", category: "Industry", icon: "wrench" },
  { id: 6, title: "Debtors Management System", description: "Receivables, aging and collections with clear, actionable visibility.", category: "ERP & Finance", icon: "wallet" },
  { id: 7, title: "Sales Order Apps", description: "Field sales ordering from any device, synced to head office in real time.", category: "Retail & POS", icon: "bag", badge: "NEW" },
  { id: 8, title: "Education / Consultancy Solutions", description: "Admissions, courses, billing and administration for institutes and consultancies.", category: "Industry", icon: "graduation" },
  { id: 9, title: "Stock Control & Workshop Management", description: "Job cards, spare parts and stock control built for workshops.", category: "Industry", icon: "warehouse" },
  { id: 10, title: "Tours & Travels Business Solutions", description: "Bookings, itineraries, vehicles and invoicing for travel agencies.", category: "Industry", icon: "plane" },
  { id: 11, title: "General Ledger Control System", description: "Complete ledger control with accurate, audit-ready books.", category: "ERP & Finance", icon: "book" },
  { id: 12, title: "Payroll with EPF / ETF & E-Banking", description: "Automated payroll with Sri Lankan EPF/ETF processing and bank file generation.", category: "HR & Payroll", icon: "banknote" },
];