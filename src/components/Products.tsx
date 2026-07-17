"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Monitor, UtensilsCrossed, ShoppingBag, Building2,
  Users, Brain, Cloud, BarChart3, ArrowRight,
  UserCog, Receipt, Truck, GraduationCap, CalendarCheck,
  Store, Package, HeartPulse, Hotel, Sprout, CarFront,
  HardHat, Bot, AppWindow, Smartphone,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";
import ProductModal from "./ProductModal";

const icons = [
  Monitor, UtensilsCrossed, ShoppingBag, Building2, Users, Brain, Cloud, BarChart3,
  UserCog, Receipt, Truck, GraduationCap, CalendarCheck, Store, Package,
  HeartPulse, Hotel, Sprout, CarFront, HardHat, Bot, AppWindow, Smartphone,
];
const keys = [
  "pos", "restaurant", "retail", "erp", "crm", "ai", "cloud", "analytics",
  "hrm", "billing", "logistics", "education", "booking", "marketplace", "inventory",
  "medical", "hotel", "farm", "fleet", "construction", "tgbot", "miniapp", "mobileapp",
] as const;
const colors = [
  "from-blue-500 to-blue-600",
  "from-orange-500 to-red-500",
  "from-emerald-500 to-green-500",
  "from-purple-500 to-violet-500",
  "from-pink-500 to-rose-500",
  "from-cyan-500 to-blue-500",
  "from-sky-500 to-indigo-500",
  "from-amber-500 to-yellow-500",
  "from-teal-500 to-emerald-500",
  "from-lime-500 to-green-500",
  "from-indigo-500 to-blue-500",
  "from-violet-500 to-purple-500",
  "from-rose-500 to-pink-500",
  "from-fuchsia-500 to-purple-500",
  "from-cyan-500 to-teal-500",
  "from-red-500 to-rose-500",
  "from-amber-500 to-orange-500",
  "from-green-500 to-lime-500",
  "from-orange-500 to-amber-500",
  "from-yellow-500 to-orange-500",
  "from-sky-500 to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-violet-500 to-indigo-500",
];

type ProductKey = (typeof keys)[number];

export default function Products() {
  const { locale } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const tr = translations.products;
  const [activeModal, setActiveModal] = useState<ProductKey | null>(null);

  return (
    <>
    <section id="products" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-transparent pointer-events-none" />
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-sm text-accent font-medium uppercase tracking-widest mb-4"
          >
            {t(tr.label, locale)}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-medium font-[family-name:var(--font-display)] gradient-text mb-6"
          >
            {t(tr.title, locale)}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            {t(tr.desc, locale)}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keys.map((key, i) => {
            const Icon = icons[i];
            const item = tr.items[key];
            const feats = item.features[locale] || item.features.en;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.05 * i }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-border-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors[i]} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none`} />
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colors[i]} flex items-center justify-center mb-4 opacity-90`}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1">{item.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{t(item.tagline, locale)}</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{t(item.desc, locale)}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {feats.map((f: string) => (
                    <span key={f} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-border">
                      {f}
                    </span>
                  ))}
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveModal(key); }}
                  className="relative z-10 flex items-center gap-1.5 text-sm text-secondary hover:text-accent transition-colors group/btn"
                >
                  {t(tr.learnMore, locale)}
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
      {activeModal && (
        <ProductModal productKey={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}
