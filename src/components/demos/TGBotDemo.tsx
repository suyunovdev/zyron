"use client";

import { useState } from "react";
import { Bot, MessageSquare, BarChart2, Settings, Plus, Send, TrendingUp, Users, MousePointerClick } from "lucide-react";

type TGTab = "commands" | "templates" | "analytics" | "settings";

const commands = [
  { cmd: "/start", description: "Botni ishga tushirish", reply: "Salom! Men ZYRON botiman.", trigger: "auto", uses: 1240 },
  { cmd: "/help", description: "Yordam ko'rsatish", reply: "Quyidagi buyruqlardan foydalaning...", trigger: "auto", uses: 876 },
  { cmd: "/price", description: "Narxlar ro'yxati", reply: "Bizning tariflar: Asosiy — $29/oy...", trigger: "auto", uses: 543 },
  { cmd: "/order", description: "Buyurtma berish", reply: "Buyurtma shaklini to'ldiring:", trigger: "auto", uses: 312 },
  { cmd: "/status", description: "Buyurtma holati", reply: "Buyurtma raqamingizni kiriting:", trigger: "auto", uses: 289 },
  { cmd: "/contact", description: "Bog'lanish", reply: "Operator: +998 90 123 45 67", trigger: "auto", uses: 198 },
];

const templates = [
  { id: 1, name: "Xush kelibsiz", trigger: "Yangi foydalanuvchi", preview: "Assalomu alaykum! ZYRON platformasiga xush kelibsiz...", status: "active" },
  { id: 2, name: "Buyurtma tasdiqlandi", trigger: "/order yuborilganda", preview: "Sizning buyurtmangiz #{{order_id}} qabul qilindi...", status: "active" },
  { id: 3, name: "Eslatma", trigger: "Har kuni 09:00", preview: "Bugungi vazifalaringiz: {{tasks_count}} ta...", status: "active" },
  { id: 4, name: "Chegirma taklifi", trigger: "Haftalik", preview: "Maxsus taklif! Bu hafta 20% chegirma...", status: "paused" },
];

const analyticsData = {
  sent: 14820,
  received: 9340,
  clickRate: 34.2,
  activeUsers: 1876,
  dailyMsgs: [420, 380, 510, 490, 620, 580, 540],
};

