"use client";

import { useState } from "react";
import { ShoppingBag, ShoppingCart, Store, BarChart2, Star, TrendingUp, Package, DollarSign } from "lucide-react";

type MarketplaceTab = "products" | "orders" | "vendors" | "analytics";

const products = [
  { id: 1, name: "Wireless Headphones Pro", vendor: "SoundTech", price: 89.99, rating: 4.8, reviews: 312, stock: 45, color: "from-violet-600 to-purple-700", status: "active" },
  { id: 2, name: "Mechanical Keyboard RGB", vendor: "KeyMaster", price: 129.00, rating: 4.6, reviews: 189, stock: 12, color: "from-blue-600 to-cyan-700", status: "active" },
  { id: 3, name: "4K Webcam Ultra", vendor: "VisionPro", price: 74.50, rating: 4.7, reviews: 254, stock: 0, color: "from-emerald-600 to-teal-700", status: "out_of_stock" },
  { id: 4, name: "USB-C Hub 7-in-1", vendor: "ConnectX", price: 39.99, rating: 4.5, reviews: 421, stock: 88, color: "from-amber-600 to-orange-700", status: "active" },
  { id: 5, name: "Laptop Stand Aluminum", vendor: "ErgoDesk", price: 55.00, rating: 4.9, reviews: 97, stock: 34, color: "from-rose-600 to-pink-700", status: "active" },
];

const orders = [
  { id: "#ORD-5501", customer: "Alice Johnson", product: "Wireless Headphones Pro", amount: 89.99, date: "17 Jul", status: "shipped" },
  { id: "#ORD-5502", customer: "Bob Martinez", product: "USB-C Hub 7-in-1", amount: 39.99, date: "17 Jul", status: "processing" },
  { id: "#ORD-5503", customer: "Chen Wei", product: "Mechanical Keyboard RGB", amount: 129.00, date: "16 Jul", status: "delivered" },
  { id: "#ORD-5504", customer: "Diana Ross", product: "Laptop Stand Aluminum", amount: 55.00, date: "16 Jul", status: "processing" },
  { id: "#ORD-5505", customer: "Ethan Park", product: "Wireless Headphones Pro", amount: 89.99, date: "15 Jul", status: "delivered" },
  { id: "#ORD-5506", customer: "Fatima Al-Said", product: "USB-C Hub 7-in-1", amount: 39.99, date: "15 Jul", status: "cancelled" },
];

const vendors = [
  { name: "SoundTech", products: 14, sales: 1820, revenue: 162180, rating: 4.8, status: "verified" },
  { name: "KeyMaster", products: 8, sales: 934, revenue: 120486, rating: 4.6, status: "verified" },
  { name: "VisionPro", products: 6, sales: 703, revenue: 52374, rating: 4.7, status: "verified" },
  { name: "ConnectX", products: 22, sales: 2410, revenue: 96355, rating: 4.5, status: "pending" },
  { name: "ErgoDesk", products: 11, sales: 487, revenue: 26785, rating: 4.9, status: "verified" },
];

const weeklyRevenue = [4200, 5800, 4900, 7200, 6100, 8400, 7800];
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const maxRevenue = Math.max(...weeklyRevenue);

const categoryShare = [
  { name: "Electronics", pct: 48, color: "bg-violet-500" },
  { name: "Accessories", pct: 31, color: "bg-blue-500" },
  { name: "Office", pct: 21, color: "bg-emerald-500" },
];

const orderStatusStyle: Record<string, string> = {
  shipped: "bg-blue-500/15 text-blue-400 border border-blue-500/20",
  processing: "bg-amber-500/15 text-amber-400 border border-amber-500/20",
  delivered: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",
  cancelled: "bg-red-500/15 text-red-400 border border-red-500/20",
};

