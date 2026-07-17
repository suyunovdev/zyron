"use client";

import { useState } from "react";
import { User, Calendar, FileText, Pill, Heart, Clock, CheckCircle, AlertCircle } from "lucide-react";

type MedicalTab = "patients" | "appointments" | "records" | "prescriptions";

const patients = [
  { id: 1, name: "Abdullayev Jamshid", age: 42, blood: "A+", doctor: "Dr. Karimov", status: "inpatient", room: "204" },
  { id: 2, name: "Toshmatova Malika", age: 28, blood: "O-", doctor: "Dr. Rahimova", status: "outpatient", room: "—" },
  { id: 3, name: "Mirzayev Ulugbek", age: 55, blood: "B+", doctor: "Dr. Yusupov", status: "inpatient", room: "108" },
  { id: 4, name: "Holiqova Dilnoza", age: 34, blood: "AB+", doctor: "Dr. Karimov", status: "outpatient", room: "—" },
  { id: 5, name: "Sobirov Doniyor", age: 19, blood: "O+", doctor: "Dr. Rahimova", status: "discharged", room: "—" },
  { id: 6, name: "Nazarova Feruza", age: 61, blood: "A-", doctor: "Dr. Yusupov", status: "inpatient", room: "312" },
];

const appointments = [
  { id: 1, patient: "Abdullayev J.", doctor: "Dr. Karimov", dept: "Kardiologiya", time: "09:00", date: "Bugun", status: "confirmed" },
  { id: 2, name: "Toshmatova M.", doctor: "Dr. Rahimova", dept: "Terapevt", time: "10:30", date: "Bugun", status: "confirmed" },
  { id: 3, patient: "Xoliqov Sanjar", doctor: "Dr. Yusupov", dept: "Nevrologiya", time: "11:00", date: "Bugun", status: "waiting" },
  { id: 4, patient: "Ergasheva Nodira", doctor: "Dr. Karimov", dept: "Kardiologiya", time: "13:30", date: "Bugun", status: "waiting" },
  { id: 5, patient: "Rajabov Timur", doctor: "Dr. Rahimova", dept: "Terapevt", time: "14:00", date: "Ertaga", status: "scheduled" },
  { id: 6, patient: "Umarova Gulnora", doctor: "Dr. Yusupov", dept: "Nevrologiya", time: "15:00", date: "Ertaga", status: "scheduled" },
];

const records = [
  { id: 1, patient: "Abdullayev J.", date: "14 Iyul", diagnosis: "Gipertoniya II daraja", doctor: "Dr. Karimov", type: "Kasallik tarixi" },
  { id: 2, patient: "Mirzayev U.", date: "13 Iyul", diagnosis: "Qandli diabet", doctor: "Dr. Yusupov", type: "Laboratoriya" },
  { id: 3, patient: "Nazarova F.", date: "12 Iyul", diagnosis: "Artrit", doctor: "Dr. Yusupov", type: "Rentgen" },
  { id: 4, patient: "Toshmatova M.", date: "11 Iyul", diagnosis: "Bronxit", doctor: "Dr. Rahimova", type: "Kasallik tarixi" },
  { id: 5, patient: "Sobirov D.", date: "10 Iyul", diagnosis: "ARVI", doctor: "Dr. Rahimova", type: "Retsept" },
];

const prescriptions = [
  { id: 1, patient: "Abdullayev J.", drug: "Amlodipine 10mg", dosage: "1x kuniga", duration: "30 kun", doctor: "Dr. Karimov", status: "active" },
  { id: 2, patient: "Mirzayev U.", drug: "Metformin 500mg", dosage: "2x kuniga", duration: "90 kun", doctor: "Dr. Yusupov", status: "active" },
  { id: 3, patient: "Nazarova F.", drug: "Ibuprofen 400mg", dosage: "3x kuniga", duration: "14 kun", doctor: "Dr. Yusupov", status: "active" },
  { id: 4, patient: "Sobirov D.", drug: "Amoxicillin 500mg", dosage: "3x kuniga", duration: "7 kun", doctor: "Dr. Rahimova", status: "completed" },
  { id: 5, patient: "Toshmatova M.", drug: "Bromhexine 8mg", dosage: "3x kuniga", duration: "10 kun", doctor: "Dr. Rahimova", status: "active" },
];

