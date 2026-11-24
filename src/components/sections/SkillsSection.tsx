"use client";

import React from "react";
import { SKILLS } from "@/data/portfolioData";
import {
  Layout,
  Smartphone,
  Server,
  Database,
  Cloud,
  Swords,
  Flame,
} from "lucide-react";

export function SkillsSection() {
  const skillTrees = [
    {
      title: "Frontend & UI Engineering",
      icon: Layout,
      skills: SKILLS.frontend,
      level: "LVL 92 • MASTER",
      xpBar: 92,
      description: "Reactive component-driven architecture, Next.js App Router, SSR/CSR, and 60-120fps physics animations.",
      accent: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30",
      barColor: "bg-emerald-500",
      stats: { Agility: "+45", Rendering: "120 FPS", "Bundle Size": "<85kB" }
    },
    {
      title: "Mobile Native & Cross-Platform",
      icon: Smartphone,
      skills: SKILLS.mobile,
      level: "LVL 88 • EXPERT",
      xpBar: 88,
      description: "Flutter Dart reactive state machines, C++ Native audio DSP bindings, Kotlin Android & Swift bridges.",
      accent: "text-teal-500 bg-teal-500/10 border-teal-500/30",
      barColor: "bg-teal-500",
      stats: { "Platform Sync": "100%", "Native Bridge": "JNI/FFI", Memory: "Leak-Free" }
    },
    {
      title: "Backend Architecture & High-Throughput",
      icon: Server,
      skills: SKILLS.backend,
      level: "LVL 96 • ARCHITECT",
      xpBar: 96,
      description: "Golang microservices, NestJS, gRPC inter-service contracts, RabbitMQ event brokers, & Redis clusters.",
      accent: "text-blue-500 bg-blue-500/10 border-blue-500/30",
      barColor: "bg-blue-500",
      stats: { Throughput: "42k req/s", Latency: "12ms", Resiliency: "Circuit Breaker" }
    },
    {
      title: "Database Tuning, Sharding & Cache",
      icon: Database,
      skills: SKILLS.databases,
      level: "LVL 94 • SPECIALIST",
      xpBar: 94,
      description: "PostgreSQL master-replica setups, PLpgSQL triggers, deep EXPLAIN ANALYZE index tuning, and multi-tier caching.",
      accent: "text-amber-500 bg-amber-500/10 border-amber-500/30",
      barColor: "bg-amber-500",
      stats: { "Query Speed": "1.8ms", "Index Hits": "99.4%", "Cache Hit Ratio": "98.7%" }
    },
    {
      title: "Cloud, DevOps, Linux & Automation",
      icon: Cloud,
      skills: SKILLS.cloudDevops,
      level: "LVL 86 • OPERATOR",
      xpBar: 86,
      description: "Docker multi-stage builds, GCP Cloud Run, AWS S3, Linux system hardening, and automated Playwright E2E testing.",
      accent: "text-purple-500 bg-purple-500/10 border-purple-500/30",
      barColor: "bg-purple-500",
      stats: { Uptime: "99.98%", "Build Pipeline": "3.5m", Isolation: "Docker / OCI" }
    },
  ];

  return (
    <section id="skills" className="py-14 sm:py-20 border-b border-border/40 relative overflow-hidden">
      {/* Background RPG Grid Motif */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Swords className="h-4 w-4" />
              <span>SKILL TREE & MASTERY ATTRIBUTES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight flex items-center gap-3">
              Keahlian Teknis: RPG Skill Tree
              <span className="hidden sm:inline-flex text-xs px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 font-mono font-bold">
                CLASS: ARCHITECT
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Setiap keahlian telah diasah melalui 4+ tahun pertempuran kode di sistem enterprise Astra Otoparts Group dan repositori open-source.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border/80 bg-card font-mono text-xs shadow-xs self-start sm:self-auto">
            <Flame className="h-4 w-4 text-rose-500 animate-pulse" />
            <span className="text-muted-foreground">TOTAL TECH:</span>
            <span className="font-bold text-foreground">35+ STACKS</span>
          </div>
        </div>

        {/* Skill Tree Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {skillTrees.map((tree, idx) => {
            const Icon = tree.icon;
            const isFullWidth = idx === skillTrees.length - 1;

            return (
              <div
                key={idx}
                className={`group rounded-2xl border border-border/60 bg-card p-6 shadow-xs hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between ${
                  isFullWidth ? "md:col-span-2" : ""
                }`}
              >
                {/* Top Corner Level Tag */}
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded-md border border-border bg-muted/80 text-foreground">
                    {tree.level}
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Title & Icon */}
                  <div className="flex items-start gap-3.5 pr-20">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${tree.accent} font-bold group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-xs`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground tracking-tight">
                        {tree.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {tree.description}
                      </p>
                    </div>
                  </div>

                  {/* XP Mastery Progress Bar */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-[11px] font-mono font-bold">
                      <span className="text-muted-foreground">MASTERY EXP</span>
                      <span className="text-emerald-500">{tree.xpBar}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted/80 rounded-full overflow-hidden border border-border/60">
                      <div
                        className={`h-full ${tree.barColor} rounded-full transition-all duration-1000 group-hover:brightness-125`}
                        style={{ width: `${tree.xpBar}%` }}
                      />
                    </div>
                  </div>

                  {/* Skill Badge Nodes */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {tree.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-muted/60 text-muted-foreground border border-border/50 group-hover:border-emerald-500/30 group-hover:text-foreground transition-all duration-200 hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RPG Attributes Stats Footer */}
                <div className="mt-5 pt-3.5 border-t border-border/50 grid grid-cols-3 gap-2 text-center font-mono">
                  {Object.entries(tree.stats).map(([k, v]) => (
                    <div key={k} className="p-1.5 rounded-lg bg-muted/40 border border-border/30">
                      <div className="text-[9px] text-muted-foreground uppercase tracking-wider">{k}</div>
                      <div className="text-xs font-black text-foreground">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
