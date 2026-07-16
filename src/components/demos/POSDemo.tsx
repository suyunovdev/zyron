"use client";

import { useState } from "react";
import { Search, Plus, Minus, Trash2, CreditCard, Banknote, QrCode, Receipt, Percent, User, Clock, RotateCcw, Tag, ShoppingBag } from "lucide-react";

const categories = ["Barchasi", "Ichimliklar", "Taomlar", "Snacklar", "Desertlar", "Kombo"];

const products = [
  { id: 1, name: "Americano", price: 22000, cat: "Ichimliklar", emoji: "☕" },
  { id: 2, name: "Cappuccino", price: 28000, cat: "Ichimliklar", emoji: "☕" },
  { id: 3, name: "Latte", price: 30000, cat: "Ichimliklar", emoji: "🥛" },
  { id: 4, name: "Fresh Juice", price: 25000, cat: "Ichimliklar", emoji: "🧃" },
  { id: 5, name: "Mocha", price: 32000, cat: "Ichimliklar", emoji: "☕" },
  { id: 6, name: "Green Tea", price: 18000, cat: "Ichimliklar", emoji: "🍵" },
  { id: 7, name: "Smoothie", price: 35000, cat: "Ichimliklar", emoji: "🥤" },
  { id: 8, name: "Burger Classic", price: 38000, cat: "Taomlar", emoji: "🍔" },
  { id: 9, name: "Caesar Salad", price: 35000, cat: "Taomlar", emoji: "🥗" },
  { id: 10, name: "Pasta Carbonara", price: 42000, cat: "Taomlar", emoji: "🍝" },
  { id: 11, name: "Club Sandwich", price: 32000, cat: "Taomlar", emoji: "🥪" },
  { id: 12, name: "Steak", price: 85000, cat: "Taomlar", emoji: "🥩" },
  { id: 13, name: "Pizza Margherita", price: 48000, cat: "Taomlar", emoji: "🍕" },
  { id: 14, name: "Chicken Wings", price: 36000, cat: "Taomlar", emoji: "🍗" },
  { id: 15, name: "Fish & Chips", price: 45000, cat: "Taomlar", emoji: "🐟" },
  { id: 16, name: "Croissant", price: 18000, cat: "Snacklar", emoji: "🥐" },
  { id: 17, name: "Donut", price: 15000, cat: "Snacklar", emoji: "🍩" },
  { id: 18, name: "Muffin", price: 16000, cat: "Snacklar", emoji: "🧁" },
  { id: 19, name: "Nachos", price: 28000, cat: "Snacklar", emoji: "🌮" },
  { id: 20, name: "Cheesecake", price: 24000, cat: "Desertlar", emoji: "🍰" },
  { id: 21, name: "Tiramisu", price: 28000, cat: "Desertlar", emoji: "🍮" },
  { id: 22, name: "Ice Cream", price: 20000, cat: "Desertlar", emoji: "🍨" },
  { id: 23, name: "Brownie", price: 22000, cat: "Desertlar", emoji: "🍫" },
  { id: 24, name: "Kombo #1", price: 55000, cat: "Kombo", emoji: "🎁" },
  { id: 25, name: "Kombo #2", price: 72000, cat: "Kombo", emoji: "🎁" },
];

type CartItem = { id: number; name: string; price: number; qty: number; emoji: string };
type Tab = "sale" | "history" | "shift";

const orderHistory = [
  { id: "#2847", time: "14:32", items: 4, total: 142000, method: "Karta", cashier: "Aziz" },
  { id: "#2846", time: "14:15", items: 2, total: 60000, method: "Naqd", cashier: "Aziz" },
  { id: "#2845", time: "13:58", items: 6, total: 234000, method: "QR", cashier: "Nilufar" },
  { id: "#2844", time: "13:41", items: 1, total: 28000, method: "Naqd", cashier: "Aziz" },
  { id: "#2843", time: "13:22", items: 3, total: 95000, method: "Karta", cashier: "Nilufar" },
  { id: "#2842", time: "13:05", items: 5, total: 178000, method: "Naqd", cashier: "Aziz" },
  { id: "#2841", time: "12:48", items: 2, total: 53000, method: "Karta", cashier: "Sardor" },
  { id: "#2840", time: "12:30", items: 8, total: 312000, method: "QR", cashier: "Aziz" },
];

