"use client";

import { useState } from "react";
import { FileText, CreditCard, RefreshCw, BarChart2, CheckCircle, Clock, AlertTriangle, TrendingUp, Smartphone } from "lucide-react";

type BillingTab = "invoices" | "payments" | "subscriptions" | "report";

const invoices = [
  { id: "#INV-0041", client: "Aftosavdo Market", amount: 2850000, status: "paid", date: "12 Iyul 2025" },
  { id: "#INV-0042", client: "Texno Uz LLC", amount: 1200000, status: "pending", date: "14 Iyul 2025" },
  { id: "#INV-0043", client: "Dolina Group", amount: 4500000, status: "overdue", date: "05 Iyul 2025" },
  { id: "#INV-0044", client: "NovaTech MCHJ", amount: 980000, status: "paid", date: "15 Iyul 2025" },
  { id: "#INV-0045", client: "Global Import", amount: 7200000, status: "pending", date: "16 Iyul 2025" },
  { id: "#INV-0046", client: "AgroFarm Uz", amount: 3300000, status: "paid", date: "11 Iyul 2025" },
  { id: "#INV-0047", client: "City Motors", amount: 15800000, status: "overdue", date: "01 Iyul 2025" },
  { id: "#INV-0048", client: "Baxtiyor LLC", amount: 620000, status: "paid", date: "17 Iyul 2025" },
];

const payments = [
  { id: "TXN-8821", client: "Aftosavdo Market", amount: 2850000, method: "Payme", date: "12 Iyul 14:32", status: "success" },
  { id: "TXN-8820", client: "NovaTech MCHJ", amount: 980000, method: "Click", date: "15 Iyul 10:15", status: "success" },
  { id: "TXN-8819", client: "AgroFarm Uz", amount: 3300000, method: "Naqd", date: "11 Iyul 09:50", status: "success" },
  { id: "TXN-8818", client: "Baxtiyor LLC", amount: 620000, method: "Uzum", date: "17 Iyul 08:30", status: "success" },
  { id: "TXN-8817", client: "Texno Uz LLC", amount: 600000, method: "Click", date: "10 Iyul 16:45", status: "pending" },
  { id: "TXN-8816", client: "City Motors", amount: 5000000, method: "Payme", date: "08 Iyul 11:00", status: "failed" },
];

const subscriptions = [
  { name: "Aftosavdo Market", plan: "Pro", price: 850000, renewal: "01 Avg 2025", usage: 78, status: "active" },
  { name: "Texno Uz LLC", plan: "Starter", price: 350000, renewal: "20 Iyul 2025", usage: 45, status: "active" },
  { name: "Dolina Group", plan: "Enterprise", price: 2500000, renewal: "15 Avg 2025", usage: 92, status: "active" },
  { name: "NovaTech MCHJ", plan: "Pro", price: 850000, renewal: "10 Avg 2025", usage: 31, status: "active" },
  { name: "Global Import", plan: "Starter", price: 350000, renewal: "18 Iyul 2025", usage: 60, status: "expiring" },
];

