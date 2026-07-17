"use client";

import { useState } from "react";
import { Layout, Puzzle, Smartphone, TrendingUp, Plus, Eye, Users, MousePointerClick, Clock } from "lucide-react";

type MATab = "builder" | "components" | "preview" | "analytics";

const appComponents = [
  { id: 1, name: "Header", category: "Layout", icon: "▬", added: false },
  { id: 2, name: "Button", category: "UI", icon: "▣", added: true },
  { id: 3, name: "Card", category: "UI", icon: "▤", added: true },
  { id: 4, name: "List", category: "Data", icon: "≡", added: false },
  { id: 5, name: "Form", category: "Input", icon: "▥", added: true },
  { id: 6, name: "Image", category: "Media", icon: "▨", added: false },
  { id: 7, name: "Chart", category: "Data", icon: "▩", added: false },
  { id: 8, name: "Tab Bar", category: "Navigation", icon: "▦", added: true },
];

const previewScreens = [
  { name: "Bosh sahifa", path: "/home", elements: ["Header", "Card x3", "Button"] },
  { name: "Katalog", path: "/catalog", elements: ["List", "Filter", "Card x8"] },
  { name: "Profil", path: "/profile", elements: ["Avatar", "Form", "Button"] },
];

const analyticsStats = {
  dailyActiveUsers: 3240,
  sessions: 8760,
  avgSession: "4m 32s",
  retention: "68%",
  weekly: [820, 940, 1100, 980, 1240, 1180, 1320],
  topScreens: [
    { name: "Bosh sahifa", views: 12400, pct: 100 },
    { name: "Katalog", views: 8900, pct: 72 },
    { name: "Profil", views: 4200, pct: 34 },
  ],
};

