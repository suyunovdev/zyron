"use client";

import { useState, useEffect } from "react";
import {
  Search, Package, AlertTriangle, TrendingUp, TrendingDown,
  ArrowUpDown, Truck, BarChart3, Plus, Minus, Eye, Store,
} from "lucide-react";

type Tab = "inventory" | "suppliers" | "movements" | "report";
type SortKey = "name" | "stock" | "price" | "sold";

const inventory = [
  { id: 1, name: "iPhone 15 Pro", sku: "APL-15P-256", category: "Telefonlar", stock: 12, minStock: 5, price: 14200000, cost: 12800000, sold: 47, trend: "up" as const, barcode: "8901234567890" },
  { id: 2, name: "Samsung Galaxy S24", sku: "SAM-S24-128", category: "Telefonlar", stock: 8, minStock: 5, price: 11800000, cost: 10200000, sold: 38, trend: "up" as const, barcode: "8901234567891" },
  { id: 3, name: "AirPods Pro 2", sku: "APL-APP2", category: "Aksessuarlar", stock: 25, minStock: 10, price: 3200000, cost: 2600000, sold: 89, trend: "up" as const, barcode: "8901234567892" },
  { id: 4, name: "MacBook Air M3", sku: "APL-MBA-M3", category: "Noutbuklar", stock: 3, minStock: 5, price: 19500000, cost: 17800000, sold: 12, trend: "down" as const, barcode: "8901234567893" },
  { id: 5, name: "JBL Flip 6", sku: "JBL-FL6", category: "Audio", stock: 0, minStock: 8, price: 1450000, cost: 1100000, sold: 65, trend: "down" as const, barcode: "8901234567894" },
  { id: 6, name: "Apple Watch SE", sku: "APL-WSE-2", category: "Aksessuarlar", stock: 15, minStock: 5, price: 4100000, cost: 3400000, sold: 33, trend: "up" as const, barcode: "8901234567895" },
  { id: 7, name: "Xiaomi Pad 6", sku: "XMI-P6-128", category: "Planshetlar", stock: 2, minStock: 4, price: 4800000, cost: 3900000, sold: 21, trend: "down" as const, barcode: "8901234567896" },
  { id: 8, name: "Samsung TV 55\"", sku: "SAM-TV55-4K", category: "TV", stock: 6, minStock: 3, price: 8900000, cost: 7200000, sold: 14, trend: "up" as const, barcode: "8901234567897" },
  { id: 9, name: "Anker PowerBank", sku: "ANK-PB20K", category: "Aksessuarlar", stock: 42, minStock: 15, price: 380000, cost: 250000, sold: 156, trend: "up" as const, barcode: "8901234567898" },
  { id: 10, name: "Sony WH-1000XM5", sku: "SNY-XM5", category: "Audio", stock: 1, minStock: 3, price: 5200000, cost: 4300000, sold: 28, trend: "down" as const, barcode: "8901234567899" },
  { id: 11, name: "Baseus zaryadka", sku: "BSS-CHG-65W", category: "Aksessuarlar", stock: 34, minStock: 10, price: 280000, cost: 180000, sold: 203, trend: "up" as const, barcode: "8901234567900" },
  { id: 12, name: "Logitech MX Keys", sku: "LOG-MXK-S", category: "Kompyuter", stock: 7, minStock: 3, price: 2100000, cost: 1700000, sold: 19, trend: "up" as const, barcode: "8901234567901" },
  { id: 13, name: "Samsung SSD 1TB", sku: "SAM-SSD-1T", category: "Kompyuter", stock: 18, minStock: 8, price: 1650000, cost: 1300000, sold: 44, trend: "up" as const, barcode: "8901234567902" },
  { id: 14, name: "Philips Monitor 27\"", sku: "PHL-M27-IPS", category: "Kompyuter", stock: 4, minStock: 3, price: 4200000, cost: 3500000, sold: 11, trend: "down" as const, barcode: "8901234567903" },
  { id: 15, name: "Huawei Band 9", sku: "HW-BND9", category: "Aksessuarlar", stock: 22, minStock: 8, price: 650000, cost: 420000, sold: 78, trend: "up" as const, barcode: "8901234567904" },
];

