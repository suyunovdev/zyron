"use client";

import { useState } from "react";
import { HardHat, ListChecks, Users, DollarSign, CheckCircle, Clock, AlertCircle, TrendingUp } from "lucide-react";

type CTab = "projects" | "tasks" | "resources" | "budget";

const projects = [
  { id: 1, name: "Navoiy ko'chasi, 14-bino", type: "Turar-joy", progress: 78, status: "active", deadline: "15 Sep 2025", manager: "A. Toshmatov" },
  { id: 2, name: "Chilonzor savdo markazi", type: "Tijorat", progress: 45, status: "active", deadline: "01 Dec 2025", manager: "B. Mirzaev" },
  { id: 3, name: "Yunusobod ofis binosi", type: "Ofis", progress: 100, status: "done", deadline: "30 Jun 2025", manager: "Z. Norova" },
  { id: 4, name: "Sergeli maktab binosi", type: "Ijtimoiy", progress: 12, status: "active", deadline: "20 Mar 2026", manager: "J. Karimov" },
];

const tasks = [
  { id: 1, project: "Navoiy 14", task: "Poydevor quyish", assignee: "Brigada #1", due: "20 Jul", status: "done" },
  { id: 2, project: "Navoiy 14", task: "Kafel yotqizish", assignee: "Brigada #2", due: "25 Jul", status: "inprogress" },
  { id: 3, project: "Chilonzor SM", task: "Metal konstruksiya", assignee: "Brigada #3", due: "30 Jul", status: "inprogress" },
  { id: 4, project: "Chilonzor SM", task: "Elektr simlari", assignee: "Brigada #4", due: "10 Aug", status: "todo" },
  { id: 5, project: "Sergeli maktab", task: "Yer qazish", assignee: "Brigada #5", due: "05 Aug", status: "todo" },
  { id: 6, project: "Navoiy 14", task: "Deraza o'rnatish", assignee: "Brigada #2", due: "01 Aug", status: "todo" },
];

const resources = [
  { name: "Brigada #1", role: "Qurilish", members: 12, project: "Navoiy 14", utilization: 95 },
  { name: "Brigada #2", role: "Pardozlash", members: 8, project: "Navoiy 14", utilization: 80 },
  { name: "Brigada #3", role: "Metal", members: 10, project: "Chilonzor SM", utilization: 70 },
  { name: "Brigada #4", role: "Elektrik", members: 6, project: "Chilonzor SM", utilization: 40 },
  { name: "Brigada #5", role: "Qazish", members: 15, project: "Sergeli maktab", utilization: 25 },
];

const budgetItems = [
  { category: "Materiallar", planned: 850000000, actual: 780000000 },
  { category: "Ishchi kuchi", planned: 320000000, actual: 310000000 },
  { category: "Texnika ijarasi", planned: 120000000, actual: 135000000 },
  { category: "Transport", planned: 60000000, actual: 58000000 },
  { category: "Boshqa xarajatlar", planned: 50000000, actual: 42000000 },
];

function fmtM(n: number) { return (n / 1_000_000).toFixed(0) + " mln"; }

