"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Github,
  Linkedin,
  ExternalLink,
  Clock,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailSubject = encodeURIComponent(
      subject
        ? `[Portfolio Inquiry] ${subject} - ${name}`
        : `[Portfolio Inquiry] Pesan Baru dari ${name}`
    );

    const mailBody = encodeURIComponent(
      `Halo Herdiyana,\n\nNama: ${name}\nEmail Pengirim: ${email}\nTopik / Subjek: ${subject || "Kolaborasi / Proyek"}\n\nPesan:\n${message}\n\n---\nDikirim melalui formulir kontak portfolio herdiyana.vercel.app`
    );

    // Langsung arahkan ke email client pengguna
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailSubject}&body=${mailBody}`;
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 max-w-5xl">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Mail className="h-4 w-4" />
            <span>Mulai Kolaborasi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight">
            Hubungi Saya
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Tertarik bekerja sama untuk proyek fullstack, konsultasi arsitektur sistem enterprise, atau peluang karir? Kirim pesan langsung melalui formulir di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Information & Social Profiles Column */}
          <div className="space-y-4">
            {/* Availability & Response Time Card */}
            <div className="p-5 sm:p-6 rounded-2xl border border-border/70 bg-card space-y-4 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {PERSONAL_INFO.status}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                Siap Berdiskusi Mengenai Proyek & Tantangan Teknis Anda
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Silakan isi formulir pesan di sebelah kanan. Pengiriman pesan akan langsung diarahkan ke email resmi saya dan direspon sesegera mungkin.
              </p>

              <div className="pt-2 border-t border-border/50 flex items-center gap-2 text-xs text-muted-foreground font-medium">
                <Clock className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Waktu respon standar: dalam 1x24 jam kerja</span>
              </div>
            </div>

            {/* Location & Work Model Card */}
            <div className="p-5 rounded-2xl border border-border/60 bg-card/70 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <MapPin className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Lokasi & Model Kerja</span>
              </div>
              <div className="text-sm font-bold text-foreground">
                {PERSONAL_INFO.location}
              </div>
              <p className="text-xs text-muted-foreground">
                Terbuka untuk kolaborasi <span className="text-foreground font-semibold">Remote</span>, <span className="text-foreground font-semibold">Hybrid</span>, maupun <span className="text-foreground font-semibold">On-Site</span> (Jabodetabek & Bandung).
              </p>
            </div>

            {/* Professional Profiles Row */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-border/70 bg-card hover:border-foreground/30 hover:bg-muted/60 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <span className="text-xs font-bold text-foreground">GitHub</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-border/70 bg-card hover:border-foreground/30 hover:bg-muted/60 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="h-4 w-4 text-blue-500 group-hover:text-blue-600 transition-colors" />
                  <span className="text-xs font-bold text-foreground">LinkedIn</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Quick Message Form (Directing to Email) */}
          <div className="rounded-2xl border border-border/70 bg-card p-6 sm:p-7 shadow-xs space-y-5">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Formulir Pesan Cepat</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Kirim Pesan ke Email
              </h3>
              <p className="text-xs text-muted-foreground">
                Formulir akan otomatis membuka email client Anda dengan format pesan yang telah terstruktur rapi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">
                  Nama Lengkap <span className="text-emerald-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama Anda"
                  className="w-full rounded-xl border border-border/80 bg-background px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-emerald-500/50 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">
                  Email Anda <span className="text-emerald-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@perusahaan.com"
                  className="w-full rounded-xl border border-border/80 bg-background px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-emerald-500/50 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">
                  Subjek / Topik Diskusi
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="cth. Penawaran Proyek Fullstack / Peluang Kerja"
                  className="w-full rounded-xl border border-border/80 bg-background px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-emerald-500/50 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">
                  Isi Pesan <span className="text-emerald-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Halo Herdiyana, saya tertarik untuk mendiskusikan kebutuhan sistem..."
                  className="w-full rounded-xl border border-border/80 bg-background px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-3 shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all duration-200 active:scale-98"
              >
                <Send className="h-4 w-4" />
                <span>Kirim Pesan ke Email</span>
              </button>

              {isSent && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>Aplikasi email Anda sedang dibuka untuk menyelesaikan pengiriman pesan.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
