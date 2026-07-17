"use client";

import { useState, useEffect } from "react";
import {
  Truck, User, Map, BarChart2,
  MapPin, Clock, CheckCircle, Package, Star, AlertCircle,
  Navigation, Fuel, Zap, TrendingUp, ThumbsUp, ArrowRight,
  Bike, Car, Phone,
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

type Tab = "yetkazish" | "kuryerlar" | "xarita" | "tahlil";

function fmt(n: number) {
  return n.toLocaleString("uz-UZ") + " so'm";
}

type DeliveryStatus = "olingan" | "yolda" | "yetkazildi" | "muammo";

type Delivery = {
  id: string; sender: string; receiver: string;
  from: string; to: string; courier: string;
  status: DeliveryStatus; eta: string; weight: string;
  timeline?: { label: string; time: string; done: boolean }[];
};

const deliveries: Delivery[] = [
  {
    id: "#D-4841", sender: "Korzinka Yunusobod", receiver: "Alisher Karimov",
    from: "Yunusobod, 4-mavze", to: "Chilonzor, Yangi ko'ch. 12",
    courier: "Kamol Usmonov", status: "yolda", eta: "14:45", weight: "3.2 kg",
    timeline: [
      { label: "Buyurtma qabul qilindi", time: "13:00", done: true },
      { label: "Ombordan chiqarildi", time: "13:20", done: true },
      { label: "Kuryerga topshirildi", time: "13:40", done: true },
      { label: "Yo'lda", time: "14:05", done: true },
      { label: "Yetkazildi", time: "ETA 14:45", done: false },
    ],
  },
  {
    id: "#D-4842", sender: "Makro Sergeli", receiver: "Dilnoza Yusupova",
    from: "Sergeli, 12-mavze", to: "Mirzo Ulug'bek, Abdulla Qodiriy 8",
    courier: "Sherzod Nazarov", status: "olingan", eta: "15:30", weight: "1.8 kg",
    timeline: [
      { label: "Buyurtma qabul qilindi", time: "13:45", done: true },
      { label: "Ombordan chiqarildi", time: "14:10", done: true },
      { label: "Kuryerga topshirildi", time: "14:20", done: false },
      { label: "Yo'lda", time: "—", done: false },
      { label: "Yetkazildi", time: "ETA 15:30", done: false },
    ],
  },
  {
    id: "#D-4843", sender: "Havas Chilonzor", receiver: "Sardor Toshmatov",
    from: "Chilonzor, Qoratosh 3", to: "Yakkasaroy, Pushkin 22",
    courier: "Firdavs Tursunov", status: "yetkazildi", eta: "Yetkazildi", weight: "0.5 kg",
    timeline: [
      { label: "Buyurtma qabul qilindi", time: "10:00", done: true },
      { label: "Ombordan chiqarildi", time: "10:20", done: true },
      { label: "Kuryerga topshirildi", time: "10:35", done: true },
      { label: "Yo'lda", time: "10:50", done: true },
      { label: "Yetkazildi", time: "11:40", done: true },
    ],
  },
  {
    id: "#D-4844", sender: "Anor Do'kon", receiver: "Gulnora Razzaqova",
    from: "Yunusobod, Amir Temur 108", to: "Mirzo Ulug'bek, Bog'ishamol 5",
    courier: "Davron Qodirov", status: "yolda", eta: "15:10", weight: "2.1 kg",
    timeline: [
      { label: "Buyurtma qabul qilindi", time: "13:30", done: true },
      { label: "Ombordan chiqarildi", time: "13:55", done: true },
      { label: "Kuryerga topshirildi", time: "14:10", done: true },
      { label: "Yo'lda", time: "14:25", done: true },
      { label: "Yetkazildi", time: "ETA 15:10", done: false },
    ],
  },
  {
    id: "#D-4845", sender: "Beeline UZ showroom", receiver: "Bobur Mirzo",
    from: "Yakkasaroy, Afrosiyob 18", to: "Chilonzor, O'rmon 40",
    courier: "Ulug'bek Xoliqov", status: "muammo", eta: "!", weight: "0.3 kg",
    timeline: [],
  },
  {
    id: "#D-4846", sender: "UzAuto aksessuarlar", receiver: "Zulfiya Abdullayeva",
    from: "Sergeli, TT baza", to: "Yunusobod, 16-mavze",
    courier: "Kamol Usmonov", status: "olingan", eta: "16:30", weight: "5.0 kg",
    timeline: [],
  },
];

type Courier = {
  id: number; name: string; phone: string; vehicle: "moto" | "mashina" | "velosiped";
  orders: number; todayDone: number; rating: number; status: "online" | "offline";
  area: string; gradient: string;
};

const couriers: Courier[] = [
  { id: 1, name: "Kamol Usmonov", phone: "+998 90 123 4567", vehicle: "moto", orders: 3, todayDone: 8, rating: 4.9, status: "online", area: "Chilonzor, Yunusobod", gradient: "from-orange-500 to-amber-600" },
  { id: 2, name: "Sherzod Nazarov", phone: "+998 91 234 5678", vehicle: "velosiped", orders: 2, todayDone: 5, rating: 4.7, status: "online", area: "Yunusobod, MU", gradient: "from-emerald-500 to-teal-600" },
  { id: 3, name: "Firdavs Tursunov", phone: "+998 93 345 6789", vehicle: "moto", orders: 0, todayDone: 11, rating: 4.8, status: "offline", area: "Baza (dam olmoqda)", gradient: "from-blue-500 to-indigo-600" },
  { id: 4, name: "Davron Qodirov", phone: "+998 94 456 7890", vehicle: "mashina", orders: 1, todayDone: 6, rating: 4.6, status: "online", area: "Mirzo Ulug'bek", gradient: "from-violet-500 to-purple-600" },
  { id: 5, name: "Ulug'bek Xoliqov", phone: "+998 95 567 8901", vehicle: "moto", orders: 2, todayDone: 9, rating: 4.9, status: "online", area: "Sergeli, Yakkasaroy", gradient: "from-rose-500 to-pink-600" },
  { id: 6, name: "Jasur Mirzayev", phone: "+998 97 678 9012", vehicle: "velosiped", orders: 0, todayDone: 3, rating: 4.4, status: "offline", area: "Olmazar", gradient: "from-cyan-500 to-sky-600" },
];

type Route = {
  id: string; courier: string; from: string; to: string;
  distance: string; eta: string; stops: number; fuelCost: number;
  ai: boolean; stops_list: string[];
};

const routes: Route[] = [
  {
    id: "R-01", courier: "Kamol Usmonov", from: "Yunusobod baza", to: "Chilonzor",
    distance: "14.2 km", eta: "1s 45d", stops: 4, fuelCost: 18_000, ai: true,
    stops_list: ["Yunusobod baza", "Yunusobod 4-mavze", "Yakkasaroy", "Chilonzor qoratosh", "Chilonzor O'rmon"],
  },
  {
    id: "R-02", courier: "Sherzod Nazarov", from: "Sergeli", to: "Mirzo Ulug'bek",
    distance: "8.7 km", eta: "58 daqiqa", stops: 3, fuelCost: 0, ai: true,
    stops_list: ["Sergeli 12-mavze", "Qorasaroy", "Mirzo Ulug'bek Abdulla Qodiriy"],
  },
  {
    id: "R-03", courier: "Davron Qodirov", from: "Chilonzor", to: "Mirzo Ulug'bek",
    distance: "5.1 km", eta: "32 daqiqa", stops: 2, fuelCost: 8_500, ai: false,
    stops_list: ["Yakkasaroy Afrosiyob", "Mirzo Ulug'bek Bog'ishamol"],
  },
  {
    id: "R-04", courier: "Ulug'bek Xoliqov", from: "TT baza Sergeli", to: "Yunusobod",
    distance: "11.3 km", eta: "1s 20d", stops: 3, fuelCost: 14_000, ai: true,
    stops_list: ["Sergeli TT baza", "Mirzo Ulug'bek", "Yunusobod 16-mavze"],
  },
];

const hourlyDeliveries = [0, 0, 0, 1, 3, 8, 14, 22, 18, 25, 20, 28, 32, 27, 24, 19, 22, 28, 31, 24, 16, 10, 5, 2];
const maxHourly = Math.max(...hourlyDeliveries);

const courierPerf = [
  { name: "Firdavs T.", done: 11, rating: 4.8, onTime: 100 },
  { name: "Ulug'bek X.", done: 9, rating: 4.9, onTime: 97 },
  { name: "Kamol U.", done: 8, rating: 4.9, onTime: 95 },
  { name: "Davron Q.", done: 6, rating: 4.6, onTime: 90 },
  { name: "Sherzod N.", done: 5, rating: 4.7, onTime: 88 },
];

const statusCfg = (s: DeliveryStatus) => {
  if (s === "olingan") return { label: "Olingan", cls: "bg-blue-500/15 text-blue-400" };
  if (s === "yolda") return { label: "Yo'lda", cls: "bg-orange-500/15 text-orange-400", pulse: true };
  if (s === "yetkazildi") return { label: "Yetkazildi", cls: "bg-emerald-500/15 text-emerald-400" };
  return { label: "Muammo", cls: "bg-red-500/15 text-red-400", pulse: true };
};

const vehicleIcon = (v: Courier["vehicle"]) => {
  if (v === "moto") return "🏍️";
  if (v === "mashina") return "🚗";
  return "🚲";
};

export default function LogisticsDemo() {
  const [tab, setTab] = useState<Tab>("yetkazish");
  const [expandedDel, setExpandedDel] = useState<string | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const [assignCourier, setAssignCourier] = useState<number | null>(null);
  const [deliveryList, setDeliveryList] = useState<Delivery[]>(deliveries);
  const { toast, show } = useToast();
  const clock = useClock();

  const tabs: { key: Tab; label: string; icon: React.ElementType }[] = [
    { key: "yetkazish", label: "Yetkazishlar", icon: Package },
    { key: "kuryerlar", label: "Kuryerlar", icon: User },
    { key: "xarita", label: "Xarita", icon: Map },
    { key: "tahlil", label: "Tahlil", icon: BarChart2 },
  ];

  const activeCount = deliveryList.filter((d) => d.status === "yolda").length;
  const doneToday = deliveryList.filter((d) => d.status === "yetkazildi").length;
  const problemCount = deliveryList.filter((d) => d.status === "muammo").length;

  const cycleDeliveryStatus = (id: string) => {
    const statusCycle: Record<DeliveryStatus, DeliveryStatus> = {
      olingan: "yolda",
      yolda: "yetkazildi",
      yetkazildi: "yetkazildi",
      muammo: "olingan",
    };
    setDeliveryList((prev) => prev.map((d) => {
      if (d.id !== id) return d;
      const next = statusCycle[d.status];
      const labels: Record<DeliveryStatus, string> = { olingan: "Olingan", yolda: "Yo'lda", yetkazildi: "Yetkazildi", muammo: "Muammo" };
      show(`${id}: ${labels[d.status]} → ${labels[next]}`);
      return { ...d, status: next };
    }));
  };

  const handleAssignCourier = (courierId: number, courierName: string) => {
    if (assignCourier === courierId) {
      setAssignCourier(null);
    } else {
      setAssignCourier(courierId);
      show(`Buyurtma tayinlandi: ${courierName}`);
    }
  };

  const selectedRouteData = routes.find((r) => r.id === selectedRoute);

  return (
    <div className="flex flex-col gap-2.5 min-h-[520px]">
      {/* Status bar */}
      <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-orange-500/[0.07] border border-orange-500/20 text-[9px]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          <span className="text-orange-400 font-semibold">ZYRON Logistics v2.5</span>
          <span className="text-gray-600">·</span>
          <span className="text-gray-400">Toshkent Hub</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-emerald-400 font-medium">Faol yetkazishlar: {activeCount}</span>
          <span className="text-gray-600">·</span>
          <span className="font-mono">{clock}</span>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-4 right-4 z-50 px-3 py-2 rounded-lg bg-orange-500/90 text-white text-[10px] font-semibold shadow-lg">
          {toast.msg}
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${
                tab === t.key
                  ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                  : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
              }`}
            >
              <t.icon size={11} /> {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-[9px]">
          <span className="flex items-center gap-1 text-orange-400">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" /> {activeCount} yetkazilmoqda
          </span>
          {problemCount > 0 && (
            <span className="flex items-center gap-1 text-red-400">
              <AlertCircle size={9} /> {problemCount} muammo
            </span>
          )}
        </div>
      </div>

      {/* ===== TAB 1: YETKAZISHLAR ===== */}
      {tab === "yetkazish" && (
        <div className="flex-1">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-2 mb-3">
            {[
              { label: "Jami", value: deliveryList.length, color: "text-white" },
              { label: "Yetkazilmoqda", value: activeCount, color: "text-orange-400" },
              { label: "Bajarildi", value: doneToday, color: "text-emerald-400" },
              { label: "Muammo", value: problemCount, color: "text-red-400" },
            ].map((s) => (
              <div key={s.label} className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[8px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[560px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Buyurtma</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Yuboruvchi → Qabul</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Kuryer</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">ETA</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                  <th className="py-2 px-2" />
                </tr>
              </thead>
              <tbody>
                {deliveryList.map((d) => {
                  const s = statusCfg(d.status);
                  const expanded = expandedDel === d.id;
                  return (
                    <>
                      <tr
                        key={d.id}
                        className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors cursor-pointer"
                        onClick={() => setExpandedDel(expanded ? null : d.id)}
                      >
                        <td className="py-2 px-2.5 text-orange-400 font-mono font-medium">{d.id}</td>
                        <td className="py-2 px-2.5">
                          <p className="text-gray-300 truncate max-w-[160px]">
                            <span className="text-gray-500">{d.from.split(",")[0]}</span>
                            <ArrowRight size={9} className="inline mx-1 text-gray-600" />
                            {d.to.split(",")[0]}
                          </p>
                          <p className="text-gray-600 text-[8px]">{d.receiver} · {d.weight}</p>
                        </td>
                        <td className="py-2 px-2.5 text-gray-400 hidden sm:table-cell">{d.courier}</td>
                        <td className="py-2 px-2.5">
                          <div className="flex items-center gap-1 text-gray-400">
                            <Clock size={9} className="text-gray-600" />
                            {d.eta}
                          </div>
                        </td>
                        <td className="py-2 px-2.5">
                          <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium inline-flex items-center gap-1 ${s.cls}`}>
                            {s.pulse && <span className="w-1 h-1 rounded-full bg-current animate-pulse" />}
                            {s.label}
                          </span>
                        </td>
                        <td className="py-2 px-2 text-gray-600" onClick={(e) => e.stopPropagation()}>
                          {d.status !== "yetkazildi" && (
                            <button
                              onClick={() => cycleDeliveryStatus(d.id)}
                              className="px-1.5 py-0.5 rounded bg-orange-500/15 text-orange-400 hover:bg-orange-500/25 text-[8px] transition-colors"
                            >
                              Yangilash
                            </button>
                          )}
                          {d.status === "yetkazildi" && <Navigation size={9} />}
                        </td>
                      </tr>
                      {expanded && d.timeline && d.timeline.length > 0 && (
                        <tr key={`${d.id}-exp`} className="border-b border-white/[0.04] bg-white/[0.015]">
                          <td colSpan={6} className="px-4 py-3">
                            <p className="text-[9px] text-gray-500 mb-2">Yetkazish jarayoni:</p>
                            <div className="space-y-1.5">
                              {d.timeline.map((step, i) => (
                                <div key={i} className="flex items-start gap-2.5">
                                  <div className="flex flex-col items-center flex-shrink-0 mt-0.5">
                                    <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${step.done ? "bg-emerald-500/20 border border-emerald-500/40" : "bg-white/[0.06] border border-white/10"}`}>
                                      {step.done ? <CheckCircle size={8} className="text-emerald-400" /> : <div className="w-1 h-1 rounded-full bg-gray-600" />}
                                    </div>
                                    {i < d.timeline!.length - 1 && (
                                      <div className={`w-px h-4 mt-0.5 ${step.done ? "bg-emerald-500/30" : "bg-white/[0.06]"}`} />
                                    )}
                                  </div>
                                  <div className="flex-1 flex items-center justify-between pb-0.5">
                                    <p className={`text-[9px] ${step.done ? "text-gray-300" : "text-gray-600"}`}>{step.label}</p>
                                    <span className={`text-[8px] ${step.done ? "text-gray-500" : "text-orange-400"}`}>{step.time}</span>
                                  </div>
                                </div>
                              ))}
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

      {/* ===== TAB 2: KURYERLAR ===== */}
      {tab === "kuryerlar" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] font-bold text-white">Kuryerlar holati</p>
            <span className="text-[10px] text-gray-500">
              {couriers.filter((c) => c.status === "online").length}/{couriers.length} online
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {couriers.map((courier) => (
              <div
                key={courier.id}
                className={`p-3 rounded-xl border transition-all ${
                  assignCourier === courier.id
                    ? "bg-orange-500/[0.08] border-orange-500/30"
                    : "bg-white/[0.03] border-white/[0.06] hover:border-white/10"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${courier.gradient} flex items-center justify-center`}>
                      <span className="text-[13px] font-bold text-white">{courier.name[0]}</span>
                    </div>
                    <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[#0f0f0f] ${courier.status === "online" ? "bg-emerald-400" : "bg-gray-500"}`} />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <p className="text-[11px] font-medium text-white">{courier.name}</p>
                      <span className="text-sm">{vehicleIcon(courier.vehicle)}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-gray-500 mb-1">
                      <Phone size={8} /> {courier.phone}
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-gray-500 mb-1.5">
                      <MapPin size={8} /> {courier.area}
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-0.5 text-[9px] text-amber-400">
                        <Star size={8} /> <span className="font-bold">{courier.rating}</span>
                      </div>
                      <div className="text-[9px] text-gray-500">
                        Bugun: <span className="text-white font-medium">{courier.todayDone}</span> yetkazish
                      </div>
                      <div className="text-[9px]">
                        <span className={`font-bold ${courier.orders > 0 ? "text-orange-400" : "text-gray-500"}`}>{courier.orders}</span>
                        <span className="text-gray-600"> faol</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleAssignCourier(courier.id, courier.name)}
                  disabled={courier.status === "offline"}
                  className={`mt-2 w-full py-1 rounded-md text-[9px] font-medium transition-colors border ${
                    courier.status === "offline"
                      ? "bg-white/[0.03] border-white/[0.06] text-gray-600 cursor-not-allowed"
                      : assignCourier === courier.id
                      ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-400"
                      : "bg-orange-500/10 border-orange-500/20 text-orange-400 hover:bg-orange-500/20"
                  }`}
                >
                  {courier.status === "offline" ? "Offline" : assignCourier === courier.id ? "✓ Tayinlandi" : "Buyurtma tayinlash"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== TAB 3: XARITA ===== */}
      {tab === "xarita" && (
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Faol marshrutlar</p>
            <span className="text-[9px] text-emerald-400 flex items-center gap-1">
              <Zap size={9} /> AI optimizatsiya
            </span>
          </div>

          <div className="space-y-2">
            {routes.map((route) => (
              <div
                key={route.id}
                onClick={() => setSelectedRoute(selectedRoute === route.id ? null : route.id)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  selectedRoute === route.id
                    ? "bg-orange-500/[0.08] border-orange-500/30"
                    : "bg-white/[0.03] border-white/[0.06] hover:border-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <Truck size={13} className="text-orange-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-[10px] font-bold text-white font-mono">{route.id}</p>
                        {route.ai && (
                          <span className="text-[7px] px-1 py-0.5 rounded bg-emerald-500/15 text-emerald-400 flex items-center gap-0.5">
                            <Zap size={7} /> AI optimallashtirilgan
                          </span>
                        )}
                      </div>
                      <p className="text-[9px] text-gray-500">{route.courier}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-gray-500">Yoqilg'i</p>
                    <p className={`text-[10px] font-bold ${route.fuelCost === 0 ? "text-emerald-400" : "text-amber-400"}`}>
                      {route.fuelCost === 0 ? "0 (velosiped)" : fmt(route.fuelCost)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[9px] text-gray-400 mb-2">
                  <MapPin size={9} className="text-gray-600 shrink-0" />
                  <span className="text-gray-500">{route.from}</span>
                  <ArrowRight size={9} className="text-gray-600 shrink-0" />
                  <span className="truncate">{route.to}</span>
                </div>

                <div className="grid grid-cols-3 gap-1.5">
                  <div className="flex items-center gap-1 p-1.5 rounded-lg bg-white/[0.04]">
                    <Navigation size={9} className="text-gray-500" />
                    <div>
                      <p className="text-[7px] text-gray-600">Masofa</p>
                      <p className="text-[9px] font-medium text-gray-300">{route.distance}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 p-1.5 rounded-lg bg-white/[0.04]">
                    <Clock size={9} className="text-gray-500" />
                    <div>
                      <p className="text-[7px] text-gray-600">Vaqt</p>
                      <p className="text-[9px] font-medium text-gray-300">{route.eta}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 p-1.5 rounded-lg bg-white/[0.04]">
                    <MapPin size={9} className="text-gray-500" />
                    <div>
                      <p className="text-[7px] text-gray-600">Bekatlar</p>
                      <p className="text-[9px] font-medium text-gray-300">{route.stops} ta</p>
                    </div>
                  </div>
                </div>

                {/* Expanded stop sequence */}
                {selectedRoute === route.id && (
                  <div className="mt-3 pt-2 border-t border-white/[0.06]">
                    <p className="text-[9px] text-gray-500 mb-2">Bekatlar ketma-ketligi:</p>
                    <div className="space-y-1.5">
                      {route.stops_list.map((stop, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="flex flex-col items-center flex-shrink-0">
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[7px] font-bold ${
                              i === 0 ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                              : i === route.stops_list.length - 1 ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                              : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                            }`}>
                              {i + 1}
                            </div>
                            {i < route.stops_list.length - 1 && (
                              <div className="w-px h-3 mt-0.5 bg-white/[0.08]" />
                            )}
                          </div>
                          <p className={`text-[9px] pt-0.5 ${i === 0 || i === route.stops_list.length - 1 ? "text-gray-300 font-medium" : "text-gray-500"}`}>
                            {stop}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== TAB 4: TAHLIL ===== */}
      {tab === "tahlil" && (
        <div className="flex-1 space-y-3">
          {/* KPI cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "O'rt. yetkazish vaqti", value: "42 daqiqa", color: "text-orange-400", icon: Clock },
              { label: "O'z vaqtida %", value: "93.4%", color: "text-emerald-400", icon: CheckCircle },
              { label: "Bugun bajarildi", value: `${doneToday} ta`, color: "text-white", icon: Package },
              { label: "Mijoz bahosi", value: "4.8 / 5", color: "text-amber-400", icon: ThumbsUp },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[9px] text-gray-500">{s.label}</p>
                  <s.icon size={9} className={s.color} />
                </div>
                <p className={`text-[13px] font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* Hourly heatmap */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-1">Soatlik yetkazishlar (buguni)</p>
            <p className="text-[9px] text-gray-500 mb-2">Eng band soat: 12:00 – 14:00</p>
            <div className="flex items-end gap-0.5 h-[50px]">
              {hourlyDeliveries.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div
                    className={`w-full rounded-t transition-colors cursor-pointer ${
                      v >= 25 ? "bg-orange-500/70 hover:bg-orange-500"
                      : v >= 15 ? "bg-orange-500/40 hover:bg-orange-500/60"
                      : v >= 5 ? "bg-orange-500/20 hover:bg-orange-500/35"
                      : "bg-white/[0.05]"
                    }`}
                    style={{ height: `${v === 0 ? 4 : (v / maxHourly) * 100}%` }}
                    title={`${i}:00 — ${v} ta`}
                  />
                  {i % 4 === 0 && <span className="text-[7px] text-gray-600">{i}:00</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Courier performance */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-bold text-white mb-2.5">Kuryer reytingi</p>
              <div className="space-y-2">
                {courierPerf.map((c, i) => (
                  <div key={c.name} className="flex items-center gap-2 text-[9px]">
                    <span className={`w-4 text-center font-bold ${i === 0 ? "text-amber-400" : "text-gray-600"}`}>{i + 1}</span>
                    <span className="text-gray-300 flex-1">{c.name}</span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      <Star size={8} /> <span>{c.rating}</span>
                    </div>
                    <span className="text-gray-500 w-6 text-right">{c.done}</span>
                    <span className="text-emerald-400 w-8 text-right">{c.onTime}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats summary */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-bold text-white mb-2.5">Haftalik ko'rsatkichlar</p>
              <div className="space-y-2">
                {[
                  { label: "Jami yetkazish", value: "248 ta", bar: 85, color: "bg-orange-500" },
                  { label: "O'z vaqtida", value: "231 ta", bar: 93, color: "bg-emerald-500" },
                  { label: "Muammolar", value: "8 ta", bar: 12, color: "bg-red-500" },
                  { label: "Bekor qilingan", value: "9 ta", bar: 15, color: "bg-gray-500" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="flex justify-between text-[9px] mb-0.5">
                      <span className="text-gray-400">{s.label}</span>
                      <span className="text-gray-300">{s.value}</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.bar}%`, opacity: 0.7 }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2.5 pt-2 border-t border-white/[0.06] flex justify-between text-[9px]">
                <span className="text-gray-500">1 yetkazish tannarxi</span>
                <span className="text-orange-400 font-bold flex items-center gap-1"><TrendingUp size={9} /> {fmt(12_800)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
