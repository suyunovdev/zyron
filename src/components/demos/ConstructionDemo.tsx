"use client";

import { useState } from "react";
import {
  HardHat, Calendar, Users, DollarSign, CheckCircle, Clock, AlertTriangle,
  ChevronDown, ChevronUp, TrendingUp, TrendingDown, Package, Cpu,
  AlertCircle, Plus,
} from "lucide-react";

type CTab = "loyihalar" | "jadval" | "resurslar" | "byudjet";

function fmt(n: number) {
  return n.toLocaleString("uz-UZ") + " so'm";
}
function fmtB(n: number) {
  return (n / 1_000_000_000).toFixed(1) + " mlrd";
}
function fmtM(n: number) {
  return (n / 1_000_000).toFixed(0) + " mln";
}

const projects = [
  {
    id: 1, name: "Toshkent City Tower", desc: "24-qavatli turar-joy binosi", client: "Toshkent City Invest",
    budget: 85_000_000_000, spent: 61_200_000_000, progress: 72, start: "01 Mar 2024", end: "30 Sep 2025",
    status: "faol", manager: "Alisher Toshmatov",
    milestones: [
      { name: "Poydevor", done: true },
      { name: "Karkas (1-12 qavat)", done: true },
      { name: "Karkas (13-24 qavat)", done: false },
      { name: "Tashqi qoplama", done: false },
      { name: "Ichki pardozlash", done: false },
    ],
  },
  {
    id: 2, name: "Samarqand Mall", desc: "5 qavat savdo markazi", client: "SamBuild Group",
    budget: 42_000_000_000, spent: 18_900_000_000, progress: 45, start: "15 Iyn 2024", end: "01 Dec 2025",
    status: "faol", manager: "Bobur Mirzaev",
    milestones: [
      { name: "Yer qazish", done: true },
      { name: "Poydevor", done: true },
      { name: "Karkas", done: false },
      { name: "Tom", done: false },
      { name: "Ichki ishlar", done: false },
    ],
  },
  {
    id: 3, name: "Navoiy Zavod", desc: "Sanoat ishlab chiqarish zavodi", client: "Navoiy Kimyo",
    budget: 120_000_000_000, spent: 6_000_000_000, progress: 5, start: "01 Avg 2025", end: "31 Dec 2026",
    status: "rejada", manager: "Zulfiya Norova",
    milestones: [
      { name: "Loyiha tayyorlash", done: true },
      { name: "Yer qazish", done: false },
      { name: "Poydevor", done: false },
      { name: "Konstruksiya", done: false },
      { name: "Jihozlash", done: false },
    ],
  },
  {
    id: 4, name: "Buxoro Park Hotel", desc: "4 yulduzli mehmonxona", client: "Silk Road Hotels",
    budget: 38_000_000_000, spent: 38_400_000_000, progress: 100, start: "01 Apr 2023", end: "30 Jun 2025",
    status: "tugatildi", manager: "Jasur Karimov",
    milestones: [
      { name: "Poydevor", done: true },
      { name: "Karkas", done: true },
      { name: "Tom", done: true },
      { name: "Ichki ishlar", done: true },
      { name: "Landshaft", done: true },
    ],
  },
];

const ganttTasks = [
  { id: 1, project: "Toshkent City", name: "Poydevor", progress: 100, start: 0, duration: 15, critical: false, overdue: false },
  { id: 2, project: "Toshkent City", name: "Karkas 1-12 qavat", progress: 100, start: 10, duration: 25, critical: false, overdue: false },
  { id: 3, project: "Toshkent City", name: "Karkas 13-24 qavat", progress: 52, start: 32, duration: 20, critical: true, overdue: false },
  { id: 4, project: "Samarqand Mall", name: "Karkas", progress: 35, start: 20, duration: 30, critical: true, overdue: true },
  { id: 5, project: "Toshkent City", name: "Tom ishlari", progress: 0, start: 50, duration: 10, critical: false, overdue: false },
  { id: 6, project: "Toshkent City", name: "Tashqi qoplama", progress: 0, start: 58, duration: 15, critical: false, overdue: false },
  { id: 7, project: "Samarqand Mall", name: "Tom", progress: 0, start: 48, duration: 12, critical: false, overdue: false },
  { id: 8, project: "Toshkent City", name: "Ichki pardozlash", progress: 0, start: 65, duration: 20, critical: false, overdue: false },
];

