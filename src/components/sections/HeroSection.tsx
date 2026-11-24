"use client";

import React, { useState, useEffect, useRef } from "react";
import { PERSONAL_INFO, METRICS } from "@/data/portfolioData";
import {
  ExternalLink,
  Github,
  Linkedin,
  MapPin,
  Building2,
  TrendingUp,
  Layers,
  ShieldCheck,
  Zap,
  Code2,
  Terminal,
  Sparkles,
  ChevronDown,
  Send,
  FolderGit2,
  Cpu,
  Activity,
  Flame,
  Radio,
  Gamepad2,
  Fingerprint
} from "lucide-react";

const ROLES = [
  "Fullstack Developer & Software Engineer",
  "Enterprise ERP & Change Request Specialist",
  "Golang & Node.js Microservices Engineer",
  "High-Volume SQL Query Tuning Specialist",
];

const QUICK_STACK = [
  { name: "Next.js 14", color: "hover:border-foreground/40 hover:text-foreground" },
  { name: "Golang (Gin)", color: "hover:border-cyan-500/50 hover:text-cyan-500" },
  { name: "PostgreSQL", color: "hover:border-blue-500/50 hover:text-blue-500" },
  { name: "NestJS", color: "hover:border-red-500/50 hover:text-red-500" },
  { name: "Docker", color: "hover:border-sky-500/50 hover:text-sky-500" },
  { name: "Flutter", color: "hover:border-teal-500/50 hover:text-teal-500" },
  { name: "React Native", color: "hover:border-indigo-500/50 hover:text-indigo-500" },
  { name: "Playwright", color: "hover:border-emerald-500/50 hover:text-emerald-500" },
];

