import type { Service, Solution, SolutionCategory, Industry, Screenshot, Testimonial, Faq } from "@/types";
import { PHOTOS, type Photo } from "@/lib/images";
import { SITE } from "@/lib/site";

export const NAV_LINKS = ["Solutions", "Industries", "Services", "About", "Contact"];

export const PRODUCT_CHIPS = ["ERP", "POS", "Payroll", "Inventory", "Accounting", "Industry Solutions"];

export const STATS = [
  { value: "25+", label: "Years of Excellence" },
  { value: "40+", label: "Clients Served" },
  { value: "60+", label: "Projects Delivered" },
  { value: "1999", label: "Serving Sri Lanka Since" },
];

export const ERP_MODULES = ["Purchase", "Sales / Distribution", "Inventory / Warehouse", "Financial Accounting", "Production", "Service Management", "Analysis Reports"];

export const TECH_STACK = ["VB.NET", "C#", "ASP.NET", "React", "Node.js", "SQL", "Azure", "Docker", "Next.js"];

export const WHY_US = [
  "25+ years of software development experience",
  "Solutions designed around actual business workflows",
  "Local Sri Lankan support private & government sectors",
  "Customization when your business needs it",
  "Ongoing maintenance and long-term support",
];

/** How an engagement runs, shown on the About page. */
export const PROCESS = [
  { step: "01", title: "Understand", body: "We study how your business actually runs: the workflows, the paperwork and the people involved." },
  { step: "02", title: "Configure or build", body: "We fit a ready-made system to those workflows, or build what is missing from the ground up." },
  { step: "03", title: "Implement", body: "We migrate your data, train your team and run alongside you until the new system is part of the day." },
  { step: "04", title: "Support", body: "We stay on for maintenance and long-term local support, so the system keeps pace as you grow." },
];

export const ERP_SCREENSHOTS: Screenshot[] = [];

export const INDUSTRIES: Industry[] = [
  { id: 1, name: "Retail & POS", icon: "cart", items: ["POS", "Inventory", "Purchasing", "Sales"], blurb: "Point of sale, live inventory, purchasing and sales reporting for shops and retail chains.", photo: PHOTOS.indRetail },
  { id: 2, name: "Manufacturing", icon: "factory", items: ["Production", "Stock", "Costing", "Planning"], blurb: "Production planning, stock control and costing that connect the factory floor to finance.", photo: PHOTOS.indManufacturing },
  { id: 3, name: "Restaurants", icon: "restaurant", items: ["POS", "Kitchen", "Tables", "Delivery"], blurb: "Orders, kitchen flow, table management and delivery for busy restaurants.", photo: PHOTOS.indRestaurants },
  { id: 4, name: "Education", icon: "graduation", items: ["Students", "Courses", "Fees", "Administration"], blurb: "Student records, courses, fee collection and administration for institutes.", photo: PHOTOS.indEducation },
  { id: 5, name: "Workshops", icon: "wrench", items: ["Job Cards", "Spare Parts", "Inventory"], blurb: "Job cards, spare parts and inventory control for vehicle and equipment workshops.", photo: PHOTOS.indWorkshops },
  { id: 6, name: "Travel & Tours", icon: "plane", items: ["Bookings", "Vehicles", "Customers", "Invoicing"], blurb: "Bookings, vehicles, customers and invoicing for travel agencies and tour operators.", photo: PHOTOS.indTravel },
  { id: 7, name: "Distribution", icon: "truck", items: ["Debtors", "Deliveries", "Warehousing"], blurb: "Debtors, deliveries and warehousing for distributors moving stock across the island.", photo: PHOTOS.indDistribution },
  { id: 8, name: "Services & HR", icon: "users", items: ["Payroll", "EPF / ETF", "Attendance"], blurb: "Payroll with EPF and ETF, attendance and HR records for service businesses.", photo: PHOTOS.indHr },
];

