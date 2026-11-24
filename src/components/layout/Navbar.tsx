"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "@/components/ui/logo";
import { Menu, X, MessageCircle, ChevronRight } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Tentang", href: "#about" },
    { label: "Arsitektur", href: "#architecture-showcase" },
    { label: "Pengalaman", href: "#experience" },
    { label: "Proyek", href: "#projects" },
    { label: "Keahlian", href: "#skills" },
    { label: "Pendidikan", href: "#education" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md shadow-xs"
          : "border-b border-border/30 bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="outline-hidden" onClick={() => setIsOpen(false)}>
          <Logo size="md" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 text-xs font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 text-xs font-bold transition-all duration-200 shadow-xs hover:shadow-emerald-600/20 active:scale-95"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>Chat WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Tutup Menu" : "Buka Menu"}
            className="lg:hidden p-2 rounded-xl border border-border/70 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown with animation */}
      {isOpen && (
        <div className="lg:hidden border-b border-border/70 bg-background/95 backdrop-blur-lg px-4 pt-3 pb-5 space-y-2 animate-slide-down shadow-xl">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="h-4 w-4 opacity-50" />
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-border/50">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 text-xs font-bold shadow-md transition-all active:scale-98"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Hubungi via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
