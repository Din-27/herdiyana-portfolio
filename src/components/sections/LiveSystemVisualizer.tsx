"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Cpu,
  Database,
  Layers,
  Zap,
  Activity,
  Server,
  Terminal,
  Play,
  RotateCcw,
  Sparkles,
  TrendingDown,
  ShieldCheck,
  CheckCircle2,
  HardDrive,
  Network,
  Radio,
} from "lucide-react";

type SimulationMode = "normal" | "spike" | "tuning";

interface NodeData {
  id: string;
  name: string;
  tech: string;
  role: string;
  icon: React.ElementType;
  color: string;
  badge: string;
  stats: {
    cpu: string;
    memory: string;
    throughput: string;
    latency: string;
  };
}

const NODES: NodeData[] = [
  {
    id: "gateway",
    name: "API Gateway",
    tech: "Golang (Gin)",
    role: "Routing & Rate Limiting",
    icon: Network,
    color: "emerald",
    badge: "GATEWAY",
    stats: {
      cpu: "14%",
      memory: "48 MB",
      throughput: "2,450 req/s",
      latency: "0.8ms",
    },
  },
  {
    id: "queue",
    name: "Message Queue",
    tech: "RabbitMQ Cluster",
    role: "Async Event Decoupling",
    icon: Radio,
    color: "amber",
    badge: "EVENT BUS",
    stats: {
      cpu: "22%",
      memory: "128 MB",
      throughput: "9,800 msg/s",
      latency: "1.2ms",
    },
  },
  {
    id: "worker",
    name: "Worker Service",
    tech: "Node.js Microservice",
    role: "Business Logic & CR Rules",
    icon: Cpu,
    color: "teal",
    badge: "WORKER",
    stats: {
      cpu: "38%",
      memory: "180 MB",
      throughput: "2,400 ops/s",
      latency: "3.4ms",
    },
  },
  {
    id: "database",
    name: "Primary Database",
    tech: "PostgreSQL (PLpgSQL)",
    role: "Relational Persistence",
    icon: Database,
    color: "blue",
    badge: "DATABASE",
    stats: {
      cpu: "42%",
      memory: "512 MB",
      throughput: "1,950 tx/s",
      latency: "4.8ms",
    },
  },
  {
    id: "cache",
    name: "In-Memory Cache",
    tech: "Redis Cluster",
    role: "Sub-ms Hot Query Store",
    icon: HardDrive,
    color: "purple",
    badge: "CACHE",
    stats: {
      cpu: "8%",
      memory: "96 MB",
      throughput: "14,200 ops/s",
      latency: "0.4ms",
    },
  },
];