export default function MarketplaceDemo() {
  const [tab, setTab] = useState<MarketplaceTab>("products");

  const tabs = [
    { key: "products" as MarketplaceTab, label: "Products", icon: ShoppingBag },
    { key: "orders" as MarketplaceTab, label: "Orders", icon: ShoppingCart },
    { key: "vendors" as MarketplaceTab, label: "Vendors", icon: Store },
    { key: "analytics" as MarketplaceTab, label: "Analytics", icon: BarChart2 },
  ];

  const totalRevenue = orders.filter(o => o.status !== "cancelled").reduce((s, o) => s + o.amount, 0);

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
        <div className="flex items-center gap-1 text-[9px] text-emerald-400">
          <TrendingUp size={10} />
          <span>+24% this week</span>
        </div>
      </div>

      {/* Products Tab */}
      {tab === "products" && (
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Product Catalog</p>
            <span className="text-[10px] text-gray-500">{products.length} products</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {products.map((product) => (
              <div key={product.id} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3 hover:bg-white/[0.05] transition-colors">
                {/* Color placeholder instead of image */}
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${product.color} flex-shrink-0 flex items-center justify-center`}>
                  <Package size={16} className="text-white/70" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-medium text-white truncate">{product.name}</p>
                  <p className="text-[9px] text-gray-500">{product.vendor}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[11px] font-bold text-violet-400">${product.price}</span>
                    <span className="flex items-center gap-0.5 text-[9px] text-amber-400">
                      <Star size={8} fill="currentColor" /> {product.rating}
                    </span>
                    <span className="text-[9px] text-gray-600">({product.reviews})</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  {product.stock === 0 ? (
                    <span className="text-[8px] px-1.5 py-0.5 rounded bg-red-500/15 text-red-400 border border-red-500/20">Out of stock</span>
                  ) : (
                    <span className="text-[9px] text-gray-500">{product.stock} left</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Active", value: products.filter(p => p.status === "active").length, color: "text-emerald-400" },
              { label: "Out of Stock", value: products.filter(p => p.status === "out_of_stock").length, color: "text-red-400" },
              { label: "Avg Rating", value: (products.reduce((s, p) => s + p.rating, 0) / products.length).toFixed(1), color: "text-amber-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Orders Tab */}
      {tab === "orders" && (
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Recent Orders</p>
            <div className="flex items-center gap-1 text-[9px]">
              <DollarSign size={9} className="text-emerald-400" />
              <span className="text-emerald-400">${totalRevenue.toFixed(2)} revenue</span>
            </div>
          </div>
          <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
            <table className="w-full text-[10px] min-w-[500px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Order</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Customer</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium hidden sm:table-cell">Product</th>
                  <th className="text-right py-2 px-2.5 text-gray-500 font-medium">Amount</th>
                  <th className="text-left py-2 px-2.5 text-gray-500 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-2 px-2.5 text-violet-400 font-mono font-medium">{order.id}</td>
                    <td className="py-2 px-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-[7px] font-bold text-white">{order.customer[0]}</span>
                        </div>
                        <span className="text-gray-300">{order.customer}</span>
                      </div>
                    </td>
                    <td className="py-2 px-2.5 text-gray-400 hidden sm:table-cell truncate max-w-[140px]">{order.product}</td>
                    <td className="py-2 px-2.5 text-right text-white font-bold">${order.amount.toFixed(2)}</td>
                    <td className="py-2 px-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${orderStatusStyle[order.status]}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Vendors Tab */}
      {tab === "vendors" && (
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Vendor Directory</p>
            <span className="text-[10px] text-gray-500">{vendors.filter(v => v.status === "verified").length} verified</span>
          </div>
          {vendors.map((vendor, i) => (
            <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center flex-shrink-0">
                <span className="text-[11px] font-bold text-white">{vendor.name[0]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-[11px] font-medium text-white">{vendor.name}</p>
                  <span className={`text-[7px] px-1.5 py-0.5 rounded font-medium ${
                    vendor.status === "verified"
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                      : "bg-amber-500/15 text-amber-400 border border-amber-500/20"
                  }`}>
                    {vendor.status === "verified" ? "Verified" : "Pending"}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-0.5 text-[9px] text-gray-500">
                  <span>{vendor.products} products</span>
                  <span>{vendor.sales.toLocaleString()} sales</span>
                  <span className="flex items-center gap-0.5 text-amber-400"><Star size={8} fill="currentColor" /> {vendor.rating}</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-[11px] font-bold text-white">${vendor.revenue.toLocaleString()}</p>
                <p className="text-[9px] text-gray-500">revenue</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Analytics Tab */}
      {tab === "analytics" && (
        <div className="flex-1 space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Weekly Revenue", value: "$" + weeklyRevenue.reduce((s, v) => s + v, 0).toLocaleString(), color: "text-violet-400" },
              { label: "Total Orders", value: orders.length, color: "text-white" },
              { label: "Conversion", value: "3.8%", color: "text-emerald-400" },
              { label: "Avg Order", value: "$" + (weeklyRevenue.reduce((s, v) => s + v, 0) / orders.length).toFixed(0), color: "text-amber-400" },
            ].map((s) => (
              <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-3">Weekly Revenue</p>
            <div className="flex items-end gap-1.5 h-[60px]">
              {weeklyRevenue.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div
                    className="w-full rounded-t bg-violet-500/30 hover:bg-violet-500/50 transition-colors"
                    style={{ height: `${(v / maxRevenue) * 100}%` }}
                  />
                  <span className="text-[7px] text-gray-600">{weekDays[i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[11px] font-bold text-white mb-2.5">Sales by Category</p>
            <div className="space-y-2">
              {categoryShare.map((cat) => (
                <div key={cat.name} className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400 w-20">{cat.name}</span>
                  <div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${cat.color}`} style={{ width: `${cat.pct}%`, opacity: 0.7 }} />
                  </div>
                  <span className="text-[10px] text-gray-300 w-7 text-right">{cat.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
