"use client";

import { useState, useEffect, useRef } from "react";
import {
  Send, Bot, User, Sparkles, TrendingUp, AlertTriangle, Lightbulb,
  BarChart3, Target, Shield, Zap,
} from "lucide-react";

type Message = { role: "user" | "ai"; text: string; typing?: boolean };

const suggestions = [
  { icon: TrendingUp, text: "Savdo prognozini ko'rsat", color: "text-emerald-400" },
  { icon: AlertTriangle, text: "Xavfli tendentsiyalar bormi?", color: "text-amber-400" },
  { icon: Lightbulb, text: "Biznesni oshirish uchun tavsiya", color: "text-blue-400" },
  { icon: BarChart3, text: "Haftalik hisobot", color: "text-purple-400" },
  { icon: Target, text: "Mijoz segmentatsiyasi", color: "text-pink-400" },
  { icon: Shield, text: "Fraud aniqlash tizimi", color: "text-red-400" },
];

const aiResponses: Record<string, string> = {
  "Savdo prognozini ko'rsat":
    "📊 **Savdo prognozi (Iyul 2026):**\n\n• Kutilayotgan daromad: **127.5M so'm** (+18% o'tgan oyga nisbatan)\n• Eng ko'p sotilgan: iPhone 15 Pro (47 dona)\n• O'sish segmenti: Aksessuarlar (+34%)\n• Oylik trend: ↑ barqaror o'sish\n\n📈 **Keyingi 3 oylik prognoz:**\n• Avgust: 135.2M (+6%)\n• Sentabr: 142.8M (+5.6%)\n• Oktyabr: 158.1M (+10.7% - mavsumiy o'sish)\n\n💡 AI tavsiya: AirPods Pro 2 zaxirasini 30% ga oshiring — talab o'sish trendida. Oktyabrga yangi iPhone modeli kutilmoqda — oldindan buyurtma bering.",
  "Xavfli tendentsiyalar bormi?":
    "⚠️ **Diqqatga sazovor tendentsiyalar:**\n\n🔴 **Kritik:**\n• JBL Flip 6 — omborda tugagan, 12 ta kutilayotgan buyurtma bor\n• MacBook Air M3 — faqat 3 dona qoldi, yetkazib berish 14 kun\n\n🟡 **Ogohlantirish:**\n• Sony WH-1000XM5 — sotilish 23% ga kamaydi (raqobatchilar narxi pastroq)\n• Xiaomi Pad 6 — 2 dona qoldi, keyingi yetkazib berish 21 kun\n• Dushanba-seshanba savdo 40% past — marketing yetarli emas\n\n🟢 **Ijobiy:**\n• Aksessuarlar segmenti +34% o'sishda\n• Yangi mijozlar soni +15% oshdi\n\n💡 AI tavsiya: JBL Flip 6 ni zudlik bilan buyurtma qiling. Sony narxini 10% tushiring yoki bundle taklif qiling.",
  "Biznesni oshirish uchun tavsiya":
    "💡 **AI tavsiyalari (847K+ tranzaksiya tahlili asosida):**\n\n**1. Cross-selling (Qo'shimcha sotish):**\nTelefon sotganda 67% ehtimol bilan aksessuar ham sotiladi → Bundle taklif qiling (+23% daromad)\n\n**2. Vaqt optimizatsiyasi:**\nDushanba-seshanba savdo 40% past → Marketing aksiyalar shu kunlarga o'tkazilsin\n\n**3. Mijoz segmenti:**\n25-35 yosh guruhi 58% daromad beradi → Maqsadli reklama strategiyasi\n\n**4. Ombor boshqaruv:**\n3 ta mahsulot kritik darajada — avtomatik buyurtma tizimini yoqing\n\n**5. Narx optimizatsiyasi:**\nAI dinamik narxlash algoritmi 12% qo'shimcha daromad berishi mumkin\n\n**6. Mijoz qaytishi:**\n30% mijozlar qaytib kelmayapti → Loyalty dasturi ishga tushiriling\n\n📊 Prognoz: Tavsiyalar bajarilsa, oylik daromad **+35%** gacha oshishi mumkin.",
  "Haftalik hisobot":
    "📋 **Haftalik biznes hisobot (07-13 Iyul 2026):**\n\n💰 **Moliyaviy ko'rsatkichlar:**\n• Jami daromad: 198.5M so'm (+12% o'tgan haftaga)\n• Sof foyda: 47.2M so'm (marja: 23.8%)\n• O'rtacha chek: 2.4M so'm\n• Tranzaksiyalar: 847 ta\n\n📦 **Ombor:**\n• Yangi kirimlar: 85 pozitsiya\n• Sotilgan: 342 dona\n• Kritik qoldiq: 4 pozitsiya\n\n👥 **Mijozlar:**\n• Yangi mijozlar: 48 ta\n• Qaytgan mijozlar: 156 ta (32%)\n• NPS ball: 8.4/10\n\n📊 **Top 3 mahsulot:**\n1. iPhone 15 Pro — 47 dona (68.3M)\n2. AirPods Pro 2 — 89 dona (28.5M)\n3. Samsung S24 — 38 dona (44.8M)",
  "Mijoz segmentatsiyasi":
    "🎯 **Mijoz segmentatsiyasi (AI clustering):**\n\n**Segment A — Premium (18%):**\n• O'rtacha chek: 12.5M so'm\n• Tez-tez xarid: oyiga 2-3 marta\n• Sevimli: Apple mahsulotlari\n• Tavsiya: VIP dastur, shaxsiy menejer\n\n**Segment B — Regular (45%):**\n• O'rtacha chek: 3.2M so'm\n• Xarid chastotasi: oyiga 1 marta\n• Sevimli: Samsung, Xiaomi\n• Tavsiya: Cashback, aksiyalar\n\n**Segment C — Occasional (27%):**\n• O'rtacha chek: 1.8M so'm\n• Xarid: 2-3 oyda 1 marta\n• Sevimli: Aksessuarlar\n• Tavsiya: Email marketing, maxsus takliflar\n\n**Segment D — At Risk (10%):**\n• Oxirgi xarid: 90+ kun oldin\n• Tavsiya: Qaytarish kampaniyasi, 15% chegirma",
  "Fraud aniqlash tizimi":
    "🛡️ **Fraud aniqlash tizimi holati:**\n\n✅ **Tizim faol** — Real-time monitoring\n\n📊 **Bu hafta statistika:**\n• Tekshirilgan tranzaksiyalar: 847\n• Shubhali deb belgilangan: 12 (1.4%)\n• Tasdiqlangan fraud: 2 (0.24%)\n• Bloklangan summa: 23.5M so'm\n\n⚠️ **Oxirgi shubhali hodisalar:**\n1. Bir kartadan 5 daqiqada 3 ta xarid — **Bloklandi**\n2. Odatdan tashqari katta summa (45M) — **Tekshiruvda**\n3. Yangi IP manzildan kirish — **Ogohlantirish yuborildi**\n\n🤖 **AI modeli aniqlik darajasi:** 99.7%\n• False positive: 0.3%\n• Javob vaqti: <200ms\n\n💡 AI tavsiya: 2-faktorli autentifikatsiyani yoqing. 10M+ tranzaksiyalar uchun qo'shimcha tekshiruv qo'shing.",
};