const workers = [
  { name: "Brigada #1 (Qurilish)", leader: "Muxammad K.", count: 18, project: "Toshkent City", util: 95 },
  { name: "Brigada #2 (Metal)", leader: "Sanjar U.", count: 12, project: "Toshkent City", util: 88 },
  { name: "Brigada #3 (Pardozlash)", leader: "Dilshod R.", count: 8, project: "Samarqand Mall", util: 60 },
  { name: "Brigada #4 (Elektrik)", leader: "Nodir T.", count: 6, project: "Samarqand Mall", util: 42 },
  { name: "Brigada #5 (Qazish)", leader: "Ulmas B.", count: 14, project: "Navoiy Zavod", util: 20 },
];

const equipment = [
  { name: "Tower Crane TK-200", type: "Kran", project: "Toshkent City", status: "ishlamoqda" },
  { name: "Liebherr Excavator", type: "Ekskavator", project: "Samarqand Mall", status: "ishlamoqda" },
  { name: "Schwing Pump S52", type: "Beton pompasi", project: "Toshkent City", status: "tamir" },
  { name: "Mixer MB-500", type: "Beton aralashtirgich", project: "Navoiy Zavod", status: "bosh" },
  { name: "Bulldozer D9R", type: "Buldozer", project: "Navoiy Zavod", status: "bosh" },
];

const materials = [
  { name: "Sement (M500)", unit: "tonna", total: 500, left: 127, reorder: 100, color: "bg-blue-400" },
  { name: "Temir armatura", unit: "tonna", total: 300, left: 48, reorder: 60, color: "bg-gray-400" },
  { name: "G'isht (qizil)", unit: "ming dona", total: 200, left: 31, reorder: 40, color: "bg-red-400" },
  { name: "Qum", unit: "m³", total: 800, left: 312, reorder: 100, color: "bg-amber-400" },
  { name: "Shag'al", unit: "m³", total: 600, left: 89, reorder: 80, color: "bg-stone-400" },
];

const invoices = [
  { id: "INV-0841", vendor: "UzMetall LLC", amount: 4_800_000_000, date: "10 Iyl", status: "tolandi" },
  { id: "INV-0842", vendor: "Sement Zavod", amount: 1_200_000_000, date: "12 Iyl", status: "kutmoqda" },
  { id: "INV-0843", vendor: "Ish kuchi agentligi", amount: 980_000_000, date: "15 Iyl", status: "tolandi" },
  { id: "INV-0844", vendor: "Texnika ijarasi", amount: 650_000_000, date: "17 Iyl", status: "muddati_otgan" },
];