export default function MiniAppDemo() {
  const [tab, setTab] = useState<MATab>("builder");
  const [addedComponents, setAddedComponents] = useState<Record<number, boolean>>(
    Object.fromEntries(appComponents.map(c => [c.id, c.added]))
  );
  const [selectedScreen, setSelectedScreen] = useState(0);

  const tabs = [
    { key: "builder" as MATab, label: "Builder", icon: Layout },
    { key: "components" as MATab, label: "Komponentlar", icon: Puzzle },
    { key: "preview" as MATab, label: "Preview", icon: Eye },
    { key: "analytics" as MATab, label: "Analitika", icon: TrendingUp },
  ];

  const toggleComponent = (id: number) =>
    setAddedComponents(p => ({ ...p, [id]: !p[id] }));

  const addedCount = Object.values(addedComponents).filter(Boolean).length;

  return (
    <div className="flex flex-col gap-2.5 min-h-[420px]">
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {tabs.map((t) => (
            <button key={t.key} onClick={() => setTab(t.key)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${tab === t.key ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"}`}>
              <t.icon size={11} /> {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
          <Smartphone size={9} className="text-emerald-400" />
          <span>{addedCount} komponent</span>
        </div>
      </div>

      {tab === "builder" && (
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">App Builder</p>
            <button className="flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-400 text-[9px] border border-emerald-500/20 hover:bg-emerald-500/25 transition-colors">
              <Plus size={9} /> Sahifa qo'shish
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {previewScreens.map((screen, i) => (
              <div key={i} onClick={() => setSelectedScreen(i)}
                className={`p-3 rounded-xl border cursor-pointer transition-colors ${selectedScreen === i ? "bg-emerald-500/10 border-emerald-500/30" : "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.05]"}`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] font-medium text-gray-300">{screen.name}</p>
                  <span className="text-[9px] text-gray-600 font-mono">{screen.path}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {screen.elements.map((el, j) => (
                    <span key={j} className="px-1.5 py-0.5 rounded bg-white/[0.06] text-[8px] text-gray-500">{el}</span>
                  ))}
                </div>
              </div>
            ))}
            <div className="p-3 rounded-xl border border-dashed border-white/[0.1] flex items-center justify-center cursor-pointer hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-1.5 text-gray-600">
                <Plus size={12} />
                <span className="text-[10px]">Yangi sahifa</span>
              </div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[10px] font-medium text-gray-300 mb-1.5">Tanlangan: {previewScreens[selectedScreen].name}</p>
            <div className="grid grid-cols-3 gap-1.5">
              {previewScreens[selectedScreen].elements.map((el, i) => (
                <div key={i} className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-center">
                  <p className="text-[9px] text-gray-400">{el}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "components" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Komponent kutubxonasi</p>
            <span className="text-[9px] text-gray-500">{addedCount}/{appComponents.length} qo'shilgan</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {appComponents.map((comp) => (
              <div key={comp.id} className={`p-2.5 rounded-lg border flex items-center gap-2.5 transition-colors ${addedComponents[comp.id] ? "bg-emerald-500/[0.06] border-emerald-500/20" : "bg-white/[0.03] border-white/[0.06]"}`}>
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <span className="text-base text-gray-400">{comp.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-medium text-gray-300">{comp.name}</p>
                  <p className="text-[9px] text-gray-600">{comp.category}</p>
                </div>
                <button onClick={() => toggleComponent(comp.id)}
                  className={`flex-shrink-0 px-2 py-1 rounded-md text-[9px] font-medium border transition-colors ${addedComponents[comp.id] ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/20 hover:bg-red-500/15 hover:text-red-400 hover:border-red-500/20" : "bg-white/[0.06] text-gray-400 border-white/[0.08] hover:bg-emerald-500/15 hover:text-emerald-400 hover:border-emerald-500/20"}`}>
                  {addedComponents[comp.id] ? "Qo'shilgan" : "+ Qo'shish"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "preview" && (
        <div className="flex-1 flex gap-3">
          <div className="flex flex-col gap-1.5 flex-shrink-0">
            {previewScreens.map((s, i) => (
              <button key={i} onClick={() => setSelectedScreen(i)}
                className={`px-2.5 py-1.5 rounded-lg text-[9px] text-left transition-colors ${selectedScreen === i ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-white/[0.03] text-gray-400 border border-white/[0.06] hover:bg-white/[0.05]"}`}>
                {s.name}
              </button>
            ))}
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-[140px] bg-white/[0.04] rounded-2xl border border-white/[0.1] overflow-hidden">
              <div className="bg-white/[0.06] px-3 py-2 border-b border-white/[0.06]">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <div className="flex-1 h-1 rounded bg-white/10" />
                </div>
              </div>
              <div className="p-2 space-y-1.5">
                <div className="h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center px-2">
                  <span className="text-[7px] text-emerald-400 font-medium">{previewScreens[selectedScreen].name}</span>
                </div>
                {previewScreens[selectedScreen].elements.map((el, i) => (
                  <div key={i} className="h-6 rounded bg-white/[0.05] border border-white/[0.06] flex items-center px-2">
                    <span className="text-[7px] text-gray-500">{el}</span>
                  </div>
                ))}
                <div className="h-6 rounded bg-white/[0.03] border border-dashed border-white/[0.08] flex items-center justify-center">
                  <span className="text-[7px] text-gray-600">+ Element</span>
                </div>
              </div>
              <div className="bg-white/[0.04] px-2 py-1.5 border-t border-white/[0.06] flex justify-around">
                {["⊞", "≡", "◎"].map((ic, i) => (
                  <span key={i} className="text-[10px] text-gray-500">{ic}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === "analytics" && (
        <div className="flex-1 space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Kunlik foydalanuvchi", value: analyticsStats.dailyActiveUsers.toLocaleString(), color: "text-emerald-400", icon: Users },
              { label: "Sessiyalar", value: analyticsStats.sessions.toLocaleString(), color: "text-sky-400", icon: MousePointerClick },
              { label: "O'rt. vaqt", value: analyticsStats.avgSession, color: "text-violet-400", icon: Clock },
              { label: "Qaytish darajasi", value: analyticsStats.retention, color: "text-orange-400", icon: TrendingUp },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center gap-1 mb-1">
                  <s.icon size={9} className="text-gray-600" />
                  <p className="text-[9px] text-gray-500">{s.label}</p>
                </div>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2">Haftalik faol foydalanuvchilar</p>
            <div className="flex items-end gap-1.5 h-[48px]">
              {analyticsStats.weekly.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full rounded-t bg-emerald-500/30 hover:bg-emerald-500/50 transition-colors" style={{ height: `${(v / 1320) * 100}%` }} />
                  <span className="text-[7px] text-gray-600">{["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"][i]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2">Top sahifalar</p>
            {analyticsStats.topScreens.map((s, i) => (
              <div key={i} className="flex items-center gap-2 mb-1.5">
                <span className="text-[9px] text-gray-400 w-16 flex-shrink-0">{s.name}</span>
                <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full">
                  <div className="h-1.5 rounded-full bg-emerald-500/60" style={{ width: `${s.pct}%` }} />
                </div>
                <span className="text-[9px] text-gray-400 w-12 text-right">{s.views.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