const defaultResponse =
  "🤖 Sizning so'rovingizni tahlil qilayapman...\n\nAI modeli 847,000+ tranzaksiya va 1,234 mijoz ma'lumotlarini tahlil qilib, sizga eng to'g'ri javobni tayyorlaydi.\n\n💡 Quyidagi tavsiyalardan birini tanlang yoki aniqroq savol yozing:\n• Savdo prognozi\n• Xavfli tendentsiyalar\n• Biznes tavsiyalari\n• Haftalik hisobot\n• Mijoz segmentatsiyasi\n• Fraud aniqlash";

const aiCapabilities = [
  { icon: TrendingUp, label: "Prognozlash", desc: "Savdo va talab bashorati", color: "text-emerald-400" },
  { icon: AlertTriangle, label: "Anomaliya", desc: "Xavfli tendentsiyalarni aniqlash", color: "text-amber-400" },
  { icon: Target, label: "Segmentatsiya", desc: "Mijozlarni guruhlash", color: "text-pink-400" },
  { icon: Shield, label: "Fraud", desc: "Firibgarlikni oldini olish", color: "text-red-400" },
  { icon: Zap, label: "Avtomatlashtirish", desc: "Aqlli qarorlar", color: "text-blue-400" },
  { icon: BarChart3, label: "Hisobot", desc: "Real-time analytics", color: "text-purple-400" },
];

