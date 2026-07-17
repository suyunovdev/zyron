"use client";

import { useState, useEffect } from "react";
import {
  ShoppingBag, ShoppingCart, Store, BarChart2,
  Star, TrendingUp, Package, Search, Filter,
  CheckCircle, ChevronDown, ChevronUp, BadgeCheck,
  Users, Zap
} from "lucide-react";

type MarketplaceTab = "showcase" | "orders" | "vendors" | "analytics";

function fmt(n: number) {
  return n.toLocaleString("uz-UZ") + " so'm";
}

const categories = ["Barchasi", "Elektronika", "Kiyim", "Uy jihozlari"];

const products = [
  { id: 1,  name: "iPhone 15 Pro",       category: "Elektronika",  price: 13500000, seller: "TechHub UZ",    rating: 4.9, reviews: 312, color: "from-gray-700 to-gray-900",    icon: "📱" },
  { id: 2,  name: "MacBook Air M3",       category: "Elektronika",  price: 22000000, seller: "AppleStore UZ", rating: 4.8, reviews: 189, color: "from-slate-700 to-slate-900",  icon: "💻" },
  { id: 3,  name: "Sony WH-1000XM5",     category: "Elektronika",  price: 3200000,  seller: "SoundMax",      rating: 4.7, reviews: 254, color: "from-neutral-700 to-neutral-900", icon: "🎧" },
  { id: 4,  name: "Samsung Galaxy Watch", category: "Elektronika",  price: 2800000,  seller: "TechHub UZ",    rating: 4.6, reviews: 421, color: "from-zinc-700 to-zinc-900",   icon: "⌚" },
  { id: 5,  name: "iPad Pro 12.9",       category: "Elektronika",  price: 9800000,  seller: "AppleStore UZ", rating: 4.8, reviews: 97,  color: "from-blue-800 to-blue-900",   icon: "📱" },
  { id: 6,  name: "Canon EOS R8",        category: "Elektronika",  price: 7500000,  seller: "CameraLand",    rating: 4.5, reviews: 63,  color: "from-stone-700 to-stone-900", icon: "📷" },
  { id: 7,  name: "Nike Air Max 270",    category: "Kiyim",        price: 1200000,  seller: "SportStyle",    rating: 4.4, reviews: 508, color: "from-orange-700 to-red-800",  icon: "👟" },
  { id: 8,  name: "Zara Casual Jacket",  category: "Kiyim",        price: 890000,   seller: "FashionUZ",     rating: 4.3, reviews: 234, color: "from-amber-700 to-amber-900", icon: "🧥" },
  { id: 9,  name: "Dyson V15 Detect",    category: "Uy jihozlari", price: 4200000,  seller: "HomeWorld",     rating: 4.9, reviews: 176, color: "from-purple-700 to-purple-900", icon: "🔌" },
  { id: 10, name: "Xiaomi TV 55\"",      category: "Uy jihozlari", price: 5800000,  seller: "TechHub UZ",    rating: 4.6, reviews: 289, color: "from-cyan-800 to-cyan-900",   icon: "📺" },
];

const orders = [
  { id: "#BUY-7801", buyer: "Asilbek Normatov",   initials: "AN", products: ["iPhone 15 Pro"],              count: 1, total: 13500000, date: "17 Iyul", status: "new",        method: "Payme" },
  { id: "#BUY-7802", buyer: "Dilnoza Xasanova",    initials: "DX", products: ["Sony WH-1000XM5", "Nike Air"], count: 2, total: 4400000,  date: "17 Iyul", status: "processing", method: "Click" },
  { id: "#BUY-7803", buyer: "Sardor Toshmatov",    initials: "ST", products: ["MacBook Air M3"],             count: 1, total: 22000000, date: "16 Iyul", status: "shipped",    method: "Karta" },
  { id: "#BUY-7804", buyer: "Malika Karimova",     initials: "MK", products: ["Zara Casual Jacket", "Nike"], count: 2, total: 2090000,  date: "16 Iyul", status: "delivered",  method: "Naqd"  },
  { id: "#BUY-7805", buyer: "Bobur Xolmatov",      initials: "BX", products: ["Dyson V15 Detect"],          count: 1, total: 4200000,  date: "15 Iyul", status: "delivered",  method: "Payme" },
  { id: "#BUY-7806", buyer: "Zulfiya Norova",       initials: "ZN", products: ["Samsung Galaxy Watch"],      count: 1, total: 2800000,  date: "15 Iyul", status: "cancelled",  method: "Click" },
  { id: "#BUY-7807", buyer: "Temur Aliyev",         initials: "TA", products: ["iPad Pro 12.9"],             count: 1, total: 9800000,  date: "14 Iyul", status: "shipped",    method: "Karta" },
  { id: "#BUY-7808", buyer: "Nargiza Xoliqova",    initials: "NX", products: ["Xiaomi TV 55\""],            count: 1, total: 5800000,  date: "14 Iyul", status: "delivered",  method: "Payme" },
];