export const SERVICES: Service[] = [
  { id: 1, title: "Custom Applications", subtitle: "Development & Maintenance", description: "Bespoke software tailored to your exact business logic, built to scale and maintained for longevity.", icon: "code", color: "from-brand-purple to-brand-purple-light", dotColor: "bg-brand-purple", glow: "rgba(124,58,237,0.14)", photo: PHOTOS.svcCustom, points: ["Built around your workflows", "Integrates with existing systems", "Long-term maintenance"] },
  { id: 2, title: "Web Applications", subtitle: "Development", description: "High-performance, responsive web platforms utilizing Next.js, React, and modern cloud architectures.", icon: "globe", color: "from-brand-blue to-cyan-400", dotColor: "bg-brand-blue", glow: "rgba(14,165,233,0.14)", photo: PHOTOS.svcWeb, points: ["Responsive on every device", "Modern cloud hosting", "Fast, accessible interfaces"] },
  { id: 3, title: "Mobile Applications", subtitle: "Development", description: "Native and cross-platform mobile experiences that feel intuitive, fast, and beautifully designed.", icon: "smartphone", color: "from-brand-green to-emerald-400", dotColor: "bg-brand-green", glow: "rgba(16,185,129,0.14)", photo: PHOTOS.svcMobile, points: ["iOS and Android", "Synced with head office", "Field-ready offline use"] },
  { id: 4, title: "Consultancy", subtitle: "Services", description: "Strategic technical guidance. Architecture reviews, team scaling, and digital transformation roadmaps.", icon: "lightbulb", color: "from-brand-orange to-amber-400", dotColor: "bg-brand-orange", glow: "rgba(249,115,22,0.14)", photo: PHOTOS.svcConsult, points: ["Architecture reviews", "Digital transformation roadmaps", "Technology selection"] },
];

export const SOLUTION_CATEGORIES: readonly SolutionCategory[] = ["ERP & Finance", "Retail & POS", "HR & Payroll", "Industry"] as const;