const suppliers = [
  { id: 1, name: "Apple Central Asia", contact: "+998 71 200 11 22", email: "order@apple-ca.uz", products: 5, lastOrder: "12.07.2026", status: "active" as const, rating: 4.8, totalOrders: 47 },
  { id: 2, name: "Samsung Uzbekistan", contact: "+998 71 200 33 44", email: "sales@samsung.uz", products: 3, lastOrder: "10.07.2026", status: "active" as const, rating: 4.5, totalOrders: 38 },
  { id: 3, name: "TechDistribution LLC", contact: "+998 90 123 45 67", email: "info@techdist.uz", products: 8, lastOrder: "08.07.2026", status: "active" as const, rating: 4.2, totalOrders: 62 },
  { id: 4, name: "Global Gadgets", contact: "+998 93 789 01 23", email: "order@ggadgets.com", products: 4, lastOrder: "01.07.2026", status: "inactive" as const, rating: 3.8, totalOrders: 15 },
  { id: 5, name: "AudioPro Import", contact: "+998 95 456 78 90", email: "supply@audiopro.uz", products: 3, lastOrder: "14.07.2026", status: "active" as const, rating: 4.6, totalOrders: 29 },
];

const movements = [
  { id: "MV-001", product: "iPhone 15 Pro", type: "kirim" as const, qty: 20, date: "15.07.2026", from: "Apple Central Asia", doc: "INV-2847" },
  { id: "MV-002", product: "AirPods Pro 2", type: "sotildi" as const, qty: 5, date: "15.07.2026", from: "Mijoz #1247", doc: "CHK-8912" },
  { id: "MV-003", product: "Samsung S24", type: "kirim" as const, qty: 15, date: "14.07.2026", from: "Samsung Uzbekistan", doc: "INV-2846" },
  { id: "MV-004", product: "JBL Flip 6", type: "qaytarildi" as const, qty: 2, date: "14.07.2026", from: "Mijoz #1189", doc: "RET-0034" },
  { id: "MV-005", product: "MacBook Air M3", type: "sotildi" as const, qty: 3, date: "14.07.2026", from: "Mijoz #1250", doc: "CHK-8910" },
  { id: "MV-006", product: "Anker PowerBank", type: "kirim" as const, qty: 50, date: "13.07.2026", from: "TechDistribution", doc: "INV-2845" },
  { id: "MV-007", product: "Baseus zaryadka", type: "sotildi" as const, qty: 12, date: "13.07.2026", from: "Mijoz #1243", doc: "CHK-8908" },
  { id: "MV-008", product: "Sony WH-1000XM5", type: "hisobdan chiqarildi" as const, qty: 1, date: "12.07.2026", from: "Defektli tovar", doc: "WO-0012" },
  { id: "MV-009", product: "Samsung SSD 1TB", type: "kirim" as const, qty: 25, date: "12.07.2026", from: "TechDistribution", doc: "INV-2844" },
  { id: "MV-010", product: "Huawei Band 9", type: "sotildi" as const, qty: 8, date: "11.07.2026", from: "Mijoz #1238", doc: "CHK-8905" },
];

const categories = ["Barchasi", "Telefonlar", "Aksessuarlar", "Noutbuklar", "Audio", "Planshetlar", "TV", "Kompyuter"];

const typeColors = {
  kirim: "bg-emerald-500/15 text-emerald-400",
  sotildi: "bg-blue-500/15 text-blue-400",
  qaytarildi: "bg-amber-500/15 text-amber-400",
  "hisobdan chiqarildi": "bg-red-500/15 text-red-400",
};

const categoryReport = [
  { name: "Telefonlar", revenue: 892400000, items: 85, margin: 14.2 },
  { name: "Aksessuarlar", revenue: 234800000, items: 559, margin: 28.5 },
  { name: "Noutbuklar", revenue: 234000000, items: 12, margin: 8.7 },
  { name: "Audio", revenue: 239650000, items: 93, margin: 22.3 },
  { name: "Kompyuter", revenue: 112350000, items: 74, margin: 18.9 },
  { name: "TV", revenue: 124600000, items: 14, margin: 19.1 },
  { name: "Planshetlar", revenue: 100800000, items: 21, margin: 18.8 },
];

function fmt(n: number) {
  return n.toLocaleString("uz-UZ");
}

const stores = ["Toshkent Markaziy", "Yunusobod filial", "Chilonzor filial"];

