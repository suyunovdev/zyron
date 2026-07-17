"use client";

import { useState } from "react";
import {
  FileText, CreditCard, Users, BarChart2,
  CheckCircle, Clock, AlertTriangle, TrendingUp, TrendingDown,
  ChevronDown, ChevronUp, Plus, Search, Smartphone, Banknote,
  Building, Receipt,
} from "lucide-react";

type Tab = "faktura" | "tolov" | "mijozlar" | "hisobot";

function fmt(n: number) {
  return n.toLocaleString("uz-UZ") + " so'm";
}

type Invoice = {
  id: string; client: string; contact: string; issue: string; due: string;
  amount: number; status: "tolangan" | "kutilmoqda" | "muddati" | "qisman";
  items: { name: string; qty: number; price: number }[];
};

const invoices: Invoice[] = [
  {
    id: "INV-1041", client: "Korzinka Savdo", contact: "Alisher Karimov", issue: "10 Iyul", due: "25 Iyul",
    amount: 8_500_000, status: "tolangan",
    items: [{ name: "Artel TV 43\"", qty: 2, price: 3_200_000 }, { name: "Kabel komplekt", qty: 4, price: 125_000 }, { name: "Montaj xizmati", qty: 1, price: 750_000 }],
  },
  {
    id: "INV-1042", client: "UzAuto Chilonzor", contact: "Dilnoza Yusupova", issue: "12 Iyul", due: "27 Iyul",
    amount: 15_200_000, status: "kutilmoqda",
    items: [{ name: "Diagnostika uskunasi", qty: 1, price: 12_000_000 }, { name: "O'rnatish xizmati", qty: 1, price: 3_200_000 }],
  },
  {
    id: "INV-1043", client: "Havas Group", contact: "Sardor Toshmatov", issue: "05 Iyul", due: "20 Iyul",
    amount: 6_750_000, status: "muddati",
    items: [{ name: "Yillik litsenziya", qty: 1, price: 5_500_000 }, { name: "Qo'shimcha modullar", qty: 5, price: 250_000 }],
  },
  {
    id: "INV-1044", client: "Makro Electronics", contact: "Gulnora Razzaqova", issue: "14 Iyul", due: "29 Iyul",
    amount: 3_200_000, status: "qisman",
    items: [{ name: "Dasturiy ta'minot", qty: 1, price: 2_800_000 }, { name: "Trening xizmati", qty: 2, price: 200_000 }],
  },
  {
    id: "INV-1045", client: "Anor Tekstil", contact: "Bobur Mirzo", issue: "15 Iyul", due: "30 Iyul",
    amount: 2_100_000, status: "kutilmoqda",
    items: [{ name: "Inventar tizim", qty: 1, price: 1_800_000 }, { name: "SMS xizmati 3 oy", qty: 1, price: 300_000 }],
  },
  {
    id: "INV-1046", client: "Beeline UZ", contact: "Zulfiya Abdullayeva", issue: "08 Iyul", due: "08 Iyul",
    amount: 22_000_000, status: "tolangan",
    items: [{ name: "Enterprise litsenziya", qty: 1, price: 18_000_000 }, { name: "Texnik xizmat 1 yil", qty: 1, price: 4_000_000 }],
  },
];

type Payment = {
  id: string; invId: string; client: string; amount: number;
  method: "Payme" | "Click" | "Uzum Bank" | "Naqd" | "Bank o'tkazmasi";
  date: string; status: "muvaffaqiyat" | "kutilmoqda" | "bekor";
};

