"use client";

import { useState, useEffect } from "react";
import {
  GraduationCap, Calendar, CreditCard, BookOpen,
  Phone, Clock, Users, Search, Star, Bell,
  CheckCircle, AlertTriangle, ChevronRight, TrendingUp
} from "lucide-react";

type EduTab = "students" | "courses" | "schedule" | "payments";

function fmt(n: number) {
  return n.toLocaleString("uz-UZ") + " so'm";
}

const groupColors: Record<string, string> = {
  "Frontend-1": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Backend-2":  "bg-violet-500/20 text-violet-400 border-violet-500/30",
  "Design-3":   "bg-pink-500/20 text-pink-400 border-pink-500/30",
  "Mobile-4":   "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "Python-5":   "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};

const groupGradient: Record<string, string> = {
  "Frontend-1": "from-blue-500 to-cyan-500",
  "Backend-2":  "from-violet-500 to-purple-500",
  "Design-3":   "from-pink-500 to-rose-500",
  "Mobile-4":   "from-amber-500 to-orange-500",
  "Python-5":   "from-emerald-500 to-teal-500",
};

const students = [
  { id: 1,  name: "Asilbek Normatov",    initials: "AN", group: "Frontend-1", progress: 78, attendance: 94, lastActive: "Bugun",   payStatus: "paid"   },
  { id: 2,  name: "Dilnoza Xasanova",    initials: "DX", group: "Design-3",   progress: 65, attendance: 88, lastActive: "Kecha",   payStatus: "paid"   },
  { id: 3,  name: "Murod Qodirov",       initials: "MQ", group: "Backend-2",  progress: 42, attendance: 75, lastActive: "3 kun",   payStatus: "debt"   },
  { id: 4,  name: "Sarvinoz Aliyeva",    initials: "SA", group: "Frontend-1", progress: 91, attendance: 98, lastActive: "Bugun",   payStatus: "paid"   },
  { id: 5,  name: "Bekzod Tursunov",     initials: "BT", group: "Mobile-4",   progress: 55, attendance: 82, lastActive: "2 kun",   payStatus: "debt"   },
  { id: 6,  name: "Mohlaroyim Saidova",  initials: "MS", group: "Design-3",   progress: 83, attendance: 96, lastActive: "Bugun",   payStatus: "paid"   },
  { id: 7,  name: "Eldor Rahimov",       initials: "ER", group: "Python-5",   progress: 37, attendance: 70, lastActive: "5 kun",   payStatus: "debt"   },
  { id: 8,  name: "Kamola Usmonova",     initials: "KU", group: "Frontend-1", progress: 88, attendance: 92, lastActive: "Bugun",   payStatus: "paid"   },
  { id: 9,  name: "Sherzod Mirzaev",     initials: "SM", group: "Backend-2",  progress: 60, attendance: 85, lastActive: "Kecha",   payStatus: "paid"   },
  { id: 10, name: "Nargiza Xoliqova",    initials: "NX", group: "Python-5",   progress: 72, attendance: 90, lastActive: "Bugun",   payStatus: "paid"   },
];

const courses = [
  { id: 1, name: "React / Frontend",   teacher: "Bobur Xolmatov",   enrolled: 28, capacity: 30, duration: "3 oy", price: 800000, rating: 4.9, reviews: 124, status: "active",   modules: 12, done: 8,  group: "Frontend-1", color: "from-blue-600 to-cyan-600"     },
  { id: 2, name: "Node.js / Backend",  teacher: "Temur Aliyev",     enrolled: 22, capacity: 25, duration: "3 oy", price: 900000, rating: 4.7, reviews:  98, status: "active",   modules: 10, done: 5,  group: "Backend-2",  color: "from-violet-600 to-purple-600" },
  { id: 3, name: "UI/UX Design",       teacher: "Zulfiya Norova",   enrolled: 18, capacity: 20, duration: "3 oy", price: 750000, rating: 4.8, reviews:  87, status: "active",   modules: 8,  done: 4,  group: "Design-3",   color: "from-pink-600 to-rose-600"     },
  { id: 4, name: "Flutter / Mobile",   teacher: "Jasur Mirzaev",    enrolled: 15, capacity: 20, duration: "3 oy", price: 950000, rating: 4.6, reviews:  52, status: "active",   modules: 9,  done: 3,  group: "Mobile-4",   color: "from-amber-600 to-orange-600"  },
  { id: 5, name: "Python / AI",        teacher: "Sarvar Karimov",   enrolled: 20, capacity: 25, duration: "3 oy", price: 850000, rating: 4.5, reviews:  43, status: "upcoming", modules: 11, done: 0,  group: "Python-5",   color: "from-emerald-600 to-teal-600"  },
];