export function HeroSection() {
  const metricIcons = [TrendingUp, Layers, ShieldCheck, Zap];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // 3D Perspective Mouse Tracking for the unified full section card
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 30, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt across the whole section card (-4deg to +4deg)
    const rotX = ((y - centerY) / centerY) * -4;
    const rotY = ((x - centerX) / centerX) * 4;

    setRotateX(rotX);
    setRotateY(rotY);

    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.28,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  // Typewriter effect for animated roles
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="about" className="relative pt-8 sm:pt-14 pb-14 sm:pb-20 border-b border-border/40 overflow-hidden">
      {/* Ambient Radial Spotlight & Moving Mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-emerald-500/20 via-primary/5 to-transparent blur-3xl opacity-75 dark:opacity-45"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
        {/* Full Section 3D Holographic Interactive Command Center Card */}
        <div style={{ perspective: 1200 }} className="w-full">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transformStyle: "preserve-3d",
            }}
            className="relative rounded-3xl border border-emerald-500/30 bg-card/90 backdrop-blur-xl p-6 sm:p-10 md:p-12 shadow-2xl transition-transform duration-200 ease-out will-change-transform overflow-hidden group space-y-8"
          >
            {/* Dynamic Iridescent Glare Layer following cursor across the whole card */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle 600px at ${glarePos.x}% ${glarePos.y}%, rgba(16, 185, 129, ${glarePos.opacity}) 0%, rgba(59, 130, 246, ${
                  glarePos.opacity * 0.6
                }) 40%, transparent 80%)`,
              }}
            />

            {/* Futuristic HUD Top Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-5 font-mono text-xs">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="relative inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>{PERSONAL_INFO.status}</span>
                </span>

                <span className="text-muted-foreground flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/50 bg-muted/40">
                  <MapPin className="h-3.5 w-3.5 text-emerald-500" />
                  {PERSONAL_INFO.location}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-muted-foreground font-mono px-2.5 py-1 rounded-lg border border-border/60 bg-muted/50 hidden sm:inline-flex items-center gap-1.5">
                  <Fingerprint className="h-3.5 w-3.5 text-emerald-500" />
                  <span>ID: HF-MDEV-2026</span>
                </span>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 flex items-center gap-1">
                  <Radio className="h-3 w-3 animate-pulse text-emerald-500" />
                  <span>SYS: NOMINAL</span>
                </span>
              </div>
            </div>

            {/* Main Center Grid: Headline, Dynamic Typewriter & Verified Engineer Badge */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="space-y-4 lg:col-span-8">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>FULLSTACK & ENTERPRISE ARCHITECT</span>
                  </span>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.08]">
                    Herdiyana Firmansyah
                  </h1>
                </div>

                {/* Animated Dynamic Role Subtitle */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-base sm:text-xl md:text-2xl font-bold min-h-[2.5rem]">
                  <div className="flex items-center gap-2 text-foreground font-mono">
                    <Code2 className="h-5 w-5 text-emerald-500 shrink-0" />
                    <span className="text-emerald-600 dark:text-emerald-400">
                      {displayText}
                    </span>
                    <span className="animate-pulse text-emerald-500 font-normal">|</span>
                  </div>
                </div>

                {/* Company Affiliation Banner */}
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-foreground bg-muted/50 border border-border/70 px-3.5 py-1.5 rounded-xl shadow-2xs backdrop-blur-xs font-mono">
                  <Building2 className="h-4 w-4 text-emerald-500" />
                  <span className="text-muted-foreground">Aktif bekerja di:</span>
                  <strong className="text-foreground font-bold">PT. MDEV (Astra Otoparts Group)</strong>
                </div>

                {/* Professional Summary */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl pt-1">
                  {PERSONAL_INFO.summary}
                </p>

                {/* Interactive Tech Radar Chips */}
                <div className="pt-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="text-[11px] font-mono font-bold text-muted-foreground uppercase tracking-wider mr-1">
                    Tech Radar:
                  </span>
                  {QUICK_STACK.map((tech) => (
                    <span
                      key={tech.name}
                      className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-lg border border-border/60 bg-muted/40 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs cursor-default ${tech.color}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side: Animated Monogram & Live Telemetry Hologram Pillar */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl border border-emerald-500/20 bg-muted/30 relative overflow-hidden space-y-4">
                <div className="absolute top-2 right-2 text-[9px] font-mono text-emerald-500/60 uppercase">
                  HOLO-CORE V2.4
                </div>

                {/* Animated Glowing Monogram Shield */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute h-28 w-28 rounded-full bg-emerald-500/20 blur-xl animate-pulse" />
                  <div className="h-24 w-24 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-emerald-400 p-[2px] shadow-lg">
                    <div className="h-full w-full rounded-2xl bg-card flex flex-col items-center justify-center font-black">
                      <span className="text-2xl tracking-tighter text-foreground">HF</span>
                      <span className="text-[9px] font-mono font-bold text-emerald-500 tracking-widest">
                        ARCHITECT
                      </span>
                    </div>
                  </div>
                </div>

                {/* Live System Stats within the Card */}
                <div className="w-full space-y-2 pt-1 font-mono text-xs">
                  <div className="flex justify-between p-2 rounded-lg bg-card/80 border border-border/50">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Activity className="h-3.5 w-3.5 text-emerald-500" />
                      Uptime
                    </span>
                    <span className="font-bold text-emerald-500">99.98%</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-card/80 border border-border/50">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Cpu className="h-3.5 w-3.5 text-blue-500" />
                      Latency
                    </span>
                    <span className="font-bold text-foreground">12ms (p99)</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-card/80 border border-border/50">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-amber-500" />
                      Clearance
                    </span>
                    <span className="font-bold text-foreground">SS-RANK</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons & Social Links Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/50">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs sm:text-sm px-6 py-3 shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all duration-200 active:scale-95 group"
                >
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span>Kirim Pesan (SMTP)</span>
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-card border border-border hover:border-emerald-500/50 text-foreground font-mono font-bold text-xs sm:text-sm px-6 py-3 shadow-xs hover:bg-muted/70 transition-all duration-200 active:scale-95"
                >
                  <FolderGit2 className="h-4 w-4 text-emerald-500" />
                  <span>Buka Armory Proyek</span>
                </a>
              </div>

              {/* Social Profiles */}
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl border border-border/80 bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-emerald-500/50 hover:bg-muted transition-all duration-200 hover:-translate-y-0.5"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl border border-border/80 bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-emerald-500/50 hover:bg-muted transition-all duration-200 hover:-translate-y-0.5"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={PERSONAL_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl border border-border/80 bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-emerald-500/50 hover:bg-muted transition-all duration-200 hover:-translate-y-0.5"
                  title="Portfolio Website"
                  aria-label="Portfolio Website"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Embedded 4-Col Metrics within the Section Card */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-border/50">
              {METRICS.map((metric, idx) => {
                const Icon = metricIcons[idx % metricIcons.length];
                return (
                  <div
                    key={idx}
                    className="flex flex-col justify-between p-3.5 sm:p-4 rounded-xl border border-border/60 bg-muted/30 hover:border-emerald-500/40 hover:bg-muted/50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between pb-2">
                      <span className="text-[11px] font-mono font-semibold text-muted-foreground line-clamp-1">
                        {metric.label}
                      </span>
                      <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                        <Icon className="h-3 w-3" />
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-foreground tracking-tight font-mono">
                      {metric.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll Down Parallax Prompt */}
        <div className="flex justify-center pt-6">
          <a
            href="#live-telemetry"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border/60 bg-card/60 hover:border-emerald-500/50 hover:bg-card text-xs font-mono font-semibold text-muted-foreground hover:text-foreground transition-all duration-200 group shadow-2xs"
          >
            <span>Luncurkan Simulator Arsitektur Live</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 group-hover:translate-y-0.5 transition-transform">
              <ChevronDown className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
