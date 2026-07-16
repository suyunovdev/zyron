"use client";

import { useState } from "react";
import {
  Search, Phone, Mail, MoreHorizontal, Users, DollarSign,
  Clock, CheckCircle, Calendar, MessageSquare, BarChart3, Target,
} from "lucide-react";

type Tab = "pipeline" | "contacts" | "tasks" | "report";
type Stage = "lead" | "meeting" | "proposal" | "negotiation" | "won";

const stageConfig: Record<Stage, { label: string; color: string; bg: string }> = {
  lead: { label: "Yangi lid", color: "text-gray-400", bg: "bg-gray-500/15" },
  meeting: { label: "Uchrashuv", color: "text-blue-400", bg: "bg-blue-500/15" },
  proposal: { label: "Taklif", color: "text-amber-400", bg: "bg-amber-500/15" },
  negotiation: { label: "Muzokara", color: "text-purple-400", bg: "bg-purple-500/15" },
  won: { label: "Yutildi", color: "text-emerald-400", bg: "bg-emerald-500/15" },
};

const initialDeals: { id: number; name: string; company: string; value: string; stage: Stage; avatar: string; daysAgo: number; phone: string; email: string; source: string }[] = [
  { id: 1, name: "Aziz Sobirov", company: "TechPro LLC", value: "45M", stage: "negotiation", avatar: "AS", daysAgo: 2, phone: "+998 90 123 45 67", email: "aziz@techpro.uz", source: "Sayt" },
  { id: 2, name: "Nilufar Rashidova", company: "SmartRetail", value: "23M", stage: "proposal", avatar: "NR", daysAgo: 5, phone: "+998 91 234 56 78", email: "nilufar@smartretail.uz", source: "Telegram" },
  { id: 3, name: "Sardor Toshmatov", company: "FoodChain UZ", value: "67M", stage: "meeting", avatar: "ST", daysAgo: 1, phone: "+998 93 345 67 89", email: "sardor@foodchain.uz", source: "Tavsiya" },
  { id: 4, name: "Malika Azimova", company: "EduCenter Plus", value: "15M", stage: "lead", avatar: "MA", daysAgo: 0, phone: "+998 94 456 78 90", email: "malika@educenter.uz", source: "Instagram" },
  { id: 5, name: "Botir Nazarov", company: "LogiTrans", value: "89M", stage: "won", avatar: "BN", daysAgo: 3, phone: "+998 95 567 89 01", email: "botir@logitrans.uz", source: "Sayt" },
  { id: 6, name: "Kamola Latipova", company: "BeautyPro", value: "12M", stage: "lead", avatar: "KL", daysAgo: 1, phone: "+998 97 678 90 12", email: "kamola@beautypro.uz", source: "Reklama" },
  { id: 7, name: "Jasur Mirzayev", company: "BuildMax", value: "120M", stage: "negotiation", avatar: "JM", daysAgo: 4, phone: "+998 90 789 01 23", email: "jasur@buildmax.uz", source: "Tavsiya" },
  { id: 8, name: "Dilshod Rakhimov", company: "AgriTech UZ", value: "34M", stage: "proposal", avatar: "DR", daysAgo: 7, phone: "+998 91 890 12 34", email: "dilshod@agritech.uz", source: "Sayt" },
  { id: 9, name: "Nodira Karimova", company: "MediPlus", value: "56M", stage: "meeting", avatar: "NK", daysAgo: 2, phone: "+998 93 901 23 45", email: "nodira@mediplus.uz", source: "Telegram" },
  { id: 10, name: "Sherzod Umarov", company: "AutoParts.uz", value: "28M", stage: "won", avatar: "SU", daysAgo: 6, phone: "+998 94 012 34 56", email: "sherzod@autoparts.uz", source: "Reklama" },
];

const stages: Stage[] = ["lead", "meeting", "proposal", "negotiation", "won"];

const tasks = [
  { id: 1, title: "TechPro bilan uchrashuv", deal: "Aziz Sobirov", deadline: "17.07.2026", priority: "high" as const, done: false },
  { id: 2, title: "SmartRetail ga taklif yuborish", deal: "Nilufar Rashidova", deadline: "18.07.2026", priority: "high" as const, done: false },
  { id: 3, title: "FoodChain demo ko'rsatish", deal: "Sardor Toshmatov", deadline: "19.07.2026", priority: "medium" as const, done: false },
  { id: 4, title: "EduCenter ga qo'ng'iroq", deal: "Malika Azimova", deadline: "17.07.2026", priority: "medium" as const, done: true },
  { id: 5, title: "BuildMax shartnoma tayyorlash", deal: "Jasur Mirzayev", deadline: "20.07.2026", priority: "high" as const, done: false },
  { id: 6, title: "AgriTech follow-up email", deal: "Dilshod Rakhimov", deadline: "21.07.2026", priority: "low" as const, done: false },
  { id: 7, title: "MediPlus texnik talab tahlili", deal: "Nodira Karimova", deadline: "22.07.2026", priority: "medium" as const, done: true },
  { id: 8, title: "BeautyPro mahsulot taqdimoti", deal: "Kamola Latipova", deadline: "18.07.2026", priority: "low" as const, done: false },
];

