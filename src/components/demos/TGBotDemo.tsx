"use client";

import { useState, useRef, useEffect } from "react";
import {
  Bot, MessageSquare, BarChart2, GitBranch, Send, Plus, Edit2, Users,
  TrendingUp, Zap, CheckCircle, Clock, ChevronRight, Hash, Trash2, X
} from "lucide-react";

type TGTab = "chat" | "commands" | "funnel" | "statistika";

type Toast = { id: number; msg: string; type: "success" | "info" };
function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const show = (msg: string, type: Toast["type"] = "success") => {
    const id = Date.now();
    setToasts((p) => [...p, { id, msg, type }]);
    setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), 2500);
  };
  return { toasts, show };
}
function useClock() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
  useEffect(() => {
    const id = setInterval(() => setTime(new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit", second: "2-digit" })), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const contacts = [
  { id: 1, name: "Aziz Karimov", username: "@aziz_k", lastMsg: "/price so'radi", time: "14:32", unread: 2, avatar: "AK", online: true },
  { id: 2, name: "Nilufar Rashidova", username: "@nilufar_r", lastMsg: "Rahmat, tushundim!", time: "14:15", unread: 0, avatar: "NR", online: true },
  { id: 3, name: "Sardor Toshmatov", username: "@sardor_t", lastMsg: "/order yubordi", time: "13:58", unread: 5, avatar: "ST", online: false },
  { id: 4, name: "Dildora Yusupova", username: "@dildora_y", lastMsg: "Narx qancha?", time: "13:41", unread: 1, avatar: "DY", online: true },
  { id: 5, name: "Jasur Mirzayev", username: "@jasur_m", lastMsg: "/help", time: "13:22", unread: 0, avatar: "JM", online: false },
];

type Message = { id: number; from: "user" | "bot"; text: string; time: string };

const initialMessages: Record<number, Message[]> = {
  1: [
    { id: 1, from: "user", text: "/start", time: "14:28" },
    { id: 2, from: "bot", text: "Salom Aziz! ZYRON botiga xush kelibsiz. Qanday yordam bera olaman?", time: "14:28" },
    { id: 3, from: "user", text: "/price", time: "14:32" },
    { id: 4, from: "bot", text: "Bizning tariflar:\n\n• Asosiy — 299,000 so'm/oy\n• Pro — 599,000 so'm/oy\n• Enterprise — muzokarali\n\nBatafsil ma'lumot uchun /order buyrug'ini yuboring.", time: "14:32" },
  ],
  2: [
    { id: 1, from: "user", text: "/help", time: "14:10" },
    { id: 2, from: "bot", text: "Quyidagi buyruqlardan foydalaning:\n/start — Botni ishga tushirish\n/price — Narxlar\n/order — Buyurtma\n/status — Holat", time: "14:10" },
    { id: 3, from: "user", text: "Rahmat, tushundim!", time: "14:15" },
    { id: 4, from: "bot", text: "Iltimos! Boshqa savollaringiz bo'lsa, bemalol yozing.", time: "14:15" },
  ],
  3: [
    { id: 1, from: "user", text: "/order", time: "13:50" },
    { id: 2, from: "bot", text: "Buyurtma berish uchun quyidagi ma'lumotlarni kiriting:\n1. Ism familiya\n2. Telefon raqam\n3. Tarif", time: "13:50" },
    { id: 3, from: "user", text: "Sardor Toshmatov, +998 90 234 56 78, Pro", time: "13:55" },
    { id: 4, from: "bot", text: "Buyurtmangiz #1047 qabul qilindi! Tez orada operator bog'lanadi.", time: "13:55" },
    { id: 5, from: "user", text: "/order yubordi", time: "13:58" },
  ],
  4: [
    { id: 1, from: "user", text: "Narx qancha?", time: "13:41" },
    { id: 2, from: "bot", text: "Narxlar haqida ma'lumot olish uchun /price buyrug'ini yuboring!", time: "13:41" },
  ],
  5: [
    { id: 1, from: "user", text: "/help", time: "13:22" },
    { id: 2, from: "bot", text: "Quyidagi buyruqlardan foydalaning:\n/start — Botni ishga tushirish\n/price — Narxlar\n/order — Buyurtma\n/status — Holat", time: "13:22" },
  ],
};

const botReplies: Record<string, string> = {
  "/start": "Salom! ZYRON botiga xush kelibsiz. Qanday yordam bera olaman?",
  "/help": "Buyruqlar: /start, /price, /order, /status, /contact",
  "/price": "Tariflar: Asosiy — 299,000 so'm | Pro — 599,000 so'm | Enterprise — muzokarali",
  "/order": "Buyurtma berish uchun: ism, telefon va tarif yuboring.",
  "/status": "Buyurtma raqamingizni kiriting (#XXXX shaklida).",
  "/contact": "Operator: +998 90 123 45 67 | @zyron_support",
};

const commandsData = [
  { cmd: "/start", description: "Botni ishga tushirish", reply: "Xush kelibsiz xabari", uses: 3240 },
  { cmd: "/help", description: "Yordam ko'rsatish", reply: "Buyruqlar ro'yxati", uses: 1876 },
  { cmd: "/price", description: "Narxlar ro'yxati", reply: "Tariflar va narxlar", uses: 1243 },
  { cmd: "/order", description: "Buyurtma berish", reply: "Buyurtma shakli", uses: 712 },
  { cmd: "/status", description: "Buyurtma holati", reply: "Holat so'rash", uses: 489 },
  { cmd: "/contact", description: "Bog'lanish", reply: "Operator raqami", uses: 298 },
];

const funnelSteps = [
  { label: "/start bosgan", count: 3240, color: "bg-sky-500", pct: 100 },
  { label: "/price ko'rgan", count: 1243, color: "bg-blue-500", pct: 38.4 },
  { label: "/order boshlagan", count: 712, color: "bg-violet-500", pct: 22.0 },
  { label: "To'lov qilgan", count: 389, color: "bg-emerald-500", pct: 12.0 },
];

const weeklyMsgs = [1420, 1680, 1510, 1890, 2120, 1980, 2240];
const peakHours = [2, 1, 0, 0, 1, 3, 8, 15, 22, 18, 24, 20, 16, 12, 18, 22, 28, 30, 26, 18, 12, 8, 5, 3];

export default function TGBotDemo() {
  const [tab, setTab] = useState<TGTab>("chat");
  const [activeContact, setActiveContact] = useState(1);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showAddCmd, setShowAddCmd] = useState(false);
  const [newCmd, setNewCmd] = useState({ cmd: "", description: "", reply: "" });
  const [cmdList, setCmdList] = useState(commandsData);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { toasts, show } = useToast();
  const clock = useClock();
  const [deliveredMsgs, setDeliveredMsgs] = useState<Set<number>>(new Set());

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, activeContact]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const now = new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" });
    const msgId = Date.now();
    const userMsg: Message = { id: msgId, from: "user", text: input, time: now };
    setMessages((prev) => ({ ...prev, [activeContact]: [...(prev[activeContact] || []), userMsg] }));
    const userInput = input.trim();
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setDeliveredMsgs((p) => new Set([...p, msgId]));
    }, 600);
    setTimeout(() => {
      const reply = botReplies[userInput] ?? "Tushunmadim. /help yozing.";
      const botMsg: Message = { id: Date.now() + 1, from: "bot", text: reply, time: now };
      setMessages((prev) => ({ ...prev, [activeContact]: [...(prev[activeContact] || []), botMsg] }));
      setTyping(false);
    }, 1000);
  };

  const addCommand = () => {
    if (!newCmd.cmd || !newCmd.description) return;
    setCmdList((prev) => [...prev, { ...newCmd, uses: 0 }]);
    show(`"${newCmd.cmd}" buyrug'i qo'shildi`, "success");
    setNewCmd({ cmd: "", description: "", reply: "" });
    setShowAddCmd(false);
  };

  const tabs = [
    { key: "chat" as TGTab, label: "Chat", icon: MessageSquare },
    { key: "commands" as TGTab, label: "Buyruqlar", icon: Hash },
    { key: "funnel" as TGTab, label: "Funnel", icon: GitBranch },
    { key: "statistika" as TGTab, label: "Statistika", icon: BarChart2 },
  ];

  const currentMsgs = messages[activeContact] || [];
  const currentContact = contacts.find((c) => c.id === activeContact)!;

  return (
    <div className="flex flex-col gap-2.5 min-h-[520px]">
      {/* Toast notifications */}
      <div className="fixed top-3 right-3 z-50 flex flex-col gap-1.5 pointer-events-none">
        {toasts.map((t) => (
          <div key={t.id} className={`px-3 py-2 rounded-lg text-[10px] font-medium shadow-lg border backdrop-blur-sm ${
            t.type === "success" ? "bg-emerald-900/90 text-emerald-300 border-emerald-500/40"
            : "bg-blue-900/90 text-blue-300 border-blue-500/40"
          }`}>{t.msg}</div>
        ))}
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-sky-500/[0.06] border border-sky-500/15">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse flex-shrink-0" />
          <span className="text-[9px] font-medium text-sky-400">ZYRON TG Bot v2.0</span>
          <span className="text-[9px] text-gray-600">•</span>
          <span className="text-[9px] text-gray-500">@zyron_assistant_bot</span>
        </div>
        <div className="flex items-center gap-2 text-[9px] text-gray-500">
          <span className="text-emerald-400 font-medium">Online foydalanuvchilar: 342</span>
          <span className="text-gray-700">|</span>
          <span className="font-mono text-gray-400">{clock}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${
                tab === t.key
                  ? "bg-sky-500/20 text-sky-400 border border-sky-500/30"
                  : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
              }`}
            >
              <t.icon size={11} /> {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Bot faol</span>
        </div>
      </div>

      {/* --- CHAT TAB --- */}
      {tab === "chat" && (
        <div className="flex flex-1 gap-2 min-h-[460px]">
          {/* Contact list */}
          <div className="w-[140px] flex-shrink-0 flex flex-col gap-1 overflow-y-auto">
            {contacts.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveContact(c.id)}
                className={`flex items-start gap-1.5 p-2 rounded-lg text-left transition-colors w-full ${
                  activeContact === c.id
                    ? "bg-sky-500/15 border border-sky-500/25"
                    : "bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05]"
                }`}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-white">{c.avatar}</span>
                  </div>
                  {c.online && (
                    <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-black" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] font-medium text-gray-300 truncate">{c.name.split(" ")[0]}</p>
                  <p className="text-[8px] text-gray-600 truncate">{c.lastMsg}</p>
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="text-[7px] text-gray-600">{c.time}</span>
                  {c.unread > 0 && (
                    <span className="w-3.5 h-3.5 rounded-full bg-sky-500 text-white text-[7px] font-bold flex items-center justify-center">
                      {c.unread}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Chat window */}
          <div className="flex-1 flex flex-col bg-white/[0.02] rounded-xl border border-white/[0.06] overflow-hidden">
            {/* Chat header */}
            <div className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <span className="text-[8px] font-bold text-white">{currentContact.avatar}</span>
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-medium text-white">{currentContact.name}</p>
                <p className="text-[8px] text-gray-500">{currentContact.username}</p>
              </div>
              <Bot size={12} className="text-sky-400" />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-2.5 space-y-2 max-h-[320px]">
              {currentMsgs.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.from === "bot" && (
                    <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0 mr-1.5 mt-0.5">
                      <Bot size={9} className="text-sky-400" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] px-2.5 py-1.5 rounded-2xl text-[9px] leading-relaxed whitespace-pre-line ${
                      msg.from === "user"
                        ? "bg-sky-500/20 text-sky-100 rounded-tr-sm"
                        : "bg-white/[0.07] text-gray-300 rounded-tl-sm"
                    }`}
                  >
                    {msg.text}
                    <span className={`flex items-center justify-end gap-0.5 text-[7px] mt-0.5 ${msg.from === "user" ? "text-sky-300/60" : "text-gray-600"}`}>
                      {msg.time}
                      {msg.from === "user" && (
                        <span className={`${deliveredMsgs.has(msg.id) ? "text-sky-400" : "text-sky-300/40"}`}>
                          {deliveredMsgs.has(msg.id) ? "✓✓" : "✓"}
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0 mr-1.5">
                    <Bot size={9} className="text-sky-400" />
                  </div>
                  <div className="px-3 py-2 rounded-2xl rounded-tl-sm bg-white/[0.07]">
                    <div className="flex gap-1 items-center h-3">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="w-1 h-1 rounded-full bg-gray-500 animate-bounce"
                          style={{ animationDelay: `${i * 150}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 px-2.5 py-2 border-t border-white/[0.06]">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Xabar yozing yoki /buyruq..."
                className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-2.5 py-1.5 text-[10px] text-white placeholder:text-gray-600 focus:outline-none focus:border-sky-500/40"
              />
              <button
                onClick={sendMessage}
                className="w-7 h-7 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 hover:bg-sky-500/30 transition-colors"
              >
                <Send size={11} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- COMMANDS TAB --- */}
      {tab === "commands" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2.5">
            <p className="text-[11px] font-bold text-white">Bot buyruqlari</p>
            <button
              onClick={() => setShowAddCmd((p) => !p)}
              className="flex items-center gap-1 px-2 py-1 rounded-md bg-sky-500/15 text-sky-400 text-[9px] border border-sky-500/20 hover:bg-sky-500/25 transition-colors"
            >
              {showAddCmd ? <X size={9} /> : <Plus size={9} />}
              {showAddCmd ? "Bekor" : "Buyruq qo'shish"}
            </button>
          </div>

          {showAddCmd && (
            <div className="mb-2.5 p-3 rounded-xl bg-sky-500/[0.06] border border-sky-500/20 space-y-2">
              <p className="text-[10px] font-medium text-sky-400">Yangi buyruq</p>
              <div className="grid grid-cols-3 gap-2">
                <input
                  value={newCmd.cmd}
                  onChange={(e) => setNewCmd((p) => ({ ...p, cmd: e.target.value }))}
                  placeholder="/buyruq"
                  className="bg-white/[0.05] border border-white/[0.08] rounded-lg px-2 py-1.5 text-[9px] text-white placeholder:text-gray-600 focus:outline-none focus:border-sky-500/40 font-mono"
                />
                <input
                  value={newCmd.description}
                  onChange={(e) => setNewCmd((p) => ({ ...p, description: e.target.value }))}
                  placeholder="Tavsif"
                  className="bg-white/[0.05] border border-white/[0.08] rounded-lg px-2 py-1.5 text-[9px] text-white placeholder:text-gray-600 focus:outline-none focus:border-sky-500/40"
                />
                <input
                  value={newCmd.reply}
                  onChange={(e) => setNewCmd((p) => ({ ...p, reply: e.target.value }))}
                  placeholder="Javob matni"
                  className="bg-white/[0.05] border border-white/[0.08] rounded-lg px-2 py-1.5 text-[9px] text-white placeholder:text-gray-600 focus:outline-none focus:border-sky-500/40"
                />
              </div>
              <button
                onClick={addCommand}
                className="px-3 py-1.5 rounded-lg bg-sky-500/20 text-sky-400 text-[9px] font-medium border border-sky-500/30 hover:bg-sky-500/30 transition-colors"
              >
                Saqlash
              </button>
            </div>
          )}

          <div className="overflow-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Buyruq</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Tavsif</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Ishlatilgan</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Amal</th>
                </tr>
              </thead>
              <tbody>
                {cmdList.map((c, i) => (
                  <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5">
                      <span className="text-sky-400 font-mono font-medium">{c.cmd}</span>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400">{c.description}</td>
                    <td className="py-2 px-2.5 text-right">
                      <span className="text-white font-medium">{c.uses.toLocaleString()}</span>
                    </td>
                    <td className="py-2 px-2.5 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="w-5 h-5 rounded bg-white/[0.06] flex items-center justify-center text-gray-500 hover:text-sky-400 hover:bg-sky-500/10 transition-colors">
                          <Edit2 size={8} />
                        </button>
                        <button
                          onClick={() => { show(`"${c.cmd}" o'chirildi`, "info"); setCmdList((prev) => prev.filter((_, j) => j !== i)); }}
                          className="w-5 h-5 rounded bg-white/[0.06] flex items-center justify-center text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                        >
                          <Trash2 size={8} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-2.5 grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Jami buyruqlar</p>
              <p className="text-sm font-bold text-white">{cmdList.length}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Jami ishlatilgan</p>
              <p className="text-sm font-bold text-sky-400">{cmdList.reduce((s, c) => s + c.uses, 0).toLocaleString()}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Top buyruq</p>
              <p className="text-sm font-bold text-white font-mono">{cmdList[0]?.cmd ?? "—"}</p>
            </div>
          </div>
        </div>
      )}

      {/* --- FUNNEL TAB --- */}
      {tab === "funnel" && (
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Savdo funnel</p>
            <span className="text-[9px] text-gray-500">Oxirgi 30 kun</span>
          </div>

          <div className="space-y-3">
            {funnelSteps.map((step, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-full ${step.color} flex items-center justify-center`}>
                      <span className="text-[8px] font-bold text-white">{i + 1}</span>
                    </div>
                    <span className="text-gray-300">{step.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">{step.count.toLocaleString()}</span>
                    <span className="text-gray-500">({step.pct.toFixed(1)}%)</span>
                  </div>
                </div>
                <div className="h-3 rounded-full bg-white/[0.04] overflow-hidden">
                  <div
                    className={`h-full rounded-full ${step.color} opacity-70 transition-all`}
                    style={{ width: `${step.pct}%` }}
                  />
                </div>
                {i < funnelSteps.length - 1 && (
                  <div className="flex items-center gap-1 pl-2.5">
                    <ChevronRight size={9} className="text-gray-600" />
                    <span className="text-[8px] text-gray-600">
                      Konversiya: {((funnelSteps[i + 1].count / step.count) * 100).toFixed(1)}%
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500 mb-1">Umumiy konversiya</p>
              <p className="text-lg font-bold text-emerald-400">12.0%</p>
              <p className="text-[8px] text-gray-600">/start dan to'lovgacha</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500 mb-1">Eng kuchli qadam</p>
              <p className="text-[11px] font-bold text-sky-400">/start → /price</p>
              <p className="text-[8px] text-gray-600">38.4% o'tish</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[10px] font-medium text-white mb-2">Funnel vizual</p>
            <div className="flex flex-col items-center gap-1">
              {funnelSteps.map((step, i) => (
                <div
                  key={i}
                  className={`${step.color} opacity-70 rounded-lg flex items-center justify-center h-6`}
                  style={{ width: `${step.pct}%`, minWidth: "80px" }}
                >
                  <span className="text-[8px] text-white font-medium">{step.count.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- STATISTIKA TAB --- */}
      {tab === "statistika" && (
        <div className="flex-1 space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Jami foydalanuvchi", value: "3,240", color: "text-sky-400", icon: Users, sub: "+124 bu hafta" },
              { label: "Kunlik faol", value: "487", color: "text-emerald-400", icon: Zap, sub: "15% DAU/MAU" },
              { label: "Xabar yuborildi", value: "14,820", color: "text-violet-400", icon: MessageSquare, sub: "bugun" },
              { label: "Konversiya", value: "12.0%", color: "text-orange-400", icon: TrendingUp, sub: "start → to'lov" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center gap-1 mb-1">
                  <s.icon size={9} className="text-gray-600" />
                  <p className="text-[8px] text-gray-500">{s.label}</p>
                </div>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
                <p className="text-[8px] text-gray-600 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2">Haftalik xabarlar</p>
            <div className="flex items-end gap-1.5 h-[56px]">
              {weeklyMsgs.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div
                    className="w-full rounded-t bg-sky-500/30 hover:bg-sky-500/55 transition-colors"
                    style={{ height: `${(v / 2240) * 100}%` }}
                  />
                  <span className="text-[7px] text-gray-600">{["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"][i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-bold text-white mb-2">Top buyruqlar</p>
              <div className="space-y-1.5">
                {cmdList.slice(0, 4).map((c, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[8px] text-sky-400 font-mono w-14 flex-shrink-0">{c.cmd}</span>
                    <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full">
                      <div
                        className="h-1.5 rounded-full bg-sky-500/60"
                        style={{ width: `${(c.uses / cmdList[0].uses) * 100}%` }}
                      />
                    </div>
                    <span className="text-[8px] text-gray-500 w-8 text-right">{(c.uses / 1000).toFixed(1)}k</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-bold text-white mb-2">Pik soatlar</p>
              <div className="flex items-end gap-0.5 h-[56px]">
                {peakHours.map((v, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <div
                      className={`w-full rounded-t transition-colors ${v >= 20 ? "bg-sky-500/70" : v >= 10 ? "bg-sky-500/40" : "bg-white/[0.06]"}`}
                      style={{ height: `${(v / 30) * 100}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[7px] text-gray-600">00:00</span>
                <span className="text-[7px] text-gray-600">12:00</span>
                <span className="text-[7px] text-gray-600">23:00</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2">Foydalanuvchi o'sishi</p>
            <div className="flex items-center gap-3">
              {[
                { label: "Yangi (bu hafta)", value: "+124", color: "text-emerald-400" },
                { label: "Qayta faollashgan", value: "+38", color: "text-sky-400" },
                { label: "Ketgan", value: "-12", color: "text-red-400" },
              ].map((s) => (
                <div key={s.label} className="flex-1 text-center p-2 rounded-lg bg-white/[0.03]">
                  <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
                  <p className="text-[8px] text-gray-600">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
