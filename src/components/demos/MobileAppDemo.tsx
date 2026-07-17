"use client";

import { useState } from "react";
import {
  Smartphone, GitBranch, Bell, Activity, Star, Download, Users,
  AlertTriangle, CheckCircle, Clock, ChevronDown, ChevronUp, Send,
  Cpu, Wifi, HardDrive, TrendingUp, Plus, X
} from "lucide-react";

type MobTab = "dashboard" | "versiyalar" | "push" | "monitoring";

function fmt(n: number) {
  return n.toLocaleString("uz-UZ");
}

const reviews = [
  { name: "Aziz K.", stars: 5, text: "Juda qulay ilova! Xarid qilish juda oson.", date: "2 kun oldin" },
  { name: "Dildora Y.", stars: 4, text: "Yaxshi, lekin ba'zan sekin ishlaydi.", date: "5 kun oldin" },
  { name: "Bobur M.", stars: 5, text: "Eng yaxshi xarid ilovasi! Doim ishlataman.", date: "1 hafta oldin" },
];

const weeklyDownloads = [3200, 4100, 3800, 5200, 6800, 7100, 8400];

const versions = [
  {
    v: "v1.3.0",
    status: "review",
    date: "17 Iyul 2025",
    downloads: 0,
    crashes: 0,
    changelog: [
      "Yangi dark mode qo'shildi",
      "Push notification tizimi yaxshilandi",
      "Karta to'lov tezligi 2x oshirildi",
      "Xato tuzatishlar: login ekrani muzlashi",
    ],
  },
  {
    v: "v1.2.1",
    status: "live",
    date: "10 Iyul 2025",
    downloads: 48200,
    crashes: 12,
    changelog: [
      "Payme integratsiyasi tuzatildi",
      "Profil rasmi yuklash xatosi hal etildi",
      "Uzbek tili to'liq qo'llab-quvvatlandi",
    ],
  },
  {
    v: "v1.2.0",
    status: "live",
    date: "1 Iyul 2025",
    downloads: 112000,
    crashes: 38,
    changelog: [
      "Savat funksiyasi qayta yozildi",
      "Click & Collect qo'shildi",
      "Rating va sharh tizimi",
      "Bonus ballar dasturi",
    ],
  },
  {
    v: "v1.1.0",
    status: "archived",
    date: "15 Iyun 2025",
    downloads: 88300,
    crashes: 94,
    changelog: [
      "Birinchi ommaviy versiya",
      "Asosiy xarid funksiyasi",
      "Foydalanuvchi autentifikatsiyasi",
    ],
  },
];

const notifications = [
  { id: 1, title: "Flash Sale! 50% chegirma", body: "Faqat bugun! Barcha mahsulotlarda -50%", segment: "Barchasi", status: "sent", sent: 18240, delivered: 17800, opened: 6200, date: "Bugun 10:00" },
  { id: 2, title: "Yangi mahsulotlar keldi", body: "iPhone 15 Pro va MacBook Air M3 mavjud", segment: "Premium", status: "sent", sent: 4120, delivered: 4050, opened: 1890, date: "Kecha 18:00" },
  { id: 3, title: "Buyurtmangiz yo'lda!", body: "Taxminiy vaqt: 25-40 daqiqa", segment: "Yangi", status: "scheduled", sent: 0, delivered: 0, opened: 0, date: "Ertaga 09:00" },
];

const errorLog = [
  { ts: "14:32:18", screen: "Checkout", msg: "NullPointerException: cart.items", severity: "critical" },
  { ts: "14:28:05", screen: "Auth", msg: "Network timeout: /api/login (5000ms)", severity: "error" },
  { ts: "14:15:42", screen: "Catalog", msg: "Image load failed: CDN 503", severity: "warning" },
  { ts: "13:58:11", screen: "Profile", msg: "UserDefaults key not found: 'token'", severity: "error" },
  { ts: "13:44:33", screen: "Home", msg: "WebSocket disconnect: code 1001", severity: "warning" },
];

const apiTimes = [42, 68, 88, 124, 56, 78, 95, 110, 62, 48, 102, 85];

