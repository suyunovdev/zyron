"use client";

import { useState } from "react";
import { BedDouble, CalendarCheck, Users, Star, CheckCircle, Clock, Wrench, LogIn, LogOut } from "lucide-react";

type HotelTab = "rooms" | "reservations" | "guests";

const rooms = [
  { id: "101", type: "Standart", floor: 1, beds: 1, price: 350000, status: "available" },
  { id: "102", type: "Standart", floor: 1, beds: 2, price: 420000, status: "occupied" },
  { id: "103", type: "Deluxe", floor: 1, beds: 2, price: 650000, status: "cleaning" },
  { id: "104", type: "Standart", floor: 1, beds: 1, price: 350000, status: "available" },
  { id: "201", type: "Deluxe", floor: 2, beds: 2, price: 650000, status: "occupied" },
  { id: "202", type: "Suite", floor: 2, beds: 3, price: 1200000, status: "occupied" },
  { id: "203", type: "Deluxe", floor: 2, beds: 2, price: 650000, status: "available" },
  { id: "204", type: "Standart", floor: 2, beds: 1, price: 350000, status: "maintenance" },
  { id: "301", type: "Suite", floor: 3, beds: 3, price: 1200000, status: "available" },
  { id: "302", type: "Penthouse", floor: 3, beds: 4, price: 2500000, status: "occupied" },
  { id: "303", type: "Suite", floor: 3, beds: 3, price: 1200000, status: "cleaning" },
  { id: "304", type: "Deluxe", floor: 3, beds: 2, price: 650000, status: "available" },
];

const reservations = [
  { id: 1, guest: "Karimov Bobur", room: "202", checkIn: "17 Iyul", checkOut: "20 Iyul", nights: 3, total: 3600000, status: "active" },
  { id: 2, guest: "Ivanova Anna", room: "302", checkIn: "15 Iyul", checkOut: "22 Iyul", nights: 7, total: 17500000, status: "active" },
  { id: 3, guest: "Yusupov Alisher", room: "201", checkIn: "16 Iyul", checkOut: "18 Iyul", nights: 2, total: 1300000, status: "active" },
  { id: 4, guest: "Smith John", room: "102", checkIn: "17 Iyul", checkOut: "19 Iyul", nights: 2, total: 840000, status: "active" },
  { id: 5, guest: "Toshmatov Sanjar", room: "101", checkIn: "20 Iyul", checkOut: "23 Iyul", nights: 3, total: 1050000, status: "upcoming" },
  { id: 6, guest: "Kim Ji-woo", room: "301", checkIn: "22 Iyul", checkOut: "25 Iyul", nights: 3, total: 3600000, status: "upcoming" },
];

const guests = [
  { id: 1, name: "Karimov Bobur", nationality: "O'zbekiston", room: "202", checkIn: "17 Iyul", checkOut: "20 Iyul", rating: 5 },
  { id: 2, name: "Ivanova Anna", nationality: "Rossiya", room: "302", checkIn: "15 Iyul", checkOut: "22 Iyul", rating: 4 },
  { id: 3, name: "Yusupov Alisher", nationality: "O'zbekiston", room: "201", checkIn: "16 Iyul", checkOut: "18 Iyul", rating: 5 },
  { id: 4, name: "Smith John", nationality: "AQSh", room: "102", checkIn: "17 Iyul", checkOut: "19 Iyul", rating: 4 },
];

function fmt(n: number) { return n.toLocaleString("uz-UZ") + " so'm"; }

