export const PERSONAL_INFO = {
  name: "Herdiyana Firmansyah",
  title: "Fullstack Developer & Software Engineer",
  location: "North Bekasi, West Java, Indonesia",
  phone: "+62 851-6362-3378",
  whatsappUrl: "https://wa.me/6285163623378",
  email: "herdiyanafirmansyah27@gmail.com",
  website: "https://herdiyana.vercel.app",
  github: "https://github.com/Din-27",
  githubUsername: "Din-27",
  linkedin: "https://linkedin.com/in/herdiyana-firmansyah",
  linkedinUsername: "herdiyana-firmansyah",
  status: "Available for High-Impact Roles & Consulting",
  summary:
    "Results-driven Fullstack Developer with 4+ years of hands-on experience building, modernizing, and optimizing high-throughput enterprise systems, e-commerce retail networks, and logistics platforms. Proven expertise in system refactoring, SQL query tuning for high-volume transactions, and executing user-driven Change Requests (CR). Highly proficient in payment gateway integrations, reservation/booking architectures, real-time WebSockets, Golang/Node.js microservices, Linux servers, and GCP cloud environments, supported by automated Playwright E2E testing.",
};

export const METRICS = [
  { label: "Tahun Pengalaman", value: "4+" },
  { label: "Sistem Enterprise & App", value: "15+" },
  { label: "Service Uptime Track", value: "99.9%" },
  { label: "Database Query Tuning", value: "High-Vol" },
];

export const SKILLS = {
  frontend: [
    "React.js",
    "Next.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap 5",
    "Redux Toolkit",
    "React Query",
    "HTML5 / CSS3",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "NestJS",
    "Golang (Gin, Gorm)",
    "gRPC",
    "Socket.io",
    "RabbitMQ",
    "Python",
    ".NET Core",
    "Solidity (EVM)",
  ],
  databases: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "Firebase Firestore",
    "Query Optimization",
    "Prisma ORM",
    "TypeORM",
    "Gorm",
  ],
  cloudDevops: [
    "Google Cloud Platform (GCP)",
    "AWS (S3)",
    "Linux (Ubuntu/Debian)",
    "Docker",
    "Git / GitHub",
    "Playwright E2E",
    "Vercel",
    "CI/CD Workflows",
  ],
};

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  points: string[];
  technologies?: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "PT. MDEV (Astra Otoparts Group)",
    role: "Fullstack Developer",
    period: "Jun 2025 – Present",
    location: "Jakarta / Bandung, Indonesia",
    type: "Full-Time",
    points: [
      "Engineer core system features and user Change Requests (CR) tailored to automotive and spare parts distribution workflows.",
      "Perform comprehensive codebase refactoring and database query tuning across heavy relational databases, significantly reducing response latency and server load.",
      "Provide proactive operational support for end-users and site staff, resolving production incidents and ensuring 99.9% service uptime.",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Enterprise ERP", "Query Tuning"],
  },
  {
    company: "PT. Knitto Tekstil",
    role: "Software Developer",
    period: "Jun 2022 – Jun 2025",
    location: "Bandung, Indonesia",
    type: "Full-Time (3 Years)",
    points: [
      "Spearheaded modernization of enterprise supply chain and ERP systems from legacy applications into modern fullstack services and cross-platform mobile apps.",
      "Engineered an integrated Warehouse Management System (WMS) comprising: security checkpoint mobile apps (gate QR/barcode verification), warehouse operator apps (real-time bin/shelf allocation, stock opname, and inventory adjustments), and automated packing order workflows.",
      "Built logistics admin dispatch portals enabling bulk automated shipping label generation, return merchandise authorization (RMA), and master data bulk import engines.",
      "Optimized database schemas and index structures in PostgreSQL/MySQL to guarantee data integrity across enterprise inventory assets.",
    ],
    technologies: ["React.js", "React Native", "Node.js", "PostgreSQL", "MySQL", "WMS & ERP", "Docker"],
  },
  {
    company: "PT. Tonekan Niat Baikmu",
    role: "Fullstack Developer (Mobile & Web)",
    period: "Dec 2025 – Present",
    location: "Bandung, Indonesia",
    type: "Part-Time / Contract",
    points: [
      "Oversee mobile application lifecycle for umroh.in (React Native), delivering multi-tier payment gateway integrations, group tour orders, and booking workflows.",
      "Manage cloud backend deployment, REST API performance, regular Change Request (CR) rollouts, and customer-care technical assistance.",
    ],
    technologies: ["React Native", "Next.js", "Express.js", "Payment Gateway", "GCP"],
  },
  {
    company: "PT. Kala Bhairawa Tantra",
    role: "Fullstack Developer",
    period: "Jan 2022 – Jun 2022",
    location: "Bandung, Indonesia",
    type: "Full-Time",
    points: [
      "Collaborated in an agile software engineering team to architect fullstack web applications from initial discovery to deployment.",
      "Connected React.js interfaces with Ethereum smart contracts (Solidity/EVM) and Node.js REST APIs for automated transaction verification.",
    ],
    technologies: ["React.js", "Node.js", "Solidity", "Web3 / EVM", "REST APIs"],
  },
];

export interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  badge: string;
  links?: { label: string; url: string }[];
}

export const PROJECTS: ProjectItem[] = [
  {
    title: "Omni-Channel Retail & Cloud POS Ecosystem",
    subtitle: "WarungLokal & Portal-27",
    badge: "POS App • WarungLokal",
    description:
      "Integrated retail commerce ecosystem featuring an interactive Point-of-Sale (POS) cashier terminal, dynamic online storefronts, automated shopping carts, and centralized inventory order management.",
    tags: ["Next.js", "React.js", "Express.js", "MySQL", "Tailwind CSS"],
    links: [
      { label: "Live Demo", url: "https://herdiyana.vercel.app" },
      { label: "GitHub", url: "https://github.com/Din-27" },
    ],
  },
  {
    title: "Enterprise Task Management & Ticketing Portal",
    subtitle: "TaskApp Demo & Habitat Ticketing",
    badge: "TaskApp • Habitat Ticketing",
    description:
      "Collaborative productivity platform (Asana-inspired) with Kanban status boards and JWT auth. Additionally designed a live wildlife park booking & ticket reservation portal with interactive guest checkouts.",
    tags: ["TypeScript", "React.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    links: [
      { label: "Live Portal", url: "https://herdiyana.vercel.app" },
      { label: "GitHub", url: "https://github.com/Din-27" },
    ],
  },
  {
    title: "Job Portal Platform & Golang Microservices",
    subtitle: "Recruitment Ecosystem & High-Throughput APIs",
    badge: "Live Portal • Go Backend",
    description:
      "Recruitment portal ecosystem with dedicated applicant discovery interfaces and high-performance backend microservices built with Go (Gin) for low-latency job filtering and recruiter management.",
    tags: ["Golang (Gin)", "Next.js", "Tailwind CSS", "REST API", "PostgreSQL"],
    links: [
      { label: "Live Portal", url: "https://herdiyana.vercel.app" },
      { label: "GitHub", url: "https://github.com/Din-27" },
    ],
  },
  {
    title: "WhatsApp Bot Server, Go Mining Engine & NPM Package",
    subtitle: "Automation Services & Open Source Module",
    badge: "WA Bot • NPM Package",
    description:
      "Engineered WhatsApp automated bot services (Frontend + WebSocket server), a Go-based blockchain proof-of-work simulation, and published the open-source folder-temporary library on npm registry.",
    tags: ["Node.js", "Golang (ME-Coin)", "NPM Module", "Socket.io", "WebSocket"],
    links: [
      { label: "NPM Package", url: "https://www.npmjs.com/package/folder-temporary" },
      { label: "GitHub", url: "https://github.com/Din-27" },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    title: "Legacy JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    hours: "300 Jam Pelatihan",
    verificationUrl: "https://freecodecamp.org/fcc648307e1-js-v8",
    credentialId: "fcc648307e1-js-v8",
  },
  {
    title: "Legacy Responsive Web Design",
    issuer: "freeCodeCamp",
    hours: "300 Jam Pelatihan",
    verificationUrl: "https://freecodecamp.org/fcc648307e1-web-design",
    credentialId: "fcc648307e1-web-design",
  },
  {
    title: "Certified Fullstack Web Developer",
    issuer: "DumbWays.id",
    hours: "Bootcamp Batch #30 Intensive",
    credentialId: "DumbWays Graduate #30",
  },
];

export const EDUCATION = [
  {
    institution: "Universitas Terbuka",
    degree: "Bachelor of Science in Information Systems (S1 Sistem Informasi)",
    period: "Expected 2028 / In Progress",
    location: "Indonesia",
    description:
      "Undergraduate student focusing on enterprise software architecture, database management systems, and information system design.",
  },
  {
    institution: "DumbWays Indonesia",
    degree: "Fullstack Developer Intensive Bootcamp",
    period: "Dec 2021 – Mar 2022",
    location: "Indonesia",
    description:
      "Immersive bootcamp graduate covering fullstack modern web development (React, Node.js, databases, git workflows).",
  },
];
