"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Cpu, TrendingUp, Cloud, Brain, Layers } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

const icons = [Lightbulb, Cpu, TrendingUp, Cloud, Brain, Layers];
const keys = ["innovation", "automation", "scalability", "cloud", "ai", "architecture"] as const;

export default function About() {
  const { locale } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const tr = translations.about;

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm text-secondary font-medium uppercase tracking-widest mb-4"
          >
            {t(tr.label, locale)}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-medium font-[family-name:var(--font-display)] gradient-text mb-6"
          >
            {t(tr.title, locale)}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {t(tr.desc, locale)}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keys.map((key, i) => {
            const Icon = icons[i];
            const feature = tr.features[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-border-hover transition-all duration-300 hover:glow-blue"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                  <Icon size={24} className="text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t(feature.title, locale)}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t(feature.desc, locale)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
