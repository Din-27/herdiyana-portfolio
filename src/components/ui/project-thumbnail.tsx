import React from "react";
import {
  Lock,
  ExternalLink,
  Kanban,
  ShoppingCart,
  Activity,
  Database,
  Cloud,
  Terminal,
  Cpu,
  Smartphone,
  CheckCircle2,
  TrendingDown,
  Sparkles,
} from "lucide-react";

interface ProjectThumbnailProps {
  title: string;
  domain: string;
  mockupType:
    | "kanban"
    | "pos"
    | "iot"
    | "database"
    | "serverless"
    | "ecommerce"
    | "terminal"
    | "blockchain"
    | "mobile";
  badge: string;
}

export function ProjectThumbnail({
  title,
  domain,
  mockupType,
  badge,
}: ProjectThumbnailProps) {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-border/80 bg-neutral-950 text-neutral-100 shadow-md group-hover:border-emerald-500/50 transition-all duration-300">
      {/* Browser Top Window Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-neutral-800 bg-neutral-900/90 text-neutral-400 text-[11px] select-none">
        {/* macOS Style Traffic Dots */}
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 inline-block" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
        </div>

        {/* Address Bar */}
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-neutral-950/80 border border-neutral-800 text-[10px] text-neutral-300 max-w-[210px] sm:max-w-xs truncate font-mono">
          <Lock className="h-2.5 w-2.5 text-emerald-400 shrink-0" />
          <span className="truncate">{domain}</span>
        </div>

        {/* Status Dot */}
        <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="hidden sm:inline">LIVE</span>
        </div>
      </div>

      {/* Screen Mockup Area */}
      <div className="relative h-44 sm:h-48 w-full bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 p-3.5 flex flex-col justify-between overflow-hidden">
        {/* Ambient Subtle Grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"
        />

        {/* Mockup Specific Screen Rendering */}
        {mockupType === "kanban" && (
          <div className="relative z-10 grid grid-cols-3 gap-2 h-full">
            {/* Column 1 */}
            <div className="rounded-lg bg-neutral-800/60 border border-neutral-700/50 p-2 flex flex-col gap-1.5">
              <span className="text-[9px] font-bold uppercase text-neutral-400 tracking-wider">
                To Do (3)
              </span>
              <div className="p-1.5 rounded bg-neutral-900/90 border border-neutral-700/40 text-[10px] space-y-1">
                <span className="font-semibold block text-neutral-200 truncate">
                  Setup Auth JWT
                </span>
                <span className="text-[8px] px-1 py-0.2 rounded bg-amber-500/20 text-amber-400 font-bold">
                  HIGH
                </span>
              </div>
              <div className="p-1.5 rounded bg-neutral-900/90 border border-neutral-700/40 text-[10px] text-neutral-400 truncate">
                Dockerize API
              </div>
            </div>

            {/* Column 2 */}
            <div className="rounded-lg bg-neutral-800/60 border border-emerald-500/30 p-2 flex flex-col gap-1.5">
              <span className="text-[9px] font-bold uppercase text-emerald-400 tracking-wider">
                In Progress (2)
              </span>
              <div className="p-1.5 rounded bg-neutral-900/90 border border-emerald-500/40 text-[10px] space-y-1 shadow-xs">
                <span className="font-semibold block text-emerald-300 truncate">
                  PostgreSQL PLpgSQL
                </span>
                <span className="text-[8px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                  ACTIVE
                </span>
              </div>
            </div>

            {/* Column 3 */}
            <div className="rounded-lg bg-neutral-800/60 border border-neutral-700/50 p-2 flex flex-col gap-1.5">
              <span className="text-[9px] font-bold uppercase text-neutral-400 tracking-wider">
                Done (8)
              </span>
              <div className="p-1.5 rounded bg-neutral-900/90 border border-neutral-700/40 text-[10px] text-neutral-400 flex items-center justify-between">
                <span className="truncate">Next.js UI</span>
                <CheckCircle2 className="h-2.5 w-2.5 text-emerald-400 shrink-0" />
              </div>
            </div>
          </div>
        )}

        {mockupType === "pos" && (
          <div className="relative z-10 grid grid-cols-5 gap-2 h-full">
            {/* Item Catalog (3 cols) */}
            <div className="col-span-3 grid grid-cols-2 gap-1.5 content-start">
              <div className="p-2 rounded-lg bg-neutral-800/80 border border-neutral-700/60 text-[10px]">
                <span className="font-bold block truncate">Kopi Arabika</span>
                <span className="text-emerald-400 font-mono text-[9px]">
                  Rp 25.000
                </span>
              </div>
              <div className="p-2 rounded-lg bg-neutral-800/80 border border-neutral-700/60 text-[10px]">
                <span className="font-bold block truncate">Matcha Latte</span>
                <span className="text-emerald-400 font-mono text-[9px]">
                  Rp 28.000
                </span>
              </div>
              <div className="p-2 rounded-lg bg-neutral-800/80 border border-neutral-700/60 text-[10px]">
                <span className="font-bold block truncate">Croissant Butter</span>
                <span className="text-emerald-400 font-mono text-[9px]">
                  Rp 22.000
                </span>
              </div>
              <div className="p-2 rounded-lg bg-neutral-800/80 border border-neutral-700/60 text-[10px]">
                <span className="font-bold block truncate">Ice Chocolate</span>
                <span className="text-emerald-400 font-mono text-[9px]">
                  Rp 26.000
                </span>
              </div>
            </div>

            {/* Receipt Summary (2 cols) */}
            <div className="col-span-2 rounded-lg bg-neutral-900 border border-emerald-500/30 p-2 flex flex-col justify-between text-[10px]">
              <div className="space-y-1">
                <span className="text-[9px] font-bold uppercase text-neutral-400 block border-b border-neutral-800 pb-0.5">
                  Order #1042
                </span>
                <div className="flex justify-between text-[9px] text-neutral-300">
                  <span>Subtotal</span>
                  <span>Rp 101.000</span>
                </div>
                <div className="flex justify-between text-[9px] text-neutral-300">
                  <span>Pajak 11%</span>
                  <span>Rp 11.110</span>
                </div>
              </div>
              <div className="pt-1 border-t border-neutral-800 flex items-center justify-between font-bold text-emerald-400 text-[10px]">
                <span>Total</span>
                <span>Rp 112.110</span>
              </div>
            </div>
          </div>
        )}

        {mockupType === "iot" && (
          <div className="relative z-10 grid grid-cols-2 gap-2 h-full">
            <div className="rounded-lg bg-neutral-800/80 border border-neutral-700/60 p-2.5 flex flex-col justify-between">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-semibold block">
                  Sensor Suhu & Ruangan
                </span>
                <div className="text-2xl font-black text-emerald-400 font-mono mt-1">
                  24.5°C
                </div>
              </div>
              <span className="text-[9px] text-neutral-400">
                Kelembaban: 58% RH
              </span>
            </div>

            <div className="rounded-lg bg-neutral-800/80 border border-neutral-700/60 p-2.5 flex flex-col justify-between">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-semibold block">
                  AC & Saklar Pintar
                </span>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold mt-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ON - Auto Cool</span>
                </div>
              </div>
              <span className="text-[9px] text-neutral-400">
                Daya: 340 Watt
              </span>
            </div>
          </div>
        )}

        {mockupType === "database" && (
          <div className="relative z-10 flex flex-col justify-between h-full bg-neutral-900/90 rounded-lg border border-neutral-800 p-2.5 font-mono text-[10px]">
            <div className="space-y-1">
              <span className="text-[9px] text-neutral-400 block font-bold text-blue-400">
                EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 9204...
              </span>
              <div className="text-[9px] text-emerald-400">
                -&gt; Index Scan using idx_orders_user_created ON orders (cost=0.42..8.44)
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-neutral-800 text-[10px]">
              <span className="text-rose-400 line-through">1,450ms (Seq Scan)</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <TrendingDown className="h-3 w-3" /> 38ms (-97%)
              </span>
            </div>
          </div>
        )}

        {mockupType === "serverless" && (
          <div className="relative z-10 flex flex-col justify-between h-full bg-neutral-900/90 rounded-lg border border-purple-500/30 p-2.5 text-[10px]">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-1">
              <span className="font-bold text-purple-400 flex items-center gap-1">
                <Cloud className="h-3.5 w-3.5" /> Colyin Cloud Worker
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">
                DOCKER READY
              </span>
            </div>
            <div className="font-mono text-[9px] text-neutral-300 space-y-0.5">
              <div className="text-emerald-400">[info] Function cold start: 12ms</div>
              <div className="text-neutral-400">[exec] Auto-scale instance: 1 -&gt; 4</div>
              <div className="text-neutral-300">[resp] HTTP 200 OK (Memory: 64MB)</div>
            </div>
          </div>
        )}

        {mockupType === "ecommerce" && (
          <div className="relative z-10 grid grid-cols-3 gap-2 h-full">
            <div className="rounded-lg bg-neutral-800/80 border border-neutral-700/60 p-2 flex flex-col justify-between">
              <div className="h-10 rounded bg-neutral-900/90 flex items-center justify-center text-[9px] text-neutral-400">
                Outer Jacket
              </div>
              <div>
                <span className="text-[9px] font-bold block truncate">Denim Oversize</span>
                <span className="text-[9px] text-emerald-400 font-mono">Rp 349.000</span>
              </div>
            </div>
            <div className="rounded-lg bg-neutral-800/80 border border-neutral-700/60 p-2 flex flex-col justify-between">
              <div className="h-10 rounded bg-neutral-900/90 flex items-center justify-center text-[9px] text-neutral-400">
                Pants
              </div>
              <div>
                <span className="text-[9px] font-bold block truncate">Cargo Loose</span>
                <span className="text-emerald-400 font-mono text-[9px]">Rp 279.000</span>
              </div>
            </div>
            <div className="rounded-lg bg-neutral-800/80 border border-neutral-700/60 p-2 flex flex-col justify-between">
              <div className="h-10 rounded bg-neutral-900/90 flex items-center justify-center text-[9px] text-neutral-400">
                Footwear
              </div>
              <div>
                <span className="text-[9px] font-bold block truncate">Canvas White</span>
                <span className="text-emerald-400 font-mono text-[9px]">Rp 399.000</span>
              </div>
            </div>
          </div>
        )}

        {mockupType === "terminal" && (
          <div className="relative z-10 flex flex-col justify-between h-full bg-neutral-950 rounded-lg border border-neutral-800 p-2.5 font-mono text-[9px]">
            <div className="space-y-1">
              <span className="text-emerald-400">$ npm i folder-temporary</span>
              <div className="text-neutral-400">+ folder-temporary@1.0.2</div>
              <div className="text-neutral-500">added 1 package, and audited 18 packages in 420ms</div>
              <div className="text-cyan-400">[DinLogger] structured log stream initialized</div>
            </div>
            <div className="flex items-center justify-between text-neutral-400 border-t border-neutral-800/80 pt-1">
              <span>NPM Package Registry</span>
              <span className="text-emerald-400 font-bold">100% TypeScript</span>
            </div>
          </div>
        )}

        {mockupType === "blockchain" && (
          <div className="relative z-10 flex flex-col justify-between h-full bg-neutral-900/90 rounded-lg border border-amber-500/30 p-2.5 font-mono text-[9px]">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-1">
              <span className="font-bold text-amber-400">ME-Coin Block #1089</span>
              <span className="text-emerald-400 font-bold">MINED (PoW)</span>
            </div>
            <div className="text-neutral-300 space-y-0.5 truncate">
              <div className="text-neutral-400">PrevHash: 0000a4b7c12f...</div>
              <div className="text-amber-300">BlockHash: 00008ef93012...</div>
              <div className="text-emerald-400">Nonce: 1,842,910 | Time: 210ms</div>
            </div>
            <div className="flex items-center justify-between text-neutral-400 border-t border-neutral-800 pt-1">
              <span>Golang (Gin API)</span>
              <span className="text-amber-400 font-bold">Low-Latency</span>
            </div>
          </div>
        )}

        {mockupType === "mobile" && (
          <div className="relative z-10 flex items-center justify-center gap-3 h-full">
            <div className="w-32 h-full rounded-lg bg-neutral-800/90 border border-teal-500/40 p-2 flex flex-col justify-between">
              <div className="text-[8px] font-bold text-teal-400 flex items-center justify-between">
                <span>Flutter Audio</span>
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              </div>
              <div className="flex items-center justify-center gap-0.5 h-10">
                <span className="h-3 w-1 bg-teal-400 rounded-full animate-pulse" />
                <span className="h-6 w-1 bg-teal-400 rounded-full animate-pulse" />
                <span className="h-8 w-1 bg-teal-300 rounded-full animate-pulse" />
                <span className="h-5 w-1 bg-teal-400 rounded-full animate-pulse" />
                <span className="h-2 w-1 bg-teal-400 rounded-full animate-pulse" />
              </div>
              <span className="text-[8px] text-neutral-400 text-center font-mono">
                Dart FFI + C++ Native
              </span>
            </div>
            <div className="hidden sm:flex flex-col text-[10px] text-neutral-300 space-y-1">
              <span className="font-bold text-teal-300">Cross-Platform Mobile</span>
              <span className="text-[9px] text-neutral-400">• Flutter (Dart)</span>
              <span className="text-[9px] text-neutral-400">• React Native (Loyalty)</span>
              <span className="text-[9px] text-neutral-400">• Kotlin & Swift Bridges</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
