"use client";

import { useState } from "react";
import {
  DollarSign, Users, ShoppingCart, TrendingUp, ArrowUpRight, ArrowDownRight,
  Building2, Briefcase, Warehouse, FileText, BarChart3,
} from "lucide-react";

type Tab = "dashboard" | "hr" | "warehouse" | "finance";

const kpiCards = [
  { label: "Daromad", value: "847.2M", change: "+12.5%", up: true, icon: DollarSign, color: "text-emerald-400", bg: "bg-emerald-500/15" },
  { label: "Buyurtmalar", value: "2,847", change: "+8.3%", up: true, icon: ShoppingCart, color: "text-blue-400", bg: "bg-blue-500/15" },
  { label: "Xodimlar", value: "156", change: "+4", up: true, icon: Users, color: "text-purple-400", bg: "bg-purple-500/15" },
  { label: "O'sish", value: "23.4%", change: "-2.1%", up: false, icon: TrendingUp, color: "text-amber-400", bg: "bg-amber-500/15" },
];

const revenueData = [
  { month: "Yan", value: 65 }, { month: "Fev", value: 72 }, { month: "Mar", value: 58 },
  { month: "Apr", value: 81 }, { month: "May", value: 90 }, { month: "Iyn", value: 78 }, { month: "Iyl", value: 95 },
];

const departments = [
  { name: "Savdo", budget: 320, spent: 245, percent: 77, head: "A. Karimov", staff: 32 },
  { name: "Marketing", budget: 180, spent: 156, percent: 87, head: "N. Rashidova", staff: 14 },
  { name: "IT", budget: 250, spent: 198, percent: 79, head: "S. Toshmatov", staff: 28 },
  { name: "HR", budget: 120, spent: 89, percent: 74, head: "M. Azimova", staff: 8 },
  { name: "Logistika", budget: 200, spent: 187, percent: 94, head: "B. Nazarov", staff: 45 },
  { name: "Moliya", budget: 150, spent: 112, percent: 75, head: "K. Latipova", staff: 12 },
  { name: "Ishlab chiqarish", budget: 400, spent: 367, percent: 92, head: "J. Mirzayev", staff: 17 },
];

const recentOps = [
  { id: "INV-2847", type: "Faktura", client: "TechPro LLC", amount: "45.2M", status: "paid" as const },
  { id: "PO-1293", type: "Xarid", client: "GlobalSupply", amount: "12.8M", status: "pending" as const },
  { id: "INV-2846", type: "Faktura", client: "SmartRetail", amount: "23.1M", status: "paid" as const },
  { id: "PO-1292", type: "Xarid", client: "RawMaterials Co", amount: "67.5M", status: "overdue" as const },
  { id: "INV-2845", type: "Faktura", client: "CafeNetwork", amount: "8.9M", status: "pending" as const },
  { id: "TR-0584", type: "Transfer", client: "Ichki → Savdo", amount: "15.0M", status: "paid" as const },
];

const employees = [
  { id: 1, name: "Aziz Karimov", position: "Savdo bo'limi boshlig'i", dept: "Savdo", salary: "12.5M", status: "active" as const, joined: "2021-03-15", performance: 95 },
  { id: 2, name: "Nilufar Rashidova", position: "Marketing direktor", dept: "Marketing", salary: "11.0M", status: "active" as const, joined: "2020-07-01", performance: 92 },
  { id: 3, name: "Sardor Toshmatov", position: "CTO", dept: "IT", salary: "15.0M", status: "active" as const, joined: "2019-01-10", performance: 98 },
  { id: 4, name: "Malika Azimova", position: "HR menejeri", dept: "HR", salary: "8.5M", status: "active" as const, joined: "2022-05-20", performance: 88 },
  { id: 5, name: "Botir Nazarov", position: "Logistika boshlig'i", dept: "Logistika", salary: "10.0M", status: "active" as const, joined: "2020-11-05", performance: 90 },
  { id: 6, name: "Kamola Latipova", position: "Bosh hisobchi", dept: "Moliya", salary: "13.0M", status: "active" as const, joined: "2018-06-15", performance: 96 },
  { id: 7, name: "Jasur Mirzayev", position: "Ishlab chiqarish boshlig'i", dept: "Ishlab chiqarish", salary: "11.5M", status: "vacation" as const, joined: "2021-02-01", performance: 85 },
  { id: 8, name: "Dilshod Rakhimov", position: "Senior dasturchi", dept: "IT", salary: "14.0M", status: "active" as const, joined: "2019-08-22", performance: 94 },
  { id: 9, name: "Nodira Karimova", position: "Marketolog", dept: "Marketing", salary: "7.0M", status: "active" as const, joined: "2023-01-10", performance: 82 },
  { id: 10, name: "Sherzod Umarov", position: "Savdo menejeri", dept: "Savdo", salary: "9.0M", status: "active" as const, joined: "2022-09-01", performance: 87 },
];