export default function TGBotDemo() {
  const [tab, setTab] = useState<TGTab>("commands");
  const [templateStatuses, setTemplateStatuses] = useState<Record<number, string>>(
    Object.fromEntries(templates.map(t => [t.id, t.status]))
  );
  const [botName, setBotName] = useState("ZYRON Assistant Bot");
  const [welcomeMsg, setWelcomeMsg] = useState("Assalomu alaykum! Qanday yordam bera olaman?");

  const tabs = [
    { key: "commands" as TGTab, label: "Buyruqlar", icon: Bot },
    { key: "templates" as TGTab, label: "Shablonlar", icon: MessageSquare },
    { key: "analytics" as TGTab, label: "Analitika", icon: BarChart2 },
    { key: "settings" as TGTab, label: "Sozlamalar", icon: Settings },
  ];

  const toggleTemplate = (id: number) =>
    setTemplateStatuses(p => ({ ...p, [id]: p[id] === "active" ? "paused" : "active" }));

  return (
    <div className="flex flex-col gap-2.5 min-h-[420px]">
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {tabs.map((t) => (
            <button key={t.key} onClick={() => setTab(t.key)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${tab === t.key ? "bg-sky-500/20 text-sky-400 border border-sky-500/30" : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"}`}>
              <t.icon size={11} /> {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          <span>Bot faol</span>
        </div>
      </div>

      {tab === "commands" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Bot buyruqlari</p>
            <button className="flex items-center gap-1 px-2 py-1 rounded-md bg-sky-500/15 text-sky-400 text-[9px] border border-sky-500/20 hover:bg-sky-500/25 transition-colors">
              <Plus size={9} /> Buyruq qo'shish
            </button>
          </div>
          <div className="overflow-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Buyruq</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Javob</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Ishlatilgan</th>
                </tr>
              </thead>
              <tbody>
                {commands.map((c, i) => (
                  <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5">
                      <p className="text-sky-400 font-mono font-medium">{c.cmd}</p>
                      <p className="text-[9px] text-gray-600">{c.description}</p>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400 hidden sm:table-cell max-w-[200px] truncate">{c.reply}</td>
                    <td className="py-2 px-2.5 text-right text-gray-300 font-medium">{c.uses.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === "templates" && (
        <div className="flex-1 space-y-2">
          <p className="text-[11px] font-bold text-white">Avtomatik javob shablonlari</p>
          {templates.map((t) => (
            <div key={t.id} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-[11px] font-medium text-white">{t.name}</p>
                    <span className="text-[9px] text-gray-500 bg-white/[0.04] px-1.5 py-0.5 rounded">{t.trigger}</span>
                  </div>
                  <p className="text-[9px] text-gray-500 truncate">{t.preview}</p>
                </div>
                <button onClick={() => toggleTemplate(t.id)}
                  className={`flex-shrink-0 px-2 py-1 rounded-md text-[9px] font-medium border transition-colors ${templateStatuses[t.id] === "active" ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/25" : "bg-gray-500/15 text-gray-400 border-gray-500/20 hover:bg-gray-500/25"}`}>
                  {templateStatuses[t.id] === "active" ? "Faol" : "To'xtatildi"}
                </button>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Faol shablonlar</p>
              <p className="text-sm font-bold text-emerald-400">{Object.values(templateStatuses).filter(s => s === "active").length}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">To'xtatilgan</p>
              <p className="text-sm font-bold text-gray-400">{Object.values(templateStatuses).filter(s => s === "paused").length}</p>
            </div>
          </div>
        </div>
      )}

      {tab === "analytics" && (
        <div className="flex-1 space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Yuborildi", value: analyticsData.sent.toLocaleString(), color: "text-sky-400", icon: Send },
              { label: "Qabul qilindi", value: analyticsData.received.toLocaleString(), color: "text-violet-400", icon: MessageSquare },
              { label: "Click rate", value: analyticsData.clickRate + "%", color: "text-emerald-400", icon: MousePointerClick },
              { label: "Faol foydalanuvchi", value: analyticsData.activeUsers.toLocaleString(), color: "text-orange-400", icon: Users },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center gap-1 mb-1">
                  <s.icon size={9} className="text-gray-600" />
                  <p className="text-[9px] text-gray-500">{s.label}</p>
                </div>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="flex items-center gap-1 mb-2">
              <TrendingUp size={10} className="text-sky-400" />
              <p className="text-[11px] font-bold text-white">Haftalik xabarlar</p>
            </div>
            <div className="flex items-end gap-1.5 h-[48px]">
              {analyticsData.dailyMsgs.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full rounded-t bg-sky-500/30 hover:bg-sky-500/50 transition-colors" style={{ height: `${(v / 650) * 100}%` }} />
                  <span className="text-[7px] text-gray-600">{["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"][i]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2">Eng ko'p ishlatiladigan buyruqlar</p>
            {commands.slice(0, 3).map((c, i) => (
              <div key={i} className="flex items-center gap-2 mb-1.5">
                <span className="text-[9px] text-sky-400 font-mono w-14 flex-shrink-0">{c.cmd}</span>
                <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full">
                  <div className="h-1.5 rounded-full bg-sky-500/60" style={{ width: `${(c.uses / 1240) * 100}%` }} />
                </div>
                <span className="text-[9px] text-gray-400 w-10 text-right">{c.uses}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "settings" && (
        <div className="flex-1 space-y-3">
          <p className="text-[11px] font-bold text-white">Bot sozlamalari</p>
          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <label className="text-[10px] text-gray-400 mb-1.5 block">Bot nomi</label>
              <input value={botName} onChange={e => setBotName(e.target.value)}
                className="w-full bg-white/[0.05] border border-white/[0.08] rounded-lg px-2.5 py-2 text-[10px] text-gray-300 outline-none focus:border-sky-500/40 transition-colors" />
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <label className="text-[10px] text-gray-400 mb-1.5 block">Xush kelibsiz xabari</label>
              <textarea value={welcomeMsg} onChange={e => setWelcomeMsg(e.target.value)} rows={3}
                className="w-full bg-white/[0.05] border border-white/[0.08] rounded-lg px-2.5 py-2 text-[10px] text-gray-300 outline-none focus:border-sky-500/40 transition-colors resize-none" />
            </div>
            {[
              { label: "Guruh xabarlari", desc: "Guruhlarda ham ishlash", enabled: true },
              { label: "Inline rejim", desc: "Inline so'rovlarni qabul qilish", enabled: false },
              { label: "Media fayllar", desc: "Rasm va video qabul qilish", enabled: true },
            ].map((opt, i) => (
              <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-medium text-gray-300">{opt.label}</p>
                  <p className="text-[9px] text-gray-600">{opt.desc}</p>
                </div>
                <div className={`w-8 h-4 rounded-full flex items-center px-0.5 transition-colors ${opt.enabled ? "bg-sky-500/40 justify-end" : "bg-white/[0.08] justify-start"}`}>
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
