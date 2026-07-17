"use client";

import { useState, useEffect } from "react";
import { Clock, Users, ChefHat, Bell, Check, UtensilsCrossed, ClipboardList, TrendingUp, AlertTriangle, Plus, Utensils } from "lucide-react";

type TableStatus = "free" | "occupied" | "reserved" | "bill";
type Tab = "tables" | "kitchen" | "menu" | "stats";

const initialTables: { id: number; seats: number; status: TableStatus; guest?: string; waiter?: string; time?: string; order?: string[]; total?: number }[] = [
  { id: 1, seats: 2, status: "occupied", guest: "Aziz S.", waiter: "Dilshod", time: "12:30", order: ["Osh", "Salat", "Choy x2"], total: 78000 },
  { id: 2, seats: 4, status: "free" },
  { id: 3, seats: 2, status: "reserved", guest: "Nodira K.", time: "13:00" },
  { id: 4, seats: 6, status: "occupied", guest: "Jasur M.", waiter: "Sardor", time: "12:15", order: ["Somsa x4", "Lag'mon x2", "Kompot x3", "Non x2"], total: 156000 },
  { id: 5, seats: 4, status: "bill", guest: "Dilshod R.", waiter: "Dilshod", time: "11:45", order: ["Sho'rva", "Non", "Choy x2"], total: 52000 },
  { id: 6, seats: 2, status: "free" },
  { id: 7, seats: 8, status: "occupied", guest: "Sardor T.", waiter: "Malika", time: "12:00", order: ["Kabob x3", "Osh x2", "Salat x4", "Pepsi x5", "Non x3"], total: 284000 },
  { id: 8, seats: 4, status: "free" },
  { id: 9, seats: 2, status: "reserved", guest: "Malika A.", time: "14:00" },
  { id: 10, seats: 4, status: "occupied", guest: "Botir N.", waiter: "Sardor", time: "12:40", order: ["Manti x6", "Achichuk", "Choy x3", "Non"], total: 124000 },
  { id: 11, seats: 6, status: "free" },
  { id: 12, seats: 2, status: "bill", guest: "Kamola L.", waiter: "Malika", time: "11:30", order: ["Palov", "Non", "Fanta"], total: 65000 },
  { id: 13, seats: 4, status: "occupied", guest: "Sherzod U.", waiter: "Dilshod", time: "12:50", order: ["Tandir kabob", "Osh", "Salat x2", "Choy x4"], total: 198000 },
  { id: 14, seats: 2, status: "free" },
  { id: 15, seats: 6, status: "reserved", guest: "Kompaniya bayram", time: "18:00" },
  { id: 16, seats: 4, status: "occupied", guest: "Anvar B.", waiter: "Malika", time: "13:00", order: ["Lag'mon", "Somsa x2", "Kompot"], total: 68000 },
];

const kitchenOrders = [
  { table: 1, items: ["Osh", "Salat"], status: "cooking" as const, time: "5 min", waiter: "Dilshod", chef: "Akmal", priority: false },
  { table: 4, items: ["Lag'mon x2"], status: "ready" as const, time: "0 min", waiter: "Sardor", chef: "Akmal", priority: false },
  { table: 7, items: ["Kabob x3", "Osh x2"], status: "cooking" as const, time: "8 min", waiter: "Malika", chef: "Sherzod", priority: true },
  { table: 10, items: ["Manti x6"], status: "cooking" as const, time: "12 min", waiter: "Sardor", chef: "Akmal", priority: false },
  { table: 1, items: ["Choy x2"], status: "ready" as const, time: "0 min", waiter: "Dilshod", chef: "Kamola", priority: false },
  { table: 13, items: ["Tandir kabob", "Osh"], status: "cooking" as const, time: "15 min", waiter: "Dilshod", chef: "Sherzod", priority: true },
  { table: 16, items: ["Lag'mon", "Somsa x2"], status: "cooking" as const, time: "7 min", waiter: "Malika", chef: "Akmal", priority: false },
  { table: 13, items: ["Salat x2", "Choy x4"], status: "ready" as const, time: "0 min", waiter: "Dilshod", chef: "Kamola", priority: false },
];

