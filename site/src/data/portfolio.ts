export const profile = {
  name: "Cherrylyn Alcaraz",
  fullName: "Cherrylyn Mantala Alcaraz",
  title: "Founder & President — CHEM Tourist and Transport Services OPC",
  positioning:
    "Business Owner · Operations Executive · Transport & Fleet Management Specialist · Procurement & Supply Chain Consultant · ERP & Business Systems Strategist",
  tagline:
    "Nine years turning messy, multi-entity operations into organized systems that scale — across corporate transport, food service, industrial supply, financial compliance, and the software that runs them.",
  location: "Calamba, Laguna, Philippines",
  phone: "0961-627-1745",
  email: "cherrylyn.alcaraz26@gmail.com",
  linkedin: null as string | null, // pending
  photo: null as string | null, // pending — drop the file at site/public/photo.jpg and set this to "/photo.jpg"
};

export const dashboard = [
  { value: "9+", label: "Years of Experience", confirmed: true },
  { value: "5", label: "Businesses Owned / Managed", confirmed: true },
  { value: "4", label: "Systems Engineered", confirmed: true },
  { value: "16+", label: "Fleet Size", confirmed: true },
  { value: "0", label: "Major Compliance Violations", confirmed: true },
  { value: "12+ yrs", label: "Longest-Running Venture", confirmed: true },
  { value: "—", label: "Corporate Clients Served", confirmed: false },
  { value: "—", label: "Revenue Managed", confirmed: false },
];

export const competencyGroups = [
  {
    category: "Executive & Operations",
    items: [
      "Executive Leadership",
      "Business Strategy",
      "Operations Management",
      "Fleet & Transport Management",
      "Risk Management",
      "Contract Management",
      "Compliance (LTO / LTFRB / BIR)",
      "People Leadership",
      "Corporate Communication",
    ],
  },
  {
    category: "Procurement & Finance",
    items: [
      "Strategic Sourcing",
      "Supplier Evaluation & Negotiation",
      "Cost Control",
      "Multi-Entity Bookkeeping",
      "Financial Reporting & Analysis",
      "Payroll Administration",
      "Cash Flow Monitoring",
      "Contract & Vendor Negotiation",
    ],
  },
  {
    category: "Systems & Technology",
    items: [
      "ERP System Design",
      "Business Intelligence Dashboards",
      "Workflow Automation",
      "Fleet & GPS Systems",
      "CRM & POS Systems",
      "Database Management",
      "Google Workspace Automation",
      "Business Process Improvement",
    ],
  },
];

export const experience = [
  {
    role: "Founder & President",
    org: "CHEM Tourist and Transport Services OPC",
    dates: "2022 – Present",
    summary:
      "Founded and leads full-scope operations of a corporate B2B shuttle and fleet service company with 16+ vehicles (vans, L300s, SUVs) serving manufacturing and industrial clients across CALABARZON — corporate leadership, business development, contract negotiation, fleet and driver management, financial planning, and government compliance under one roof.",
    bullets: [
      "Sustained daily operations supporting hundreds of employees across multiple corporate route contracts",
      "Maintained zero major compliance violations across LTO, LTFRB, and BIR documentation requirements",
      "Negotiated and maintained long-term transport contracts with corporate industrial clients, owning pricing strategy and contract terms",
      "Designed and deployed a purpose-built fleet management system for dispatch, fuel monitoring, and KPI reporting (see Featured Projects)",
      "Restructured scheduling and dispatch processes to reduce overtime and idle vehicle time",
      "Administered payroll, government-mandated benefits, and performance monitoring for drivers and operational staff",
      "Led transition planning to upgrade the fleet from L300 units to modern van configurations",
      "Produced a presentation-grade Q1 CY2026 operational performance report for corporate clients",
    ],
  },
  {
    role: "Bookkeeping & Compliance Consultant",
    org: "Freelance — Multiple SME Clients",
    dates: "2024 – Present",
    summary:
      "Provides bookkeeping, payroll, and BIR compliance support to SME clients, including RBJ Seat Master Philippines Co. (multi-branch automotive accessories) and CDSC Industrial Supply.",
    bullets: [
      "Designed complete bookkeeping infrastructure for RBJ Seat Master Philippines Co. across 4 branches in the GMA region",
      "Built a payroll dashboard pulling live data from Google Sheets, applying full Philippine statutory deduction logic (SSS, PhilHealth, Pag-IBIG, withholding tax)",
      "Created a consignment reconciliation system for CDSC that flags billing gaps and collection discrepancies",
      "Developed reporting dashboards for management review and audit-readiness",
    ],
  },
  {
    role: "Procurement & ERP Systems Consultant",
    org: "BlueScale Integrated Business Support",
    dates: "2025 – Present",
    summary:
      "Supports business owners across two connected disciplines: strategic procurement (sourcing, supplier evaluation, purchase planning, cost reduction) and the ERP, CRM, and workflow systems that give owners real-time visibility into their own operations.",
    bullets: [
      "Coordinate supplier and vendor relationships, including quotation preparation, purchase orders, and delivery tracking",
      "Lead supplier evaluation and negotiation to reduce cost and improve purchase planning",
      "Design and build business systems — ERP, CRM, inventory, and dashboard analytics — for business owners (see Featured Projects: BlueScale Procurement Platform)",
      "Develop procurement monitoring systems, workflow documentation, and inventory optimization processes",
      "Provide administrative and systems support to business owners across functions",
    ],
  },
];

