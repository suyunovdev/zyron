"use client";

import { useState, useEffect } from "react";
import {
  Users, Stethoscope, FlaskConical, ClipboardList,
  Search, Plus, ChevronDown, ChevronUp, AlertTriangle,
  Clock, CheckCircle, Star, Heart, Phone, Activity,
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

type MedicalTab = "qabulxona" | "bemorlar" | "shifokorlar" | "laboratoriya";

function fmt(n: number) {
  return n.toLocaleString("uz-UZ") + " so'm";
}

type Priority = "Oddiy" | "Shoshilinch";
type QueueStatus = "Kutmoqda" | "Qabulda" | "Tugadi";

type QueuePatient = {
  id: number;
  name: string;
  complaint: string;
  waitMin: number;
  priority: Priority;
  doctor: string;
  status: QueueStatus;
};

const INITIAL_QUEUE: QueuePatient[] = [
  { id: 1, name: "Aziz Karimov", complaint: "Bosh og'riq, isitma", waitMin: 42, priority: "Shoshilinch", doctor: "Dr. Yusupov", status: "Kutmoqda" },
  { id: 2, name: "Nilufar Rahimova", complaint: "Yo'tal, burun bitishi", waitMin: 28, priority: "Oddiy", doctor: "Dr. Karimova", status: "Kutmoqda" },
  { id: 3, name: "Sardor Toshev", complaint: "Qorin og'riq", waitMin: 15, priority: "Oddiy", doctor: "Dr. Mirzayev", status: "Kutmoqda" },
  { id: 4, name: "Dildora Xasanov", complaint: "Ko'krak og'riq, nafas qiynalish", waitMin: 5, priority: "Shoshilinch", doctor: "Dr. Yusupov", status: "Kutmoqda" },
  { id: 5, name: "Jasur Ergashev", complaint: "Tizza og'riq", waitMin: 3, priority: "Oddiy", doctor: "Dr. Mirzayev", status: "Kutmoqda" },
];

type Patient = {
  id: number;
  name: string;
  birthYear: number;
  blood: string;
  phone: string;
  lastVisit: string;
  diagnoses: string[];
  expanded: boolean;
};

const INITIAL_PATIENTS: Patient[] = [
  { id: 1, name: "Malika Sobirov", birthYear: 1985, blood: "A+", phone: "+998 91 111 22 33", lastVisit: "14 Iyul 2026", diagnoses: ["Gipertoniya II", "Migren", "Vitamin D yetishmovchiligi"], expanded: false },
  { id: 2, name: "Bobur Ergashev", birthYear: 1972, blood: "O-", phone: "+998 93 222 33 44", lastVisit: "12 Iyul 2026", diagnoses: ["Qandli diabet tip 2", "Artrit"], expanded: false },
  { id: 3, name: "Zulfiya Nazarova", birthYear: 1990, blood: "B+", phone: "+998 97 333 44 55", lastVisit: "10 Iyul 2026", diagnoses: ["Bronxit", "Allergiya"], expanded: false },
  { id: 4, name: "Kamola Xasanova", birthYear: 2001, blood: "AB+", phone: "+998 94 444 55 66", lastVisit: "09 Iyul 2026", diagnoses: ["Anemiya"], expanded: false },
  { id: 5, name: "Rustam Aliyev", birthYear: 1965, blood: "A-", phone: "+998 99 555 66 77", lastVisit: "07 Iyul 2026", diagnoses: ["Yurak ishemik kasalligi", "Gipertoniya III", "Qandli diabet"], expanded: false },
  { id: 6, name: "Shahlo Qodirov", birthYear: 1995, blood: "O+", phone: "+998 91 666 77 88", lastVisit: "05 Iyul 2026", diagnoses: ["Oshqozon yarasi"], expanded: false },
];

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  appointments: number;
  status: "Qabulda" | "Bo'sh" | "Tanaffus";
  rating: number;
  schedule: string[];
  color: string;
};

