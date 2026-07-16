"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

const planKeys = ["starter", "professional", "enterprise"] as const;
const monthlyPrices = [29, 79, null];
const yearlyPrices = [24, 65, null];

export default function Pricing() {
  const { locale } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [yearly, setYearly] = useState(false);
  const tr = translations.pricing;

  return (
    <section id="pricing" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
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
            className="text-4xl sm:text-5xl font-bold gradient-text mb-6"
          >
            {t(tr.title, locale)}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
          >
            {t(tr.desc, locale)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 p-1.5 rounded-full bg-card border border-border"
          >
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !yearly ? "bg-secondary text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {t(tr.monthly, locale)}
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                yearly ? "bg-secondary text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {t(tr.yearly, locale)}
              <span className="ml-1.5 text-xs text-accent">-20%</span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {planKeys.map((key, i) => {
            const plan = tr.plans[key];
            const popular = key === "professional";
            const price = yearly ? yearlyPrices[i] : monthlyPrices[i];
            const featureList = tr.features[locale]?.[key] || tr.features.en[key];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  popular
                    ? "bg-gradient-to-b from-secondary/10 to-card border-secondary/30 glow-blue"
                    : "bg-card border-border hover:border-border-hover"
                }`}
              >
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-secondary text-white text-xs font-medium">
                    {t(tr.mostPopular, locale)}
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-1">
                  {t(plan.name, locale)}
                </h3>
                <p className="text-sm text-gray-500 mb-6">{t(plan.desc, locale)}</p>
                <div className="mb-8">
                  {price ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">${price}</span>
                      <span className="text-gray-500 text-sm">{t(tr.perMonth, locale)}</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold text-white">{t(tr.custom, locale)}</div>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {featureList.map((f: string) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                      <Check size={16} className="text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all ${
                    popular
                      ? "bg-secondary text-white hover:bg-secondary/90"
                      : "bg-white/5 text-white hover:bg-white/10 border border-border"
                  }`}
                >
                  {price ? t(tr.getStarted, locale) : t(tr.contactSales, locale)}
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
