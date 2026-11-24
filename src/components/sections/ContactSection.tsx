"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Mail,
  MessageCircle,
  MapPin,
  Send,
  CheckCircle2,
  Phone,
  Github,
  Linkedin,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Prefill direct WhatsApp chat
    const text = encodeURIComponent(
      `Halo Herdiyana, saya ${name} (${email}).\n\nPesan:\n${message}`
    );
    window.open(`https://wa.me/6285163623378?text=${text}`, "_blank");
    setIsSubmitting(false);
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
            Tertarik bekerja sama untuk proyek fullstack, konsultasi arsitektur sistem enterprise, atau peluang karir? Jangan ragu menghubungi saya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Direct Contact Cards */}
          <div className="space-y-4">
            {/* WhatsApp Card */}
            <div className="flex items-center justify-between p-4 sm:p-5 rounded-2xl border border-border/60 bg-card hover:border-emerald-500/50 hover:shadow-xs transition-all duration-200">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block font-medium">
                    WhatsApp Langsung
                  </span>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-foreground hover:text-emerald-500 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, "phone")}
                  aria-label="Salin nomor telepon"
                  className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  title="Salin Nomor"
                >
                  {copiedPhone ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Buka WhatsApp"
                  className="p-2 rounded-xl text-muted-foreground hover:text-emerald-500 hover:bg-muted transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-center justify-between p-4 sm:p-5 rounded-2xl border border-border/60 bg-card hover:border-emerald-500/50 hover:shadow-xs transition-all duration-200">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block font-medium">
                    Email Resmi
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-bold text-foreground hover:text-emerald-500 transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                aria-label="Salin alamat email"
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                title="Salin Email"
              >
                {copiedEmail ? (
                  <Check className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-4 sm:p-5 rounded-2xl border border-border/60 bg-card/60 space-y-1">
              <span className="text-xs text-muted-foreground block font-medium">
                Lokasi & Domisili
              </span>
              <span className="text-sm font-bold text-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-500 shrink-0" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-border bg-card text-xs font-bold text-foreground hover:bg-muted hover:border-foreground/30 transition-all active:scale-98"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-border bg-card text-xs font-bold text-foreground hover:bg-muted hover:border-foreground/30 transition-all active:scale-98"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Direct WhatsApp Quick Contact Form */}
          <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-7 shadow-xs space-y-4">
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                Kirim Pesan Cepat
              </h3>
              <p className="text-xs text-muted-foreground">
                Pesan akan langsung terhubung ke WhatsApp saya dengan format rapi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">Nama Lengkap</label>
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
                <label className="text-xs font-bold text-foreground">Email / Kontak</label>
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
                <label className="text-xs font-bold text-foreground">Pesan / Diskusi Proyek</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Halo Herdiyana, saya tertarik untuk mendiskusikan proyek..."
                  className="w-full rounded-xl border border-border/80 bg-background px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-3 shadow-md shadow-emerald-600/20 transition-all active:scale-98"
              >
                <Send className="h-4 w-4" />
                <span>Kirim via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