const DOCTORS: Doctor[] = [
  { id: 1, name: "Dr. Yusupov A.", specialty: "Kardiolog", appointments: 8, status: "Qabulda", rating: 5, schedule: ["09:00", "10:00", "11:30", "13:00", "14:30", "15:00", "16:00", "17:00"], color: "from-red-500 to-rose-600" },
  { id: 2, name: "Dr. Karimova N.", specialty: "Terapevt", appointments: 12, status: "Qabulda", rating: 5, schedule: ["09:00", "09:30", "10:30", "11:00", "13:00", "13:30", "14:00", "15:00", "15:30", "16:00", "16:30", "17:00"], color: "from-blue-500 to-indigo-600" },
  { id: 3, name: "Dr. Mirzayev S.", specialty: "Nevropatolog", appointments: 6, status: "Bo'sh", rating: 4, schedule: ["10:00", "11:00", "12:00", "14:00", "15:30", "16:30"], color: "from-violet-500 to-purple-600" },
  { id: 4, name: "Dr. Toshmatov B.", specialty: "Stomatolog", appointments: 9, status: "Tanaffus", rating: 4, schedule: ["09:00", "09:30", "10:00", "10:30", "13:00", "13:30", "14:00", "14:30", "15:00"], color: "from-amber-500 to-orange-600" },
  { id: 5, name: "Dr. Rahimova D.", specialty: "Oftalmolog", appointments: 5, status: "Bo'sh", rating: 5, schedule: ["10:00", "11:00", "13:00", "14:00", "16:00"], color: "from-emerald-500 to-teal-600" },
];

type LabResult = {
  id: number;
  patient: string;
  test: string;
  date: string;
  status: "Tayyor" | "Jarayonda" | "Kutilmoqda";
  result?: string;
};

const INITIAL_LAB: LabResult[] = [
  { id: 1, patient: "Aziz Karimov", test: "Qon tahlili", date: "17 Iyl, 08:30", status: "Tayyor", result: "Hb: 11.2 g/dL — PAST" },
  { id: 2, patient: "Nilufar Rahimova", test: "EKG", date: "17 Iyl, 09:00", status: "Tayyor", result: "Ritm: Normal sinus" },
  { id: 3, patient: "Sardor Toshev", test: "Rentgen (ko'krak)", date: "17 Iyl, 09:45", status: "Jarayonda" },
  { id: 4, patient: "Malika Sobirov", test: "MRT (bosh miya)", date: "17 Iyl, 10:30", status: "Kutilmoqda" },
  { id: 5, patient: "Bobur Ergashev", test: "Qon tahlili", date: "17 Iyl, 11:00", status: "Jarayonda" },
  { id: 6, patient: "Zulfiya Nazarova", test: "Siydik tahlili", date: "17 Iyl, 11:30", status: "Tayyor", result: "Leukosit: 6.2 — NORMAL" },
  { id: 7, patient: "Rustam Aliyev", test: "EKG", date: "17 Iyl, 12:00", status: "Kutilmoqda" },
];

const TEST_TYPES = [
  { name: "Qon tahlili", count: 24, color: "bg-red-500/60" },
  { name: "EKG", count: 12, color: "bg-blue-500/60" },
  { name: "Rentgen", count: 8, color: "bg-amber-500/60" },
  { name: "MRT", count: 5, color: "bg-violet-500/60" },
];

const BLOOD_COLORS: Record<string, string> = {
  "A+": "bg-red-500/20 text-red-400 border-red-500/30",
  "A-": "bg-red-700/20 text-red-300 border-red-700/30",
  "B+": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "B-": "bg-blue-700/20 text-blue-300 border-blue-700/30",
  "O+": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "O-": "bg-emerald-700/20 text-emerald-300 border-emerald-700/30",
  "AB+": "bg-violet-500/20 text-violet-400 border-violet-500/30",
  "AB-": "bg-violet-700/20 text-violet-300 border-violet-700/30",
};

