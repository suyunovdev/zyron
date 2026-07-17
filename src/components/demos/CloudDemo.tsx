"use client";

import { useState, useEffect } from "react";
import {
  Server, HardDrive, Wifi, Shield, Activity, CheckCircle, Clock,
  AlertTriangle, Lock, Globe, Database, Cpu, RefreshCw, Download,
} from "lucide-react";

type Tab = "servers" | "deploy" | "security" | "backup";

const servers = [
  { id: "srv-01", name: "Production API", region: "Frankfurt", status: "running" as const, cpu: 42, ram: 67, disk: 45, uptime: "99.99%", requests: "12.4K/s", os: "Ubuntu 24.04", ip: "185.234.xx.xx" },
  { id: "srv-02", name: "Database Cluster", region: "Frankfurt", status: "running" as const, cpu: 58, ram: 82, disk: 67, uptime: "99.98%", requests: "8.2K/s", os: "Ubuntu 24.04", ip: "185.234.xx.xx" },
  { id: "srv-03", name: "CDN Edge", region: "Toshkent", status: "running" as const, cpu: 23, ram: 34, disk: 22, uptime: "100%", requests: "45.1K/s", os: "Nginx", ip: "213.230.xx.xx" },
  { id: "srv-04", name: "Staging API", region: "Amsterdam", status: "idle" as const, cpu: 5, ram: 18, disk: 12, uptime: "99.95%", requests: "0.1K/s", os: "Ubuntu 24.04", ip: "104.248.xx.xx" },
  { id: "srv-05", name: "ML Pipeline", region: "Frankfurt", status: "running" as const, cpu: 87, ram: 91, disk: 78, uptime: "99.97%", requests: "2.1K/s", os: "Ubuntu 24.04", ip: "185.234.xx.xx" },
  { id: "srv-06", name: "Backup Storage", region: "Toshkent", status: "maintenance" as const, cpu: 0, ram: 12, disk: 89, uptime: "99.90%", requests: "—", os: "MinIO", ip: "213.230.xx.xx" },
];

const deployments = [
  { id: "dep-147", branch: "main", commit: "fix: payment timeout handle", status: "success" as const, time: "2 min oldin", duration: "1m 23s", author: "S. Toshmatov" },
  { id: "dep-146", branch: "main", commit: "feat: new dashboard widgets", status: "success" as const, time: "1 soat oldin", duration: "2m 05s", author: "D. Rakhimov" },
  { id: "dep-145", branch: "staging", commit: "refactor: auth flow v2", status: "success" as const, time: "3 soat oldin", duration: "1m 48s", author: "A. Karimov" },
  { id: "dep-144", branch: "main", commit: "hotfix: cart qty bug", status: "failed" as const, time: "5 soat oldin", duration: "0m 34s", author: "N. Rashidova" },
  { id: "dep-143", branch: "dev", commit: "test: integration tests", status: "success" as const, time: "8 soat oldin", duration: "3m 12s", author: "S. Toshmatov" },
  { id: "dep-142", branch: "main", commit: "perf: query optimization", status: "success" as const, time: "12 soat oldin", duration: "1m 56s", author: "D. Rakhimov" },
  { id: "dep-141", branch: "staging", commit: "feat: report export PDF", status: "success" as const, time: "1 kun oldin", duration: "2m 34s", author: "A. Karimov" },
];

const securityLogs = [
  { time: "14:32", event: "SSL sertifikati yangilandi", level: "info" as const, source: "Let's Encrypt" },
  { time: "14:15", event: "Muvaffaqiyatsiz kirish urinishi (3x)", level: "warn" as const, source: "IP: 45.89.xx.xx" },
  { time: "13:50", event: "DDoS hujumi aniqlandi va bloklandi", level: "critical" as const, source: "CloudFlare WAF" },
  { time: "12:30", event: "Firewall qoidalari yangilandi", level: "info" as const, source: "Admin" },
  { time: "11:00", event: "Yangi API kalit yaratildi", level: "info" as const, source: "Dashboard" },
  { time: "10:45", event: "Shubhali so'rov bloklandi (SQL injection)", level: "warn" as const, source: "WAF" },
  { time: "09:15", event: "2FA yoqildi — admin@zyron.uz", level: "info" as const, source: "Auth" },
  { time: "08:00", event: "Tizim xavfsizlik skanerlandi", level: "info" as const, source: "Auto-scan" },
];

