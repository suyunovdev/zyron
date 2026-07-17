"use client";

import { useState, useEffect, useRef } from "react";
import {
  TrendingUp, TrendingDown, Eye, ShoppingCart, Users, DollarSign,
  ArrowUpRight, BarChart3, PieChart, Activity, Download, Filter,
} from "lucide-react";

type Tab = "overview" | "funnel" | "realtime" | "products";

const kpis = [
  { label: "Daromad", value: "847.2M", change: "+12.5%", up: true, icon: DollarSign, color: "from-emerald-500 to-green-500" },
  { label: "Tashrif", value: "34.8K", change: "+23.1%", up: true, icon: Eye, color: "from-blue-500 to-cyan-500" },
  { label: "Konversiya", value: "4.7%", change: "+0.8%", up: true, icon: ShoppingCart, color: "from-purple-500 to-violet-500" },
  { label: "Yangi mijoz", value: "1,247", change: "-3.2%", up: false, icon: Users, color: "from-amber-500 to-orange-500" },
];

const weeklyData = [
  { day: "Du", revenue: 45, orders: 67, visitors: 82 },
  { day: "Se", revenue: 52, orders: 72, visitors: 78 },
  { day: "Ch", revenue: 78, orders: 89, visitors: 91 },
  { day: "Pa", revenue: 65, orders: 76, visitors: 85 },
  { day: "Ju", revenue: 92, orders: 95, visitors: 97 },
  { day: "Sh", revenue: 100, orders: 100, visitors: 100 },
  { day: "Ya", revenue: 58, orders: 63, visitors: 70 },
];

const channels = [
  { name: "Organik qidiruv", value: 38, color: "bg-blue-500", visitors: "13.2K" },
  { name: "To'g'ridan-to'g'ri", value: 25, color: "bg-emerald-500", visitors: "8.7K" },
  { name: "Ijtimoiy tarmoq", value: 20, color: "bg-purple-500", visitors: "7.0K" },
  { name: "Email", value: 12, color: "bg-amber-500", visitors: "4.2K" },
  { name: "Boshqa", value: 5, color: "bg-gray-500", visitors: "1.7K" },
];

const topProducts = [
  { name: "iPhone 15 Pro", revenue: "142.5M", sold: 47, growth: 18, category: "Telefonlar" },
  { name: "AirPods Pro 2", revenue: "89.3M", sold: 89, growth: 34, category: "Aksessuarlar" },
  { name: "MacBook Air M3", revenue: "78.0M", sold: 12, growth: -8, category: "Noutbuklar" },
  { name: "Samsung S24", revenue: "67.4M", sold: 38, growth: 12, category: "Telefonlar" },
  { name: "Apple Watch SE", revenue: "54.2M", sold: 33, growth: 22, category: "Aksessuarlar" },
  { name: "Samsung TV 55\"", revenue: "44.5M", sold: 14, growth: 5, category: "TV" },
  { name: "Anker PowerBank", revenue: "38.2M", sold: 156, growth: 28, category: "Aksessuarlar" },
  { name: "Sony WH-1000XM5", revenue: "36.8M", sold: 28, growth: -15, category: "Audio" },
];

const funnelData = [
  { stage: "Tashrif", count: 34800, percent: 100, color: "bg-blue-500" },
  { stage: "Mahsulot ko'rish", count: 21500, percent: 62, color: "bg-cyan-500" },
  { stage: "Savatga qo'shish", count: 8400, percent: 24, color: "bg-purple-500" },
  { stage: "Checkout boshlash", count: 4200, percent: 12, color: "bg-amber-500" },
  { stage: "Xarid yakunlash", count: 1635, percent: 4.7, color: "bg-emerald-500" },
];

const realtimeData = [
  { metric: "Hozirgi tashriflar", value: "342", change: "+12", icon: Users, color: "text-blue-400" },
  { metric: "Faol sessiyalar", value: "289", change: "+8", icon: Activity, color: "text-emerald-400" },
  { metric: "Bugungi daromad", value: "28.4M", change: "+3.2M", icon: DollarSign, color: "text-amber-400" },
  { metric: "Bugungi buyurtma", value: "127", change: "+14", icon: ShoppingCart, color: "text-purple-400" },
];