const menuItems = [
  { cat: "Asosiy taomlar", items: [
    { name: "Osh (Palov)", price: 35000, available: true, popular: true },
    { name: "Lag'mon", price: 28000, available: true, popular: true },
    { name: "Sho'rva", price: 22000, available: true, popular: false },
    { name: "Manti (6 dona)", price: 30000, available: true, popular: true },
    { name: "Tandir kabob", price: 55000, available: true, popular: true },
    { name: "Kabob", price: 42000, available: true, popular: false },
    { name: "Chuchvara", price: 25000, available: false, popular: false },
  ]},
  { cat: "Salatlar", items: [
    { name: "Achichuk", price: 12000, available: true, popular: true },
    { name: "Salat", price: 15000, available: true, popular: false },
    { name: "Ovqatga salat", price: 18000, available: true, popular: false },
  ]},
  { cat: "Ichimliklar", items: [
    { name: "Choy (choynak)", price: 8000, available: true, popular: true },
    { name: "Kompot", price: 10000, available: true, popular: false },
    { name: "Pepsi/Cola", price: 12000, available: true, popular: false },
    { name: "Fanta/Sprite", price: 12000, available: true, popular: false },
    { name: "Mineral suv", price: 6000, available: true, popular: false },
  ]},
  { cat: "Qo'shimcha", items: [
    { name: "Non", price: 3000, available: true, popular: true },
    { name: "Somsa", price: 15000, available: true, popular: true },
    { name: "Qaymoq", price: 5000, available: true, popular: false },
  ]},
];

const statusColors: Record<TableStatus, string> = {
  free: "bg-emerald-500/15 border-emerald-500/30 hover:bg-emerald-500/25",
  occupied: "bg-blue-500/15 border-blue-500/30 hover:bg-blue-500/25",
  reserved: "bg-amber-500/15 border-amber-500/30 hover:bg-amber-500/25",
  bill: "bg-purple-500/15 border-purple-500/30 hover:bg-purple-500/25",
};
const statusLabels: Record<TableStatus, string> = { free: "Bo'sh", occupied: "Band", reserved: "Bron", bill: "Hisob" };
const statusTextColor: Record<TableStatus, string> = { free: "text-emerald-400", occupied: "text-blue-400", reserved: "text-amber-400", bill: "text-purple-400" };

function fmt(n: number) { return n.toLocaleString("uz-UZ") + " so'm"; }

