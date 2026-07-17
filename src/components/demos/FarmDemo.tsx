"use client";

import { useState } from "react";
import { Leaf, Cpu, Cloud, BarChart2, Thermometer, Droplets, Wind, Sun } from "lucide-react";

type FarmTab = "fields" | "sensors" | "crops" | "weather";

const fields = [
  { id: 1, name: "Dala #1 — G'alla", area: 12.5, location: "Shimoliy sektor", crop: "Bug'doy", status: "active", health: 92 },
  { id: 2, name: "Dala #2 — Makkajo'xori", area: 8.3, location: "Janubiy sektor", crop: "Makkajo'xori", status: "active", health: 78 },
  { id: 3, name: "Dala #3 — Sabzavot", area: 4.1, location: "G'arbiy sektor", crop: "Pomidor", status: "harvest", health: 95 },
  { id: 4, name: "Dala #4 — Bog'", area: 6.7, location: "Sharqiy sektor", crop: "Olma", status: "active", health: 85 },
  { id: 5, name: "Dala #5 — Kartoshka", area: 5.2, location: "Markaziy sektor", crop: "Kartoshka", status: "fallow", health: 0 },
];

const sensors = [
  { id: "S-01", field: "Dala #1", type: "Tuproq", temp: 24.3, humidity: 62, soil: 48, battery: 87, status: "online" },
  { id: "S-02", field: "Dala #2", type: "Havo", temp: 31.7, humidity: 45, soil: 35, battery: 62, status: "online" },
  { id: "S-03", field: "Dala #3", type: "Tuproq", temp: 22.1, humidity: 71, soil: 65, battery: 91, status: "online" },
  { id: "S-04", field: "Dala #4", type: "Havo", temp: 28.9, humidity: 55, soil: 52, battery: 23, status: "low_battery" },
  { id: "S-05", field: "Dala #5", type: "Tuproq", temp: 19.5, humidity: 38, soil: 28, battery: 0, status: "offline" },
];

const crops = [
  { id: 1, name: "Bug'doy", field: "Dala #1", planted: "15 Mart", harvest: "20 Avg", growth: 72, yield: "4.2 t/ga" },
  { id: 2, name: "Makkajo'xori", field: "Dala #2", planted: "1 Aprel", harvest: "10 Sen", growth: 58, yield: "6.8 t/ga" },
  { id: 3, name: "Pomidor", field: "Dala #3", planted: "10 Fevral", harvest: "Tayyor", growth: 100, yield: "18.5 t/ga" },
  { id: 4, name: "Olma", field: "Dala #4", planted: "2019 yil", harvest: "Sen-Okt", growth: 65, yield: "12.3 t/ga" },
];

const weatherData = [
  { day: "Dush", temp: 32, rain: 0, icon: "sun" },
  { day: "Sesh", temp: 30, rain: 5, icon: "cloud" },
  { day: "Chor", temp: 28, rain: 15, icon: "rain" },
  { day: "Pay", temp: 27, rain: 20, icon: "rain" },
  { day: "Jum", temp: 31, rain: 0, icon: "sun" },
  { day: "Shan", temp: 33, rain: 0, icon: "sun" },
  { day: "Yak", temp: 34, rain: 0, icon: "sun" },
];

