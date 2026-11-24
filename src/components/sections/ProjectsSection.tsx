"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";
import { FolderGit2, ExternalLink, Github, Sparkles } from "lucide-react";

export function ProjectsSection() {
  const [filter, setFilter] = useState<string>("Semua");

  const categories = ["Semua", "Enterprise", "Backend & Microservices", "Open Source"];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === "Semua") return true;
    if (filter === "Enterprise") {
      return (
        proj.badge.includes("Enterprise") ||
        proj.tags.some((t) => ["PostgreSQL", "Next.js", "ERP"].includes(t))
      );
    }
    if (filter === "Backend & Microservices") {
      return (
        proj.tags.some((t) =>
          ["Golang", "gRPC", "RabbitMQ", "Microservices", "Docker"].includes(t)
        ) || proj.badge.includes("Microservices")
      );
    }
    if (filter === "Open Source") {
      return proj.badge.includes("Open Source") || proj.badge.includes("Community");
    }
    return true;
  });

  return (
    <section id="projects" className="py-14 sm:py-20 border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <FolderGit2 className="h-4 w-4" />
              <span>Portfolio Unggulan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight">
              Proyek Nyata & Sistem Produksi
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Solusi cloud point-of-sale, manajemen tugas skala enterprise, microservices Golang, bot otomatisasi, dan modul open-source.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-muted/60 border border-border/50 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                  filter === cat
                    ? "bg-card text-foreground shadow-xs border border-border/80"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {filteredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all duration-200 hover:-translate-y-1 space-y-5 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/5"
                  >
                    {proj.badge}
                  </Badge>
                  <Sparkles className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-emerald-500 transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-muted-foreground font-medium -mt-1">
                  {proj.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-border/50">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-muted text-muted-foreground group-hover:border-border/60 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {proj.links && (
                  <div className="flex items-center gap-2 pt-1">
                    {proj.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-border px-3.5 py-1.5 text-xs font-bold text-foreground hover:bg-muted/80 hover:border-foreground/30 transition-all active:scale-95"
                      >
                        {link.label === "GitHub" ? (
                          <Github className="h-3.5 w-3.5 text-muted-foreground" />
                        ) : (
                          <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                        )}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
