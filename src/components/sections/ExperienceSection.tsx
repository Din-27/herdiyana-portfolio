"use client";

import React from "react";
import { EXPERIENCES } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-14 sm:py-20 border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 max-w-5xl">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Briefcase className="h-4 w-4" />
            <span>Riwayat Karir Profesional</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight">
            Pengalaman Kerja Terbukti (4+ Tahun)
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl leading-relaxed">
            Membangun arsitektur enterprise skala besar, refaktorisasi basis kode, integrasi payment gateway, dan optimasi query database transaksi tinggi.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-3 sm:pl-6 border-l-2 border-border/70 space-y-8 sm:space-y-10">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[19px] sm:-left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-background bg-emerald-500 shadow-xs group-hover:scale-125 group-hover:ring-4 group-hover:ring-emerald-500/20 transition-all duration-200" />

              <div className="rounded-2xl border border-border/60 bg-card p-5 sm:p-7 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all duration-200 hover:-translate-y-1 space-y-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-border/50 pb-4">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      <Building className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="secondary" className="gap-1 font-semibold text-[11px] sm:text-xs">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </Badge>
                    <span className="flex items-center gap-1 font-medium text-xs">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      {exp.location}
                    </span>
                    <Badge variant="outline" className="text-[10px] font-bold border-border/80">
                      {exp.type}
                    </Badge>
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
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-muted/80 text-muted-foreground border border-border/40 hover:text-foreground transition-colors"
                      >
                        {tech}
                      </span>
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
