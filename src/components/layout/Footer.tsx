import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Logo } from "@/components/ui/logo";
import { Github, Linkedin, ExternalLink, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-muted/20 border-t border-border/40 text-xs text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and brief */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Logo size="sm" />
            <span className="hidden sm:inline text-muted-foreground/40">•</span>
            <span className="text-muted-foreground text-center sm:text-left">
              Fullstack Developer & Software Engineer
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-semibold">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Vercel</span>
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Kontak</span>
            </a>
          </div>
        </div>

        {/* Subfooter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-border/40 text-[11px] text-muted-foreground/80">
          <div>
            © {new Date().getFullYear()} Herdiyana Firmansyah. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with Next.js 14, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
