"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Info } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function Testimonials() {
  const { locale } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const tr = translations.testimonials;

  return (
    <section className="relative py-32">
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

          {/* Namunaviy izoh (placeholder notice) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs"
          >
            <Info size={14} />
            {t(tr.placeholder, locale)}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tr.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-border-hover transition-all duration-300"
            >
              {/* Placeholder badge */}
              {item.isPlaceholder && (
                <div className="absolute top-4 right-4 px-2 py-0.5 rounded text-[10px] font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  {locale === "uz" ? "Namunaviy" : locale === "ru" ? "Пример" : "Sample"}
                </div>
              )}

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                &ldquo;{t(item.content, locale)}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-semibold text-sm">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-gray-500">{t(item.role, locale)}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-accent px-3 py-1.5 rounded-full bg-accent/10">
                  {item.stat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