const hourlyTraffic = [0, 2, 3, 1, 1, 5, 15, 42, 58, 67, 72, 80, 85, 78, 82, 90, 95, 88, 76, 62, 48, 35, 18, 8];

const cohortData = [
  { month: "Yan", ret1: 82, ret2: 65, ret3: 52, ret4: 45, ret5: 40, ret6: 38 },
  { month: "Fev", ret1: 78, ret2: 62, ret3: 48, ret4: 42, ret5: 37 },
  { month: "Mar", ret1: 85, ret2: 68, ret3: 55, ret4: 48 },
  { month: "Apr", ret1: 80, ret2: 64, ret3: 51 },
  { month: "May", ret1: 88, ret2: 70 },
  { month: "Iyn", ret1: 83 },
];

const geoData = [
  { city: "Toshkent", orders: 1247, revenue: "456.8M", percent: 54 },
  { city: "Samarqand", orders: 312, revenue: "108.2M", percent: 13 },
  { city: "Buxoro", orders: 189, revenue: "72.5M", percent: 9 },
  { city: "Namangan", orders: 156, revenue: "58.3M", percent: 7 },
  { city: "Andijon", orders: 134, revenue: "49.1M", percent: 6 },
  { city: "Boshqa", orders: 248, revenue: "102.3M", percent: 11 },
];

function applyVariance(base: number): number {
  const delta = (Math.random() - 0.5) * 0.1 * base; // ±5%
  return Math.round(Math.max(1, Math.min(100, base + delta)));
}

