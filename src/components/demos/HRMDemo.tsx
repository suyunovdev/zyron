"use client";

import { useState, useEffect } from "react";
import {
  Users, Clock, DollarSign, Calendar, CheckCircle, XCircle,
  Phone, Search, Eye, EyeOff, TrendingUp, AlertCircle,
  Plus, ChevronDown, ChevronUp, Banknote, User
} from "lucide-react";

type HRMTab = "employees" | "attendance" | "payroll" | "leave";

function fmt(n: number) {
  return n.toLocaleString("uz-UZ") + " so'm";
}

const deptColor: Record<string, string> = {
  IT: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  HR: "bg-green-500/20 text-green-400 border-green-500/30",
  Finance: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Sales: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Marketing: "bg-pink-500/20 text-pink-400 border-pink-500/30",
};

const deptGradient: Record<string, string> = {
  IT: "from-blue-500 to-cyan-500",
  HR: "from-green-500 to-emerald-500",
  Finance: "from-purple-500 to-violet-500",
  Sales: "from-orange-500 to-amber-500",
  Marketing: "from-pink-500 to-rose-500",
};

const employees = [
  { id: 1, name: "Aziz Sobirov",      initials: "AS", position: "Senior Frontend Dev",  dept: "IT",        phone: "+998 90 123 45 67", hire: "12 Mar 2022", salary: 8500000, status: "active"   },
  { id: 2, name: "Nilufar Rahimova",  initials: "NR", position: "HR Manager",            dept: "HR",        phone: "+998 91 234 56 78", hire: "05 Jan 2021", salary: 6200000, status: "active"   },
  { id: 3, name: "Sardor Toshmatov",  initials: "ST", position: "Backend Developer",     dept: "IT",        phone: "+998 93 345 67 89", hire: "20 Jun 2023", salary: 7800000, status: "leave"    },
  { id: 4, name: "Dildora Yusupova",  initials: "DY", position: "Chief Accountant",      dept: "Finance",   phone: "+998 94 456 78 90", hire: "01 Sep 2020", salary: 6800000, status: "active"   },
  { id: 5, name: "Jasur Mirzaev",     initials: "JM", position: "UX/UI Designer",        dept: "IT",        phone: "+998 95 567 89 01", hire: "14 Feb 2023", salary: 5900000, status: "active"   },
  { id: 6, name: "Malika Karimova",   initials: "MK", position: "Sales Manager",         dept: "Sales",     phone: "+998 97 678 90 12", hire: "08 Nov 2021", salary: 7200000, status: "active"   },
  { id: 7, name: "Bobur Xolmatov",    initials: "BX", position: "DevOps Engineer",       dept: "IT",        phone: "+998 99 789 01 23", hire: "30 Apr 2022", salary: 9100000, status: "active"   },
  { id: 8, name: "Zulfiya Norova",    initials: "ZN", position: "Marketing Lead",        dept: "Marketing", phone: "+998 90 890 12 34", hire: "17 Jul 2022", salary: 6500000, status: "active"   },
  { id: 9, name: "Temur Aliyev",      initials: "TA", position: "Finance Analyst",       dept: "Finance",   phone: "+998 93 901 23 45", hire: "22 Oct 2023", salary: 5400000, status: "active"   },
  { id:10, name: "Shahnoza Qodirova", initials: "SQ", position: "SMM Specialist",        dept: "Marketing", phone: "+998 94 012 34 56", hire: "03 Mar 2024", salary: 4800000, status: "leave"    },
];

