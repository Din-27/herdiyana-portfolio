import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({
  className = "",
  showText = true,
  size = "md",
}: LogoProps) {
  const iconSizeClasses = {
    sm: "h-7 w-7 text-xs",
    md: "h-9 w-9 text-sm",
    lg: "h-11 w-11 text-base",
  };

  const titleSizeClasses = {
    sm: "text-xs",
    md: "text-sm sm:text-base",
    lg: "text-base sm:text-lg",
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none group ${className}`}>
      {/* Geometric Tech Monogram Icon */}
      <div
        className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950 dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-300 text-white dark:text-neutral-900 font-black shadow-md border border-neutral-700/50 dark:border-neutral-300/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-emerald-500/20 group-hover:border-emerald-500/50 ${iconSizeClasses[size]}`}
      >
        {/* Ambient Corner Accent */}
        <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>

        {/* Monogram SVG */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6"
        >
          {/* Stylized 'H' and 'F' combination with code bracket aesthetics */}
          <path
            d="M7 8V24M15 8V24M7 16H15"
            stroke="currentColor"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 8H26M19 15H24M19 8V24"
            stroke="currentColor"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col text-left leading-tight">
          <span
            className={`font-black tracking-tight text-foreground transition-colors group-hover:text-emerald-500 dark:group-hover:text-emerald-400 ${titleSizeClasses[size]}`}
          >
            Herdiyana<span className="text-emerald-500">.</span>
          </span>
          <span className="text-[10px] text-muted-foreground font-medium hidden sm:inline tracking-wide uppercase">
            Software Engineer
          </span>
        </div>
      )}
    </div>
  );
}