export default function FarmDemo() {
  const [tab, setTab] = useState<FarmTab>("fields");

  const tabs = [
    { key: "fields" as FarmTab, label: "Dalalar", icon: Leaf },
    { key: "sensors" as FarmTab, label: "Sensorlar", icon: Cpu },
    { key: "crops" as FarmTab, label: "Ekinlar", icon: BarChart2 },
    { key: "weather" as FarmTab, label: "Ob-havo", icon: Cloud },
  ];

  const fieldStatusColor = (s: string) =>
    s === "active" ? "bg-emerald-500/15 text-emerald-400"
    : s === "harvest" ? "bg-amber-500/15 text-amber-400"
    : "bg-gray-500/15 text-gray-400";
  const fieldStatusLabel = (s: string) =>
    s === "active" ? "Faol" : s === "harvest" ? "Hosil" : "Dam olmoqda";

  const sensorStatusColor = (s: string) =>
    s === "online" ? "bg-emerald-500/15 text-emerald-400"
    : s === "low_battery" ? "bg-amber-500/15 text-amber-400"
    : "bg-red-500/15 text-red-400";
  const sensorStatusLabel = (s: string) =>
    s === "online" ? "Ishlaydi" : s === "low_battery" ? "Batareya kam" : "Oflayn";

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
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
              }`}
            >
              <t.icon size={11} /> {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span>{sensors.filter((s) => s.status === "online").length} sensor faol</span>
        </div>
      </div>

      {tab === "fields" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Dala xaritasi</p>
            <span className="text-[10px] text-gray-500">{fields.reduce((s, f) => s + f.area, 0).toFixed(1)} ga jami</span>
          </div>
          <div className="space-y-1.5">
            {fields.map((f) => (
              <div key={f.id} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-green-500/15 flex items-center justify-center flex-shrink-0">
                  <Leaf size={12} className="text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[10px] font-bold text-white">{f.name}</p>
                    <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${fieldStatusColor(f.status)}`}>
                      {fieldStatusLabel(f.status)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[8px] text-gray-500 mb-1">
                    <span>{f.area} ga</span>
                    <span>{f.location}</span>
                  </div>
                  {f.health > 0 && (
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 rounded-full bg-white/[0.06]">
                        <div
                          className={`h-full rounded-full ${f.health > 85 ? "bg-emerald-400" : f.health > 65 ? "bg-amber-400" : "bg-red-400"}`}
                          style={{ width: `${f.health}%` }}
                        />
                      </div>
                      <span className="text-[8px] text-gray-500">{f.health}% sog'lom</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "sensors" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">IoT Sensorlar</p>
            <span className="text-[9px] text-red-400">{sensors.filter((s) => s.status === "offline").length} oflayn</span>
          </div>
          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Sensor</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Dala</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Harorat</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Namlik</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Tuproq</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {sensors.map((s) => (
                  <tr key={s.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1.5">
                        <Cpu size={9} className="text-green-400" />
                        <span className="text-gray-300 font-mono font-medium">{s.id}</span>
                        <span className="text-[8px] text-gray-600">{s.type}</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400 hidden sm:table-cell">{s.field}</td>
                    <td className="py-2 px-2.5 text-right">
                      <div className="flex items-center justify-end gap-0.5">
                        <Thermometer size={8} className="text-orange-400" />
                        <span className={`font-bold ${s.temp > 30 ? "text-orange-400" : "text-white"}`}>{s.temp}°C</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 text-right">
                      <div className="flex items-center justify-end gap-0.5">
                        <Droplets size={8} className="text-blue-400" />
                        <span className="text-white font-bold">{s.humidity}%</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 text-right text-gray-400 hidden sm:table-cell">{s.soil}%</td>
                    <td className="py-2 px-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${sensorStatusColor(s.status)}`}>
                        {sensorStatusLabel(s.status)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2.5 grid grid-cols-3 gap-2">
            {[
              { label: "O'rtacha harorat", value: (sensors.filter(s=>s.status!=="offline").reduce((a,s)=>a+s.temp,0)/sensors.filter(s=>s.status!=="offline").length).toFixed(1)+"°C", color: "text-orange-400" },
              { label: "O'rtacha namlik", value: Math.round(sensors.filter(s=>s.status!=="offline").reduce((a,s)=>a+s.humidity,0)/sensors.filter(s=>s.status!=="offline").length)+"%", color: "text-blue-400" },
              { label: "Faol sensorlar", value: sensors.filter((s) => s.status === "online").length+"/"+sensors.length, color: "text-emerald-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "crops" && (
        <div className="flex-1 space-y-2">
          <p className="text-[11px] font-bold text-white">Ekin holati</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {crops.map((c) => (
              <div key={c.id} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-green-500/15 flex items-center justify-center">
                      <Leaf size={10} className="text-green-400" />
                    </div>
                    <p className="text-[10px] font-bold text-white">{c.name}</p>
                  </div>
                  <span className="text-[9px] text-green-400 font-bold">{c.yield}</span>
                </div>
                <p className="text-[8px] text-gray-500 mb-1.5">{c.field} · Hosil: {c.harvest}</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full bg-white/[0.06]">
                    <div
                      className={`h-full rounded-full transition-all ${c.growth === 100 ? "bg-amber-400" : "bg-green-400"}`}
                      style={{ width: `${c.growth}%` }}
                    />
                  </div>
                  <span className="text-[8px] text-gray-500">{c.growth}%</span>
                </div>
                <div className="grid grid-cols-2 gap-1 mt-2 text-[8px]">
                  <div className="p-1.5 rounded bg-white/[0.03]">
                    <p className="text-gray-600">Ekildi</p>
                    <p className="text-white">{c.planted}</p>
                  </div>
                  <div className="p-1.5 rounded bg-white/[0.03]">
                    <p className="text-gray-600">Hosil</p>
                    <p className={c.growth === 100 ? "text-amber-400 font-bold" : "text-white"}>{c.harvest}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "weather" && (
        <div className="flex-1 space-y-2.5">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="flex items-center gap-3 mb-3">
              <Sun size={24} className="text-amber-400" />
              <div>
                <p className="text-2xl font-bold text-white">32°C</p>
                <p className="text-[10px] text-gray-500">Toshkent viloyati · Bugun</p>
              </div>
              <div className="ml-auto grid grid-cols-3 gap-2 text-[9px]">
                {[
                  { icon: Droplets, label: "Namlik", value: "45%", color: "text-blue-400" },
                  { icon: Wind, label: "Shamol", value: "12 km/h", color: "text-gray-400" },
                  { icon: Cloud, label: "Bulut", value: "10%", color: "text-gray-300" },
                ].map((w) => (
                  <div key={w.label} className="text-center">
                    <w.icon size={12} className={`mx-auto mb-0.5 ${w.color}`} />
                    <p className={`font-bold ${w.color}`}>{w.value}</p>
                    <p className="text-gray-600">{w.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[10px] font-bold text-white mb-2">7 kunlik prognoz</p>
            <div className="grid grid-cols-7 gap-1">
              {weatherData.map((d, i) => (
                <div key={i} className={`p-1.5 rounded-lg text-center ${i === 0 ? "bg-green-500/15 border border-green-500/20" : "bg-white/[0.02]"}`}>
                  <p className="text-[8px] text-gray-500 mb-0.5">{d.day}</p>
                  {d.icon === "sun" ? <Sun size={10} className="text-amber-400 mx-auto mb-0.5" />
                  : d.icon === "cloud" ? <Cloud size={10} className="text-gray-400 mx-auto mb-0.5" />
                  : <Droplets size={10} className="text-blue-400 mx-auto mb-0.5" />}
                  <p className="text-[9px] font-bold text-white">{d.temp}°</p>
                  {d.rain > 0 && <p className="text-[7px] text-blue-400">{d.rain}mm</p>}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Yog'ingarchilik", value: "5 kun", color: "text-blue-400" },
              { label: "Suv berfunksional", value: "Kerak emas", color: "text-emerald-400" },
              { label: "Hosil uchun", value: "Qulay", color: "text-amber-400" },
              { label: "Ob-havo xavfi", value: "Yo'q", color: "text-gray-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-[11px] font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