export const SOLUTIONS: Solution[] = [
  { id: 1, title: "Complete ERP Suite", description: "Your next business solution every module your company needs, unified in one system.", category: "ERP & Finance", icon: "boxes", badge: "FEATURED", modules: ERP_MODULES, photo: PHOTOS.solErp },
  { id: 2, title: "Employee Management System", description: "Attendance, leave, records and performance your whole workforce in one place.", category: "HR & Payroll", icon: "users", photo: PHOTOS.solEmployees },
  { id: 3, title: "Retail & Point of Sales", description: "Fast billing, live inventory sync and daily sales reports for retail outlets.", category: "Retail & POS", icon: "cart", photo: PHOTOS.solRetail },
  { id: 4, title: "Restaurant Management System", description: "Orders, kitchen flow, tables and billing streamlined for busy restaurants.", category: "Industry", icon: "restaurant", photo: PHOTOS.solRestaurant },
  { id: 5, title: "Tools Hiring System", description: "Equipment availability, rentals and deposits tracked to the last item.", category: "Industry", icon: "wrench", photo: PHOTOS.solTools },
  { id: 6, title: "Debtors Management System", description: "Receivables, aging and collections with clear, actionable visibility.", category: "ERP & Finance", icon: "wallet", photo: PHOTOS.solDebtors },
  { id: 7, title: "Sales Order Apps", description: "Field sales ordering from any device, synced to head office in real time.", category: "Retail & POS", icon: "bag", badge: "NEW", photo: PHOTOS.solSalesOrders },
  { id: 8, title: "Education / Consultancy Solutions", description: "Admissions, courses, billing and administration for institutes and consultancies.", category: "Industry", icon: "graduation", photo: PHOTOS.solEducation },
  { id: 9, title: "Stock Control & Workshop Management", description: "Job cards, spare parts and stock control built for workshops.", category: "Industry", icon: "warehouse", photo: PHOTOS.solWorkshop },
  { id: 10, title: "Tours & Travels Business Solutions", description: "Bookings, itineraries, vehicles and invoicing for travel agencies.", category: "Industry", icon: "plane", photo: PHOTOS.solTours },
  { id: 11, title: "General Ledger Control System", description: "Complete ledger control with accurate, audit-ready books.", category: "ERP & Finance", icon: "book", photo: PHOTOS.solLedger },
  { id: 12, title: "Payroll with EPF / ETF & E-Banking", description: "Automated payroll with Sri Lankan EPF/ETF processing and bank file generation.", category: "HR & Payroll", icon: "banknote", photo: PHOTOS.solPayroll },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Their Restaurant and inventory systems runs our entire chain. Downtime is practically zero, and support answers before we finish calling.",
    role: "Managing Director, Retail Chain",
    location: "Anuradhapura",
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

export const ERP_FEATURED_IMAGES: Photo[] = [
  PHOTOS.erpAnalytics,
  PHOTOS.erpTeam,
  PHOTOS.erpOffice,
  PHOTOS.erpBuilding,
  PHOTOS.erpPlanning,
];

/**
 * Frequently asked questions. Every answer restates something the site already
 * claims elsewhere; nothing here is new or speculative. These are written as
 * complete, self-contained sentences because search and AI answer engines
 * quote them directly.
 */
export const FAQS: Faq[] = [
  {
    question: "What does Seefa Business Solutions do?",
    answer: `${SITE.name} is a Sri Lankan software company, operating since ${SITE.founded}, that develops and supports ERP, point of sale (POS), payroll, inventory and accounting software. It also builds custom web and mobile applications for private and government sector organisations.`,
  },
  {
    question: "Does Seefa's payroll software handle EPF and ETF?",
    answer: "Yes. Seefa's payroll system automates salary processing with Sri Lankan EPF and ETF statutory calculations, and generates bank files for e-banking salary transfers.",
  },
  {
    question: "What modules does the Seefa ERP include?",
    answer: `The Seefa ERP suite includes ${ERP_MODULES.slice(0, -1).join(", ").toLowerCase()} and ${ERP_MODULES[ERP_MODULES.length - 1].toLowerCase()}, all connected in one system so every department works from the same live data.`,
  },
  {
    question: "Which industries does Seefa build software for?",
    answer: `Seefa builds software for ${INDUSTRIES.slice(0, -1).map((i) => i.name.toLowerCase()).join(", ")} and ${INDUSTRIES[INDUSTRIES.length - 1].name.toLowerCase()} businesses across Sri Lanka.`,
  },
  {
    question: "Can Seefa customise its software for my business?",
    answer: "Yes. Seefa's solutions are designed around real business workflows and can be customised when your business needs it. The same team also builds fully custom applications when a ready-made system is not the right fit.",
  },
  {
    question: "Does Seefa provide support after implementation?",
    answer: "Yes. Seefa provides ongoing maintenance and long-term local support from Sri Lanka. Clients on a support agreement can log and track support tickets through the Seefa client portal.",
  },
  {
    question: "Where is Seefa Business Solutions located?",
    answer: `Seefa Business Solutions is based at ${SITE.address.street}, ${SITE.address.locality}, Sri Lanka. You can reach the team on +94 77 324 7216 or +94 11 304 2141, or by email at ${SITE.email}.`,
  },
];

/**
 * The six photos each page's hero globe turns through, in order. Technical
 * and software imagery, deliberately not used anywhere else on the site, and
 * no photo appears on more than one page's globe.
 */
export const GLOBE_PHOTOS = {
  home: [PHOTOS.heroColombo, PHOTOS.gHomeDrive, PHOTOS.gHomeUi, PHOTOS.gHomeCode, PHOTOS.gHomeLaptopGlow, PHOTOS.gHomeChart],
  solutions: [PHOTOS.gSolPhoneLaptop, PHOTOS.gSolTerminal, PHOTOS.gSolMobileApp, PHOTOS.gSolTablet, PHOTOS.gSolCad, PHOTOS.gSolDesk],
  industries: [PHOTOS.gIndCircuit, PHOTOS.gIndNetwork, PHOTOS.gIndMonitors, PHOTOS.gIndKeyboard, PHOTOS.gIndWorkstation, PHOTOS.gIndNightDev],
  services: [PHOTOS.gSvcCode, PHOTOS.gSvcWireframe, PHOTOS.gSvcUxSketch, PHOTOS.gSvcJs, PHOTOS.gSvcPython, PHOTOS.gSvcMarkup],
  about: [PHOTOS.gAboutCodeGlasses, PHOTOS.gAboutCodeBokeh, PHOTOS.gAboutLaptop, PHOTOS.gAboutServers, PHOTOS.gAboutDesk, PHOTOS.gAboutLaptopCity],
  contact: [PHOTOS.gConPhoneDesk, PHOTOS.gConPhone, PHOTOS.gConWorkspace, PHOTOS.gConOffice, PHOTOS.gConCoffee, PHOTOS.gConPlanning],
  clientLogin: [PHOTOS.gPortalCode, PHOTOS.gPortalBoard, PHOTOS.gPortalLaptop, PHOTOS.gPortalRepair, PHOTOS.gPortalSolder, PHOTOS.gPortalDesk],
} satisfies Record<string, Photo[]>;

/** The enquiry topic an industry's "Talk to us" link sends to /contact. */
export const industryTopic = (name: string) => `${name} software`;

/** Topics the site's own CTAs send to /contact?topic=, beyond product and service names. */
export const CTA_TOPICS = ["Product demo", "Solution demo", "Custom software"];

/**
 * Every topic the enquiry form will accept from ?topic=. Anything else is
 * ignored, so a crafted link cannot put its own text (a fake warning, a phone
 * number to call) into a form on this domain.
 */
export const ENQUIRY_TOPICS: readonly string[] = [
  ...SOLUTIONS.map((s) => s.title),
  ...SERVICES.map((s) => s.title),
  ...INDUSTRIES.map((i) => industryTopic(i.name)),
  ...CTA_TOPICS,
];
