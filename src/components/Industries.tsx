"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  UtensilsCrossed, Coffee, ShoppingBag, ShoppingCart,
  GraduationCap, Rocket, Building, Building2,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

const icons = [UtensilsCrossed, Coffee, ShoppingBag, ShoppingCart, GraduationCap, Rocket, Building, Building2];

export default function Industries() {
  const { locale } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const tr = translations.industries;

  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tr.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.05 * i }}
                className="group flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon size={26} className="text-accent" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1">
                  {t(item.name, locale)}
                </h3>
                <p className="text-xs text-gray-500">{t(item.desc, locale)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