// Schedule: days x slots — value = course id or null
// Slots: 09:00, 11:00, 14:00, 16:00, 18:00
type SlotKey = "s1" | "s2" | "s3" | "s4" | "s5";
const slots: { key: SlotKey; label: string }[] = [
  { key: "s1", label: "09:00" },
  { key: "s2", label: "11:00" },
  { key: "s3", label: "14:00" },
  { key: "s4", label: "16:00" },
  { key: "s5", label: "18:00" },
];
const days = ["Du", "Se", "Ch", "Pa", "Ju", "Sh"];

// schedule[day][slot] = courseId | null
const scheduleData: Record<number, Record<SlotKey, number | null>> = {
  0: { s1: 1, s2: null, s3: 3, s4: null, s5: 2 },
  1: { s1: null, s2: 4, s3: null, s4: 5, s5: null },
  2: { s1: 1, s2: null, s3: 3, s4: null, s5: 2 },
  3: { s1: null, s2: 4, s3: null, s4: 5, s5: null },
  4: { s1: 1, s2: null, s3: 3, s4: null, s5: 2 },
  5: { s1: null, s2: 4, s3: null, s4: null, s5: null },
};

const courseSlotColor: Record<number, string> = {
  1: "bg-blue-500/25 text-blue-300 border-blue-500/30",
  2: "bg-violet-500/25 text-violet-300 border-violet-500/30",
  3: "bg-pink-500/25 text-pink-300 border-pink-500/30",
  4: "bg-amber-500/25 text-amber-300 border-amber-500/30",
  5: "bg-emerald-500/25 text-emerald-300 border-emerald-500/30",
};

const paymentRecords = [
  { id: 1,  name: "Asilbek Normatov",   group: "Frontend-1", amount: 800000, date: "01 Iyul", method: "Payme", receipt: "REC-2847", paid: true  },
  { id: 2,  name: "Dilnoza Xasanova",   group: "Design-3",   amount: 750000, date: "02 Iyul", method: "Click", receipt: "REC-2848", paid: true  },
  { id: 3,  name: "Murod Qodirov",      group: "Backend-2",  amount: 900000, date: null,       method: null,    receipt: null,       paid: false },
  { id: 4,  name: "Sarvinoz Aliyeva",   group: "Frontend-1", amount: 800000, date: "01 Iyul", method: "Naqd",  receipt: "REC-2849", paid: true  },
  { id: 5,  name: "Bekzod Tursunov",    group: "Mobile-4",   amount: 950000, date: null,       method: null,    receipt: null,       paid: false },
  { id: 6,  name: "Mohlaroyim Saidova", group: "Design-3",   amount: 750000, date: "03 Iyul", method: "Click", receipt: "REC-2850", paid: true  },
  { id: 7,  name: "Eldor Rahimov",      group: "Python-5",   amount: 850000, date: null,       method: null,    receipt: null,       paid: false },
  { id: 8,  name: "Kamola Usmonova",    group: "Frontend-1", amount: 800000, date: "02 Iyul", method: "Payme", receipt: "REC-2851", paid: true  },
  { id: 9,  name: "Sherzod Mirzaev",    group: "Backend-2",  amount: 900000, date: "04 Iyul", method: "Naqd",  receipt: "REC-2852", paid: true  },
  { id: 10, name: "Nargiza Xoliqova",   group: "Python-5",   amount: 850000, date: "03 Iyul", method: "Click", receipt: "REC-2853", paid: true  },
];

const methodColor: Record<string, string> = {
  Click: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  Payme: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  Naqd:  "bg-amber-500/15 text-amber-400 border-amber-500/20",
};