export default function RetailDemo() {
  const [tab, setTab] = useState<Tab>("inventory");
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("Barchasi");
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortAsc, setSortAsc] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [clock, setClock] = useState(() => new Date().toLocaleTimeString("uz-UZ"));
  const [toast, setToast] = useState<string | null>(null);
  const [selectedStore, setSelectedStore] = useState(stores[0]);
  const [stockData, setStockData] = useState(inventory.map((p) => ({ id: p.id, stock: p.stock, sold: p.sold })));

  useEffect(() => {
    const t = setInterval(() => setClock(new Date().toLocaleTimeString("uz-UZ")), 1000);
    return () => clearInterval(t);
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const sellProduct = (id: number) => {
    setStockData((prev) =>
      prev.map((p) => p.id === id && p.stock > 0 ? { ...p, stock: p.stock - 1, sold: p.sold + 1 } : p)
    );
    const product = inventory.find((p) => p.id === id);
    showToast(`Muvaffaqiyatli! ${product?.name} sotildi`);
  };

  const getStock = (id: number) => stockData.find((p) => p.id === id)?.stock ?? 0;
  const getSold = (id: number) => stockData.find((p) => p.id === id)?.sold ?? 0;

  const filtered = inventory
    .filter(
      (p) =>
        (cat === "Barchasi" || p.category === cat) &&
        (p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.sku.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => {
      const m = sortAsc ? 1 : -1;
      if (sortKey === "name") return a.name.localeCompare(b.name) * m;
      if (sortKey === "stock") return (getStock(a.id) - getStock(b.id)) * m;
      if (sortKey === "sold") return (getSold(a.id) - getSold(b.id)) * m;
      return ((a[sortKey] as number) - (b[sortKey] as number)) * m;
    });

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(true); }
  };

  const totalItems = stockData.reduce((s, p) => s + p.stock, 0);
  const lowStock = inventory.filter((p) => { const s = getStock(p.id); return s > 0 && s <= p.minStock; }).length;
  const outOfStock = inventory.filter((p) => getStock(p.id) === 0).length;
  const totalValue = inventory.reduce((s, p) => s + getStock(p.id) * p.price, 0);
  const totalProfit = inventory.reduce((s, p) => s + getSold(p.id) * (p.price - p.cost), 0);

  const tabs: { key: Tab; label: string; icon: typeof Package }[] = [
    { key: "inventory", label: "Ombor", icon: Package },
    { key: "suppliers", label: "Yetkazuvchilar", icon: Truck },
    { key: "movements", label: "Harakatlar", icon: ArrowUpDown },
    { key: "report", label: "Hisobot", icon: BarChart3 },
  ];

  const maxRevenue = Math.max(...categoryReport.map((c) => c.revenue));

  return (
    <div className="flex flex-col gap-3 min-h-[420px]">
      {/* Toast */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg bg-emerald-500/90 text-white text-[11px] font-medium shadow-lg animate-fade-in">
          {toast}
        </div>
      )}

      {/* Status Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-semibold text-emerald-400">ZYRON Retail v2.3</span>
          <span className="text-[9px] text-gray-600">•</span>
          <Store size={9} className="text-gray-500" />
          <select
            value={selectedStore}
            onChange={(e) => { setSelectedStore(e.target.value); showToast(`Do'kon o'zgartirildi: ${e.target.value}`); }}
            className="text-[9px] text-gray-400 bg-transparent border-none outline-none cursor-pointer"
          >
            {stores.map((s) => <option key={s} value={s} className="bg-[#0a0f1a]">{s}</option>)}
          </select>
        </div>
        <span className="text-[9px] text-gray-600 font-mono">{clock}</span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {[
          { label: "Jami tovarlar", value: fmt(totalItems), color: "text-blue-400", icon: Package },
          { label: "Kam qolgan", value: lowStock, color: "text-amber-400", icon: AlertTriangle },
          { label: "Tugagan", value: outOfStock, color: "text-red-400", icon: AlertTriangle },
          { label: "Ombor qiymati", value: (totalValue / 1e6).toFixed(0) + "M", color: "text-emerald-400", icon: TrendingUp },
          { label: "Foyda", value: (totalProfit / 1e6).toFixed(0) + "M", color: "text-purple-400", icon: TrendingUp },
        ].map((s) => (
          <div key={s.label} className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <s.icon size={12} className={`${s.color} mb-1`} />
            <p className="text-[11px] font-bold text-white truncate">{s.value}</p>
            <p className="text-[9px] text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1.5">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${
              tab === t.key
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
            }`}
          >
            <t.icon size={11} />
            {t.label}
          </button>
        ))}
      </div>

      {tab === "inventory" && (
        <>
          {/* Search + Filter */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Nomi yoki SKU bo'yicha qidirish..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50"
              />
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex gap-1 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-2 py-0.5 rounded text-[9px] font-medium transition-colors ${
                  cat === c
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "bg-white/[0.04] text-gray-500 border border-transparent hover:text-gray-300"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="flex-1 overflow-auto rounded-lg border border-white/[0.06]">
            <table className="w-full min-w-[500px] text-[10px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  {[
                    { key: "name" as SortKey, label: "Mahsulot" },
                    { key: "stock" as SortKey, label: "Qoldiq" },
                    { key: "price" as SortKey, label: "Narx" },
                    { key: "sold" as SortKey, label: "Sotilgan" },
                  ].map((col) => (
                    <th
                      key={col.key}
                      onClick={() => toggleSort(col.key)}
                      className="text-left py-2 px-2.5 text-gray-500 font-medium cursor-pointer hover:text-gray-300 select-none"
                    >
                      <span className="flex items-center gap-1">
                        {col.label}
                        <ArrowUpDown size={9} className={sortKey === col.key ? "text-emerald-400" : "opacity-30"} />
                      </span>
                    </th>
                  ))}
                  <th className="py-2 px-2 text-gray-500 font-medium w-8"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <tr
                    key={p.id}
                    className={`border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors cursor-pointer ${selectedProduct === p.id ? "bg-emerald-500/[0.05]" : ""}`}
                    onClick={() => setSelectedProduct(selectedProduct === p.id ? null : p.id)}
                  >
                    <td className="py-2 px-2.5">
                      <p className="font-medium text-gray-200">{p.name}</p>
                      <p className="text-[9px] text-gray-600">{p.sku} · {p.category}</p>
                    </td>
                    <td className="py-2 px-2.5">
                      <span
                        className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-medium ${
                          getStock(p.id) === 0
                            ? "bg-red-500/15 text-red-400"
                            : getStock(p.id) <= p.minStock
                            ? "bg-amber-500/15 text-amber-400"
                            : "bg-emerald-500/15 text-emerald-400"
                        }`}
                      >
                        {getStock(p.id) === 0 ? "Tugagan" : getStock(p.id) + " / " + p.minStock}
                      </span>
                    </td>
                    <td className="py-2 px-2.5">
                      <p className="text-gray-300 font-medium">{fmt(p.price)}</p>
                      <p className="text-[8px] text-gray-600">tan: {fmt(p.cost)}</p>
                    </td>
                    <td className="py-2 px-2.5">
                      <span className="flex items-center gap-1 text-gray-300">
                        {getSold(p.id)}
                        {p.trend === "up" ? (
                          <TrendingUp size={10} className="text-emerald-400" />
                        ) : (
                          <TrendingDown size={10} className="text-red-400" />
                        )}
                      </span>
                    </td>
                    <td className="py-2 px-2">
                      <button
                        onClick={(e) => { e.stopPropagation(); sellProduct(p.id); }}
                        disabled={getStock(p.id) === 0}
                        className="px-1.5 py-0.5 rounded text-[8px] font-medium bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        Sot
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Product Detail */}
          {selectedProduct && (() => {
            const p = inventory.find((x) => x.id === selectedProduct)!;
            const margin = ((p.price - p.cost) / p.price * 100).toFixed(1);
            const liveStock = getStock(p.id);
            const liveSold = getSold(p.id);
            return (
              <div className="p-3 rounded-lg bg-white/[0.03] border border-emerald-500/20 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <p className="text-[9px] text-gray-500">Shtrix-kod</p>
                  <p className="text-[10px] text-white font-mono">{p.barcode}</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-500">Marja</p>
                  <p className="text-[10px] text-emerald-400 font-bold">{margin}%</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-500">Jami daromad</p>
                  <p className="text-[10px] text-white font-bold">{fmt(liveSold * p.price)}</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-500">Qoldiq / Sof foyda</p>
                  <p className="text-[10px] text-emerald-400 font-bold">{liveStock} ta · {fmt(liveSold * (p.price - p.cost))}</p>
                </div>
              </div>
            );
          })()}
        </>
      )}

      {tab === "suppliers" && (
        <div className="flex-1 space-y-2 overflow-y-auto max-h-[320px]">
          {suppliers.map((s) => (
            <div key={s.id} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/20 flex items-center justify-center">
                    <Truck size={14} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white">{s.name}</p>
                    <p className="text-[9px] text-gray-500">{s.email}</p>
                    <p className="text-[9px] text-blue-400 font-mono">{s.contact}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => showToast(`Buyurtma yuborildi: ${s.name}`)}
                    className="px-2 py-0.5 rounded text-[8px] font-medium bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25"
                  >
                    Buyurtma
                  </button>
                  <span className={`text-[8px] px-1.5 py-0.5 rounded font-medium ${s.status === "active" ? "bg-emerald-500/15 text-emerald-400" : "bg-gray-500/15 text-gray-400"}`}>
                    {s.status === "active" ? "Faol" : "Nofaol"}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[9px]">
                <div>
                  <p className="text-gray-500">Mahsulotlar</p>
                  <p className="text-white font-medium">{s.products} ta</p>
                </div>
                <div>
                  <p className="text-gray-500">Buyurtmalar</p>
                  <p className="text-white font-medium">{s.totalOrders} ta</p>
                </div>
                <div>
                  <p className="text-gray-500">Oxirgi buyurtma</p>
                  <p className="text-white font-medium">{s.lastOrder}</p>
                </div>
                <div>
                  <p className="text-gray-500">Reyting</p>
                  <p className="text-amber-400 font-medium">{"★".repeat(Math.floor(s.rating))} {s.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "movements" && (
        <div className="flex-1 overflow-auto rounded-lg border border-white/[0.06]">
          <div className="flex items-center justify-between p-2 border-b border-white/[0.06] bg-white/[0.02]">
            <span className="text-[10px] text-gray-400">{movements.length} ta harakat qayd etildi</span>
            <button
              onClick={() => showToast("Muvaffaqiyatli! Yangi harakat qo'shildi")}
              className="flex items-center gap-1 px-2 py-0.5 rounded text-[8px] font-medium bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25"
            >
              <Plus size={8} />
              Yangi
            </button>
          </div>
          <table className="w-full text-[10px]">
            <thead>
              <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                <th className="text-left py-2 px-2 text-gray-500 font-medium">ID</th>
                <th className="text-left py-2 px-2 text-gray-500 font-medium">Mahsulot</th>
                <th className="text-left py-2 px-2 text-gray-500 font-medium">Tur</th>
                <th className="text-center py-2 px-2 text-gray-500 font-medium">Miqdor</th>
                <th className="text-left py-2 px-2 text-gray-500 font-medium">Kimdan/Kimga</th>
                <th className="text-left py-2 px-2 text-gray-500 font-medium">Sana</th>
              </tr>
            </thead>
            <tbody>
              {movements.map((m) => (
                <tr key={m.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                  <td className="py-1.5 px-2 text-blue-400 font-mono font-medium">{m.id}</td>
                  <td className="py-1.5 px-2 text-gray-300">{m.product}</td>
                  <td className="py-1.5 px-2">
                    <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${typeColors[m.type]}`}>
                      {m.type === "kirim" && <Plus size={8} className="inline mr-0.5" />}
                      {m.type === "sotildi" && <Minus size={8} className="inline mr-0.5" />}
                      {m.type}
                    </span>
                  </td>
                  <td className="py-1.5 px-2 text-center text-white font-medium">{m.qty}</td>
                  <td className="py-1.5 px-2 text-gray-400 text-[9px]">{m.from}</td>
                  <td className="py-1.5 px-2 text-gray-500">{m.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "report" && (
        <div className="flex-1 space-y-3">
          {/* Category Revenue */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] font-bold text-white">Kategoriya bo'yicha daromad</p>
              <button
                onClick={() => showToast("Hisobot yuklab olindi!")}
                className="flex items-center gap-1 text-[8px] text-gray-500 hover:text-emerald-400 transition-colors"
              >
                <TrendingUp size={9} />
                Export
              </button>
            </div>
            <div className="space-y-2">
              {categoryReport.map((c) => (
                <div key={c.name} className="flex items-center gap-2">
                  <span className="text-[9px] text-gray-400 w-20">{c.name}</span>
                  <div className="flex-1 h-3 rounded-full bg-white/[0.04] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all"
                      style={{ width: `${(c.revenue / maxRevenue) * 100}%` }}
                    />
                  </div>
                  <span className="text-[9px] text-white font-medium w-14 text-right">{(c.revenue / 1e6).toFixed(0)}M</span>
                  <span className="text-[8px] text-gray-500 w-10 text-right">{c.items} ta</span>
                  <span className="text-[8px] text-emerald-400 w-10 text-right">{c.margin}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center">
              <p className="text-[9px] text-gray-500">Jami sotildi</p>
              <p className="text-sm font-bold text-white">{inventory.reduce((s, p) => s + p.sold, 0)} ta</p>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center">
              <p className="text-[9px] text-gray-500">Jami daromad</p>
              <p className="text-sm font-bold text-emerald-400">{(inventory.reduce((s, p) => s + p.sold * p.price, 0) / 1e9).toFixed(1)}B</p>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center">
              <p className="text-[9px] text-gray-500">O'rtacha marja</p>
              <p className="text-sm font-bold text-purple-400">
                {(inventory.reduce((s, p) => s + ((p.price - p.cost) / p.price * 100), 0) / inventory.length).toFixed(1)}%
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
