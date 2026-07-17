"use client";

import { useState, useEffect } from "react";
import {
  Truck, User, Map, Wrench, Fuel, MapPin, CheckCircle, AlertTriangle,
  Clock, Star, ChevronDown, ChevronUp, Phone, Navigation, Plus,
  Activity, BarChart2, TrendingUp,
} from "lucide-react";

type FleetTab = "transport" | "reylar" | "haydovchilar" | "texnik";

type Toast = { id: number; msg: string; type: "success" | "info" | "warning" };
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

function fmt(n: number) {
  return n.toLocaleString("uz-UZ") + " so'm";
}

const vehicles = [
  { id: 1, emoji: "🚛", model: "ISUZU NPR 75L", plate: "01 A 112 BC", driver: "Sherzod Toshmatov", fuel: 78, km: 124_500, gps: true, status: "harakatda", cargo: "Oziq-ovqat" },
  { id: 2, emoji: "🚐", model: "Mercedes Sprinter", plate: "01 B 345 DA", driver: "Rustam Normatov", fuel: 43, km: 287_300, gps: true, status: "harakatda", cargo: "Kiyim-kechak" },
  { id: 3, emoji: "🚗", model: "Chevrolet Lacetti", plate: "01 C 678 EA", driver: "Jasur Mirzaev", fuel: 12, km: 98_700, gps: true, status: "yoqilgi_kam", cargo: "Hujjat" },
  { id: 4, emoji: "🚚", model: "MAN TGX 18.480", plate: "01 D 901 FA", driver: "—", fuel: 62, km: 342_100, gps: false, status: "tamir", cargo: "—" },
  { id: 5, emoji: "🚛", model: "Kamaz 5490", plate: "01 E 234 GA", driver: "Behruz Karimov", fuel: 91, km: 198_400, gps: true, status: "harakatda", cargo: "Qurilish materiali" },
  { id: 6, emoji: "🚐", model: "Ford Transit", plate: "01 F 567 HA", driver: "Timur Aliyev", fuel: 55, km: 67_400, gps: true, status: "bosh", cargo: "—" },
];

const trips = [
  { id: 1, vehicle: "01 A 112 BC", driver: "Sherzod T.", from: "Toshkent", to: "Samarqand", dist: 340, depart: "07:30", eta: "13:30", cargo: "Oziq-ovqat", status: "yolda", progress: 62 },
  { id: 2, vehicle: "01 B 345 DA", driver: "Rustam N.", from: "Toshkent", to: "Buxoro", dist: 570, depart: "06:00", eta: "15:00", cargo: "Kiyim-kechak", status: "yolda", progress: 38 },
  { id: 3, vehicle: "01 C 678 EA", driver: "Jasur M.", from: "Toshkent", to: "Namangan", dist: 320, depart: "08:00", eta: "13:00", cargo: "Hujjat", status: "yolda", progress: 51 },
  { id: 4, vehicle: "01 E 234 GA", driver: "Behruz K.", from: "Samarqand", to: "Toshkent", dist: 340, depart: "05:00", eta: "11:00", cargo: "Qurilish materiali", status: "yetdi", progress: 100 },
  { id: 5, vehicle: "01 F 567 HA", driver: "Timur A.", from: "Toshkent", to: "Andijon", dist: 380, depart: "—", eta: "—", cargo: "Elektr jihozlar", status: "kutmoqda", progress: 0 },
  { id: 6, vehicle: "01 B 345 DA", driver: "Rustam N.", from: "Farg'ona", to: "Toshkent", dist: 420, depart: "—", eta: "—", cargo: "Meva-sabzavot", status: "kutmoqda", progress: 0 },
];

const drivers = [
  { id: 1, name: "Sherzod Toshmatov", phone: "+998 90 111 22 33", license: "B/C", vehicle: "01 A 112 BC", trips: 142, rating: 4.8, violations: 0, status: "yolda" },
  { id: 2, name: "Rustam Normatov", phone: "+998 91 222 33 44", license: "C/CE", vehicle: "01 B 345 DA", trips: 287, rating: 4.9, violations: 1, status: "yolda" },
  { id: 3, name: "Jasur Mirzaev", phone: "+998 93 333 44 55", license: "B/C", vehicle: "01 C 678 EA", trips: 98, rating: 4.5, violations: 2, status: "yolda" },
  { id: 4, name: "Behruz Karimov", phone: "+998 94 444 55 66", license: "CE", vehicle: "01 E 234 GA", trips: 412, rating: 4.7, violations: 0, status: "bosh" },
  { id: 5, name: "Timur Aliyev", phone: "+998 95 555 66 77", license: "B/C", vehicle: "01 F 567 HA", trips: 173, rating: 4.6, violations: 1, status: "tatil" },
];

