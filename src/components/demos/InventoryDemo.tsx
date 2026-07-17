"use client";

import { useState } from "react";
import { Package, Warehouse, AlertTriangle, BarChart2, MapPin, RefreshCw, CheckCircle } from "lucide-react";

type InventoryTab = "stock" | "warehouses" | "alerts";

const stockItems = [
  { id: 1, name: "Laptop Dell XPS 15", sku: "LAP-001", qty: 42, min: 10, location: "A-12", category: "Electronics", status: "ok" },
  { id: 2, name: "Office Chair Pro", sku: "FRN-045", qty: 7, min: 15, location: "B-03", category: "Furniture", status: "low" },
  { id: 3, name: "USB-C Hub 7-in-1", sku: "ACC-112", qty: 120, min: 30, location: "A-05", category: "Accessories", status: "ok" },
  { id: 4, name: "Standing Desk L", sku: "FRN-089", qty: 3, min: 8, location: "C-01", category: "Furniture", status: "critical" },
  { id: 5, name: "Mechanical Keyboard", sku: "ACC-203", qty: 55, min: 20, location: "A-14", category: "Accessories", status: "ok" },
  { id: 6, name: "27\" Monitor 4K", sku: "MON-007", qty: 9, min: 12, location: "A-08", category: "Electronics", status: "low" },
  { id: 7, name: "Webcam HD 1080p", sku: "ACC-301", qty: 18, min: 10, location: "A-16", category: "Accessories", status: "ok" },
  { id: 8, name: "Ergonomic Mouse", sku: "ACC-089", qty: 2, min: 10, location: "A-15", category: "Accessories", status: "critical" },
];

const warehouses = [
  { id: 1, name: "Asosiy ombor — A", location: "Toshkent, Yunusobod", capacity: 500, used: 312, items: 48, manager: "Sherzod T." },
  { id: 2, name: "Qo'shimcha ombor — B", location: "Toshkent, Chilonzor", capacity: 300, used: 198, items: 31, manager: "Gulnora K." },
  { id: 3, name: "Tranzit ombor — C", location: "Toshkent, Sergeli", capacity: 200, used: 54, items: 12, manager: "Timur A." },
];

const alerts = [
  { id: 1, item: "Standing Desk L", sku: "FRN-089", qty: 3, min: 8, level: "critical", action: "Buyurtma berildi" },
  { id: 2, item: "Ergonomic Mouse", sku: "ACC-089", qty: 2, min: 10, level: "critical", action: "Kutmoqda" },
  { id: 3, item: "Office Chair Pro", sku: "FRN-045", qty: 7, min: 15, level: "low", action: "Kutmoqda" },
  { id: 4, item: "27\" Monitor 4K", sku: "MON-007", qty: 9, min: 12, level: "low", action: "Kutmoqda" },
];

