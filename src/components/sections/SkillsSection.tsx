"use client";

import React from "react";
import { SKILLS } from "@/data/portfolioData";
import {
  Wrench,
  Layout,
  Smartphone,
  Server,
  Database,
  Cloud,
  Sparkles,
} from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: Layout,
      skills: SKILLS.frontend,
      description:
        "Modern reactive web applications, component-driven design, state management, and responsive CSS frameworks.",
      accent: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30",
    },
    {
      title: "Mobile Native & Cross-Platform",
      icon: Smartphone,
      skills: SKILLS.mobile,
      description:
        "Flutter (Dart), React Native, native Android (Kotlin) & iOS (Swift), serta integrasi audio low-level C++ Native.",
      accent: "text-teal-500 bg-teal-500/10 border-teal-500/30",
    },
    {
      title: "Backend & Microservices",
      icon: Server,
      skills: SKILLS.backend,
      description:
        "High-throughput REST APIs, Golang (Gin), NestJS, Python FastAPI, gRPC inter-service communication, dan message queues.",
      accent: "text-blue-500 bg-blue-500/10 border-blue-500/30",
    },
    {
      title: "Databases, Tuning & Caching",
      icon: Database,
      skills: SKILLS.databases,
      description:
        "PostgreSQL, MySQL, PLpgSQL functions, deep EXPLAIN ANALYZE index tuning, dan Redis multi-tier caching.",
      accent: "text-amber-500 bg-amber-500/10 border-amber-500/30",
    },
    {
      title: "Cloud, DevOps & Automation",
      icon: Cloud,
      skills: SKILLS.cloudDevops,
      description:
        "Docker containerization, Google Cloud (GCP), AWS S3, serverless compute, Linux server administration, dan Playwright E2E.",
      accent: "text-purple-500 bg-purple-500/10 border-purple-500/30",
    },
  ];

  return (
    <section id="skills" className="py-14 sm:py-20 border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 max-w-5xl">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Wrench className="h-4 w-4" />
            <span>Keahlian & Kemampuan Teknis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight">
            Teknologi & Stack Produksi (Verified via GitHub)
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Kombinasi teknologi modern yang digunakan secara aktif dalam proyek enterprise di PT. MDEV (Astra Otoparts Group) dan repositori open-source GitHub.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            const isFullWidth = idx === skillCategories.length - 1;

            return (
              <div
                key={idx}
                className={`group rounded-2xl border border-border/60 bg-card p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all duration-200 hover:-translate-y-1 space-y-4 ${
                  isFullWidth ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${cat.accent} font-bold group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-semibold px-3 py-1 rounded-lg bg-muted text-foreground border border-border/50 hover:border-emerald-500/50 hover:bg-card hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-150 cursor-default"
                    >
                      {skill}
                    </span>
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