const maintenance = [
  { id: 1, vehicle: "01 D 901 FA", model: "MAN TGX 18.480", type: "Motor diagnostika", lastDone: "120,000 km", nextDue: "350,000 km", kmLeft: 7_900, urgency: "kechikkan", cost: 1_200_000 },
  { id: 2, vehicle: "01 C 678 EA", model: "Chevrolet Lacetti", type: "Yog' almashtirish", lastDone: "88,000 km", nextDue: "103,000 km", kmLeft: 4_300, urgency: "yaqinda", cost: 420_000 },
  { id: 3, vehicle: "01 A 112 BC", model: "ISUZU NPR 75L", type: "Shinalar tekshirish", lastDone: "100,000 km", nextDue: "130,000 km", kmLeft: 5_500, urgency: "normal", cost: 280_000 },
  { id: 4, vehicle: "01 B 345 DA", model: "Mercedes Sprinter", type: "Tormoz sistemi", lastDone: "260,000 km", nextDue: "300,000 km", kmLeft: 12_700, urgency: "normal", cost: 650_000 },
  { id: 5, vehicle: "01 E 234 GA", model: "Kamaz 5490", type: "Havo filtri", lastDone: "180,000 km", nextDue: "210,000 km", kmLeft: 11_600, urgency: "normal", cost: 180_000 },
];

const serviceHistory = [
  { date: "10 Iyl", vehicle: "01 A 112 BC", type: "TO-2", cost: 850_000 },
  { date: "5 Iyl", vehicle: "01 B 345 DA", type: "Moy almashtirish", cost: 420_000 },
  { date: "1 Iyl", vehicle: "01 E 234 GA", type: "Shinalar", cost: 1_600_000 },
];

function fuelColor(f: number) {
  return f > 50 ? "bg-emerald-400" : f > 25 ? "bg-amber-400" : "bg-red-400";
}
function fuelText(f: number) {
  return f > 50 ? "text-emerald-400" : f > 25 ? "text-amber-400" : "text-red-400";
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={8}
          className={s <= Math.round(rating) ? "text-amber-400 fill-amber-400" : "text-gray-600"}
        />
      ))}
    </div>
  );
}

