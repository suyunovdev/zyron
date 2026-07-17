"use client";

import { useState } from "react";
import { Users, Clock, DollarSign, Calendar, CheckCircle, XCircle, Phone, Briefcase, TrendingUp, AlertCircle } from "lucide-react";

type HRMTab = "employees" | "attendance" | "payroll" | "leave";

const employees = [
  { id: 1, name: "Aziz Sobirov", position: "Frontend Developer", department: "IT", phone: "+998 90 123 45 67", status: "active" },
  { id: 2, name: "Nilufar Rahimova", position: "HR Manager", department: "HR", phone: "+998 91 234 56 78", status: "active" },
  { id: 3, name: "Sardor Toshmatov", position: "Backend Developer", department: "IT", phone: "+998 93 345 67 89", status: "vacation" },
  { id: 4, name: "Dildora Yusupova", position: "Accountant", department: "Finance", phone: "+998 94 456 78 90", status: "active" },
  { id: 5, name: "Jasur Mirzaev", position: "Designer", department: "IT", phone: "+998 95 567 89 01", status: "active" },
  { id: 6, name: "Malika Karimova", position: "Sales Manager", department: "Sales", phone: "+998 97 678 90 12", status: "active" },
  { id: 7, name: "Bobur Xolmatov", position: "DevOps Engineer", department: "IT", phone: "+998 99 789 01 23", status: "vacation" },
  { id: 8, name: "Zulfiya Norova", position: "Project Manager", department: "Management", phone: "+998 90 890 12 34", status: "active" },
];

const attendanceData = [
  { name: "Aziz S.", checkIn: "09:02", checkOut: "18:05", status: "present", hours: "9h 3m" },
  { name: "Nilufar R.", checkIn: "08:55", checkOut: "18:10", status: "present", hours: "9h 15m" },
  { name: "Sardor T.", checkIn: "—", checkOut: "—", status: "vacation", hours: "—" },
  { name: "Dildora Y.", checkIn: "09:45", checkOut: "18:00", status: "late", hours: "8h 15m" },
  { name: "Jasur M.", checkIn: "09:01", checkOut: "18:03", status: "present", hours: "9h 2m" },
  { name: "Malika K.", checkIn: "10:12", checkOut: "19:00", status: "late", hours: "8h 48m" },
  { name: "Bobur X.", checkIn: "—", checkOut: "—", status: "vacation", hours: "—" },
  { name: "Zulfiya N.", checkIn: "08:50", checkOut: "17:55", status: "present", hours: "9h 5m" },
];

const payrollData = [
  { name: "Aziz S.", base: 5000000, bonus: 500000, deductions: 250000, net: 5250000 },
  { name: "Nilufar R.", base: 4500000, bonus: 300000, deductions: 225000, net: 4575000 },
  { name: "Sardor T.", base: 5500000, bonus: 600000, deductions: 275000, net: 5825000 },
  { name: "Dildora Y.", base: 4000000, bonus: 200000, deductions: 200000, net: 4000000 },
  { name: "Jasur M.", base: 4200000, bonus: 350000, deductions: 210000, net: 4340000 },
  { name: "Malika K.", base: 4800000, bonus: 800000, deductions: 240000, net: 5360000 },
  { name: "Bobur X.", base: 5200000, bonus: 450000, deductions: 260000, net: 5390000 },
  { name: "Zulfiya N.", base: 6000000, bonus: 700000, deductions: 300000, net: 6400000 },
];

const leaveRequests = [
  { id: 1, name: "Sardor T.", type: "Mehnat ta'tili", from: "15 Iyul", to: "29 Iyul", days: 14, status: "approved" },
  { id: 2, name: "Bobur X.", type: "Mehnat ta'tili", from: "10 Iyul", to: "24 Iyul", days: 14, status: "approved" },
  { id: 3, name: "Malika K.", type: "Kasal ta'tili", from: "17 Iyul", to: "19 Iyul", days: 3, status: "pending" },
  { id: 4, name: "Jasur M.", type: "Shaxsiy", from: "20 Iyul", to: "20 Iyul", days: 1, status: "pending" },
  { id: 5, name: "Dildora Y.", type: "Mehnat ta'tili", from: "01 Avg", to: "15 Avg", days: 15, status: "pending" },
];

