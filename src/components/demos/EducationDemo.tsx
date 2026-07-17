"use client";

import { useState } from "react";
import { GraduationCap, Calendar, CreditCard, BookOpen, Phone, Clock, Users, DollarSign, CheckCircle, AlertTriangle } from "lucide-react";

type EduTab = "students" | "schedule" | "payments" | "courses";

const students = [
  { id: 1, name: "Asilbek Normatov", group: "G-12A", course: "Frontend", phone: "+998 90 111 22 33", payStatus: "paid" },
  { id: 2, name: "Dilnoza Xasanova", group: "G-10B", course: "English B2", phone: "+998 91 222 33 44", payStatus: "paid" },
  { id: 3, name: "Murod Qodirov", group: "G-11A", course: "Python", phone: "+998 93 333 44 55", payStatus: "debt" },
  { id: 4, name: "Sarvinoz Aliyeva", group: "G-12A", course: "Frontend", phone: "+998 94 444 55 66", payStatus: "paid" },
  { id: 5, name: "Bekzod Tursunov", group: "G-9C", course: "Matematika", phone: "+998 95 555 66 77", payStatus: "debt" },
  { id: 6, name: "Mohlaroyim Saidova", group: "G-10B", course: "English B2", phone: "+998 97 666 77 88", payStatus: "paid" },
  { id: 7, name: "Eldor Rahimov", group: "G-11B", course: "Python", phone: "+998 99 777 88 99", payStatus: "partial" },
  { id: 8, name: "Kamola Usmonova", group: "G-9C", course: "Matematika", phone: "+998 90 888 99 00", payStatus: "paid" },
];

const schedule = [
  { time: "09:00", mon: "Frontend", tue: null, wed: "Frontend", thu: null, fri: "Frontend", sat: null },
  { time: "10:30", mon: null, tue: "English B2", wed: null, thu: "English B2", fri: null, sat: "English B2" },
  { time: "12:00", mon: "Python", tue: null, wed: "Python", thu: null, fri: "Python", sat: null },
  { time: "14:00", mon: null, tue: "Matematika", wed: null, thu: "Matematika", fri: null, sat: "Matematika" },
  { time: "15:30", mon: "Frontend", tue: null, wed: "Frontend", thu: null, fri: "Frontend", sat: null },
  { time: "17:00", mon: "Python", tue: "English B2", wed: null, thu: "English B2", fri: "Python", sat: null },
];

const days = ["Du", "Se", "Ch", "Pa", "Ju", "Sh"];
const dayKeys = ["mon", "tue", "wed", "thu", "fri", "sat"] as const;

const courseColors: Record<string, string> = {
  "Frontend": "bg-blue-500/20 text-blue-400 border-blue-500/20",
  "English B2": "bg-emerald-500/20 text-emerald-400 border-emerald-500/20",
  "Python": "bg-amber-500/20 text-amber-400 border-amber-500/20",
  "Matematika": "bg-violet-500/20 text-violet-400 border-violet-500/20",
};

const paymentRecords = [
  { name: "Asilbek Normatov", course: "Frontend", paid: 800000, total: 800000, month: "Iyul 2025" },
  { name: "Dilnoza Xasanova", course: "English B2", paid: 600000, total: 600000, month: "Iyul 2025" },
  { name: "Murod Qodirov", course: "Python", paid: 0, total: 700000, month: "Iyul 2025" },
  { name: "Sarvinoz Aliyeva", course: "Frontend", paid: 800000, total: 800000, month: "Iyul 2025" },
  { name: "Bekzod Tursunov", course: "Matematika", paid: 0, total: 500000, month: "Iyul 2025" },
  { name: "Mohlaroyim Saidova", course: "English B2", paid: 600000, total: 600000, month: "Iyul 2025" },
  { name: "Eldor Rahimov", course: "Python", paid: 350000, total: 700000, month: "Iyul 2025" },
  { name: "Kamola Usmonova", course: "Matematika", paid: 500000, total: 500000, month: "Iyul 2025" },
];

const courses = [
  { name: "Frontend Development", teacher: "Bobur Xolmatov", students: 24, duration: "6 oy", price: 800000, level: "O'rta", status: "active" },
  { name: "Python Programming", teacher: "Jasur Mirzaev", students: 18, duration: "4 oy", price: 700000, level: "Boshlang'ich", status: "active" },
  { name: "English B2", teacher: "Nilufar Rahimova", students: 31, duration: "8 oy", price: 600000, level: "B2", status: "active" },
  { name: "Matematika (9-11 sinf)", teacher: "Alisher Karimov", students: 22, duration: "10 oy", price: 500000, level: "Maktab", status: "active" },
  { name: "UI/UX Design", teacher: "Zulfiya Norova", students: 14, duration: "3 oy", price: 900000, level: "O'rta", status: "upcoming" },
];