export const timeline = [
  {
    year: "2013",
    title: "Began managing Chef David Catering Services",
    desc: "Industrial park food concession — operating continuously ever since.",
  },
  {
    year: "2022",
    title: "Founded CHEM Tourist and Transport Services OPC",
    desc: "Corporate B2B shuttle and fleet company, 16+ vehicles, serving industrial clients across CALABARZON. Zero major compliance violations since.",
  },
  {
    year: "2024",
    title: "Launched freelance bookkeeping & compliance practice",
    desc: "Built multi-branch bookkeeping infrastructure for RBJ Seat Master Philippines Co. and a reconciliation system for CDSC Industrial Supply.",
  },
  {
    year: "2025",
    title: "Began consulting with BlueScale Integrated Business Support",
    desc: "Procurement and ERP/systems consulting — supplier coordination, purchase planning, and business systems design.",
  },
];

export type BusinessEntity = {
  name: string;
  role: string;
  relationship: "owned" | "managed" | "client" | "consulting";
  industry: string;
  since: string;
  description: string;
  logo?: string;
};

export const businesses: BusinessEntity[] = [
  {
    name: "CHEM Tourist and Transport Services OPC",
    role: "Founder & President",
    relationship: "owned",
    industry: "Corporate Land Transport / Fleet Services",
    since: "2022",
    description:
      "B2B long-term shuttle contracts with manufacturing and industrial clients across CALABARZON. 16+ vehicles. Zero major LTO, LTFRB, or BIR violations to date. Runs on a purpose-built fleet management system (see Featured Projects).",
    logo: "/logos/chem-logo.png",
  },
  {
    name: "Chef David Catering Services",
    role: "Manager",
    relationship: "managed",
    industry: "Food Service / Industrial Concession",
    since: "2013",
    description:
      "Industrial park canteen concession, operating continuously for over a decade inside an industrial estate environment.",
  },
  {
    name: "CDSC Industrial Supply",
    role: "Manager",
    relationship: "managed",
    industry: "B2B Industrial & Facility Supply",
    since: "—",
    description:
      "Supply of office, facility, and industrial goods to government agencies, hospitals, and industrial companies.",
    logo: "/logos/cdsc-logo.jpg",
  },
  {
    name: "RBJ Seat Master Philippines Co.",
    role: "Bookkeeping & Compliance Client",
    relationship: "client",
    industry: "Automotive Accessories (4 branches, GMA region)",
    since: "2024",
    description:
      "Designed and maintains complete bookkeeping infrastructure across 4 branches, including a live payroll dashboard with full statutory deduction logic. Also the deployment site for the RBJ ERP System (see Featured Projects).",
  },
  {
    name: "BlueScale Integrated Business Support",
    role: "Procurement & ERP Systems Consultant",
    relationship: "consulting",
    industry: "Business Systems Consulting",
    since: "2025",
    description:
      "Supplier coordination, purchase order tracking, and ERP/workflow systems design for business owners.",
  },
];

