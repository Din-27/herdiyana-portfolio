"use client";

import React from "react";
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
} from "lucide-react";

export function HeroSection() {
  const metricIcons = [TrendingUp, Layers, ShieldCheck, Zap];

  return (
    <section id="about" className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-border/40 overflow-hidden">
      {/* Ambient Radial Spotlight Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-emerald-500/15 via-primary/5 to-transparent blur-3xl opacity-75 dark:opacity-40"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 max-w-5xl">
        {/* Status & Location Badges */}
        <div className="flex flex-wrap items-center gap-2.5 animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 backdrop-blur-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {PERSONAL_INFO.status}
          </span>

          <span className="text-xs text-muted-foreground flex items-center gap-1.5 font-medium px-3 py-1 rounded-full border border-border/50 bg-card/60 backdrop-blur-xs">
            <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
            {PERSONAL_INFO.location}
          </span>
        </div>

        {/* Main Headline & Role */}
        <div className="space-y-4 max-w-4xl animate-fade-in-up">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.12]">
            Herdiyana Firmansyah
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-base sm:text-xl md:text-2xl font-bold text-muted-foreground">
            <span>{PERSONAL_INFO.title}</span>
            <span className="hidden sm:inline text-muted-foreground/40">•</span>
            <div className="inline-flex items-center gap-1.5 text-foreground bg-muted/60 dark:bg-card px-2.5 py-1 rounded-lg border border-border/60 text-xs sm:text-sm md:text-base font-semibold">
              <Building2 className="h-4 w-4 text-emerald-500" />
              <span>PT. MDEV (Astra Otoparts Group)</span>
            </div>
          </div>

          {/* Professional Summary */}
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl pt-2">
            {PERSONAL_INFO.summary}
          </p>
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-card/60 hover:border-emerald-500/50 hover:bg-card text-xs font-semibold text-muted-foreground hover:text-foreground transition-all duration-200 group"
          >
            <span>Scroll ke bawah untuk eksplorasi arsitektur</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
