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
  Loader2,
  AlertCircle
} from "lucide-react";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setIsSent(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        // Jika server SMTP belum terisi kredensial di env, berikan opsi fallback langsung
        if (data.fallbackToMailto) {
          setErrorMessage(
            data.error || "Layanan SMTP belum dikonfigurasi di server."
          );
        } else {
          setErrorMessage(data.error || "Gagal mengirim pesan. Silakan coba lagi.");
        }
      }
    } catch {
      setErrorMessage("Terjadi gangguan koneksi ke server. Anda dapat mengirim manual via email client.");
    } finally {
      setLoading(false);
    }
  };

  const handleManualMailto = () => {
    const mailSubject = encodeURIComponent(
      subject
        ? `[Portfolio Inquiry] ${subject} - ${name}`
        : `[Portfolio Inquiry] Pesan Baru dari ${name || "Visitor"}`
    );
    const mailBody = encodeURIComponent(
      `Halo Herdiyana,\n\nNama: ${name}\nEmail: ${email}\nSubjek: ${subject || "Kolaborasi / Proyek"}\n\nPesan:\n${message}\n\n---\nDikirim melalui herdiyana.vercel.app`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contact" className="py-14 sm:py-20 border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 max-w-5xl">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Mail className="h-4 w-4" />
            <span>Mulai Kolaborasi & Kontak Langsung</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight">
            Hubungi Saya
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Tertarik bekerja sama untuk proyek fullstack, konsultasi arsitektur sistem enterprise, atau peluang karir? Kirim pesan langsung melalui formulir server SMTP di bawah ini.
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
                Silakan isi formulir pesan di sebelah kanan. Pesan akan diproses langsung oleh server melalui protokol SMTP terenkripsi dan diteruskan ke inbox resmi saya.
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

            {/* Social Network Profiles */}
            <div className="p-5 rounded-2xl border border-border/60 bg-card/70 space-y-3">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Profil Profesional Terverifikasi
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-border/50 bg-background/50 hover:bg-muted/70 hover:border-emerald-500/40 transition-all duration-200 group text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-muted text-foreground">
                      <Github className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">GitHub Profile</div>
                      <div className="text-[11px] text-muted-foreground">
                        @{PERSONAL_INFO.githubUsername}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-border/50 bg-background/50 hover:bg-muted/70 hover:border-emerald-500/40 transition-all duration-200 group text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-muted text-foreground">
                      <Linkedin className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">LinkedIn Profile</div>
                      <div className="text-[11px] text-muted-foreground">
                        {PERSONAL_INFO.linkedinUsername}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Form Card */}
          <div className="rounded-2xl border border-border/70 bg-card p-6 sm:p-7 shadow-xs space-y-5">
            <div>
              <h3 className="text-lg font-bold text-foreground">
                Kirim Pesan Langsung (SMTP Service)
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Pesan akan langsung terkirim ke inbox email developer melalui protokol SMTP terenkripsi.
              </p>
            </div>

            {isSent ? (
              <div className="p-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 space-y-3 text-center animate-in fade-in zoom-in-95 duration-200">
                <CheckCircle2 className="h-10 w-10 text-emerald-500 mx-auto" />
                <h4 className="text-base font-bold text-foreground">
                  Pesan Berhasil Terkirim via SMTP!
                </h4>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  Terima kasih telah menghubungi. Pesan Anda telah masuk ke antrean inbox dan akan segera direspon.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl border border-rose-500/40 bg-rose-500/10 text-rose-500 text-xs space-y-2">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                    <div className="pl-6">
                      <button
                        type="button"
                        onClick={handleManualMailto}
                        className="font-bold underline hover:text-rose-400"
                      >
                        Buka di Email Client Sekarang (Fallback Mailto) &rarr;
                      </button>
                    </div>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-foreground">
                    Nama Lengkap <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: John Doe / Recruiter Name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border/80 bg-background text-foreground text-xs focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-muted-foreground/60"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-foreground">
                    Alamat Email Anda <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@perusahaan.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border/80 bg-background text-foreground text-xs focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-muted-foreground/60"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-foreground">
                    Topik / Subjek Pesan
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Contoh: Diskusi Proyek Enterprise / Tawaran Pekerjaan"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border/80 bg-background text-foreground text-xs focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-muted-foreground/60"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-foreground">
                    Isi Pesan <span className="text-emerald-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan gambaran proyek, kebutuhan teknologi, atau pesan yang ingin disampaikan..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border/80 bg-background text-foreground text-xs focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-muted-foreground/60 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-70 text-white text-xs font-bold shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-200"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Mengirim via SMTP Server...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Kirim Pesan Sekarang</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
