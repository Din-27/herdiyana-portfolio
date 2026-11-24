"use client";

import React from "react";
import { EDUCATION, CERTIFICATIONS } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, ExternalLink, CheckCircle2, ShieldCheck } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-14 sm:py-20 border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 max-w-5xl">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <GraduationCap className="h-4 w-4" />
            <span>Pendidikan & Kredensial Resmi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight">
            Pendidikan Formal & Sertifikasi
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Landasan akademis ilmu sistem informasi dikombinasikan dengan sertifikasi internasional freeCodeCamp dan bootcamp intensif.
          </p>
        </div>

        {/* Formal Education */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-emerald-500" />
            <span>Pendidikan Formal</span>
          </h3>

          <div className="space-y-4">
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all duration-200 hover:-translate-y-1 space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h4 className="text-base sm:text-lg font-bold text-foreground">
                    {edu.degree}
                  </h4>
                  <Badge variant="secondary" className="text-xs w-fit font-semibold">
                    {edu.period}
                  </Badge>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  {edu.institution} • {edu.location}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-4 pt-6 border-t border-border/40">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <Award className="h-4 w-4 text-emerald-500" />
            <span>Sertifikasi Resmi & Kredensial Terverifikasi</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-border/60 bg-card p-5 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4" />
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-semibold px-2 py-0.5 rounded bg-muted">
                      {cert.hours}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-foreground leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {cert.title}
                  </h4>
                </div>

                {cert.verificationUrl && (
                  <div className="pt-3 border-t border-border/50">
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <span>Verifikasi Kredensial</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
