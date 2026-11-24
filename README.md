# Herdiyana Firmansyah - Personal Portfolio Website

Website portofolio profesional dan modern untuk **Herdiyana Firmansyah** (Fullstack Developer & Software Engineer) yang dibangun menggunakan **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, dan **Lucide Icons**.

---

## 🌟 Fitur Utama

- **Hero & Personal Branding:** Ringkasan karir, highlight pengalaman di Astra Otoparts Group, live status ketersediaan kerja, dan statistik utama (4+ Tahun Pengalaman, 15+ Enterprise Systems, 99.9% Uptime, High-Volume DB Tuning).
- **Pengalaman Kerja (Timeline):**
  - **PT. MDEV (Astra Otoparts Group)** - Fullstack Developer (Jan 2024 - Sekarang)
  - **PT. Knitto Tekstil Indonesia** - Fullstack Developer (Mei 2023 - Jan 2024)
  - **PT. Tonekan Niat Baikmu (umroh.in)** - Fullstack Developer (Jan 2022 - Mei 2023)
  - **PT. Kala Bhairawa Tantra** - Fullstack Developer (Mar 2021 - Jan 2022)
- **Showcase Proyek:**
  - **umroh.in (PT. Tonekan Niat Baikmu):** Platform reservasi umrah & haji skala nasional dengan integrasi payment gateway.
  - **Task & Activity Management Platform:** Sistem manajemen tugas tim dengan otentikasi role-based dan visualisasi progres.
  - **Enterprise Retail & Multi-Branch POS System:** Solusi Point of Sale real-time sinkronisasi stok dan pelaporan keuangan.
  - **Crypto Profit & Staking Analytics Engine:** Simulator mining, kalkulator reward multikoin, dan visualisasi chart.
- **Keahlian Terstruktur:** Frontend, Backend & Microservices, Databases & Caching, Cloud / DevOps & Testing.
- **Pendidikan & Sertifikasi:**
  - S1 Sistem Informasi - Universitas Terbuka
  - Fullstack Developer Bootcamp - DumbWays Indonesia
  - Sertifikasi freeCodeCamp: Responsive Web Design, JavaScript Algorithms & Data Structures, Front End Development Libraries, Back End Development & APIs.
- **Dark Mode / Light Mode Switcher:** Menggunakan `next-themes` dengan palet warna Zinc yang clean dan elegan.
- **Integrasi Kontak:** Quick Chat WhatsApp langsung, Email mailto, dan formulir pesan interaktif.

---

## 🚀 Cara Menjalankan

### 1. Masuk ke Direktori Proyek
```bash
cd d:\PROJECT\LEARNING\herdiyana-portfolio
```

### 2. Jalankan Mode Development
```bash
bun run dev
# atau jika menggunakan npm / pnpm / yarn:
# npm run dev
```
Buka browser di `http://localhost:3000`.

### 3. Build untuk Production
```bash
bun run build
bun run start
```

---

## 📁 Struktur Direktori
```
herdiyana-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind CSS & theme tokens
│   │   ├── layout.tsx           # Root layout & SEO metadata
│   │   └── page.tsx             # Main landing page
│   ├── components/
│   │   ├── layout/              # Navbar, Footer
│   │   ├── sections/            # Hero, Experience, Projects, Skills, Education, Contact
│   │   └── ui/                  # Badge, ThemeToggle, ThemeProvider
│   ├── data/
│   │   └── portfolioData.ts     # Data profil, pengalaman, skill dari CV
│   └── lib/
│       └── utils.ts             # Utility cn helper
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```