export default function ConstructionDemo() {
  const [tab, setTab] = useState<CTab>("projects");

  const tabs = [
    { key: "projects" as CTab, label: "Loyihalar", icon: HardHat },
    { key: "tasks" as CTab, label: "Vazifalar", icon: ListChecks },
    { key: "resources" as CTab, label: "Resurslar", icon: Users },
    { key: "budget" as CTab, label: "Byudjet", icon: DollarSign },
  ];

  const statusBadge = (s: string) => {
    if (s === "done") return "bg-emerald-500/15 text-emerald-400";
    if (s === "inprogress") return "bg-blue-500/15 text-blue-400";
    if (s === "active") return "bg-violet-500/15 text-violet-400";
    return "bg-gray-500/15 text-gray-400";
  };
  const statusLabel = (s: string) => ({ done: "Bajarildi", inprogress: "Jarayonda", active: "Faol", todo: "Kutmoqda" }[s] ?? s);

  return (
    <div className="flex flex-col gap-2.5 min-h-[420px]">
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {tabs.map((t) => (
            <button key={t.key} onClick={() => setTab(t.key)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${tab === t.key ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"}`}>
              <t.icon size={11} /> {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          <span>{projects.filter(p => p.status === "active").length} faol loyiha</span>
        </div>
      </div>

      {tab === "projects" && (
        <div className="flex-1">
          <div className="overflow-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Loyiha</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Tur</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Taraqqiyot</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Muddat</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr key={p.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5">
                      <p className="text-gray-300 font-medium">{p.name}</p>
                      <p className="text-[9px] text-gray-600">{p.manager}</p>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400 hidden sm:table-cell">{p.type}</td>
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full min-w-[60px]">
                          <div className="h-1.5 rounded-full bg-orange-500" style={{ width: `${p.progress}%` }} />
                        </div>
                        <span className="text-gray-400 text-[9px] w-7 text-right">{p.progress}%</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400 hidden sm:table-cell">{p.deadline}</td>
                    <td className="py-2 px-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${statusBadge(p.status)}`}>{statusLabel(p.status)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Jami loyiha", value: projects.length, color: "text-white" },
              { label: "Faol", value: projects.filter(p => p.status === "active").length, color: "text-orange-400" },
              { label: "Tugallangan", value: projects.filter(p => p.status === "done").length, color: "text-emerald-400" },
              { label: "O'rtacha progress", value: Math.round(projects.reduce((s, p) => s + p.progress, 0) / projects.length) + "%", color: "text-violet-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "tasks" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Barcha vazifalar</p>
            <div className="flex gap-2 text-[9px]">
              <span className="text-emerald-400 flex items-center gap-1"><CheckCircle size={9} /> {tasks.filter(t => t.status === "done").length} bajarildi</span>
              <span className="text-amber-400 flex items-center gap-1"><Clock size={9} /> {tasks.filter(t => t.status === "todo").length} kutmoqda</span>
            </div>
          </div>
          <div className="space-y-2">
            {tasks.map((t) => (
              <div key={t.id} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${t.status === "done" ? "bg-emerald-400" : t.status === "inprogress" ? "bg-blue-400" : "bg-gray-500"}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-medium text-gray-300">{t.task}</p>
                  <p className="text-[9px] text-gray-600">{t.project} · {t.assignee}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-[9px] text-gray-500">{t.due}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${statusBadge(t.status)}`}>{statusLabel(t.status)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "resources" && (
        <div className="flex-1">
          <p className="text-[11px] font-bold text-white mb-2">Brigada yuklanishi</p>
          <div className="space-y-2">
            {resources.map((r, i) => (
              <div key={i} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center justify-between mb-1.5">
                  <div>
                    <span className="text-[10px] font-medium text-gray-300">{r.name}</span>
                    <span className="text-[9px] text-gray-600 ml-2">{r.role} · {r.members} kishi</span>
                  </div>
                  <span className="text-[9px] text-gray-400">{r.project}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full">
                    <div className={`h-1.5 rounded-full ${r.utilization > 80 ? "bg-red-500" : r.utilization > 50 ? "bg-orange-500" : "bg-emerald-500"}`} style={{ width: `${r.utilization}%` }} />
                  </div>
                  <span className="text-[9px] text-gray-400 w-7 text-right">{r.utilization}%</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2.5 grid grid-cols-3 gap-2">
            {[
              { label: "Jami brigada", value: resources.length, color: "text-white" },
              { label: "Jami ishchi", value: resources.reduce((s, r) => s + r.members, 0), color: "text-orange-400" },
              { label: "O'rt. yuklama", value: Math.round(resources.reduce((s, r) => s + r.utilization, 0) / resources.length) + "%", color: "text-violet-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "budget" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Byudjet nazorati</p>
            <div className="flex items-center gap-1 text-[9px]">
              <TrendingUp size={10} className="text-emerald-400" />
              <span className="text-emerald-400">Tejash: {fmtM(budgetItems.reduce((s, b) => s + (b.planned - b.actual), 0))} so'm</span>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Kategoriya</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Rejalashtirilgan</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Haqiqiy</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Farq</th>
                </tr>
              </thead>
              <tbody>
                {budgetItems.map((b, i) => {
                  const diff = b.planned - b.actual;
                  return (
                    <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                      <td className="py-2 px-2.5 text-gray-300 font-medium">{b.category}</td>
                      <td className="py-2 px-2.5 text-right text-gray-400">{fmtM(b.planned)}</td>
                      <td className="py-2 px-2.5 text-right text-gray-300">{fmtM(b.actual)}</td>
                      <td className={`py-2 px-2.5 text-right font-medium ${diff >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                        {diff >= 0 ? "+" : ""}{fmtM(diff)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { label: "Reja byudjet", value: fmtM(budgetItems.reduce((s, b) => s + b.planned, 0)), color: "text-white" },
              { label: "Sarflangan", value: fmtM(budgetItems.reduce((s, b) => s + b.actual, 0)), color: "text-orange-400" },
              { label: "Qolgan", value: fmtM(budgetItems.reduce((s, b) => s + (b.planned - b.actual), 0)), color: "text-emerald-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-[11px] font-bold ${s.color}`}>{s.value} so'm</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