export default function MedicalDemo() {
  const [tab, setTab] = useState<MedicalTab>("qabulxona");
  const [queue, setQueue] = useState<QueuePatient[]>(INITIAL_QUEUE);
  const [patients, setPatients] = useState<Patient[]>(INITIAL_PATIENTS);
  const [patientSearch, setPatientSearch] = useState("");
  const [showAddPatient, setShowAddPatient] = useState(false);
  const [newPatient, setNewPatient] = useState({ name: "", birthYear: "", blood: "A+", phone: "" });
  const [lab, setLab] = useState<LabResult[]>(INITIAL_LAB);
  const [viewResult, setViewResult] = useState<number | null>(null);
  const { toast, show } = useToast();
  const clock = useClock();

  const waitingCount = queue.filter((q) => q.status === "Kutmoqda").length;
  const inConsultation = queue.find((q) => q.status === "Qabulda");

  const nextPatient = () => {
    setQueue((prev) => {
      const firstWaiting = prev.find((q) => q.status === "Kutmoqda");
      if (!firstWaiting) return prev;
      show(`Navbatga chaqirildi: ${firstWaiting.name} — ${firstWaiting.doctor}`);
      return prev.map((q) => {
        if (q.status === "Qabulda") return { ...q, status: "Tugadi" as QueueStatus };
        if (q.id === firstWaiting.id) return { ...q, status: "Qabulda" as QueueStatus };
        return q;
      });
    });
  };

  const toggleExpand = (id: number) =>
    setPatients((prev) => prev.map((p) => p.id === id ? { ...p, expanded: !p.expanded } : p));

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(patientSearch.toLowerCase())
  );

  const handleAddPatient = () => {
    if (!newPatient.name.trim()) return;
    setPatients((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: newPatient.name,
        birthYear: parseInt(newPatient.birthYear) || 1990,
        blood: newPatient.blood,
        phone: newPatient.phone || "+998 90 000 00 00",
        lastVisit: "17 Iyl 2026",
        diagnoses: [],
        expanded: false,
      },
    ]);
    setQueue((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: newPatient.name,
        complaint: "Yangi bemor — ko'rik kerak",
        waitMin: 0,
        priority: "Oddiy",
        doctor: "Dr. Karimova",
        status: "Kutmoqda",
      },
    ]);
    show(`Yangi bemor qo'shildi: ${newPatient.name} — navbatga kiritildi`);
    setShowAddPatient(false);
    setNewPatient({ name: "", birthYear: "", blood: "A+", phone: "" });
  };

  const releaseResult = (id: number) => {
    const l = lab.find((l) => l.id === id);
    if (l) show(`Lab natija tayyor: ${l.patient} — ${l.test}`);
    setLab((prev) => prev.map((l) => l.id === id && l.status === "Jarayonda" ? { ...l, status: "Tayyor", result: "Tahlil tayyor — natija me'yor doirasida" } : l));
  };

  const labReady = lab.filter((l) => l.status === "Tayyor").length;
  const labPending = lab.filter((l) => l.status === "Kutilmoqda").length;
  const labInProgress = lab.filter((l) => l.status === "Jarayonda").length;
  const maxTestCount = Math.max(...TEST_TYPES.map((t) => t.count));

  return (
    <div className="flex flex-col gap-2.5 min-h-[520px]">
      {/* Status bar */}
      <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-rose-500/[0.07] border border-rose-500/20 text-[9px]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
          <span className="text-rose-400 font-semibold">ZYRON Medical v3.0</span>
          <span className="text-gray-600">·</span>
          <span className="text-gray-400">Toshkent Tibbiyot Markazi</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-amber-400 font-medium">Navbatda: {waitingCount} bemor</span>
          <span className="text-gray-600">·</span>
          <span className="font-mono">{clock}</span>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-4 right-4 z-50 px-3 py-2 rounded-lg bg-rose-500/90 text-white text-[10px] font-semibold shadow-lg">
          {toast.msg}
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex gap-1.5 flex-wrap">
          {([
            { key: "qabulxona" as MedicalTab, label: "Qabulxona", icon: ClipboardList },
            { key: "bemorlar" as MedicalTab, label: "Bemorlar", icon: Users },
            { key: "shifokorlar" as MedicalTab, label: "Shifokorlar", icon: Stethoscope },
            { key: "laboratoriya" as MedicalTab, label: "Laboratoriya", icon: FlaskConical },
          ]).map((t) => (
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
        <div className="flex items-center gap-1.5 text-[9px]">
          <Heart size={9} className="text-rose-400 animate-pulse" />
          <span className="text-rose-400">{waitingCount} ta navbatda</span>
        </div>
      </div>

      {/* QABULXONA TAB */}
      {tab === "qabulxona" && (
        <div className="flex-1 space-y-2.5">
          {/* In consultation banner */}
          {inConsultation && (
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center gap-3">
              <Activity size={18} className="text-blue-400 flex-shrink-0 animate-pulse" />
              <div className="flex-1">
                <p className="text-[11px] font-bold text-white">Hozir qabulda: {inConsultation.name}</p>
                <p className="text-[9px] text-gray-400">{inConsultation.doctor} · {inConsultation.complaint}</p>
              </div>
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">Qabulda</span>
            </div>
          )}

          {/* Queue list */}
          <div className="space-y-1.5">
            {queue.filter((q) => q.status !== "Tugadi").map((q, idx) => (
              <div
                key={q.id}
                className={`p-2.5 rounded-xl border flex items-center gap-3 transition-all ${
                  q.status === "Qabulda"
                    ? "bg-blue-500/[0.08] border-blue-500/25"
                    : q.priority === "Shoshilinch"
                    ? "bg-red-500/[0.06] border-red-500/20"
                    : "bg-white/[0.03] border-white/[0.06]"
                }`}
              >
                {/* Queue number */}
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-bold ${
                  q.status === "Qabulda"
                    ? "bg-blue-500/30 text-blue-300"
                    : q.priority === "Shoshilinch"
                    ? "bg-red-500/30 text-red-300"
                    : "bg-white/[0.08] text-gray-400"
                }`}>
                  {q.status === "Qabulda" ? "•" : idx + (inConsultation ? 0 : 1)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[11px] font-semibold text-white">{q.name}</span>
                    {q.priority === "Shoshilinch" && (
                      <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30 text-[8px] font-bold">
                        <AlertTriangle size={8} /> Shoshilinch
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-[9px] text-gray-500">
                    <span>{q.complaint}</span>
                    <span className="flex items-center gap-0.5"><Clock size={8} /> {q.waitMin} daq kutdi</span>
                    <span>{q.doctor}</span>
                  </div>
                </div>

                <span className={`text-[8px] px-1.5 py-0.5 rounded border flex-shrink-0 ${
                  q.status === "Qabulda"
                    ? "bg-blue-500/15 text-blue-400 border-blue-500/25"
                    : "bg-amber-500/15 text-amber-400 border-amber-500/25"
                }`}>
                  {q.status}
                </span>
              </div>
            ))}

            {queue.filter((q) => q.status === "Tugadi").map((q) => (
              <div key={q.id} className="p-2 rounded-xl border border-white/[0.04] bg-white/[0.01] flex items-center gap-3 opacity-40">
                <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" />
                <span className="text-[10px] text-gray-500 line-through">{q.name}</span>
                <span className="text-[9px] text-gray-600 ml-auto">{q.complaint}</span>
              </div>
            ))}
          </div>

          {/* Next patient button */}
          <button
            onClick={nextPatient}
            disabled={waitingCount === 0}
            className={`w-full py-2.5 rounded-xl text-[11px] font-semibold transition-all border ${
              waitingCount > 0
                ? "bg-rose-500/20 text-rose-400 border-rose-500/30 hover:bg-rose-500/30 active:scale-[0.99]"
                : "bg-white/[0.03] text-gray-600 border-white/[0.06] cursor-not-allowed"
            }`}
          >
            Keyingi bemor ({waitingCount} ta kutmoqda)
          </button>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Navbatda", value: waitingCount, color: "text-amber-400" },
              { label: "Qabulda", value: queue.filter((q) => q.status === "Qabulda").length, color: "text-blue-400" },
              { label: "Tugadi", value: queue.filter((q) => q.status === "Tugadi").length, color: "text-emerald-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* BEMORLAR TAB */}
      {tab === "bemorlar" && (
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                value={patientSearch}
                onChange={(e) => setPatientSearch(e.target.value)}
                placeholder="Bemor qidirish..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-rose-500/50"
              />
            </div>
            <button
              onClick={() => setShowAddPatient(!showAddPatient)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-rose-500/15 text-rose-400 border border-rose-500/25 text-[10px] font-medium hover:bg-rose-500/25 transition-colors flex-shrink-0"
            >
              <Plus size={10} /> Qo'shish
            </button>
          </div>

          {showAddPatient && (
            <div className="p-3 rounded-xl bg-rose-500/[0.08] border border-rose-500/20 space-y-2">
              <p className="text-[11px] font-bold text-white">Yangi bemor</p>
              <div className="grid grid-cols-2 gap-2">
                <input value={newPatient.name} onChange={(e) => setNewPatient((f) => ({ ...f, name: e.target.value }))}
                  placeholder="To'liq ismi" className="col-span-2 px-2.5 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-rose-500/50" />
                <input value={newPatient.birthYear} onChange={(e) => setNewPatient((f) => ({ ...f, birthYear: e.target.value }))}
                  placeholder="Tug'ilgan yil" className="px-2.5 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-xs text-white placeholder:text-gray-600 focus:outline-none" />
                <select value={newPatient.blood} onChange={(e) => setNewPatient((f) => ({ ...f, blood: e.target.value }))}
                  className="px-2.5 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-xs text-white focus:outline-none">
                  {["A+","A-","B+","B-","O+","O-","AB+","AB-"].map((b) => <option key={b} value={b} className="bg-gray-900">{b}</option>)}
                </select>
                <input value={newPatient.phone} onChange={(e) => setNewPatient((f) => ({ ...f, phone: e.target.value }))}
                  placeholder="+998 90 000 00 00" className="col-span-2 px-2.5 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-xs text-white placeholder:text-gray-600 focus:outline-none" />
              </div>
              <div className="flex gap-2">
                <button onClick={handleAddPatient} className="flex-1 py-1.5 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30 text-[10px] font-medium hover:bg-rose-500/30 transition-colors">
                  Saqlash
                </button>
                <button onClick={() => setShowAddPatient(false)} className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-gray-400 text-[10px] hover:bg-white/[0.08] transition-colors">
                  Bekor
                </button>
              </div>
            </div>
          )}

          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[520px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Bemor</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Qon</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Telefon</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Oxirgi tashrif</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Tashxislar</th>
                  <th className="py-2 px-2.5" />
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((p) => (
                  <>
                    <tr key={p.id} className="border-b border-white/[0.04] hover:bg-white/[0.02] cursor-pointer" onClick={() => toggleExpand(p.id)}>
                      <td className="py-2 px-2.5">
                        <div className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                            <span className="text-[8px] font-bold text-white">{p.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}</span>
                          </div>
                          <div>
                            <p className="text-gray-300 font-medium">{p.name}</p>
                            <p className="text-[8px] text-gray-600">{2026 - p.birthYear} yosh · {p.birthYear}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-2.5">
                        <span className={`px-1.5 py-0.5 rounded border text-[8px] font-bold ${BLOOD_COLORS[p.blood] ?? "bg-gray-500/15 text-gray-400"}`}>{p.blood}</span>
                      </td>
                      <td className="py-2 px-2.5">
                        <span className="flex items-center gap-1 text-gray-500"><Phone size={8} /> {p.phone}</span>
                      </td>
                      <td className="py-2 px-2.5 text-gray-500">{p.lastVisit}</td>
                      <td className="py-2 px-2.5">
                        <span className="px-1.5 py-0.5 rounded bg-rose-500/15 text-rose-400 text-[8px]">{p.diagnoses.length} ta</span>
                      </td>
                      <td className="py-2 px-2.5">
                        {p.expanded ? <ChevronUp size={12} className="text-gray-500" /> : <ChevronDown size={12} className="text-gray-500" />}
                      </td>
                    </tr>
                    {p.expanded && (
                      <tr key={`${p.id}-expanded`} className="border-b border-white/[0.04] bg-white/[0.01]">
                        <td colSpan={6} className="px-3 py-2">
                          <div className="flex flex-wrap gap-1.5">
                            {p.diagnoses.length > 0 ? p.diagnoses.map((d, i) => (
                              <span key={i} className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20 text-[9px]">{d}</span>
                            )) : (
                              <span className="text-[9px] text-gray-600">Tashxis yo'q</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Jami bemorlar", value: patients.length, color: "text-white" },
              { label: "Bugun kelgan", value: 4, color: "text-rose-400" },
              { label: "Faol tashxislar", value: patients.reduce((s, p) => s + p.diagnoses.length, 0), color: "text-amber-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SHIFOKORLAR TAB */}
      {tab === "shifokorlar" && (
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Shifokorlar</p>
            <div className="flex gap-2 text-[9px]">
              <span className="text-blue-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Qabulda: {DOCTORS.filter((d) => d.status === "Qabulda").length}</span>
              <span className="text-emerald-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Bo'sh: {DOCTORS.filter((d) => d.status === "Bo'sh").length}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {DOCTORS.map((doc) => (
              <div
                key={doc.id}
                className={`p-3 rounded-xl border transition-all ${
                  doc.status === "Qabulda"
                    ? "bg-blue-500/[0.06] border-blue-500/20 hover:border-blue-500/30"
                    : doc.status === "Bo'sh"
                    ? "bg-emerald-500/[0.04] border-emerald-500/15 hover:border-emerald-500/25"
                    : "bg-white/[0.03] border-white/[0.06]"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center flex-shrink-0 text-[11px] font-bold text-white ${doc.color}`}>
                    {doc.name.replace("Dr. ", "").split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-bold text-white">{doc.name}</p>
                      <span className={`text-[8px] px-1.5 py-0.5 rounded border ${
                        doc.status === "Qabulda" ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                        : doc.status === "Bo'sh" ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-400 border-amber-500/30"
                      }`}>
                        {doc.status}
                      </span>
                    </div>
                    <p className="text-[9px] text-gray-500">{doc.specialty}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={8} className={i < doc.rating ? "text-amber-400 fill-amber-400" : "text-gray-700"} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-gray-500">Bugungi qabullar</span>
                    <span className="text-white font-bold">{doc.appointments} ta</span>
                  </div>
                  <div className="flex gap-1 flex-wrap">
                    {doc.schedule.map((time, i) => (
                      <span
                        key={i}
                        className={`text-[7px] px-1 py-0.5 rounded font-mono ${
                          i < Math.floor(doc.appointments * 0.6)
                            ? "bg-gray-500/20 text-gray-500 line-through"
                            : "bg-white/[0.06] text-gray-400"
                        }`}
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Jami shifokorlar", value: DOCTORS.length, color: "text-white" },
              { label: "Bugungi qabullar", value: DOCTORS.reduce((s, d) => s + d.appointments, 0), color: "text-rose-400" },
              { label: "O'rtacha reyting", value: (DOCTORS.reduce((s, d) => s + d.rating, 0) / DOCTORS.length).toFixed(1) + " ⭐", color: "text-amber-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-[12px] font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* LABORATORIYA TAB */}
      {tab === "laboratoriya" && (
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Lab natijalari</p>
            <div className="flex gap-2 text-[9px]">
              <span className="text-emerald-400">{labReady} tayyor</span>
              <span className="text-amber-400">{labInProgress} jarayonda</span>
              <span className="text-gray-500">{labPending} kutmoqda</span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Bemor</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Tahlil</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Vaqt</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                  <th className="py-2 px-2.5" />
                </tr>
              </thead>
              <tbody>
                {lab.map((l) => (
                  <>
                    <tr key={l.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                      <td className="py-2 px-2.5">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                            <span className="text-[7px] font-bold text-white">{l.patient[0]}</span>
                          </div>
                          <span className="text-gray-300 font-medium">{l.patient}</span>
                        </div>
                      </td>
                      <td className="py-2 px-2.5 text-gray-400">{l.test}</td>
                      <td className="py-2 px-2.5 text-gray-500 font-mono">{l.date}</td>
                      <td className="py-2 px-2.5">
                        <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium border ${
                          l.status === "Tayyor" ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/25"
                          : l.status === "Jarayonda" ? "bg-amber-500/15 text-amber-400 border-amber-500/25"
                          : "bg-gray-500/15 text-gray-400 border-gray-500/25"
                        }`}>
                          {l.status}
                        </span>
                      </td>
                      <td className="py-2 px-2.5">
                        {l.status === "Tayyor" && (
                          <button
                            onClick={() => setViewResult(viewResult === l.id ? null : l.id)}
                            className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 text-[8px] transition-colors"
                          >
                            Natija
                          </button>
                        )}
                        {l.status === "Jarayonda" && (
                          <button
                            onClick={() => releaseResult(l.id)}
                            className="px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400 hover:bg-amber-500/25 text-[8px] transition-colors"
                          >
                            Tayyor qil
                          </button>
                        )}
                      </td>
                    </tr>
                    {viewResult === l.id && l.result && (
                      <tr key={`${l.id}-result`} className="border-b border-white/[0.04] bg-emerald-500/[0.04]">
                        <td colSpan={5} className="px-3 py-2">
                          <p className="text-[9px] text-emerald-300 font-mono">{l.result}</p>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          {/* Test distribution */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2.5">Tahlil turlari (oylik)</p>
            <div className="space-y-2">
              {TEST_TYPES.map((t) => (
                <div key={t.name}>
                  <div className="flex justify-between text-[9px] mb-1">
                    <span className="text-gray-400">{t.name}</span>
                    <span className="text-white font-medium">{t.count} ta</span>
                  </div>
                  <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${t.color}`}
                      style={{ width: `${(t.count / maxTestCount) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Bugungi tahlillar", value: lab.length, color: "text-white" },
              { label: "Tayyor", value: labReady, color: "text-emerald-400" },
              { label: "Kutilmoqda", value: labPending + labInProgress, color: "text-amber-400" },
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