const backups = [
  { id: "bkp-047", name: "Full backup", size: "2.4 GB", date: "17.07.2026 03:00", status: "completed" as const, duration: "12m 34s", type: "Avtomatik" },
  { id: "bkp-046", name: "Database snapshot", size: "890 MB", date: "16.07.2026 15:00", status: "completed" as const, duration: "3m 12s", type: "Qo'lda" },
  { id: "bkp-045", name: "Full backup", size: "2.3 GB", date: "16.07.2026 03:00", status: "completed" as const, duration: "11m 58s", type: "Avtomatik" },
  { id: "bkp-044", name: "Media files", size: "1.1 GB", date: "15.07.2026 12:00", status: "completed" as const, duration: "8m 45s", type: "Avtomatik" },
  { id: "bkp-043", name: "Full backup", size: "2.3 GB", date: "15.07.2026 03:00", status: "failed" as const, duration: "—", type: "Avtomatik" },
  { id: "bkp-042", name: "Database snapshot", size: "870 MB", date: "14.07.2026 18:00", status: "completed" as const, duration: "3m 05s", type: "Qo'lda" },
];

const statusConfig = {
  running: { label: "Ishlayapti", color: "text-emerald-400", bg: "bg-emerald-500/15", dot: "bg-emerald-400" },
  idle: { label: "Kutish", color: "text-amber-400", bg: "bg-amber-500/15", dot: "bg-amber-400" },
  maintenance: { label: "Texnik xizmat", color: "text-blue-400", bg: "bg-blue-500/15", dot: "bg-blue-400" },
};

const deployStatus = {
  success: { label: "Muvaffaqiyatli", color: "text-emerald-400", bg: "bg-emerald-500/15", icon: CheckCircle },
  failed: { label: "Xatolik", color: "text-red-400", bg: "bg-red-500/15", icon: AlertTriangle },
};

const levelColors = {
  info: "text-blue-400 bg-blue-500/15",
  warn: "text-amber-400 bg-amber-500/15",
  critical: "text-red-400 bg-red-500/15",
};
const levelLabels = { info: "Info", warn: "Ogohlantirish", critical: "Kritik" };

function GaugeRing({ value, color, size = 40, label }: { value: number; color: string; size?: number; label?: string }) {
  const r = (size - 6) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={3} />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={3}
          strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round"
          className="transition-all duration-700"
        />
      </svg>
      <span className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[9px] font-bold text-white">{value}%</span>
        {label && <span className="text-[6px] text-gray-500">{label}</span>}
      </span>
    </div>
  );
}

