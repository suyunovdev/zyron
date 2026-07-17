"use client";

import { useState } from "react";
import { Calendar, Clock, Users, Scissors, CheckCircle, XCircle, Plus, AlertCircle } from "lucide-react";

type BookingTab = "calendar" | "bookings" | "services";

const timeSlots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"];

const bookings = [
  { id: 1, client: "Aziza Karimova", service: "Haircut & Style", staff: "Maria L.", time: "09:00", date: "17 Jul", duration: 60, status: "confirmed" },
  { id: 2, client: "John Smith", service: "Beard Trim", staff: "Alex D.", time: "10:30", date: "17 Jul", duration: 30, status: "confirmed" },
  { id: 3, client: "Nilufar Yusupova", service: "Manicure", staff: "Sofia R.", time: "11:00", date: "17 Jul", duration: 45, status: "pending" },
  { id: 4, client: "David Chen", service: "Massage – 60min", staff: "James K.", time: "13:00", date: "17 Jul", duration: 60, status: "confirmed" },
  { id: 5, client: "Emma Wilson", service: "Haircut & Color", staff: "Maria L.", time: "14:00", date: "17 Jul", duration: 90, status: "pending" },
  { id: 6, client: "Sardor Toshev", service: "Beard Trim", staff: "Alex D.", time: "15:30", date: "17 Jul", duration: 30, status: "cancelled" },
];

const services = [
  { name: "Haircut & Style", duration: 60, price: 45, category: "Hair", bookings: 38, color: "bg-violet-500/20 text-violet-400" },
  { name: "Beard Trim", duration: 30, price: 20, category: "Grooming", bookings: 52, color: "bg-blue-500/20 text-blue-400" },
  { name: "Manicure", duration: 45, price: 35, category: "Nails", bookings: 29, color: "bg-pink-500/20 text-pink-400" },
  { name: "Massage – 60min", duration: 60, price: 70, category: "Wellness", bookings: 21, color: "bg-emerald-500/20 text-emerald-400" },
  { name: "Haircut & Color", duration: 90, price: 85, category: "Hair", bookings: 17, color: "bg-amber-500/20 text-amber-400" },
];

const bookedSlots = new Set(bookings.filter(b => b.status !== "cancelled").map(b => b.time));

const statusStyle: Record<string, string> = {
  confirmed: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",
  pending: "bg-amber-500/15 text-amber-400 border border-amber-500/20",
  cancelled: "bg-red-500/15 text-red-400 border border-red-500/20",
};

