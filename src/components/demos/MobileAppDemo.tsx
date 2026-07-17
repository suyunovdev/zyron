"use client";

import { useState } from "react";
import { Smartphone, Layers, Plug, Upload, Plus, CheckCircle, AlertCircle, Clock, Globe } from "lucide-react";

type MobTab = "screens" | "components" | "api" | "publish";

const screens = [
  { id: 1, name: "Splash Screen", route: "/splash", platform: "iOS/Android", status: "done", elements: 3 },
  { id: 2, name: "Onboarding", route: "/onboarding", platform: "iOS/Android", status: "done", elements: 8 },
  { id: 3, name: "Login", route: "/auth/login", platform: "iOS/Android", status: "done", elements: 6 },
  { id: 4, name: "Home", route: "/home", platform: "iOS/Android", status: "inprogress", elements: 12 },
  { id: 5, name: "Profile", route: "/profile", platform: "iOS/Android", status: "inprogress", elements: 9 },
  { id: 6, name: "Settings", route: "/settings", platform: "iOS/Android", status: "todo", elements: 7 },
  { id: 7, name: "Notifications", route: "/notifications", platform: "iOS/Android", status: "todo", elements: 5 },
];

const uiComponents = [
  { name: "CustomButton", category: "Input", uses: 24, size: "2.1 KB" },
  { name: "AppHeader", category: "Layout", uses: 18, size: "3.4 KB" },
  { name: "BottomNav", category: "Navigation", uses: 1, size: "4.2 KB" },
  { name: "ProductCard", category: "Card", uses: 15, size: "2.8 KB" },
  { name: "SearchBar", category: "Input", uses: 8, size: "1.6 KB" },
  { name: "AvatarPicker", category: "Media", uses: 3, size: "5.1 KB" },
  { name: "LoadingSpinner", category: "Feedback", uses: 22, size: "0.8 KB" },
];

const apiEndpoints = [
  { method: "GET", path: "/api/users/me", description: "Profil ma'lumotlari", status: "connected", latency: "42ms" },
  { method: "POST", path: "/api/auth/login", description: "Kirish", status: "connected", latency: "88ms" },
  { method: "GET", path: "/api/products", description: "Mahsulotlar ro'yxati", status: "connected", latency: "120ms" },
  { method: "POST", path: "/api/orders", description: "Buyurtma yaratish", status: "error", latency: "—" },
  { method: "GET", path: "/api/notifications", description: "Bildirishnomalar", status: "pending", latency: "—" },
];

const publishStatus = [
  { store: "App Store", platform: "iOS", version: "1.2.0", status: "published", date: "10 Iyul 2025", rating: "4.7" },
  { store: "Google Play", platform: "Android", version: "1.2.1", status: "review", date: "15 Iyul 2025", rating: "4.5" },
  { store: "Huawei AppGallery", platform: "Android", version: "1.1.5", status: "published", date: "01 Iyun 2025", rating: "4.3" },
];