const payments: Payment[] = [
  { id: "TXN-9041", invId: "INV-1041", client: "Korzinka Savdo", amount: 8_500_000, method: "Payme", date: "10 Iyul 14:32", status: "muvaffaqiyat" },
  { id: "TXN-9042", invId: "INV-1046", client: "Beeline UZ", amount: 22_000_000, method: "Bank o'tkazmasi", date: "08 Iyul 10:15", status: "muvaffaqiyat" },
  { id: "TXN-9043", invId: "INV-1044", client: "Makro Electronics", amount: 1_600_000, method: "Click", date: "15 Iyul 09:50", status: "muvaffaqiyat" },
  { id: "TXN-9044", invId: "INV-1045", client: "Anor Tekstil", amount: 2_100_000, method: "Uzum Bank", date: "16 Iyul 11:00", status: "kutilmoqda" },
  { id: "TXN-9045", invId: "INV-1042", client: "UzAuto Chilonzor", amount: 15_200_000, method: "Payme", date: "13 Iyul 16:45", status: "bekor" },
  { id: "TXN-9046", invId: "INV-1043", client: "Havas Group", amount: 3_000_000, method: "Naqd", date: "12 Iyul 08:30", status: "muvaffaqiyat" },
];

type Client = {
  name: string; contact: string; totalInvoiced: number; totalPaid: number; creditLimit: number;
  overdue: boolean; spark: number[];
};

const clients: Client[] = [
  { name: "Beeline UZ", contact: "Zulfiya A.", totalInvoiced: 42_000_000, totalPaid: 42_000_000, creditLimit: 50_000_000, overdue: false, spark: [6, 8, 5, 9, 7, 10] },
  { name: "Havas Group", contact: "Sardor T.", totalInvoiced: 18_750_000, totalPaid: 12_000_000, creditLimit: 20_000_000, overdue: true, spark: [4, 6, 3, 5, 2, 4] },
  { name: "UzAuto Chilonzor", contact: "Dilnoza Y.", totalInvoiced: 31_200_000, totalPaid: 16_000_000, creditLimit: 30_000_000, overdue: true, spark: [7, 5, 8, 4, 6, 3] },
  { name: "Korzinka Savdo", contact: "Alisher K.", totalInvoiced: 24_500_000, totalPaid: 24_500_000, creditLimit: 25_000_000, overdue: false, spark: [5, 7, 6, 8, 9, 10] },
  { name: "Makro Electronics", contact: "Gulnora R.", totalInvoiced: 9_200_000, totalPaid: 7_600_000, creditLimit: 15_000_000, overdue: false, spark: [3, 4, 5, 4, 6, 5] },
  { name: "Anor Tekstil", contact: "Bobur M.", totalInvoiced: 5_100_000, totalPaid: 3_000_000, creditLimit: 8_000_000, overdue: false, spark: [2, 3, 2, 4, 3, 5] },
];