export default function FleetDemo() {
  const [tab, setTab] = useState<FleetTab>("transport");
  const [selectedVehicle, setSelectedVehicle] = useState<number | null>(null);
  const [selectedDriver, setSelectedDriver] = useState<number | null>(null);
  const [addingMaint, setAddingMaint] = useState(false);
  const { toasts, show } = useToast();
  const clock = useClock();
  const [completedTrips, setCompletedTrips] = useState<Set<number>>(new Set([4]));
  const [maintSaved, setMaintSaved] = useState(false);

  const tabs = [
    { key: "transport" as FleetTab, label: "Transport", icon: Truck },
    { key: "reylar" as FleetTab, label: "Reylar", icon: Map },
    { key: "haydovchilar" as FleetTab, label: "Haydovchilar", icon: User },
    { key: "texnik" as FleetTab, label: "Texnik xizmat", icon: Wrench },
  ];

  const statusBadge = (s: string) =>
    s === "harakatda" ? "bg-emerald-500/15 text-emerald-400"
    : s === "bosh" ? "bg-blue-500/15 text-blue-400"
    : s === "yoqilgi_kam" ? "bg-amber-500/15 text-amber-400"
    : "bg-red-500/15 text-red-400";
  const statusLabel = (s: string) =>
    s === "harakatda" ? "Harakatda" : s === "bosh" ? "Bo'sh" : s === "yoqilgi_kam" ? "Yoqilg'i kam" : "Ta'mirda";

  const tripStatusBadge = (s: string) =>
    s === "yolda" ? "bg-blue-500/15 text-blue-400"
    : s === "yetdi" ? "bg-emerald-500/15 text-emerald-400"
    : "bg-gray-500/15 text-gray-400";
  const tripStatusLabel = (s: string) =>
    s === "yolda" ? "Yo'lda" : s === "yetdi" ? "Yetdi" : "Kutmoqda";

  const urgencyBadge = (u: string) =>
    u === "kechikkan" ? "bg-red-500/15 text-red-400"
    : u === "yaqinda" ? "bg-amber-500/15 text-amber-400"
    : "bg-emerald-500/15 text-emerald-400";
  const urgencyLabel = (u: string) =>
    u === "kechikkan" ? "Kechikkan" : u === "yaqinda" ? "Yaqinda" : "Normal";

  const driverStatusBadge = (s: string) =>
    s === "yolda" ? "bg-blue-500/15 text-blue-400"
    : s === "bosh" ? "bg-emerald-500/15 text-emerald-400"
    : "bg-gray-500/15 text-gray-400";
  const driverStatusLabel = (s: string) =>
    s === "yolda" ? "Yo'lda" : s === "bosh" ? "Bo'sh" : "Ta'tilda";

  const onRoadCount = vehicles.filter((v) => v.status === "harakatda").length;

  return (
    <div className="flex flex-col gap-2.5 min-h-[520px]">
      {/* Toast notifications */}
      <div className="fixed top-3 right-3 z-50 flex flex-col gap-1.5 pointer-events-none">
        {toasts.map((t) => (
          <div key={t.id} className={`px-3 py-2 rounded-lg text-[10px] font-medium shadow-lg border backdrop-blur-sm ${
            t.type === "success" ? "bg-emerald-900/90 text-emerald-300 border-emerald-500/40"
            : t.type === "warning" ? "bg-amber-900/90 text-amber-300 border-amber-500/40"
            : "bg-blue-900/90 text-blue-300 border-blue-500/40"
          }`}>{t.msg}</div>
        ))}
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-orange-500/[0.06] border border-orange-500/15">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse flex-shrink-0" />
          <span className="text-[9px] font-medium text-orange-400">ZYRON Fleet v2.0</span>
          <span className="text-[9px] text-gray-600">•</span>
          <span className="text-[9px] text-gray-500">TransLogistics UZ</span>
        </div>
        <div className="flex items-center gap-2 text-[9px] text-gray-500">
          <span className="text-emerald-400 font-medium">Yo'ldagi transport: {onRoadCount}</span>
          <span className="text-gray-700">|</span>
          <span className="font-mono text-gray-400">{clock}</span>
        </div>
      </div>

      {/* Header */}
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

      {/* TAB: Transport */}
      {tab === "transport" && (
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Transport parki</p>
            <span className="text-[10px] text-gray-500">{vehicles.length} ta transport · klik qiling</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {vehicles.map((v) => {
              const isOpen = selectedVehicle === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setSelectedVehicle(isOpen ? null : v.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isOpen ? "bg-orange-500/[0.07] border-orange-500/35" : "bg-white/[0.03] border-white/[0.06] hover:border-orange-500/25"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{v.emoji}</span>
                      <div>
                        <p className="text-[10px] font-bold text-white">{v.model}</p>
                        <p className="text-[8px] font-mono text-orange-400">{v.plate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className={`px-1.5 py-0.5 rounded text-[7px] font-medium ${statusBadge(v.status)}`}>{statusLabel(v.status)}</span>
                      {isOpen ? <ChevronUp size={10} className="text-gray-500" /> : <ChevronDown size={10} className="text-gray-500" />}
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <Fuel size={9} className={fuelText(v.fuel)} />
                    <div className="flex-1 h-1.5 rounded-full bg-white/[0.06]">
                      <div className={`h-full rounded-full ${fuelColor(v.fuel)}`} style={{ width: `${v.fuel}%` }} />
                    </div>
                    <span className={`text-[8px] font-bold ${fuelText(v.fuel)}`}>{v.fuel}%</span>
                    <span className={`flex items-center gap-0.5 text-[8px] ml-1 ${v.gps ? "text-emerald-400" : "text-gray-600"}`}>
                      <MapPin size={8} /> {v.gps ? "GPS" : "Yo'q"}
                    </span>
                  </div>

                  {isOpen && (
                    <div className="mt-2.5 pt-2.5 border-t border-white/[0.08] grid grid-cols-2 gap-1.5">
                      {[
                        { label: "Haydovchi", val: v.driver },
                        { label: "Yuk turi", val: v.cargo },
                        { label: "Umumiy km", val: v.km.toLocaleString() + " km" },
                        { label: "GPS holati", val: v.gps ? "Faol" : "Ulangan emas" },
                      ].map((d) => (
                        <div key={d.label} className="p-1.5 rounded-lg bg-white/[0.04]">
                          <p className="text-[7px] text-gray-600">{d.label}</p>
                          <p className="text-[9px] text-white font-medium">{d.val}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Harakatda", value: vehicles.filter((v) => v.status === "harakatda").length, color: "text-emerald-400" },
              { label: "Bo'sh", value: vehicles.filter((v) => v.status === "bosh").length, color: "text-blue-400" },
              { label: "Yoqilg'i kam", value: vehicles.filter((v) => v.status === "yoqilgi_kam").length, color: "text-amber-400" },
              { label: "Ta'mirda", value: vehicles.filter((v) => v.status === "tamir").length, color: "text-red-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB: Reylar */}
      {tab === "reylar" && (
        <div className="flex-1 flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Bugungi reylar</p>
            <span className="text-[9px] text-blue-400 flex items-center gap-1">
              <Navigation size={9} /> {trips.filter((t) => t.status === "yolda").length} ta yo'lda
            </span>
          </div>

          {/* Active trips with live progress tracker */}
          <div className="space-y-2">
            {trips.filter((t) => t.status === "yolda").map((t) => (
              <div key={t.id} className="p-3 rounded-xl bg-blue-500/[0.06] border border-blue-500/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Navigation size={10} className="text-blue-400" />
                    <span className="text-[10px] font-bold text-white">{t.from} → {t.to}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] text-gray-500 font-mono">{t.vehicle}</span>
                    <span className="px-1.5 py-0.5 rounded text-[7px] font-medium bg-blue-500/15 text-blue-400">Yo'lda</span>
                  </div>
                </div>
                {/* Route progress visual */}
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <div className="flex-1 relative h-1.5 rounded-full bg-white/[0.08]">
                    <div className="h-full rounded-full bg-blue-500/60" style={{ width: `${t.progress}%` }} />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400 border-2 border-blue-900 shadow transition-all"
                      style={{ left: `${Math.min(t.progress, 95)}%` }}
                    />
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                </div>
                <div className="flex justify-between text-[8px] text-gray-600 mb-2">
                  <span>{t.from}</span>
                  <span>{t.progress}% · {Math.round(t.dist * t.progress / 100)} / {t.dist} km</span>
                  <span>{t.to}</span>
                </div>
                <div className="flex items-center gap-3 text-[8px] text-gray-500">
                  <span className="flex items-center gap-1"><User size={8} /> {t.driver}</span>
                  <span className="flex items-center gap-1"><Clock size={8} /> {t.depart} → ETA {t.eta}</span>
                  <span className="ml-auto">{t.cargo}</span>
                </div>
              </div>
            ))}
          </div>

          {/* All trips table */}
          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Marshrut</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Haydovchi</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Km</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Yuk</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {trips.map((t) => (
                  <tr key={t.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1">
                        <MapPin size={8} className="text-orange-400 flex-shrink-0" />
                        <span className="text-gray-300 font-medium">{t.from}</span>
                        <span className="text-gray-600">→</span>
                        <span className="text-gray-400">{t.to}</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400">{t.driver}</td>
                    <td className="py-2 px-2.5 text-right text-gray-400">{t.dist} km</td>
                    <td className="py-2 px-2.5 text-gray-500">{t.cargo}</td>
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className={`px-1.5 py-0.5 rounded text-[7px] font-medium ${completedTrips.has(t.id) ? "bg-emerald-500/15 text-emerald-400" : tripStatusBadge(t.status)}`}>
                          {completedTrips.has(t.id) ? "Yetdi" : tripStatusLabel(t.status)}
                        </span>
                        {!completedTrips.has(t.id) && t.status === "yolda" && (
                          <button
                            onClick={() => { setCompletedTrips((p) => new Set([...p, t.id])); show(`${t.from}→${t.to} reyi yakunlandi`, "success"); }}
                            className="px-1 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[7px] hover:bg-emerald-500/20 transition-colors"
                          >
                            Yakunlash
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Jami masofa</p>
              <p className="text-sm font-bold text-white">{trips.filter(t=>t.status!=="kutmoqda").reduce((s, t) => s + t.dist, 0)} km</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Yo'lda</p>
              <p className="text-sm font-bold text-blue-400">{trips.filter(t=>t.status==="yolda").length}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Yakunlandi</p>
              <p className="text-sm font-bold text-emerald-400">{trips.filter(t=>t.status==="yetdi").length}</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB: Haydovchilar */}
      {tab === "haydovchilar" && (
        <div className="flex-1 flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Haydovchilar</p>
            <span className="text-[10px] text-gray-500">{drivers.length} ta haydovchi</span>
          </div>

          <div className="space-y-2">
            {drivers.map((d) => {
              const isOpen = selectedDriver === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDriver(isOpen ? null : d.id)}
                  className={`w-full p-3 rounded-xl border text-left transition-all ${
                    isOpen ? "bg-orange-500/[0.07] border-orange-500/35" : "bg-white/[0.03] border-white/[0.06] hover:border-orange-500/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] font-bold text-white">{d.name[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-[10px] font-bold text-white">{d.name}</p>
                        <span className={`px-1.5 py-0.5 rounded text-[7px] font-medium ${driverStatusBadge(d.status)}`}>
                          {driverStatusLabel(d.status)}
                        </span>
                      </div>
                      <p className="text-[8px] text-gray-500 font-mono">{d.vehicle} · Kategoriya: {d.license} · {d.trips} reys</p>
                    </div>
                    <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] font-bold text-amber-400">{d.rating}</span>
                        <Star size={9} className="text-amber-400 fill-amber-400" />
                      </div>
                      {isOpen ? <ChevronUp size={9} className="text-gray-500 mt-1" /> : <ChevronDown size={9} className="text-gray-500 mt-1" />}
                    </div>
                  </div>

                  {isOpen && (
                    <div className="mt-2.5 pt-2.5 border-t border-white/[0.08]">
                      <div className="grid grid-cols-2 gap-1.5 mb-2">
                        {[
                          { label: "Telefon", val: d.phone },
                          { label: "Litsenziya", val: "Kategoriya " + d.license },
                          { label: "Jami reys", val: d.trips + " ta" },
                          { label: "Qoidabuzarlik", val: d.violations === 0 ? "Yo'q" : d.violations + " ta" },
                        ].map((info) => (
                          <div key={info.label} className="p-1.5 rounded-lg bg-white/[0.04] flex items-center gap-1.5">
                            {info.label === "Telefon" && <Phone size={8} className="text-gray-500 flex-shrink-0" />}
                            <div>
                              <p className="text-[7px] text-gray-600">{info.label}</p>
                              <p className={`text-[9px] font-medium ${info.label === "Qoidabuzarlik" && d.violations > 0 ? "text-amber-400" : "text-white"}`}>{info.val}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Rating stars full display */}
                      <div className="flex items-center gap-2">
                        <Stars rating={d.rating} />
                        <span className="text-[8px] text-gray-500">Reyting: {d.rating}/5.0</span>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Performance comparison */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[10px] font-bold text-white mb-2">Unumdorlik taqqoslash</p>
            <div className="space-y-1.5">
              {[...drivers].sort((a, b) => b.trips - a.trips).map((d) => (
                <div key={d.id} className="flex items-center gap-2">
                  <span className="text-[9px] text-gray-400 w-20 truncate">{d.name.split(" ")[0]}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full bg-orange-500/60"
                      style={{ width: `${(d.trips / Math.max(...drivers.map(x => x.trips))) * 100}%` }}
                    />
                  </div>
                  <span className="text-[9px] font-bold text-white w-10 text-right">{d.trips} ta</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB: Texnik xizmat */}
      {tab === "texnik" && (
        <div className="flex-1 flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Texnik xizmat jadvali</p>
            <button
              onClick={() => setAddingMaint(!addingMaint)}
              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-orange-500/15 border border-orange-500/25 text-orange-400 text-[9px] hover:bg-orange-500/25 transition-colors"
            >
              <Plus size={10} /> Qo'shish
            </button>
          </div>

          {addingMaint && (
            <div className="p-3 rounded-xl bg-orange-500/[0.06] border border-orange-500/20">
              <p className="text-[10px] font-bold text-white mb-2">Yangi texnik yozuv</p>
              <div className="grid grid-cols-2 gap-2">
                {["Transport", "Xizmat turi", "Sana", "Narx"].map((f) => (
                  <div key={f}>
                    <label className="text-[8px] text-gray-500">{f}</label>
                    <input className="w-full mt-0.5 px-2 py-1 rounded bg-white/[0.05] border border-white/[0.08] text-[9px] text-white placeholder:text-gray-600 focus:outline-none focus:border-orange-500/40" placeholder={f + "..."} />
                  </div>
                ))}
              </div>
              <button
                onClick={() => { setAddingMaint(false); setMaintSaved(true); show("Texnik yozuv saqlandi", "success"); setTimeout(() => setMaintSaved(false), 3000); }}
                className="mt-2 w-full py-1.5 rounded-lg bg-orange-500/20 border border-orange-500/30 text-orange-400 text-[9px] font-medium hover:bg-orange-500/30 transition-colors"
              >
                Saqlash
              </button>
            </div>
          )}

          <div className="space-y-2">
            {maintenance.map((m) => (
              <div key={m.id} className={`p-3 rounded-xl border flex items-start gap-3 ${
                m.urgency === "kechikkan" ? "bg-red-500/[0.06] border-red-500/25"
                : m.urgency === "yaqinda" ? "bg-amber-500/[0.06] border-amber-500/20"
                : "bg-white/[0.03] border-white/[0.06]"
              }`}>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  m.urgency === "kechikkan" ? "bg-red-500/15" : m.urgency === "yaqinda" ? "bg-amber-500/15" : "bg-white/[0.05]"
                }`}>
                  {m.urgency === "kechikkan"
                    ? <AlertTriangle size={11} className="text-red-400" />
                    : <Wrench size={11} className={m.urgency === "yaqinda" ? "text-amber-400" : "text-gray-400"} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="text-[10px] font-bold text-white">{m.type}</p>
                    <span className={`px-1.5 py-0.5 rounded text-[7px] font-medium ${urgencyBadge(m.urgency)}`}>
                      {urgencyLabel(m.urgency)}
                    </span>
                  </div>
                  <p className="text-[9px] text-gray-400 font-mono">{m.vehicle} · {m.model}</p>
                  <div className="flex items-center gap-3 mt-1 text-[8px] text-gray-600">
                    <span>Oxirgi: {m.lastDone}</span>
                    <span>Keyingi: {m.nextDue}</span>
                    <span className={m.urgency === "kechikkan" ? "text-red-400 font-bold" : ""}>{m.kmLeft.toLocaleString()} km qoldi</span>
                    <span className="ml-auto text-gray-500">{fmt(m.cost)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service cost history */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[10px] font-bold text-white mb-2">Oxirgi xizmatlar</p>
            <div className="space-y-1.5">
              {serviceHistory.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-[9px]">
                  <CheckCircle size={9} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-600 w-14">{h.date}</span>
                  <span className="text-gray-400 flex-1">{h.vehicle} · {h.type}</span>
                  <span className="text-white font-medium">{fmt(h.cost)}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-white/[0.06] flex justify-between text-[9px]">
              <span className="text-gray-500">Jami xizmat xarajati</span>
              <span className="font-bold text-orange-400">{fmt(serviceHistory.reduce((s, h) => s + h.cost, 0))}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Kechikkan</p>
              <p className="text-sm font-bold text-red-400">{maintenance.filter((m) => m.urgency === "kechikkan").length}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Yaqinda</p>
              <p className="text-sm font-bold text-amber-400">{maintenance.filter((m) => m.urgency === "yaqinda").length}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Normal</p>
              <p className="text-sm font-bold text-emerald-400">{maintenance.filter((m) => m.urgency === "normal").length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