export default function ConstructionDemo() {
  const [tab, setTab] = useState<CTab>("loyihalar");
  const [expanded, setExpanded] = useState<number | null>(null);

  const tabs = [
    { key: "loyihalar" as CTab, label: "Loyihalar", icon: HardHat },
    { key: "jadval" as CTab, label: "Jadval", icon: Calendar },
    { key: "resurslar" as CTab, label: "Resurslar", icon: Users },
    { key: "byudjet" as CTab, label: "Byudjet", icon: DollarSign },
  ];

  const statusBadge = (s: string) =>
    s === "faol" ? "bg-blue-500/15 text-blue-400"
    : s === "tugatildi" ? "bg-emerald-500/15 text-emerald-400"
    : "bg-gray-500/15 text-gray-400";
  const statusLabel = (s: string) =>
    s === "faol" ? "Faol" : s === "tugatildi" ? "Tugatildi" : "Rejada";

  const equipStatusBadge = (s: string) =>
    s === "ishlamoqda" ? "bg-emerald-500/15 text-emerald-400"
    : s === "bosh" ? "bg-blue-500/15 text-blue-400"
    : "bg-red-500/15 text-red-400";
  const equipStatusLabel = (s: string) =>
    s === "ishlamoqda" ? "Ishlamoqda" : s === "bosh" ? "Bo'sh" : "Ta'mirda";

  const invStatusBadge = (s: string) =>
    s === "tolandi" ? "bg-emerald-500/15 text-emerald-400"
    : s === "kutmoqda" ? "bg-blue-500/15 text-blue-400"
    : "bg-red-500/15 text-red-400";
  const invStatusLabel = (s: string) =>
    s === "tolandi" ? "To'landi" : s === "kutmoqda" ? "Kutmoqda" : "Muddati o'tgan";

  const totalBudget = projects.reduce((s, p) => s + p.budget, 0);
  const totalSpent = projects.reduce((s, p) => s + p.spent, 0);

  return (
    <div className="flex flex-col gap-2.5 min-h-[520px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${
                tab === t.key
                  ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                  : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
              }`}
            >
              <t.icon size={11} /> {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>{projects.filter((p) => p.status === "faol").length} faol loyiha</span>
        </div>
      </div>

      {/* TAB: Loyihalar */}
      {tab === "loyihalar" && (
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Loyihalar</p>
            <span className="text-[10px] text-gray-500">Jami: {fmtB(totalBudget)} so'm</span>
          </div>

          <div className="space-y-2">
            {projects.map((p) => {
              const isOpen = expanded === p.id;
              const over = p.spent > p.budget;
              return (
                <div key={p.id} className={`rounded-xl border transition-all ${
                  isOpen ? "bg-amber-500/[0.06] border-amber-500/30" : "bg-white/[0.03] border-white/[0.06]"
                }`}>
                  <button
                    onClick={() => setExpanded(isOpen ? null : p.id)}
                    className="w-full p-3 text-left"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-start gap-2">
                        <div className="w-7 h-7 rounded-lg bg-amber-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <HardHat size={11} className="text-amber-400" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-white">{p.name}</p>
                          <p className="text-[8px] text-gray-500">{p.desc} · {p.client}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className={`px-1.5 py-0.5 rounded text-[7px] font-medium ${statusBadge(p.status)}`}>{statusLabel(p.status)}</span>
                        {isOpen ? <ChevronUp size={10} className="text-gray-500" /> : <ChevronDown size={10} className="text-gray-500" />}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex-1 h-2 rounded-full bg-white/[0.06]">
                        <div
                          className={`h-full rounded-full transition-all ${p.progress === 100 ? "bg-emerald-400" : p.status === "rejada" ? "bg-gray-500" : "bg-amber-400"}`}
                          style={{ width: `${p.progress}%` }}
                        />
                      </div>
                      <span className="text-[9px] font-bold text-white w-7 text-right">{p.progress}%</span>
                    </div>

                    <div className="flex items-center justify-between text-[8px] text-gray-600">
                      <span>{p.start} — {p.end}</span>
                      <span className={over ? "text-red-400 font-bold" : "text-gray-500"}>
                        {fmtB(p.spent)} / {fmtB(p.budget)}
                        {over && " ⚠ Oshib ketdi"}
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-3 pb-3 border-t border-white/[0.08]">
                      <div className="grid grid-cols-2 gap-2 mt-2.5 mb-2.5">
                        <div className="p-2 rounded-lg bg-white/[0.04]">
                          <p className="text-[7px] text-gray-600">Loyiha rahbari</p>
                          <p className="text-[9px] text-white font-medium">{p.manager}</p>
                        </div>
                        <div className="p-2 rounded-lg bg-white/[0.04]">
                          <p className="text-[7px] text-gray-600">Byudjet holati</p>
                          <p className={`text-[9px] font-bold ${over ? "text-red-400" : "text-emerald-400"}`}>
                            {over ? "+" + fmtB(p.spent - p.budget) + " oshdi" : fmtB(p.budget - p.spent) + " qoldi"}
                          </p>
                        </div>
                      </div>
                      <p className="text-[9px] font-bold text-white mb-1.5">Bosqichlar</p>
                      <div className="space-y-1">
                        {p.milestones.map((m, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${m.done ? "bg-emerald-500/20" : "bg-white/[0.05]"}`}>
                              {m.done
                                ? <CheckCircle size={9} className="text-emerald-400" />
                                : <Clock size={9} className="text-gray-600" />}
                            </div>
                            <span className={`text-[9px] ${m.done ? "text-gray-400 line-through" : "text-gray-300"}`}>{m.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Jami loyiha", value: projects.length, color: "text-white" },
              { label: "Faol", value: projects.filter(p => p.status === "faol").length, color: "text-blue-400" },
              { label: "Tugatildi", value: projects.filter(p => p.status === "tugatildi").length, color: "text-emerald-400" },
              { label: "O'rtacha progress", value: Math.round(projects.filter(p=>p.status==="faol").reduce((s,p)=>s+p.progress,0)/projects.filter(p=>p.status==="faol").length)+"%", color: "text-amber-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB: Jadval (Gantt-like) */}
      {tab === "jadval" && (
        <div className="flex-1 flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Ish jadvali (Gantt)</p>
            <div className="flex items-center gap-3 text-[8px]">
              <span className="flex items-center gap-1 text-red-400"><div className="w-2 h-2 rounded-sm bg-red-500/50" /> Kritik yo'l</span>
              <span className="flex items-center gap-1 text-amber-400"><div className="w-2 h-2 rounded-sm bg-amber-500/50" /> Muddati o'tgan</span>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.06] overflow-hidden">
            {/* Timeline header */}
            <div className="flex bg-white/[0.03] border-b border-white/[0.06]">
              <div className="w-36 flex-shrink-0 py-2 px-2.5">
                <span className="text-[8px] text-gray-600">Vazifa</span>
              </div>
              <div className="flex-1 flex">
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="flex-1 text-center py-2 border-l border-white/[0.04]">
                    <span className="text-[7px] text-gray-600">H{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tasks */}
            {ganttTasks.map((task) => (
              <div key={task.id} className={`flex border-b border-white/[0.04] hover:bg-white/[0.02] ${task.overdue ? "bg-amber-500/[0.03]" : ""}`}>
                <div className="w-36 flex-shrink-0 py-2 px-2.5 flex items-center gap-1.5">
                  {task.overdue && <AlertTriangle size={8} className="text-amber-400 flex-shrink-0" />}
                  <div>
                    <p className="text-[9px] text-gray-300 leading-tight">{task.name}</p>
                    <p className="text-[7px] text-gray-600">{task.project}</p>
                  </div>
                </div>
                <div className="flex-1 relative py-2.5 flex items-center">
                  {/* Background cells */}
                  <div className="absolute inset-0 flex">
                    {Array.from({ length: 10 }, (_, i) => (
                      <div key={i} className="flex-1 border-l border-white/[0.04]" />
                    ))}
                  </div>
                  {/* Task bar */}
                  <div
                    className="absolute h-4 rounded flex items-center overflow-hidden"
                    style={{
                      left: `${task.start}%`,
                      width: `${task.duration}%`,
                      backgroundColor: task.critical ? "rgba(239,68,68,0.18)" : task.overdue ? "rgba(245,158,11,0.18)" : "rgba(245,158,11,0.12)",
                      borderLeft: `2px solid ${task.critical ? "rgb(239,68,68)" : task.overdue ? "rgb(245,158,11)" : "rgb(245,158,11)"}`,
                    }}
                  >
                    <div
                      className={`h-full ${task.critical ? "bg-red-500/40" : task.overdue ? "bg-amber-500/40" : "bg-amber-500/30"}`}
                      style={{ width: `${task.progress}%` }}
                    />
                    {task.progress > 20 && (
                      <span className="absolute left-1 text-[7px] font-bold text-white">{task.progress}%</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Bajarildi", value: ganttTasks.filter(t=>t.progress===100).length, color: "text-emerald-400" },
              { label: "Jarayonda", value: ganttTasks.filter(t=>t.progress>0&&t.progress<100).length, color: "text-blue-400" },
              { label: "Kechikkan", value: ganttTasks.filter(t=>t.overdue).length, color: "text-amber-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value} ta</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB: Resurslar */}
      {tab === "resurslar" && (
        <div className="flex-1 flex flex-col gap-2.5">
          {/* Workers */}
          <div>
            <p className="text-[11px] font-bold text-white mb-2">Ishchilar (Brigadalar)</p>
            <div className="space-y-1.5">
              {workers.map((w, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-[8px] font-bold text-white">{i + 1}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-medium text-gray-300">{w.name}</span>
                        <p className="text-[8px] text-gray-600">Brigada boshlig'i: {w.leader} · {w.count} kishi</p>
                      </div>
                    </div>
                    <span className="text-[8px] text-gray-500">{w.project}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full">
                      <div
                        className={`h-1.5 rounded-full ${w.util > 80 ? "bg-red-500" : w.util > 50 ? "bg-amber-400" : "bg-emerald-400"}`}
                        style={{ width: `${w.util}%` }}
                      />
                    </div>
                    <span className={`text-[9px] font-bold w-8 text-right ${w.util > 80 ? "text-red-400" : w.util > 50 ? "text-amber-400" : "text-emerald-400"}`}>{w.util}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment */}
          <div>
            <p className="text-[11px] font-bold text-white mb-2">Uskunalar</p>
            <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
              <table className="w-full text-[10px] min-w-[500px]">
                <thead>
                  <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                    <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Uskuna</th>
                    <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Turi</th>
                    <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Loyiha</th>
                    <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                  </tr>
                </thead>
                <tbody>
                  {equipment.map((e, i) => (
                    <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                      <td className="py-2 px-2.5">
                        <div className="flex items-center gap-1.5">
                          <Cpu size={9} className="text-amber-400" />
                          <span className="text-gray-300 font-medium">{e.name}</span>
                        </div>
                      </td>
                      <td className="py-2 px-2.5 text-gray-500">{e.type}</td>
                      <td className="py-2 px-2.5 text-gray-400">{e.project}</td>
                      <td className="py-2 px-2.5">
                        <span className={`px-1.5 py-0.5 rounded text-[7px] font-medium ${equipStatusBadge(e.status)}`}>
                          {equipStatusLabel(e.status)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Materials */}
          <div>
            <p className="text-[11px] font-bold text-white mb-2">Material inventarizatsiya</p>
            <div className="space-y-1.5">
              {materials.map((m) => {
                const pct = (m.left / m.total) * 100;
                const low = m.left <= m.reorder;
                return (
                  <div key={m.name} className={`p-2.5 rounded-lg border ${low ? "bg-red-500/[0.05] border-red-500/20" : "bg-white/[0.03] border-white/[0.06]"}`}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <Package size={9} className={low ? "text-red-400" : "text-amber-400"} />
                        <span className="text-[9px] font-medium text-gray-300">{m.name}</span>
                        {low && <span className="px-1 py-0.5 rounded text-[7px] bg-red-500/15 text-red-400">Qayta buyurtma kerak</span>}
                      </div>
                      <span className="text-[9px] text-gray-400">{m.left} / {m.total} {m.unit}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.06]">
                      <div className={`h-full rounded-full ${low ? "bg-red-400" : m.color}`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB: Byudjet */}
      {tab === "byudjet" && (
        <div className="flex-1 flex flex-col gap-2.5">
          {/* Summary */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold text-white">Jami byudjet holati</p>
              <div className="flex items-center gap-1 text-[9px]">
                {totalSpent > totalBudget
                  ? <><TrendingDown size={10} className="text-red-400" /><span className="text-red-400">Oshib ketdi</span></>
                  : <><TrendingUp size={10} className="text-emerald-400" /><span className="text-emerald-400">Nazoratda</span></>}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Reja byudjet", value: fmtB(totalBudget), color: "text-white" },
                { label: "Sarflangan", value: fmtB(totalSpent), color: "text-amber-400" },
                { label: totalSpent > totalBudget ? "Oshdi" : "Qoldi", value: fmtB(Math.abs(totalBudget - totalSpent)), color: totalSpent > totalBudget ? "text-red-400" : "text-emerald-400" },
              ].map((s) => (
                <div key={s.label} className="p-2 rounded-lg bg-white/[0.05]">
                  <p className="text-[8px] text-gray-500">{s.label}</p>
                  <p className={`text-xs font-bold ${s.color}`}>{s.value} so'm</p>
                </div>
              ))}
            </div>
          </div>

          {/* Budget vs Actual per project */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[10px] font-bold text-white mb-2.5">Loyihalar bo'yicha Reja vs Haqiqiy</p>
            <div className="space-y-3">
              {projects.map((p) => {
                const over = p.spent > p.budget;
                const spentPct = Math.min((p.spent / p.budget) * 100, 120);
                return (
                  <div key={p.id}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] text-gray-400">{p.name}</span>
                      {over && <span className="text-[7px] text-red-400 flex items-center gap-0.5"><AlertCircle size={7} /> Oshdi</span>}
                    </div>
                    <div className="relative h-3 rounded-full bg-white/[0.06] overflow-hidden">
                      {/* Planned */}
                      <div className="absolute inset-0 rounded-full bg-white/[0.08]" />
                      {/* Actual */}
                      <div
                        className={`absolute inset-y-0 left-0 rounded-full ${over ? "bg-red-500/50" : "bg-amber-500/50"}`}
                        style={{ width: `${Math.min(spentPct, 100)}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-0.5 text-[7px] text-gray-600">
                      <span>Reja: {fmtB(p.budget)} so'm</span>
                      <span className={over ? "text-red-400" : ""}>Haqiqiy: {fmtB(p.spent)} so'm ({Math.round(spentPct)}%)</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cost breakdown */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[10px] font-bold text-white mb-2">Xarajat tarkibi</p>
            <div className="flex gap-1.5 mb-2">
              {[
                { label: "Material", pct: 45, color: "bg-blue-400" },
                { label: "Ishchi kuchi", pct: 30, color: "bg-emerald-400" },
                { label: "Uskunalar", pct: 15, color: "bg-amber-400" },
                { label: "Boshqa", pct: 10, color: "bg-gray-400" },
              ].map((c) => (
                <div key={c.label} className="flex-1 text-center">
                  <div className="h-8 rounded flex items-end justify-center overflow-hidden bg-white/[0.04]">
                    <div className={`w-full ${c.color} opacity-60`} style={{ height: `${c.pct}%` }} />
                  </div>
                  <p className="text-[7px] text-gray-600 mt-0.5">{c.label}</p>
                  <p className="text-[8px] font-bold text-white">{c.pct}%</p>
                </div>
              ))}
            </div>
          </div>

          {/* Invoices */}
          <div>
            <p className="text-[10px] font-bold text-white mb-2">Hisob-fakturalar</p>
            <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
              <table className="w-full text-[10px] min-w-[500px]">
                <thead>
                  <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                    <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Raqam</th>
                    <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Yetkazuvchi</th>
                    <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Summa</th>
                    <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Sana</th>
                    <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((inv) => (
                    <tr key={inv.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                      <td className="py-2 px-2.5 text-amber-400 font-medium font-mono">{inv.id}</td>
                      <td className="py-2 px-2.5 text-gray-300">{inv.vendor}</td>
                      <td className="py-2 px-2.5 text-right text-white font-medium">{fmtB(inv.amount)} so'm</td>
                      <td className="py-2 px-2.5 text-gray-500">{inv.date}</td>
                      <td className="py-2 px-2.5">
                        <span className={`px-1.5 py-0.5 rounded text-[7px] font-medium ${invStatusBadge(inv.status)}`}>
                          {invStatusLabel(inv.status)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
