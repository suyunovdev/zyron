"use client";

import { useState } from "react";
import { Truck, User, Map, Wrench, Fuel, MapPin, CheckCircle, AlertTriangle, Clock } from "lucide-react";

type FleetTab = "vehicles" | "drivers" | "trips" | "maintenance";

const vehicles = [
  { id: 1, plate: "01 A 234 BA", model: "Mercedes Sprinter", type: "Yuk", driver: "Sherzod T.", fuel: 78, mileage: 124500, status: "active", gps: true },
  { id: 2, plate: "01 B 567 CA", model: "MAN TGX 18.480", type: "Og'ir yuk", driver: "Rustam N.", fuel: 42, mileage: 287300, status: "active", gps: true },
  { id: 3, plate: "01 C 891 DA", model: "Ford Transit", type: "Yengil yuk", driver: "Jasur M.", fuel: 15, mileage: 98700, status: "low_fuel", gps: true },
  { id: 4, plate: "01 D 112 EA", model: "Isuzu NMR", type: "O'rta yuk", driver: "—", fuel: 60, mileage: 156200, status: "maintenance", gps: false },
  { id: 5, plate: "01 E 334 FA", model: "Kamaz 5490", type: "Og'ir yuk", driver: "Behruz K.", fuel: 88, mileage: 342100, status: "active", gps: true },
  { id: 6, plate: "01 F 556 GA", model: "GAZelle Next", type: "Yengil yuk", driver: "Timur A.", fuel: 55, mileage: 67400, status: "idle", gps: true },
];

const drivers = [
  { id: 1, name: "Sherzod Toshmatov", license: "B, C", exp: 8, vehicle: "01 A 234 BA", trips: 142, rating: 4.8, status: "driving" },
  { id: 2, name: "Rustam Normatov", license: "C, CE", exp: 12, vehicle: "01 B 567 CA", trips: 287, rating: 4.9, status: "driving" },
  { id: 3, name: "Jasur Mirzaev", license: "B, C", exp: 4, vehicle: "01 C 891 DA", trips: 98, rating: 4.5, status: "driving" },
  { id: 4, name: "Behruz Karimov", license: "CE", exp: 15, vehicle: "01 E 334 FA", trips: 412, rating: 4.7, status: "driving" },
  { id: 5, name: "Timur Aliyev", license: "B, C", exp: 6, vehicle: "01 F 556 GA", trips: 173, rating: 4.6, status: "rest" },
];

const trips = [
  { id: 1, from: "Toshkent", to: "Samarqand", driver: "Sherzod T.", vehicle: "01 A 234 BA", distance: 340, started: "07:30", eta: "13:30", status: "ongoing" },
  { id: 2, from: "Toshkent", to: "Buxoro", driver: "Rustam N.", vehicle: "01 B 567 CA", distance: 570, started: "06:00", eta: "15:00", status: "ongoing" },
  { id: 3, from: "Toshkent", to: "Namangan", driver: "Jasur M.", vehicle: "01 C 891 DA", distance: 320, started: "08:00", eta: "13:00", status: "ongoing" },
  { id: 4, from: "Samarqand", to: "Toshkent", driver: "Behruz K.", vehicle: "01 E 334 FA", distance: 340, started: "05:00", eta: "11:00", status: "completed" },
  { id: 5, from: "Toshkent", to: "Andijon", driver: "Timur A.", vehicle: "01 F 556 GA", distance: 380, started: "—", eta: "—", status: "scheduled" },
];

const maintenance = [
  { id: 1, vehicle: "01 D 112 EA", model: "Isuzu NMR", type: "Moy almashtirish", mileage: 156200, scheduled: "17 Iyul", status: "inprogress", cost: 450000 },
  { id: 2, vehicle: "01 C 891 DA", model: "Ford Transit", type: "Yonilg'i filtri", mileage: 98700, scheduled: "20 Iyul", status: "scheduled", cost: 180000 },
  { id: 3, vehicle: "01 B 567 CA", model: "MAN TGX", type: "Tormoz padi", mileage: 287300, scheduled: "25 Iyul", status: "scheduled", cost: 620000 },
  { id: 4, vehicle: "01 A 234 BA", model: "Mercedes Sprinter", type: "TO-2", mileage: 124500, scheduled: "10 Iyul", status: "completed", cost: 850000 },
];

