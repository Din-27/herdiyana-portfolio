"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Cpu,
  Database,
  Layers,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

interface ShowcaseSlide {
  id: string;
  step: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  accentBg: string;
  badgeColor: string;
  techs: string[];
  points: string[];
  visualStats: {
    label: string;
    value: string;
    sublabel: string;
  };
}

const SLIDES: ShowcaseSlide[] = [
  {
    id: "microservices",
    step: "01",
    category: "High-Throughput Engineering",
    title: "Microservices Berkinerja Tinggi & Event Streaming",
    subtitle: "Golang (Gin), Node.js, gRPC, RabbitMQ & WebSockets",
    description:
      "Arsitektur terdistribusi non-blocking dengan komunikasi antar-service berlatensi sub-milidetik, didukung pemrosesan antrean pesan asynchronous untuk beban transaksi skala besar.",
    icon: Cpu,
    accentBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-500",
    badgeColor: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
    techs: ["Golang (Gin)", "Node.js", "gRPC", "RabbitMQ", "WebSockets", "Docker"],
    points: [
      "Komunikasi RPC efisien & serialisasi protobuf super cepat",
      "Event-driven decoupled messaging via RabbitMQ queue clusters",
      "Real-time bidirectional data broadcast menggunakan WebSockets",
    ],
    visualStats: {
      label: "Inter-Service Latency",
      value: "< 2ms",
      sublabel: "gRPC Microservices Mesh",
    },
  },
  {
    id: "database",
    step: "02",
    category: "Data & Performance Tuning",
    title: "Optimasi Query Database & Multi-Tier Caching",
    subtitle: "PostgreSQL, MySQL, Indexing Deep-Dive & Redis In-Memory",
    description:
      "Investigasi mendalam EXPLAIN ANALYZE untuk mengeliminasi Sequential Scan pada tabel jutaan baris, menerapkan composite indexing, dan arsitektur Redis caching.",
    icon: Database,
    accentBg: "bg-blue-500/10 border-blue-500/30 text-blue-500",
    badgeColor: "text-blue-500 border-blue-500/30 bg-blue-500/10",
    techs: ["PostgreSQL", "MySQL", "Redis", "EXPLAIN ANALYZE", "Prisma", "Gorm"],
    points: [
      "Penurunan latensi kueri berat hingga 97% pada beban transaksi puncak",
      "Strategi partial & covering indexes pada tabel transaksi e-commerce",
      "In-memory Redis cache invalidation otomatis untuk throughput maksimal",
    ],
    visualStats: {
      label: "Query Execution Time",
      value: "38ms",
      sublabel: "Refactored from 1,450ms (-97%)",
    },
  },
  {
    id: "enterprise-erp",
    step: "03",
    category: "Mission-Critical Production",
    title: "Ekosistem ERP Otomotif & Eksekusi Change Requests (CR)",
    subtitle: "PT. MDEV (Astra Otoparts Group) • Skala Nasional",
    description:
      "Pengembangan fitur baru dan implementasi Change Requests (CR) alur distribusi spare parts otomotif, menjaga kontinuitas bisnis tanpa mengganggu operasional ribuan pengguna harian.",
    icon: Layers,
    accentBg: "bg-amber-500/10 border-amber-500/30 text-amber-500",
    badgeColor: "text-amber-500 border-amber-500/30 bg-amber-500/10",
    techs: ["Next.js 14", "TypeScript", "Enterprise ERP", "Astra Ecosystem", "Incident SLA"],
    points: [
      "Eksekusi Change Request cepat dengan uji kompatibilitas backward ketat",
      "Resolusi insiden produksi proaktif menjamin 99.9% service uptime",
      "Refaktorisasi modul legacy menjadi komponen modular yang mudah dipelihara",
    ],
    visualStats: {
      label: "Production Uptime",
      value: "99.9%",
      sublabel: "Astra Otoparts Network SLA",
    },
  },
  {
    id: "cloud-testing",
    step: "04",
    category: "Cloud, DevOps & Automation",
    title: "Infrastruktur Cloud GCP & Pengujian Otomatis Playwright",
    subtitle: "Google Cloud Platform, Linux Ubuntu, Docker & CI/CD",
    description:
      "Pipeline pengujian end-to-end otomatis menggunakan Playwright untuk menjamin zero-defect deployments, dikombinasikan dengan manajemen server Linux dan deployment cloud GCP.",
    icon: ShieldCheck,
    accentBg: "bg-purple-500/10 border-purple-500/30 text-purple-500",
    badgeColor: "text-purple-500 border-purple-500/30 bg-purple-500/10",
    techs: ["Google Cloud (GCP)", "Playwright E2E", "Linux OS", "Docker", "AWS S3", "CI/CD"],
    points: [
      "Automated Playwright regression testing mencegah regresi kode di produksi",
      "Administrasi sistem Linux (Nginx reverse proxy, SSL, daemon processes)",
      "Arsitektur penyimpanan cloud scalable dengan GCP & AWS S3 buckets",
    ],
    visualStats: {
      label: "E2E Test Pass Rate",
      value: "100%",
      sublabel: "Automated Release Pipeline",
    },
  },
];