const attendance = [
  { name: "Aziz Sobirov",      initials: "AS", dept: "IT",        checkIn: "08:58", checkOut: "18:04", hours: "9s 6d"  },
  { name: "Nilufar Rahimova",  initials: "NR", dept: "HR",        checkIn: "08:45", checkOut: "17:52", hours: "9s 7d"  },
  { name: "Sardor Toshmatov",  initials: "ST", dept: "IT",        checkIn: null,    checkOut: null,    hours: null      },
  { name: "Dildora Yusupova",  initials: "DY", dept: "Finance",   checkIn: "09:22", checkOut: "18:10", hours: "8s 48d" },
  { name: "Jasur Mirzaev",     initials: "JM", dept: "IT",        checkIn: "09:01", checkOut: "18:00", hours: "8s 59d" },
  { name: "Malika Karimova",   initials: "MK", dept: "Sales",     checkIn: "09:31", checkOut: "19:15", hours: "9s 44d" },
  { name: "Bobur Xolmatov",    initials: "BX", dept: "IT",        checkIn: "08:30", checkOut: "17:45", hours: "9s 15d" },
  { name: "Zulfiya Norova",    initials: "ZN", dept: "Marketing", checkIn: "09:10", checkOut: "18:08", hours: "8s 58d" },
  { name: "Temur Aliyev",      initials: "TA", dept: "Finance",   checkIn: "09:05", checkOut: null,    hours: null      },
  { name: "Shahnoza Qodirova", initials: "SQ", dept: "Marketing", checkIn: null,    checkOut: null,    hours: null      },
];

const months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul"];

const payroll = [
  { name: "Aziz Sobirov",      initials: "AS", dept: "IT",        base: 8500000, bonus: 1200000, inps: 340000, tax: 850000, paid: true  },
  { name: "Nilufar Rahimova",  initials: "NR", dept: "HR",        base: 6200000, bonus:  600000, inps: 248000, tax: 620000, paid: true  },
  { name: "Sardor Toshmatov",  initials: "ST", dept: "IT",        base: 7800000, bonus:  900000, inps: 312000, tax: 780000, paid: false },
  { name: "Dildora Yusupova",  initials: "DY", dept: "Finance",   base: 6800000, bonus:  500000, inps: 272000, tax: 680000, paid: true  },
  { name: "Jasur Mirzaev",     initials: "JM", dept: "IT",        base: 5900000, bonus:  700000, inps: 236000, tax: 590000, paid: false },
  { name: "Malika Karimova",   initials: "MK", dept: "Sales",     base: 7200000, bonus: 1800000, inps: 288000, tax: 720000, paid: true  },
  { name: "Bobur Xolmatov",    initials: "BX", dept: "IT",        base: 9100000, bonus: 1100000, inps: 364000, tax: 910000, paid: true  },
  { name: "Zulfiya Norova",    initials: "ZN", dept: "Marketing", base: 6500000, bonus:  800000, inps: 260000, tax: 650000, paid: false },
];

const leaveRequests = [
  { id: 1, name: "Sardor Toshmatov",  initials: "ST", dept: "IT",        type: "Yillik",   from: "15 Iyul", to: "29 Iyul", days: 14, balance: 24, status: "pending"  },
  { id: 2, name: "Shahnoza Qodirova", initials: "SQ", dept: "Marketing", type: "Kasellik", from: "17 Iyul", to: "21 Iyul", days: 5,  balance: 30, status: "pending"  },
  { id: 3, name: "Malika Karimova",   initials: "MK", dept: "Sales",     type: "Yillik",   from: "01 Avg",  to: "15 Avg",  days: 15, balance: 20, status: "pending"  },
  { id: 4, name: "Jasur Mirzaev",     initials: "JM", dept: "IT",        type: "Dekret",   from: "20 Iyul", to: "20 Okt",  days: 90, balance: 90, status: "approved" },
  { id: 5, name: "Dildora Yusupova",  initials: "DY", dept: "Finance",   type: "Yillik",   from: "05 Avg",  to: "19 Avg",  days: 14, balance: 22, status: "rejected" },
  { id: 6, name: "Aziz Sobirov",      initials: "AS", dept: "IT",        type: "Yillik",   from: "10 Sen",  to: "17 Sen",  days: 7,  balance: 18, status: "approved" },
];

const leaveTypeColor: Record<string, string> = {
  Yillik:   "bg-blue-500/15 text-blue-400 border-blue-500/20",
  Kasellik: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  Dekret:   "bg-pink-500/15 text-pink-400 border-pink-500/20",
};

