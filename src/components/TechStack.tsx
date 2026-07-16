"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cloud, Globe, Monitor, Building2, Users, Zap, BarChart3 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

const icons = [Brain, Cloud, Globe, Monitor, Building2, Users, Zap, BarChart3];

export default function TechStack() {
  const { locale } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const tr = translations.techStack;

  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
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
            className="text-4xl sm:text-5xl font-medium font-[family-name:var(--font-display)] gradient-text"
          >
            {t(tr.title, locale)}
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tr.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.05 * i, type: "spring", stiffness: 200 }}
                className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-card border border-border hover:border-secondary/30 transition-all duration-300 hover:glow-blue"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-secondary/30 group-hover:to-accent/30 transition-all">
                  <Icon size={28} className="text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                <p className="text-xs text-gray-500">{t(item.desc, locale)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