export default function MobileAppDemo() {
  const [tab, setTab] = useState<MobTab>("screens");
  const [selectedScreen, setSelectedScreen] = useState<number | null>(null);

  const tabs = [
    { key: "screens" as MobTab, label: "Ekranlar", icon: Smartphone },
    { key: "components" as MobTab, label: "Komponentlar", icon: Layers },
    { key: "api" as MobTab, label: "API", icon: Plug },
    { key: "publish" as MobTab, label: "Nashr", icon: Upload },
  ];

  const statusBadge = (s: string) => {
    if (s === "done" || s === "published" || s === "connected") return "bg-emerald-500/15 text-emerald-400";
    if (s === "inprogress" || s === "review" || s === "pending") return "bg-amber-500/15 text-amber-400";
    if (s === "error") return "bg-red-500/15 text-red-400";
    return "bg-gray-500/15 text-gray-400";
  };
  const statusLabel = (s: string) => ({
    done: "Tayyor", inprogress: "Jarayonda", todo: "Kutmoqda",
    published: "Nashr etildi", review: "Ko'rib chiqilmoqda",
    connected: "Ulangan", error: "Xato", pending: "Kutmoqda"
  }[s] ?? s);

  return (
    <div className="flex flex-col gap-2.5 min-h-[420px]">
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {tabs.map((t) => (
            <button key={t.key} onClick={() => setTab(t.key)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${tab === t.key ? "bg-violet-500/20 text-violet-400 border border-violet-500/30" : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"}`}>
              <t.icon size={11} /> {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
          <Smartphone size={9} className="text-violet-400" />
          <span>{screens.filter(s => s.status === "done").length}/{screens.length} ekran tayyor</span>
        </div>
      </div>

      {tab === "screens" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Ilova ekranlari</p>
            <button className="flex items-center gap-1 px-2 py-1 rounded-md bg-violet-500/15 text-violet-400 text-[9px] border border-violet-500/20 hover:bg-violet-500/25 transition-colors">
              <Plus size={9} /> Ekran qo'shish
            </button>
          </div>
          <div className="overflow-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Ekran</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Marshrut</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Elementlar</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {screens.map((s) => (
                  <tr key={s.id} onClick={() => setSelectedScreen(selectedScreen === s.id ? null : s.id)}
                    className={`border-b border-white/[0.04] cursor-pointer transition-colors ${selectedScreen === s.id ? "bg-violet-500/[0.06]" : "hover:bg-white/[0.02]"}`}>
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                          <Smartphone size={9} className="text-violet-400" />
                        </div>
                        <span className="text-gray-300 font-medium">{s.name}</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 text-gray-500 font-mono hidden sm:table-cell">{s.route}</td>
                    <td className="py-2 px-2.5 text-gray-400 hidden sm:table-cell">{s.elements} ta</td>
                    <td className="py-2 px-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${statusBadge(s.status)}`}>{statusLabel(s.status)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2.5 grid grid-cols-3 gap-2">
            {[
              { label: "Tayyor", value: screens.filter(s => s.status === "done").length, color: "text-emerald-400", icon: CheckCircle },
              { label: "Jarayonda", value: screens.filter(s => s.status === "inprogress").length, color: "text-amber-400", icon: Clock },
              { label: "Kutmoqda", value: screens.filter(s => s.status === "todo").length, color: "text-gray-400", icon: AlertCircle },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center gap-2">
                <s.icon size={14} className={s.color} />
                <div>
                  <p className="text-[9px] text-gray-500">{s.label}</p>
                  <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "components" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">UI Komponentlar</p>
            <button className="flex items-center gap-1 px-2 py-1 rounded-md bg-violet-500/15 text-violet-400 text-[9px] border border-violet-500/20 hover:bg-violet-500/25 transition-colors">
              <Plus size={9} /> Komponent
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {uiComponents.map((c, i) => (
              <div key={i} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[10px] font-medium text-gray-300">{c.name}</p>
                  <span className="px-1.5 py-0.5 rounded bg-violet-500/15 text-violet-400 text-[8px]">{c.category}</span>
                </div>
                <div className="flex items-center justify-between text-[9px] text-gray-500">
                  <span>{c.uses} ta ishlatildi</span>
                  <span>{c.size}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Jami komponent</p>
              <p className="text-sm font-bold text-white">{uiComponents.length}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Jami ishlatilishlar</p>
              <p className="text-sm font-bold text-violet-400">{uiComponents.reduce((s, c) => s + c.uses, 0)}</p>
            </div>
          </div>
        </div>
      )}

      {tab === "api" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">API integratsiyalar</p>
            <div className="flex gap-1.5 text-[9px]">
              <span className="text-emerald-400 flex items-center gap-1"><CheckCircle size={9} /> {apiEndpoints.filter(a => a.status === "connected").length} ulangan</span>
              <span className="text-red-400 flex items-center gap-1"><AlertCircle size={9} /> {apiEndpoints.filter(a => a.status === "error").length} xato</span>
            </div>
          </div>
          <div className="space-y-2">
            {apiEndpoints.map((ep, i) => (
              <div key={i} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center gap-2.5">
                <span className={`flex-shrink-0 px-1.5 py-0.5 rounded text-[8px] font-mono font-bold ${ep.method === "GET" ? "bg-emerald-500/15 text-emerald-400" : "bg-blue-500/15 text-blue-400"}`}>{ep.method}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-mono text-gray-300">{ep.path}</p>
                  <p className="text-[9px] text-gray-600">{ep.description}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {ep.latency !== "—" && <span className="text-[9px] text-gray-500 flex items-center gap-1"><Globe size={8} />{ep.latency}</span>}
                  <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${statusBadge(ep.status)}`}>{statusLabel(ep.status)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "publish" && (
        <div className="flex-1 space-y-2.5">
          <p className="text-[11px] font-bold text-white">App Store holati</p>
          <div className="space-y-2">
            {publishStatus.map((p, i) => (
              <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="text-[11px] font-medium text-gray-300">{p.store}</p>
                    <p className="text-[9px] text-gray-600">{p.platform} · v{p.version}</p>
                  </div>
                  <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${statusBadge(p.status)}`}>{statusLabel(p.status)}</span>
                </div>
                <div className="flex items-center justify-between text-[9px] text-gray-500">
                  <span>{p.date}</span>
                  <span className="text-amber-400">★ {p.rating}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2">Yangi versiya: v1.3.0</p>
            <div className="space-y-1.5 mb-3">
              {[
                { label: "Kod yig'ish", done: true },
                { label: "Testlash", done: true },
                { label: "App Store review", done: false },
                { label: "Google Play review", done: false },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  {step.done ? <CheckCircle size={10} className="text-emerald-400 flex-shrink-0" /> : <Clock size={10} className="text-gray-500 flex-shrink-0" />}
                  <span className={`text-[9px] ${step.done ? "text-gray-300" : "text-gray-500"}`}>{step.label}</span>
                </div>
              ))}
            </div>
            <button className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-violet-500/20 text-violet-400 text-[10px] font-medium border border-violet-500/30 hover:bg-violet-500/30 transition-colors">
              <Upload size={11} /> Nashr qilish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