export default function BookingDemo() {
  const [tab, setTab] = useState<BookingTab>("calendar");
  const [bookingStatuses, setBookingStatuses] = useState<Record<number, string>>(
    Object.fromEntries(bookings.map((b) => [b.id, b.status]))
  );
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const tabs = [
    { key: "calendar" as BookingTab, label: "Calendar", icon: Calendar },
    { key: "bookings" as BookingTab, label: "Bookings", icon: Users },
    { key: "services" as BookingTab, label: "Services", icon: Scissors },
  ];

  const confirm = (id: number) => setBookingStatuses((p) => ({ ...p, [id]: "confirmed" }));
  const cancel = (id: number) => setBookingStatuses((p) => ({ ...p, [id]: "cancelled" }));

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
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-violet-400">{bookings.filter(b => b.status === "confirmed").length} confirmed today</span>
        </div>
      </div>

      {/* Calendar Tab */}
      {tab === "calendar" && (
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Today — 17 July 2025</p>
            <div className="flex gap-2 text-[9px]">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-violet-500/40" /> Booked</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-white/[0.06]" /> Free</span>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
            {timeSlots.map((slot) => {
              const isBooked = bookedSlots.has(slot);
              const isSelected = selectedSlot === slot;
              return (
                <button
                  key={slot}
                  onClick={() => !isBooked && setSelectedSlot(isSelected ? null : slot)}
                  className={`py-2 px-1 rounded-lg text-[10px] font-medium transition-all border ${
                    isBooked
                      ? "bg-violet-500/15 text-violet-400 border-violet-500/25 cursor-default"
                      : isSelected
                      ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                      : "bg-white/[0.03] text-gray-400 border-white/[0.06] hover:bg-white/[0.06] hover:text-gray-200"
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>
          {selectedSlot && (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Plus size={14} className="text-emerald-400" />
                <div>
                  <p className="text-[10px] font-medium text-white">Book slot at {selectedSlot}</p>
                  <p className="text-[9px] text-gray-500">17 July 2025 · Click to reserve</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedSlot(null)}
                className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9px] hover:bg-emerald-500/30 transition-colors"
              >
                Reserve
              </button>
            </div>
          )}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Total slots", value: timeSlots.length, color: "text-white" },
              { label: "Booked", value: bookedSlots.size, color: "text-violet-400" },
              { label: "Available", value: timeSlots.length - bookedSlots.size, color: "text-emerald-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bookings Tab */}
      {tab === "bookings" && (
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Today's Appointments</p>
            <div className="flex gap-2 text-[9px]">
              <span className="text-amber-400 flex items-center gap-1">
                <AlertCircle size={9} /> {Object.values(bookingStatuses).filter(s => s === "pending").length} pending
              </span>
            </div>
          </div>
          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Client</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Service</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Staff</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Time</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Status</th>
                  <th className="py-2 px-2.5" />
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => {
                  const status = bookingStatuses[b.id];
                  return (
                    <tr key={b.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                      <td className="py-2 px-2.5">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                            <span className="text-[7px] font-bold text-white">{b.client[0]}</span>
                          </div>
                          <span className="text-gray-300 font-medium">{b.client}</span>
                        </div>
                      </td>
                      <td className="py-2 px-2.5 text-gray-400">{b.service}</td>
                      <td className="py-2 px-2.5 text-gray-400 hidden sm:table-cell">{b.staff}</td>
                      <td className="py-2 px-2.5 text-gray-400 font-mono">
                        <div className="flex items-center gap-1">
                          <Clock size={9} className="text-gray-600" />
                          {b.time}
                        </div>
                      </td>
                      <td className="py-2 px-2.5">
                        <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${statusStyle[status]}`}>
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </span>
                      </td>
                      <td className="py-2 px-2.5">
                        {status === "pending" && (
                          <div className="flex gap-1">
                            <button onClick={() => confirm(b.id)} className="p-1 rounded bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 transition-colors">
                              <CheckCircle size={10} />
                            </button>
                            <button onClick={() => cancel(b.id)} className="p-1 rounded bg-red-500/15 text-red-400 hover:bg-red-500/25 transition-colors">
                              <XCircle size={10} />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Services Tab */}
      {tab === "services" && (
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Service Menu</p>
            <span className="text-[10px] text-gray-500">{services.length} services</span>
          </div>
          {services.map((svc, i) => (
            <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${svc.color}`}>
                <Scissors size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-medium text-white">{svc.name}</p>
                  <p className="text-[12px] font-bold text-violet-400">${svc.price}</p>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[9px] text-gray-500 flex items-center gap-0.5"><Clock size={8} /> {svc.duration}min</span>
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-white/[0.05] text-gray-500">{svc.category}</span>
                  <span className="text-[9px] text-gray-500">{svc.bookings} bookings/mo</span>
                </div>
                <div className="mt-1.5 h-1 bg-white/[0.06] rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-violet-500/50" style={{ width: `${Math.min((svc.bookings / 60) * 100, 100)}%` }} />
                </div>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Total Services", value: services.length, color: "text-white" },
              { label: "Avg Duration", value: Math.round(services.reduce((s, sv) => s + sv.duration, 0) / services.length) + "min", color: "text-violet-400" },
              { label: "Avg Price", value: "$" + Math.round(services.reduce((s, sv) => s + sv.price, 0) / services.length), color: "text-emerald-400" },
              { label: "Monthly Bookings", value: services.reduce((s, sv) => s + sv.bookings, 0), color: "text-amber-400" },
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