function fmt(n: number) {
  return n.toLocaleString("uz-UZ") + " so'm";
}

export default function EducationDemo() {
  const [tab, setTab] = useState<EduTab>("students");

  const tabs = [
    { key: "students" as EduTab, label: "O'quvchilar", icon: GraduationCap },
    { key: "schedule" as EduTab, label: "Jadval", icon: Calendar },
    { key: "payments" as EduTab, label: "To'lovlar", icon: CreditCard },
    { key: "courses" as EduTab, label: "Kurslar", icon: BookOpen },
  ];

  const totalPaid = paymentRecords.reduce((s, p) => s + p.paid, 0);
  const totalDebt = paymentRecords.reduce((s, p) => s + (p.total - p.paid), 0);

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

      {/* Students Tab */}
      {tab === "students" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Barcha o'quvchilar</p>
            <div className="flex gap-2 text-[9px]">
              <span className="text-emerald-400">{students.filter((s) => s.payStatus === "paid").length} to'lagan</span>
              <span className="text-amber-400">{students.filter((s) => s.payStatus === "partial").length} qisman</span>
              <span className="text-red-400">{students.filter((s) => s.payStatus === "debt").length} qarzdor</span>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Ism</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Guruh</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Kurs</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Telefon</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">To'lov</th>
                </tr>
              </thead>
              <tbody>
                {students.map((st) => (
                  <tr key={st.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-[7px] font-bold text-white">{st.name[0]}</span>
                        </div>
                        <span className="text-gray-300 font-medium">{st.name}</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400 hidden sm:table-cell">{st.group}</td>
                    <td className="py-2 px-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium border ${courseColors[st.course] || "bg-gray-500/15 text-gray-400"}`}>
                        {st.course}
                      </span>
                    </td>
                    <td className="py-2 px-2.5 hidden sm:table-cell">
                      <div className="flex items-center gap-1 text-gray-400">
                        <Phone size={9} className="text-gray-600" />
                        {st.phone}
                      </div>
                    </td>
                    <td className="py-2 px-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${
                        st.payStatus === "paid" ? "bg-emerald-500/15 text-emerald-400"
                        : st.payStatus === "partial" ? "bg-amber-500/15 text-amber-400"
                        : "bg-red-500/15 text-red-400"
                      }`}>
                        {st.payStatus === "paid" ? "To'langan" : st.payStatus === "partial" ? "Qisman" : "Qarzdor"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Jami o'quvchi", value: students.length, color: "text-white" },
              { label: "To'lagan", value: students.filter((s) => s.payStatus === "paid").length, color: "text-emerald-400" },
              { label: "Qarzdor", value: students.filter((s) => s.payStatus === "debt").length, color: "text-red-400" },
              { label: "Kurslar", value: courses.filter((c) => c.status === "active").length, color: "text-cyan-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Schedule Tab */}
      {tab === "schedule" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Haftalik dars jadvali</p>
            <div className="flex gap-1.5 flex-wrap">
              {Object.entries(courseColors).map(([name, cls]) => (
                <span key={name} className={`text-[7px] px-1.5 py-0.5 rounded border ${cls}`}>{name}</span>
              ))}
            </div>
          </div>
          <div className="overflow-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[9px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2 text-gray-500 font-medium w-12">Vaqt</th>
                  {days.map((d) => (
                    <th key={d} className="text-center py-2 px-1 text-gray-500 font-medium">{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.time} className="border-b border-white/[0.04]">
                    <td className="py-1.5 px-2 text-gray-600 font-mono text-[8px]">{row.time}</td>
                    {dayKeys.map((dk) => {
                      const val = row[dk];
                      return (
                        <td key={dk} className="py-1 px-1 text-center">
                          {val ? (
                            <div className={`px-1 py-0.5 rounded text-[7px] font-medium border ${courseColors[val] || ""}`}>
                              {val.length > 7 ? val.substring(0, 7) + "…" : val}
                            </div>
                          ) : (
                            <div className="h-5" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2.5 grid grid-cols-3 gap-2">
            {[
              { label: "Kunlik darslar", value: "8 ta", icon: Clock },
              { label: "Faol kurslar", value: "4 ta", icon: BookOpen },
              { label: "Faol guruhlar", value: "6 ta", icon: Users },
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
        </div>
      )}

      {/* Payments Tab */}
      {tab === "payments" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Iyul 2025 — To'lovlar</p>
            <div className="flex gap-2 text-[9px]">
              <span className="text-emerald-400 flex items-center gap-0.5"><CheckCircle size={9} /> {fmt(totalPaid)}</span>
              <span className="text-red-400 flex items-center gap-0.5"><AlertTriangle size={9} /> {fmt(totalDebt)} qarz</span>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">O'quvchi</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Kurs</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">To'langan</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Qarz</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {paymentRecords.map((p, i) => {
                  const debt = p.total - p.paid;
                  return (
                    <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                      <td className="py-2 px-2.5 text-gray-300 font-medium">{p.name}</td>
                      <td className="py-2 px-2.5 hidden sm:table-cell">
                        <span className={`text-[8px] px-1.5 py-0.5 rounded border ${courseColors[p.course] || ""}`}>{p.course}</span>
                      </td>
                      <td className="py-2 px-2.5 text-right text-emerald-400">{fmt(p.paid)}</td>
                      <td className="py-2 px-2.5 text-right text-red-400">{debt > 0 ? fmt(debt) : "—"}</td>
                      <td className="py-2 px-2.5">
                        <div className="flex flex-col gap-0.5">
                          <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${p.paid === p.total ? "bg-emerald-500" : p.paid > 0 ? "bg-amber-500" : "bg-red-500"}`}
                              style={{ width: `${(p.paid / p.total) * 100}%` }}
                            />
                          </div>
                          <span className="text-[8px] text-gray-600">{Math.round((p.paid / p.total) * 100)}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-2.5 grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/20">
              <p className="text-[9px] text-gray-500">To'langan</p>
              <p className="text-[11px] font-bold text-emerald-400">{fmt(totalPaid)}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-red-500/[0.08] border border-red-500/20">
              <p className="text-[9px] text-gray-500">Qarzdorlik</p>
              <p className="text-[11px] font-bold text-red-400">{fmt(totalDebt)}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Jami kutilgan</p>
              <p className="text-[11px] font-bold text-white">{fmt(totalPaid + totalDebt)}</p>
            </div>
          </div>
        </div>
      )}

      {/* Courses Tab */}
      {tab === "courses" && (
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Kurslar ro'yxati</p>
            <span className="text-[10px] text-gray-500">{courses.length} ta kurs</span>
          </div>
          {courses.map((course, i) => (
            <div key={i} className={`p-3 rounded-xl bg-white/[0.03] border ${course.status === "upcoming" ? "border-cyan-500/20" : "border-white/[0.06]"}`}>
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <p className="text-[11px] font-bold text-white">{course.name}</p>
                    {course.status === "upcoming" && (
                      <span className="text-[7px] px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">Tez boshlanadi</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-[9px] text-gray-500">
                    <span className="flex items-center gap-0.5">
                      <GraduationCap size={9} /> {course.teacher}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <Clock size={9} /> {course.duration}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <Users size={9} /> {course.students} ta
                    </span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs font-bold text-cyan-400">{fmt(course.price)}</p>
                  <p className="text-[9px] text-gray-500">oyiga</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className={`text-[8px] px-1.5 py-0.5 rounded border ${courseColors[course.name.split(" ")[0]] || "bg-gray-500/15 text-gray-400 border-gray-500/20"}`}>
                  {course.level}
                </span>
                <div className="flex-1 h-1 bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-cyan-500/50"
                    style={{ width: `${Math.min((course.students / 35) * 100, 100)}%` }}
                  />
                </div>
                <span className="text-[8px] text-gray-500">{course.students}/35 joy</span>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Jami o'quvchi", value: courses.reduce((s, c) => s + c.students, 0) + " ta", icon: Users, color: "text-white" },
              { label: "Oylik daromad", value: fmt(paymentRecords.reduce((s, p) => s + p.paid, 0)), icon: DollarSign, color: "text-emerald-400" },
              { label: "Faol kurs", value: courses.filter((c) => c.status === "active").length + " ta", icon: BookOpen, color: "text-cyan-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center gap-1 mb-0.5">
                  <s.icon size={9} className={s.color} />
                  <p className="text-[8px] text-gray-500">{s.label}</p>
                </div>
                <p className={`text-[10px] font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