export default function AIDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Assalomu alaykum! 👋 Men ZYRON AI yordamchisi. Sizning biznes ma'lumotlaringizni tahlil qilib, real vaqtda prognoz va tavsiyalar beraman.\n\n📊 Hozir 847K+ tranzaksiya va 1,234 mijoz ma'lumoti tahlil qilingan.\n\nQuyidagilardan birini tanlang yoki savolingizni yozing:",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: Message = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const response = aiResponses[text.trim()] || defaultResponse;

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "ai", text: "", typing: true }]);

      let charIndex = 0;
      const interval = setInterval(() => {
        charIndex += 4;
        if (charIndex >= response.length) {
          clearInterval(interval);
          setMessages((prev) =>
            prev.map((m, i) =>
              i === prev.length - 1 ? { role: "ai", text: response, typing: false } : m
            )
          );
          setIsTyping(false);
        } else {
          setMessages((prev) =>
            prev.map((m, i) =>
              i === prev.length - 1 ? { ...m, text: response.slice(0, charIndex) } : m
            )
          );
        }
      }, 15);
    }, 500);
  };

  const renderText = (text: string) => {
    return text.split("\n").map((line, i) => {
      const formatted = line
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
        .replace(/→/g, '<span class="text-blue-400">→</span>');
      return (
        <span key={i}>
          <span dangerouslySetInnerHTML={{ __html: formatted }} />
          {i < text.split("\n").length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <div className="flex flex-col min-h-[420px] bg-white/[0.01] rounded-xl border border-white/[0.06] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
            <Sparkles size={14} className="text-white" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-white">ZYRON AI Assistant</p>
            <p className="text-[9px] text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Online — GPT-4 + Custom ML
            </p>
          </div>
        </div>
        {/* AI Capabilities Mini */}
        <div className="flex gap-1">
          {aiCapabilities.slice(0, 4).map((cap) => (
            <div key={cap.label} className="w-5 h-5 rounded bg-white/[0.06] flex items-center justify-center" title={cap.desc}>
              <cap.icon size={10} className={cap.color} />
            </div>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-3 max-h-[280px]">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : ""}`}>
            {msg.role === "ai" && (
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                <Bot size={12} className="text-white" />
              </div>
            )}
            <div
              className={`max-w-[80%] px-3 py-2 rounded-xl text-[11px] leading-relaxed ${
                msg.role === "user"
                  ? "bg-blue-500/20 border border-blue-500/30 text-gray-200"
                  : "bg-white/[0.04] border border-white/[0.08] text-gray-300"
              }`}
            >
              {renderText(msg.text)}
              {msg.typing && <span className="animate-pulse text-blue-400 ml-0.5">▊</span>}
            </div>
            {msg.role === "user" && (
              <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <User size={12} className="text-gray-400" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Suggestions */}
      {messages.length <= 2 && !isTyping && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 px-3 pb-2">
          {suggestions.map((s) => (
            <button
              key={s.text}
              onClick={() => sendMessage(s.text)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[10px] text-gray-400 hover:text-white hover:border-white/20 transition-all"
            >
              <s.icon size={11} className={s.color} />
              {s.text}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-t border-white/[0.06] bg-white/[0.02]">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
          placeholder="AI ga savol bering..."
          disabled={isTyping}
          className="flex-1 bg-transparent text-[11px] text-white placeholder:text-gray-600 focus:outline-none disabled:opacity-50"
        />
        <button
          onClick={() => sendMessage(input)}
          disabled={!input.trim() || isTyping}
          className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/30 transition-colors disabled:opacity-30"
        >
          <Send size={12} />
        </button>
      </div>
    </div>
  );
}
