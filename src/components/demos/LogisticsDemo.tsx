"use client";

import { useState } from "react";
import { Truck, User, Map, Navigation, MapPin, Clock, CheckCircle, Package, Star, AlertCircle } from "lucide-react";

type LogisticsTab = "deliveries" | "couriers" | "routes" | "tracking";

const deliveries = [
  { id: "#D-1041", address: "Chilonzor, Yangi O'zbekiston ko'ch. 12", status: "delivering", eta: "14:45", customer: "Alisher T." },
  { id: "#D-1042", address: "Yunusobod, Amir Temur xiyoboni 108", status: "delivered", eta: "Yetkazildi", customer: "Barno S." },
  { id: "#D-1043", address: "Mirzo Ulug'bek, Movarounnahr ko'ch. 7", status: "pending", eta: "16:00", customer: "Dilshod M." },
  { id: "#D-1044", address: "Shayxontohur, Navoiy ko'ch. 45", status: "delivering", eta: "15:10", customer: "Gulnora R." },
  { id: "#D-1045", address: "Sergeli, Oybek ko'ch. 33", status: "delivered", eta: "Yetkazildi", customer: "Jamshid K." },
  { id: "#D-1046", address: "Bektemir, Yoshlar ko'ch. 2", status: "pending", eta: "17:30", customer: "Mohira N." },
  { id: "#D-1047", address: "Uchtepa, Bobur ko'ch. 19", status: "delivering", eta: "15:50", customer: "Rustam A." },
  { id: "#D-1048", address: "Olmazar, Farg'ona yo'li 88", status: "pending", eta: "18:00", customer: "Sarvar B." },
];

const couriers = [
  { id: 1, name: "Kamol Usmonov", activeOrders: 3, rating: 4.9, location: "Chilonzor", status: "active", vehicle: "Motor" },
  { id: 2, name: "Sherzod Nazarov", activeOrders: 2, rating: 4.7, location: "Yunusobod", status: "active", vehicle: "Velosiped" },
  { id: 3, name: "Firdavs Tursunov", activeOrders: 0, rating: 4.8, location: "Baza", status: "idle", vehicle: "Motor" },
  { id: 4, name: "Davron Qodirov", activeOrders: 1, rating: 4.6, location: "Mirzo Ulug'bek", status: "active", vehicle: "Avtomobil" },
  { id: 5, name: "Ulug'bek Xoliqov", activeOrders: 2, rating: 4.9, location: "Sergeli", status: "active", vehicle: "Motor" },
];

const routes = [
  { id: "R-01", courier: "Kamol U.", stops: 5, distance: "14.2 km", time: "1s 45d", status: "active", optimized: true },
  { id: "R-02", courier: "Sherzod N.", stops: 3, distance: "8.7 km", time: "58d", status: "active", optimized: true },
  { id: "R-03", courier: "Davron Q.", stops: 2, distance: "5.1 km", time: "32d", status: "active", optimized: false },
  { id: "R-04", courier: "Ulug'bek X.", stops: 4, distance: "11.3 km", time: "1s 20d", status: "planned", optimized: true },
];

const trackingOrder = {
  id: "#D-1041",
  customer: "Alisher T.",
  address: "Chilonzor, Yangi O'zbekiston ko'ch. 12",
  courier: "Kamol Usmonov",
  eta: "14:45",
  timeline: [
    { label: "Buyurtma qabul qilindi", time: "13:00", done: true },
    { label: "Ombordan chiqarildi", time: "13:25", done: true },
    { label: "Kuryerga topshirildi", time: "13:40", done: true },
    { label: "Yetkazilmoqda", time: "14:05", done: true },
    { label: "Yetkazildi", time: "ETA 14:45", done: false },
  ],
};