const statusConfig: Record<string, { label: string; style: string; step: number }> = {
  new:        { label: "Yangi",          style: "bg-blue-500/15 text-blue-400 border-blue-500/20",      step: 1 },
  processing: { label: "Tayyorlanmoqda", style: "bg-amber-500/15 text-amber-400 border-amber-500/20",  step: 2 },
  shipped:    { label: "Jo'natildi",     style: "bg-violet-500/15 text-violet-400 border-violet-500/20", step: 3 },
  delivered:  { label: "Yetkazildi",    style: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20", step: 4 },
  cancelled:  { label: "Bekor",          style: "bg-red-500/15 text-red-400 border-red-500/20",         step: 0 },
};

const methodColor: Record<string, string> = {
  Payme: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  Click: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  Karta: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
  Naqd:  "bg-amber-500/15 text-amber-400 border-amber-500/20",
};

const vendors = [
  { name: "TechHub UZ",    owner: "Jasur Mirzaev",   products: 48, sales: 2310, revenue: 85400000, rating: 4.8, verified: true,  commission: 8,  gradient: "from-blue-600 to-cyan-600"    },
  { name: "AppleStore UZ", owner: "Aziz Sobirov",    products: 22, sales: 1820, revenue: 120000000,rating: 4.9, verified: true,  commission: 6,  gradient: "from-gray-600 to-gray-800"    },
  { name: "SoundMax",      owner: "Bobur Xolmatov",  products: 35, sales: 934,  revenue: 18500000, rating: 4.7, verified: true,  commission: 10, gradient: "from-violet-600 to-purple-700" },
  { name: "HomeWorld",     owner: "Dildora Yusupova",products: 61, sales: 1540, revenue: 42000000, rating: 4.6, verified: true,  commission: 9,  gradient: "from-emerald-600 to-teal-700" },
  { name: "SportStyle",    owner: "Malika Karimova", products: 29, sales: 3100, revenue: 28000000, rating: 4.4, verified: false, commission: 12, gradient: "from-orange-600 to-amber-600"  },
  { name: "FashionUZ",     owner: "Zulfiya Norova",  products: 74, sales: 2850, revenue: 19000000, rating: 4.3, verified: false, commission: 11, gradient: "from-pink-600 to-rose-700"    },
];

const weeklyGMV    = [18500000, 24000000, 21000000, 31000000, 27000000, 38000000, 35000000];
const weekDays     = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"];
const maxGMV       = Math.max(...weeklyGMV);

const categorySales = [
  { name: "Elektronika",  pct: 58, color: "bg-blue-500",   amount: 142000000 },
  { name: "Uy jihozlari", pct: 27, color: "bg-violet-500", amount: 66000000  },
  { name: "Kiyim",        pct: 15, color: "bg-pink-500",   amount: 37000000  },
];

const topProducts = [
  { name: "MacBook Air M3",     sales: 48, revenue: 1056000000 },
  { name: "iPhone 15 Pro",      sales: 112, revenue: 1512000000 },
  { name: "Dyson V15 Detect",   sales: 74, revenue: 310800000  },
  { name: "iPad Pro 12.9",      sales: 65, revenue: 637000000  },
  { name: "Sony WH-1000XM5",    sales: 203, revenue: 649600000 },
];
const maxSales = Math.max(...topProducts.map((p) => p.sales));

export default function MarketplaceDemo() {
  const [tab, setTab]              = useState<MarketplaceTab>("showcase");
  const [catFilter, setCatFilter]  = useState("Barchasi");
  const [search, setSearch]        = useState("");
  const [cart, setCart]            = useState<Set<number>>(new Set([1, 3]));
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [orderStatuses, setOrderStatuses] = useState<Record<string, string>>(
    Object.fromEntries(orders.map((o) => [o.id, o.status]))
  );
  const [cartBadgePulse, setCartBadgePulse] = useState(false);
  const [time, setTime] = useState(new Date());
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => { const t = setInterval(() => setTime(new Date()), 60000); return () => clearInterval(t); }, []);
  useEffect(() => { if (toast) { const t = setTimeout(() => setToast(null), 2500); return () => clearTimeout(t); } }, [toast]);

  const tabs = [
    { key: "showcase"  as MarketplaceTab, label: "Vitrina",    icon: ShoppingBag },
    { key: "orders"    as MarketplaceTab, label: "Buyurtmalar", icon: ShoppingCart },
    { key: "vendors"   as MarketplaceTab, label: "Sotuvchilar", icon: Store       },
    { key: "analytics" as MarketplaceTab, label: "Tahlil",      icon: BarChart2   },
  ];

  const filteredProducts = products.filter((p) => {
    const matchCat    = catFilter === "Barchasi" || p.category === catFilter;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                        p.seller.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const toggleCart = (id: number) => {
    const product = products.find((p) => p.id === id);
    setCart((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setToast(`${product?.name} savatdan olib tashlandi`);
      } else {
        next.add(id);
        setToast(`${product?.name} savatga qo'shildi`);
        setCartBadgePulse(true);
        setTimeout(() => setCartBadgePulse(false), 600);
      }
      return next;
    });
  };

  const advanceOrderStatus = (orderId: string) => {
    const statusFlow: Record<string, string> = { new: "processing", processing: "shipped", shipped: "delivered" };
    setOrderStatuses((prev) => {
      const next = statusFlow[prev[orderId]];
      if (next) {
        setToast(`${orderId} — holat: ${statusConfig[next]?.label}`);
        return { ...prev, [orderId]: next };
      }
      return prev;
    });
  };

  const totalRevenue   = orders.filter((o) => o.status !== "cancelled").reduce((s, o) => s + o.total, 0);
  const todayOrders    = orders.filter((o) => o.date === "17 Iyul").length;
  const avgOrderValue  = Math.round(totalRevenue / orders.filter((o) => o.status !== "cancelled").length);

  const gmvTotal       = weeklyGMV.reduce((s, v) => s + v, 0);
  const totalOrdersAna = orders.length;

  const cartTotal = products.filter((p) => cart.has(p.id)).reduce((s, p) => s + p.price, 0);

  return (
    <div className="relative flex flex-col gap-2.5 min-h-[520px]">
      {/* Status bar */}
      <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-[9px] font-semibold text-white">ZYRON Marketplace</span>
          <span className="text-[8px] text-gray-600">v3.0</span>
          <span className="text-[8px] text-gray-600">•</span>
          <span className="text-[8px] text-gray-500">Admin Panel</span>
        </div>
        <div className="flex items-center gap-2">
          {cart.size > 0 && (
            <span className="text-[8px] text-violet-400 font-medium">{fmt(cartTotal)}</span>
          )}
          <span className="text-[8px] text-gray-500 font-mono">
            {time.toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" })}
          </span>
        </div>
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
        <div className="flex items-center gap-2 text-[9px]">
          <span className="text-emerald-400 flex items-center gap-0.5"><TrendingUp size={9} /> +24% bu hafta</span>
          {cart.size > 0 && (
            <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-400 transition-transform ${cartBadgePulse ? "scale-125" : "scale-100"}`}>
              <ShoppingCart size={9} />
              <span>{cart.size}</span>
            </div>
          )}
        </div>
      </div>

      {/* ── VITRINA ── */}
      {tab === "showcase" && (
        <div className="flex-1 space-y-2.5">
          {/* Search + category filters */}
          <div className="flex gap-2 flex-wrap">
            <div className="relative flex-1 min-w-[130px]">
              <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Mahsulot yoki do'kon..."
                className="w-full pl-7 pr-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[10px] text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500/40"
              />
            </div>
            <div className="flex gap-1">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCatFilter(c)}
                  className={`px-2 py-1.5 rounded-lg text-[9px] font-medium transition-colors ${
                    catFilter === c
                      ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                      : "bg-white/[0.04] text-gray-500 border border-transparent hover:bg-white/[0.06]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {filteredProducts.map((product) => {
              const inCart = cart.has(product.id);
              return (
                <div key={product.id} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/20 hover:bg-white/[0.05] transition-all flex flex-col gap-2">
                  {/* Image placeholder */}
                  <div className={`w-full aspect-square rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                    <span className="text-2xl">{product.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-semibold text-white leading-tight">{product.name}</p>
                    <p className="text-[8px] text-gray-500 mt-0.5">{product.seller}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star size={8} className="text-amber-400 fill-amber-400" />
                      <span className="text-[8px] text-amber-400">{product.rating}</span>
                      <span className="text-[7px] text-gray-600">({product.reviews})</span>
                    </div>
                    <p className="text-[11px] font-bold text-violet-400 mt-1">{fmt(product.price)}</p>
                  </div>
                  <button
                    onClick={() => toggleCart(product.id)}
                    className={`w-full py-1 rounded-lg text-[9px] font-medium transition-all border ${
                      inCart
                        ? "bg-violet-500/25 text-violet-300 border-violet-500/40"
                        : "bg-white/[0.04] text-gray-400 border-white/[0.08] hover:bg-violet-500/15 hover:text-violet-400 hover:border-violet-500/20"
                    }`}
                  >
                    {inCart ? "Savatda ✓" : "Savatga"}
                  </button>
                </div>
              );
            })}
            {filteredProducts.length === 0 && (
              <p className="col-span-3 text-[10px] text-gray-600 text-center py-8">Mahsulot topilmadi</p>
            )}
          </div>

          {/* Cart summary */}
          {cart.size > 0 && (
            <div className="p-2.5 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-between">
              <div className="text-[9px] text-gray-400">
                <span className="text-violet-400 font-semibold">{cart.size} ta</span> mahsulot savatda ·{" "}
                <span className="text-white font-semibold">
                  {fmt(products.filter((p) => cart.has(p.id)).reduce((s, p) => s + p.price, 0))}
                </span>
              </div>
              <button className="px-3 py-1 rounded-lg bg-violet-500/25 text-violet-300 text-[9px] font-medium border border-violet-500/30 hover:bg-violet-500/40 transition-colors">
                Buyurtma berish
              </button>
            </div>
          )}
        </div>
      )}

      {/* ── BUYURTMALAR ── */}
      {tab === "orders" && (
        <div className="flex-1 space-y-2.5">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Bugungi buyurtma", value: todayOrders + " ta",  color: "text-white"        },
              { label: "Jami daromad",     value: fmt(totalRevenue),    color: "text-emerald-400"  },
              { label: "O'rt. chek",       value: fmt(avgOrderValue),   color: "text-violet-400"   },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-[11px] font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* Orders table with expandable rows */}
          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[520px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium w-6"></th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Buyurtma</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Xaridor</th>
                  <th className="text-center py-2 px-2.5 text-gray-500 font-medium">Mahsulot</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Summa</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">To'lov</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  const currentStatus = orderStatuses[order.id] ?? order.status;
                  const cfg = statusConfig[currentStatus];
                  const isExpanded = expandedOrder === order.id;
                  return (
                    <>
                      <tr
                        key={order.id}
                        className="border-b border-white/[0.04] hover:bg-white/[0.02] cursor-pointer"
                        onClick={() => setExpandedOrder(isExpanded ? null : order.id)}
                      >
                        <td className="py-2 px-2.5 text-gray-600">
                          {isExpanded ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
                        </td>
                        <td className="py-2 px-2.5 text-violet-400 font-mono font-medium">{order.id}</td>
                        <td className="py-2 px-2.5">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                              <span className="text-[7px] font-bold text-white">{order.initials}</span>
                            </div>
                            <span className="text-gray-300">{order.buyer}</span>
                          </div>
                        </td>
                        <td className="py-2 px-2.5 text-center">
                          <span className="text-[8px] px-1.5 py-0.5 rounded bg-white/[0.06] text-gray-400">{order.count} ta</span>
                        </td>
                        <td className="py-2 px-2.5 text-right text-white font-bold">{fmt(order.total)}</td>
                        <td className="py-2 px-2.5">
                          <span className={`text-[7px] px-1.5 py-0.5 rounded border ${methodColor[order.method] || ""}`}>{order.method}</span>
                        </td>
                        <td className="py-2 px-2.5">
                          <div className="flex items-center gap-1">
                            <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium border ${cfg.style}`}>{cfg.label}</span>
                            {currentStatus !== "delivered" && currentStatus !== "cancelled" && (
                              <button
                                onClick={(e) => { e.stopPropagation(); advanceOrderStatus(order.id); }}
                                className="text-[7px] px-1 py-0.5 rounded bg-white/[0.05] text-gray-500 hover:text-violet-400 hover:bg-violet-500/10 transition-colors border border-white/[0.06]"
                              >
                                →
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                      {isExpanded && (
                        <tr key={order.id + "-exp"} className="border-b border-white/[0.04] bg-white/[0.01]">
                          <td colSpan={7} className="px-4 pb-2.5 pt-1">
                            {/* Progress steps */}
                            {currentStatus !== "cancelled" && (
                              <div className="flex items-center gap-1 mb-2">
                                {["Yangi", "Tayyorlanmoqda", "Jo'natildi", "Yetkazildi"].map((step, si) => {
                                  const active = cfg.step > si;
                                  const current = cfg.step === si + 1;
                                  return (
                                    <div key={step} className="flex items-center gap-1">
                                      <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[7px] font-bold transition-colors ${
                                        active ? "bg-violet-500 text-white" : current ? "bg-violet-500/40 text-violet-300 ring-1 ring-violet-500/50" : "bg-white/[0.06] text-gray-600"
                                      }`}>
                                        {active ? "✓" : si + 1}
                                      </div>
                                      <span className={`text-[7px] ${active ? "text-violet-400" : "text-gray-600"}`}>{step}</span>
                                      {si < 3 && <div className={`w-4 h-px ${active ? "bg-violet-500" : "bg-white/[0.08]"}`} />}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                            {/* Items list */}
                            <div className="flex flex-col gap-1">
                              {order.products.map((prod, pi) => (
                                <div key={pi} className="flex items-center gap-2 text-[9px] text-gray-400">
                                  <Package size={9} className="text-gray-600" />
                                  <span>{prod}</span>
                                  <span className="text-gray-600">· Sana: {order.date}</span>
                                </div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── SOTUVCHILAR ── */}
      {tab === "vendors" && (
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Sotuvchilar reytingi</p>
            <div className="flex gap-2 text-[9px]">
              <span className="text-emerald-400 flex items-center gap-0.5"><BadgeCheck size={9} /> {vendors.filter((v) => v.verified).length} tasdiqlangan</span>
              <span className="text-amber-400">{vendors.filter((v) => !v.verified).length} kutmoqda</span>
            </div>
          </div>

          {/* Revenue ranking bar */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[9px] text-gray-500 mb-2">Daromad reytingi</p>
            {vendors.sort((a, b) => b.revenue - a.revenue).slice(0, 4).map((v, i) => {
              const maxRev = vendors[0].revenue;
              return (
                <div key={v.name} className="flex items-center gap-2 mb-1.5">
                  <span className="text-[8px] text-gray-600 w-3">{i + 1}</span>
                  <div className={`w-5 h-5 rounded-lg bg-gradient-to-br ${v.gradient} flex items-center justify-center`}>
                    <span className="text-[7px] font-bold text-white">{v.name[0]}</span>
                  </div>
                  <span className="text-[9px] text-gray-300 w-24 truncate">{v.name}</span>
                  <div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${v.gradient} opacity-70`}
                      style={{ width: `${(v.revenue / maxRev) * 100}%` }}
                    />
                  </div>
                  <span className="text-[8px] text-gray-400 w-24 text-right">{fmt(v.revenue)}</span>
                </div>
              );
            })}
          </div>

          {/* Vendor cards */}
          <div className="space-y-1.5">
            {vendors.map((vendor, i) => (
              <div key={i} className={`p-3 rounded-xl bg-white/[0.03] border transition-colors ${
                i === 0 ? "border-amber-500/25 bg-amber-500/[0.03]" : "border-white/[0.06]"
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${vendor.gradient} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-[11px] font-bold text-white">{vendor.name[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-[11px] font-semibold text-white">{vendor.name}</p>
                      {i === 0 && <span className="text-[7px] px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/20">Top sotuvchi</span>}
                      {vendor.verified ? (
                        <span className="flex items-center gap-0.5 text-[7px] bg-emerald-500/15 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">
                          <BadgeCheck size={8} /> Tasdiqlangan
                        </span>
                      ) : (
                        <span className="text-[7px] bg-amber-500/15 text-amber-400 px-1.5 py-0.5 rounded border border-amber-500/20">Ko'rib chiqilmoqda</span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 mt-0.5 text-[8px] text-gray-500">
                      <span>{vendor.owner}</span>
                      <span>{vendor.products} mahsulot</span>
                      <span>{vendor.sales.toLocaleString()} sotuv</span>
                      <span className="flex items-center gap-0.5 text-amber-400"><Star size={7} fill="currentColor" /> {vendor.rating}</span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[11px] font-bold text-white">{fmt(vendor.revenue)}</p>
                    <p className="text-[8px] text-gray-500">Komissiya: {vendor.commission}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── TAHLIL ── */}
      {tab === "analytics" && (
        <div className="flex-1 space-y-3">
          {/* KPI cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Haftalik GMV",   value: fmt(gmvTotal),                                                      color: "text-violet-400",  icon: TrendingUp },
              { label: "Buyurtmalar",    value: totalOrdersAna + " ta",                                              color: "text-white",        icon: ShoppingCart },
              { label: "Konversiya",     value: "3.8%",                                                              color: "text-emerald-400",  icon: Zap        },
              { label: "O'rt. buyurtma", value: fmt(Math.round(gmvTotal / totalOrdersAna)),                          color: "text-amber-400",    icon: BarChart2  },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center gap-1 mb-1">
                  <s.icon size={9} className={s.color} />
                  <p className="text-[8px] text-gray-500">{s.label}</p>
                </div>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* Weekly GMV bar chart */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[11px] font-bold text-white">Haftalik GMV</p>
              <span className="text-[8px] text-gray-500">so'm</span>
            </div>
            <div className="flex items-end gap-1.5 h-[56px]">
              {weeklyGMV.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div
                    className={`w-full rounded-t transition-colors ${i === weeklyGMV.length - 2 ? "bg-violet-500/60" : "bg-violet-500/25 hover:bg-violet-500/45"}`}
                    style={{ height: `${(v / maxGMV) * 100}%` }}
                  />
                  <span className="text-[7px] text-gray-600">{weekDays[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category sales */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2.5">Kategoriya bo'yicha sotuv</p>
            <div className="space-y-2">
              {categorySales.map((cat) => (
                <div key={cat.name} className="flex items-center gap-2">
                  <span className="text-[9px] text-gray-400 w-24">{cat.name}</span>
                  <div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${cat.color} opacity-70`} style={{ width: `${cat.pct}%` }} />
                  </div>
                  <span className="text-[9px] text-gray-300 w-6 text-right">{cat.pct}%</span>
                  <span className="text-[8px] text-gray-500 w-20 text-right">{fmt(cat.amount)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top products ranking */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2">Top mahsulotlar</p>
            <div className="space-y-1.5">
              {topProducts.sort((a, b) => b.sales - a.sales).map((p, i) => (
                <div key={p.name} className="flex items-center gap-2">
                  <span className="text-[8px] text-gray-600 w-3">{i + 1}</span>
                  <span className="text-[9px] text-gray-300 flex-1 truncate">{p.name}</span>
                  <div className="w-20 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-violet-500/60"
                      style={{ width: `${(p.sales / maxSales) * 100}%` }}
                    />
                  </div>
                  <span className="text-[8px] text-violet-400 w-10 text-right">{p.sales} ta</span>
                </div>
              ))}
            </div>
          </div>

          {/* Buyer type */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <div className="flex items-center gap-1 mb-0.5">
                <Users size={9} className="text-blue-400" />
                <p className="text-[8px] text-gray-500">Yangi xaridorlar</p>
              </div>
              <p className="text-[13px] font-bold text-blue-400">62%</p>
              <div className="w-full h-1 bg-white/[0.06] rounded-full mt-1 overflow-hidden">
                <div className="h-full rounded-full bg-blue-500/60" style={{ width: "62%" }} />
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <div className="flex items-center gap-1 mb-0.5">
                <CheckCircle size={9} className="text-emerald-400" />
                <p className="text-[8px] text-gray-500">Qaytgan xaridorlar</p>
              </div>
              <p className="text-[13px] font-bold text-emerald-400">38%</p>
              <div className="w-full h-1 bg-white/[0.06] rounded-full mt-1 overflow-hidden">
                <div className="h-full rounded-full bg-emerald-500/60" style={{ width: "38%" }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
