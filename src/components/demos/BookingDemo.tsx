"use client";

import { useState } from "react";
import {
  Calendar, Clock, Users, Scissors, Star, Search, Plus, CheckCircle,
  XCircle, Phone, ChevronDown, ChevronUp, Sparkles, TrendingUp,
} from "lucide-react";

type BookingTab = "calendar" | "bronlar" | "xizmatlar" | "mijozlar";

function fmt(n: number) {
  return n.toLocaleString("uz-UZ") + " so'm";
}

const DAYS = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"];
const HOURS = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

type Booking = {
  id: number;
  client: string;
  phone: string;
  service: string;
  day: number;
  hour: string;
  duration: number;
  status: "Tasdiqlangan" | "Kutilmoqda" | "Bekor";
  price: number;
  color: string;
};

const SERVICES = [
  { name: "Soch olish", price: 35000, duration: 30, icon: "✂", color: "bg-violet-500/20 text-violet-400 border-violet-500/30", bookings: 87, popularity: 87 },
  { name: "Massaj", price: 120000, duration: 60, icon: "💆", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30", bookings: 54, popularity: 54 },
  { name: "Yuz parvarishi", price: 85000, duration: 45, icon: "✨", color: "bg-pink-500/20 text-pink-400 border-pink-500/30", bookings: 63, popularity: 63 },
  { name: "Manikur", price: 45000, duration: 40, icon: "💅", color: "bg-amber-500/20 text-amber-400 border-amber-500/30", bookings: 72, popularity: 72 },
  { name: "Pedikur", price: 50000, duration: 50, icon: "🦶", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30", bookings: 41, popularity: 41 },
  { name: "Soqol olish", price: 25000, duration: 20, icon: "🪒", color: "bg-blue-500/20 text-blue-400 border-blue-500/30", bookings: 95, popularity: 95 },
];

const INITIAL_BOOKINGS: Booking[] = [
  { id: 1, client: "Aziz Karimov", phone: "+998 91 234 56 78", service: "Soch olish", day: 0, hour: "09:00", duration: 30, status: "Tasdiqlangan", price: 35000, color: "bg-violet-500/25 border-violet-500/40 text-violet-300" },
  { id: 2, client: "Nilufar Yusupova", phone: "+998 93 345 67 89", service: "Manikur", day: 0, hour: "11:00", duration: 40, status: "Kutilmoqda", price: 45000, color: "bg-amber-500/25 border-amber-500/40 text-amber-300" },
  { id: 3, client: "Sardor Toshev", phone: "+998 90 456 78 90", service: "Soqol olish", day: 1, hour: "10:00", duration: 20, status: "Tasdiqlangan", price: 25000, color: "bg-blue-500/25 border-blue-500/40 text-blue-300" },
  { id: 4, client: "Dildora Rahimova", phone: "+998 94 567 89 01", service: "Yuz parvarishi", day: 1, hour: "14:00", duration: 45, status: "Tasdiqlangan", price: 85000, color: "bg-pink-500/25 border-pink-500/40 text-pink-300" },
  { id: 5, client: "Jasur Mirzayev", phone: "+998 97 678 90 12", service: "Massaj", day: 2, hour: "13:00", duration: 60, status: "Kutilmoqda", price: 120000, color: "bg-emerald-500/25 border-emerald-500/40 text-emerald-300" },
  { id: 6, client: "Malika Sobirov", phone: "+998 99 789 01 23", service: "Pedikur", day: 3, hour: "11:00", duration: 50, status: "Tasdiqlangan", price: 50000, color: "bg-cyan-500/25 border-cyan-500/40 text-cyan-300" },
  { id: 7, client: "Bobur Ergashev", phone: "+998 91 890 12 34", service: "Soch olish", day: 4, hour: "09:00", duration: 30, status: "Bekor", price: 35000, color: "bg-violet-500/25 border-violet-500/40 text-violet-300" },
  { id: 8, client: "Zulfiya Nazarova", phone: "+998 93 901 23 45", service: "Manikur", day: 4, hour: "15:00", duration: 40, status: "Tasdiqlangan", price: 45000, color: "bg-amber-500/25 border-amber-500/40 text-amber-300" },
];

const CLIENTS = [
  { id: 1, name: "Kamola Xasanova", phone: "+998 91 111 22 33", visits: 18, spent: 1530000, lastVisit: "15 Iyul", loyalty: "Gold" },
  { id: 2, name: "Rustam Aliyev", phone: "+998 90 222 33 44", visits: 12, spent: 840000, lastVisit: "14 Iyul", loyalty: "Silver" },
  { id: 3, name: "Shahlo Qodirov", phone: "+998 97 333 44 55", visits: 7, spent: 455000, lastVisit: "12 Iyul", loyalty: "Silver" },
  { id: 4, name: "Otabek Nurullayev", phone: "+998 94 444 55 66", visits: 3, spent: 135000, lastVisit: "10 Iyul", loyalty: "Bronze" },
  { id: 5, name: "Gulnora Ismoilova", phone: "+998 93 555 66 77", visits: 21, spent: 2100000, lastVisit: "16 Iyul", loyalty: "Gold" },
  { id: 6, name: "Farrux Tojiboyev", phone: "+998 99 666 77 88", visits: 5, spent: 250000, lastVisit: "11 Iyul", loyalty: "Bronze" },
  { id: 7, name: "Madina Yusupova", phone: "+998 91 777 88 99", visits: 9, spent: 720000, lastVisit: "13 Iyul", loyalty: "Silver" },
  { id: 8, name: "Aziz Karimov", phone: "+998 91 234 56 78", visits: 14, spent: 980000, lastVisit: "17 Iyul", loyalty: "Gold" },
];

const loyaltyStyle: Record<string, string> = {
  Gold: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  Silver: "bg-gray-400/20 text-gray-300 border border-gray-400/30",
  Bronze: "bg-orange-700/20 text-orange-400 border border-orange-700/30",
};

const loyaltyStars: Record<string, number> = { Gold: 3, Silver: 2, Bronze: 1 };

type NewBookingForm = {
  client: string;
  service: string;
  duration: number;
};

export default function BookingDemo() {
  const [tab, setTab] = useState<BookingTab>("calendar");
  const [bookings, setBookings] = useState<Booking[]>(INITIAL_BOOKINGS);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<{ day: number; hour: string } | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [newForm, setNewForm] = useState<NewBookingForm>({ client: "", service: "Soch olish", duration: 30 });
  const [clientSearch, setClientSearch] = useState("");
  const [editingService, setEditingService] = useState<number | null>(null);

  const statusColor: Record<string, string> = {
    Tasdiqlangan: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25",
    Kutilmoqda: "bg-amber-500/15 text-amber-400 border border-amber-500/25",
    Bekor: "bg-red-500/15 text-red-400 border border-red-500/25",
  };

  const slotBooking = (day: number, hour: string) =>
    bookings.find((b) => b.day === day && b.hour === hour && b.status !== "Bekor");

  const confirmBooking = (id: number) =>
    setBookings((prev) => prev.map((b) => b.id === id ? { ...b, status: "Tasdiqlangan" } : b));
  const cancelBooking = (id: number) =>
    setBookings((prev) => prev.map((b) => b.id === id ? { ...b, status: "Bekor" } : b));

  const handleSlotClick = (day: number, hour: string) => {
    if (slotBooking(day, hour)) return;
    setSelectedSlot({ day, hour });
    setShowForm(true);
  };

  const handleAddBooking = () => {
    if (!newForm.client.trim() || !selectedSlot) return;
    const svc = SERVICES.find((s) => s.name === newForm.service)!;
    const colors: Booking["color"][] = [
      "bg-violet-500/25 border-violet-500/40 text-violet-300",
      "bg-pink-500/25 border-pink-500/40 text-pink-300",
      "bg-blue-500/25 border-blue-500/40 text-blue-300",
    ];
    const newB: Booking = {
      id: Date.now(),
      client: newForm.client,
      phone: "+998 90 000 00 00",
      service: newForm.service,
      day: selectedSlot.day,
      hour: selectedSlot.hour,
      duration: svc.duration,
      status: "Kutilmoqda",
      price: svc.price,
      color: colors[bookings.length % colors.length],
    };
    setBookings((prev) => [...prev, newB]);
    setShowForm(false);
    setSelectedSlot(null);
    setNewForm({ client: "", service: "Soch olish", duration: 30 });
  };

  const todayBookings = bookings.filter((b) => b.day === 0 && b.status !== "Bekor");
  const totalRevenue = bookings.filter((b) => b.status === "Tasdiqlangan").reduce((s, b) => s + b.price, 0);
  const completionRate = Math.round(
    (bookings.filter((b) => b.status === "Tasdiqlangan").length / bookings.filter((b) => b.status !== "Bekor").length) * 100
  );

  const filteredClients = CLIENTS.filter((c) =>
    c.name.toLowerCase().includes(clientSearch.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-2.5 min-h-[520px]">
      {/* Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex gap-1.5 flex-wrap">
          {([
            { key: "calendar" as BookingTab, label: "Kalendar", icon: Calendar },
            { key: "bronlar" as BookingTab, label: "Bronlar", icon: Clock },
            { key: "xizmatlar" as BookingTab, label: "Xizmatlar", icon: Scissors },
            { key: "mijozlar" as BookingTab, label: "Mijozlar", icon: Users },
          ]).map((t) => (
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
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-violet-400">{todayBookings.length} ta bugungi bron</span>
        </div>
      </div>

      {/* KALENDAR TAB */}
      {tab === "calendar" && (
        <div className="flex-1 space-y-2.5">
          {/* Day selector */}
          <div className="flex gap-1.5">
            {DAYS.map((d, i) => (
              <button
                key={d}
                onClick={() => setSelectedDay(i)}
                className={`flex-1 py-1.5 rounded-lg text-[10px] font-medium transition-colors border ${
                  selectedDay === i
                    ? "bg-violet-500/20 text-violet-400 border-violet-500/30"
                    : "bg-white/[0.03] text-gray-400 border-white/[0.06] hover:bg-white/[0.06]"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="space-y-1.5">
            {HOURS.map((hour) => {
              const booked = slotBooking(selectedDay, hour);
              const isSelected = selectedSlot?.day === selectedDay && selectedSlot?.hour === hour;
              return (
                <div key={hour} className="flex items-stretch gap-2">
                  <span className="text-[9px] text-gray-600 w-10 flex-shrink-0 pt-2">{hour}</span>
                  <div className="flex-1">
                    {booked ? (
                      <div className={`w-full p-2 rounded-lg border text-left ${booked.color} transition-all`}>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold">{booked.client}</span>
                          <span className={`text-[8px] px-1.5 py-0.5 rounded border ${statusColor[booked.status]}`}>{booked.status}</span>
                        </div>
                        <span className="text-[9px] opacity-70">{booked.service} · {booked.duration} daqiqa · {fmt(booked.price)}</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleSlotClick(selectedDay, hour)}
                        className={`w-full p-2 rounded-lg border text-left transition-all text-[10px] ${
                          isSelected
                            ? "bg-violet-500/15 border-violet-500/30 text-violet-400"
                            : "bg-white/[0.02] border-dashed border-white/[0.08] text-gray-600 hover:bg-white/[0.04] hover:text-gray-400 hover:border-white/20"
                        }`}
                      >
                        {isSelected ? "Tanlandi — quyida to'ldiring" : "+ Bo'sh slot"}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Inline booking form */}
          {showForm && selectedSlot && (
            <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/25 space-y-2">
              <p className="text-[11px] font-bold text-white flex items-center gap-1.5">
                <Plus size={12} className="text-violet-400" />
                Yangi bron — {DAYS[selectedSlot.day]}, {selectedSlot.hour}
              </p>
              <input
                value={newForm.client}
                onChange={(e) => setNewForm((f) => ({ ...f, client: e.target.value }))}
                placeholder="Mijoz ismi"
                className="w-full px-2.5 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500/50"
              />
              <select
                value={newForm.service}
                onChange={(e) => {
                  const svc = SERVICES.find((s) => s.name === e.target.value);
                  setNewForm((f) => ({ ...f, service: e.target.value, duration: svc?.duration ?? 30 }));
                }}
                className="w-full px-2.5 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-xs text-white focus:outline-none focus:border-violet-500/50"
              >
                {SERVICES.map((s) => (
                  <option key={s.name} value={s.name} className="bg-gray-900">{s.name} — {fmt(s.price)}</option>
                ))}
              </select>
              <div className="flex gap-2">
                <button
                  onClick={handleAddBooking}
                  className="flex-1 py-1.5 rounded-lg bg-violet-500/20 text-violet-400 border border-violet-500/30 text-[10px] font-medium hover:bg-violet-500/30 transition-colors"
                >
                  Bron qilish
                </button>
                <button
                  onClick={() => { setShowForm(false); setSelectedSlot(null); }}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-gray-400 text-[10px] hover:bg-white/[0.08] transition-colors"
                >
                  Bekor
                </button>
              </div>
            </div>
          )}

          {/* Legend */}
          <div className="flex gap-2 flex-wrap text-[9px] text-gray-500">
            {SERVICES.slice(0, 4).map((s) => (
              <span key={s.name} className={`flex items-center gap-1 px-1.5 py-0.5 rounded border ${s.color}`}>
                {s.icon} {s.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* BRONLAR TAB */}
      {tab === "bronlar" && (
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Barcha bronlar</p>
            <span className="text-[10px] text-amber-400 flex items-center gap-1">
              {bookings.filter((b) => b.status === "Kutilmoqda").length} ta kutilmoqda
            </span>
          </div>
          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[560px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Mijoz</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Telefon</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Xizmat</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Vaqt</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Narx</th>
                  <th className="py-2 px-2.5" />
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-[7px] font-bold text-white">{b.client[0]}</span>
                        </div>
                        <span className="text-gray-300 font-medium">{b.client}</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5">
                      <span className="flex items-center gap-1 text-gray-500">
                        <Phone size={8} /> {b.phone}
                      </span>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400">{b.service}</td>
                    <td className="py-2 px-2.5 text-gray-400 font-mono">{DAYS[b.day]}, {b.hour}</td>
                    <td className="py-2 px-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${statusColor[b.status]}`}>
                        {b.status}
                      </span>
                    </td>
                    <td className="py-2 px-2.5 text-right text-white font-medium">{fmt(b.price)}</td>
                    <td className="py-2 px-2.5">
                      {b.status === "Kutilmoqda" && (
                        <div className="flex gap-1">
                          <button onClick={() => confirmBooking(b.id)} className="p-1 rounded bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 transition-colors">
                            <CheckCircle size={10} />
                          </button>
                          <button onClick={() => cancelBooking(b.id)} className="p-1 rounded bg-red-500/15 text-red-400 hover:bg-red-500/25 transition-colors">
                            <XCircle size={10} />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Bugungi bronlar", value: todayBookings.length, color: "text-violet-400" },
              { label: "Jami daromad", value: fmt(totalRevenue), color: "text-emerald-400" },
              { label: "Bajarish darajasi", value: completionRate + "%", color: "text-blue-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-[13px] font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* XIZMATLAR TAB */}
      {tab === "xizmatlar" && (
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Xizmatlar</p>
            <button
              onClick={() => setEditingService(editingService === -1 ? null : -1)}
              className="flex items-center gap-1 text-[10px] px-2 py-1 rounded-lg bg-violet-500/15 text-violet-400 border border-violet-500/25 hover:bg-violet-500/25 transition-colors"
            >
              <Plus size={10} /> Qo'shish
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/10 transition-all"
              >
                <div className="flex items-start gap-2.5">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-lg border ${svc.color}`}>
                    {svc.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="text-[11px] font-semibold text-white">{svc.name}</p>
                      <p className={`text-[12px] font-bold ${svc.color.split(" ")[1]}`}>{fmt(svc.price)}</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] text-gray-500 flex items-center gap-0.5"><Clock size={8} /> {svc.duration} daqiqa</span>
                      <span className="text-[9px] text-gray-500 flex items-center gap-0.5"><TrendingUp size={8} /> {svc.bookings} bron/oy</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${svc.color.split(" ")[0]}`}
                        style={{ width: `${svc.popularity}%`, opacity: 0.8 }}
                      />
                    </div>
                    <div className="flex justify-between mt-0.5">
                      <span className="text-[8px] text-gray-600">Mashhurlik</span>
                      <span className="text-[8px] text-gray-500">{svc.popularity}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Xizmatlar soni", value: SERVICES.length, color: "text-white" },
              { label: "O'rtacha vaqt", value: Math.round(SERVICES.reduce((s, sv) => s + sv.duration, 0) / SERVICES.length) + " daq", color: "text-violet-400" },
              { label: "O'rtacha narx", value: fmt(Math.round(SERVICES.reduce((s, sv) => s + sv.price, 0) / SERVICES.length)), color: "text-emerald-400" },
              { label: "Oylik bronlar", value: SERVICES.reduce((s, sv) => s + sv.bookings, 0), color: "text-amber-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-[11px] font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MIJOZLAR TAB */}
      {tab === "mijozlar" && (
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                value={clientSearch}
                onChange={(e) => setClientSearch(e.target.value)}
                placeholder="Mijoz qidirish..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500/50"
              />
            </div>
            <span className="text-[10px] text-gray-500 flex-shrink-0">{filteredClients.length} ta</span>
          </div>

          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[520px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Mijoz</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Telefon</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Tashriflar</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Sarflagan</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Oxirgi tashrif</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Daraja</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((c) => (
                  <tr
                    key={c.id}
                    className={`border-b border-white/[0.04] hover:bg-white/[0.02] ${c.loyalty === "Gold" ? "bg-amber-500/[0.03]" : ""}`}
                  >
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          c.loyalty === "Gold"
                            ? "bg-gradient-to-br from-amber-400 to-orange-500"
                            : c.loyalty === "Silver"
                            ? "bg-gradient-to-br from-gray-400 to-gray-600"
                            : "bg-gradient-to-br from-orange-700 to-orange-900"
                        }`}>
                          <span className="text-[7px] font-bold text-white">{c.name[0]}</span>
                        </div>
                        <span className="text-gray-300 font-medium">{c.name}</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5">
                      <span className="flex items-center gap-1 text-gray-500">
                        <Phone size={8} /> {c.phone}
                      </span>
                    </td>
                    <td className="py-2 px-2.5 text-gray-300 font-medium">{c.visits}</td>
                    <td className="py-2 px-2.5 text-emerald-400 font-medium">{fmt(c.spent)}</td>
                    <td className="py-2 px-2.5 text-gray-500">{c.lastVisit}</td>
                    <td className="py-2 px-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium flex items-center gap-1 w-fit ${loyaltyStyle[c.loyalty]}`}>
                        {Array.from({ length: loyaltyStars[c.loyalty] }).map((_, i) => (
                          <Star key={i} size={7} className="fill-current" />
                        ))}
                        {c.loyalty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Gold mijozlar", value: CLIENTS.filter((c) => c.loyalty === "Gold").length, color: "text-amber-400" },
              { label: "Silver mijozlar", value: CLIENTS.filter((c) => c.loyalty === "Silver").length, color: "text-gray-300" },
              { label: "Bronze mijozlar", value: CLIENTS.filter((c) => c.loyalty === "Bronze").length, color: "text-orange-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