export default function HRMDemo() {
  const [tab, setTab]               = useState<HRMTab>("employees");
  const [search, setSearch]         = useState("");
  const [deptFilter, setDeptFilter] = useState("Barchasi");
  const [showOnLeave, setShowOnLeave] = useState(false);
  const [revealedSalary, setRevealedSalary] = useState<Set<number>>(new Set());
  const [selectedMonth, setSelectedMonth] = useState("Iyul");
  const [payStatuses, setPayStatuses] = useState<Record<string, boolean>>(
    Object.fromEntries(payroll.map((p) => [p.name, p.paid]))
  );
  const [leaveStatuses, setLeaveStatuses] = useState<Record<number, string>>(
    Object.fromEntries(leaveRequests.map((r) => [r.id, r.status]))
  );
  const [time, setTime] = useState(new Date());
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => { const t = setInterval(() => setTime(new Date()), 60000); return () => clearInterval(t); }, []);
  useEffect(() => { if (toast) { const t = setTimeout(() => setToast(null), 2500); return () => clearTimeout(t); } }, [toast]);

  const tabs = [
    { key: "employees" as HRMTab, label: "Xodimlar",  icon: Users    },
    { key: "attendance" as HRMTab, label: "Davomat",  icon: Clock    },
    { key: "payroll"   as HRMTab, label: "Ish haqi",  icon: DollarSign },
    { key: "leave"     as HRMTab, label: "Ta'til",    icon: Calendar },
  ];

  const depts = ["Barchasi", ...Array.from(new Set(employees.map((e) => e.dept)))];

  const filteredEmps = employees.filter((e) => {
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.position.toLowerCase().includes(search.toLowerCase());
    const matchDept = deptFilter === "Barchasi" || e.dept === deptFilter;
    const matchLeave = showOnLeave ? e.status === "leave" : true;
    return matchSearch && matchDept && matchLeave;
  });

  const toggleSalary = (id: number) => {
    setRevealedSalary((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const payAll = () => {
    setPayStatuses(Object.fromEntries(payroll.map((p) => [p.name, true])));
    setToast("Barcha xodimlarga ish haqi to'landi");
  };

  const handlePayToggle = (name: string, currentPaid: boolean) => {
    setPayStatuses((prev) => ({ ...prev, [name]: !currentPaid }));
    if (!currentPaid) setToast(`${name.split(" ")[0]}ga ish haqi o'tkazildi`);
  };

  const handleLeaveApprove = (id: number, name: string) => {
    setLeaveStatuses((p) => ({ ...p, [id]: "approved" }));
    setToast(`${name.split(" ")[0]}ning ta'tili tasdiqlandi`);
  };

  const handleLeaveReject = (id: number, name: string) => {
    setLeaveStatuses((p) => ({ ...p, [id]: "rejected" }));
    setToast(`${name.split(" ")[0]}ning ta'tili rad etildi`);
  };

  const presentCount  = attendance.filter((a) => a.checkIn && !isLate(a.checkIn)).length;
  const lateCount     = attendance.filter((a) => a.checkIn && isLate(a.checkIn)).length;
  const absentCount   = attendance.filter((a) => !a.checkIn).length;
  const attendanceRate = Math.round(((presentCount + lateCount) / attendance.length) * 100);

  function isLate(t: string | null) {
    if (!t) return false;
    const [h, m] = t.split(":").map(Number);
    return h > 9 || (h === 9 && m > 15);
  }

  const netPay = (p: typeof payroll[0]) => p.base + p.bonus - p.inps - p.tax;
  const totalNet = payroll.reduce((s, p) => s + netPay(p), 0);
  const paidCount = Object.values(payStatuses).filter(Boolean).length;

  const pendingLeaves   = Object.values(leaveStatuses).filter((s) => s === "pending").length;
  const approvedLeaves  = Object.values(leaveStatuses).filter((s) => s === "approved").length;

  return (
    <div className="relative flex flex-col gap-2.5 min-h-[520px]">
      {/* Status bar */}
      <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] font-semibold text-white">ZYRON HRM</span>
          <span className="text-[8px] text-gray-600">v2.0</span>
          <span className="text-[8px] text-gray-600">•</span>
          <span className="text-[8px] text-gray-500">ZYRON Technologies</span>
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
          <span>{employees.filter((e) => e.status === "active").length} faol xodim</span>
        </div>
      </div>

      {/* ── XODIMLAR ── */}
      {tab === "employees" && (
        <div className="flex-1 space-y-2.5">
          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Jami xodim",    value: employees.length,                                            color: "text-white"        },
              { label: "Bu oy yangi",   value: 2,                                                            color: "text-violet-400"   },
              { label: "Ta'tilda",      value: employees.filter((e) => e.status === "leave").length,         color: "text-amber-400"    },
              { label: "Bo'limlar",     value: new Set(employees.map((e) => e.dept)).size,                   color: "text-blue-400"     },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex gap-2 flex-wrap">
            <div className="relative flex-1 min-w-[140px]">
              <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Ism yoki lavozim..."
                className="w-full pl-7 pr-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[10px] text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500/40"
              />
            </div>
            <div className="flex gap-1 flex-wrap">
              {depts.map((d) => (
                <button
                  key={d}
                  onClick={() => setDeptFilter(d)}
                  className={`px-2 py-1.5 rounded-lg text-[9px] font-medium transition-colors ${
                    deptFilter === d
                      ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                      : "bg-white/[0.04] text-gray-500 border border-transparent hover:bg-white/[0.06]"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowOnLeave((v) => !v)}
              className={`px-2.5 py-1.5 rounded-lg text-[9px] font-medium transition-colors border ${
                showOnLeave
                  ? "bg-amber-500/20 text-amber-400 border-amber-500/30"
                  : "bg-white/[0.04] text-gray-500 border-transparent hover:bg-white/[0.06]"
              }`}
            >
              Ta'tildagilar
            </button>
          </div>

          {/* Employee cards */}
          <div className="space-y-1.5">
            {filteredEmps.map((emp) => (
              <div key={emp.id} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-colors">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${deptGradient[emp.dept] || "from-gray-500 to-gray-600"} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-[10px] font-bold text-white">{emp.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-[11px] font-semibold text-white">{emp.name}</p>
                    <span className={`text-[7px] px-1.5 py-0.5 rounded-full border font-medium ${deptColor[emp.dept] || "bg-gray-500/15 text-gray-400"}`}>
                      {emp.dept}
                    </span>
                    {emp.status === "leave" && (
                      <span className="text-[7px] px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/20">Ta'tilda</span>
                    )}
                  </div>
                  <p className="text-[9px] text-gray-500">{emp.position}</p>
                  <div className="flex items-center gap-3 mt-0.5 text-[8px] text-gray-600">
                    <span className="flex items-center gap-0.5"><Phone size={8} /> {emp.phone}</span>
                    <span>Qabul: {emp.hire}</span>
                  </div>
                </div>
                <button
                  onClick={() => toggleSalary(emp.id)}
                  className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[9px] text-gray-400 hover:text-white hover:bg-white/[0.08] transition-colors flex-shrink-0"
                >
                  {revealedSalary.has(emp.id) ? (
                    <><EyeOff size={9} /> <span className="text-violet-400 font-medium">{fmt(emp.salary)}</span></>
                  ) : (
                    <><Eye size={9} /> <span>Maosh</span></>
                  )}
                </button>
              </div>
            ))}
            {filteredEmps.length === 0 && (
              <p className="text-[10px] text-gray-600 text-center py-8">Hech narsa topilmadi</p>
            )}
          </div>
        </div>
      )}

      {/* ── DAVOMAT ── */}
      {tab === "attendance" && (
        <div className="flex-1 space-y-3">
          {/* Attendance rate */}
          <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-violet-500/20">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[11px] font-bold text-white">Bugungi davomat</p>
              <span className="text-[11px] font-bold text-violet-400">{attendanceRate}%</span>
            </div>
            <div className="w-full h-2 bg-white/[0.06] rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500 transition-all" style={{ width: `${attendanceRate}%` }} />
            </div>
            <div className="flex gap-4 mt-2 text-[9px]">
              <span className="text-emerald-400">{presentCount} o'z vaqtida</span>
              <span className="text-amber-400">{lateCount} kechikkan</span>
              <span className="text-red-400">{absentCount} kelmagan</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Keldi",       value: presentCount,  bg: "bg-emerald-500/10 border-emerald-500/20", color: "text-emerald-400" },
              { label: "Kechikkan",   value: lateCount,     bg: "bg-amber-500/10 border-amber-500/20",   color: "text-amber-400"   },
              { label: "Ta'tilda",    value: 1,             bg: "bg-blue-500/10 border-blue-500/20",      color: "text-blue-400"    },
              { label: "Kelmagan",    value: absentCount - 1, bg: "bg-red-500/10 border-red-500/20",      color: "text-red-400"     },
            ].map((s) => (
              <div key={s.label} className={`p-2.5 rounded-lg border ${s.bg}`}>
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* Timeline log */}
          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Xodim</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Bo'lim</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Kelish</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Ketish</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Soat</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {attendance.map((a, i) => {
                  const late = isLate(a.checkIn);
                  const absent = !a.checkIn;
                  return (
                    <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                      <td className="py-2 px-2.5">
                        <div className="flex items-center gap-1.5">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${deptGradient[a.dept] || "from-gray-500 to-gray-600"} flex items-center justify-center`}>
                            <span className="text-[7px] font-bold text-white">{a.initials}</span>
                          </div>
                          <span className="text-gray-300 font-medium">{a.name}</span>
                        </div>
                      </td>
                      <td className="py-2 px-2.5">
                        <span className={`text-[8px] px-1.5 py-0.5 rounded-full border ${deptColor[a.dept] || ""}`}>{a.dept}</span>
                      </td>
                      <td className="py-2 px-2.5 font-mono">
                        {a.checkIn
                          ? <span className={late ? "text-amber-400" : "text-emerald-400"}>{a.checkIn}</span>
                          : <span className="text-gray-600">—</span>}
                      </td>
                      <td className="py-2 px-2.5 font-mono">
                        {a.checkOut
                          ? <span className="text-gray-300">{a.checkOut}</span>
                          : a.checkIn
                            ? <span className="text-gray-600 italic">Hali kelmagan</span>
                            : <span className="text-gray-600">—</span>}
                      </td>
                      <td className="py-2 px-2.5 text-gray-400">{a.hours ?? "—"}</td>
                      <td className="py-2 px-2.5">
                        {absent ? (
                          i === 9
                            ? <span className="px-1.5 py-0.5 rounded text-[8px] bg-blue-500/15 text-blue-400 border border-blue-500/20">Ta'tilda</span>
                            : <span className="px-1.5 py-0.5 rounded text-[8px] bg-red-500/15 text-red-400 border border-red-500/20">Kelmagan</span>
                        ) : late ? (
                          <span className="px-1.5 py-0.5 rounded text-[8px] bg-amber-500/15 text-amber-400 border border-amber-500/20">Kechikkan</span>
                        ) : (
                          <span className="px-1.5 py-0.5 rounded text-[8px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">O'z vaqtida</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Weekly attendance bar */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2">Haftalik davomat (%)</p>
            <div className="flex items-end gap-1.5 h-[44px]">
              {[92, 88, 95, 78, 90, 85].map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full rounded-t bg-violet-500/30 hover:bg-violet-500/60 transition-colors" style={{ height: `${v}%` }} />
                  <span className="text-[7px] text-gray-600">{["Du", "Se", "Ch", "Pa", "Ju", "Sh"][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── ISH HAQI ── */}
      {tab === "payroll" && (
        <div className="flex-1 space-y-2.5">
          {/* Header + month selector */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <p className="text-[11px] font-bold text-white">Ish haqi jadvali</p>
              <p className="text-[9px] text-gray-500">{selectedMonth} 2026 · {paidCount}/{payroll.length} to'langan · ZYRON Technologies</p>
            </div>
            <div className="flex gap-1 flex-wrap">
              {months.map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedMonth(m)}
                  className={`px-2 py-1 rounded-md text-[8px] font-medium transition-colors ${
                    selectedMonth === m
                      ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                      : "bg-white/[0.04] text-gray-500 border border-transparent hover:bg-white/[0.06]"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Jami asosiy",  value: fmt(payroll.reduce((s, p) => s + p.base, 0)),              color: "text-white"      },
              { label: "Jami bonus",   value: fmt(payroll.reduce((s, p) => s + p.bonus, 0)),             color: "text-emerald-400" },
              { label: "Soliq+INPS",   value: fmt(payroll.reduce((s, p) => s + p.inps + p.tax, 0)),      color: "text-red-400"     },
              { label: "Sof to'lov",   value: fmt(totalNet),                                              color: "text-violet-400"  },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-[11px] font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* Salary distribution mini chart */}
          <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[9px] text-gray-500 mb-1.5">Maosh taqsimoti</p>
            <div className="flex items-end gap-1 h-[36px]">
              {payroll.map((p, i) => {
                const maxNet = Math.max(...payroll.map((x) => netPay(x)));
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                    <div
                      className="w-full rounded-t transition-colors"
                      style={{
                        height: `${(netPay(p) / maxNet) * 100}%`,
                        background: payStatuses[p.name] ? "rgba(139,92,246,0.5)" : "rgba(239,68,68,0.3)",
                      }}
                    />
                    <span className="text-[6px] text-gray-600">{p.initials}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Payroll table */}
          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[520px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Xodim</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Asosiy</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Bonus</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">INPS</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Soliq</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Sof</th>
                  <th className="text-center py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {payroll.map((p, i) => (
                  <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${deptGradient[p.dept] || "from-gray-500 to-gray-600"} flex items-center justify-center`}>
                          <span className="text-[7px] font-bold text-white">{p.initials}</span>
                        </div>
                        <span className="text-gray-300 font-medium">{p.name}</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 text-right text-gray-400">{fmt(p.base)}</td>
                    <td className="py-2 px-2.5 text-right text-emerald-400">+{fmt(p.bonus)}</td>
                    <td className="py-2 px-2.5 text-right text-red-400">-{fmt(p.inps)}</td>
                    <td className="py-2 px-2.5 text-right text-red-400">-{fmt(p.tax)}</td>
                    <td className="py-2 px-2.5 text-right text-white font-bold">{fmt(netPay(p))}</td>
                    <td className="py-2 px-2.5 text-center">
                      <button
                        onClick={() => handlePayToggle(p.name, payStatuses[p.name])}
                        className={`px-2 py-0.5 rounded text-[8px] font-medium border transition-colors ${
                          payStatuses[p.name]
                            ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/20"
                            : "bg-amber-500/15 text-amber-400 border-amber-500/20 hover:bg-amber-500/25"
                        }`}
                      >
                        {payStatuses[p.name] ? "To'langan" : "Kutilmoqda"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={payAll}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-500/20 text-violet-400 border border-violet-500/30 text-[10px] font-medium hover:bg-violet-500/30 transition-colors"
          >
            <Banknote size={11} /> Hammasini to'lash
          </button>
        </div>
      )}

      {/* ── TA'TIL ── */}
      {tab === "leave" && (
        <div className="flex-1 space-y-2.5">
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Kutmoqda",      value: pendingLeaves,  color: "text-amber-400",  bg: "bg-amber-500/10 border-amber-500/20"   },
              { label: "Tasdiqlandi",   value: approvedLeaves, color: "text-emerald-400",bg: "bg-emerald-500/10 border-emerald-500/20"},
              { label: "Bu oy ta'til",  value: 3,              color: "text-blue-400",   bg: "bg-blue-500/10 border-blue-500/20"     },
              { label: "Jami kun",      value: 47,             color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
            ].map((s) => (
              <div key={s.label} className={`p-2.5 rounded-lg border ${s.bg}`}>
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* Leave type legend */}
          <div className="flex gap-2 flex-wrap">
            {[
              { type: "Yillik", days: "24 kun", used: 8 },
              { type: "Kasellik", days: "30 kun", used: 5 },
              { type: "Dekret", days: "90 kun", used: 0 },
            ].map((lt) => (
              <div key={lt.type} className={`flex-1 min-w-[100px] p-2 rounded-lg border ${leaveTypeColor[lt.type]}`}>
                <p className="text-[9px] font-medium">{lt.type}</p>
                <div className="flex justify-between text-[8px] mt-0.5 opacity-70">
                  <span>Ishlatildi: {lt.used}k</span>
                  <span>Qoldi: {parseInt(lt.days) - lt.used}k</span>
                </div>
                <div className="w-full h-1 bg-white/[0.06] rounded-full mt-1 overflow-hidden">
                  <div className="h-full rounded-full bg-current opacity-50" style={{ width: `${(lt.used / parseInt(lt.days)) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Leave requests */}
          <div className="space-y-1.5">
            {leaveRequests.map((req) => {
              const status = leaveStatuses[req.id];
              return (
                <div key={req.id} className={`p-3 rounded-xl bg-white/[0.03] border transition-colors ${
                  status === "pending" ? "border-amber-500/20" : status === "approved" ? "border-emerald-500/20" : "border-white/[0.06]"
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${deptGradient[req.dept] || "from-gray-500 to-gray-600"} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-[9px] font-bold text-white">{req.initials}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-[11px] font-semibold text-white">{req.name}</p>
                        <span className={`text-[7px] px-1.5 py-0.5 rounded-full border ${leaveTypeColor[req.type] || ""}`}>{req.type}</span>
                      </div>
                      <p className="text-[9px] text-gray-500 mt-0.5">
                        {req.from} — {req.to} · <strong className="text-gray-300">{req.days} kun</strong> · Balans: {req.balance} kun
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {status === "pending" ? (
                        <>
                          <button
                            onClick={() => handleLeaveApprove(req.id, req.name)}
                            className="flex items-center gap-0.5 px-2 py-1 rounded-lg bg-emerald-500/15 text-emerald-400 text-[9px] hover:bg-emerald-500/25 transition-colors border border-emerald-500/20"
                          >
                            <CheckCircle size={9} /> Tasdiqlash
                          </button>
                          <button
                            onClick={() => handleLeaveReject(req.id, req.name)}
                            className="flex items-center gap-0.5 px-2 py-1 rounded-lg bg-red-500/15 text-red-400 text-[9px] hover:bg-red-500/25 transition-colors border border-red-500/20"
                          >
                            <XCircle size={9} /> Rad
                          </button>
                        </>
                      ) : (
                        <span className={`px-2 py-1 rounded-lg text-[9px] font-medium border ${
                          status === "approved"
                            ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/20"
                            : "bg-red-500/15 text-red-400 border-red-500/20"
                        }`}>
                          {status === "approved" ? "Tasdiqlandi" : "Rad etildi"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Who's on leave calendar view */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2">Iyul 2025 — Ta'tildagilar</p>
            <div className="flex gap-2 flex-wrap">
              {leaveRequests.filter((r) => leaveStatuses[r.id] === "approved").map((r) => (
                <div key={r.id} className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${deptGradient[r.dept] || "from-gray-500 to-gray-600"} flex items-center justify-center`}>
                    <span className="text-[6px] font-bold text-white">{r.initials}</span>
                  </div>
                  <span className="text-[9px] text-gray-300">{r.name.split(" ")[0]}</span>
                  <span className="text-[8px] text-gray-500">{r.from}–{r.to}</span>
                </div>
              ))}
              {leaveRequests.filter((r) => leaveStatuses[r.id] === "approved").length === 0 && (
                <p className="text-[9px] text-gray-600">Tasdiqlangan ta'tillar yo'q</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