export default function InventoryDemo() {
  const [tab, setTab] = useState<InventoryTab>("stock");
  const [alertStatuses, setAlertStatuses] = useState<Record<number, string>>(
    Object.fromEntries(alerts.map((a) => [a.id, a.action]))
  );

  const tabs = [
    { key: "stock" as InventoryTab, label: "Mahsulotlar", icon: Package },
    { key: "warehouses" as InventoryTab, label: "Omborlar", icon: Warehouse },
    { key: "alerts" as InventoryTab, label: "Ogohlantirishlar", icon: AlertTriangle },
  ];

  const order = (id: number) => setAlertStatuses((p) => ({ ...p, [id]: "Buyurtma berildi" }));

  const statusColor = (s: string) =>
    s === "ok" ? "bg-emerald-500/15 text-emerald-400" : s === "low" ? "bg-amber-500/15 text-amber-400" : "bg-red-500/15 text-red-400";
  const statusLabel = (s: string) => (s === "ok" ? "Normal" : s === "low" ? "Kam" : "Kritik");

  return (
    <div className="flex flex-col gap-2.5 min-h-[420px]">
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
        <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
          <AlertTriangle size={9} className="text-red-400" />
          <span>{alerts.filter((a) => a.level === "critical").length} kritik</span>
        </div>
      </div>

      {tab === "stock" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Ombor zaxirasi</p>
            <span className="text-[10px] text-gray-500">{stockItems.length} ta mahsulot</span>
          </div>
          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Mahsulot</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">SKU</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Miqdor</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Joylashuv</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {stockItems.map((item) => (
                  <tr key={item.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded bg-cyan-500/15 flex items-center justify-center flex-shrink-0">
                          <Package size={9} className="text-cyan-400" />
                        </div>
                        <span className="text-gray-300 font-medium">{item.name}</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 text-gray-500 font-mono hidden sm:table-cell">{item.sku}</td>
                    <td className="py-2 px-2.5 text-right">
                      <span className={`font-bold ${item.qty <= item.min ? "text-red-400" : "text-white"}`}>{item.qty}</span>
                      <span className="text-gray-600 text-[8px]"> / min {item.min}</span>
                    </td>
                    <td className="py-2 px-2.5 hidden sm:table-cell">
                      <div className="flex items-center gap-1 text-gray-400">
                        <MapPin size={8} className="text-gray-600" />
                        {item.location}
                      </div>
                    </td>
                    <td className="py-2 px-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${statusColor(item.status)}`}>
                        {statusLabel(item.status)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Jami SKU", value: stockItems.length, color: "text-white" },
              { label: "Normal", value: stockItems.filter((i) => i.status === "ok").length, color: "text-emerald-400" },
              { label: "Kam qoldi", value: stockItems.filter((i) => i.status === "low").length, color: "text-amber-400" },
              { label: "Kritik", value: stockItems.filter((i) => i.status === "critical").length, color: "text-red-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "warehouses" && (
        <div className="flex-1 space-y-2.5">
          <p className="text-[11px] font-bold text-white">Ombor joylari</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {warehouses.map((wh) => {
              const pct = Math.round((wh.used / wh.capacity) * 100);
              return (
                <div key={wh.id} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-lg bg-cyan-500/15 flex items-center justify-center">
                      <Warehouse size={11} className="text-cyan-400" />
                    </div>
                    <p className="text-[10px] font-bold text-white">{wh.name}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-gray-500 mb-1">
                    <MapPin size={8} /> {wh.location}
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-[9px] mb-0.5">
                      <span className="text-gray-500">Sig'im</span>
                      <span className={pct > 80 ? "text-amber-400" : "text-cyan-400"}>{pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.06]">
                      <div
                        className={`h-full rounded-full transition-all ${pct > 80 ? "bg-amber-400" : "bg-cyan-400"}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-[9px]">
                    <div className="p-1.5 rounded bg-white/[0.03]">
                      <p className="text-gray-500">Mahsulot</p>
                      <p className="text-white font-bold">{wh.items} SKU</p>
                    </div>
                    <div className="p-1.5 rounded bg-white/[0.03]">
                      <p className="text-gray-500">Mas'ul</p>
                      <p className="text-white font-bold">{wh.manager}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Jami sig'im", value: warehouses.reduce((s, w) => s + w.capacity, 0) + " birlik", color: "text-white" },
              { label: "Band", value: warehouses.reduce((s, w) => s + w.used, 0) + " birlik", color: "text-cyan-400" },
              { label: "Bo'sh", value: warehouses.reduce((s, w) => s + (w.capacity - w.used), 0) + " birlik", color: "text-emerald-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-[11px] font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "alerts" && (
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Qayta buyurtma ogohlantirishlari</p>
            <span className="text-[9px] text-red-400 flex items-center gap-1">
              <AlertTriangle size={9} /> {alerts.filter((a) => a.level === "critical").length} kritik
            </span>
          </div>
          <div className="space-y-2">
            {alerts.map((a) => {
              const status = alertStatuses[a.id];
              return (
                <div
                  key={a.id}
                  className={`p-3 rounded-xl border flex items-center gap-3 ${
                    a.level === "critical" ? "bg-red-500/[0.06] border-red-500/20" : "bg-amber-500/[0.06] border-amber-500/20"
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${a.level === "critical" ? "bg-red-500/15" : "bg-amber-500/15"}`}>
                    <AlertTriangle size={11} className={a.level === "critical" ? "text-red-400" : "text-amber-400"} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-medium text-white">{a.item}</p>
                    <p className="text-[9px] text-gray-500">{a.sku} · Qoldi: <span className="text-red-400 font-bold">{a.qty}</span> / Min: {a.min}</p>
                  </div>
                  <div className="flex-shrink-0">
                    {status === "Kutmoqda" ? (
                      <button
                        onClick={() => order(a.id)}
                        className="flex items-center gap-1 px-2 py-1 rounded-md bg-cyan-500/15 text-cyan-400 text-[9px] hover:bg-cyan-500/25 transition-colors border border-cyan-500/20"
                      >
                        <RefreshCw size={9} /> Buyurtma
                      </button>
                    ) : (
                      <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-400 text-[9px] border border-emerald-500/20">
                        <CheckCircle size={9} /> Berildi
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2">Zaxira darajasi</p>
            <div className="flex items-end gap-1 h-[36px]">
              {stockItems.map((item, i) => {
                const pct = Math.min(100, Math.round((item.qty / (item.min * 3)) * 100));
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                    <div
                      className={`w-full rounded-t ${item.status === "ok" ? "bg-cyan-500/40" : item.status === "low" ? "bg-amber-500/40" : "bg-red-500/40"}`}
                      style={{ height: `${Math.max(10, pct)}%` }}
                    />
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
