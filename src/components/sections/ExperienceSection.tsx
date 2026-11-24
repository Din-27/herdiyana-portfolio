"use client";

import React from "react";
import { EXPERIENCES } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";
import { 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  Building, 
  CheckCircle2, 
  Trophy, 
  Crosshair,
  Award,
  Sparkles
} from "lucide-react";

export function ExperienceSection() {
  const questRanks = [
    { rank: "SS-RANK QUEST", label: "Enterprise Scale Lead", reward: "+12,500 XP" },
    { rank: "S-RANK QUEST", label: "Fullstack Architecture", reward: "+9,800 XP" },
    { rank: "A-RANK QUEST", label: "Core Foundation", reward: "+6,500 XP" },
  ];

  return (
    <section id="experience" className="py-14 sm:py-20 border-b border-border/40 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Trophy className="h-4 w-4" />
              <span>CAREER QUEST CAMPAIGN & PROVEN RAIDS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight flex items-center gap-2.5">
              Riwayat Karir: Campaign Log
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 font-mono font-bold">
                4+ YEARS VETERAN
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Daftar misi enterprise yang telah dituntaskan (100% Cleared) dengan tantangan arsitektur backend, refaktorisasi basis kode skala besar, dan deployment production real-time.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 font-mono text-xs font-bold self-start sm:self-auto">
            <ShieldCheck className="h-4 w-4" />
            <span>ALL QUESTS CLEARED</span>
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative pl-3 sm:pl-6 border-l-2 border-emerald-500/30 space-y-8 sm:space-y-10">
          {EXPERIENCES.map((exp, idx) => {
            const questMeta = questRanks[idx] || { rank: "QUEST COMPLETED", label: "Production Ops", reward: "+5,000 XP" };

            return (
              <div key={idx} className="relative group">
                {/* Timeline Bullet Node with Radar Pulse */}
                <div className="absolute -left-[19px] sm:-left-[31px] top-1.5 flex items-center justify-center">
                  <span className="absolute h-4 w-4 rounded-full bg-emerald-500/40 animate-ping" />
                  <div className="h-4 w-4 rounded-full border-2 border-background bg-emerald-500 shadow-xs group-hover:scale-125 group-hover:ring-4 group-hover:ring-emerald-500/20 transition-all duration-200" />
                </div>

                <div className="rounded-2xl border border-border/60 bg-card p-5 sm:p-7 shadow-xs hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-4 relative overflow-hidden">
                  {/* Top Gamer Ribbon */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border/50">
                    <div className="flex items-center gap-2 font-mono text-xs">
                      <span className="px-2 py-0.5 rounded-md font-black bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                        {questMeta.rank}
                      </span>
                      <span className="text-muted-foreground text-[11px] hidden sm:inline">
                        MISSION OBJECTIVE: {questMeta.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="text-amber-500 font-bold">{questMeta.reward}</span>
                      <Badge variant="outline" className="text-[10px] font-bold border-border/80">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight group-hover:text-emerald-500 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        <Building className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground font-mono">
                      <Badge variant="secondary" className="gap-1 font-semibold text-[11px] sm:text-xs">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </Badge>
                      <span className="flex items-center gap-1 font-medium text-xs">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  {exp.technologies && (
                    <div className="pt-2 flex flex-wrap gap-1.5 border-t border-border/40">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-muted/80 text-muted-foreground border border-border/40 group-hover:border-emerald-500/30 group-hover:text-foreground transition-all duration-150"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
