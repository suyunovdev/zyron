"use client";

import { useState, useEffect } from "react";
import {
  BedDouble, CalendarCheck, Users, BarChart2, LogIn, LogOut,
  Search, Star, TrendingUp, CheckCircle, Clock, Wrench, Flag,
} from "lucide-react";

function useToast() {
  const [toast, setToast] = useState<{ msg: string; key: number } | null>(null);
  const show = (msg: string) => setToast({ msg, key: Date.now() });
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2500);
    return () => clearTimeout(t);
  }, [toast]);
  return { toast, show };
}

function useClock() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
  useEffect(() => {
    const t = setInterval(() => setTime(new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit", second: "2-digit" })), 1000);
    return () => clearInterval(t);
  }, []);
  return time;
}

type HotelTab = "xonalar" | "bron" | "mehmonlar" | "hisobot";

function fmt(n: number) {
  return n.toLocaleString("uz-UZ") + " so'm";
}

type RoomStatus = "bosh" | "band" | "tozalanmoqda" | "tamirda";

type Room = {
  id: string;
  type: "Standart" | "Deluxe" | "Suite";
  floor: 1 | 2 | 3;
  price: number;
  status: RoomStatus;
};

const INITIAL_ROOMS: Room[] = [
  { id: "101", type: "Standart", floor: 1, price: 350000, status: "bosh" },
  { id: "102", type: "Standart", floor: 1, price: 350000, status: "band" },
  { id: "103", type: "Deluxe", floor: 1, price: 650000, status: "tozalanmoqda" },
  { id: "104", type: "Standart", floor: 1, price: 350000, status: "bosh" },
  { id: "201", type: "Deluxe", floor: 2, price: 650000, status: "band" },
  { id: "202", type: "Suite", floor: 2, price: 1200000, status: "band" },
  { id: "203", type: "Deluxe", floor: 2, price: 650000, status: "bosh" },
  { id: "204", type: "Standart", floor: 2, price: 350000, status: "tamirda" },
  { id: "301", type: "Suite", floor: 3, price: 1200000, status: "bosh" },
  { id: "302", type: "Suite", floor: 3, price: 1200000, status: "band" },
  { id: "303", type: "Deluxe", floor: 3, price: 650000, status: "tozalanmoqda" },
  { id: "304", type: "Deluxe", floor: 3, price: 650000, status: "bosh" },
];

const STATUS_CYCLE: Record<RoomStatus, RoomStatus> = {
  bosh: "band",
  band: "tozalanmoqda",
  tozalanmoqda: "bosh",
  tamirda: "bosh",
};

const STATUS_COLOR: Record<RoomStatus, string> = {
  bosh: "bg-emerald-500/20 border-emerald-500/30 text-emerald-400",
  band: "bg-red-500/20 border-red-500/30 text-red-400",
  tozalanmoqda: "bg-amber-500/20 border-amber-500/30 text-amber-400",
  tamirda: "bg-gray-500/20 border-gray-500/30 text-gray-400",
};

const STATUS_LABEL: Record<RoomStatus, string> = {
  bosh: "Bo'sh",
  band: "Band",
  tozalanmoqda: "Tozalanmoqda",
  tamirda: "Ta'mirda",
};

const STATUS_ICON: Record<RoomStatus, React.ReactNode> = {
  bosh: <CheckCircle size={9} />,
  band: <Users size={9} />,
  tozalanmoqda: <Clock size={9} />,
  tamirda: <Wrench size={9} />,
};

type Reservation = {
  id: number;
  guest: string;
  room: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  total: number;
  status: "Faol" | "Chiqdi" | "Keladi";
  paid: boolean;
};

const INITIAL_RESERVATIONS: Reservation[] = [
  { id: 1, guest: "Karimov Bobur", room: "202", checkIn: "17 Iyul", checkOut: "20 Iyul", nights: 3, total: 3600000, status: "Faol", paid: true },
  { id: 2, guest: "Ivanova Anna", room: "302", checkIn: "15 Iyul", checkOut: "22 Iyul", nights: 7, total: 8400000, status: "Faol", paid: true },
  { id: 3, guest: "Yusupov Alisher", room: "201", checkIn: "16 Iyul", checkOut: "18 Iyul", nights: 2, total: 1300000, status: "Faol", paid: false },
  { id: 4, guest: "Smith John", room: "102", checkIn: "17 Iyul", checkOut: "19 Iyul", nights: 2, total: 700000, status: "Faol", paid: true },
  { id: 5, guest: "Toshmatov Sanjar", room: "101", checkIn: "20 Iyul", checkOut: "23 Iyul", nights: 3, total: 1050000, status: "Keladi", paid: false },
  { id: 6, guest: "Kim Ji-woo", room: "301", checkIn: "22 Iyul", checkOut: "25 Iyul", nights: 3, total: 3600000, status: "Keladi", paid: true },
  { id: 7, guest: "Nazarova Dilnoza", room: "103", checkIn: "14 Iyul", checkOut: "17 Iyul", nights: 3, total: 1950000, status: "Chiqdi", paid: true },
];

type Guest = {
  id: number;
  name: string;
  passport: string;
  phone: string;
  country: string;
  flag: string;
  room: string;
  stayCount: number;
  vip: boolean;
};

const GUESTS: Guest[] = [
  { id: 1, name: "Karimov Bobur", passport: "AA 1234567", phone: "+998 91 234 56 78", country: "O'zbekiston", flag: "🇺🇿", room: "202", stayCount: 6, vip: true },
  { id: 2, name: "Ivanova Anna", passport: "RU 7654321", phone: "+7 916 123 45 67", country: "Rossiya", flag: "🇷🇺", room: "302", stayCount: 3, vip: false },
  { id: 3, name: "Yusupov Alisher", passport: "AA 9988776", phone: "+998 93 345 67 89", country: "O'zbekiston", flag: "🇺🇿", room: "201", stayCount: 2, vip: false },
  { id: 4, name: "Smith John", passport: "US 1122334", phone: "+1 555 234 56 78", country: "AQSh", flag: "🇺🇸", room: "102", stayCount: 8, vip: true },
  { id: 5, name: "Kim Ji-woo", passport: "KR 5566778", phone: "+82 10 1234 5678", country: "Koreya", flag: "🇰🇷", room: "Keladi", stayCount: 1, vip: false },
];

const REVENUE_TYPES = [
  { type: "Standart", revenue: 4200000, pct: 24 },
  { type: "Deluxe", revenue: 7800000, pct: 44 },
  { type: "Suite", revenue: 5800000, pct: 33 },
];

const MONTHLY = [
  { month: "Apr", occ: 58 }, { month: "May", occ: 65 }, { month: "Iyn", occ: 74 },
  { month: "Iyl", occ: 73 }, { month: "Avg", occ: 82 }, { month: "Sen", occ: 69 },
];

export default function HotelDemo() {
  const [tab, setTab] = useState<HotelTab>("xonalar");
  const [rooms, setRooms] = useState<Room[]>(INITIAL_ROOMS);
  const [floorFilter, setFloorFilter] = useState<0 | 1 | 2 | 3>(0);
  const [reservations, setReservations] = useState<Reservation[]>(INITIAL_RESERVATIONS);
  const [guestSearch, setGuestSearch] = useState("");
  const { toast, show } = useToast();
  const clock = useClock();

  const filteredRooms = floorFilter === 0 ? rooms : rooms.filter((r) => r.floor === floorFilter);

  const cycleStatus = (id: string) => {
    setRooms((prev) => {
      const room = prev.find((r) => r.id === id);
      if (room) {
        const next = STATUS_CYCLE[room.status];
        show(`Xona ${id}: ${STATUS_LABEL[room.status]} → ${STATUS_LABEL[next]}`);
      }
      return prev.map((r) => r.id === id ? { ...r, status: STATUS_CYCLE[r.status] } : r);
    });
  };

  const checkIn = (id: number) => {
    const res = reservations.find((r) => r.id === id);
    if (res) show(`Check-in: ${res.guest} — Xona ${res.room}`);
    setReservations((prev) => prev.map((r) => r.id === id ? { ...r, status: "Faol" } : r));
  };
  const checkOut = (id: number) => {
    const res = reservations.find((r) => r.id === id);
    if (res) show(`Check-out: ${res.guest} — Xona ${res.room} bo'shatildi`);
    setReservations((prev) => prev.map((r) => r.id === id ? { ...r, status: "Chiqdi" } : r));
  };

  const filteredGuests = GUESTS.filter((g) =>
    g.name.toLowerCase().includes(guestSearch.toLowerCase()) ||
    g.country.toLowerCase().includes(guestSearch.toLowerCase())
  );

  const availableCount = rooms.filter((r) => r.status === "bosh").length;
  const occupancyRate = Math.round((rooms.filter((r) => r.status === "band").length / rooms.length) * 100);
  const totalRevenue = reservations.filter((r) => r.status === "Faol" && r.paid).reduce((s, r) => s + r.total, 0);
  const avgRate = Math.round(rooms.filter((r) => r.status === "band").reduce((s, r) => s + r.price, 0) / Math.max(rooms.filter((r) => r.status === "band").length, 1));

  return (
    <div className="flex flex-col gap-2.5 min-h-[520px]">
      {/* Status bar */}
      <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-amber-500/[0.07] border border-amber-500/20 text-[9px]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-amber-400 font-semibold">ZYRON Hotel v2.0</span>
          <span className="text-gray-600">·</span>
          <span className="text-gray-400">Grand Samarkand Hotel</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-emerald-400 font-medium">Bandlik: {occupancyRate}%</span>
          <span className="text-gray-600">·</span>
          <span className="font-mono">{clock}</span>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-4 right-4 z-50 px-3 py-2 rounded-lg bg-amber-500/90 text-black text-[10px] font-semibold shadow-lg animate-pulse">
          {toast.msg}
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex gap-1.5 flex-wrap">
          {([
            { key: "xonalar" as HotelTab, label: "Xonalar", icon: BedDouble },
            { key: "bron" as HotelTab, label: "Bron", icon: CalendarCheck },
            { key: "mehmonlar" as HotelTab, label: "Mehmonlar", icon: Users },
            { key: "hisobot" as HotelTab, label: "Hisobot", icon: BarChart2 },
          ]).map((t) => (
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
        <div className="flex items-center gap-1.5 text-[9px]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400">{availableCount} bo'sh xona</span>
          <span className="text-gray-600">·</span>
          <span className="text-amber-400">{occupancyRate}% band</span>
        </div>
      </div>

      {/* XONALAR TAB */}
      {tab === "xonalar" && (
        <div className="flex-1 space-y-3">
          {/* Floor filter */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500">Qavat:</span>
            {([0, 1, 2, 3] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFloorFilter(f)}
                className={`px-2.5 py-1 rounded-md text-[10px] font-medium transition-colors ${
                  floorFilter === f
                    ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
                }`}
              >
                {f === 0 ? "Barchasi" : `${f}-qavat`}
              </button>
            ))}
          </div>

          {/* Room grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {filteredRooms.map((room) => (
              <button
                key={room.id}
                onClick={() => cycleStatus(room.id)}
                className={`p-2.5 rounded-xl border text-left transition-all hover:scale-[1.02] active:scale-[0.98] ${STATUS_COLOR[room.status]}`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[13px] font-bold">{room.id}</span>
                  <span>{STATUS_ICON[room.status]}</span>
                </div>
                <p className="text-[9px] font-medium opacity-80">{room.type}</p>
                <p className="text-[8px] opacity-60 mt-0.5">{fmt(room.price)}/tun</p>
                <div className={`mt-1.5 text-[7px] px-1 py-0.5 rounded text-center font-medium opacity-70 ${
                  room.status === "bosh" ? "bg-emerald-500/30" :
                  room.status === "band" ? "bg-red-500/30" :
                  room.status === "tozalanmoqda" ? "bg-amber-500/30" : "bg-gray-500/30"
                }`}>
                  {STATUS_LABEL[room.status]}
                </div>
              </button>
            ))}
          </div>
          <p className="text-[8px] text-gray-600 text-center">Xonaga bosish — holatini o'zgartiradi</p>

          {/* Room type stats */}
          <div className="grid grid-cols-4 gap-1.5">
            {(["bosh", "band", "tozalanmoqda", "tamirda"] as RoomStatus[]).map((s) => (
              <div key={s} className={`p-2 rounded-lg border ${STATUS_COLOR[s]}`}>
                <p className="text-[8px] opacity-70">{STATUS_LABEL[s]}</p>
                <p className="text-sm font-bold">{rooms.filter((r) => r.status === s).length}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* BRON TAB */}
      {tab === "bron" && (
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Bronlar ro'yxati</p>
            <div className="flex gap-2 text-[9px]">
              <span className="text-blue-400">{reservations.filter((r) => r.status === "Faol").length} faol</span>
              <span className="text-amber-400">{reservations.filter((r) => r.status === "Keladi").length} keladi</span>
            </div>
          </div>
          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[580px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Mehmon</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Xona</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Kirish</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Chiqish</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Tunlar</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Summa</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                  <th className="py-2 px-2.5" />
                </tr>
              </thead>
              <tbody>
                {reservations.map((res) => (
                  <tr key={res.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                          <span className="text-[7px] font-bold text-white">{res.guest[0]}</span>
                        </div>
                        <span className="text-gray-300 font-medium">{res.guest}</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 text-amber-400 font-mono font-bold">{res.room}</td>
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1 text-emerald-400">
                        <LogIn size={8} /> {res.checkIn}
                      </div>
                    </td>
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1 text-red-400">
                        <LogOut size={8} /> {res.checkOut}
                      </div>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400">{res.nights} tun</td>
                    <td className="py-2 px-2.5 text-right">
                      <span className="text-white font-bold">{fmt(res.total)}</span>
                      {!res.paid && <span className="ml-1 text-[8px] text-red-400">(Qarz)</span>}
                    </td>
                    <td className="py-2 px-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${
                        res.status === "Faol" ? "bg-blue-500/15 text-blue-400 border border-blue-500/20"
                          : res.status === "Keladi" ? "bg-amber-500/15 text-amber-400 border border-amber-500/20"
                          : "bg-gray-500/15 text-gray-400 border border-gray-500/20"
                      }`}>
                        {res.status}
                      </span>
                    </td>
                    <td className="py-2 px-2.5">
                      {res.status === "Keladi" && (
                        <button onClick={() => checkIn(res.id)} className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 text-[8px] transition-colors">
                          <LogIn size={8} /> Kirish
                        </button>
                      )}
                      {res.status === "Faol" && (
                        <button onClick={() => checkOut(res.id)} className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-red-500/15 text-red-400 hover:bg-red-500/25 text-[8px] transition-colors">
                          <LogOut size={8} /> Chiqish
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Bugungi daromad", value: fmt(totalRevenue), color: "text-emerald-400" },
              { label: "Faol bronlar", value: reservations.filter((r) => r.status === "Faol").length, color: "text-blue-400" },
              { label: "To'lanmagan", value: reservations.filter((r) => !r.paid && r.status === "Faol").length, color: "text-red-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-[12px] font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MEHMONLAR TAB */}
      {tab === "mehmonlar" && (
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                value={guestSearch}
                onChange={(e) => setGuestSearch(e.target.value)}
                placeholder="Mehmon yoki mamlakat..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-amber-500/50"
              />
            </div>
            <span className="text-[10px] text-gray-500 flex-shrink-0">{filteredGuests.length} ta</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {filteredGuests.map((g) => (
              <div
                key={g.id}
                className={`p-3 rounded-xl border transition-all ${
                  g.vip
                    ? "bg-amber-500/[0.06] border-amber-500/25 hover:border-amber-500/40"
                    : "bg-white/[0.03] border-white/[0.06] hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 text-sm font-bold text-white">
                    {g.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="text-[11px] font-bold text-white truncate">{g.name}</p>
                      {g.vip && (
                        <span className="flex-shrink-0 px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[7px] font-bold">VIP</span>
                      )}
                    </div>
                    <p className="text-[9px] text-gray-500 flex items-center gap-1">
                      <span>{g.flag}</span> {g.country}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[9px] text-gray-500">Xona</p>
                    <p className="text-[12px] font-bold text-amber-400">{g.room}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1.5 text-[8px]">
                  <div className="p-1.5 rounded-lg bg-white/[0.04]">
                    <p className="text-gray-600 mb-0.5">Pasport</p>
                    <p className="text-gray-300 font-mono font-medium">{g.passport}</p>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/[0.04]">
                    <p className="text-gray-600 mb-0.5">Telefon</p>
                    <p className="text-gray-300 font-medium">{g.phone.slice(0, 12)}</p>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/[0.04]">
                    <p className="text-gray-600 mb-0.5">Tashriflar</p>
                    <p className="text-amber-400 font-bold">{g.stayCount} marta</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Joriy mehmonlar", value: GUESTS.filter((g) => g.room !== "Keladi").length, color: "text-white" },
              { label: "VIP mehmonlar", value: GUESTS.filter((g) => g.vip).length, color: "text-amber-400" },
              { label: "Mamlakatlar", value: new Set(GUESTS.map((g) => g.country)).size, color: "text-blue-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* HISOBOT TAB */}
      {tab === "hisobot" && (
        <div className="flex-1 space-y-3">
          {/* KPI cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Bandlik darajasi", value: occupancyRate + "%", sub: "12 xonadan", color: "text-amber-400", bg: "from-amber-500/10 to-orange-500/10 border-amber-500/20" },
              { label: "O'rtacha narx (ADR)", value: fmt(avgRate), sub: "Band xona/tun", color: "text-blue-400", bg: "from-blue-500/10 to-cyan-500/10 border-blue-500/20" },
              { label: "Bugungi daromad", value: fmt(totalRevenue), sub: "To'langan bronlar", color: "text-emerald-400", bg: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20" },
              { label: "Bugungi kelish", value: reservations.filter((r) => r.checkIn === "17 Iyul").length, sub: "ta mehmon", color: "text-violet-400", bg: "from-violet-500/10 to-purple-500/10 border-violet-500/20" },
            ].map((s) => (
              <div key={s.label} className={`p-2.5 rounded-xl bg-gradient-to-br border ${s.bg}`}>
                <p className="text-[9px] text-gray-500 mb-1">{s.label}</p>
                <p className={`text-[14px] font-bold ${s.color}`}>{s.value}</p>
                <p className="text-[8px] text-gray-600 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Occupancy donut visual */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-bold text-white mb-3">Xona bandligi</p>
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
                    <circle
                      cx="18" cy="18" r="15.9" fill="none"
                      stroke="rgb(251,191,36)"
                      strokeWidth="3"
                      strokeDasharray={`${occupancyRate} ${100 - occupancyRate}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[14px] font-bold text-white">{occupancyRate}%</span>
                    <span className="text-[7px] text-gray-500">band</span>
                  </div>
                </div>
                <div className="space-y-2 flex-1">
                  {(["bosh", "band", "tozalanmoqda", "tamirda"] as RoomStatus[]).map((s) => {
                    const count = rooms.filter((r) => r.status === s).length;
                    return (
                      <div key={s} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          s === "bosh" ? "bg-emerald-400" : s === "band" ? "bg-red-400" : s === "tozalanmoqda" ? "bg-amber-400" : "bg-gray-400"
                        }`} />
                        <span className="text-[9px] text-gray-400 flex-1">{STATUS_LABEL[s]}</span>
                        <span className="text-[9px] font-bold text-white">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Revenue by type */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-bold text-white mb-3 flex items-center gap-1.5">
                <TrendingUp size={12} className="text-amber-400" /> Xona turi bo'yicha daromad
              </p>
              <div className="space-y-2.5">
                {REVENUE_TYPES.map((rt) => (
                  <div key={rt.type}>
                    <div className="flex justify-between text-[9px] mb-1">
                      <span className="text-gray-400">{rt.type}</span>
                      <span className="text-white font-medium">{fmt(rt.revenue)}</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-amber-500/60"
                        style={{ width: `${rt.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Monthly chart */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2">Oylik bandlik taqqoslama</p>
            <div className="flex items-end gap-2 h-[60px]">
              {MONTHLY.map((m) => (
                <div key={m.month} className="flex-1 flex flex-col items-center gap-0.5">
                  <span className="text-[8px] text-gray-500">{m.occ}%</span>
                  <div
                    className={`w-full rounded-t transition-all ${
                      m.month === "Iyl"
                        ? "bg-amber-500/60 border border-amber-500/40"
                        : "bg-white/[0.08] hover:bg-white/[0.12]"
                    }`}
                    style={{ height: `${m.occ * 0.55}px` }}
                  />
                  <span className="text-[7px] text-gray-600">{m.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Today arrivals/departures */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-lg bg-emerald-500/[0.07] border border-emerald-500/20 flex items-center gap-2">
              <LogIn size={16} className="text-emerald-400 flex-shrink-0" />
              <div>
                <p className="text-[9px] text-gray-500">Bugungi kelish</p>
                <p className="text-[15px] font-bold text-emerald-400">{reservations.filter((r) => r.checkIn === "17 Iyul").length} ta</p>
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-red-500/[0.07] border border-red-500/20 flex items-center gap-2">
              <LogOut size={16} className="text-red-400 flex-shrink-0" />
              <div>
                <p className="text-[9px] text-gray-500">Bugungi chiqish</p>
                <p className="text-[15px] font-bold text-red-400">{reservations.filter((r) => r.checkOut === "17 Iyul").length} ta</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