export default function AnalyticsDemo() {
  const [tab, setTab] = useState<Tab>("overview");
  const [metric, setMetric] = useState<"revenue" | "orders" | "visitors">("revenue");
  const [clock, setClock] = useState(() => new Date().toLocaleTimeString("uz-UZ"));
  const [toast, setToast] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState(0);
  const [liveWeekly, setLiveWeekly] = useState(weeklyData);
  const [liveRealtime, setLiveRealtime] = useState(realtimeData);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const clockTimer = setInterval(() => setClock(new Date().toLocaleTimeString("uz-UZ")), 1000);
    return () => clearInterval(clockTimer);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setLiveWeekly((prev) =>
        prev.map((d) => ({ ...d, revenue: applyVariance(d.revenue), orders: applyVariance(d.orders), visitors: applyVariance(d.visitors) }))
      );
      setLiveRealtime((prev) =>
        prev.map((rt, i) => {
          const bases = [342, 289, 284, 127];
          const newVal = Math.round(bases[i] * (0.95 + Math.random() * 0.1));
          return { ...rt, value: i === 2 ? `${(newVal * 0.1).toFixed(1)}M` : newVal.toString() };
        })
      );
      setLastUpdated(0);
    }, 3000);
    const countTimer = setInterval(() => setLastUpdated((s) => s + 1), 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearInterval(countTimer);
    };
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const metricColors = {
    revenue: { bar: "bg-emerald-500", line: "text-emerald-400", label: "Daromad" },
    orders: { bar: "bg-blue-500", line: "text-blue-400", label: "Buyurtmalar" },
    visitors: { bar: "bg-purple-500", line: "text-purple-400", label: "Tashriflar" },
  };

  const maxHourly = Math.max(...hourlyTraffic);

  const tabsConfig: { key: Tab; label: string; icon: typeof BarChart3 }[] = [
    { key: "overview", label: "Umumiy", icon: BarChart3 },
    { key: "funnel", label: "Voronka", icon: Filter },
    { key: "realtime", label: "Real-time", icon: Activity },
    { key: "products", label: "Mahsulotlar", icon: ShoppingCart },
  ];

  return (
    <div className="flex flex-col gap-3 min-h-[420px]">
      {/* Toast */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg bg-amber-500/90 text-white text-[11px] font-medium shadow-lg">
          {toast}
        </div>
      )}

      {/* Status Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[10px] font-semibold text-amber-400">ZYRON Analytics v2.0</span>
          <span className="text-[9px] text-gray-600">•</span>
          <Activity size={9} className="text-emerald-400" />
          <span className="text-[9px] text-emerald-400">Real-time</span>
          <span className="text-[9px] text-gray-600">•</span>
          <span className="text-[9px] text-gray-500">
            Oxirgi yangilanish: {lastUpdated === 0 ? "hozir" : `${lastUpdated} soniya oldin`}
          </span>
        </div>
        <span className="text-[9px] text-gray-600 font-mono">{clock}</span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] group hover:border-white/[0.12] transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${kpi.color} flex items-center justify-center opacity-80`}>
                <kpi.icon size={13} className="text-white" />
              </div>
              <span className={`flex items-center gap-0.5 text-[9px] font-bold ${kpi.up ? "text-emerald-400" : "text-red-400"}`}>
                {kpi.up ? <TrendingUp size={9} /> : <TrendingDown size={9} />}
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
        {tabsConfig.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${
              tab === t.key
                ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
            }`}
          >
            <t.icon size={11} />
            {t.label}
          </button>
        ))}
      </div>

      {tab === "overview" && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {/* Main Chart */}
            <div className="sm:col-span-3 bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-1">
                  {(["revenue", "orders", "visitors"] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMetric(m)}
                      className={`px-2 py-0.5 rounded text-[9px] font-medium transition-colors ${
                        metric === m ? `${metricColors[m].line} bg-white/[0.06]` : "text-gray-500 hover:text-gray-300"
                      }`}
                    >
                      {metricColors[m].label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-end gap-2 h-[100px] relative">
                {hoveredBar !== null && (
                  <div
                    className="absolute -top-6 pointer-events-none z-10 px-2 py-0.5 rounded bg-white/10 border border-white/10 text-[8px] text-white font-medium"
                    style={{ left: `${(hoveredBar / liveWeekly.length) * 100}%` }}
                  >
                    {liveWeekly[hoveredBar]?.[metric]}%
                  </div>
                )}
                {liveWeekly.map((d, i) => {
                  const val = d[metric];
                  return (
                    <div
                      key={d.day}
                      className="flex-1 flex flex-col items-center gap-1"
                      onMouseEnter={() => setHoveredBar(i)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      <div
                        className={`w-full rounded-t-md ${metricColors[metric].bar} transition-all duration-700 hover:opacity-80 ${
                          i === 5 ? "opacity-100" : "opacity-50"
                        }`}
                        style={{ height: `${val}%` }}
                      />
                      <span className="text-[8px] text-gray-500">{d.day}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Traffic Channels */}
            <div className="sm:col-span-2 bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
              <p className="text-[11px] font-bold text-white mb-3">Trafik kanallari</p>
              <div className="flex justify-center mb-3">
                <div className="relative w-[80px] h-[80px]">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    {channels.reduce<{ elements: React.ReactNode[]; offset: number }>(
                      (acc, ch, i) => {
                        const dash = ch.value;
                        const colors = ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b", "#6b7280"];
                        acc.elements.push(
                          <circle key={i} cx="18" cy="18" r="14" fill="none" stroke={colors[i]} strokeWidth="4"
                            strokeDasharray={`${dash} ${100 - dash}`} strokeDashoffset={-acc.offset} />
                        );
                        acc.offset += dash;
                        return acc;
                      },
                      { elements: [], offset: 0 }
                    ).elements}
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-sm font-bold text-white">34.8K</p>
                    <p className="text-[7px] text-gray-500">tashrif</p>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                {channels.map((ch) => (
                  <div key={ch.name} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${ch.color}`} />
                    <span className="text-[9px] text-gray-400 flex-1">{ch.name}</span>
                    <span className="text-[8px] text-gray-500">{ch.visitors}</span>
                    <span className="text-[9px] text-white font-medium w-8 text-right">{ch.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Geo + Hourly */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            <div className="sm:col-span-3 bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
              <p className="text-[11px] font-bold text-white mb-2">Geografiya bo'yicha</p>
              <div className="space-y-1.5">
                {geoData.map((g) => (
                  <div key={g.city} className="flex items-center gap-2">
                    <span className="text-[9px] text-gray-400 w-16">{g.city}</span>
                    <div className="flex-1 h-2.5 rounded-full bg-white/[0.04] overflow-hidden">
                      <div className="h-full rounded-full bg-amber-500/60" style={{ width: `${g.percent}%` }} />
                    </div>
                    <span className="text-[8px] text-gray-400 w-10 text-right">{g.orders}</span>
                    <span className="text-[9px] text-white font-medium w-14 text-right">{g.revenue}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sm:col-span-2 bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
              <p className="text-[11px] font-bold text-white mb-2">Soatlik trafik</p>
              <div className="flex items-end gap-[2px] h-[60px]">
                {hourlyTraffic.map((val, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-[1px] bg-amber-500/40 hover:bg-amber-400/60 transition-colors"
                    style={{ height: `${(val / maxHourly) * 100}%`, minHeight: val > 0 ? 2 : 0 }}
                    title={`${i}:00 — ${val}%`}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1 text-[7px] text-gray-600">
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>23:00</span>
              </div>
            </div>
          </div>
        </>
      )}

      {tab === "funnel" && (
        <div className="flex-1 space-y-3">
          {/* Sales Funnel */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-4">
            <p className="text-[11px] font-bold text-white mb-4">Savdo voronkasi</p>
            <div className="overflow-x-auto">
            <div className="space-y-2 min-w-[280px]">
              {funnelData.map((step, i) => {
                const dropoff = i > 0 ? ((funnelData[i - 1].count - step.count) / funnelData[i - 1].count * 100).toFixed(0) : null;
                return (
                  <div key={step.stage}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] text-gray-300 w-28">{step.stage}</span>
                      <div className="flex-1 h-5 rounded bg-white/[0.04] overflow-hidden relative">
                        <div
                          className={`h-full rounded ${step.color} opacity-60 transition-all flex items-center`}
                          style={{ width: `${step.percent}%` }}
                        >
                          <span className="text-[8px] text-white font-bold px-2">{step.count.toLocaleString()}</span>
                        </div>
                      </div>
                      <span className="text-[9px] text-white font-medium w-10 text-right">{step.percent}%</span>
                    </div>
                    {dropoff && (
                      <div className="flex justify-center">
                        <span className="text-[8px] text-red-400">↓ {dropoff}% yo'qotish</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            </div>
          </div>

          {/* Cohort Retention */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
            <p className="text-[11px] font-bold text-white mb-2">Kohort retention (%)</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[340px] text-[9px]">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left py-1 text-gray-500 font-medium">Oy</th>
                    {["1-oy", "2-oy", "3-oy", "4-oy", "5-oy", "6-oy"].map((h) => (
                      <th key={h} className="text-center py-1 text-gray-500 font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cohortData.map((row) => (
                    <tr key={row.month} className="border-b border-white/[0.04]">
                      <td className="py-1 text-gray-400 font-medium">{row.month}</td>
                      {[row.ret1, row.ret2, row.ret3, row.ret4, row.ret5, row.ret6].map((val, i) => (
                        <td key={i} className="text-center py-1">
                          {val !== undefined ? (
                            <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${
                              val >= 70 ? "bg-emerald-500/20 text-emerald-400" :
                              val >= 50 ? "bg-amber-500/20 text-amber-400" :
                              "bg-red-500/20 text-red-400"
                            }`}>
                              {val}%
                            </span>
                          ) : <span className="text-gray-700">—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {tab === "realtime" && (
        <div className="flex-1 space-y-3">
          {/* Real-time KPIs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {liveRealtime.map((rt) => (
              <div key={rt.metric} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] border-l-2 border-l-emerald-500/40">
                <rt.icon size={12} className={`${rt.color} mb-1`} />
                <p className="text-[13px] font-bold text-white transition-all duration-500">{rt.value}</p>
                <div className="flex items-center justify-between">
                  <p className="text-[8px] text-gray-500">{rt.metric}</p>
                  <span className="text-[8px] text-emerald-400 font-medium">{rt.change}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] text-emerald-400">Live • Oxirgi yangilanish: {lastUpdated === 0 ? "hozir" : `${lastUpdated}s oldin`}</span>
            </div>
          </div>

          {/* Live Traffic Chart */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[11px] font-bold text-white">Bugungi trafik (real-time)</p>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] text-emerald-400">Live</span>
              </div>
            </div>
            <div className="flex items-end gap-[2px] h-[80px]">
              {hourlyTraffic.map((val, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-[1px] transition-colors ${
                    i <= new Date().getHours() ? "bg-amber-500/50 hover:bg-amber-400/70" : "bg-white/[0.04]"
                  }`}
                  style={{ height: `${(val / maxHourly) * 100}%`, minHeight: val > 0 ? 2 : 0 }}
                  title={`${i}:00 — ${val} tashrif`}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1 text-[7px] text-gray-600">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>23:00</span>
            </div>
          </div>

          {/* Active Pages */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
            <p className="text-[11px] font-bold text-white mb-2">Faol sahifalar (hozir)</p>
            <div className="space-y-1.5">
              {[
                { page: "/products/iphone-15-pro", visitors: 48, change: "+5" },
                { page: "/cart", visitors: 34, change: "+2" },
                { page: "/", visitors: 89, change: "-3" },
                { page: "/products/airpods-pro-2", visitors: 27, change: "+8" },
                { page: "/checkout", visitors: 15, change: "+1" },
              ].map((p) => (
                <div key={p.page} className="flex items-center gap-2">
                  <span className="text-[9px] text-gray-400 flex-1 font-mono truncate">{p.page}</span>
                  <span className="text-[9px] text-white font-medium">{p.visitors}</span>
                  <span className={`text-[8px] ${p.change.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}>{p.change}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "products" && (
        <div className="flex-1 space-y-3">
          {/* Top Products Table */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[11px] font-bold text-white">Top mahsulotlar</p>
              <button
                onClick={() => showToast("Hisobot yuklab olindi!")}
                className="flex items-center gap-1 text-[9px] text-gray-500 hover:text-amber-400 transition-colors"
              >
                <Download size={10} />
                Export
              </button>
            </div>
            <div className="overflow-auto max-h-[200px]">
              <table className="w-full min-w-[420px] text-[10px]">
                <thead className="sticky top-0 bg-[#0a0f1a]">
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left py-1.5 text-gray-500 font-medium">#</th>
                    <th className="text-left py-1.5 text-gray-500 font-medium">Mahsulot</th>
                    <th className="text-left py-1.5 text-gray-500 font-medium">Kategoriya</th>
                    <th className="text-right py-1.5 text-gray-500 font-medium">Sotilgan</th>
                    <th className="text-right py-1.5 text-gray-500 font-medium">Daromad</th>
                    <th className="text-right py-1.5 text-gray-500 font-medium">O'sish</th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.map((p, i) => (
                    <tr key={p.name} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                      <td className="py-1.5 text-gray-600">{i + 1}</td>
                      <td className="py-1.5 text-gray-200 font-medium">{p.name}</td>
                      <td className="py-1.5 text-gray-500 text-[9px]">{p.category}</td>
                      <td className="py-1.5 text-right text-gray-300">{p.sold} ta</td>
                      <td className="py-1.5 text-right text-white font-medium">{p.revenue}</td>
                      <td className="py-1.5 text-right">
                        <span className={`flex items-center gap-0.5 justify-end text-[9px] ${p.growth >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                          {p.growth >= 0 ? <ArrowUpRight size={8} /> : <TrendingDown size={8} />}
                          {Math.abs(p.growth)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Category Revenue Distribution */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
            <p className="text-[11px] font-bold text-white mb-2">Kategoriya taqsimoti</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Telefonlar", percent: 42, revenue: "356.2M", color: "bg-blue-500" },
                { name: "Aksessuarlar", percent: 28, revenue: "237.1M", color: "bg-emerald-500" },
                { name: "Noutbuklar", percent: 15, revenue: "127.1M", color: "bg-purple-500" },
                { name: "Audio/TV/Boshqa", percent: 15, revenue: "126.8M", color: "bg-amber-500" },
              ].map((c) => (
                <div key={c.name} className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className={`w-2 h-2 rounded-full ${c.color}`} />
                    <span className="text-[9px] text-gray-400">{c.name}</span>
                  </div>
                  <p className="text-[12px] font-bold text-white">{c.percent}%</p>
                  <p className="text-[8px] text-gray-500">{c.revenue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