export default function MedicalDemo() {
  const [tab, setTab] = useState<MedicalTab>("patients");

  const tabs = [
    { key: "patients" as MedicalTab, label: "Bemorlar", icon: User },
    { key: "appointments" as MedicalTab, label: "Qabullar", icon: Calendar },
    { key: "records" as MedicalTab, label: "Yozuvlar", icon: FileText },
    { key: "prescriptions" as MedicalTab, label: "Retseptlar", icon: Pill },
  ];

  const patientStatusColor = (s: string) =>
    s === "inpatient" ? "bg-blue-500/15 text-blue-400"
    : s === "outpatient" ? "bg-emerald-500/15 text-emerald-400"
    : "bg-gray-500/15 text-gray-400";
  const patientStatusLabel = (s: string) =>
    s === "inpatient" ? "Statsionar" : s === "outpatient" ? "Ambulatoriya" : "Chiqarildi";

  const apptStatusColor = (s: string) =>
    s === "confirmed" ? "bg-emerald-500/15 text-emerald-400"
    : s === "waiting" ? "bg-amber-500/15 text-amber-400"
    : "bg-blue-500/15 text-blue-400";
  const apptStatusLabel = (s: string) =>
    s === "confirmed" ? "Tasdiqlandi" : s === "waiting" ? "Kutmoqda" : "Rejalashtirildi";

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
                  ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                  : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
              }`}
            >
              <t.icon size={11} /> {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
          <Heart size={9} className="text-rose-400" />
          <span>{patients.filter((p) => p.status === "inpatient").length} statsionar</span>
        </div>
      </div>

      {tab === "patients" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Bemorlar ro'yxati</p>
            <span className="text-[10px] text-gray-500">{patients.length} ta bemor</span>
          </div>
          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Bemor</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Qon guruhi</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Shifokor</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Xona</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((p) => (
                  <tr key={p.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-[7px] font-bold text-white">{p.name[0]}</span>
                        </div>
                        <div>
                          <p className="text-gray-300 font-medium">{p.name}</p>
                          <p className="text-[8px] text-gray-600">{p.age} yosh</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 hidden sm:table-cell">
                      <span className="px-1.5 py-0.5 rounded bg-rose-500/15 text-rose-400 text-[8px] font-bold">{p.blood}</span>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400 hidden sm:table-cell">{p.doctor}</td>
                    <td className="py-2 px-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${patientStatusColor(p.status)}`}>
                        {patientStatusLabel(p.status)}
                      </span>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400 hidden sm:table-cell">{p.room}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2.5 grid grid-cols-3 gap-2">
            {[
              { label: "Statsionar", value: patients.filter((p) => p.status === "inpatient").length, color: "text-blue-400" },
              { label: "Ambulatoriya", value: patients.filter((p) => p.status === "outpatient").length, color: "text-emerald-400" },
              { label: "Chiqarildi", value: patients.filter((p) => p.status === "discharged").length, color: "text-gray-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "appointments" && (
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Qabul jadvali</p>
            <span className="text-[9px] text-amber-400 flex items-center gap-1"><AlertCircle size={9} /> {appointments.filter((a) => a.status === "waiting").length} kutmoqda</span>
          </div>
          <div className="space-y-1.5">
            {appointments.map((a, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                <div className="w-10 text-center flex-shrink-0">
                  <p className="text-[10px] font-bold text-white">{a.time}</p>
                  <p className="text-[8px] text-gray-600">{a.date}</p>
                </div>
                <div className="w-px h-8 bg-white/[0.06]" />
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-medium text-white">{a.patient || (a as { name?: string }).name}</p>
                  <p className="text-[9px] text-gray-500">{a.doctor} · {a.dept}</p>
                </div>
                <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium flex-shrink-0 ${apptStatusColor(a.status)}`}>
                  {apptStatusLabel(a.status)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "records" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Tibbiy yozuvlar</p>
            <span className="text-[10px] text-gray-500">{records.length} ta yozuv</span>
          </div>
          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Bemor</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Tashxis</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Turi</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Sana</th>
                </tr>
              </thead>
              <tbody>
                {records.map((r) => (
                  <tr key={r.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5 text-gray-300 font-medium">{r.patient}</td>
                    <td className="py-2 px-2.5 text-gray-400">{r.diagnosis}</td>
                    <td className="py-2 px-2.5 hidden sm:table-cell">
                      <span className="px-1.5 py-0.5 rounded bg-rose-500/15 text-rose-400 text-[8px]">{r.type}</span>
                    </td>
                    <td className="py-2 px-2.5 text-gray-500 hidden sm:table-cell">{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === "prescriptions" && (
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Retseptlar</p>
            <span className="text-[9px] text-emerald-400 flex items-center gap-1"><CheckCircle size={9} /> {prescriptions.filter((p) => p.status === "active").length} faol</span>
          </div>
          {prescriptions.map((rx) => (
            <div key={rx.id} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3">
              <div className="w-6 h-6 rounded-lg bg-rose-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Pill size={10} className="text-rose-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-[10px] font-bold text-white">{rx.drug}</p>
                  <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${rx.status === "active" ? "bg-emerald-500/15 text-emerald-400" : "bg-gray-500/15 text-gray-400"}`}>
                    {rx.status === "active" ? "Faol" : "Tugadi"}
                  </span>
                </div>
                <p className="text-[9px] text-gray-400">{rx.patient} · {rx.dosage} · {rx.duration}</p>
                <p className="text-[8px] text-gray-600">{rx.doctor}</p>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-2 mt-1">
            {[
              { label: "Faol retseptlar", value: prescriptions.filter((p) => p.status === "active").length, color: "text-emerald-400" },
              { label: "Tugagan", value: prescriptions.filter((p) => p.status === "completed").length, color: "text-gray-400" },
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