const monthlyRevenue = [4200000, 5100000, 4800000, 6200000, 5800000, 7150000, 6850000];
const monthLabels    = ["Yan", "Fev", "Mar", "Apr", "May", "Iyu", "Iyu"];
const maxRev         = Math.max(...monthlyRevenue);

export default function EducationDemo() {
  const [tab, setTab]               = useState<EduTab>("students");
  const [search, setSearch]         = useState("");
  const [groupFilter, setGroupFilter] = useState("Barchasi");
  const [selectedBlock, setSelectedBlock] = useState<{ day: number; slot: SlotKey } | null>(null);
  const [remindedIds, setRemindedIds] = useState<Set<number>>(new Set());
  const [time, setTime] = useState(new Date());
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => { const t = setInterval(() => setTime(new Date()), 60000); return () => clearInterval(t); }, []);
  useEffect(() => { if (toast) { const t = setTimeout(() => setToast(null), 2500); return () => clearTimeout(t); } }, [toast]);

  const tabs = [
    { key: "students"  as EduTab, label: "O'quvchilar", icon: GraduationCap },
    { key: "courses"   as EduTab, label: "Kurslar",      icon: BookOpen      },
    { key: "schedule"  as EduTab, label: "Dars jadvali", icon: Calendar      },
    { key: "payments"  as EduTab, label: "To'lovlar",    icon: CreditCard    },
  ];

  const groups = ["Barchasi", ...Array.from(new Set(students.map((s) => s.group)))];

  const filteredStudents = students.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchGroup  = groupFilter === "Barchasi" || s.group === groupFilter;
    return matchSearch && matchGroup;
  });

  const activeToday   = students.filter((s) => s.lastActive === "Bugun").length;
  const avgProgress   = Math.round(students.reduce((sum, s) => sum + s.progress, 0) / students.length);
  const totalCollected = paymentRecords.filter((p) => p.paid).reduce((s, p) => s + p.amount, 0);
  const totalDebt      = paymentRecords.filter((p) => !p.paid).reduce((s, p) => s + p.amount, 0);
  const target         = paymentRecords.reduce((s, p) => s + p.amount, 0);

  const selectedCourse = selectedBlock
    ? (scheduleData[selectedBlock.day]?.[selectedBlock.slot] ?? null)
    : null;
  const selectedCourseData = selectedCourse ? courses.find((c) => c.id === selectedCourse) : null;

  return (
    <div className="relative flex flex-col gap-2.5 min-h-[520px]">
      {/* Status bar */}
      <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[9px] font-semibold text-white">ZYRON Education</span>
          <span className="text-[8px] text-gray-600">v2.5</span>
          <span className="text-[8px] text-gray-600">•</span>
          <span className="text-[8px] text-gray-500">O'quv markaz</span>
          <span className="text-[8px] text-gray-600">•</span>
          <span className="text-[8px] text-cyan-500/80">Bugun: 18 Iyul, Juma</span>
        </div>
        <span className="text-[8px] text-gray-500 font-mono">
          {time.toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>

      {/* Toast */}
      {toast && <div className="absolute bottom-3 right-3 z-50 px-3 py-1.5 rounded-lg bg-emerald-500/90 text-white text-[10px] font-medium shadow-lg">{toast}</div>}

      {/* Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex gap-1.5 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${
                tab === t.key
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                  : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
              }`}
            >
              <t.icon size={11} /> {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
          <Users size={9} />
          <span>{students.length} ta o'quvchi</span>
        </div>
      </div>

      {/* ── O'QUVCHILAR ── */}
      {tab === "students" && (
        <div className="flex-1 space-y-2.5">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Jami o'quvchi",   value: students.length,  color: "text-white"    },
              { label: "Bugun faol",       value: activeToday,      color: "text-cyan-400" },
              { label: "O'rt. progress",  value: avgProgress + "%", color: "text-emerald-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* Search + group filter */}
          <div className="flex gap-2 flex-wrap">
            <div className="relative flex-1 min-w-[130px]">
              <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="O'quvchi qidirish..."
                className="w-full pl-7 pr-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[10px] text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/40"
              />
            </div>
            <div className="flex gap-1 flex-wrap">
              {groups.map((g) => (
                <button
                  key={g}
                  onClick={() => setGroupFilter(g)}
                  className={`px-2 py-1.5 rounded-lg text-[9px] font-medium transition-colors ${
                    groupFilter === g
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                      : "bg-white/[0.04] text-gray-500 border border-transparent hover:bg-white/[0.06]"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Student list */}
          <div className="space-y-1.5">
            {filteredStudents.map((st) => (
              <div key={st.id} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-colors">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${groupGradient[st.group] || "from-gray-500 to-gray-600"} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-[10px] font-bold text-white">{st.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-[11px] font-semibold text-white">{st.name}</p>
                    <span className={`text-[7px] px-1.5 py-0.5 rounded-full border font-medium ${groupColors[st.group] || ""}`}>{st.group}</span>
                    <span className={`text-[7px] px-1.5 py-0.5 rounded-full font-medium ${
                      st.payStatus === "paid" ? "bg-emerald-500/15 text-emerald-400" : "bg-red-500/15 text-red-400"
                    }`}>
                      {st.payStatus === "paid" ? "To'langan" : "Qarzda"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex-1 flex items-center gap-1.5">
                      <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                          style={{ width: `${st.progress}%` }}
                        />
                      </div>
                      <span className="text-[8px] text-gray-400 w-6">{st.progress}%</span>
                    </div>
                    <span className="text-[8px] text-gray-500">Davomat: <span className="text-gray-300">{st.attendance}%</span></span>
                    <span className="text-[8px] text-gray-600">Faol: {st.lastActive}</span>
                  </div>
                </div>
              </div>
            ))}
            {filteredStudents.length === 0 && (
              <p className="text-[10px] text-gray-600 text-center py-8">Hech narsa topilmadi</p>
            )}
          </div>
        </div>
      )}

      {/* ── KURSLAR ── */}
      {tab === "courses" && (
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Kurslar ro'yxati</p>
            <span className="text-[10px] text-gray-500">{courses.length} ta kurs</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {courses.map((course) => (
              <div key={course.id} className={`p-3 rounded-xl bg-white/[0.03] border transition-colors hover:bg-white/[0.05] ${
                course.status === "upcoming" ? "border-amber-500/20" : "border-white/[0.06]"
              }`}>
                {/* Color header bar */}
                <div className={`w-full h-1 rounded-full bg-gradient-to-r ${course.color} mb-2.5 opacity-70`} />
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <p className="text-[11px] font-bold text-white">{course.name}</p>
                      {course.status === "upcoming" && (
                        <span className="text-[7px] px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/20">Yaqinda</span>
                      )}
                      {course.status === "active" && (
                        <span className="text-[7px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">Faol</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5 text-[9px] text-gray-500">
                      <span className="flex items-center gap-0.5"><GraduationCap size={9} />{course.teacher}</span>
                      <span className="flex items-center gap-0.5"><Clock size={9} />{course.duration}</span>
                      <span className="flex items-center gap-0.5"><Users size={9} />{course.enrolled}</span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[11px] font-bold text-cyan-400">{fmt(course.price)}</p>
                    <p className="text-[8px] text-gray-600">oyiga</p>
                    <div className="flex items-center justify-end gap-0.5 mt-0.5">
                      {[1,2,3,4,5].map((star) => (
                        <Star
                          key={star}
                          size={7}
                          className={star <= Math.round(course.rating) ? "text-amber-400 fill-amber-400" : "text-gray-600"}
                        />
                      ))}
                      <span className="text-[7px] text-gray-500 ml-0.5">{course.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Module progress */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[8px] text-gray-500">Modullar:</span>
                  <div className="flex-1 flex gap-0.5">
                    {Array.from({ length: course.modules }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 h-1.5 rounded-sm ${i < course.done ? `bg-gradient-to-r ${course.color} opacity-80` : "bg-white/[0.08]"}`}
                      />
                    ))}
                  </div>
                  <span className="text-[8px] text-gray-400">{course.done}/{course.modules}</span>
                </div>

                {/* Capacity bar */}
                <div className="flex items-center gap-2">
                  <span className="text-[8px] text-gray-500">Joy:</span>
                  <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${course.color} opacity-60`}
                      style={{ width: `${(course.enrolled / course.capacity) * 100}%` }}
                    />
                  </div>
                  <span className="text-[8px] text-gray-400">{course.enrolled}/{course.capacity}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Jami o'quvchi", value: courses.reduce((s, c) => s + c.enrolled, 0) + " ta", color: "text-white"    },
              { label: "Oylik daromad", value: fmt(courses.filter(c=>c.status==="active").reduce((s,c)=>s+c.price*c.enrolled,0)), color: "text-emerald-400" },
              { label: "Faol kurslar",  value: courses.filter((c) => c.status === "active").length + " ta", color: "text-cyan-400"  },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-[11px] font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── DARS JADVALI ── */}
      {tab === "schedule" && (
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <p className="text-[11px] font-bold text-white">Haftalik dars jadvali</p>
            <div className="flex gap-1.5 flex-wrap">
              {courses.map((c) => (
                <span key={c.id} className={`text-[7px] px-1.5 py-0.5 rounded border ${courseSlotColor[c.id]}`}>
                  {c.name.split("/")[0].trim()}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[9px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2 text-gray-500 font-medium w-12">Vaqt</th>
                  {days.map((d) => (
                    <th key={d} className="text-center py-2 px-1 text-gray-500 font-medium">{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {slots.map((slot) => (
                  <tr key={slot.key} className="border-b border-white/[0.04]">
                    <td className="py-1.5 px-2 text-gray-600 font-mono text-[8px]">{slot.label}</td>
                    {days.map((_, di) => {
                      const cid = scheduleData[di]?.[slot.key] ?? null;
                      const course = cid ? courses.find((c) => c.id === cid) : null;
                      const isSelected = selectedBlock?.day === di && selectedBlock?.slot === slot.key;
                      return (
                        <td key={di} className="py-1 px-1 text-center">
                          {course ? (
                            <button
                              onClick={() => {
                                setSelectedBlock(isSelected ? null : { day: di, slot: slot.key });
                                if (!isSelected) setToast(`${course.name} — ${slot.label} dars tanlandi`);
                              }}
                              className={`w-full px-1 py-1 rounded border text-[7px] font-medium transition-all ${courseSlotColor[course.id]} ${isSelected ? "ring-1 ring-white/30 scale-105" : "hover:opacity-80"}`}
                            >
                              {course.name.split("/")[0].trim()}
                            </button>
                          ) : (
                            <div className="h-6" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Detail panel */}
          {selectedCourseData ? (
            <div className="p-3 rounded-xl bg-white/[0.04] border border-cyan-500/20">
              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${selectedCourseData.color} flex items-center justify-center flex-shrink-0`}>
                  <BookOpen size={14} className="text-white/80" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-bold text-white">{selectedCourseData.name}</p>
                  <div className="flex gap-3 mt-1 text-[9px] text-gray-400">
                    <span className="flex items-center gap-0.5"><GraduationCap size={9} /> {selectedCourseData.teacher}</span>
                    <span className="flex items-center gap-0.5"><Users size={9} /> {selectedCourseData.enrolled} o'quvchi</span>
                    <span className="flex items-center gap-0.5"><Clock size={9} /> 2 soat</span>
                  </div>
                  <div className="mt-1 text-[9px] text-gray-500">
                    Xona: 205 · Guruh: {selectedCourseData.group} · {slots.find(s => s.key === selectedBlock?.slot)?.label}–{String(parseInt(slots.find(s => s.key === selectedBlock?.slot)?.label?.split(":")[0] ?? "9") + 2).padStart(2,"0")}:00
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Kunlik darslar", value: "10 ta", icon: Clock    },
                { label: "Faol kurslar",   value: "5 ta",  icon: BookOpen },
                { label: "Guruhlar",       value: "5 ta",  icon: Users    },
              ].map((s) => (
                <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center gap-2">
                  <s.icon size={14} className="text-cyan-500" />
                  <div>
                    <p className="text-[9px] text-gray-500">{s.label}</p>
                    <p className="text-[11px] font-bold text-white">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── TO'LOVLAR ── */}
      {tab === "payments" && (
        <div className="flex-1 space-y-2.5">
          {/* Monthly revenue chart */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[11px] font-bold text-white">Oylik daromad</p>
              <span className="flex items-center gap-1 text-[9px] text-emerald-400">
                <TrendingUp size={9} /> +18% o'tgan oyga nisbatan
              </span>
            </div>
            <div className="flex items-end gap-1.5 h-[48px]">
              {monthlyRevenue.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div
                    className={`w-full rounded-t transition-colors ${i === monthlyRevenue.length - 1 ? "bg-cyan-500/60" : "bg-cyan-500/25 hover:bg-cyan-500/40"}`}
                    style={{ height: `${(v / maxRev) * 100}%` }}
                  />
                  <span className="text-[7px] text-gray-600">{monthLabels[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Yig'ildi",      value: fmt(totalCollected), bg: "bg-emerald-500/10 border-emerald-500/20", color: "text-emerald-400" },
              { label: "Qarzdorlik",    value: fmt(totalDebt),      bg: "bg-red-500/10 border-red-500/20",         color: "text-red-400"     },
              { label: "To'lov foizi",  value: Math.round((totalCollected / target) * 100) + "%", bg: "bg-cyan-500/10 border-cyan-500/20", color: "text-cyan-400" },
            ].map((s) => (
              <div key={s.label} className={`p-2.5 rounded-lg border ${s.bg}`}>
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-[11px] font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* Payment table */}
          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[520px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">O'quvchi</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Kurs</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Summa</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Sana</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Usul</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Chek</th>
                  <th className="text-center py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {paymentRecords.map((p) => (
                  <tr key={p.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${groupGradient[p.group] || "from-gray-500 to-gray-600"} flex items-center justify-center`}>
                          <span className="text-[7px] font-bold text-white">{p.name[0]}</span>
                        </div>
                        <span className="text-gray-300 font-medium">{p.name}</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5">
                      <span className={`text-[7px] px-1.5 py-0.5 rounded border ${groupColors[p.group] || ""}`}>{p.group}</span>
                    </td>
                    <td className="py-2 px-2.5 text-right text-white font-bold">{fmt(p.amount)}</td>
                    <td className="py-2 px-2.5 text-gray-400">{p.date ?? <span className="text-red-400">—</span>}</td>
                    <td className="py-2 px-2.5">
                      {p.method
                        ? <span className={`text-[7px] px-1.5 py-0.5 rounded border ${methodColor[p.method] || ""}`}>{p.method}</span>
                        : <span className="text-gray-600">—</span>}
                    </td>
                    <td className="py-2 px-2.5 text-gray-500 font-mono text-[8px]">{p.receipt ?? "—"}</td>
                    <td className="py-2 px-2.5 text-center">
                      {p.paid ? (
                        <span className="flex items-center justify-center gap-0.5 text-emerald-400 text-[8px]">
                          <CheckCircle size={9} /> To'langan
                        </span>
                      ) : (
                        <button
                          onClick={() => {
                            setRemindedIds((prev) => { const n = new Set(prev); n.add(p.id); return n; });
                            setToast(`${p.name.split(" ")[0]}ga to'lov eslatmasi jo'natildi`);
                          }}
                          className={`flex items-center justify-center gap-0.5 px-2 py-0.5 rounded text-[8px] transition-colors ${
                            remindedIds.has(p.id)
                              ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                              : "bg-red-500/15 text-red-400 border border-red-500/20 hover:bg-red-500/25"
                          }`}
                        >
                          <Bell size={8} />
                          {remindedIds.has(p.id) ? "Eslatma jo'natildi" : "Eslatish"}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Debtors highlight */}
          <div className="p-2.5 rounded-lg bg-red-500/[0.07] border border-red-500/20">
            <p className="text-[9px] font-semibold text-red-400 mb-1.5 flex items-center gap-1">
              <AlertTriangle size={9} /> Qarzdor o'quvchilar
            </p>
            <div className="flex gap-2 flex-wrap">
              {paymentRecords.filter((p) => !p.paid).map((p) => (
                <div key={p.id} className="flex items-center gap-1 px-2 py-1 rounded-lg bg-red-500/10 border border-red-500/15">
                  <span className="text-[9px] text-gray-300">{p.name.split(" ")[0]}</span>
                  <span className="text-[8px] text-red-400">{fmt(p.amount)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