export type Project = {
  name: string;
  subtitle: string;
  client: string;
  features: string[];
  challenge: string;
  solution: string;
  result: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "CHEM Transport Management System",
    subtitle: "Fleet & Operations Platform",
    client: "CHEM Tourist and Transport Services OPC",
    features: [
      "Fleet Management",
      "Trip Monitoring",
      "Fuel Monitoring",
      "Payroll",
      "Accounting",
      "CRM",
      "Maintenance",
      "GPS",
      "Scheduling",
      "Analytics Dashboard",
      "Driver Management",
      "Role-Based Access",
    ],
    challenge:
      "A 16+ vehicle fleet with multiple corporate route contracts had no single system tying dispatch, fuel spend, driver performance, and payroll together — each was tracked separately, making it hard to see the full operational picture in real time.",
    solution:
      "Designed and built a purpose-built transport management system covering dispatch and trip monitoring, fuel tracking, maintenance scheduling, driver management, and payroll — with role-based access so drivers, office staff, and management see only what's relevant to them.",
    result: "[PLACEHOLDER: quantified outcome — e.g. reduction in idle time, admin hours saved per week, or compliance documentation turnaround]",
    stack: ["React", "Supabase", "SQL", "Google Apps Script"],
  },
  {
    name: "RBJ ERP System",
    subtitle: "Multi-Branch ERP",
    client: "RBJ Seat Master Philippines Co.",
    features: [
      "Inventory",
      "Sales",
      "Accounting",
      "POS",
      "Payroll",
      "Manufacturing",
      "Supplier Management",
      "Branch Monitoring",
      "Analytics Dashboard",
    ],
    challenge:
      "A 4-branch automotive accessories business had no centralized system connecting inventory, sales, and accounting across branches, creating risk around stock visibility, payroll accuracy, and BIR compliance.",
    solution:
      "Built a multi-branch ERP covering inventory, point-of-sale, accounting, manufacturing coordination, and supplier management, with branch-level monitoring and a consolidated analytics dashboard for ownership.",
    result: "[PLACEHOLDER: quantified outcome — e.g. reconciliation time saved, stock discrepancy reduction]",
    stack: ["React", "Next.js", "Supabase", "SQL"],
  },
  {
    name: "BlueScale Procurement Platform",
    subtitle: "Supplier & Procurement System",
    client: "BlueScale Integrated Business Support",
    features: [
      "Supplier Portal",
      "Quotation Management",
      "Vendor Database",
      "Purchase Orders",
      "Inventory",
      "Document Management",
      "Business Analytics",
    ],
    challenge:
      "Business owners procuring from multiple vendors had no structured way to compare quotations, track purchase orders, or maintain a reliable vendor database — sourcing decisions relied on memory and scattered messages.",
    solution:
      "Built a procurement platform with a supplier portal, quotation and purchase order management, a searchable vendor database, and document management, giving owners a single system for sourcing decisions.",
    result: "[PLACEHOLDER: quantified outcome — e.g. sourcing cycle time reduction, number of vendors onboarded]",
    stack: ["React", "Next.js", "Supabase", "REST API"],
  },
  {
    name: "Executive Business Dashboard",
    subtitle: "Cross-Business Analytics",
    client: "Personal Business Portfolio",
    features: [
      "Financial KPIs",
      "Revenue Monitoring",
      "Operational KPIs",
      "Fleet Analytics",
      "Payroll Analytics",
      "Expense Tracking",
      "Profitability Dashboard",
      "Executive Reports",
    ],
    challenge:
      "Managing five business relationships across four industries meant financial and operational data lived in separate spreadsheets and systems, with no single view for ownership-level decisions.",
    solution:
      "Built a cross-business executive dashboard consolidating financial and operational KPIs — revenue, fleet performance, payroll, and expenses — into one profitability view with exportable executive reports.",
    result: "[PLACEHOLDER: quantified outcome — e.g. time saved per reporting cycle, decisions this enabled]",
    stack: ["React", "Google Apps Script", "SQL"],
  },
];

export const technicalSkills = {
  "Business Systems": ["ERP", "CRM", "Fleet Management", "Payroll", "Inventory", "Accounting", "Dashboard Analytics"],
  Programming: [
    "React",
    "Next.js",
    "JavaScript",
    "PHP",
    "Python",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "SQL",
    "MySQL",
    "Supabase",
    "REST API",
    "Google Apps Script",
    "Git",
    "GitHub",
    "Vercel",
  ],
  "Business Software": [
    "Microsoft 365",
    "Google Workspace",
    "Excel",
    "Google Sheets",
    "Power BI [PLACEHOLDER: confirm proficiency]",
    "Looker Studio [PLACEHOLDER: confirm proficiency]",
    "QuickBooks [PLACEHOLDER: confirm proficiency]",
  ],
};

export const leadershipPhilosophy =
  "A business that depends entirely on the owner's memory isn't a business yet — it's a habit. My job in every venture I touch is to convert what's informal into what's documented: a route into a schedule, a handshake into a contract, a shoebox of receipts into a reconciled ledger, a spreadsheet into a system. I run five business relationships and the software behind them because none of it requires me to be in the room for every transaction — but I built every one of those systems myself first.";

export const values = [
  "Integrity",
  "Operational Excellence",
  "Continuous Improvement",
  "Customer Success",
  "Accountability",
  "Innovation",
  "People Development",
  "Long-Term Partnerships",
];

export const education = {
  school: "City College of Laguna",
  program: "Technical & Vocational Education",
  certifications: [
    "Xero Advisor Certification — In Progress",
    "[PLACEHOLDER: additional certifications]",
  ],
  development: [
    "BIR tax compliance",
    "Fleet operations management",
    "ERP and business systems architecture",
    "Full-stack web development (React, Supabase)",
    "Financial systems design",
  ],
};
