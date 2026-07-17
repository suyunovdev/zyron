"use client";

import { useState } from "react";
import {
  Smartphone, Database, TrendingUp, Settings, Plus, GripVertical,
  CheckCircle, Users, Clock, BarChart2, Table, Layers, Eye, X
} from "lucide-react";

type MATab = "loyiha" | "sahifalar" | "malumotlar" | "analitika";

const themeColors = [
  { name: "Ko'k", bg: "bg-sky-500", text: "text-sky-400", ring: "ring-sky-500" },
  { name: "Yashil", bg: "bg-emerald-500", text: "text-emerald-400", ring: "ring-emerald-500" },
  { name: "Binafsha", bg: "bg-violet-500", text: "text-violet-400", ring: "ring-violet-500" },
  { name: "To'q sariq", bg: "bg-amber-500", text: "text-amber-400", ring: "ring-amber-500" },
  { name: "Qizil", bg: "bg-rose-500", text: "text-rose-400", ring: "ring-rose-500" },
];

const screens = [
  { id: 1, name: "Bosh sahifa", icon: "⊞", elements: 8, status: "ready", desc: "Slider, katalog, aksiyalar" },
  { id: 2, name: "Katalog", icon: "≡", elements: 12, status: "ready", desc: "Filtrlash, qidiruv, grid/list" },
  { id: 3, name: "Savat", icon: "◎", elements: 6, status: "ready", desc: "Mahsulotlar, jami, to'lov" },
  { id: 4, name: "Profil", icon: "◉", elements: 9, status: "building", desc: "Ma'lumotlar, buyurtmalar" },
  { id: 5, name: "Sozlamalar", icon: "⚙", elements: 5, status: "todo", desc: "Til, bildirishnoma, tema" },
];

const screenWireframes: Record<number, string[]> = {
  1: ["Header + Logo", "Aksiya banneri", "Kategoriyalar", "Eng ko'p sotilgan", "Maxsus takliflar", "Yangiliklar"],
  2: ["Qidiruv paneli", "Filtrlar", "Kategoriya tasmasi", "Mahsulot grid (2 ustun)", "Pagination", "Sort tugmasi"],
  3: ["Mahsulot ro'yxati", "Miqdor o'zgartirish", "Promo kod", "Yetkazib berish", "Jami hisob", "To'lov tugmasi"],
  4: ["Avatar + Ism", "Buyurtmalar tarixi", "Manzillar", "To'lov usullari", "Bonus ballar", "Chiqish"],
  5: ["Til tanlash", "Bildirishnomalar", "Tema (qorong'u/yorug')", "Maxfiylik", "Ilovani baholash"],
};

type DBTable = { name: string; rows: number; cols: string[]; lastUpdated: string; sample: Record<string, string>[] };

const dbTables: DBTable[] = [
  {
    name: "users",
    rows: 3240,
    cols: ["id", "name", "phone", "created_at", "bonus"],
    lastUpdated: "5 daqiqa oldin",
    sample: [
      { id: "1", name: "Aziz Karimov", phone: "+998901234567", created_at: "2025-06-01", bonus: "450" },
      { id: "2", name: "Nilufar Rashidova", phone: "+998912345678", created_at: "2025-06-03", bonus: "120" },
      { id: "3", name: "Sardor Toshmatov", phone: "+998923456789", created_at: "2025-06-08", bonus: "890" },
    ],
  },
  {
    name: "products",
    rows: 284,
    cols: ["id", "name", "price", "category", "stock"],
    lastUpdated: "1 soat oldin",
    sample: [
      { id: "1", name: "iPhone 15 Pro", price: "13,499,000", category: "Telefon", stock: "14" },
      { id: "2", name: "AirPods Pro 2", price: "2,890,000", category: "Aksessuar", stock: "32" },
      { id: "3", name: "MacBook Air M3", price: "18,990,000", category: "Laptop", stock: "7" },
    ],
  },
  {
    name: "orders",
    rows: 1876,
    cols: ["id", "user_id", "total", "status", "date"],
    lastUpdated: "2 daqiqa oldin",
    sample: [
      { id: "#2847", user_id: "1", total: "13,499,000", status: "yetkazildi", date: "2025-07-17" },
      { id: "#2846", user_id: "3", total: "2,890,000", status: "yo'lda", date: "2025-07-17" },
      { id: "#2845", user_id: "2", total: "18,990,000", status: "kutmoqda", date: "2025-07-16" },
    ],
  },
];