function fmt(n: number) {
  return n.toLocaleString("uz-UZ") + " so'm";
}

export default function HRMDemo() {
  const [tab, setTab] = useState<HRMTab>("employees");
  const [leaveStatuses, setLeaveStatuses] = useState<Record<number, string>>(
    Object.fromEntries(leaveRequests.map((r) => [r.id, r.status]))
  );

  const tabs = [
    { key: "employees" as HRMTab, label: "Xodimlar", icon: Users },
    { key: "attendance" as HRMTab, label: "Davomat", icon: Clock },
    { key: "payroll" as HRMTab, label: "Ish haqi", icon: DollarSign },
    { key: "leave" as HRMTab, label: "Ta'til", icon: Calendar },
  ];

  const approveLeave = (id: number) => setLeaveStatuses((p) => ({ ...p, [id]: "approved" }));
  const rejectLeave = (id: number) => setLeaveStatuses((p) => ({ ...p, [id]: "rejected" }));

  const lateCount = attendanceData.filter((a) => a.status === "late").length;
  const presentCount = attendanceData.filter((a) => a.status === "present").length;

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
                  ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                  : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
              }`}
            >
              <t.icon size={11} /> {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{employees.filter((e) => e.status === "active").length} faol</span>
        </div>
      </div>

      {/* Employees Tab */}
      {tab === "employees" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Barcha xodimlar</p>
            <span className="text-[10px] text-gray-500">{employees.length} ta xodim</span>
          </div>
          <div className="overflow-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Ism</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Lavozim</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Bo'lim</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Telefon</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-[7px] font-bold text-white">{emp.name[0]}</span>
                        </div>
                        <span className="text-gray-300 font-medium">{emp.name}</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400">
                      <div className="flex items-center gap-1">
                        <Briefcase size={9} className="text-gray-600" />
                        {emp.position}
                      </div>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400 hidden sm:table-cell">{emp.department}</td>
                    <td className="py-2 px-2.5 hidden sm:table-cell">
                      <div className="flex items-center gap-1 text-gray-400">
                        <Phone size={9} className="text-gray-600" />
                        {emp.phone}
                      </div>
                    </td>
                    <td className="py-2 px-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${
                        emp.status === "active"
                          ? "bg-emerald-500/15 text-emerald-400"
                          : "bg-amber-500/15 text-amber-400"
                      }`}>
                        {emp.status === "active" ? "Faol" : "Ta'tilda"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Jami xodim", value: employees.length, color: "text-white" },
              { label: "Faol", value: employees.filter((e) => e.status === "active").length, color: "text-emerald-400" },
              { label: "Ta'tilda", value: employees.filter((e) => e.status === "vacation").length, color: "text-amber-400" },
              { label: "Bo'limlar", value: new Set(employees.map((e) => e.department)).size, color: "text-violet-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Attendance Tab */}
      {tab === "attendance" && (
        <div className="flex-1 space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Keldi", value: presentCount, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
              { label: "Kech keldi", value: lateCount, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
              { label: "Ta'tilda", value: 2, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
              { label: "Kelmadi", value: 0, color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
            ].map((s) => (
              <div key={s.label} className={`p-2.5 rounded-lg border ${s.bg}`}>
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          <div className="overflow-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Xodim</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Kelish</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Ketish</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Soat</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((a, i) => (
                  <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5 text-gray-300 font-medium">{a.name}</td>
                    <td className="py-2 px-2.5 text-gray-400 font-mono">{a.checkIn}</td>
                    <td className="py-2 px-2.5 text-gray-400 font-mono">{a.checkOut}</td>
                    <td className="py-2 px-2.5 text-gray-400 hidden sm:table-cell">{a.hours}</td>
                    <td className="py-2 px-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${
                        a.status === "present" ? "bg-emerald-500/15 text-emerald-400"
                        : a.status === "late" ? "bg-amber-500/15 text-amber-400"
                        : "bg-blue-500/15 text-blue-400"
                      }`}>
                        {a.status === "present" ? "Keldi" : a.status === "late" ? "Kech" : "Ta'til"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2">Bugungi davomat</p>
            <div className="flex items-end gap-1 h-[40px]">
              {[85, 92, 88, 76, 95, 90].map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full rounded-t bg-violet-500/30" style={{ height: `${v}%` }} />
                  <span className="text-[7px] text-gray-600">{["Dush", "Sesh", "Chor", "Pay", "Jum", "Shan"][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Payroll Tab */}
      {tab === "payroll" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-bold text-white">Iyul 2025 — Ish haqi</p>
            <div className="flex items-center gap-1 text-[9px]">
              <TrendingUp size={10} className="text-emerald-400" />
              <span className="text-emerald-400">Jami: {fmt(payrollData.reduce((s, p) => s + p.net, 0))}</span>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Xodim</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Asosiy</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Bonus</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Chegirma</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Sof</th>
                </tr>
              </thead>
              <tbody>
                {payrollData.map((p, i) => (
                  <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5 text-gray-300 font-medium">{p.name}</td>
                    <td className="py-2 px-2.5 text-right text-gray-400">{fmt(p.base)}</td>
                    <td className="py-2 px-2.5 text-right text-emerald-400 hidden sm:table-cell">+{fmt(p.bonus)}</td>
                    <td className="py-2 px-2.5 text-right text-red-400 hidden sm:table-cell">-{fmt(p.deductions)}</td>
                    <td className="py-2 px-2.5 text-right text-white font-bold">{fmt(p.net)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Jami asosiy", value: fmt(payrollData.reduce((s, p) => s + p.base, 0)), color: "text-white" },
              { label: "Jami bonus", value: fmt(payrollData.reduce((s, p) => s + p.bonus, 0)), color: "text-emerald-400" },
              { label: "Chegirmalar", value: fmt(payrollData.reduce((s, p) => s + p.deductions, 0)), color: "text-red-400" },
              { label: "Sof to'lov", value: fmt(payrollData.reduce((s, p) => s + p.net, 0)), color: "text-violet-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-[11px] font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Leave Tab */}
      {tab === "leave" && (
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Ta'til so'rovlari</p>
            <div className="flex gap-2 text-[9px]">
              <span className="text-amber-400 flex items-center gap-1"><AlertCircle size={9} /> {Object.values(leaveStatuses).filter((s) => s === "pending").length} kutmoqda</span>
              <span className="text-emerald-400 flex items-center gap-1"><CheckCircle size={9} /> {Object.values(leaveStatuses).filter((s) => s === "approved").length} tasdiqlandi</span>
            </div>
          </div>
          <div className="space-y-2">
            {leaveRequests.map((req) => {
              const status = leaveStatuses[req.id];
              return (
                <div key={req.id} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-[8px] font-bold text-white">{req.name[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-[11px] font-medium text-white">{req.name}</p>
                      <span className="text-[9px] text-gray-500">{req.type}</span>
                    </div>
                    <p className="text-[9px] text-gray-500">{req.from} — {req.to} · {req.days} kun</p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {status === "pending" ? (
                      <>
                        <button
                          onClick={() => approveLeave(req.id)}
                          className="flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-400 text-[9px] hover:bg-emerald-500/25 transition-colors border border-emerald-500/20"
                        >
                          <CheckCircle size={9} /> Tasdiqlash
                        </button>
                        <button
                          onClick={() => rejectLeave(req.id)}
                          className="flex items-center gap-1 px-2 py-1 rounded-md bg-red-500/15 text-red-400 text-[9px] hover:bg-red-500/25 transition-colors border border-red-500/20"
                        >
                          <XCircle size={9} /> Rad etish
                        </button>
                      </>
                    ) : (
                      <span className={`px-2 py-1 rounded-md text-[9px] font-medium ${
                        status === "approved"
                          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                          : "bg-red-500/15 text-red-400 border border-red-500/20"
                      }`}>
                        {status === "approved" ? "Tasdiqlandi" : "Rad etildi"}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Bu oy ta'til</p>
              <p className="text-sm font-bold text-white">4 xodim</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Jami kunlar</p>
              <p className="text-sm font-bold text-amber-400">47 kun</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Kutmoqda</p>
              <p className="text-sm font-bold text-emerald-400">{Object.values(leaveStatuses).filter((s) => s === "pending").length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
