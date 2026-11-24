export const PERSONAL_INFO = {
  name: "Herdiyana Firmansyah",
  title: "Fullstack Developer & Software Engineer",
  location: "North Bekasi, West Java, Indonesia",
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
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Redux Toolkit",
    "React Query",
    "Bootstrap 5",
    "HTML5 / CSS3",
  ],
  mobile: [
    "Flutter (Dart)",
    "React Native",
    "Kotlin (Android)",
    "Swift (iOS)",
    "Dart FFI & C++ Native",
  ],
  backend: [
    "Golang (Gin, Gorm)",
    "Node.js",
    "NestJS",
    "Express.js",
    "FastAPI (Python)",
    "gRPC",
    "RabbitMQ",
    "Socket.io / WebSockets",
    "PHP",
    ".NET Core",
    "Solidity (EVM)",
  ],
  databases: [
    "PostgreSQL",
    "MySQL",
    "PLpgSQL Functions",
    "Redis (In-Memory Caching)",
    "MongoDB",
    "Firebase Firestore",
    "Query Optimization (EXPLAIN ANALYZE)",
    "Prisma ORM",
    "TypeORM",
    "Gorm",
  ],
  cloudDevops: [
    "Docker & Containerization",
    "Google Cloud Platform (GCP)",
    "AWS (S3)",
    "Serverless Architecture",
    "Linux (Ubuntu/Debian)",
    "Playwright E2E Testing",
    "CI/CD Workflows",
    "NPM Package Publishing",
    "Shell Scripting",
    "Git / GitHub CLI",
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
  domain: string;
  mockupType: "kanban" | "pos" | "iot" | "database" | "serverless" | "ecommerce" | "terminal" | "blockchain" | "mobile";
  links: { label: string; url: string }[];
}

