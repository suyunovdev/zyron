"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Cpu, Shield, Gauge, Brain, Zap, Headphones, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

const icons = [Gem, Cpu, Shield, Gauge, Brain, Zap, Headphones, TrendingUp];

export default function WhyZyron() {
  const { locale } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const tr = translations.whyZyron;

  return (
    <section className="relative py-32">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-sm text-secondary font-medium uppercase tracking-widest mb-4"
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
              className="text-lg text-gray-400 leading-relaxed"
            >
              {t(tr.desc, locale)}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tr.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.05 * i }}
                  className="group flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-border-hover transition-all duration-300"
                >
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Icon size={18} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {t(item.title, locale)}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {t(item.desc, locale)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