export default function RestaurantDemo() {
  const [tables, setTables] = useState(initialTables);
  const [selected, setSelected] = useState<number | null>(null);
  const [tab, setTab] = useState<Tab>("tables");
  const [time, setTime] = useState(new Date());
  const [toast, setToast] = useState<string | null>(null);
  const [bellTables, setBellTables] = useState<Set<number>>(new Set());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 2500);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const selectedTable = tables.find((t) => t.id === selected);
  const stats = {
    free: tables.filter((t) => t.status === "free").length,
    occupied: tables.filter((t) => t.status === "occupied").length,
    reserved: tables.filter((t) => t.status === "reserved").length,
    totalRevenue: tables.filter((t) => t.total).reduce((s, t) => s + (t.total || 0), 0),
  };

  return (
    <div className="flex flex-col gap-2.5 min-h-[520px]">
      {/* Status Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-orange-500/20 flex items-center justify-center">
            <Utensils size={10} className="text-orange-400" />
          </div>
          <span className="text-[10px] font-bold text-gray-300">ZYRON Restaurant</span>
          <span className="text-[8px] text-gray-600">v2.0</span>
          <span className="text-[8px] text-gray-600 border-l border-white/10 pl-2">Toshkent, Mirzo Ulug&apos;bek ko&apos;chasi 14 · +998 71 300-02-02</span>
        </div>
        <span className="text-[9px] text-gray-600">{time.toLocaleDateString("uz-UZ", { day: "numeric", month: "short" })} · {time.toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" })}</span>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {[
          { label: "Bo'sh stollar", value: stats.free, icon: Check, color: "text-emerald-400" },
          { label: "Band", value: stats.occupied, icon: Users, color: "text-blue-400" },
          { label: "Bron", value: stats.reserved, icon: Clock, color: "text-amber-400" },
          { label: "Oshxonada", value: kitchenOrders.filter((o) => o.status === "cooking").length, icon: ChefHat, color: "text-orange-400" },
          { label: "Bugungi tushum", value: fmt(stats.totalRevenue), icon: TrendingUp, color: "text-purple-400" },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <s.icon size={12} className={s.color} />
            <div>
              <p className="text-[11px] font-bold text-white">{s.value}</p>
              <p className="text-[8px] text-gray-500">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1.5">
        {([
          { key: "tables" as Tab, label: "Stollar", icon: Users },
          { key: "kitchen" as Tab, label: "Oshxona", icon: ChefHat },
          { key: "menu" as Tab, label: "Menyu", icon: ClipboardList },
          { key: "stats" as Tab, label: "Hisobot", icon: TrendingUp },
        ]).map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${
              tab === t.key
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
            }`}
          >
            <t.icon size={11} /> {t.label}
          </button>
        ))}
      </div>

      {tab === "tables" && (
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 flex-1">
          <div className="col-span-full sm:col-span-3 grid grid-cols-3 sm:grid-cols-4 gap-1.5 content-start max-h-[380px] overflow-y-auto">
            {tables.map((table) => (
              <button
                key={table.id}
                onClick={() => setSelected(table.id === selected ? null : table.id)}
                className={`relative p-2 rounded-lg border transition-all ${statusColors[table.status]} ${selected === table.id ? "ring-1 ring-white/30 scale-[1.03]" : ""}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold text-white">#{table.id}</span>
                  <span className={`text-[7px] font-medium ${statusTextColor[table.status]}`}>{statusLabels[table.status]}</span>
                </div>
                <div className="flex items-center gap-1 text-[8px] text-gray-500">
                  <Users size={8} /><span>{table.seats}</span>
                  {table.time && <><Clock size={8} className="ml-0.5" /><span>{table.time}</span></>}
                </div>
                {table.guest && <p className="text-[8px] text-gray-400 mt-0.5 truncate">{table.guest}</p>}
                {table.waiter && <p className="text-[7px] text-gray-600 truncate">🧑‍🍳 {table.waiter}</p>}
              </button>
            ))}
          </div>

          <div className="col-span-full sm:col-span-2 bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
            {selectedTable ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-white">Stol #{selectedTable.id}</p>
                  <span className={`text-[9px] px-2 py-0.5 rounded-full border ${statusColors[selectedTable.status]} ${statusTextColor[selectedTable.status]}`}>{statusLabels[selectedTable.status]}</span>
                </div>
                <div className="space-y-1.5 text-[10px]">
                  <div className="flex justify-between"><span className="text-gray-500">O'rindiqlar</span><span className="text-white">{selectedTable.seats}</span></div>
                  {selectedTable.guest && <div className="flex justify-between"><span className="text-gray-500">Mehmon</span><span className="text-white">{selectedTable.guest}</span></div>}
                  {selectedTable.waiter && <div className="flex justify-between"><span className="text-gray-500">Ofitsiant</span><span className="text-white">{selectedTable.waiter}</span></div>}
                  {selectedTable.time && <div className="flex justify-between"><span className="text-gray-500">Vaqt</span><span className="text-white">{selectedTable.time}</span></div>}
                </div>
                {selectedTable.order && (
                  <div>
                    <p className="text-[10px] font-semibold text-gray-400 mb-1">Buyurtma:</p>
                    <div className="space-y-0.5">
                      {selectedTable.order.map((item, i) => (
                        <div key={i} className="text-[10px] text-gray-300 flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-blue-400" />{item}
                        </div>
                      ))}
                    </div>
                    {selectedTable.total && (
                      <div className="flex justify-between mt-2 pt-2 border-t border-white/[0.06] text-[10px]">
                        <span className="text-gray-500">Jami</span>
                        <span className="text-emerald-400 font-bold">{fmt(selectedTable.total)}</span>
                      </div>
                    )}
                  </div>
                )}
                <div className="flex gap-1.5">
                  {selectedTable.status === "free" && (
                    <button onClick={() => { setTables((prev) => prev.map((t) => t.id === selectedTable.id ? { ...t, status: "occupied" as const, guest: "Yangi mehmon", waiter: "Dilshod", time: "Hozir" } : t)); setToast(`Stol #${selectedTable.id} joylashtirildi!`); }} className="flex-1 py-1.5 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400 text-[10px] font-medium hover:bg-blue-500/30 transition-colors">Joylashtirish</button>
                  )}
                  {selectedTable.status === "occupied" && (
                    <button onClick={() => { setTables((prev) => prev.map((t) => t.id === selectedTable.id ? { ...t, status: "bill" as const } : t)); setToast(`Stol #${selectedTable.id} — hisob so'raldi`); }} className="flex-1 py-1.5 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-400 text-[10px] font-medium hover:bg-purple-500/30 transition-colors">Hisob so'rash</button>
                  )}
                  {selectedTable.status === "bill" && (
                    <button onClick={() => { setTables((prev) => prev.map((t) => t.id === selectedTable.id ? { id: t.id, seats: t.seats, status: "free" as const } : t)); setToast(`Stol #${selectedTable.id} — to'lov qabul qilindi!`); setSelected(null); }} className="flex-1 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-medium hover:bg-emerald-500/30 transition-colors">Hisobni yopish</button>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-600">
                <UtensilsCrossed size={20} className="mb-2" />
                <p className="text-[10px]">Stol tanlang</p>
              </div>
            )}
          </div>
        </div>
      )}

      {tab === "kitchen" && (
        <div className="flex-1 space-y-2 overflow-y-auto max-h-[420px]">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[11px] font-bold text-white">Oshxona buyurtmalari</p>
            <div className="flex gap-2 text-[9px]">
              <span className="text-amber-400">🔥 Tayyorlanmoqda: {kitchenOrders.filter((o) => o.status === "cooking").length}</span>
              <span className="text-emerald-400">✅ Tayyor: {kitchenOrders.filter((o) => o.status === "ready").length}</span>
            </div>
          </div>
          {kitchenOrders.map((order, i) => (
            <div key={i} className={`flex items-center gap-3 p-3 rounded-lg border ${
              order.status === "ready" ? "bg-emerald-500/10 border-emerald-500/20"
                : order.priority ? "bg-red-500/[0.06] border-red-500/20"
                : "bg-white/[0.03] border-white/[0.06]"
            }`}>
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${order.status === "ready" ? "bg-emerald-500/20" : "bg-amber-500/20"}`}>
                {order.status === "ready" ? <Bell size={15} className="text-emerald-400" /> : <ChefHat size={15} className="text-amber-400" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-[11px] font-bold text-white">Stol #{order.table}</p>
                  {order.priority && <AlertTriangle size={10} className="text-red-400" />}
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${order.status === "ready" ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
                    {order.status === "ready" ? "Tayyor!" : "Tayyorlanmoqda"}
                  </span>
                  {order.status === "ready" && bellTables.has(order.table) && (
                    <Bell size={10} className="text-emerald-400 animate-bounce" />
                  )}
                </div>
                <p className="text-[10px] text-gray-400 truncate">{order.items.join(", ")}</p>
                <p className="text-[9px] text-gray-600">Ofitsiant: {order.waiter} · Oshpaz: {order.chef}</p>
              </div>
              <div className="text-right flex flex-col items-end gap-1">
                <p className={`text-[11px] font-medium ${order.status === "ready" ? "text-emerald-400" : "text-amber-400"}`}>{order.time}</p>
                {order.status === "ready" && (
                  <button
                    onClick={() => { setBellTables((prev) => { const n = new Set(prev); n.add(order.table); return n; }); setToast(`Stol #${order.table} — taom topshirildi!`); }}
                    className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
                  >
                    Topshirish
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "menu" && (
        <div className="flex-1 overflow-y-auto max-h-[420px] space-y-4">
          {menuItems.map((category) => (
            <div key={category.cat}>
              <p className="text-[11px] font-bold text-white mb-2 flex items-center gap-1.5">
                <UtensilsCrossed size={11} className="text-blue-400" /> {category.cat}
              </p>
              <div className="space-y-1">
                {category.items.map((item) => (
                  <div key={item.name} className={`flex items-center gap-3 p-2 rounded-lg border ${item.available ? "bg-white/[0.02] border-white/[0.06]" : "bg-red-500/[0.03] border-red-500/10 opacity-60"}`}>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-gray-200 font-medium">{item.name}</span>
                        {item.popular && <span className="text-[7px] px-1 py-0.5 rounded bg-amber-500/20 text-amber-400">🔥 Hit</span>}
                        {!item.available && <span className="text-[7px] px-1 py-0.5 rounded bg-red-500/20 text-red-400">Tugagan</span>}
                      </div>
                    </div>
                    <span className="text-[10px] text-blue-400 font-medium">{fmt(item.price)}</span>
                    {item.available && (
                      <button className="w-5 h-5 rounded bg-blue-500/15 flex items-center justify-center text-blue-400 hover:bg-blue-500/30"><Plus size={10} /></button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {toast && <div className="fixed bottom-4 right-4 z-50 px-4 py-2 rounded-lg bg-emerald-500/90 text-white text-xs font-medium shadow-lg animate-in fade-in slide-in-from-bottom-2">{toast}</div>}

      {tab === "stats" && (
        <div className="flex-1 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { label: "Bugungi tushum", value: fmt(stats.totalRevenue), sub: "+18% kechagiga nisbatan", color: "text-emerald-400" },
              { label: "Xizmat ko'rsatilgan", value: "47 ta", sub: "O'rtacha: 35 min", color: "text-blue-400" },
              { label: "O'rtacha chek", value: fmt(Math.round(stats.totalRevenue / 6)), sub: "Eng katta: 284,000", color: "text-purple-400" },
            ].map((s) => (
              <div key={s.label} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
                <p className="text-[8px] text-gray-600">{s.sub}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-bold text-white mb-2">Ofitsiantlar reytingi</p>
              {[
                { name: "Dilshod", orders: 18, revenue: 476000, rating: 4.8 },
                { name: "Malika", orders: 15, revenue: 412000, rating: 4.9 },
                { name: "Sardor", orders: 14, revenue: 356000, rating: 4.7 },
              ].map((w, i) => (
                <div key={w.name} className="flex items-center gap-2 py-1.5 border-b border-white/[0.04] last:border-0">
                  <span className="text-[9px] text-gray-600 w-3">{i + 1}</span>
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-[7px] font-bold text-white">{w.name[0]}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-white font-medium">{w.name}</p>
                    <p className="text-[8px] text-gray-500">{w.orders} buyurtma</p>
                  </div>
                  <span className="text-[9px] text-amber-400">⭐ {w.rating}</span>
                </div>
              ))}
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-bold text-white mb-2">Top taomlar (bugun)</p>
              {[
                { name: "Osh (Palov)", qty: 24, rev: "840K" },
                { name: "Lag'mon", qty: 18, rev: "504K" },
                { name: "Kabob", qty: 15, rev: "630K" },
                { name: "Manti", qty: 12, rev: "360K" },
                { name: "Somsa", qty: 22, rev: "330K" },
              ].map((p, i) => (
                <div key={p.name} className="flex items-center gap-2 py-1 text-[10px]">
                  <span className="text-gray-600 w-3">{i + 1}</span>
                  <span className="text-gray-300 flex-1">{p.name}</span>
                  <span className="text-gray-500">{p.qty} ta</span>
                  <span className="text-emerald-400 font-medium w-10 text-right">{p.rev}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
