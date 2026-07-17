"use client";

import { useState, useEffect } from "react";
import {
  Leaf, Cpu, TrendingUp, DollarSign, Thermometer, Droplets, Wind,
  AlertTriangle, CheckCircle, ChevronDown, ChevronUp, Zap, Battery,
  BatteryLow, Activity, BarChart2, Calendar, ArrowUpRight, ArrowDownRight,
} from "lucide-react";

type FarmTab = "fields" | "sensors" | "crops" | "moliya";

type Toast = { id: number; msg: string; type: "success" | "warning" | "info" };

function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const show = (msg: string, type: Toast["type"] = "success") => {
    const id = Date.now();
    setToasts((p) => [...p, { id, msg, type }]);
    setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), 2500);
  };
  return { toasts, show };
}

function useClock() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
  useEffect(() => {
    const id = setInterval(() => setTime(new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit", second: "2-digit" })), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function fmt(n: number) {
  return n.toLocaleString("uz-UZ") + " so'm";
}

const fields = [
  { id: 1, name: "1-dala", crop: "Bug'doy", emoji: "🌾", area: 14.5, health: 88, soil: "Qumloq-loy", ph: 6.8, moisture: 52, irrigated: "Bugun, 06:00", status: "normal" },
  { id: 2, name: "2-dala", crop: "Bodring", emoji: "🥒", area: 6.2, health: 74, soil: "Qora tuproq", ph: 7.1, moisture: 68, irrigated: "Kecha, 18:00", status: "warning" },
  { id: 3, name: "3-dala", crop: "Pomidor", emoji: "🍅", area: 8.8, health: 95, soil: "Loy tuproq", ph: 6.5, moisture: 61, irrigated: "Bugun, 05:30", status: "good" },
  { id: 4, name: "4-dala", crop: "Paxta", emoji: "🌿", area: 22.0, health: 61, soil: "Qumloq", ph: 7.4, moisture: 38, irrigated: "2 kun oldin", status: "danger" },
  { id: 5, name: "5-dala", crop: "Uzum", emoji: "🍇", area: 4.3, health: 91, soil: "Shag'alli loy", ph: 6.2, moisture: 55, irrigated: "Bugun, 07:00", status: "good" },
  { id: 6, name: "6-dala", crop: "Piyoz", emoji: "🧅", area: 5.1, health: 82, soil: "Qora tuproq", ph: 6.9, moisture: 48, irrigated: "Kecha, 20:00", status: "normal" },
];

const sensors = [
  { id: "S-01", location: "1-dala", type: "Tuproq namligi", reading: "52%", battery: 91, lastSeen: "2 daq oldin", status: "online" },
  { id: "S-02", location: "2-dala", type: "Havo harorati", reading: "31°C", battery: 67, lastSeen: "1 daq oldin", status: "online" },
  { id: "S-03", location: "3-dala", type: "Tuproq namligi", reading: "61%", battery: 83, lastSeen: "3 daq oldin", status: "online" },
  { id: "S-04", location: "4-dala", type: "Havo harorati", reading: "34°C", battery: 18, lastSeen: "5 daq oldin", status: "low_battery" },
  { id: "S-05", location: "5-dala", type: "Tuproq namligi", reading: "55%", battery: 74, lastSeen: "2 daq oldin", status: "online" },
  { id: "S-06", location: "6-dala", type: "Havo harorati", reading: "29°C", battery: 0, lastSeen: "2 soat oldin", status: "offline" },
];

const crops = [
  {
    id: 1, name: "Bug'doy", emoji: "🌾", field: "1-dala", planted: "15 Mart", harvest: "25 Avgust",
    stage: 3, stages: ["Ekish", "O'sish", "Gullash", "Hosil"], progress: 72,
    yield: 4.2, area: 14.5, cost: 18_400_000, months: [3, 4, 5, 6, 7, 8],
  },
  {
    id: 2, name: "Bodring", emoji: "🥒", field: "2-dala", planted: "1 Aprel", harvest: "10 Iyul",
    stage: 2, stages: ["Ekish", "O'sish", "Gullash", "Hosil"], progress: 55,
    yield: 18.6, area: 6.2, cost: 9_100_000, months: [4, 5, 6, 7],
  },
  {
    id: 3, name: "Pomidor", emoji: "🍅", field: "3-dala", planted: "20 Fevral", harvest: "15 Iyul",
    stage: 4, stages: ["Ekish", "O'sish", "Gullash", "Hosil"], progress: 95,
    yield: 22.4, area: 8.8, cost: 14_200_000, months: [2, 3, 4, 5, 6, 7],
  },
  {
    id: 4, name: "Paxta", emoji: "🌿", field: "4-dala", planted: "5 Aprel", harvest: "10 Oktyabr",
    stage: 2, stages: ["Ekish", "O'sish", "Gullash", "Hosil"], progress: 38,
    yield: 3.1, area: 22.0, cost: 41_600_000, months: [4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 5, name: "Uzum", emoji: "🍇", field: "5-dala", planted: "1 Mart", harvest: "1 Sentyabr",
    stage: 3, stages: ["Ekish", "O'sish", "Gullash", "Hosil"], progress: 68,
    yield: 8.5, area: 4.3, cost: 7_800_000, months: [3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: 6, name: "Piyoz", emoji: "🧅", field: "6-dala", planted: "10 Mart", harvest: "20 Iyun",
    stage: 4, stages: ["Ekish", "O'sish", "Gullash", "Hosil"], progress: 90,
    yield: 24.0, area: 5.1, cost: 5_600_000, months: [3, 4, 5, 6],
  },
];

const monthlyFinance = [
  { month: "Yan", income: 12_000_000, expense: 8_400_000 },
  { month: "Fev", income: 9_000_000, expense: 11_200_000 },
  { month: "Mar", income: 18_500_000, expense: 14_600_000 },
  { month: "Apr", income: 24_000_000, expense: 16_800_000 },
  { month: "May", income: 38_000_000, expense: 19_200_000 },
  { month: "Iyn", income: 52_000_000, expense: 21_400_000 },
  { month: "Iyl", income: 47_000_000, expense: 18_900_000 },
];

const expenses = [
  { name: "Urug'lik", amount: 14_200_000, pct: 28, color: "bg-blue-400" },
  { name: "O'g'it", amount: 11_800_000, pct: 23, color: "bg-emerald-400" },
  { name: "Suv/irrigatsiya", amount: 7_600_000, pct: 15, color: "bg-cyan-400" },
  { name: "Ishchi kuchi", amount: 9_400_000, pct: 18, color: "bg-amber-400" },
  { name: "Transport", amount: 8_200_000, pct: 16, color: "bg-purple-400" },
];

const MONTHS = ["Yan", "Fev", "Mar", "Apr", "May", "Iyn", "Iyl", "Avg", "Sen", "Okt", "Noy", "Dek"];

export default function FarmDemo() {
  const [tab, setTab] = useState<FarmTab>("fields");
  const [selectedField, setSelectedField] = useState<number | null>(null);
  const { toasts, show } = useToast();
  const clock = useClock();
  const [irrigatedFields, setIrrigatedFields] = useState<Set<number>>(new Set());
  const [acknowledgedAlerts, setAcknowledgedAlerts] = useState<Set<number>>(new Set());

  const tabs = [
    { key: "fields" as FarmTab, label: "Dalalar", icon: Leaf },
    { key: "sensors" as FarmTab, label: "Sensorlar", icon: Cpu },
    { key: "crops" as FarmTab, label: "Ekinlar", icon: Activity },
    { key: "moliya" as FarmTab, label: "Moliya", icon: DollarSign },
  ];

  const healthColor = (h: number) =>
    h >= 85 ? "bg-emerald-400" : h >= 65 ? "bg-amber-400" : "bg-red-400";
  const healthText = (h: number) =>
    h >= 85 ? "text-emerald-400" : h >= 65 ? "text-amber-400" : "text-red-400";
  const statusLabel = (s: string) =>
    s === "good" ? "A'lo" : s === "normal" ? "Normal" : s === "warning" ? "Diqqat" : "Xavf!";
  const statusBadge = (s: string) =>
    s === "good" ? "bg-emerald-500/15 text-emerald-400"
    : s === "normal" ? "bg-blue-500/15 text-blue-400"
    : s === "warning" ? "bg-amber-500/15 text-amber-400"
    : "bg-red-500/15 text-red-400";

  const maxBar = Math.max(...monthlyFinance.map((m) => Math.max(m.income, m.expense)));

  return (
    <div className="flex flex-col gap-2.5 min-h-[520px]">
      {/* Toast notifications */}
      <div className="fixed top-3 right-3 z-50 flex flex-col gap-1.5 pointer-events-none">
        {toasts.map((t) => (
          <div key={t.id} className={`px-3 py-2 rounded-lg text-[10px] font-medium shadow-lg border backdrop-blur-sm transition-all ${
            t.type === "success" ? "bg-emerald-900/90 text-emerald-300 border-emerald-500/40"
            : t.type === "warning" ? "bg-amber-900/90 text-amber-300 border-amber-500/40"
            : "bg-blue-900/90 text-blue-300 border-blue-500/40"
          }`}>
            {t.msg}
          </div>
        ))}
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-green-500/[0.06] border border-green-500/15">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          <span className="text-[9px] font-medium text-green-400">ZYRON Farm v1.5</span>
          <span className="text-[9px] text-gray-600">•</span>
          <span className="text-[9px] text-gray-500">Toshkent viloyati fermer xo'jaligi</span>
        </div>
        <div className="flex items-center gap-2 text-[9px] text-gray-500">
          <span>☀ 28°C • Toshkent</span>
          <span className="text-gray-700">|</span>
          <span className="font-mono text-gray-400">{clock}</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${
                tab === t.key
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
              }`}
            >
              <t.icon size={11} /> {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span>Farg'ona viloyati · {fields.reduce((s, f) => s + f.area, 0).toFixed(1)} ga</span>
        </div>
      </div>

      {/* TAB: Dalalar */}
      {tab === "fields" && (
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Dala xaritasi</p>
            <span className="text-[10px] text-gray-500">6 ta dala · click qilib batafsil ko'ring</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {fields.map((f) => {
              const isSelected = selectedField === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setSelectedField(isSelected ? null : f.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "bg-green-500/[0.08] border-green-500/40"
                      : "bg-white/[0.03] border-white/[0.06] hover:border-green-500/25 hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-base">{f.emoji}</span>
                      <p className="text-[10px] font-bold text-white">{f.name}</p>
                    </div>
                    {isSelected ? <ChevronUp size={10} className="text-green-400" /> : <ChevronDown size={10} className="text-gray-500" />}
                  </div>
                  <p className="text-[9px] text-gray-400 mb-2">{f.crop} · {f.area} ga</p>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="flex-1 h-1.5 rounded-full bg-white/[0.06]">
                      <div className={`h-full rounded-full ${healthColor(f.health)}`} style={{ width: `${f.health}%` }} />
                    </div>
                    <span className={`text-[8px] font-bold ${healthText(f.health)}`}>{f.health}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`px-1.5 py-0.5 rounded text-[7px] font-medium ${statusBadge(f.status)}`}>{statusLabel(f.status)}</span>
                    <span className="text-[7px] text-gray-600">💧 {f.irrigated}</span>
                  </div>

                  {isSelected && (
                    <div className="mt-2.5 pt-2.5 border-t border-white/[0.08] grid grid-cols-2 gap-1.5">
                      {[
                        { label: "Tuproq turi", val: f.soil },
                        { label: "pH darajasi", val: f.ph.toString() },
                        { label: "Namlik", val: f.moisture + "%" },
                        { label: "Sug'orildi", val: irrigatedFields.has(f.id) ? "Hozir sug'orildi" : f.irrigated },
                      ].map((d) => (
                        <div key={d.label} className="p-1.5 rounded-lg bg-white/[0.04]">
                          <p className="text-[7px] text-gray-600">{d.label}</p>
                          <p className="text-[9px] text-white font-medium">{d.val}</p>
                        </div>
                      ))}
                      <button
                        onClick={(e) => { e.stopPropagation(); setIrrigatedFields((p) => new Set([...p, f.id])); show(`${f.name} sug'orish boshlandi`, "success"); }}
                        className="col-span-2 mt-1 py-1 rounded-lg bg-blue-500/15 border border-blue-500/25 text-blue-400 text-[8px] font-medium hover:bg-blue-500/25 transition-colors"
                      >
                        {irrigatedFields.has(f.id) ? "Sug'orilmoqda..." : "Sug'orishni boshlash"}
                      </button>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-3 gap-2 mt-1">
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Jami maydon</p>
              <p className="text-sm font-bold text-white">{fields.reduce((s, f) => s + f.area, 0).toFixed(1)} ga</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">O'rt. sog'lom</p>
              <p className="text-sm font-bold text-emerald-400">{Math.round(fields.reduce((s, f) => s + f.health, 0) / fields.length)}%</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Xavfli dalalar</p>
              <p className="text-sm font-bold text-red-400">{fields.filter((f) => f.status === "danger").length} ta</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB: Sensorlar */}
      {tab === "sensors" && (
        <div className="flex-1 flex flex-col gap-2.5">
          {/* Stat cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Harorat", value: "28°C", icon: Thermometer, color: "text-orange-400", bg: "bg-orange-500/10", trend: "up", delta: "+2°" },
              { label: "Namlik", value: "65%", icon: Droplets, color: "text-blue-400", bg: "bg-blue-500/10", trend: "down", delta: "-3%" },
              { label: "Tuproq namligi", value: "42%", icon: Activity, color: "text-emerald-400", bg: "bg-emerald-500/10", trend: "up", delta: "+5%" },
              { label: "Shamol", value: "12 km/h", icon: Wind, color: "text-gray-300", bg: "bg-white/[0.05]", trend: "up", delta: "+4" },
            ].map((s) => (
              <div key={s.label} className={`p-2.5 rounded-xl border border-white/[0.06] ${s.bg}`}>
                <div className="flex items-center justify-between mb-1">
                  <s.icon size={12} className={s.color} />
                  <span className={`text-[8px] flex items-center gap-0.5 ${s.trend === "up" ? "text-emerald-400" : "text-red-400"}`}>
                    {s.trend === "up" ? <ArrowUpRight size={8} /> : <ArrowDownRight size={8} />}
                    {s.delta}
                  </span>
                </div>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
                <p className="text-[8px] text-gray-600 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Sensor table */}
          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Sensor</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Joylashuv</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Ko'rsatkich</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Batareya</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {sensors.map((s) => (
                  <tr key={s.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1.5">
                        <Cpu size={9} className="text-green-400" />
                        <span className="text-gray-300 font-mono font-medium">{s.id}</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400">
                      <div>
                        <p>{s.location}</p>
                        <p className="text-[8px] text-gray-600">{s.type}</p>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 font-bold text-white">{s.reading}</td>
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1.5">
                        {s.battery === 0 ? <Battery size={9} className="text-red-400" /> : s.battery < 25 ? <BatteryLow size={9} className="text-amber-400" /> : <Battery size={9} className="text-emerald-400" />}
                        <div className="w-12 h-1.5 rounded-full bg-white/[0.06]">
                          <div
                            className={`h-full rounded-full ${s.battery === 0 ? "bg-red-400" : s.battery < 25 ? "bg-amber-400" : "bg-emerald-400"}`}
                            style={{ width: `${s.battery}%` }}
                          />
                        </div>
                        <span className={`text-[8px] ${s.battery < 25 ? "text-amber-400" : "text-gray-400"}`}>{s.battery}%</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1">
                        <span className={`w-1.5 h-1.5 rounded-full ${s.status === "online" ? "bg-emerald-400" : s.status === "low_battery" ? "bg-amber-400" : "bg-red-400"}`} />
                        <span className={`text-[8px] ${s.status === "online" ? "text-emerald-400" : s.status === "low_battery" ? "text-amber-400" : "text-red-400"}`}>
                          {s.status === "online" ? "Ishlaydi" : s.status === "low_battery" ? "Batareya kam" : "Oflayn"}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Alerts */}
          <div className="space-y-1.5">
            <p className="text-[10px] font-bold text-white">Ogohlantirishlar</p>
            {[
              { msg: "S-04 sensorida batareya darajasi kritik (18%)", type: "warning", icon: AlertTriangle },
              { msg: "S-06 sensori 2 soatdan beri oflayn — 6-dala nazorat qilinmaydi", type: "danger", icon: Zap },
              { msg: "4-dala harorati 34°C ga yetdi — sug'orish tavsiya etiladi", type: "warning", icon: Thermometer },
            ].map((a, i) => (
              <div key={i} className={`flex items-start gap-2 p-2.5 rounded-lg border ${acknowledgedAlerts.has(i) ? "bg-white/[0.03] border-white/[0.06] opacity-50" : a.type === "danger" ? "bg-red-500/[0.06] border-red-500/20" : "bg-amber-500/[0.06] border-amber-500/20"}`}>
                <a.icon size={11} className={acknowledgedAlerts.has(i) ? "text-gray-600 mt-0.5 flex-shrink-0" : a.type === "danger" ? "text-red-400 mt-0.5 flex-shrink-0" : "text-amber-400 mt-0.5 flex-shrink-0"} />
                <p className="text-[9px] text-gray-300 flex-1">{a.msg}</p>
                {!acknowledgedAlerts.has(i) && (
                  <button
                    onClick={() => { setAcknowledgedAlerts((p) => new Set([...p, i])); show("Ogohlantirish tasdiqlandi", "info"); }}
                    className="flex-shrink-0 px-1.5 py-0.5 rounded bg-white/[0.08] text-[7px] text-gray-400 hover:bg-white/[0.14] transition-colors"
                  >
                    Tasdiqlash
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB: Ekinlar */}
      {tab === "crops" && (
        <div className="flex-1 flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Ekin holati va o'sish bosqichlari</p>
            <span className="text-[10px] text-gray-500">Taxminiy hosil: {crops.reduce((s, c) => s + c.yield * c.area, 0).toFixed(0)} tonna</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {crops.map((c) => (
              <div key={c.id} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{c.emoji}</span>
                    <div>
                      <p className="text-[10px] font-bold text-white">{c.name}</p>
                      <p className="text-[8px] text-gray-500">{c.field}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-emerald-400">{c.yield} t/ga</p>
                    <p className="text-[8px] text-gray-600">taxminiy hosil</p>
                  </div>
                </div>

                {/* Growth stage */}
                <div className="flex items-center gap-1 mb-2">
                  {c.stages.map((stage, idx) => (
                    <div key={stage} className="flex items-center flex-1">
                      <div className={`flex-1 flex flex-col items-center gap-0.5`}>
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center border-2 transition-all ${
                          idx < c.stage ? "bg-green-500 border-green-500"
                          : idx === c.stage - 1 ? "bg-green-500/30 border-green-400"
                          : "bg-white/[0.04] border-white/[0.12]"
                        }`}>
                          {idx < c.stage && <CheckCircle size={8} className="text-white" />}
                        </div>
                        <span className="text-[6px] text-gray-600 text-center leading-tight">{stage}</span>
                      </div>
                      {idx < c.stages.length - 1 && (
                        <div className={`h-0.5 flex-1 -mt-3 mx-0.5 ${idx < c.stage - 1 ? "bg-green-500" : "bg-white/[0.08]"}`} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex-1 h-1.5 rounded-full bg-white/[0.06]">
                    <div className="h-full rounded-full bg-green-400 transition-all" style={{ width: `${c.progress}%` }} />
                  </div>
                  <span className="text-[9px] font-bold text-green-400">{c.progress}%</span>
                </div>

                {/* Seasonal calendar */}
                <div className="flex gap-0.5">
                  {MONTHS.map((m, idx) => (
                    <div
                      key={m}
                      className={`flex-1 h-1.5 rounded-sm ${c.months.includes(idx + 1) ? "bg-green-500/60" : "bg-white/[0.04]"}`}
                      title={m}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-0.5">
                  <span className="text-[6px] text-gray-700">Yan</span>
                  <span className="text-[6px] text-gray-700">Dek</span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 mt-2">
                  <div className="p-1.5 rounded bg-white/[0.03]">
                    <p className="text-[7px] text-gray-600">Ekildi</p>
                    <p className="text-[9px] text-white">{c.planted}</p>
                  </div>
                  <div className="p-1.5 rounded bg-white/[0.03]">
                    <p className="text-[7px] text-gray-600">Hosil</p>
                    <p className="text-[9px] text-amber-400 font-medium">{c.harvest}</p>
                  </div>
                  <div className="p-1.5 rounded bg-white/[0.03]">
                    <p className="text-[7px] text-gray-600">Xarajat</p>
                    <p className="text-[9px] text-white">{(c.cost / 1_000_000).toFixed(1)}M</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total forecast */}
          <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <p className="text-[10px] font-bold text-white mb-2">Mavsumiy hosil taxmini</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Jami hosil", value: crops.reduce((s, c) => s + c.yield * c.area, 0).toFixed(0) + " t", color: "text-emerald-400" },
                { label: "Jami xarajat", value: (crops.reduce((s, c) => s + c.cost, 0) / 1_000_000).toFixed(1) + "M so'm", color: "text-amber-400" },
                { label: "Ekin soni", value: crops.length + " tur", color: "text-white" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-[8px] text-gray-500">{s.label}</p>
                  <p className={`text-xs font-bold ${s.color}`}>{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB: Moliya */}
      {tab === "moliya" && (
        <div className="flex-1 flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Daromad va xarajatlar</p>
            <span className="text-[9px] text-emerald-400 flex items-center gap-1">
              <TrendingUp size={10} /> Foyda: {fmt(monthlyFinance.reduce((s, m) => s + m.income - m.expense, 0))}
            </span>
          </div>

          {/* Bar chart */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="flex items-end gap-2 h-[80px]">
              {monthlyFinance.map((m) => (
                <div key={m.month} className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full flex items-end gap-0.5" style={{ height: "64px" }}>
                    <div
                      className="flex-1 rounded-t bg-emerald-500/40 hover:bg-emerald-500/60 transition-colors"
                      style={{ height: `${(m.income / maxBar) * 100}%` }}
                      title={fmt(m.income)}
                    />
                    <div
                      className="flex-1 rounded-t bg-red-500/35 hover:bg-red-500/55 transition-colors"
                      style={{ height: `${(m.expense / maxBar) * 100}%` }}
                      title={fmt(m.expense)}
                    />
                  </div>
                  <span className="text-[7px] text-gray-600">{m.month}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 mt-2 justify-center">
              <div className="flex items-center gap-1 text-[8px] text-gray-400">
                <div className="w-2 h-2 rounded-sm bg-emerald-500/40" /> Daromad
              </div>
              <div className="flex items-center gap-1 text-[8px] text-gray-400">
                <div className="w-2 h-2 rounded-sm bg-red-500/35" /> Xarajat
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* Expenses breakdown */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[10px] font-bold text-white mb-2.5">Xarajat tarkibi</p>
              <div className="space-y-2">
                {expenses.map((e) => (
                  <div key={e.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] text-gray-400">{e.name}</span>
                      <span className="text-[9px] font-bold text-white">{e.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.06]">
                      <div className={`h-full rounded-full ${e.color}`} style={{ width: `${e.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* P&L summary */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[10px] font-bold text-white mb-2.5">Mavsumiy P&L</p>
              <div className="space-y-2">
                {[
                  { label: "Jami daromad", value: fmt(monthlyFinance.reduce((s, m) => s + m.income, 0)), color: "text-emerald-400" },
                  { label: "Jami xarajat", value: fmt(monthlyFinance.reduce((s, m) => s + m.expense, 0)), color: "text-red-400" },
                  { label: "Sof foyda", value: fmt(monthlyFinance.reduce((s, m) => s + m.income - m.expense, 0)), color: "text-white" },
                  {
                    label: "Foyda marjasi",
                    value: Math.round((monthlyFinance.reduce((s, m) => s + m.income - m.expense, 0) / monthlyFinance.reduce((s, m) => s + m.income, 0)) * 100) + "%",
                    color: "text-green-400",
                  },
                ].map((row, i) => (
                  <div key={row.label} className={`flex justify-between items-center py-1.5 ${i < 3 ? "border-b border-white/[0.05]" : "border-t border-white/[0.08] pt-2"}`}>
                    <span className="text-[9px] text-gray-500">{row.label}</span>
                    <span className={`text-[10px] font-bold ${row.color}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Revenue per crop */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[10px] font-bold text-white mb-2">Ekinlar bo'yicha daromad taxmini</p>
            <div className="space-y-1.5">
              {crops.map((c) => {
                const revenue = c.yield * c.area * 2_800_000;
                const maxRev = Math.max(...crops.map((x) => x.yield * x.area * 2_800_000));
                return (
                  <div key={c.id} className="flex items-center gap-2">
                    <span className="text-sm w-5">{c.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[9px] text-gray-400">{c.name}</span>
                        <span className="text-[9px] font-bold text-white">{fmt(Math.round(revenue))}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/[0.06]">
                        <div className="h-full rounded-full bg-green-500/50" style={{ width: `${(revenue / maxRev) * 100}%` }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