function fmt(n: number) {
  return n.toLocaleString("uz-UZ") + " so'm";
}

export default function POSDemo() {
  const [tab, setTab] = useState<Tab>("sale");
  const [cat, setCat] = useState("Barchasi");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: "Americano", price: 22000, qty: 2, emoji: "☕" },
    { id: 8, name: "Burger Classic", price: 38000, qty: 1, emoji: "🍔" },
    { id: 20, name: "Cheesecake", price: 24000, qty: 1, emoji: "🍰" },
  ]);
  const [discount, setDiscount] = useState(0);
  const [paid, setPaid] = useState(false);
  const [customer, setCustomer] = useState("");

  const filtered = products.filter(
    (p) =>
      (cat === "Barchasi" || p.cat === cat) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (p: (typeof products)[0]) => {
    setCart((prev) => {
      const exists = prev.find((c) => c.id === p.id);
      if (exists) return prev.map((c) => (c.id === p.id ? { ...c, qty: c.qty + 1 } : c));
      return [...prev, { id: p.id, name: p.name, price: p.price, qty: 1, emoji: p.emoji }];
    });
  };

  const updateQty = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((c) => (c.id === id ? { ...c, qty: c.qty + delta } : c)).filter((c) => c.qty > 0)
    );
  };

  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const discountAmount = Math.round(subtotal * (discount / 100));
  const tax = Math.round((subtotal - discountAmount) * 0.12);
  const total = subtotal - discountAmount + tax;
  const totalItems = cart.reduce((s, c) => s + c.qty, 0);

  if (paid) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[520px] gap-4">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center animate-bounce">
          <Receipt className="text-emerald-400" size={28} />
        </div>
        <p className="text-lg font-bold text-white">To'lov qabul qilindi!</p>
        <p className="text-sm text-gray-400">Chek #{2848} — {fmt(total)}</p>
        <div className="w-56 border border-dashed border-gray-700 rounded-lg p-4 text-[10px] text-gray-500 font-mono space-y-1">
          <p className="text-center font-bold text-gray-300 text-xs">ZYRON POS</p>
          <p className="text-center text-[9px]">Chek #{2848} · {new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" })}</p>
          {customer && <p className="text-center text-[9px]">Mijoz: {customer}</p>}
          <div className="border-t border-dashed border-gray-700 my-1.5" />
          {cart.map((c) => (
            <div key={c.id} className="flex justify-between">
              <span>{c.emoji} {c.name} x{c.qty}</span>
              <span>{fmt(c.price * c.qty)}</span>
            </div>
          ))}
          <div className="border-t border-dashed border-gray-700 my-1.5" />
          <div className="flex justify-between"><span>Subtotal:</span><span>{fmt(subtotal)}</span></div>
          {discount > 0 && <div className="flex justify-between text-emerald-400"><span>Chegirma ({discount}%):</span><span>-{fmt(discountAmount)}</span></div>}
          <div className="flex justify-between"><span>Soliq (12%):</span><span>{fmt(tax)}</span></div>
          <div className="border-t border-dashed border-gray-700 my-1.5" />
          <div className="flex justify-between font-bold text-gray-300 text-xs">
            <span>JAMI:</span><span>{fmt(total)}</span>
          </div>
          <p className="text-center text-[8px] mt-2">Xaridingiz uchun rahmat!</p>
        </div>
        <button
          onClick={() => { setPaid(false); setCart([]); setDiscount(0); setCustomer(""); }}
          className="flex items-center gap-1.5 text-xs text-secondary hover:underline mt-2"
        >
          <RotateCcw size={12} /> Yangi savdo
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2.5 min-h-[520px]">
      {/* Tabs */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          {([
            { key: "sale" as Tab, label: "Savdo", icon: ShoppingBag },
            { key: "history" as Tab, label: "Tarix", icon: Clock },
            { key: "shift" as Tab, label: "Smena", icon: User },
          ]).map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${
                tab === t.key
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
              }`}
            >
              <t.icon size={11} /> {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-[9px] text-gray-500">
          <span className="flex items-center gap-1"><User size={10} /> Kassir: Aziz</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </div>

      {tab === "sale" && (
        <div className="grid grid-cols-5 gap-3 flex-1">
          {/* Left — Products */}
          <div className="col-span-3 flex flex-col gap-2">
            <div className="relative">
              <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Mahsulot qidirish (nomi yoki kodi)..."
                className="w-full pl-8 pr-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50"
              />
            </div>

            <div className="flex gap-1.5 flex-wrap">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-medium transition-colors ${
                    cat === c
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      : "bg-white/[0.04] text-gray-400 border border-transparent hover:bg-white/[0.06]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-1.5 overflow-y-auto flex-1 max-h-[400px] pr-1">
              {filtered.map((p) => (
                <button
                  key={p.id}
                  onClick={() => addToCart(p)}
                  className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 hover:bg-blue-500/[0.05] transition-all text-center group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{p.emoji}</span>
                  <span className="text-[9px] font-medium text-gray-300 leading-tight">{p.name}</span>
                  <span className="text-[9px] text-blue-400 font-semibold">{fmt(p.price)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right — Cart */}
          <div className="col-span-2 flex flex-col bg-white/[0.02] rounded-xl border border-white/[0.06] p-2.5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[11px] font-bold text-white flex items-center gap-1.5">
                <ShoppingBag size={12} /> Savat
              </p>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-500/15 text-blue-400">{totalItems} ta</span>
            </div>

            {/* Customer */}
            <div className="flex items-center gap-1.5 mb-2">
              <User size={11} className="text-gray-500" />
              <input
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                placeholder="Mijoz ismi (ixtiyoriy)"
                className="flex-1 bg-transparent text-[10px] text-white placeholder:text-gray-600 focus:outline-none border-b border-white/[0.06] pb-0.5"
              />
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto space-y-1.5 max-h-[240px]">
              {cart.length === 0 && (
                <p className="text-[10px] text-gray-600 text-center py-8">Mahsulot tanlang</p>
              )}
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-2 p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  <span className="text-sm">{item.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-medium text-gray-300 truncate">{item.name}</p>
                    <p className="text-[10px] text-blue-400">{fmt(item.price)}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button onClick={() => updateQty(item.id, -1)} className="w-5 h-5 rounded bg-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10">
                      {item.qty === 1 ? <Trash2 size={9} /> : <Minus size={9} />}
                    </button>
                    <span className="text-[10px] text-white font-bold w-4 text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="w-5 h-5 rounded bg-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10">
                      <Plus size={9} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Discount */}
            <div className="flex items-center gap-2 py-2 border-t border-white/[0.06]">
              <Percent size={11} className="text-gray-500" />
              <div className="flex gap-1">
                {[0, 5, 10, 15, 20].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDiscount(d)}
                    className={`px-1.5 py-0.5 rounded text-[9px] font-medium transition-colors ${
                      discount === d
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-white/[0.04] text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    {d === 0 ? "—" : d + "%"}
                  </button>
                ))}
              </div>
            </div>

            {/* Totals */}
            <div className="pt-2 border-t border-white/[0.06] space-y-1">
              <div className="flex justify-between text-[10px]">
                <span className="text-gray-500">Subtotal ({totalItems} ta)</span>
                <span className="text-gray-300">{fmt(subtotal)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-[10px]">
                  <span className="text-emerald-500 flex items-center gap-1"><Tag size={9} />Chegirma ({discount}%)</span>
                  <span className="text-emerald-400">-{fmt(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-[10px]">
                <span className="text-gray-500">Soliq (12%)</span>
                <span className="text-gray-300">{fmt(tax)}</span>
              </div>
              <div className="flex justify-between text-xs font-bold pt-1 border-t border-white/[0.06]">
                <span className="text-white">Jami</span>
                <span className="text-emerald-400">{fmt(total)}</span>
              </div>
            </div>

            {/* Payment Buttons */}
            <div className="grid grid-cols-3 gap-1.5 mt-2.5">
              {[
                { icon: Banknote, label: "Naqd", color: "emerald", onClick: () => cart.length > 0 && setPaid(true) },
                { icon: CreditCard, label: "Karta", color: "blue", onClick: () => cart.length > 0 && setPaid(true) },
                { icon: QrCode, label: "QR / Payme", color: "purple", onClick: () => cart.length > 0 && setPaid(true) },
              ].map((btn) => (
                <button
                  key={btn.label}
                  onClick={btn.onClick}
                  className={`flex flex-col items-center gap-0.5 p-2 rounded-lg bg-${btn.color}-500/15 border border-${btn.color}-500/25 text-${btn.color}-400 hover:bg-${btn.color}-500/25 transition-colors`}
                >
                  <btn.icon size={15} />
                  <span className="text-[9px] font-medium">{btn.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "history" && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] font-bold text-white">Bugungi savdolar</p>
            <span className="text-[10px] text-gray-500">{orderHistory.length} ta tranzaksiya</span>
          </div>
          <div className="overflow-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Chek</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Vaqt</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Mahsulotlar</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">To'lov</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Kassir</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Summa</th>
                </tr>
              </thead>
              <tbody>
                {orderHistory.map((o) => (
                  <tr key={o.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5 text-blue-400 font-medium">{o.id}</td>
                    <td className="py-2 px-2.5 text-gray-400">{o.time}</td>
                    <td className="py-2 px-2.5 text-gray-300">{o.items} ta</td>
                    <td className="py-2 px-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${
                        o.method === "Naqd" ? "bg-emerald-500/15 text-emerald-400"
                          : o.method === "Karta" ? "bg-blue-500/15 text-blue-400"
                          : "bg-purple-500/15 text-purple-400"
                      }`}>{o.method}</span>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400">{o.cashier}</td>
                    <td className="py-2 px-2.5 text-right text-white font-medium">{fmt(o.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Jami savdo</p>
              <p className="text-sm font-bold text-white">{fmt(orderHistory.reduce((s, o) => s + o.total, 0))}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">O'rtacha chek</p>
              <p className="text-sm font-bold text-white">{fmt(Math.round(orderHistory.reduce((s, o) => s + o.total, 0) / orderHistory.length))}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[9px] text-gray-500">Tranzaksiyalar</p>
              <p className="text-sm font-bold text-white">{orderHistory.length}</p>
            </div>
          </div>
        </div>
      )}

      {tab === "shift" && (
        <div className="flex-1 space-y-3">
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs font-bold text-white">Joriy smena</p>
                <p className="text-[10px] text-gray-400">Bugun, 08:00 — Hozir</p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-emerald-400 font-medium">Faol</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "Jami savdo", value: fmt(1102000) },
                { label: "Naqd", value: fmt(423000) },
                { label: "Karta", value: fmt(367000) },
                { label: "QR", value: fmt(312000) },
              ].map((s) => (
                <div key={s.label} className="p-2 rounded-lg bg-white/[0.05]">
                  <p className="text-[9px] text-gray-500">{s.label}</p>
                  <p className="text-[11px] font-bold text-white">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-bold text-white mb-2">Kassirlar</p>
              <div className="space-y-2">
                {[
                  { name: "Aziz S.", sales: 5, total: 623000, active: true },
                  { name: "Nilufar R.", sales: 2, total: 329000, active: true },
                  { name: "Sardor T.", sales: 1, total: 150000, active: false },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <span className="text-[8px] font-bold text-white">{c.name[0]}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1">
                        <p className="text-[10px] font-medium text-white">{c.name}</p>
                        {c.active && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                      </div>
                      <p className="text-[9px] text-gray-500">{c.sales} savdo · {fmt(c.total)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-bold text-white mb-2">Top mahsulotlar</p>
              <div className="space-y-1.5">
                {[
                  { name: "Americano", qty: 24, emoji: "☕" },
                  { name: "Burger Classic", qty: 18, emoji: "🍔" },
                  { name: "Latte", qty: 15, emoji: "🥛" },
                  { name: "Pasta Carbonara", qty: 12, emoji: "🍝" },
                  { name: "Cheesecake", qty: 9, emoji: "🍰" },
                ].map((p, i) => (
                  <div key={p.name} className="flex items-center gap-2 text-[10px]">
                    <span className="text-gray-600 w-3">{i + 1}</span>
                    <span>{p.emoji}</span>
                    <span className="text-gray-300 flex-1">{p.name}</span>
                    <span className="text-blue-400 font-medium">{p.qty} ta</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2">Soatlik savdo</p>
            <div className="flex items-end gap-1.5 h-[50px]">
              {[8, 25, 42, 58, 45, 72, 65, 80, 55, 38].map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full rounded-t bg-blue-500/30 hover:bg-blue-500/50 transition-colors" style={{ height: `${v}%` }} />
                  <span className="text-[7px] text-gray-600">{8 + i}:00</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