export default function MobileAppDemo() {
  const [tab, setTab] = useState<MobTab>("dashboard");
  const [expandedVersion, setExpandedVersion] = useState<string | null>("v1.2.1");
  const [notifTitle, setNotifTitle] = useState("");
  const [notifBody, setNotifBody] = useState("");
  const [segment, setSegment] = useState("Barchasi");
  const [scheduled, setScheduled] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const tabs = [
    { key: "dashboard" as MobTab, label: "Dashboard", icon: TrendingUp },
    { key: "versiyalar" as MobTab, label: "Versiyalar", icon: GitBranch },
    { key: "push" as MobTab, label: "Push", icon: Bell },
    { key: "monitoring" as MobTab, label: "Monitoring", icon: Activity },
  ];

  const statusBadge = (s: string) => ({
    live: "bg-emerald-500/15 text-emerald-400",
    review: "bg-amber-500/15 text-amber-400",
    archived: "bg-white/[0.06] text-gray-500",
  }[s] ?? "bg-white/[0.06] text-gray-500");

  const statusLabel = (s: string) => ({ live: "Faol", review: "Ko'rib chiqilmoqda", archived: "Arxivlangan" }[s] ?? s);

  const severityBadge = (s: string) => ({
    critical: "bg-red-500/20 text-red-400",
    error: "bg-orange-500/15 text-orange-400",
    warning: "bg-amber-500/15 text-amber-400",
  }[s] ?? "bg-white/[0.06] text-gray-400");

  const handleSend = () => {
    if (!notifTitle.trim()) return;
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1500);
    setTimeout(() => { setSent(false); setNotifTitle(""); setNotifBody(""); }, 4000);
  };

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
                  ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                  : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
              }`}
            >
              <t.icon size={11} /> {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>v1.2.1 Faol</span>
        </div>
      </div>

      {/* --- DASHBOARD TAB --- */}
      {tab === "dashboard" && (
        <div className="flex-1 space-y-3">
          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Jami yuklab olish", value: "248,500", color: "text-violet-400", icon: Download, sub: "+8,400 bu hafta" },
              { label: "Faol foydalanuvchi", value: "18,200", color: "text-emerald-400", icon: Users, sub: "7.3% DAU/Total" },
              { label: "Crash darajasi", value: "0.12%", color: "text-amber-400", icon: AlertTriangle, sub: "industry avg: 1.2%" },
              { label: "Reyting", value: "4.7 ★", color: "text-orange-400", icon: Star, sub: "3,840 sharh" },
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

          {/* Platform split + Weekly downloads */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-bold text-white mb-2">Platform taqsimot</p>
              <div className="space-y-2">
                {[
                  { label: "iOS", pct: 58, count: "144,130", color: "bg-sky-500" },
                  { label: "Android", pct: 42, count: "104,370", color: "bg-emerald-500" },
                ].map((p) => (
                  <div key={p.label}>
                    <div className="flex justify-between text-[9px] mb-1">
                      <span className="text-gray-400">{p.label}</span>
                      <span className="text-gray-300">{p.count} ({p.pct}%)</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                      <div className={`h-full rounded-full ${p.color} opacity-70`} style={{ width: `${p.pct}%` }} />
                    </div>
                  </div>
                ))}
                {/* Visual bar */}
                <div className="flex h-3 rounded-full overflow-hidden mt-1">
                  <div className="bg-sky-500/60 flex items-center justify-center" style={{ width: "58%" }}>
                    <span className="text-[7px] text-white font-medium">iOS 58%</span>
                  </div>
                  <div className="bg-emerald-500/60 flex items-center justify-center flex-1">
                    <span className="text-[7px] text-white font-medium">And 42%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-bold text-white mb-2">Haftalik yuklab olishlar</p>
              <div className="flex items-end gap-1.5 h-[56px]">
                {weeklyDownloads.map((v, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                    <div
                      className="w-full rounded-t bg-violet-500/30 hover:bg-violet-500/55 transition-colors"
                      style={{ height: `${(v / 8400) * 100}%` }}
                    />
                    <span className="text-[7px] text-gray-600">{["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"][i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent reviews */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2">So'nggi sharhlar</p>
            <div className="space-y-2">
              {reviews.map((r, i) => (
                <div key={i} className="flex items-start gap-2.5 p-2 rounded-lg bg-white/[0.03]">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-[8px] font-bold text-white">{r.name[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[9px] font-medium text-gray-300">{r.name}</span>
                      <span className="text-[7px] text-gray-600">{r.date}</span>
                    </div>
                    <div className="flex gap-0.5 mb-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={8} className={j < r.stars ? "text-amber-400 fill-amber-400" : "text-gray-700"} />
                      ))}
                    </div>
                    <p className="text-[8px] text-gray-500">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- VERSIYALAR TAB --- */}
      {tab === "versiyalar" && (
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[11px] font-bold text-white">Versiya tarixi</p>
            <button className="flex items-center gap-1 px-2 py-1 rounded-md bg-violet-500/15 text-violet-400 text-[9px] border border-violet-500/20 hover:bg-violet-500/25 transition-colors">
              <Plus size={9} /> Yangi versiya
            </button>
          </div>
          {versions.map((ver) => (
            <div key={ver.v} className={`rounded-xl border transition-colors ${expandedVersion === ver.v ? "bg-violet-500/[0.06] border-violet-500/25" : "bg-white/[0.03] border-white/[0.06]"}`}>
              <button
                className="w-full flex items-center gap-3 p-3 text-left"
                onClick={() => setExpandedVersion(expandedVersion === ver.v ? null : ver.v)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-white font-mono">{ver.v}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${statusBadge(ver.status)}`}>
                      {statusLabel(ver.status)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[9px] text-gray-500">
                    <span className="flex items-center gap-1"><Clock size={8} /> {ver.date}</span>
                    {ver.downloads > 0 && <span className="flex items-center gap-1"><Download size={8} /> {fmt(ver.downloads)}</span>}
                    {ver.crashes > 0 && <span className="flex items-center gap-1 text-red-400"><AlertTriangle size={8} /> {ver.crashes} crash</span>}
                  </div>
                </div>
                {expandedVersion === ver.v ? <ChevronUp size={12} className="text-gray-500 flex-shrink-0" /> : <ChevronDown size={12} className="text-gray-500 flex-shrink-0" />}
              </button>
              {expandedVersion === ver.v && (
                <div className="px-3 pb-3 border-t border-white/[0.06] pt-2.5">
                  <p className="text-[9px] text-gray-500 mb-2">O'zgarishlar:</p>
                  <div className="space-y-1.5">
                    {ver.changelog.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle size={9} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-[9px] text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* --- PUSH TAB --- */}
      {tab === "push" && (
        <div className="flex-1 space-y-3">
          {/* Notification list */}
          <div>
            <p className="text-[11px] font-bold text-white mb-2">Yuborilgan bildirishnomalar</p>
            <div className="space-y-2">
              {notifications.map((n) => (
                <div key={n.id} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <p className="text-[10px] font-medium text-white">{n.title}</p>
                      <p className="text-[8px] text-gray-500">{n.body}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span className={`px-1.5 py-0.5 rounded text-[7px] font-medium ${n.status === "sent" ? "bg-emerald-500/15 text-emerald-400" : "bg-amber-500/15 text-amber-400"}`}>
                        {n.status === "sent" ? "Yuborildi" : "Rejalashtirilgan"}
                      </span>
                      <span className="text-[7px] text-gray-600">{n.date}</span>
                    </div>
                  </div>
                  {n.status === "sent" && (
                    <div className="grid grid-cols-4 gap-1.5">
                      {[
                        { label: "Yuborildi", value: fmt(n.sent), color: "text-gray-300" },
                        { label: "Yetdi", value: fmt(n.delivered), color: "text-sky-400" },
                        { label: "Ochildi", value: fmt(n.opened), color: "text-emerald-400" },
                        { label: "CTR", value: ((n.opened / n.sent) * 100).toFixed(1) + "%", color: "text-violet-400" },
                      ].map((s) => (
                        <div key={s.label} className="text-center p-1 rounded bg-white/[0.03]">
                          <p className={`text-[9px] font-bold ${s.color}`}>{s.value}</p>
                          <p className="text-[7px] text-gray-600">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Create notification */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[10px] font-bold text-white mb-2.5 flex items-center gap-1.5">
              <Plus size={10} /> Yangi bildirishnoma
            </p>
            {sent ? (
              <div className="flex flex-col items-center gap-2 py-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle size={20} className="text-emerald-400" />
                </div>
                <p className="text-[10px] text-emerald-400 font-medium">Bildirishnoma yuborildi!</p>
              </div>
            ) : (
              <div className="space-y-2">
                <input
                  value={notifTitle}
                  onChange={(e) => setNotifTitle(e.target.value)}
                  placeholder="Sarlavha (masalan: Flash Sale!)"
                  className="w-full bg-white/[0.05] border border-white/[0.08] rounded-lg px-2.5 py-2 text-[10px] text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500/40 transition-colors"
                />
                <textarea
                  value={notifBody}
                  onChange={(e) => setNotifBody(e.target.value)}
                  placeholder="Xabar matni..."
                  rows={2}
                  className="w-full bg-white/[0.05] border border-white/[0.08] rounded-lg px-2.5 py-2 text-[10px] text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500/40 transition-colors resize-none"
                />
                <div className="flex items-center gap-2">
                  <div className="flex gap-1 flex-wrap flex-1">
                    {["Barchasi", "Premium", "Yangi"].map((s) => (
                      <button
                        key={s}
                        onClick={() => setSegment(s)}
                        className={`px-2 py-1 rounded-md text-[9px] font-medium transition-colors ${
                          segment === s
                            ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                            : "bg-white/[0.04] text-gray-500 border border-white/[0.06] hover:text-gray-300"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setScheduled((p) => !p)}
                    className={`flex items-center gap-1 px-2 py-1 rounded-md text-[9px] border transition-colors ${
                      scheduled
                        ? "bg-amber-500/15 text-amber-400 border-amber-500/25"
                        : "bg-white/[0.04] text-gray-500 border-white/[0.06]"
                    }`}
                  >
                    <Clock size={8} /> {scheduled ? "Rejalashtirilgan" : "Hozir"}
                  </button>
                </div>
                <button
                  onClick={handleSend}
                  disabled={sending || !notifTitle.trim()}
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-violet-500/20 text-violet-400 text-[10px] font-medium border border-violet-500/30 hover:bg-violet-500/30 transition-colors disabled:opacity-50"
                >
                  {sending ? (
                    <>
                      <div className="w-3 h-3 rounded-full border border-violet-400/40 border-t-violet-400 animate-spin" />
                      Yuborilmoqda...
                    </>
                  ) : (
                    <>
                      <Send size={10} /> {scheduled ? "Rejalashtirish" : "Yuborish"}
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- MONITORING TAB --- */}
      {tab === "monitoring" && (
        <div className="flex-1 space-y-3">
          {/* Real-time metrics */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-[11px] font-bold text-white">Real-time metrikalar</p>
              <span className="flex items-center gap-1 text-[8px] text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Jonli
              </span>
            </div>
            <div className="space-y-2.5">
              {[
                { label: "CPU", value: 34, color: "bg-sky-500", text: "text-sky-400", unit: "34%" },
                { label: "Xotira", value: 62, color: "bg-violet-500", text: "text-violet-400", unit: "62% (2.4 GB)" },
                { label: "Tarmoq", value: 18, color: "bg-emerald-500", text: "text-emerald-400", unit: "18 Mbps" },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between text-[9px] mb-1">
                    <span className="text-gray-400 flex items-center gap-1">
                      {m.label === "CPU" ? <Cpu size={8} /> : m.label === "Xotira" ? <HardDrive size={8} /> : <Wifi size={8} />}
                      {m.label}
                    </span>
                    <span className={m.text}>{m.unit}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className={`h-full rounded-full ${m.color} opacity-70 transition-all`} style={{ width: `${m.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Crash-free ring + API chart */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col items-center gap-2">
              <p className="text-[11px] font-bold text-white self-start">Crash-free foydalanuvchi</p>
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                  <circle
                    cx="40" cy="40" r="32" fill="none"
                    stroke="rgba(52,211,153,0.7)" strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 32 * 0.9988} ${2 * Math.PI * 32}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-base font-bold text-emerald-400">99.9%</span>
                </div>
              </div>
              <p className="text-[8px] text-gray-500">18,178 / 18,200 foydalanuvchi</p>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-bold text-white mb-2">API javob vaqti (ms)</p>
              <div className="flex items-end gap-1 h-[56px]">
                {apiTimes.map((v, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                    <div
                      className={`w-full rounded-t transition-colors ${v > 100 ? "bg-red-500/50" : v > 75 ? "bg-amber-500/50" : "bg-violet-500/40"}`}
                      style={{ height: `${(v / 124) * 100}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[7px] text-gray-600">avg: 78ms</span>
                <span className="text-[7px] text-gray-600">max: 124ms</span>
              </div>
            </div>
          </div>

          {/* Error log */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2">So'nggi xatolar</p>
            <div className="overflow-x-auto">
              <table className="w-full text-[9px] min-w-[500px]">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left py-1.5 px-2 text-gray-500 font-medium">Vaqt</th>
                    <th className="text-left py-1.5 px-2 text-gray-500 font-medium">Ekran</th>
                    <th className="text-left py-1.5 px-2 text-gray-500 font-medium">Xato</th>
                    <th className="text-left py-1.5 px-2 text-gray-500 font-medium">Daraja</th>
                  </tr>
                </thead>
                <tbody>
                  {errorLog.map((e, i) => (
                    <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                      <td className="py-1.5 px-2 text-gray-500 font-mono">{e.ts}</td>
                      <td className="py-1.5 px-2 text-gray-300">{e.screen}</td>
                      <td className="py-1.5 px-2 text-gray-500 max-w-[180px] truncate font-mono">{e.msg}</td>
                      <td className="py-1.5 px-2">
                        <span className={`px-1.5 py-0.5 rounded text-[7px] font-medium ${severityBadge(e.severity)}`}>
                          {e.severity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