const warehouseItems = [
  { id: "WH-001", name: "Xomashyo A", category: "Xomashyo", qty: 1250, unit: "kg", location: "A-1-01", minQty: 500, value: "62.5M" },
  { id: "WH-002", name: "Tayyor mahsulot B", category: "Tayyor", qty: 340, unit: "dona", location: "B-2-05", minQty: 100, value: "170.0M" },
  { id: "WH-003", name: "Qadoqlash materiali", category: "Materiallar", qty: 8500, unit: "dona", location: "C-1-03", minQty: 2000, value: "8.5M" },
  { id: "WH-004", name: "Xomashyo C", category: "Xomashyo", qty: 430, unit: "kg", location: "A-1-04", minQty: 500, value: "21.5M" },
  { id: "WH-005", name: "Ehtiyot qism D", category: "Ehtiyot", qty: 78, unit: "dona", location: "D-3-02", minQty: 50, value: "15.6M" },
  { id: "WH-006", name: "Tayyor mahsulot E", category: "Tayyor", qty: 890, unit: "dona", location: "B-3-01", minQty: 200, value: "445.0M" },
  { id: "WH-007", name: "Yoqilg'i", category: "Materiallar", qty: 2100, unit: "litr", location: "F-1-01", minQty: 1000, value: "31.5M" },
];

const financeAccounts = [
  { name: "Asosiy hisob", bank: "NBU", balance: "1,247.5M", currency: "UZS", type: "Joriy" },
  { name: "USD hisob", bank: "NBU", balance: "$98,450", currency: "USD", type: "Valyuta" },
  { name: "Depozit", bank: "Kapitalbank", balance: "500.0M", currency: "UZS", type: "Muddatli" },
  { name: "Kassadagi naqd", bank: "—", balance: "45.2M", currency: "UZS", type: "Kassa" },
];

const statusColors = {
  paid: "bg-emerald-500/15 text-emerald-400",
  pending: "bg-amber-500/15 text-amber-400",
  overdue: "bg-red-500/15 text-red-400",
};
const statusLabels = { paid: "To'langan", pending: "Kutilmoqda", overdue: "Muddati o'tgan" };