function fuelColor(f: number) {
  return f > 50 ? "bg-emerald-400" : f > 20 ? "bg-amber-400" : "bg-red-400";
}

export default function FleetDemo() {
  const [tab, setTab] = useState<FleetTab>("vehicles");

  const tabs = [
    { key: "vehicles" as FleetTab, label: "Transport", icon: Truck },
    { key: "drivers" as FleetTab, label: "Haydovchilar", icon: User },
    { key: "trips" as FleetTab, label: "Reylar", icon: Map },
    { key: "maintenance" as FleetTab, label: "Ta'mir", icon: Wrench },
  ];

  const vehicleStatusColor = (s: string) =>
    s === "active" ? "bg-emerald-500/15 text-emerald-400"
    : s === "idle" ? "bg-blue-500/15 text-blue-400"
    : s === "low_fuel" ? "bg-amber-500/15 text-amber-400"
    : "bg-red-500/15 text-red-400";
  const vehicleStatusLabel = (s: string) =>
    s === "active" ? "Harakatda" : s === "idle" ? "Dam olmoqda" : s === "low_fuel" ? "Yonilg'i kam" : "Ta'mirda";

  const tripStatusColor = (s: string) =>
    s === "ongoing" ? "bg-blue-500/15 text-blue-400"
    : s === "completed" ? "bg-emerald-500/15 text-emerald-400"
    : "bg-gray-500/15 text-gray-400";
  const tripStatusLabel = (s: string) =>
    s === "ongoing" ? "Yolda" : s === "completed" ? "Yakunlandi" : "Rejalashtirildi";

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
                  ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                  : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
              }`}
            >
              <t.icon size={11} /> {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{vehicles.filter((v) => v.gps).length} GPS faol</span>
        </div>
      </div>

      {tab === "vehicles" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Transport parki</p>
            <span className="text-[10px] text-gray-500">{vehicles.length} ta transport</span>
          </div>
          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Transport</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Haydovchi</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Yonilg'i</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">GPS</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((v) => (
                  <tr key={v.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 rounded-lg bg-orange-500/15 flex items-center justify-center flex-shrink-0">
                          <Truck size={10} className="text-orange-400" />
                        </div>
                        <div>
                          <p className="text-gray-300 font-medium font-mono">{v.plate}</p>
                          <p className="text-[8px] text-gray-600">{v.model}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400 hidden sm:table-cell">{v.driver}</td>
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1.5">
                        <Fuel size={8} className={v.fuel < 20 ? "text-red-400" : "text-gray-500"} />
                        <div className="w-12 h-1.5 rounded-full bg-white/[0.06]">
                          <div className={`h-full rounded-full ${fuelColor(v.fuel)}`} style={{ width: `${v.fuel}%` }} />
                        </div>
                        <span className={`text-[8px] ${v.fuel < 20 ? "text-red-400" : "text-gray-400"}`}>{v.fuel}%</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 hidden sm:table-cell">
                      <span className={`flex items-center gap-1 text-[8px] ${v.gps ? "text-emerald-400" : "text-gray-600"}`}>
                        <MapPin size={8} /> {v.gps ? "Faol" : "Yo'q"}
                      </span>
                    </td>
                    <td className="py-2 px-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${vehicleStatusColor(v.status)}`}>
                        {vehicleStatusLabel(v.status)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Harakatda", value: vehicles.filter((v) => v.status === "active").length, color: "text-emerald-400" },
              { label: "Dam olmoqda", value: vehicles.filter((v) => v.status === "idle").length, color: "text-blue-400" },
              { label: "Yonilg'i kam", value: vehicles.filter((v) => v.status === "low_fuel").length, color: "text-amber-400" },
              { label: "Ta'mirda", value: vehicles.filter((v) => v.status === "maintenance").length, color: "text-red-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "drivers" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Haydovchilar</p>
            <span className="text-[10px] text-gray-500">{drivers.length} ta haydovchi</span>
          </div>
          <div className="space-y-1.5">
            {drivers.map((d) => (
              <div key={d.id} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-[8px] font-bold text-white">{d.name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-[10px] font-bold text-white">{d.name}</p>
                    <span className={`px-1 py-0.5 rounded text-[7px] ${d.status === "driving" ? "bg-emerald-500/15 text-emerald-400" : "bg-blue-500/15 text-blue-400"}`}>
                      {d.status === "driving" ? "Yolda" : "Dam olmoqda"}
                    </span>
                  </div>
                  <p className="text-[8px] text-gray-500">{d.vehicle} · {d.exp} yil tajriba · {d.trips} reys</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-[10px] font-bold text-amber-400">{d.rating}</p>
                  <p className="text-[8px] text-gray-600">Reyting</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "trips" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Bugungi reylar</p>
            <span className="text-[9px] text-blue-400 flex items-center gap-1"><Clock size={9} /> {trips.filter((t) => t.status === "ongoing").length} yolda</span>
          </div>
          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Marshrut</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Haydovchi</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Masofa</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Ketdi</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {trips.map((t) => (
                  <tr key={t.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={9} className="text-orange-400 flex-shrink-0" />
                        <span className="text-gray-300 font-medium">{t.from}</span>
                        <span className="text-gray-600">→</span>
                        <span className="text-gray-400">{t.to}</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400 hidden sm:table-cell">{t.driver}</td>
                    <td className="py-2 px-2.5 text-right text-gray-400 hidden sm:table-cell">{t.distance} km</td>
                    <td className="py-2 px-2.5 text-gray-400 font-mono">{t.started}</td>
                    <td className="py-2 px-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${tripStatusColor(t.status)}`}>
                        {tripStatusLabel(t.status)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2.5 grid grid-cols-3 gap-2">
            {[
              { label: "Jami masofa", value: trips.filter((t) => t.status !== "scheduled").reduce((s, t) => s + t.distance, 0) + " km", color: "text-white" },
              { label: "Yolda", value: trips.filter((t) => t.status === "ongoing").length, color: "text-blue-400" },
              { label: "Yakunlandi", value: trips.filter((t) => t.status === "completed").length, color: "text-emerald-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-[11px] font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "maintenance" && (
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Ta'mir jadvali</p>
            <span className="text-[9px] text-amber-400 flex items-center gap-1">
              <AlertTriangle size={9} /> {maintenance.filter((m) => m.status !== "completed").length} rejalashtirilgan
            </span>
          </div>
          <div className="space-y-2">
            {maintenance.map((m) => (
              <div key={m.id} className={`p-3 rounded-xl border flex items-start gap-3 ${
                m.status === "inprogress" ? "bg-amber-500/[0.06] border-amber-500/20"
                : m.status === "completed" ? "bg-emerald-500/[0.06] border-emerald-500/20"
                : "bg-white/[0.03] border-white/[0.06]"
              }`}>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  m.status === "inprogress" ? "bg-amber-500/15" : m.status === "completed" ? "bg-emerald-500/15" : "bg-white/[0.05]"
                }`}>
                  {m.status === "completed"
                    ? <CheckCircle size={11} className="text-emerald-400" />
                    : <Wrench size={11} className={m.status === "inprogress" ? "text-amber-400" : "text-gray-400"} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="text-[10px] font-bold text-white">{m.type}</p>
                    <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${
                      m.status === "inprogress" ? "bg-amber-500/15 text-amber-400"
                      : m.status === "completed" ? "bg-emerald-500/15 text-emerald-400"
                      : "bg-gray-500/15 text-gray-400"
                    }`}>
                      {m.status === "inprogress" ? "Jarayonda" : m.status === "completed" ? "Tugadi" : "Rejalashtirildi"}
                    </span>
                  </div>
                  <p className="text-[9px] text-gray-400">{m.vehicle} · {m.model}</p>
                  <p className="text-[8px] text-gray-600">{m.scheduled} · {m.mileage.toLocaleString()} km · {m.cost.toLocaleString()} so'm</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Jarayonda", value: maintenance.filter((m) => m.status === "inprogress").length, color: "text-amber-400" },
              { label: "Rejalashtirildi", value: maintenance.filter((m) => m.status === "scheduled").length, color: "text-gray-400" },
              { label: "Tugadi", value: maintenance.filter((m) => m.status === "completed").length, color: "text-emerald-400" },
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
