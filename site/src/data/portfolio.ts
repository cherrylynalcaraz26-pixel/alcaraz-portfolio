export const profile = {
  name: "Cherrylyn Alcaraz",
  title: "President & General Manager — CHEM Tourist and Transport Services OPC",
  positioning:
    "Operations Management · Fleet & Transport · Bookkeeping & Compliance · Business Systems",
  tagline:
    "Nine years turning messy, multi-entity operations into organized systems that scale — across corporate transport, food service, industrial supply, and financial compliance.",
  location: "Calamba, Laguna, Philippines",
  phone: "0961-627-1745",
  email: "cherrylyn.alcaraz26@gmail.com",
  linkedin: null as string | null, // pending
};

export const dashboard = [
  { value: "9+", label: "Years of Experience", confirmed: true },
  { value: "5", label: "Businesses Owned / Managed", confirmed: true },
  { value: "4", label: "Industries Spanned", confirmed: true },
  { value: "16+", label: "Fleet Size", confirmed: true },
  { value: "0", label: "Major Compliance Violations", confirmed: true },
  { value: "12+ yrs", label: "Longest-Running Venture", confirmed: true },
  { value: "—", label: "Corporate Clients Served", confirmed: false },
  { value: "—", label: "Revenue Managed", confirmed: false },
];

export const competencyGroups = [
  {
    category: "Operations & Fleet",
    items: [
      "Fleet Management (16+ units)",
      "Dispatch & Route Scheduling",
      "Driver Coordination & HR",
      "Operations Dashboard Design",
      "KPI Monitoring & Reporting",
      "LTO / LTFRB Compliance",
      "Incident Documentation",
      "Vendor & Supplier Management",
      "SOP Development",
    ],
  },
  {
    category: "Finance & Compliance",
    items: [
      "Multi-Entity Bookkeeping",
      "BIR Tax Compliance (VAT, EWT)",
      "Payroll Administration",
      "Bank Reconciliation",
      "Financial Reporting",
      "Loose-Leaf Books",
      "Cash Flow Monitoring",
      "SEC / Business Permit Compliance",
    ],
  },
  {
    category: "Systems & Administration",
    items: [
      "Google Sheets Automation",
      "Apps Script Workflows",
      "Database Management",
      "Executive Assistance",
      "Contract & Document Drafting",
      "Microsoft Excel",
      "Business Process Improvement",
    ],
  },
];

export const experience = [
  {
    role: "President & General Manager",
    org: "CHEM Tourist and Transport Services OPC",
    dates: "2022 – Present",
    summary:
      "Leads full-scope operations of a corporate B2B shuttle and fleet service company with 16+ vehicles (vans, L300s, SUVs) serving manufacturing and industrial clients across CALABARZON.",
    bullets: [
      "Sustained daily operations supporting hundreds of employees across multiple corporate route contracts",
      "Maintained zero major compliance violations across LTO, LTFRB, and BIR documentation requirements",
      "Built fleet performance, fuel monitoring, and KPI dashboards that improved operational visibility and decision-making",
      "Restructured scheduling and dispatch processes to reduce overtime and idle vehicle time",
      "Negotiated and maintained long-term transport contracts with corporate industrial clients",
      "Administered payroll and government-mandated benefits for drivers and operational staff",
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
      "Developed HTML-based reporting dashboards for management review and audit-readiness",
    ],
  },
  {
    role: "Operations & Procurement Consultant",
    org: "BlueScale Integrated Business Support",
    dates: "2025 – Present",
    summary:
      "Supports business owners with procurement coordination, supplier management, and back-office systems development.",
    bullets: [
      "Coordinate supplier and vendor relationships, including quotations, purchase orders, and delivery tracking",
      "Develop procurement monitoring systems and workflow documentation",
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
    title: "Became President & General Manager, CHEM Tourist and Transport Services OPC",
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
    desc: "Operations & procurement consulting — supplier coordination, PO tracking, workflow design.",
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
    role: "Owner, President & General Manager",
    relationship: "owned",
    industry: "Corporate Land Transport / Fleet Services",
    since: "2022",
    description:
      "B2B long-term shuttle contracts with manufacturing and industrial clients across CALABARZON. 16+ vehicles. Zero major LTO, LTFRB, or BIR violations to date.",
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
      "Designed and maintains complete bookkeeping infrastructure across 4 branches, including a live payroll dashboard with full statutory deduction logic.",
  },
  {
    name: "BlueScale Integrated Business Support",
    role: "Operations & Procurement Consultant",
    relationship: "consulting",
    industry: "Business Systems Consulting",
    since: "2025",
    description:
      "Supplier coordination, purchase order tracking, and back-office workflow design for business owners.",
  },
];

export const leadershipPhilosophy =
  "A business that depends entirely on the owner's memory isn't a business yet — it's a habit. My job in every venture I touch is to convert what's informal into what's documented: a route into a schedule, a handshake into a contract, a shoebox of receipts into a reconciled ledger. I run five business relationships at once because the systems underneath them don't require me to be in the room for every transaction — but I built every one of those systems myself first.";

export const values = [
  "Operational Discipline",
  "Compliance Integrity",
  "Systems Thinking",
  "Accountability",
  "Client Reliability",
  "Continuous Improvement",
  "Practical Execution",
];

export const education = {
  school: "City College of Laguna",
  program: "Technical & Vocational Education",
  certifications: ["Xero Advisor Certification — In Progress"],
  development: [
    "BIR tax compliance",
    "Fleet operations management",
    "Google Workspace automation",
    "React-based web application development",
    "Financial systems design",
  ],
};