export const PROJECTS: ProjectItem[] = [
  {
    title: "Kinetic Task & Workflow Management Enterprise",
    subtitle: "Asana-Scale Collaborative Kanban with PostgreSQL",
    badge: "Enterprise Kanban • Production App",
    domain: "udin-kinetic-task.vercel.app",
    mockupType: "kanban",
    description:
      "Sistem kolaborasi dan manajemen alur kerja tugas berskala enterprise dengan papan status Kanban dinamis, drag-and-drop workflow, JWT authentication, dan PostgreSQL backend dengan optimasi fungsi PLpgSQL.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS"],
    links: [
      { label: "Live Demo", url: "https://udin-kinetic-task-management-fronte.vercel.app" },
      { label: "Frontend Repo", url: "https://github.com/Din-27/Udin.Kinetic.Task.Management.Frontend" },
      { label: "Backend Repo", url: "https://github.com/Din-27/Udin.Kinetic.Task.Management.Backend" },
    ],
  },
  {
    title: "Casheer Cloud POS Terminal & Cashier System",
    subtitle: "Modern Point-of-Sale with Instant Cart & Receipt Engine",
    badge: "Point-of-Sale • Cloud Cashier",
    domain: "casheer-app-navy.vercel.app",
    mockupType: "pos",
    description:
      "Aplikasi kasir Point-of-Sale (POS) cloud modern dengan kalkulasi transaksi instan, manajemen katalog item, receipt printer generator, dan antarmuka responsif ramah layar sentuh tablet/desktop.",
    tags: ["React.js", "JavaScript", "POS Terminal", "Tailwind CSS", "REST API"],
    links: [
      { label: "Live Demo", url: "https://casheer-app-navy.vercel.app" },
      { label: "GitHub Repo", url: "https://github.com/Din-27/casheer-app" },
    ],
  },
  {
    title: "Smart Home & IoT Telemetry Dashboard",
    subtitle: "Real-Time Sensor Monitoring & Appliance Controls",
    badge: "IoT & Real-Time Dashboard",
    domain: "smarthome-iot.internal",
    mockupType: "iot",
    description:
      "Dashboard visualisasi telemetri perangkat IoT rumah pintar dengan grafik pemantauan suhu, kelembaban, efisiensi konsumsi daya, dan saklar kontrol perangkat berbasis WebSockets secara real-time.",
    tags: ["Next.js", "TypeScript", "IoT Telemetry", "Tailwind CSS", "WebSockets"],
    links: [
      { label: "GitHub Repo", url: "https://github.com/Din-27/smart-home-website" },
    ],
  },
  {
    title: "SQL Query Monitor & Index Performance Profiler",
    subtitle: "Deep-Dive Database Performance Tuning & EXPLAIN Analyzer",
    badge: "Database Tool • Query Tuning",
    domain: "query-monitor.internal",
    mockupType: "database",
    description:
      "Penganalisis performa kueri database relasional untuk mendeteksi slow queries, index scans yang tidak efisien, dan optimasi kueri PostgreSQL/MySQL dengan perbandingan latensi sebelum dan sesudah refactoring.",
    tags: ["JavaScript", "PostgreSQL", "MySQL", "Query Profiler", "Performance Tuning"],
    links: [
      { label: "GitHub Repo", url: "https://github.com/Din-27/query-monitor" },
    ],
  },
  {
    title: "Colyin Serverless App & Cloud Microservices",
    subtitle: "Event-Driven Serverless Compute with Docker",
    badge: "Cloud Serverless • Microservices",
    domain: "colyin.serverless.cloud",
    mockupType: "serverless",
    description:
      "Arsitektur komputasi serverless berbasis event untuk penanganan fungsi on-demand, orkestrasi kontainerisasi Docker otomatis, dan utilitas shell script Linux terisolasi.",
    tags: ["TypeScript", "Serverless", "Docker", "Shell Scripting", "Node.js"],
    links: [
      { label: "GitHub Repo", url: "https://github.com/Din-27/Colyin.Serverless.App" },
    ],
  },
  {
    title: "Modern E-Commerce Storefront & NestJS Backend",
    subtitle: "Headless E-Commerce with Modular Cart & Payment Integration",
    badge: "Modern E-Commerce Store",
    domain: "fashion-web.vercel.app",
    mockupType: "ecommerce",
    description:
      "Aplikasi toko online modern dengan katalog produk berkinerja tinggi, keranjang belanja interaktif, filter kategori pakaian, dan backend modular berbasis framework enterprise NestJS.",
    tags: ["Next.js", "TypeScript", "NestJS", "E-Commerce", "REST API"],
    links: [
      { label: "Frontend Repo", url: "https://github.com/Din-27/fashion-web" },
      { label: "Backend Repo", url: "https://github.com/Din-27/nest-commerce" },
    ],
  },
  {
    title: "Din-Logger & Open-Source Node.js Modules",
    subtitle: "Published NPM Package & Structured System Logger",
    badge: "NPM Package • Open Source",
    domain: "npmjs.com/package/folder-temporary",
    mockupType: "terminal",
    description:
      "Modul utilitas open-source terpublikasi di NPM registry (folder-temporary) untuk isolasi direktori sementara, serta library logger terstruktur untuk logging microservices Node.js/TypeScript.",
    tags: ["TypeScript", "Node.js", "NPM Registry", "Open Source", "Package Authoring"],
    links: [
      { label: "NPM Package", url: "https://www.npmjs.com/package/folder-temporary" },
      { label: "GitHub Repo", url: "https://github.com/Din-27/din-logger" },
    ],
  },
  {
    title: "ME-Coin Blockchain Engine & Golang Services",
    subtitle: "Proof-of-Work Crypto Engine & High-Throughput APIs",
    badge: "Golang Microservices & Blockchain",
    domain: "me-coin.chain.internal",
    mockupType: "blockchain",
    description:
      "Simulasi mesin blockchain terdistribusi dengan mekanisme konsensus Proof-of-Work (PoW), kalkulasi hash kriptografis, dan backend Golang (Gin) untuk integrasi microservices berlatensi rendah.",
    tags: ["Golang", "Gin Framework", "Blockchain PoW", "Docker", "Cryptography"],
    links: [
      { label: "Blockchain Repo", url: "https://github.com/Din-27/ME-coin" },
      { label: "Go Service Repo", url: "https://github.com/Din-27/Golang.Backend.Test.App" },
    ],
  },
  {
    title: "Flutter Sound Native & Mobile Cross-Platform",
    subtitle: "Dart, C++, Swift & Kotlin Audio Engine Integration",
    badge: "Mobile Native • Flutter & Cross-Platform",
    domain: "mobile.app.android.ios",
    mockupType: "mobile",
    description:
      "Integrasi modul audio native berkinerja tinggi pada framework Flutter menggunakan Dart FFI, library C++, Kotlin (Android), dan Swift (iOS) untuk pemrosesan media audio lintas platform.",
    tags: ["Flutter", "Dart", "C++ Native", "Swift", "Kotlin", "React Native"],
    links: [
      { label: "Flutter Sound", url: "https://github.com/Din-27/flutter-snd" },
      { label: "Loyalty App Repo", url: "https://github.com/Din-27/loyalty-app" },
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