export default function LogisticsDemo() {
  const [tab, setTab] = useState<LogisticsTab>("deliveries");
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const tabs = [
    { key: "deliveries" as LogisticsTab, label: "Yetkazishlar", icon: Package },
    { key: "couriers" as LogisticsTab, label: "Kuryerlar", icon: User },
    { key: "routes" as LogisticsTab, label: "Marshrutlar", icon: Map },
    { key: "tracking" as LogisticsTab, label: "Kuzatuv", icon: Navigation },
  ];

  return (
    <div className="flex flex-col gap-2.5 min-h-[420px]">
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
        <div className="flex items-center gap-1.5 text-[9px]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400">{deliveries.filter((d) => d.status === "delivering").length} yetkazilmoqda</span>
        </div>
      </div>

      {/* Deliveries Tab */}
      {tab === "deliveries" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Bugungi yetkazishlar</p>
            <span className="text-[10px] text-gray-500">{deliveries.length} ta buyurtma</span>
          </div>
          <div className="overflow-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Buyurtma</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Manzil</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Mijoz</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">ETA</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {deliveries.map((d) => (
                  <tr key={d.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5 text-orange-400 font-medium font-mono">{d.id}</td>
                    <td className="py-2 px-2.5 text-gray-300 max-w-[140px]">
                      <div className="flex items-start gap-1">
                        <MapPin size={9} className="text-gray-600 mt-0.5 flex-shrink-0" />
                        <span className="truncate">{d.address}</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400 hidden sm:table-cell">{d.customer}</td>
                    <td className="py-2 px-2.5 text-gray-400 font-mono">
                      <div className="flex items-center gap-1">
                        <Clock size={9} className="text-gray-600" />
                        {d.eta}
                      </div>
                    </td>
                    <td className="py-2 px-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${
                        d.status === "delivering" ? "bg-orange-500/15 text-orange-400"
                        : d.status === "delivered" ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-gray-500/15 text-gray-400"
                      }`}>
                        {d.status === "delivering" ? "Yetkazilmoqda"
                        : d.status === "delivered" ? "Yetkazildi"
                        : "Kutmoqda"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2.5 grid grid-cols-3 gap-2">
            {[
              { label: "Yetkazilmoqda", value: deliveries.filter((d) => d.status === "delivering").length, color: "text-orange-400" },
              { label: "Yetkazildi", value: deliveries.filter((d) => d.status === "delivered").length, color: "text-emerald-400" },
              { label: "Kutmoqda", value: deliveries.filter((d) => d.status === "pending").length, color: "text-gray-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Couriers Tab */}
      {tab === "couriers" && (
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Kuryerlar holati</p>
            <span className="text-[10px] text-gray-500">{couriers.filter((c) => c.status === "active").length}/{couriers.length} faol</span>
          </div>
          {couriers.map((courier) => (
            <div key={courier.id} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">{courier.name[0]}</span>
                </div>
                <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[#0f0f0f] ${
                  courier.status === "active" ? "bg-emerald-400" : "bg-gray-500"
                }`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-[11px] font-medium text-white">{courier.name}</p>
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-white/[0.06] text-gray-400">{courier.vehicle}</span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="flex items-center gap-1 text-[9px] text-gray-500">
                    <MapPin size={8} /> {courier.location}
                  </div>
                  <div className="flex items-center gap-0.5 text-[9px] text-amber-400">
                    <Star size={8} /> {courier.rating}
                  </div>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-[11px] font-bold text-orange-400">{courier.activeOrders} ta</p>
                <p className="text-[9px] text-gray-500">buyurtma</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Routes Tab */}
      {tab === "routes" && (
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Optimallashtirilgan marshrutlar</p>
            <span className="text-[9px] text-emerald-400 flex items-center gap-1">
              <CheckCircle size={9} /> AI optimizatsiya
            </span>
          </div>
          {routes.map((route) => (
            <div key={route.id} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-orange-500/20 flex items-center justify-center">
                    <Truck size={12} className="text-orange-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-[10px] font-bold text-white font-mono">{route.id}</p>
                      {route.optimized && (
                        <span className="text-[7px] px-1 py-0.5 rounded bg-emerald-500/15 text-emerald-400">Optimal</span>
                      )}
                    </div>
                    <p className="text-[9px] text-gray-500">{route.courier}</p>
                  </div>
                </div>
                <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${
                  route.status === "active" ? "bg-emerald-500/15 text-emerald-400" : "bg-blue-500/15 text-blue-400"
                }`}>
                  {route.status === "active" ? "Faol" : "Rejalashtirilgan"}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: MapPin, label: "Bekatlar", value: `${route.stops} ta` },
                  { icon: Map, label: "Masofa", value: route.distance },
                  { icon: Clock, label: "Vaqt", value: route.time },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white/[0.04]">
                    <stat.icon size={9} className="text-gray-500" />
                    <div>
                      <p className="text-[8px] text-gray-600">{stat.label}</p>
                      <p className="text-[10px] font-medium text-gray-300">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tracking Tab */}
      {tab === "tracking" && (
        <div className="flex-1 space-y-3">
          <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs font-bold text-white">{trackingOrder.id}</p>
                <p className="text-[10px] text-gray-400">{trackingOrder.customer} · {trackingOrder.address}</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-gray-500">ETA</p>
                <p className="text-sm font-bold text-orange-400">{trackingOrder.eta}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.05] mb-3">
              <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                <Truck size={12} className="text-orange-400" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-medium text-white">{trackingOrder.courier}</p>
                <p className="text-[9px] text-gray-500">Kuryer · Chilonzor yo'nalishi</p>
              </div>
              <div className="flex items-center gap-1 text-[9px] text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Jonli</span>
              </div>
            </div>

            <div className="space-y-2">
              {trackingOrder.timeline.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex flex-col items-center flex-shrink-0 mt-0.5">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                      step.done ? "bg-emerald-500/20 border border-emerald-500/40" : "bg-white/[0.06] border border-white/[0.15]"
                    }`}>
                      {step.done ? (
                        <CheckCircle size={9} className="text-emerald-400" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                      )}
                    </div>
                    {i < trackingOrder.timeline.length - 1 && (
                      <div className={`w-px h-5 mt-0.5 ${step.done ? "bg-emerald-500/30" : "bg-white/[0.06]"}`} />
                    )}
                  </div>
                  <div className="flex-1 pb-1">
                    <div className="flex items-center justify-between">
                      <p className={`text-[10px] font-medium ${step.done ? "text-white" : "text-gray-500"}`}>{step.label}</p>
                      <span className={`text-[9px] ${step.done ? "text-gray-400" : "text-orange-400"}`}>{step.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Bugun yetkazildi", value: "12 ta", color: "text-emerald-400" },
              { label: "Yetkazilmoqda", value: "3 ta", color: "text-orange-400" },
              { label: "Bekor qilindi", value: "1 ta", color: "text-red-400" },
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
