"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO, METRICS } from "@/data/portfolioData";
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Building2,
  TrendingUp,
  Layers,
  ShieldCheck,
  Zap,
  Code2,
  Terminal,
  Sparkles,
  ChevronDown,
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

  // Typewriter effect for animated roles
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          // Pause at full text
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
    <section id="about" className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-border/40 overflow-hidden">
      {/* Ambient Radial Spotlight & Moving Mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-b from-emerald-500/20 via-primary/5 to-transparent blur-3xl opacity-75 dark:opacity-45 animate-pulse-subtle"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-0 w-[350px] h-[350px] bg-gradient-to-l from-blue-500/10 to-transparent blur-3xl opacity-50"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-9 max-w-5xl">
        {/* Status, Location & Quick Terminal Badge */}
        <div className="flex flex-wrap items-center gap-2.5 animate-fade-in">
          {/* Animated Status Pill with Radar Wave */}
          <span className="relative inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 backdrop-blur-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            {PERSONAL_INFO.status}
          </span>

          <span className="text-xs text-muted-foreground flex items-center gap-1.5 font-medium px-3 py-1 rounded-full border border-border/50 bg-card/60 backdrop-blur-xs">
            <MapPin className="h-3.5 w-3.5 text-emerald-500" />
            {PERSONAL_INFO.location}
          </span>

          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground font-mono px-3 py-1 rounded-full border border-border/40 bg-muted/40">
            <Terminal className="h-3 w-3 text-primary" />
            <span>git clone din-27/portfolio</span>
          </span>
        </div>

        {/* Main Headline & Animated Typewriter Role */}
        <div className="space-y-4 max-w-4xl animate-fade-in-up">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Fullstack & Software Engineering</span>
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
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
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-foreground bg-card/80 border border-border/70 px-3.5 py-1.5 rounded-xl shadow-2xs backdrop-blur-xs">
            <Building2 className="h-4 w-4 text-emerald-500" />
            <span className="text-muted-foreground">Aktif bekerja di:</span>
            <strong className="text-foreground font-bold">PT. MDEV (Astra Otoparts Group)</strong>
          </div>

          {/* Professional Summary */}
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl pt-1">
            {PERSONAL_INFO.summary}
          </p>

          {/* Interactive Floating Quick-Tech Chips */}
          <div className="pt-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mr-1">
              Tech Radar:
            </span>
            {QUICK_STACK.map((tech) => (
              <span
                key={tech.name}
                className={`text-xs font-semibold px-2.5 py-1 rounded-lg border border-border/60 bg-card/60 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs cursor-default ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons & Social Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3 shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all duration-200 active:scale-95 group"
          >
            <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span>Hubungi via WhatsApp</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-card border border-border hover:border-foreground/30 text-foreground font-bold text-xs sm:text-sm px-6 py-3 shadow-xs hover:bg-muted/70 transition-all duration-200 active:scale-95"
          >
            <Mail className="h-4 w-4" />
            <span>Kirim Email</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-2 sm:pl-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-11 rounded-xl border border-border/80 bg-card/80 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 hover:bg-muted/50 transition-all duration-200 hover:-translate-y-0.5"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-11 rounded-xl border border-border/80 bg-card/80 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 hover:bg-muted/50 transition-all duration-200 hover:-translate-y-0.5"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={PERSONAL_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-11 rounded-xl border border-border/80 bg-card/80 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 hover:bg-muted/50 transition-all duration-200 hover:-translate-y-0.5"
              title="Portfolio Website"
              aria-label="Portfolio Website"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Responsive Metrics / Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-border/40">
          {METRICS.map((metric, idx) => {
            const Icon = metricIcons[idx % metricIcons.length];
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between p-4 sm:p-5 rounded-2xl border border-border/60 bg-card/70 backdrop-blur-xs hover:border-emerald-500/40 hover:bg-card hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between pb-3">
                  <span className="text-[11px] sm:text-xs font-semibold text-muted-foreground line-clamp-1">
                    {metric.label}
                  </span>
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-foreground tracking-tight">
                  {metric.value}
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll Down Parallax Prompt */}
        <div className="flex justify-center pt-2">
          <a
            href="#architecture-showcase"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border/60 bg-card/60 hover:border-emerald-500/50 hover:bg-card text-xs font-semibold text-muted-foreground hover:text-foreground transition-all duration-200 group shadow-2xs"
          >
            <span>Scroll ke bawah untuk eksplorasi arsitektur</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 group-hover:translate-y-0.5 transition-transform">
              <ChevronDown className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
