"use client";

import { useState, useEffect } from "react";
import {
  Package, Warehouse, BarChart2, ArrowUpCircle, ArrowDownCircle,
  Search, Filter, AlertTriangle, TrendingUp, TrendingDown,
  Thermometer, Calendar, RefreshCw, ArrowRight, CheckCircle,
  Zap, Archive, RotateCcw,
} from "lucide-react";

function useToast() {
  const [toast, setToast] = useState<{ msg: string; key: number } | null>(null);
  const show = (msg: string) => setToast({ msg, key: Date.now() });
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2500);
    return () => clearTimeout(t);
  }, [toast]);
  return { toast, show };
}

function useClock() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
  useEffect(() => {
    const t = setInterval(() => setTime(new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit", second: "2-digit" })), 1000);
    return () => clearInterval(t);
  }, []);
  return time;
}

type Tab = "ombor" | "kirim" | "omborxona" | "tahlil";

function fmt(n: number) {
  return n.toLocaleString("uz-UZ") + " so'm";
}

const CATEGORIES = ["Barchasi", "Elektronika", "Oziq-ovqat", "Kiyim", "Maishiy texnika"];

const products = [
  { id: 1, sku: "EL-001", name: "Samsung Galaxy A55", cat: "Elektronika", stock: 34, min: 10, max: 80, price: 4_850_000 },
  { id: 2, sku: "EL-002", name: "Artel TV 43 dyuym", cat: "Elektronika", stock: 8, min: 10, max: 40, price: 3_200_000 },
  { id: 3, sku: "EL-003", name: "Artel Konditsioner 12", cat: "Maishiy texnika", stock: 0, min: 5, max: 30, price: 5_600_000 },
  { id: 4, sku: "OV-001", name: "Toshkent non (dona)", cat: "Oziq-ovqat", stock: 240, min: 50, max: 500, price: 4_000 },
  { id: 5, sku: "OV-002", name: "Beeline UZ SIM karta", cat: "Elektronika", stock: 6, min: 20, max: 200, price: 15_000 },
  { id: 6, sku: "KI-001", name: "O'zbekiston atlas ko'ylak", cat: "Kiyim", stock: 55, min: 15, max: 100, price: 280_000 },
  { id: 7, sku: "KI-002", name: "Havas sport poyabzal", cat: "Kiyim", stock: 12, min: 20, max: 80, price: 320_000 },
  { id: 8, sku: "MT-001", name: "Artel kir yuvish mashinasi", cat: "Maishiy texnika", stock: 0, min: 3, max: 20, price: 4_100_000 },
  { id: 9, sku: "OV-003", name: "Mushtariy tuxum (quti)", cat: "Oziq-ovqat", stock: 180, min: 40, max: 300, price: 28_000 },
  { id: 10, sku: "EL-004", name: "Xiaomi Redmi Note 13", cat: "Elektronika", stock: 22, min: 8, max: 60, price: 3_700_000 },
  { id: 11, sku: "MT-002", name: "Artel muzlatgich 2 eshikli", cat: "Maishiy texnika", stock: 5, min: 4, max: 18, price: 6_200_000 },
  { id: 12, sku: "KI-003", name: "Anor jeans erkaklar", cat: "Kiyim", stock: 3, min: 10, max: 50, price: 195_000 },
];

type Movement = {
  id: number; date: string; type: "Kirim" | "Chiqim";
  product: string; qty: number; party: string; person: string; doc: string;
};

const movements: Movement[] = [
  { id: 1, date: "17 Iyul 09:12", type: "Kirim", product: "Samsung Galaxy A55", qty: 20, party: "Makro Electronics", person: "Sherzod T.", doc: "KR-2847" },
  { id: 2, date: "17 Iyul 10:05", type: "Chiqim", product: "Toshkent non (dona)", qty: 60, party: "Korzinka Yunusobod", person: "Dilnoza K.", doc: "CH-1192" },
  { id: 3, date: "17 Iyul 11:30", type: "Kirim", product: "Mushtariy tuxum (quti)", qty: 100, party: "Mushtariy ferma", person: "Sherzod T.", doc: "KR-2848" },
  { id: 4, date: "17 Iyul 12:15", type: "Chiqim", product: "Xiaomi Redmi Note 13", qty: 5, party: "Havas Chilonzor", person: "Bobur A.", doc: "CH-1193" },
  { id: 5, date: "17 Iyul 13:00", type: "Kirim", product: "Artel TV 43 dyuym", qty: 10, party: "Artel zavod", person: "Dilnoza K.", doc: "KR-2849" },
  { id: 6, date: "17 Iyul 14:22", type: "Chiqim", product: "O'zbekiston atlas ko'ylak", qty: 8, party: "Anor kiyim do'koni", person: "Bobur A.", doc: "CH-1194" },
  { id: 7, date: "16 Iyul 15:45", type: "Kirim", product: "Artel Konditsioner 12", qty: 15, party: "Artel zavod", person: "Sherzod T.", doc: "KR-2846" },
  { id: 8, date: "16 Iyul 16:30", type: "Chiqim", product: "Havas sport poyabzal", qty: 12, party: "Havas Sergeli", person: "Dilnoza K.", doc: "CH-1191" },
];

const warehouses = [
  {
    id: 1, name: "Toshkent Markaziy", address: "Yunusobod, 7-mavze", capacity: 85,
    totalProducts: 1240, temp: "18-22°C", lastCheck: "15 Iyul 2026", manager: "Sherzod Tursunov",
    zones: [{ name: "A", pct: 82 }, { name: "B", pct: 67 }, { name: "C", pct: 44 }],
  },
  {
    id: 2, name: "Samarqand filial", address: "Registon ko'ch. 14", capacity: 45,
    totalProducts: 430, temp: "16-20°C", lastCheck: "12 Iyul 2026", manager: "Dilnoza Karimova",
    zones: [{ name: "A", pct: 55 }, { name: "B", pct: 38 }, { name: "C", pct: 20 }],
  },
  {
    id: 3, name: "Buxoro filial", address: "Navoiy ko'ch. 3", capacity: 88,
    totalProducts: 680, temp: "19-23°C", lastCheck: "10 Iyul 2026", manager: "Bobur Alimov",
    zones: [{ name: "A", pct: 95 }, { name: "B", pct: 88 }, { name: "C", pct: 71 }],
  },
];

const fastMoving = [
  { name: "Toshkent non (dona)", turns: 9.2, cat: "Oziq-ovqat" },
  { name: "Mushtariy tuxum (quti)", turns: 7.8, cat: "Oziq-ovqat" },
  { name: "Samsung Galaxy A55", turns: 5.1, cat: "Elektronika" },
  { name: "Xiaomi Redmi Note 13", turns: 4.6, cat: "Elektronika" },
  { name: "O'zbekiston atlas ko'ylak", turns: 3.9, cat: "Kiyim" },
];

const monthlyValues = [820, 1040, 960, 1320, 1180, 1560, 1410, 1720, 1640, 1880, 1750, 2100];
const monthLabels = ["Y", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"];
const maxMonthly = Math.max(...monthlyValues);

const catBreakdown = [
  { name: "Elektronika", pct: 38, color: "bg-blue-500" },
  { name: "Maishiy texnika", pct: 27, color: "bg-violet-500" },
  { name: "Oziq-ovqat", pct: 20, color: "bg-emerald-500" },
  { name: "Kiyim", pct: 15, color: "bg-amber-500" },
];

function getStatus(p: typeof products[0]) {
  if (p.stock === 0) return "tugagan";
  if (p.stock < p.min) return "kam";
  return "yetarli";
}

export default function InventoryDemo() {
  const [tab, setTab] = useState<Tab>("ombor");
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("Barchasi");
  const [movFilter, setMovFilter] = useState<"Barchasi" | "Kirim" | "Chiqim">("Barchasi");
  const [transferWh, setTransferWh] = useState<number | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<number | null>(null);
  const [stockData, setStockData] = useState(products.map((p) => ({ ...p })));
  const [movData, setMovData] = useState(movements.map((m) => ({ ...m })));
  const { toast, show } = useToast();
  const clock = useClock();

  const filtered = stockData.filter(
    (p) =>
      (catFilter === "Barchasi" || p.cat === catFilter) &&
      (p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase()))
  );

  const filteredMov = movData.filter(
    (m) => movFilter === "Barchasi" || m.type === movFilter
  );

  const todayMov = movData.filter((m) => m.date.startsWith("17 Iyul"));
  const todayKirim = todayMov.filter((m) => m.type === "Kirim").reduce((s, m) => s + m.qty, 0);
  const todayChiqim = todayMov.filter((m) => m.type === "Chiqim").reduce((s, m) => s + m.qty, 0);

  const totalValue = stockData.reduce((s, p) => s + p.stock * p.price, 0);
  const deadStock = stockData.filter((p) => p.stock === 0).length;
  const reorderList = stockData.filter((p) => p.stock < p.min);

  const handleTransfer = (whId: number, whName: string) => {
    setTransferWh(whId);
    show(`Ko'chirish boshlandi: ${whName} omboridan`);
  };

  const handleReorder = (productName: string, sku: string) => {
    const qty = 20;
    setStockData((prev) => prev.map((p) => p.sku === sku ? { ...p, stock: p.stock + qty } : p));
    setMovData((prev) => [
      { id: Date.now(), date: "17 Iyul bugun", type: "Kirim" as const, product: productName, qty, party: "Avtomatik buyurtma", person: "Tizim", doc: `KR-AUTO-${sku}` },
      ...prev,
    ]);
    show(`Qayta buyurtma berildi: ${productName} (+${qty} dona)`);
  };

  const tabs: { key: Tab; label: string; icon: React.ElementType }[] = [
    { key: "ombor", label: "Ombor", icon: Package },
    { key: "kirim", label: "Kirim/Chiqim", icon: RefreshCw },
    { key: "omborxona", label: "Omborxonalar", icon: Warehouse },
    { key: "tahlil", label: "Tahlil", icon: BarChart2 },
  ];

  return (
    <div className="flex flex-col gap-2.5 min-h-[520px]">
      {/* Status bar */}
      <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-cyan-500/[0.07] border border-cyan-500/20 text-[9px]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 font-semibold">ZYRON Inventory v2.0</span>
          <span className="text-gray-600">·</span>
          <span className="text-gray-400">Markaziy ombor</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-white font-medium">Jami SKU: {stockData.length}</span>
          <span className="text-gray-600">·</span>
          <span className="text-amber-400 font-medium">Ogohlantirish: {reorderList.length}</span>
          <span className="text-gray-600">·</span>
          <span className="font-mono">{clock}</span>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-4 right-4 z-50 px-3 py-2 rounded-lg bg-cyan-500/90 text-white text-[10px] font-semibold shadow-lg">
          {toast.msg}
        </div>
      )}

      {/* Header tabs */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${
                tab === t.key
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                  : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
              }`}
            >
              <t.icon size={11} /> {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-[9px]">
          {reorderList.length > 0 && (
            <span className="flex items-center gap-1 text-red-400 animate-pulse">
              <AlertTriangle size={9} /> {reorderList.length} buyurtma kerak
            </span>
          )}
        </div>
      </div>

      {/* ===== TAB 1: OMBOR ===== */}
      {tab === "ombor" && (
        <div className="flex-1">
          {/* Top stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
            {[
              { label: "Jami SKU", value: stockData.length, color: "text-white" },
              { label: "Umumiy qiymat", value: fmt(totalValue), color: "text-cyan-400" },
              { label: "Kam qoldi", value: reorderList.length, color: "text-amber-400" },
              { label: "Tugagan", value: deadStock, color: "text-red-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-[11px] font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* Search + Category */}
          <div className="flex flex-col sm:flex-row gap-2 mb-2">
            <div className="relative flex-1">
              <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="SKU yoki mahsulot nomi..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50"
              />
            </div>
            <div className="flex gap-1 flex-wrap">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCatFilter(c)}
                  className={`px-2 py-1 rounded-md text-[9px] font-medium transition-colors ${
                    catFilter === c
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                      : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[560px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">SKU</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Mahsulot</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Kategoriya</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Zaxira</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Narx</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => {
                  const status = getStatus(p);
                  return (
                    <tr key={p.id} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                      <td className="py-2 px-2.5 font-mono text-gray-500">{p.sku}</td>
                      <td className="py-2 px-2.5 text-gray-300 font-medium">{p.name}</td>
                      <td className="py-2 px-2.5 text-gray-500 hidden sm:table-cell">{p.cat}</td>
                      <td className="py-2 px-2.5 text-right">
                        <span className={`font-bold ${status === "tugagan" ? "text-red-400" : status === "kam" ? "text-amber-400" : "text-white"}`}>
                          {p.stock}
                        </span>
                        <span className="text-gray-600 text-[8px]"> / {p.min}–{p.max}</span>
                      </td>
                      <td className="py-2 px-2.5 text-right text-gray-400 hidden sm:table-cell">{fmt(p.price)}</td>
                      <td className="py-2 px-2.5">
                        <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium inline-flex items-center gap-1 ${
                          status === "yetarli"
                            ? "bg-emerald-500/15 text-emerald-400"
                            : status === "kam"
                            ? "bg-amber-500/15 text-amber-400"
                            : "bg-red-500/15 text-red-400"
                        }`}>
                          {status === "tugagan" && <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />}
                          {status === "yetarli" ? "Yetarli" : status === "kam" ? "Kam" : "Tugagan"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
                {filtered.length === 0 && (
                  <tr><td colSpan={6} className="py-8 text-center text-[10px] text-gray-600">Mahsulot topilmadi</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ===== TAB 2: KIRIM/CHIQIM ===== */}
      {tab === "kirim" && (
        <div className="flex-1">
          {/* Summary cards */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/20">
              <p className="text-[9px] text-gray-500">Bugun kirim</p>
              <p className="text-sm font-bold text-emerald-400 flex items-center gap-1"><ArrowUpCircle size={13} />{todayKirim} dona</p>
            </div>
            <div className="p-2.5 rounded-lg bg-red-500/[0.08] border border-red-500/20">
              <p className="text-[9px] text-gray-500">Bugun chiqim</p>
              <p className="text-sm font-bold text-red-400 flex items-center gap-1"><ArrowDownCircle size={13} />{todayChiqim} dona</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Harakatlar</p>
              <p className="text-sm font-bold text-white">{todayMov.length} ta</p>
            </div>
          </div>

          {/* Filter */}
          <div className="flex gap-1.5 mb-2">
            {(["Barchasi", "Kirim", "Chiqim"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setMovFilter(f)}
                className={`px-2.5 py-1 rounded-md text-[9px] font-medium transition-colors ${
                  movFilter === f
                    ? f === "Kirim" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : f === "Chiqim" ? "bg-red-500/20 text-red-400 border border-red-500/30"
                    : "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                    : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[560px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Sana</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Tur</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Mahsulot</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Miqdor</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Kontragent</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Mas'ul</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Hujjat</th>
                </tr>
              </thead>
              <tbody>
                {filteredMov.map((m) => (
                  <tr key={m.id} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                    <td className="py-2 px-2.5 text-gray-500 whitespace-nowrap">{m.date}</td>
                    <td className="py-2 px-2.5">
                      <span className={`flex items-center gap-1 font-medium ${m.type === "Kirim" ? "text-emerald-400" : "text-red-400"}`}>
                        {m.type === "Kirim" ? <ArrowUpCircle size={10} /> : <ArrowDownCircle size={10} />}
                        {m.type}
                      </span>
                    </td>
                    <td className="py-2 px-2.5 text-gray-300 font-medium">{m.product}</td>
                    <td className={`py-2 px-2.5 text-right font-bold ${m.type === "Kirim" ? "text-emerald-400" : "text-red-400"}`}>
                      {m.type === "Kirim" ? "+" : "-"}{m.qty}
                    </td>
                    <td className="py-2 px-2.5 text-gray-400 hidden sm:table-cell">{m.party}</td>
                    <td className="py-2 px-2.5 text-gray-500 hidden sm:table-cell">{m.person}</td>
                    <td className="py-2 px-2.5 font-mono text-cyan-400 text-[9px]">{m.doc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ===== TAB 3: OMBORXONALAR ===== */}
      {tab === "omborxona" && (
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Omborxona ko'rinishi</p>
            <button className="flex items-center gap-1 px-2 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/25 text-cyan-400 text-[9px] hover:bg-cyan-500/25 transition-colors">
              <ArrowRight size={9} /> Ko'chirish
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {warehouses.map((wh) => (
              <div
                key={wh.id}
                onClick={() => setSelectedRoute(selectedRoute === wh.id ? null : wh.id)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  selectedRoute === wh.id
                    ? "bg-cyan-500/[0.08] border-cyan-500/30"
                    : "bg-white/[0.03] border-white/[0.06] hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/15 flex items-center justify-center flex-shrink-0">
                    <Warehouse size={13} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white">{wh.name}</p>
                    <p className="text-[9px] text-gray-500">{wh.address}</p>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="flex justify-between text-[9px] mb-1">
                    <span className="text-gray-500">Sig'im band</span>
                    <span className={wh.capacity > 80 ? "text-red-400" : wh.capacity > 60 ? "text-amber-400" : "text-cyan-400"}>
                      {wh.capacity}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06]">
                    <div
                      className={`h-full rounded-full transition-all ${
                        wh.capacity > 80 ? "bg-red-400" : wh.capacity > 60 ? "bg-amber-400" : "bg-cyan-400"
                      }`}
                      style={{ width: `${wh.capacity}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 mb-2">
                  {wh.zones.map((z) => (
                    <div key={z.name} className="p-1.5 rounded bg-white/[0.04] text-center">
                      <p className="text-[8px] text-gray-500">Zona {z.name}</p>
                      <p className={`text-[9px] font-bold ${z.pct > 80 ? "text-red-400" : z.pct > 55 ? "text-amber-400" : "text-emerald-400"}`}>
                        {z.pct}%
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-1 text-[9px]">
                  <div className="flex justify-between">
                    <span className="text-gray-500 flex items-center gap-1"><Thermometer size={8} /> Harorat</span>
                    <span className="text-gray-300">{wh.temp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 flex items-center gap-1"><Calendar size={8} /> Inventar</span>
                    <span className="text-gray-300">{wh.lastCheck}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Mas'ul</span>
                    <span className="text-gray-300">{wh.manager}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Mahsulotlar</span>
                    <span className="text-cyan-400 font-bold">{wh.totalProducts} dona</span>
                  </div>
                </div>

                {selectedRoute === wh.id && (
                  <button
                    onClick={(e) => { e.stopPropagation(); handleTransfer(wh.id, wh.name); }}
                    className="mt-2 w-full text-[9px] py-1 rounded-md bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors flex items-center justify-center gap-1"
                  >
                    <ArrowRight size={9} /> Bu ombordan ko'chirish
                  </button>
                )}
              </div>
            ))}
          </div>

          {transferWh !== null && (
            <div className="p-3 rounded-xl bg-emerald-500/[0.07] border border-emerald-500/20">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-medium text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle size={12} /> Ko'chirish jarayoni boshlandi — {warehouses.find(w => w.id === transferWh)?.name}
                </p>
                <button onClick={() => setTransferWh(null)} className="text-gray-600 hover:text-gray-400 text-[9px]">
                  <RotateCcw size={10} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ===== TAB 4: TAHLIL ===== */}
      {tab === "tahlil" && (
        <div className="flex-1 space-y-3">
          {/* KPI cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Aylanma koeffitsient", value: "5.4x", color: "text-cyan-400", icon: RefreshCw },
              { label: "O'lik zaxira", value: `${deadStock} SKU`, color: "text-red-400", icon: Archive },
              { label: "Qayta buyurtma kerak", value: `${reorderList.length} ta`, color: reorderList.length > 0 ? "text-amber-400" : "text-emerald-400", icon: AlertTriangle },
              { label: "Umumiy qiymat", value: fmt(totalValue), color: "text-emerald-400", icon: TrendingUp },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[9px] text-gray-500">{s.label}</p>
                  <s.icon size={9} className={s.color} />
                </div>
                <p className={`text-[13px] font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* Monthly value bar chart */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-3">Oylik zaxira qiymati (mln so'm)</p>
            <div className="flex items-end gap-1 h-[60px]">
              {monthlyValues.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div
                    className="w-full rounded-t bg-cyan-500/30 hover:bg-cyan-500/55 transition-colors cursor-pointer"
                    style={{ height: `${(v / maxMonthly) * 100}%` }}
                    title={`${v}M so'm`}
                  />
                  <span className="text-[7px] text-gray-600">{monthLabels[i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Category breakdown */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-bold text-white mb-2.5">Kategoriya taqsimoti</p>
              <div className="space-y-2">
                {catBreakdown.map((c) => (
                  <div key={c.name} className="flex items-center gap-2">
                    <span className="text-[9px] text-gray-400 w-28 shrink-0">{c.name}</span>
                    <div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${c.color}`} style={{ width: `${c.pct}%`, opacity: 0.75 }} />
                    </div>
                    <span className="text-[9px] text-gray-300 w-6 text-right">{c.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fast-moving */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-bold text-white mb-2.5">Tez aylanuvchi mahsulotlar</p>
              <div className="space-y-1.5">
                {fastMoving.map((p, i) => (
                  <div key={p.name} className="flex items-center gap-2 text-[9px]">
                    <span className="text-gray-600 w-3 shrink-0">{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-300 truncate">{p.name}</p>
                    </div>
                    <span className="flex items-center gap-0.5 text-emerald-400 font-bold shrink-0">
                      <Zap size={8} /> {p.turns}x
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reorder alerts */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2 flex items-center gap-1.5">
              <AlertTriangle size={11} className="text-amber-400" /> Qayta buyurtma ogohlantirishlari
            </p>
            <div className="space-y-1.5">
              {reorderList.map((p) => {
                const urgent = p.stock === 0;
                return (
                  <div key={p.id} className={`flex items-center gap-2.5 p-2 rounded-lg ${urgent ? "bg-red-500/[0.07] border border-red-500/20" : "bg-amber-500/[0.06] border border-amber-500/15"}`}>
                    {urgent && <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse shrink-0" />}
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-medium text-gray-300 truncate">{p.name}</p>
                      <p className="text-[8px] text-gray-500">{p.sku} · Qoldi: <span className={urgent ? "text-red-400 font-bold" : "text-amber-400 font-bold"}>{p.stock}</span> / Min: {p.min}</p>
                    </div>
                    <button
                      onClick={() => handleReorder(p.name, p.sku)}
                      className={`text-[8px] px-1.5 py-0.5 rounded font-medium shrink-0 transition-colors ${urgent ? "bg-red-500/15 text-red-400 hover:bg-red-500/30" : "bg-amber-500/15 text-amber-400 hover:bg-amber-500/30"}`}
                    >
                      {urgent ? "Buyurtma" : "Tez orada"}
                    </button>
                    {urgent ? <TrendingDown size={10} className="text-red-400 shrink-0" /> : <TrendingDown size={10} className="text-amber-400 shrink-0" />}
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
