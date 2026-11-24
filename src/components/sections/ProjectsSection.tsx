"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";
import { ProjectThumbnail } from "@/components/ui/project-thumbnail";
import { FolderGit2, ExternalLink, Github, Sparkles, Box, ShieldCheck, Zap } from "lucide-react";

export function ProjectsSection() {
  const [filter, setFilter] = useState<string>("Semua");

  const categories = [
    "Semua",
    "Enterprise",
    "Backend & Microservices",
    "Mobile App",
    "Open Source & Tools",
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === "Semua") return true;
    if (filter === "Enterprise") {
      return (
        proj.badge.includes("Enterprise") ||
        proj.badge.includes("Point-of-Sale") ||
        proj.tags.some((t) => ["PostgreSQL", "Next.js", "Docker"].includes(t))
      );
    }
    if (filter === "Backend & Microservices") {
      return (
        proj.tags.some((t) =>
          ["Golang", "NestJS", "Serverless", "REST API", "Docker"].includes(t)
        ) || proj.badge.includes("Microservices")
      );
    }
    if (filter === "Mobile App") {
      return proj.tags.some((t) =>
        ["Flutter", "React Native", "Dart", "C++ Native"].includes(t)
      );
    }
    if (filter === "Open Source & Tools") {
      return (
        proj.badge.includes("Open Source") ||
        proj.badge.includes("Database Tool") ||
        proj.tags.some((t) => ["NPM Registry", "Query Profiler"].includes(t))
      );
    }
    return true;
  });

  return (
    <section id="projects" className="py-14 sm:py-20 border-b border-border/40 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Box className="h-4 w-4" />
              <span>LEGENDARY INVENTORY & ARMORY OF ARTIFACTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight flex items-center gap-2.5">
              Armory: Proyek & Sistem Nyata
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-500 font-mono font-bold">
                12+ WEAPONS / APPS
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Katalog sistem enterprise, cloud microservices, mobile apps Flutter, dan library open-source di GitHub yang telah diverifikasi di medan perang produksi.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-muted/60 border border-border/50 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${filter === cat
                  ? "bg-card text-emerald-500 shadow-xs border border-emerald-500/40"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Web Mockup Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-5 sm:p-6 shadow-xs hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 space-y-5 group relative overflow-hidden"
            >
              {/* Top corner inventory item index */}
              <div className="absolute top-2 right-3 font-mono text-[10px] text-muted-foreground/40 font-bold select-none">
                SLOT #{String(idx + 1).padStart(2, "0")}
              </div>

              {/* Web Browser Mockup Thumbnail */}
              <ProjectThumbnail
                title={proj.title}
                domain={proj.domain}
                mockupType={proj.mockupType}
                badge={proj.badge}
              />

              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                      {proj.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground border border-border/50 group-hover:border-emerald-500/30 group-hover:text-foreground transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-border/50">
                {proj.links && proj.links.map((link, lIdx) => {
                  const isGithub = link.url.includes("github.com");
                  const isNpm = link.url.includes("npmjs.com");

                  return (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 min-w-[130px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all hover:scale-[1.02] ${isGithub
                        ? "bg-muted/80 text-foreground border border-border/70 hover:bg-muted hover:border-emerald-500/40"
                        : "bg-emerald-600 text-white hover:bg-emerald-500 shadow-xs"
                        }`}
                    >
                      {isGithub ? (
                        <Github className="h-3.5 w-3.5" />
                      ) : isNpm ? (
                        <Box className="h-3.5 w-3.5" />
                      ) : (
                        <ExternalLink className="h-3.5 w-3.5" />
                      )}
                      <span>{link.label.toUpperCase()}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