export default function HotelDemo() {
  const [tab, setTab] = useState<HotelTab>("rooms");
  const [roomStatuses, setRoomStatuses] = useState<Record<string, string>>(
    Object.fromEntries(rooms.map((r) => [r.id, r.status]))
  );

  const tabs = [
    { key: "rooms" as HotelTab, label: "Xonalar", icon: BedDouble },
    { key: "reservations" as HotelTab, label: "Bronlar", icon: CalendarCheck },
    { key: "guests" as HotelTab, label: "Mehmonlar", icon: Users },
  ];

  const statusColor = (s: string) =>
    s === "available" ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-400"
    : s === "occupied" ? "bg-blue-500/20 border-blue-500/30 text-blue-400"
    : s === "cleaning" ? "bg-amber-500/20 border-amber-500/30 text-amber-400"
    : "bg-red-500/20 border-red-500/30 text-red-400";

  const statusIcon = (s: string) =>
    s === "available" ? <CheckCircle size={9} /> : s === "occupied" ? <Users size={9} /> : s === "cleaning" ? <Clock size={9} /> : <Wrench size={9} />;

  const statusLabel = (s: string) =>
    s === "available" ? "Bo'sh" : s === "occupied" ? "Band" : s === "cleaning" ? "Tozalanmoqda" : "Ta'mir";

  const checkout = (id: string) => setRoomStatuses((p) => ({ ...p, [id]: "cleaning" }));

  return (
    <div className="flex flex-col gap-2.5 min-h-[420px]">
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${
                tab === t.key
                  ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                  : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
              }`}
            >
              <t.icon size={11} /> {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>{Object.values(roomStatuses).filter((s) => s === "available").length} bo'sh xona</span>
        </div>
      </div>

      {tab === "rooms" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Xona holati</p>
            <div className="flex items-center gap-2 text-[8px]">
              {["available", "occupied", "cleaning", "maintenance"].map((s) => (
                <span key={s} className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded border ${statusColor(s)}`}>
                  {statusIcon(s)} {statusLabel(s)}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
            {rooms.map((room) => {
              const st = roomStatuses[room.id];
              return (
                <div
                  key={room.id}
                  onClick={() => st === "occupied" && checkout(room.id)}
                  className={`p-2 rounded-xl border cursor-pointer transition-all ${statusColor(st)} ${st === "occupied" ? "hover:opacity-80" : ""}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold">{room.id}</span>
                    {statusIcon(st)}
                  </div>
                  <p className="text-[8px] opacity-70">{room.type}</p>
                  <p className="text-[8px] opacity-60">{room.beds} yotoq</p>
                </div>
              );
            })}
          </div>
          <p className="text-[8px] text-gray-600 mt-1.5 text-center">Band xonaga bosing — chiqish uchun</p>
          <div className="mt-2 grid grid-cols-4 gap-1.5">
            {["available", "occupied", "cleaning", "maintenance"].map((s) => (
              <div key={s} className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[8px] text-gray-500">{statusLabel(s)}</p>
                <p className={`text-sm font-bold ${statusColor(s).split(" ").pop()}`}>
                  {Object.values(roomStatuses).filter((r) => r === s).length}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "reservations" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Bronlar</p>
            <span className="text-[10px] text-gray-500">{reservations.length} ta bron</span>
          </div>
          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Mehmon</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Xona</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Kirish</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Chiqish</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Summa</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((res) => (
                  <tr key={res.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-[7px] font-bold text-white">{res.guest[0]}</span>
                        </div>
                        <span className="text-gray-300 font-medium">{res.guest}</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400 font-mono">{res.room}</td>
                    <td className="py-2 px-2.5 text-gray-400 hidden sm:table-cell">
                      <div className="flex items-center gap-1"><LogIn size={8} className="text-emerald-400" />{res.checkIn}</div>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400 hidden sm:table-cell">
                      <div className="flex items-center gap-1"><LogOut size={8} className="text-red-400" />{res.checkOut}</div>
                    </td>
                    <td className="py-2 px-2.5 text-right text-white font-bold">{fmt(res.total)}</td>
                    <td className="py-2 px-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${res.status === "active" ? "bg-blue-500/15 text-blue-400" : "bg-amber-500/15 text-amber-400"}`}>
                        {res.status === "active" ? "Faol" : "Keladi"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2.5 grid grid-cols-3 gap-2">
            {[
              { label: "Faol bronlar", value: reservations.filter((r) => r.status === "active").length, color: "text-blue-400" },
              { label: "Kutilmoqda", value: reservations.filter((r) => r.status === "upcoming").length, color: "text-amber-400" },
              { label: "Jami daromad", value: fmt(reservations.filter((r) => r.status === "active").reduce((s, r) => s + r.total, 0)), color: "text-emerald-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-[11px] font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "guests" && (
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Joriy mehmonlar</p>
            <span className="text-[10px] text-gray-500">{guests.length} ta mehmon</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {guests.map((g) => (
              <div key={g.id} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-white">{g.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white">{g.name}</p>
                    <p className="text-[8px] text-gray-500">{g.nationality}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-0.5">
                    {Array.from({ length: g.rating }).map((_, i) => (
                      <Star key={i} size={8} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1.5 text-[8px]">
                  <div className="p-1.5 rounded bg-white/[0.03]">
                    <p className="text-gray-600">Xona</p>
                    <p className="text-white font-bold">{g.room}</p>
                  </div>
                  <div className="p-1.5 rounded bg-white/[0.03]">
                    <p className="text-gray-600">Kirdi</p>
                    <p className="text-emerald-400 font-bold">{g.checkIn}</p>
                  </div>
                  <div className="p-1.5 rounded bg-white/[0.03]">
                    <p className="text-gray-600">Chiqadi</p>
                    <p className="text-red-400 font-bold">{g.checkOut}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