const activityLog = [
  { time: "14:30", action: "Qo'ng'iroq qildi", person: "Aziz Sobirov", icon: Phone },
  { time: "13:15", action: "Email yubordi", person: "Nilufar Rashidova", icon: Mail },
  { time: "11:00", action: "Uchrashuv o'tkazdi", person: "Sardor Toshmatov", icon: Calendar },
  { time: "10:30", action: "Izoh qoldirdi", person: "Jasur Mirzayev", icon: MessageSquare },
  { time: "09:00", action: "Deal yutildi!", person: "Botir Nazarov", icon: CheckCircle },
];

const avatarColors = [
  "from-blue-500 to-cyan-500", "from-purple-500 to-pink-500", "from-emerald-500 to-green-500",
  "from-amber-500 to-orange-500", "from-red-500 to-rose-500",
];

const priorityColors = { high: "text-red-400 bg-red-500/15", medium: "text-amber-400 bg-amber-500/15", low: "text-gray-400 bg-gray-500/15" };
const priorityLabels = { high: "Yuqori", medium: "O'rta", low: "Past" };

export default function CRMDemo() {
  const [tab, setTab] = useState<Tab>("pipeline");
  const [deals, setDeals] = useState(initialDeals);
  const [view, setView] = useState<"board" | "list">("board");
  const [selected, setSelected] = useState<number | null>(null);
  const [taskList, setTaskList] = useState(tasks);
  const selectedDeal = deals.find((d) => d.id === selected);

  const pipelineValue = deals.reduce((s, d) => s + parseInt(d.value), 0);
  const wonValue = deals.filter((d) => d.stage === "won").reduce((s, d) => s + parseInt(d.value), 0);

  const moveDeal = (id: number, newStage: Stage) => {
    setDeals((prev) => prev.map((d) => (d.id === id ? { ...d, stage: newStage } : d)));
  };

  const toggleTask = (id: number) => {
    setTaskList((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const tabsConfig: { key: Tab; label: string; icon: typeof Users }[] = [
    { key: "pipeline", label: "Pipeline", icon: Target },
    { key: "contacts", label: "Kontaktlar", icon: Users },
    { key: "tasks", label: "Vazifalar", icon: Calendar },
    { key: "report", label: "Hisobot", icon: BarChart3 },
  ];

  return (
    <div className="flex flex-col gap-3 min-h-[420px]">
      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Jami deallar", value: deals.length, icon: Users, color: "text-blue-400" },
          { label: "Pipeline qiymati", value: pipelineValue + "M", icon: DollarSign, color: "text-amber-400" },
          { label: "Yutilgan", value: wonValue + "M", icon: CheckCircle, color: "text-emerald-400" },
          { label: "O'rtacha tsikl", value: "14 kun", icon: Clock, color: "text-purple-400" },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <s.icon size={13} className={s.color} />
            <div>
              <p className="text-[11px] font-bold text-white">{s.value}</p>
              <p className="text-[9px] text-gray-500">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          {tabsConfig.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${
                tab === t.key
                  ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                  : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
              }`}
            >
              <t.icon size={11} />
              {t.label}
            </button>
          ))}
        </div>
        {tab === "pipeline" && (
          <div className="flex gap-1">
            {(["board", "list"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-2 py-1 rounded-md text-[9px] font-medium transition-colors ${
                  view === v ? "bg-white/[0.08] text-white" : "text-gray-500"
                }`}
              >
                {v === "board" ? "Kanban" : "Jadval"}
              </button>
            ))}
          </div>
        )}
      </div>

      {tab === "pipeline" && view === "board" && (
        <>
          <div className="flex gap-2 flex-1 overflow-x-auto pb-1">
            {stages.map((stage) => {
              const stageDeals = deals.filter((d) => d.stage === stage);
              const cfg = stageConfig[stage];
              return (
                <div key={stage} className="flex-1 min-w-[110px] flex flex-col">
                  <div className="flex items-center gap-1.5 mb-2 px-1">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cfg.color.includes("emerald") ? "#34d399" : cfg.color.includes("blue") ? "#60a5fa" : cfg.color.includes("amber") ? "#fbbf24" : cfg.color.includes("purple") ? "#a78bfa" : "#9ca3af" }} />
                    <span className={`text-[9px] font-semibold ${cfg.color}`}>{cfg.label}</span>
                    <span className="text-[9px] text-gray-600 ml-auto">{stageDeals.length}</span>
                  </div>
                  <div className="flex-1 space-y-1.5 overflow-y-auto max-h-[220px]">
                    {stageDeals.map((deal) => (
                      <div
                        key={deal.id}
                        onClick={() => setSelected(deal.id === selected ? null : deal.id)}
                        className={`p-2 rounded-lg bg-white/[0.03] border transition-all cursor-pointer ${
                          selected === deal.id ? "border-pink-500/40 bg-pink-500/[0.05]" : "border-white/[0.06] hover:border-white/[0.12]"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${avatarColors[deal.id % avatarColors.length]} flex items-center justify-center`}>
                            <span className="text-[7px] font-bold text-white">{deal.avatar}</span>
                          </div>
                          <p className="text-[9px] font-medium text-white truncate flex-1">{deal.name}</p>
                        </div>
                        <p className="text-[8px] text-gray-500 truncate">{deal.company}</p>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className="text-[9px] font-bold text-emerald-400">{deal.value}</span>
                          <span className="text-[8px] text-gray-600">{deal.daysAgo === 0 ? "Bugun" : deal.daysAgo + " kun"}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {selectedDeal && (
            <div className="p-3 rounded-lg bg-white/[0.03] border border-pink-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${avatarColors[selectedDeal.id % avatarColors.length]} flex items-center justify-center`}>
                  <span className="text-[10px] font-bold text-white">{selectedDeal.avatar}</span>
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-bold text-white">{selectedDeal.name}</p>
                  <p className="text-[9px] text-gray-500">{selectedDeal.company} · {selectedDeal.value} · {selectedDeal.source}</p>
                </div>
                <div className="flex gap-1.5">
                  <button className="w-6 h-6 rounded-md bg-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white"><Phone size={11} /></button>
                  <button className="w-6 h-6 rounded-md bg-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white"><Mail size={11} /></button>
                </div>
              </div>
              <div className="flex gap-1">
                {stages.filter((s) => s !== selectedDeal.stage).map((s) => (
                  <button
                    key={s}
                    onClick={() => moveDeal(selectedDeal.id, s)}
                    className={`px-2 py-1 rounded text-[8px] font-medium ${stageConfig[s].bg} ${stageConfig[s].color} hover:opacity-80`}
                  >
                    {stageConfig[s].label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {tab === "pipeline" && view === "list" && (
        <div className="flex-1 overflow-auto rounded-lg border border-white/[0.06]">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                <th className="text-left py-2 px-2 text-gray-500 font-medium">Kontakt</th>
                <th className="text-left py-2 px-2 text-gray-500 font-medium">Kompaniya</th>
                <th className="text-left py-2 px-2 text-gray-500 font-medium">Bosqich</th>
                <th className="text-left py-2 px-2 text-gray-500 font-medium">Manba</th>
                <th className="text-right py-2 px-2 text-gray-500 font-medium">Qiymat</th>
              </tr>
            </thead>
            <tbody>
              {deals.map((deal) => (
                <tr key={deal.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                  <td className="py-1.5 px-2">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${avatarColors[deal.id % avatarColors.length]} flex items-center justify-center`}>
                        <span className="text-[7px] font-bold text-white">{deal.avatar}</span>
                      </div>
                      <span className="text-gray-200 font-medium">{deal.name}</span>
                    </div>
                  </td>
                  <td className="py-1.5 px-2 text-gray-400">{deal.company}</td>
                  <td className="py-1.5 px-2">
                    <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${stageConfig[deal.stage].bg} ${stageConfig[deal.stage].color}`}>
                      {stageConfig[deal.stage].label}
                    </span>
                  </td>
                  <td className="py-1.5 px-2 text-gray-500 text-[9px]">{deal.source}</td>
                  <td className="py-1.5 px-2 text-right text-emerald-400 font-bold">{deal.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "contacts" && (
        <div className="flex-1 space-y-2 overflow-y-auto max-h-[300px]">
          {deals.map((deal) => (
            <div key={deal.id} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${avatarColors[deal.id % avatarColors.length]} flex items-center justify-center`}>
                  <span className="text-[10px] font-bold text-white">{deal.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-white">{deal.name}</p>
                  <p className="text-[9px] text-gray-500">{deal.company} · {deal.source}</p>
                </div>
                <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${stageConfig[deal.stage].bg} ${stageConfig[deal.stage].color}`}>
                  {stageConfig[deal.stage].label}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2 text-[9px]">
                <div className="flex items-center gap-1 text-gray-400">
                  <Phone size={9} />
                  <span>{deal.phone}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400">
                  <Mail size={9} />
                  <span className="truncate">{deal.email}</span>
                </div>
                <div className="text-right">
                  <span className="text-emerald-400 font-bold">{deal.value} so'm</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "tasks" && (
        <div className="flex-1 grid grid-cols-5 gap-3">
          {/* Task List */}
          <div className="col-span-3 space-y-1.5 overflow-y-auto max-h-[280px]">
            {taskList.map((task) => (
              <div
                key={task.id}
                className={`p-2.5 rounded-lg border transition-all ${
                  task.done ? "bg-white/[0.01] border-white/[0.04] opacity-60" : "bg-white/[0.03] border-white/[0.06]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                      task.done ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400" : "border-white/20 hover:border-white/40"
                    }`}
                  >
                    {task.done && <CheckCircle size={10} />}
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[10px] font-medium ${task.done ? "line-through text-gray-500" : "text-white"}`}>{task.title}</p>
                    <p className="text-[8px] text-gray-500">{task.deal} · {task.deadline}</p>
                  </div>
                  <span className={`px-1.5 py-0.5 rounded text-[7px] font-medium ${priorityColors[task.priority]}`}>
                    {priorityLabels[task.priority]}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Activity Log */}
          <div className="col-span-2 bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
            <p className="text-[11px] font-bold text-white mb-2">Bugungi faoliyat</p>
            <div className="space-y-2.5">
              {activityLog.map((act, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-md bg-white/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                    <act.icon size={10} className="text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-300">{act.action}</p>
                    <p className="text-[8px] text-gray-500">{act.person} · {act.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "report" && (
        <div className="flex-1 space-y-3">
          {/* Pipeline Funnel */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
            <p className="text-[11px] font-bold text-white mb-3">Savdo voronkasi</p>
            <div className="space-y-1.5">
              {stages.map((stage) => {
                const count = deals.filter((d) => d.stage === stage).length;
                const total = deals.reduce((s, d) => d.stage === stage ? s + parseInt(d.value) : s, 0);
                const width = (count / deals.length) * 100;
                const cfg = stageConfig[stage];
                return (
                  <div key={stage} className="flex items-center gap-2">
                    <span className={`text-[9px] w-16 ${cfg.color} font-medium`}>{cfg.label}</span>
                    <div className="flex-1 h-4 rounded bg-white/[0.04] overflow-hidden relative">
                      <div
                        className={`h-full rounded ${cfg.bg.replace("/15", "/30")} transition-all flex items-center`}
                        style={{ width: `${Math.max(width, 15)}%` }}
                      >
                        <span className="text-[8px] text-white font-medium px-1.5">{count} deal</span>
                      </div>
                    </div>
                    <span className="text-[9px] text-emerald-400 font-medium w-12 text-right">{total}M</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Source Distribution */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
              <p className="text-[11px] font-bold text-white mb-2">Lid manbalari</p>
              <div className="space-y-1.5">
                {["Sayt", "Telegram", "Tavsiya", "Reklama", "Instagram"].map((source) => {
                  const count = deals.filter((d) => d.source === source).length;
                  return (
                    <div key={source} className="flex items-center justify-between">
                      <span className="text-[9px] text-gray-400">{source}</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-16 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                          <div className="h-full rounded-full bg-pink-400" style={{ width: `${(count / deals.length) * 100}%` }} />
                        </div>
                        <span className="text-[9px] text-white font-medium">{count}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
              <p className="text-[11px] font-bold text-white mb-2">Konversiya</p>
              <div className="space-y-2">
                {[
                  { label: "Lid → Uchrashuv", value: "65%" },
                  { label: "Uchrashuv → Taklif", value: "72%" },
                  { label: "Taklif → Muzokara", value: "58%" },
                  { label: "Muzokara → Yutish", value: "45%" },
                  { label: "Umumiy", value: "20%" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <span className="text-[9px] text-gray-400">{row.label}</span>
                    <span className={`text-[10px] font-bold ${row.label === "Umumiy" ? "text-emerald-400" : "text-white"}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