const monthlyRevenue = [1800000, 2200000, 1950000, 2800000, 3100000, 2650000, 3400000, 2900000, 3800000, 4100000, 3650000, 4500000];
const monthLabels = ["Y", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"];

const methodShare = [
  { name: "Payme", pct: 42, color: "bg-blue-500" },
  { name: "Click", pct: 28, color: "bg-emerald-500" },
  { name: "Uzum", pct: 18, color: "bg-amber-500" },
  { name: "Naqd", pct: 12, color: "bg-violet-500" },
];

function fmt(n: number) {
  return n.toLocaleString("uz-UZ") + " so'm";
}

export default function BillingDemo() {
  const [tab, setTab] = useState<BillingTab>("invoices");

  const tabs = [
    { key: "invoices" as BillingTab, label: "Hisob-fakturalar", icon: FileText },
    { key: "payments" as BillingTab, label: "To'lovlar", icon: CreditCard },
    { key: "subscriptions" as BillingTab, label: "Obunalar", icon: RefreshCw },
    { key: "report" as BillingTab, label: "Hisobot", icon: BarChart2 },
  ];

  const maxRevenue = Math.max(...monthlyRevenue);

  return (
    <div className="flex flex-col gap-2.5 min-h-[420px]">
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
        <div className="flex items-center gap-1 text-[9px] text-emerald-400">
          <TrendingUp size={10} />
          <span>+18% oy</span>
        </div>
      </div>

      {/* Invoices Tab */}
      {tab === "invoices" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Hisob-fakturalar</p>
            <div className="flex gap-2 text-[9px]">
              <span className="text-emerald-400">{invoices.filter((i) => i.status === "paid").length} to'langan</span>
              <span className="text-amber-400">{invoices.filter((i) => i.status === "pending").length} kutmoqda</span>
              <span className="text-red-400">{invoices.filter((i) => i.status === "overdue").length} muddati o'tgan</span>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">#</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Mijoz</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Summa</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Sana</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr key={inv.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5 text-emerald-400 font-medium font-mono">{inv.id}</td>
                    <td className="py-2 px-2.5 text-gray-300">{inv.client}</td>
                    <td className="py-2 px-2.5 text-right text-white font-medium">{fmt(inv.amount)}</td>
                    <td className="py-2 px-2.5 text-gray-500 hidden sm:table-cell">{inv.date}</td>
                    <td className="py-2 px-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${
                        inv.status === "paid" ? "bg-emerald-500/15 text-emerald-400"
                        : inv.status === "pending" ? "bg-amber-500/15 text-amber-400"
                        : "bg-red-500/15 text-red-400"
                      }`}>
                        {inv.status === "paid" ? "To'landi" : inv.status === "pending" ? "Kutmoqda" : "Muddati o'tdi"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2.5 grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Jami summa</p>
              <p className="text-[11px] font-bold text-white">{fmt(invoices.reduce((s, i) => s + i.amount, 0))}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/20">
              <p className="text-[9px] text-gray-500">To'langan</p>
              <p className="text-[11px] font-bold text-emerald-400">{fmt(invoices.filter((i) => i.status === "paid").reduce((s, i) => s + i.amount, 0))}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-red-500/[0.08] border border-red-500/20">
              <p className="text-[9px] text-gray-500">Qarzdorlik</p>
              <p className="text-[11px] font-bold text-red-400">{fmt(invoices.filter((i) => i.status !== "paid").reduce((s, i) => s + i.amount, 0))}</p>
            </div>
          </div>
        </div>
      )}

      {/* Payments Tab */}
      {tab === "payments" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">So'nggi to'lovlar</p>
            <span className="text-[10px] text-gray-500">{payments.length} ta tranzaksiya</span>
          </div>
          <div className="space-y-1.5">
            {payments.map((pay) => (
              <div key={pay.id} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-colors">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  pay.method === "Payme" ? "bg-blue-500/20"
                  : pay.method === "Click" ? "bg-emerald-500/20"
                  : pay.method === "Uzum" ? "bg-amber-500/20"
                  : "bg-violet-500/20"
                }`}>
                  {pay.method === "Naqd" ? (
                    <span className="text-[8px] font-bold text-violet-400">N</span>
                  ) : (
                    <Smartphone size={12} className={
                      pay.method === "Payme" ? "text-blue-400"
                      : pay.method === "Click" ? "text-emerald-400"
                      : "text-amber-400"
                    } />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-[10px] font-medium text-white">{pay.client}</p>
                    <span className={`text-[8px] px-1 py-0.5 rounded ${
                      pay.method === "Payme" ? "bg-blue-500/15 text-blue-400"
                      : pay.method === "Click" ? "bg-emerald-500/15 text-emerald-400"
                      : pay.method === "Uzum" ? "bg-amber-500/15 text-amber-400"
                      : "bg-violet-500/15 text-violet-400"
                    }`}>{pay.method}</span>
                  </div>
                  <p className="text-[9px] text-gray-500">{pay.id} · {pay.date}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-[11px] font-bold text-white">{fmt(pay.amount)}</p>
                  <span className={`text-[8px] flex items-center gap-0.5 justify-end ${
                    pay.status === "success" ? "text-emerald-400"
                    : pay.status === "pending" ? "text-amber-400"
                    : "text-red-400"
                  }`}>
                    {pay.status === "success" ? <CheckCircle size={8} /> : pay.status === "pending" ? <Clock size={8} /> : <AlertTriangle size={8} />}
                    {pay.status === "success" ? "Muvaffaqiyatli" : pay.status === "pending" ? "Kutmoqda" : "Xatolik"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subscriptions Tab */}
      {tab === "subscriptions" && (
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Faol obunalar</p>
            <span className="text-[10px] text-gray-500">{subscriptions.length} ta</span>
          </div>
          {subscriptions.map((sub, i) => (
            <div key={i} className={`p-3 rounded-xl bg-white/[0.03] border ${sub.status === "expiring" ? "border-amber-500/30" : "border-white/[0.06]"}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <span className="text-[7px] font-bold text-white">{sub.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-white">{sub.name}</p>
                    <p className="text-[9px] text-gray-500">Yangilanish: {sub.renewal}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-[8px] px-1.5 py-0.5 rounded font-medium ${
                    sub.plan === "Enterprise" ? "bg-violet-500/15 text-violet-400"
                    : sub.plan === "Pro" ? "bg-blue-500/15 text-blue-400"
                    : "bg-gray-500/15 text-gray-400"
                  }`}>{sub.plan}</span>
                  <p className="text-[10px] font-bold text-white mt-0.5">{fmt(sub.price)}/oy</p>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[9px]">
                  <span className="text-gray-500">Foydalanish</span>
                  <span className={sub.usage > 80 ? "text-amber-400" : "text-gray-400"}>{sub.usage}%</span>
                </div>
                <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${sub.usage > 80 ? "bg-amber-500" : "bg-emerald-500"}`}
                    style={{ width: `${sub.usage}%` }}
                  />
                </div>
              </div>
              {sub.status === "expiring" && (
                <p className="text-[9px] text-amber-400 mt-1.5 flex items-center gap-1">
                  <AlertTriangle size={9} /> Obuna tez orada tugaydi
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Report Tab */}
      {tab === "report" && (
        <div className="flex-1 space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Bu oy daromad", value: fmt(4500000), color: "text-emerald-400" },
              { label: "O'tgan oy", value: fmt(3650000), color: "text-white" },
              { label: "O'sish", value: "+23.3%", color: "text-emerald-400" },
              { label: "Faol mijozlar", value: "47 ta", color: "text-blue-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-[11px] font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-3">2025 yil oylik daromad</p>
            <div className="flex items-end gap-1 h-[60px]">
              {monthlyRevenue.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div
                    className="w-full rounded-t bg-emerald-500/30 hover:bg-emerald-500/50 transition-colors"
                    style={{ height: `${(v / maxRevenue) * 100}%` }}
                  />
                  <span className="text-[7px] text-gray-600">{monthLabels[i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2.5">To'lov usullari taqsimoti</p>
            <div className="space-y-2">
              {methodShare.map((m) => (
                <div key={m.name} className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400 w-12">{m.name}</span>
                  <div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${m.color}`} style={{ width: `${m.pct}%`, opacity: 0.7 }} />
                  </div>
                  <span className="text-[10px] text-gray-300 w-7 text-right">{m.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