export function ParallaxShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressPercentRef = useRef<HTMLSpanElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const isTickingRef = useRef(false);
  const isInViewRef = useRef(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  // High-performance, zero-re-render scroll handler
  const handleScrollProgress = useCallback(() => {
    isTickingRef.current = false;
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScrollable = rect.height - windowHeight;

    if (totalScrollable <= 0) return;

    const currentScroll = -rect.top;
    const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);

    // Direct GPU scaleX update without React DOM reconciliation
    if (progressBarRef.current) {
      progressBarRef.current.style.transform = `scaleX(${progress})`;
    }
    if (progressPercentRef.current) {
      progressPercentRef.current.textContent = `${Math.round(progress * 100)}%`;
    }

    // Determine slide index (0 to 3)
    const segment = 1 / SLIDES.length;
    const nextIndex = Math.min(Math.floor(progress / segment), SLIDES.length - 1);

    if (nextIndex !== activeIndexRef.current) {
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
    }
  }, []);

  // IntersectionObserver to completely halt scroll work when offscreen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isInViewRef.current = entry.isIntersecting;
          if (entry.isIntersecting) {
            handleScrollProgress();
          }
        });
      },
      { rootMargin: "100px 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const onScroll = () => {
      if (!isInViewRef.current) return;
      if (!isTickingRef.current) {
        isTickingRef.current = true;
        window.requestAnimationFrame(handleScrollProgress);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScrollProgress();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [handleScrollProgress]);

  // Auto-play timer (optional user mode for effortless viewing)
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    activeIndexRef.current = index;

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const containerTop = rect.top + scrollTop;
      const totalScrollable = rect.height - window.innerHeight;
      const targetScroll =
        containerTop + (index / (SLIDES.length - 1)) * totalScrollable;

      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    goToSlide((activeIndex + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    goToSlide((activeIndex - 1 + SLIDES.length) % SLIDES.length);
  };

  const currentSlide = SLIDES[activeIndex];
  const CurrentIcon = currentSlide.icon;

  return (
    <section
      id="architecture-showcase"
      ref={containerRef}
      className="relative w-full h-[220vh] border-b border-border/40"
    >
      {/* Pinned Sticky Stage - Clean Solid Backgrounds, Zero Filter Lag */}
      <div className="sticky top-16 md:top-20 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] w-full flex flex-col justify-between overflow-hidden bg-background px-4 sm:px-6 lg:px-8 py-6 select-none">
        {/* Subtle Ambient Static Gradient (Zero expensive dynamic blurs) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] bg-[size:24px_24px]"
        />

        {/* Top Header / HUD */}
        <div className="relative z-10 container mx-auto max-w-5xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Sparkles className="h-3 w-3" />
                <span>Parallax Presentation Mode</span>
              </span>
              <span className="text-[11px] font-medium text-muted-foreground hidden sm:inline">
                Scroll atau gunakan navigasi panah
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground tracking-tight">
              Pilar Arsitektur & Rekayasa Sistem
            </h2>
          </div>

          {/* Interactive Steps & Playback Controls */}
          <div className="flex items-center gap-2">
            {/* Step Pills */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-muted/60 border border-border/60">
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    activeIndex === idx
                      ? "bg-card text-foreground shadow-xs border border-border/80"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  }`}
                  title={slide.title}
                >
                  <span>{slide.step}</span>
                </button>
              ))}
            </div>

            {/* Quick Prev / Next Arrows */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Slide sebelumnya"
                className="p-1.5 rounded-xl border border-border/70 bg-card hover:bg-muted text-foreground transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Slide berikutnya"
                className="p-1.5 rounded-xl border border-border/70 bg-card hover:bg-muted text-foreground transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                aria-label={isAutoPlay ? "Pause auto play" : "Play auto presentation"}
                title={isAutoPlay ? "Jeda auto slide" : "Mulai auto slide"}
                className={`p-1.5 rounded-xl border transition-colors ${
                  isAutoPlay
                    ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-500"
                    : "border-border/70 bg-card hover:bg-muted text-muted-foreground"
                }`}
              >
                {isAutoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Main Pinned Card Display (Fast, Crisp Solid Card Rendering) */}
        <div className="relative z-10 container mx-auto max-w-5xl flex-1 flex items-center justify-center py-4 my-auto">
          <div className="w-full">
            <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 md:p-9 shadow-lg space-y-5 transition-all duration-200">
              {/* Card Top Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50 pb-4">
                <div className="flex items-center gap-3.5">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border shadow-2xs ${currentSlide.accentBg}`}
                  >
                    <CurrentIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                      {currentSlide.category} • Tahap {currentSlide.step}/04
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground tracking-tight leading-snug">
                      {currentSlide.title}
                    </h3>
                  </div>
                </div>

                {/* Visual Stat Pill */}
                <div className="hidden sm:flex flex-col items-end px-4 py-2 rounded-2xl border border-border/60 bg-muted/40 shrink-0">
                  <span className="text-[10px] text-muted-foreground font-semibold uppercase">
                    {currentSlide.visualStats.label}
                  </span>
                  <span className="text-xl font-black text-foreground">
                    {currentSlide.visualStats.value}
                  </span>
                  <span className="text-[10px] text-emerald-500 font-medium">
                    {currentSlide.visualStats.sublabel}
                  </span>
                </div>
              </div>

              {/* Subtitle & Description */}
              <div className="space-y-1.5">
                <h4 className="text-sm sm:text-base font-bold text-foreground">
                  {currentSlide.subtitle}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {currentSlide.description}
                </p>
              </div>

              {/* Key Technical Points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
                {currentSlide.points.map((pt, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-start gap-2 p-2.5 rounded-xl border border-border/40 bg-muted/30"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground font-medium leading-relaxed">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-border/40">
                <span className="text-[11px] font-bold text-muted-foreground uppercase mr-1">
                  Core Stack:
                </span>
                {currentSlide.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-lg bg-muted text-foreground border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Scroll Progress HUD */}
        <div className="relative z-10 container mx-auto max-w-5xl flex items-center justify-between gap-4 pt-3 pb-1 border-t border-border/40 text-xs text-muted-foreground">
          {/* Animated Scroll Prompt */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-foreground">
              {activeIndex < SLIDES.length - 1
                ? "Scroll ke bawah untuk tahap selanjutnya"
                : "Tahap 04 selesai • Lanjut ke riwayat karir"}
            </span>
            <ChevronDown className="h-4 w-4 animate-bounce text-emerald-500" />
          </div>

          {/* Dynamic Progress Bar (Hardware GPU scaleX) */}
          <div className="flex items-center gap-3">
            <span
              ref={progressPercentRef}
              className="text-[11px] font-mono font-bold w-9 text-right"
            >
              0%
            </span>
            <div className="w-24 sm:w-36 h-2 rounded-full bg-muted overflow-hidden border border-border/50">
              <div
                ref={progressBarRef}
                className="h-full w-full bg-emerald-500 origin-left rounded-full"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