const monthlyRevenue = [3_800_000, 4_200_000, 3_950_000, 5_800_000, 6_100_000, 5_650_000, 7_400_000, 6_900_000, 8_800_000, 9_100_000, 8_650_000, 11_500_000];
const monthLabels = ["Y", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"];
const maxRev = Math.max(...monthlyRevenue);

const methodDist = [
  { name: "Payme", pct: 38, color: "bg-blue-500" },
  { name: "Bank o'tkazmasi", pct: 29, color: "bg-violet-500" },
  { name: "Click", pct: 18, color: "bg-emerald-500" },
  { name: "Uzum Bank", pct: 10, color: "bg-amber-500" },
  { name: "Naqd", pct: 5, color: "bg-gray-500" },
];

const aging = [
  { label: "0–30 kun", amount: 12_300_000, color: "bg-emerald-500" },
  { label: "31–60 kun", amount: 6_750_000, color: "bg-amber-500" },
  { label: "61–90 kun", amount: 4_200_000, color: "bg-orange-500" },
  { label: "90+ kun", amount: 2_850_000, color: "bg-red-500" },
];
const maxAging = Math.max(...aging.map((a) => a.amount));

const methodColor = (m: Payment["method"]) => {
  if (m === "Payme") return { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/25" };
  if (m === "Click") return { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/25" };
  if (m === "Uzum Bank") return { bg: "bg-amber-500/20", text: "text-amber-400", border: "border-amber-500/25" };
  if (m === "Naqd") return { bg: "bg-violet-500/20", text: "text-violet-400", border: "border-violet-500/25" };
  return { bg: "bg-gray-500/20", text: "text-gray-400", border: "border-gray-500/25" };
};

const statusCfg = (s: Invoice["status"]) => {
  if (s === "tolangan") return { label: "To'langan", cls: "bg-emerald-500/15 text-emerald-400" };
  if (s === "kutilmoqda") return { label: "Kutilmoqda", cls: "bg-amber-500/15 text-amber-400" };
  if (s === "muddati") return { label: "Muddati o'tgan", cls: "bg-red-500/15 text-red-400", pulse: true };
  return { label: "Qisman", cls: "bg-blue-500/15 text-blue-400" };
};

function Sparkline({ data }: { data: number[] }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-0.5 h-5">
      {data.map((v, i) => (
        <div
          key={i}
          className="w-2 rounded-t bg-cyan-500/50"
          style={{ height: `${(v / max) * 100}%` }}
        />
      ))}
    </div>
  );
}

export default function BillingDemo() {
  const [tab, setTab] = useState<Tab>("faktura");
  const [expandedInv, setExpandedInv] = useState<string | null>(null);
  const [clientSearch, setClientSearch] = useState("");
  const [selectedTxn, setSelectedTxn] = useState<string | null>(null);
  const [showNew, setShowNew] = useState(false);

  const tabs: { key: Tab; label: string; icon: React.ElementType }[] = [
    { key: "faktura", label: "Hisob-fakturalar", icon: FileText },
    { key: "tolov", label: "To'lovlar", icon: CreditCard },
    { key: "mijozlar", label: "Mijozlar", icon: Users },
    { key: "hisobot", label: "Hisobot", icon: BarChart2 },
  ];

  const totalOutstanding = invoices
    .filter((i) => i.status !== "tolangan")
    .reduce((s, i) => s + i.amount, 0);
  const overdueAmount = invoices
    .filter((i) => i.status === "muddati")
    .reduce((s, i) => s + i.amount, 0);
  const thisMonthRev = invoices
    .filter((i) => i.status === "tolangan")
    .reduce((s, i) => s + i.amount, 0);

  const filteredClients = clients.filter(
    (c) =>
      c.name.toLowerCase().includes(clientSearch.toLowerCase()) ||
      c.contact.toLowerCase().includes(clientSearch.toLowerCase())
  );

  const dailyTotal = payments
    .filter((p) => p.status === "muvaffaqiyat" && p.date.startsWith("10 Iyul"))
    .reduce((s, p) => s + p.amount, 0);

  const selectedPayment = payments.find((p) => p.id === selectedTxn);

  const collectionRate = Math.round(
    (invoices.filter((i) => i.status === "tolangan").reduce((s, i) => s + i.amount, 0) /
      invoices.reduce((s, i) => s + i.amount, 0)) *
      100
  );

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
        <div className="flex items-center gap-1 text-[9px] text-emerald-400">
          <TrendingUp size={10} /> <span>+23% oy</span>
        </div>
      </div>

      {/* ===== TAB 1: HISOB-FAKTURALAR ===== */}
      {tab === "faktura" && (
        <div className="flex-1">
          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="p-2.5 rounded-lg bg-amber-500/[0.08] border border-amber-500/20">
              <p className="text-[9px] text-gray-500">To'lanmagan</p>
              <p className="text-[12px] font-bold text-amber-400">{fmt(totalOutstanding)}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-red-500/[0.08] border border-red-500/20">
              <p className="text-[9px] text-gray-500">Muddati o'tgan</p>
              <p className="text-[12px] font-bold text-red-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />{fmt(overdueAmount)}
              </p>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/20">
              <p className="text-[9px] text-gray-500">Bu oy tushum</p>
              <p className="text-[12px] font-bold text-emerald-400">{fmt(thisMonthRev)}</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Hisob-fakturalar</p>
            <button
              onClick={() => setShowNew(!showNew)}
              className="flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-[9px] hover:bg-emerald-500/25 transition-colors"
            >
              <Plus size={9} /> Yangi faktura
            </button>
          </div>

          {showNew && (
            <div className="mb-2 p-3 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20">
              <p className="text-[10px] text-emerald-400 font-medium mb-2">Yangi hisob-faktura</p>
              <div className="grid grid-cols-2 gap-2">
                <input placeholder="Mijoz nomi" className="col-span-2 px-2.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-[10px] text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50" />
                <input placeholder="Summa (so'm)" className="px-2.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-[10px] text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50" />
                <input placeholder="Muddat sana" className="px-2.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-[10px] text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50" />
              </div>
              <button onClick={() => setShowNew(false)} className="mt-2 w-full py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 text-[10px] font-medium hover:bg-emerald-500/30 transition-colors">
                Saqlash
              </button>
            </div>
          )}

          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[520px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Faktura</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Mijoz</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Sana</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Muddat</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Summa</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                  <th className="py-2 px-2" />
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => {
                  const s = statusCfg(inv.status);
                  const expanded = expandedInv === inv.id;
                  return (
                    <>
                      <tr
                        key={inv.id}
                        className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors cursor-pointer"
                        onClick={() => setExpandedInv(expanded ? null : inv.id)}
                      >
                        <td className="py-2 px-2.5 text-emerald-400 font-mono font-medium">{inv.id}</td>
                        <td className="py-2 px-2.5">
                          <p className="text-gray-300 font-medium">{inv.client}</p>
                          <p className="text-gray-600 text-[8px]">{inv.contact}</p>
                        </td>
                        <td className="py-2 px-2.5 text-gray-500 hidden sm:table-cell">{inv.issue}</td>
                        <td className="py-2 px-2.5 text-gray-500 hidden sm:table-cell">{inv.due}</td>
                        <td className="py-2 px-2.5 text-right text-white font-bold">{fmt(inv.amount)}</td>
                        <td className="py-2 px-2.5">
                          <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium inline-flex items-center gap-1 ${s.cls}`}>
                            {s.pulse && <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />}
                            {s.label}
                          </span>
                        </td>
                        <td className="py-2 px-2 text-gray-600">
                          {expanded ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
                        </td>
                      </tr>
                      {expanded && (
                        <tr key={`${inv.id}-exp`} className="border-b border-white/[0.04] bg-white/[0.015]">
                          <td colSpan={7} className="px-4 py-3">
                            <p className="text-[9px] text-gray-500 mb-1.5">Mahsulot/xizmatlar:</p>
                            <div className="space-y-1">
                              {inv.items.map((item, i) => (
                                <div key={i} className="flex justify-between text-[10px]">
                                  <span className="text-gray-400">{item.name} × {item.qty}</span>
                                  <span className="text-white font-medium">{fmt(item.qty * item.price)}</span>
                                </div>
                              ))}
                              <div className="border-t border-white/[0.06] pt-1 flex justify-between text-[10px] font-bold">
                                <span className="text-gray-300">Jami</span>
                                <span className="text-emerald-400">{fmt(inv.amount)}</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ===== TAB 2: TO'LOVLAR ===== */}
      {tab === "tolov" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] font-bold text-white">To'lov tarixi</p>
            <div className="text-[9px] text-gray-500">
              Bugun yig'ildi: <span className="text-emerald-400 font-bold">{fmt(dailyTotal)}</span>
            </div>
          </div>

          <div className="space-y-1.5">
            {payments.map((pay) => {
              const mc = methodColor(pay.method);
              const selected = selectedTxn === pay.id;
              return (
                <div key={pay.id}>
                  <div
                    onClick={() => setSelectedTxn(selected ? null : pay.id)}
                    className={`flex items-center gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-all ${
                      selected
                        ? "bg-white/[0.05] border-white/10"
                        : "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.045]"
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${mc.bg} border ${mc.border}`}>
                      {pay.method === "Naqd" ? <Banknote size={12} className={mc.text} />
                        : pay.method === "Bank o'tkazmasi" ? <Building size={12} className={mc.text} />
                        : <Smartphone size={12} className={mc.text} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="text-[10px] font-medium text-white truncate">{pay.client}</p>
                        <span className={`text-[7px] px-1 py-0.5 rounded ${mc.bg} ${mc.text}`}>{pay.method}</span>
                      </div>
                      <p className="text-[9px] text-gray-500">{pay.id} · {pay.date}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-[11px] font-bold text-white">{fmt(pay.amount)}</p>
                      <span className={`text-[8px] flex items-center gap-0.5 justify-end ${
                        pay.status === "muvaffaqiyat" ? "text-emerald-400"
                        : pay.status === "kutilmoqda" ? "text-amber-400"
                        : "text-red-400"
                      }`}>
                        {pay.status === "muvaffaqiyat" ? <CheckCircle size={8} />
                          : pay.status === "kutilmoqda" ? <Clock size={8} />
                          : <AlertTriangle size={8} />}
                        {pay.status === "muvaffaqiyat" ? "Muvaffaqiyatli"
                          : pay.status === "kutilmoqda" ? "Kutilmoqda"
                          : "Bekor qilindi"}
                      </span>
                    </div>
                  </div>

                  {selected && selectedPayment && (
                    <div className="mt-1 mx-2 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <div className="flex items-center gap-2 mb-2">
                        <Receipt size={11} className="text-emerald-400" />
                        <p className="text-[10px] font-medium text-white">To'lov kvitansiyasi</p>
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-[9px]">
                        <div><span className="text-gray-500">Tranzaksiya ID:</span><br /><span className="text-gray-300 font-mono">{selectedPayment.id}</span></div>
                        <div><span className="text-gray-500">Faktura:</span><br /><span className="text-emerald-400">{selectedPayment.invId}</span></div>
                        <div><span className="text-gray-500">Sana:</span><br /><span className="text-gray-300">{selectedPayment.date}</span></div>
                        <div><span className="text-gray-500">Summa:</span><br /><span className="text-white font-bold">{fmt(selectedPayment.amount)}</span></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ===== TAB 3: MIJOZLAR ===== */}
      {tab === "mijozlar" && (
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="relative flex-1">
              <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                value={clientSearch}
                onChange={(e) => setClientSearch(e.target.value)}
                placeholder="Mijoz qidirish..."
                className="w-full pl-7 pr-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50"
              />
            </div>
            <span className="text-[9px] text-gray-500">{filteredClients.length} ta</span>
          </div>

          {/* Top debtors highlight */}
          {filteredClients.filter((c) => c.overdue).length > 0 && (
            <div className="mb-2 p-2 rounded-lg bg-red-500/[0.07] border border-red-500/20">
              <p className="text-[9px] text-red-400 flex items-center gap-1">
                <AlertTriangle size={9} /> Qarzdor mijozlar: {filteredClients.filter((c) => c.overdue).map((c) => c.name).join(", ")}
              </p>
            </div>
          )}

          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Kompaniya</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Fakturalangan</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">To'langan</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Qoldiq</th>
                  <th className="text-center py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Tarix</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((c) => {
                  const balance = c.totalInvoiced - c.totalPaid;
                  return (
                    <tr key={c.name} className={`border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors ${c.overdue ? "bg-red-500/[0.03]" : ""}`}>
                      <td className="py-2 px-2.5">
                        <div className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                            <span className="text-[8px] font-bold text-white">{c.name[0]}</span>
                          </div>
                          <div>
                            <p className="text-gray-300 font-medium">{c.name}</p>
                            <p className="text-gray-600 text-[8px]">{c.contact}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-2.5 text-right text-gray-400 hidden sm:table-cell">{fmt(c.totalInvoiced)}</td>
                      <td className="py-2 px-2.5 text-right text-emerald-400 font-medium">{fmt(c.totalPaid)}</td>
                      <td className="py-2 px-2.5 text-right font-bold">
                        <span className={balance > 0 ? "text-red-400" : "text-emerald-400"}>
                          {balance > 0 ? fmt(balance) : "0"}
                        </span>
                      </td>
                      <td className="py-2 px-2.5 hidden sm:table-cell">
                        <Sparkline data={c.spark} />
                      </td>
                      <td className="py-2 px-2.5">
                        {c.overdue ? (
                          <span className="px-1.5 py-0.5 rounded text-[8px] bg-red-500/15 text-red-400 flex items-center gap-1 w-fit">
                            <span className="w-1 h-1 rounded-full bg-red-400 animate-pulse" /> Qarzdor
                          </span>
                        ) : (
                          <span className="px-1.5 py-0.5 rounded text-[8px] bg-emerald-500/15 text-emerald-400">Yaxshi</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ===== TAB 4: HISOBOT ===== */}
      {tab === "hisobot" && (
        <div className="flex-1 space-y-3">
          {/* KPI cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Bu oy daromad", value: fmt(11_500_000), color: "text-emerald-400", icon: TrendingUp },
              { label: "O'rtacha faktura", value: fmt(Math.round(invoices.reduce((s, i) => s + i.amount, 0) / invoices.length)), color: "text-white", icon: FileText },
              { label: "Yig'ish darajasi", value: `${collectionRate}%`, color: collectionRate >= 70 ? "text-emerald-400" : "text-amber-400", icon: CheckCircle },
              { label: "Faol mijozlar", value: `${clients.length} ta`, color: "text-blue-400", icon: Users },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[9px] text-gray-500">{s.label}</p>
                  <s.icon size={9} className={s.color} />
                </div>
                <p className={`text-[12px] font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* Monthly revenue chart */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-3">2026 yil oylik daromad</p>
            <div className="flex items-end gap-1 h-[64px]">
              {monthlyRevenue.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div
                    className="w-full rounded-t bg-emerald-500/30 hover:bg-emerald-500/55 transition-colors cursor-pointer"
                    style={{ height: `${(v / maxRev) * 100}%` }}
                    title={fmt(v)}
                  />
                  <span className="text-[7px] text-gray-600">{monthLabels[i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Payment method distribution */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-bold text-white mb-2.5">To'lov usullari</p>
              <div className="space-y-2">
                {methodDist.map((m) => (
                  <div key={m.name} className="flex items-center gap-2">
                    <span className="text-[9px] text-gray-400 w-24 shrink-0">{m.name}</span>
                    <div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${m.color}`} style={{ width: `${m.pct}%`, opacity: 0.75 }} />
                    </div>
                    <span className="text-[9px] text-gray-300 w-6 text-right">{m.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Aging analysis */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-bold text-white mb-2.5">Qarzdorlik tahlili</p>
              <div className="space-y-2">
                {aging.map((a) => (
                  <div key={a.label} className="flex items-center gap-2">
                    <span className="text-[9px] text-gray-400 w-16 shrink-0">{a.label}</span>
                    <div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${a.color}`} style={{ width: `${(a.amount / maxAging) * 100}%`, opacity: 0.7 }} />
                    </div>
                    <span className="text-[9px] text-gray-300 text-right shrink-0 w-20">{fmt(a.amount)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t border-white/[0.06] flex justify-between text-[9px]">
                <span className="text-gray-500">Jami qarzdorlik</span>
                <span className="text-red-400 font-bold">{fmt(aging.reduce((s, a) => s + a.amount, 0))}</span>
              </div>
            </div>
          </div>

          {/* Cash flow forecast */}
          <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
            <p className="text-[11px] font-bold text-white mb-2">Naqd pul prognozi — kelgusi 4 hafta</p>
            <div className="grid grid-cols-4 gap-2">
              {[
                { week: "1-hafta", income: 8_200_000, out: 3_100_000 },
                { week: "2-hafta", income: 12_500_000, out: 4_800_000 },
                { week: "3-hafta", income: 6_800_000, out: 2_900_000 },
                { week: "4-hafta", income: 15_200_000, out: 5_500_000 },
              ].map((w) => (
                <div key={w.week} className="p-2 rounded-lg bg-white/[0.05] text-center">
                  <p className="text-[8px] text-gray-500 mb-1">{w.week}</p>
                  <p className="text-[9px] text-emerald-400 font-bold">+{fmt(w.income)}</p>
                  <p className="text-[9px] text-red-400">-{fmt(w.out)}</p>
                  <p className="text-[8px] text-gray-400 mt-0.5 border-t border-white/[0.06] pt-0.5">
                    Net: <span className={w.income - w.out > 0 ? "text-emerald-400" : "text-red-400"}>{fmt(w.income - w.out)}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