export default function ERPDemo() {
  const [tab, setTab] = useState<Tab>("dashboard");
  const maxVal = Math.max(...revenueData.map((d) => d.value));

  const tabs: { key: Tab; label: string; icon: typeof Building2 }[] = [
    { key: "dashboard", label: "Dashboard", icon: BarChart3 },
    { key: "hr", label: "Xodimlar", icon: Users },
    { key: "warehouse", label: "Ombor", icon: Warehouse },
    { key: "finance", label: "Moliya", icon: DollarSign },
  ];

  return (
    <div className="flex flex-col gap-3 min-h-[420px]">
      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {kpiCards.map((kpi) => (
          <div key={kpi.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <div className="flex items-center justify-between mb-1.5">
              <div className={`w-6 h-6 rounded-md ${kpi.bg} flex items-center justify-center`}>
                <kpi.icon size={12} className={kpi.color} />
              </div>
              <span className={`flex items-center gap-0.5 text-[9px] font-medium ${kpi.up ? "text-emerald-400" : "text-red-400"}`}>
                {kpi.up ? <ArrowUpRight size={9} /> : <ArrowDownRight size={9} />}
                {kpi.change}
              </span>
            </div>
            <p className="text-sm font-bold text-white">{kpi.value}</p>
            <p className="text-[9px] text-gray-500">{kpi.label}</p>
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
                ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
            }`}
          >
            <t.icon size={11} />
            {t.label}
          </button>
        ))}
      </div>

      {tab === "dashboard" && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 flex-1">
            {/* Revenue Chart */}
            <div className="col-span-full sm:col-span-3 bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] font-bold text-white">Oylik daromad</p>
                <span className="text-[9px] text-gray-500">mln so'm</span>
              </div>
              <div className="flex items-end gap-2 h-[120px]">
                {revenueData.map((d, i) => (
                  <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
                    <span className="text-[8px] text-gray-500">{d.value}M</span>
                    <div
                      className={`w-full rounded-t-md transition-all ${
                        i === revenueData.length - 1
                          ? "bg-gradient-to-t from-purple-600 to-purple-400"
                          : "bg-purple-500/25 hover:bg-purple-500/40"
                      }`}
                      style={{ height: `${(d.value / maxVal) * 100}%` }}
                    />
                    <span className="text-[8px] text-gray-500">{d.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Budgets */}
            <div className="col-span-full sm:col-span-2 bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
              <p className="text-[11px] font-bold text-white mb-3">Byudjet sarfi</p>
              <div className="space-y-2.5 max-h-[160px] overflow-y-auto">
                {departments.map((dept) => (
                  <div key={dept.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-gray-300">{dept.name}</span>
                      <span className={`text-[9px] font-medium ${
                        dept.percent >= 90 ? "text-red-400" : dept.percent >= 80 ? "text-amber-400" : "text-emerald-400"
                      }`}>
                        {dept.spent}M / {dept.budget}M
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          dept.percent >= 90
                            ? "bg-gradient-to-r from-red-500 to-red-400"
                            : dept.percent >= 80
                            ? "bg-gradient-to-r from-amber-500 to-amber-400"
                            : "bg-gradient-to-r from-emerald-500 to-emerald-400"
                        }`}
                        style={{ width: `${dept.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Operations */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
            <p className="text-[11px] font-bold text-white mb-2">So'nggi operatsiyalar</p>
            <div className="overflow-x-auto">
              <table className="w-full text-[10px]">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left py-1.5 text-gray-500 font-medium">ID</th>
                    <th className="text-left py-1.5 text-gray-500 font-medium">Tur</th>
                    <th className="text-left py-1.5 text-gray-500 font-medium">Kontragent</th>
                    <th className="text-right py-1.5 text-gray-500 font-medium">Summa</th>
                    <th className="text-right py-1.5 text-gray-500 font-medium">Holat</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOps.map((op) => (
                    <tr key={op.id} className="border-b border-white/[0.03] hover:bg-white/[0.02]">
                      <td className="py-1.5 text-purple-400 font-medium">{op.id}</td>
                      <td className="py-1.5 text-gray-400">{op.type}</td>
                      <td className="py-1.5 text-gray-300">{op.client}</td>
                      <td className="py-1.5 text-right text-white font-medium">{op.amount}</td>
                      <td className="py-1.5 text-right">
                        <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${statusColors[op.status]}`}>
                          {statusLabels[op.status]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {tab === "hr" && (
        <div className="flex-1 space-y-2">
          {/* HR Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Jami xodimlar", value: "156", color: "text-blue-400" },
              { label: "Ta'tilda", value: "8", color: "text-amber-400" },
              { label: "Ish haqi fondi", value: "1.56B", color: "text-emerald-400" },
              { label: "O'rt. samaradorlik", value: "91%", color: "text-purple-400" },
            ].map((s) => (
              <div key={s.label} className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center">
                <p className={`text-[12px] font-bold ${s.color}`}>{s.value}</p>
                <p className="text-[8px] text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Employee Table */}
          <div className="overflow-auto rounded-lg border border-white/[0.06] max-h-[240px]">
            <table className="w-full min-w-[500px] text-[10px]">
              <thead className="sticky top-0 bg-[#0a0f1a]">
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2 text-gray-500 font-medium">Xodim</th>
                  <th className="text-left py-2 px-2 text-gray-500 font-medium">Bo'lim</th>
                  <th className="text-right py-2 px-2 text-gray-500 font-medium">Maosh</th>
                  <th className="text-center py-2 px-2 text-gray-500 font-medium">Samaradorlik</th>
                  <th className="text-right py-2 px-2 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((e) => (
                  <tr key={e.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-1.5 px-2">
                      <p className="text-gray-200 font-medium">{e.name}</p>
                      <p className="text-[8px] text-gray-500">{e.position}</p>
                    </td>
                    <td className="py-1.5 px-2 text-gray-400">{e.dept}</td>
                    <td className="py-1.5 px-2 text-right text-white font-medium">{e.salary}</td>
                    <td className="py-1.5 px-2">
                      <div className="flex items-center gap-1.5 justify-center">
                        <div className="w-12 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                          <div
                            className={`h-full rounded-full ${e.performance >= 90 ? "bg-emerald-400" : e.performance >= 80 ? "bg-amber-400" : "bg-red-400"}`}
                            style={{ width: `${e.performance}%` }}
                          />
                        </div>
                        <span className="text-[9px] text-gray-400">{e.performance}%</span>
                      </div>
                    </td>
                    <td className="py-1.5 px-2 text-right">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${e.status === "active" ? "bg-emerald-500/15 text-emerald-400" : "bg-amber-500/15 text-amber-400"}`}>
                        {e.status === "active" ? "Faol" : "Ta'tilda"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Department Summary */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
            <p className="text-[11px] font-bold text-white mb-2">Bo'limlar tarkibi</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {departments.slice(0, 4).map((d) => (
                <div key={d.name} className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <p className="text-[10px] text-white font-medium">{d.name}</p>
                  <p className="text-[9px] text-gray-500">{d.head}</p>
                  <p className="text-[10px] text-purple-400 font-bold mt-1">{d.staff} nafar</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "warehouse" && (
        <div className="flex-1 space-y-3">
          {/* Warehouse Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Jami pozitsiyalar", value: warehouseItems.length.toString(), color: "text-blue-400" },
              { label: "Kam qolgan", value: warehouseItems.filter((i) => i.qty <= i.minQty).length.toString(), color: "text-amber-400" },
              { label: "Ombor qiymati", value: "754.6M", color: "text-emerald-400" },
              { label: "Joylar band", value: "73%", color: "text-purple-400" },
            ].map((s) => (
              <div key={s.label} className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center">
                <p className={`text-[12px] font-bold ${s.color}`}>{s.value}</p>
                <p className="text-[8px] text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="overflow-auto rounded-lg border border-white/[0.06] max-h-[260px]">
            <table className="w-full min-w-[500px] text-[10px]">
              <thead className="sticky top-0 bg-[#0a0f1a]">
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2 text-gray-500 font-medium">Nomi</th>
                  <th className="text-left py-2 px-2 text-gray-500 font-medium">Kategoriya</th>
                  <th className="text-center py-2 px-2 text-gray-500 font-medium">Miqdor</th>
                  <th className="text-left py-2 px-2 text-gray-500 font-medium">Joylashuv</th>
                  <th className="text-right py-2 px-2 text-gray-500 font-medium">Qiymat</th>
                </tr>
              </thead>
              <tbody>
                {warehouseItems.map((item) => (
                  <tr key={item.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-1.5 px-2">
                      <p className="text-gray-200 font-medium">{item.name}</p>
                      <p className="text-[8px] text-gray-600">{item.id}</p>
                    </td>
                    <td className="py-1.5 px-2 text-gray-400">{item.category}</td>
                    <td className="py-1.5 px-2 text-center">
                      <span className={`px-1.5 py-0.5 rounded text-[9px] font-medium ${
                        item.qty <= item.minQty ? "bg-amber-500/15 text-amber-400" : "bg-emerald-500/15 text-emerald-400"
                      }`}>
                        {item.qty} {item.unit}
                      </span>
                    </td>
                    <td className="py-1.5 px-2 text-blue-400 font-mono text-[9px]">{item.location}</td>
                    <td className="py-1.5 px-2 text-right text-white font-medium">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === "finance" && (
        <div className="flex-1 space-y-3">
          {/* Bank Accounts */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
            <p className="text-[11px] font-bold text-white mb-2">Bank hisoblar</p>
            <div className="grid grid-cols-2 gap-2">
              {financeAccounts.map((acc) => (
                <div key={acc.name} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[10px] text-white font-medium">{acc.name}</p>
                    <span className="text-[8px] px-1.5 py-0.5 rounded bg-purple-500/15 text-purple-400">{acc.type}</span>
                  </div>
                  <p className="text-[13px] font-bold text-emerald-400">{acc.balance}</p>
                  <p className="text-[8px] text-gray-500">{acc.bank} · {acc.currency}</p>
                </div>
              ))}
            </div>
          </div>

          {/* P&L Summary */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
            <p className="text-[11px] font-bold text-white mb-2">Foyda va zarar (Iyul)</p>
            <div className="space-y-1.5 text-[10px]">
              {[
                { label: "Jami daromad", value: "847.2M", color: "text-emerald-400", bold: true },
                { label: "  Sotish daromadi", value: "792.1M", color: "text-gray-300", bold: false },
                { label: "  Boshqa daromadlar", value: "55.1M", color: "text-gray-300", bold: false },
                { label: "Jami xarajat", value: "623.8M", color: "text-red-400", bold: true },
                { label: "  Ish haqi", value: "312.0M", color: "text-gray-400", bold: false },
                { label: "  Ijara", value: "85.0M", color: "text-gray-400", bold: false },
                { label: "  Xomashyo", value: "156.8M", color: "text-gray-400", bold: false },
                { label: "  Boshqa xarajatlar", value: "70.0M", color: "text-gray-400", bold: false },
              ].map((row) => (
                <div key={row.label} className={`flex items-center justify-between ${row.bold ? "pt-1" : ""}`}>
                  <span className={`${row.bold ? "text-white font-medium" : "text-gray-400"}`}>{row.label}</span>
                  <span className={`${row.color} ${row.bold ? "font-bold" : "font-medium"}`}>{row.value}</span>
                </div>
              ))}
              <div className="border-t border-white/[0.08] pt-1.5 mt-1.5 flex items-center justify-between">
                <span className="text-white font-bold">Sof foyda</span>
                <span className="text-emerald-400 font-bold text-[12px]">223.4M</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