const weeklyDAU = [1820, 2140, 1980, 2380, 2760, 2540, 2890];
const topScreensData = [
  { name: "Bosh sahifa", views: 12400, pct: 100 },
  { name: "Katalog", views: 8900, pct: 72 },
  { name: "Savat", views: 5200, pct: 42 },
  { name: "Profil", views: 3100, pct: 25 },
  { name: "Sozlamalar", views: 980, pct: 8 },
];

function fmt(n: number) {
  return n.toLocaleString("uz-UZ") + " so'm";
}

export default function MiniAppDemo() {
  const [tab, setTab] = useState<MATab>("loyiha");
  const [appName, setAppName] = useState("ZYRON Shop");
  const [appDesc, setAppDesc] = useState("Telegram orqali qulay xarid qilish platformasi");
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [selectedScreen, setSelectedScreen] = useState(1);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [showAddTable, setShowAddTable] = useState(false);

  const tabs = [
    { key: "loyiha" as MATab, label: "Loyiha", icon: Settings },
    { key: "sahifalar" as MATab, label: "Sahifalar", icon: Layers },
    { key: "malumotlar" as MATab, label: "Ma'lumotlar", icon: Database },
    { key: "analitika" as MATab, label: "Analitika", icon: TrendingUp },
  ];

  const theme = themeColors[selectedTheme];
  const activeScreen = screens.find((s) => s.id === selectedScreen)!;
  const activeTable = dbTables.find((t) => t.name === selectedTable);

  const statusBadge = (s: string) =>
    s === "ready"
      ? "bg-emerald-500/15 text-emerald-400"
      : s === "building"
      ? "bg-amber-500/15 text-amber-400"
      : "bg-white/[0.06] text-gray-500";

  const statusLabel = (s: string) =>
    ({ ready: "Tayyor", building: "Qurilmoqda", todo: "Kutmoqda" }[s] ?? s);

  return (
    <div className="flex flex-col gap-2.5 min-h-[520px]">
      {/* Tabs */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${
                tab === t.key
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
              }`}
            >
              <t.icon size={11} /> {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
          <Smartphone size={9} className="text-emerald-400" />
          <span>Mini App</span>
        </div>
      </div>

      {/* --- LOYIHA TAB --- */}
      {tab === "loyiha" && (
        <div className="flex-1 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* App Preview Card */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col items-center gap-3">
              <div
                className={`w-16 h-16 rounded-2xl ${theme.bg} flex items-center justify-center shadow-lg`}
              >
                <span className="text-2xl font-bold text-white">{appName[0]}</span>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-white">{appName || "Ilova nomi"}</p>
                <p className="text-[9px] text-gray-500 mt-1">{appDesc || "Tavsif..."}</p>
              </div>
              <div className="flex gap-1.5">
                <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-[8px] text-sky-400">
                  Telegram
                </span>
                <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[8px] text-gray-400">
                  Web
                </span>
              </div>
            </div>

            {/* Settings */}
            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <label className="text-[9px] text-gray-500 mb-1.5 block">Ilova nomi</label>
                <input
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                  className="w-full bg-white/[0.05] border border-white/[0.08] rounded-lg px-2.5 py-2 text-[10px] text-white focus:outline-none focus:border-emerald-500/40 transition-colors"
                />
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <label className="text-[9px] text-gray-500 mb-1.5 block">Tavsif</label>
                <textarea
                  value={appDesc}
                  onChange={(e) => setAppDesc(e.target.value)}
                  rows={2}
                  className="w-full bg-white/[0.05] border border-white/[0.08] rounded-lg px-2.5 py-2 text-[10px] text-white focus:outline-none focus:border-emerald-500/40 transition-colors resize-none"
                />
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <label className="text-[9px] text-gray-500 mb-2 block">Rang sxemasi</label>
                <div className="flex gap-2">
                  {themeColors.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedTheme(i)}
                      className={`w-7 h-7 rounded-full ${c.bg} transition-all ${
                        selectedTheme === i ? `ring-2 ring-offset-2 ring-offset-black ${c.ring} scale-110` : "opacity-60 hover:opacity-100"
                      }`}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Sahifalar", value: screens.length, color: "text-emerald-400" },
              { label: "Jadvallar", value: dbTables.length, color: "text-sky-400" },
              { label: "Foydalanuvchi", value: "3,240", color: "text-violet-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center">
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
                <p className="text-[8px] text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- SAHIFALAR TAB --- */}
      {tab === "sahifalar" && (
        <div className="flex flex-1 gap-3">
          {/* Screen list */}
          <div className="flex flex-col gap-1.5 w-[160px] flex-shrink-0">
            <p className="text-[9px] text-gray-500 font-medium px-1">Sahifalar</p>
            {screens.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedScreen(s.id)}
                className={`flex items-center gap-2 p-2 rounded-lg text-left transition-colors w-full group ${
                  selectedScreen === s.id
                    ? "bg-emerald-500/15 border border-emerald-500/25"
                    : "bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05]"
                }`}
              >
                <GripVertical size={9} className="text-gray-700 flex-shrink-0" />
                <span className="text-sm">{s.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] font-medium text-gray-300 truncate">{s.name}</p>
                  <p className="text-[8px] text-gray-600">{s.elements} element</p>
                </div>
                <span className={`flex-shrink-0 px-1 py-0.5 rounded text-[7px] font-medium ${statusBadge(s.status)}`}>
                  {statusLabel(s.status)}
                </span>
              </button>
            ))}
            <button className="flex items-center gap-1.5 p-2 rounded-lg border border-dashed border-white/[0.1] text-gray-600 hover:text-gray-400 hover:bg-white/[0.02] transition-colors">
              <Plus size={10} />
              <span className="text-[9px]">Yangi sahifa</span>
            </button>
          </div>

          {/* Phone wireframe preview */}
          <div className="flex-1 flex flex-col items-center gap-2">
            <p className="text-[9px] text-gray-500">"{activeScreen.name}" sahifasi</p>
            <div className="w-[140px] bg-white/[0.04] rounded-3xl border border-white/[0.1] overflow-hidden shadow-xl">
              {/* Notch */}
              <div className="flex justify-center pt-2 pb-1">
                <div className="w-12 h-1.5 rounded-full bg-white/[0.15]" />
              </div>
              {/* Status bar */}
              <div className="flex justify-between items-center px-3 pb-1">
                <span className="text-[7px] text-gray-500">9:41</span>
                <div className="flex gap-0.5 items-center">
                  <div className="w-2 h-1 rounded-sm bg-emerald-400" />
                  <div className="w-1 h-1 rounded-sm bg-white/30" />
                </div>
              </div>
              {/* Screen header */}
              <div className={`mx-2 mb-1.5 px-2 py-1.5 rounded-xl ${theme.bg} opacity-80`}>
                <p className="text-[8px] font-bold text-white">{activeScreen.name}</p>
                <p className="text-[6px] text-white/70">{activeScreen.desc}</p>
              </div>
              {/* Elements */}
              <div className="px-2 space-y-1 pb-2">
                {(screenWireframes[activeScreen.id] || []).map((el, i) => (
                  <div key={i} className="h-5 rounded-lg bg-white/[0.05] border border-white/[0.06] flex items-center px-2">
                    <span className="text-[6px] text-gray-500 truncate">{el}</span>
                  </div>
                ))}
              </div>
              {/* Bottom nav */}
              <div className="border-t border-white/[0.06] px-2 py-2 flex justify-around bg-white/[0.02]">
                {["⊞", "≡", "◎", "◉"].map((ic, i) => (
                  <span
                    key={i}
                    className={`text-[11px] ${screens.find(s => s.id === selectedScreen)?.id === i + 1 ? theme.text : "text-gray-600"}`}
                  >
                    {ic}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <p className="text-[8px] text-gray-500">{activeScreen.elements} element</p>
              <span className={`text-[7px] px-1.5 py-0.5 rounded ${statusBadge(activeScreen.status)}`}>
                {statusLabel(activeScreen.status)}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* --- MA'LUMOTLAR TAB --- */}
      {tab === "malumotlar" && (
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Ma'lumotlar bazasi</p>
            <button
              onClick={() => setShowAddTable((p) => !p)}
              className="flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-400 text-[9px] border border-emerald-500/20 hover:bg-emerald-500/25 transition-colors"
            >
              {showAddTable ? <X size={9} /> : <Plus size={9} />}
              {showAddTable ? "Bekor" : "Jadval qo'shish"}
            </button>
          </div>

          {/* Table list */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {dbTables.map((t) => (
              <button
                key={t.name}
                onClick={() => setSelectedTable(selectedTable === t.name ? null : t.name)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedTable === t.name
                    ? "bg-emerald-500/10 border-emerald-500/30"
                    : "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                    <Table size={12} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white font-mono">{t.name}</p>
                    <p className="text-[8px] text-gray-500">{t.rows.toLocaleString()} qator</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {t.cols.map((col) => (
                    <span key={col} className="px-1 py-0.5 rounded bg-white/[0.06] text-[7px] text-gray-500 font-mono">
                      {col}
                    </span>
                  ))}
                </div>
                <p className="text-[7px] text-gray-600 mt-1.5 flex items-center gap-1">
                  <Clock size={7} /> {t.lastUpdated}
                </p>
              </button>
            ))}
          </div>

          {/* Table data preview */}
          {activeTable && (
            <div className="rounded-xl border border-white/[0.06] overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 bg-white/[0.03] border-b border-white/[0.06]">
                <p className="text-[10px] font-bold text-white font-mono">{activeTable.name}</p>
                <span className="text-[8px] text-gray-500">3 ta namuna qator</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-[9px] min-w-[400px]">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      {activeTable.cols.map((col) => (
                        <th key={col} className="text-left py-1.5 px-2.5 text-gray-500 font-mono font-medium">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {activeTable.sample.map((row, i) => (
                      <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                        {activeTable.cols.map((col) => (
                          <td key={col} className="py-1.5 px-2.5 text-gray-300">{row[col]}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* --- ANALITIKA TAB --- */}
      {tab === "analitika" && (
        <div className="flex-1 space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Kunlik faol (DAU)", value: "2,890", color: "text-emerald-400", icon: Users, sub: "+8.2% o'tgan hafta" },
              { label: "Oylik faol (MAU)", value: "18,240", color: "text-sky-400", icon: BarChart2, sub: "DAU/MAU: 15.9%" },
              { label: "Sessiya vaqti", value: "4m 38s", color: "text-violet-400", icon: Clock, sub: "o'rtacha" },
              { label: "Qaytish (D7)", value: "42%", color: "text-orange-400", icon: TrendingUp, sub: "7-kunlik retention" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center gap-1 mb-1">
                  <s.icon size={9} className="text-gray-600" />
                  <p className="text-[8px] text-gray-500">{s.label}</p>
                </div>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
                <p className="text-[7px] text-gray-600 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2">Haftalik faol foydalanuvchilar</p>
            <div className="flex items-end gap-1.5 h-[56px]">
              {weeklyDAU.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div
                    className="w-full rounded-t bg-emerald-500/30 hover:bg-emerald-500/55 transition-colors"
                    style={{ height: `${(v / 2890) * 100}%` }}
                  />
                  <span className="text-[7px] text-gray-600">{["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"][i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-bold text-white mb-2">Top sahifalar</p>
              {topScreensData.map((s, i) => (
                <div key={i} className="flex items-center gap-2 mb-1.5">
                  <span className="text-[8px] text-gray-600 w-3">{i + 1}</span>
                  <span className="text-[8px] text-gray-400 w-20 flex-shrink-0 truncate">{s.name}</span>
                  <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full">
                    <div
                      className="h-1.5 rounded-full bg-emerald-500/60"
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                  <span className="text-[8px] text-gray-500 w-10 text-right">{(s.views / 1000).toFixed(1)}k</span>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-bold text-white mb-2">In-app daromad</p>
              <div className="space-y-2">
                {[
                  { label: "Premium obuna", value: fmt(4_890_000), color: "text-violet-400" },
                  { label: "Bonus ballar", value: fmt(1_240_000), color: "text-amber-400" },
                  { label: "Reklama", value: fmt(680_000), color: "text-sky-400" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between">
                    <span className="text-[9px] text-gray-500">{r.label}</span>
                    <span className={`text-[9px] font-medium ${r.color}`}>{r.value}</span>
                  </div>
                ))}
                <div className="pt-1.5 border-t border-white/[0.06] flex justify-between">
                  <span className="text-[9px] text-white font-medium">Jami</span>
                  <span className="text-[9px] font-bold text-emerald-400">{fmt(6_810_000)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