export default function CloudDemo() {
  const [tab, setTab] = useState<Tab>("servers");
  const [selectedServer, setSelectedServer] = useState<string | null>("srv-01");
  const [liveValues, setLiveValues] = useState<Record<string, { cpu: number; ram: number; disk: number }>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveValues(() => {
        const vals: Record<string, { cpu: number; ram: number; disk: number }> = {};
        servers.forEach((s) => {
          if (s.status === "running") {
            vals[s.id] = {
              cpu: Math.min(99, Math.max(5, s.cpu + Math.floor(Math.random() * 15 - 7))),
              ram: Math.min(99, Math.max(10, s.ram + Math.floor(Math.random() * 8 - 4))),
              disk: s.disk,
            };
          }
        });
        return vals;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getCpu = (s: (typeof servers)[0]) => liveValues[s.id]?.cpu ?? s.cpu;
  const getRam = (s: (typeof servers)[0]) => liveValues[s.id]?.ram ?? s.ram;
  const selected = servers.find((s) => s.id === selectedServer);
  const running = servers.filter((s) => s.status === "running").length;

  const tabsConfig: { key: Tab; label: string; icon: typeof Server }[] = [
    { key: "servers", label: "Serverlar", icon: Server },
    { key: "deploy", label: "Deploy", icon: Wifi },
    { key: "security", label: "Xavfsizlik", icon: Shield },
    { key: "backup", label: "Backup", icon: Database },
  ];

  return (
    <div className="flex flex-col gap-3 min-h-[420px]">
      {/* Top Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {[
          { label: "Serverlar", value: `${running}/${servers.length}`, icon: Server, color: "text-emerald-400" },
          { label: "Uptime", value: "99.98%", icon: Activity, color: "text-blue-400" },
          { label: "Xotira", value: "2.4 TB", icon: HardDrive, color: "text-purple-400" },
          { label: "SSL/TLS", value: "A+ (Faol)", icon: Shield, color: "text-emerald-400" },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <s.icon size={13} className={s.color} />
            <div>
              <p className="text-[11px] font-bold text-white">{s.value}</p>
              <p className="text-[9px] text-gray-500">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1.5">
        {tabsConfig.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${
              tab === t.key
                ? "bg-sky-500/20 text-sky-400 border border-sky-500/30"
                : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
            }`}
          >
            <t.icon size={11} />
            {t.label}
          </button>
        ))}
      </div>

      {tab === "servers" && (
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 flex-1">
          <div className="sm:col-span-3 space-y-1.5 overflow-y-auto max-h-[280px]">
            {servers.map((s) => {
              const cfg = statusConfig[s.status];
              const cpu = getCpu(s);
              const ram = getRam(s);
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedServer(s.id)}
                  className={`w-full flex items-center gap-2.5 p-2.5 rounded-lg border transition-all text-left ${
                    selectedServer === s.id ? "bg-sky-500/[0.05] border-sky-500/30" : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]"
                  }`}
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} ${s.status === "running" ? "animate-pulse" : ""}`} />
                    <div className="min-w-0">
                      <p className="text-[10px] font-medium text-white truncate">{s.name}</p>
                      <p className="text-[8px] text-gray-500">{s.region} · {s.id}</p>
                    </div>
                  </div>
                  {s.status === "running" && (
                    <div className="flex gap-2">
                      <GaugeRing value={cpu} color={cpu > 80 ? "#f87171" : cpu > 60 ? "#fbbf24" : "#34d399"} size={32} />
                      <GaugeRing value={ram} color={ram > 85 ? "#f87171" : ram > 70 ? "#fbbf24" : "#60a5fa"} size={32} />
                    </div>
                  )}
                  {s.status !== "running" && (
                    <span className={`text-[8px] px-1.5 py-0.5 rounded ${cfg.bg} ${cfg.color}`}>{cfg.label}</span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="sm:col-span-2 bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
            {selected ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${statusConfig[selected.status].dot} ${selected.status === "running" ? "animate-pulse" : ""}`} />
                  <p className="text-[11px] font-bold text-white">{selected.name}</p>
                </div>
                <div className="space-y-1.5 text-[10px]">
                  {[
                    ["Holat", statusConfig[selected.status].label],
                    ["Region", selected.region],
                    ["OS", selected.os],
                    ["IP", selected.ip],
                    ["Uptime", selected.uptime],
                    ["So'rovlar", selected.requests],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-gray-500">{k}</span>
                      <span className="text-white font-medium">{v}</span>
                    </div>
                  ))}
                </div>
                {selected.status === "running" && (
                  <div className="flex justify-center gap-3 pt-2">
                    <div className="text-center">
                      <GaugeRing value={getCpu(selected)} color={getCpu(selected) > 80 ? "#f87171" : "#34d399"} size={45} label="CPU" />
                    </div>
                    <div className="text-center">
                      <GaugeRing value={getRam(selected)} color={getRam(selected) > 85 ? "#f87171" : "#60a5fa"} size={45} label="RAM" />
                    </div>
                    <div className="text-center">
                      <GaugeRing value={selected.disk} color={selected.disk > 80 ? "#f87171" : "#a78bfa"} size={45} label="Disk" />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-600">
                <Server size={20} className="mb-2" />
                <p className="text-[10px]">Server tanlang</p>
              </div>
            )}
          </div>
        </div>
      )}

      {tab === "deploy" && (
        <div className="flex-1 space-y-1.5 overflow-y-auto max-h-[300px]">
          {deployments.map((dep) => {
            const cfg = deployStatus[dep.status];
            const Icon = cfg.icon;
            return (
              <div
                key={dep.id}
                className={`flex items-center gap-3 p-2.5 rounded-lg border ${
                  dep.status === "failed" ? "bg-red-500/[0.04] border-red-500/15" : "bg-white/[0.02] border-white/[0.06]"
                }`}
              >
                <div className={`w-7 h-7 rounded-lg ${cfg.bg} flex items-center justify-center`}>
                  <Icon size={13} className={cfg.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-sky-400">{dep.branch}</span>
                    <span className="text-[10px] text-gray-300 truncate">{dep.commit}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[9px] text-gray-500">
                    <span>{dep.id}</span>
                    <span>·</span>
                    <span>{dep.author}</span>
                    <span>·</span>
                    <Clock size={9} />
                    <span>{dep.duration}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-[9px] px-1.5 py-0.5 rounded ${cfg.bg} ${cfg.color}`}>
                    {cfg.label}
                  </span>
                  <p className="text-[8px] text-gray-600 mt-0.5">{dep.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab === "security" && (
        <div className="flex-1 space-y-3">
          {/* Security Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "SSL Grade", value: "A+", icon: Lock, color: "text-emerald-400" },
              { label: "Firewall", value: "Faol", icon: Shield, color: "text-emerald-400" },
              { label: "DDoS himoya", value: "CloudFlare", icon: Globe, color: "text-blue-400" },
              { label: "Bloklangan", value: "247", icon: AlertTriangle, color: "text-red-400" },
            ].map((s) => (
              <div key={s.label} className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center">
                <s.icon size={12} className={`${s.color} mx-auto mb-1`} />
                <p className="text-[11px] font-bold text-white">{s.value}</p>
                <p className="text-[8px] text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Security Logs */}
          <div className="overflow-y-auto max-h-[220px] space-y-1.5">
            {securityLogs.map((log, i) => (
              <div key={i} className={`flex items-center gap-2.5 p-2 rounded-lg border ${
                log.level === "critical" ? "bg-red-500/[0.04] border-red-500/15" : "bg-white/[0.02] border-white/[0.06]"
              }`}>
                <span className="text-[9px] text-gray-500 w-10 shrink-0">{log.time}</span>
                <span className={`text-[8px] px-1.5 py-0.5 rounded font-medium shrink-0 ${levelColors[log.level]}`}>
                  {levelLabels[log.level]}
                </span>
                <span className="text-[10px] text-gray-300 flex-1">{log.event}</span>
                <span className="text-[8px] text-gray-500 shrink-0">{log.source}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "backup" && (
        <div className="flex-1 space-y-3">
          {/* Backup Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { label: "Jami backuplar", value: "47", icon: Database },
              { label: "Umumiy hajm", value: "45.8 GB", icon: HardDrive },
              { label: "Oxirgi backup", value: "3 soat oldin", icon: RefreshCw },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <s.icon size={12} className="text-sky-400" />
                <div>
                  <p className="text-[11px] font-bold text-white">{s.value}</p>
                  <p className="text-[8px] text-gray-500">{s.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-y-auto max-h-[240px] space-y-1.5">
            {backups.map((bkp) => (
              <div key={bkp.id} className={`flex items-center gap-3 p-2.5 rounded-lg border ${
                bkp.status === "failed" ? "bg-red-500/[0.04] border-red-500/15" : "bg-white/[0.02] border-white/[0.06]"
              }`}>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                  bkp.status === "completed" ? "bg-emerald-500/15" : "bg-red-500/15"
                }`}>
                  {bkp.status === "completed" ? <CheckCircle size={13} className="text-emerald-400" /> : <AlertTriangle size={13} className="text-red-400" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-medium text-white">{bkp.name}</p>
                  <p className="text-[8px] text-gray-500">{bkp.date} · {bkp.type} · {bkp.duration}</p>
                </div>
                <div className="text-right flex items-center gap-2">
                  <span className="text-[9px] text-gray-400">{bkp.size}</span>
                  {bkp.status === "completed" && (
                    <button className="w-5 h-5 rounded bg-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white">
                      <Download size={10} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