export function LiveSystemVisualizer() {
  const [mode, setMode] = useState<SimulationMode>("normal");
  const [selectedNode, setSelectedNode] = useState<string>("gateway");
  const [logs, setLogs] = useState<string[]>([
    "System initialized: all microservice nodes healthy (PID 23020)",
    "Astra Otoparts ERP event listeners listening on RabbitMQ topic",
    "PostgreSQL composite indexes active: idx_orders_covering_pkey",
    "Redis cache warming: 98.6% hit ratio on high-frequency product SKUs",
  ]);

  const activeNode = NODES.find((n) => n.id === selectedNode) || NODES[0];
  const ActiveIcon = activeNode.icon;

  // Add realistic system logs when mode changes
  useEffect(() => {
    const timestamp = new Date().toLocaleTimeString("id-ID", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    if (mode === "normal") {
      setLogs((prev) => [
        `[${timestamp}] [NORMAL] Traffic stabilized at 2,450 req/s. Zero drop rate.`,
        ...prev.slice(0, 4),
      ]);
    } else if (mode === "spike") {
      setLogs((prev) => [
        `[${timestamp}] [SURGE] Flash-sale traffic spike detected: 28,400 req/s!`,
        `[${timestamp}] [AUTOSCALE] Worker nodes scaled from 1 -> 4 instances.`,
        `[${timestamp}] [QUEUE] RabbitMQ buffer absorbing burst without backpressure.`,
        ...prev.slice(0, 3),
      ]);
    } else if (mode === "tuning") {
      setLogs((prev) => [
        `[${timestamp}] [TUNING] EXPLAIN ANALYZE initiated on heavy reporting query...`,
        `[${timestamp}] [OPTIMIZED] Eliminating Seq Scan -> Applying Covering Index.`,
        `[${timestamp}] [SUCCESS] Latency reduced from 1,450ms -> 38ms (-97.4%).`,
        ...prev.slice(0, 3),
      ]);
    }
  }, [mode]);

  return (
    <section
      id="live-telemetry"
      className="py-14 sm:py-20 border-b border-border/40 relative overflow-hidden bg-background"
    >
      {/* Ambient Grid Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-15 dark:opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] bg-[size:28px_28px]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Activity className="h-4 w-4 animate-pulse" />
              <span>Interactive Simulator • Anti-Mainstream</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight">
              Simulasi Arsitektur Sistem Produksi Real-Time
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Jalankan stress-test interaktif pada simulasi arsitektur microservices terdistribusi. Uji lonjakan trafik, otomatisasi scaling, dan pembuktian optimasi query SQL secara langsung.
            </p>
          </div>

          {/* Interactive Simulation Mode Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-muted/60 border border-border/70 shadow-xs">
            <button
              type="button"
              onClick={() => setMode("normal")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                mode === "normal"
                  ? "bg-emerald-500 text-white shadow-xs scale-102"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/50"
              }`}
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>Normal (2.4k req/s)</span>
            </button>

            <button
              type="button"
              onClick={() => setMode("spike")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                mode === "spike"
                  ? "bg-amber-500 text-white shadow-xs scale-102"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/50"
              }`}
            >
              <Zap className="h-3.5 w-3.5" />
              <span>Stress-Test (10x Spike)</span>
            </button>

            <button
              type="button"
              onClick={() => setMode("tuning")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                mode === "tuning"
                  ? "bg-blue-600 text-white shadow-xs scale-102"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/50"
              }`}
            >
              <TrendingDown className="h-3.5 w-3.5" />
              <span>Tuning SQL (-97%)</span>
            </button>
          </div>
        </div>

        {/* Live Topology Interactive Canvas */}
        <div className="rounded-3xl border border-border/80 bg-neutral-950 p-6 sm:p-8 text-neutral-100 shadow-2xl space-y-6 relative overflow-hidden">
          {/* Top Status Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    mode === "spike" ? "bg-amber-400" : "bg-emerald-400"
                  }`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                    mode === "spike" ? "bg-amber-500" : "bg-emerald-500"
                  }`}
                />
              </span>
              <span className="font-bold text-neutral-200">
                TOPOLOGY CLUSTER: ASTRA-MDEV-PROD
              </span>
              <span className="text-neutral-500 hidden sm:inline">|</span>
              <span className="text-neutral-400 hidden sm:inline">
                MODE:{" "}
                <strong
                  className={
                    mode === "spike"
                      ? "text-amber-400"
                      : mode === "tuning"
                      ? "text-blue-400"
                      : "text-emerald-400"
                  }
                >
                  {mode.toUpperCase()}
                </strong>
              </span>
            </div>

            <div className="flex items-center gap-4 text-neutral-400 text-[11px]">
              <div>
                Throughput:{" "}
                <strong className="text-emerald-400 font-bold">
                  {mode === "spike" ? "28,400 req/s" : "2,450 req/s"}
                </strong>
              </div>
              <div>
                P99 Latency:{" "}
                <strong
                  className={
                    mode === "tuning"
                      ? "text-blue-400 font-bold"
                      : mode === "spike"
                      ? "text-amber-400 font-bold"
                      : "text-emerald-400 font-bold"
                  }
                >
                  {mode === "tuning" ? "38ms" : mode === "spike" ? "3.8ms" : "1.8ms"}
                </strong>
              </div>
            </div>
          </div>

          {/* Nodes Circuit Network Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 pt-2 relative">
            {NODES.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedNode === node.id;

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedNode(node.id)}
                  className={`relative rounded-2xl p-4 text-left border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-neutral-900 border-emerald-500/80 shadow-lg shadow-emerald-500/10 scale-102"
                      : "bg-neutral-900/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900"
                  }`}
                >
                  {/* Active Indicator Pin */}
                  {isSelected && (
                    <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                    </span>
                  )}

                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-neutral-800 text-emerald-400 border border-neutral-700/60">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-[9px] font-mono font-bold text-neutral-400 px-1.5 py-0.5 rounded bg-neutral-800/80 border border-neutral-700/40">
                      {node.badge}
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <h3 className="text-xs sm:text-sm font-bold text-neutral-100 truncate">
                      {node.name}
                    </h3>
                    <p className="text-[10px] text-emerald-400 font-mono font-semibold truncate">
                      {node.tech}
                    </p>
                    <p className="text-[10px] text-neutral-400 truncate pt-1">
                      {node.role}
                    </p>
                  </div>

                  {/* Pulsing Energy Bar */}
                  <div className="mt-3 pt-2.5 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span>CPU: {node.stats.cpu}</span>
                    <span className="text-emerald-400">{node.stats.latency}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Node Live Telemetry Deep-Dive */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <div className="space-y-1 md:col-span-1 border-b md:border-b-0 md:border-r border-neutral-800 pb-3 md:pb-0 md:pr-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <ActiveIcon className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-bold text-neutral-100">
                  {activeNode.name}
                </h4>
              </div>
              <span className="text-xs text-emerald-400 font-mono block">
                {activeNode.tech}
              </span>
              <p className="text-[11px] text-neutral-400">
                {activeNode.role}
              </p>
            </div>

            <div className="grid grid-cols-3 md:col-span-3 gap-3 text-center">
              <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] text-neutral-400 uppercase font-semibold block">
                  Beban CPU Node
                </span>
                <span className="text-base sm:text-lg font-mono font-black text-neutral-100">
                  {mode === "spike"
                    ? `${parseInt(activeNode.stats.cpu) * 2}%`
                    : activeNode.stats.cpu}
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] text-neutral-400 uppercase font-semibold block">
                  Pemakaian Memory
                </span>
                <span className="text-base sm:text-lg font-mono font-black text-neutral-100">
                  {activeNode.stats.memory}
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] text-neutral-400 uppercase font-semibold block">
                  Throughput Rate
                </span>
                <span className="text-base sm:text-lg font-mono font-black text-emerald-400">
                  {mode === "spike" ? "10x SURGE" : activeNode.stats.throughput}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Live Log Feed */}
          <div className="rounded-2xl border border-neutral-800 bg-black p-4 font-mono text-[11px] space-y-2">
            <div className="flex items-center justify-between text-neutral-500 border-b border-neutral-800/80 pb-2">
              <div className="flex items-center gap-2">
                <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-neutral-400 font-bold">
                  LIVE MICROSERVICE TELEMETRY CONSOLE
                </span>
              </div>
              <span className="text-[10px] text-emerald-400">STATUS: HEALTHY 99.9%</span>
            </div>

            <div className="space-y-1 max-h-24 overflow-hidden pt-1">
              {logs.map((log, lIdx) => (
                <div
                  key={lIdx}
                  className={`truncate ${
                    lIdx === 0
                      ? "text-emerald-400 font-semibold"
                      : "text-neutral-400"
                  }`}
                >
                  &gt; {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
