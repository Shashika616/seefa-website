import type { Service, Solution, SolutionCategory, Industry, Screenshot, HeroSlide, Testimonial } from "@/types";

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

export const ERP_SCREENSHOTS: Screenshot[] = [];

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

export const HERO_SLIDES: HeroSlide[] = [
  {
    tag: "Since 1999 · Sri Lanka",
    title: "Business software built around",
    highlight: "your business.",
    description: "Powerful ERP, POS, payroll, inventory and accounting developed and supported in Sri Lanka for over 25 years.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80",
  },
  {
    tag: "Complete ERP Suite",
    title: "One system.",
    highlight: "Every department.",
    description: "Sales, inventory, finance and production connected so your whole company works from the same live data.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2000&q=80",
  },
  {
    tag: "Retail & POS",
    title: "Run your store",
    highlight: "at full speed.",
    description: "Fast billing, live stock and daily reports that keep your team ahead of the queue.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2000&q=80",
  },
  {
    tag: "Payroll & HR",
    title: "Payroll, EPF / ETF",
    highlight: "handled.",
    description: "Automated payroll with Sri Lankan statutory processing and e-banking, ready in one click.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Their POS and inventory system runs our entire chain. Downtime is practically zero, and support answers before we finish calling.",
    role: "Managing Director, Retail Chain",
    location: "Colombo",
  },
  {
    quote: "The ERP implementation paid for itself within the first year. Our accounts close in days now, not weeks.",
    role: "Finance Manager, Manufacturing Company",
    location: "Katunayake",
  },
  {
    quote: "Payroll with EPF and ETF used to take three staff a full week. Now it's one click and a bank file.",
    role: "Operations Head, Logistics Company",
    location: "Kandy",
  },
];

export const ERP_FEATURED_IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
];