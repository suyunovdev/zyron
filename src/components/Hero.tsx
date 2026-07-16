"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";
import { ZyronMark } from "./ZyronLogo";

// Hamkor logotiplari uchun slot — haqiqiy logotiplar bilan almashtiring
// Har bir element: { name: string, logo?: React.ReactNode | string (URL) }
const partnerSlots = [
  { name: "TechCorp", logo: null },
  { name: "InnovateCo", logo: null },
  { name: "DataFlow", logo: null },
  { name: "CloudBase", logo: null },
  { name: "SmartBiz", logo: null },
];

export default function Hero() {
  const { locale } = useLanguage();
  const tr = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px]" />

      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[15%] w-16 h-16 rounded-2xl glass-light opacity-40 hidden lg:block"
      />
      <motion.div
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-48 right-[20%] w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 hidden lg:block"
      />
      <motion.div
        animate={{ y: [-10, 25, -10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-[25%] w-20 h-20 rounded-2xl glass-light opacity-30 hidden lg:block"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-[15%] w-14 h-14 rounded-full bg-accent/10 border border-accent/20 hidden lg:block"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-gray-400">{t(tr.badge, locale)}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-8"
        >
          <ZyronMark size={72} className="mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 font-[family-name:var(--font-display)]"
        >
          <span className="gradient-text">{t(tr.title1, locale)}</span>
          <br />
          <span className="gradient-text-blue">{t(tr.title2, locale)}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t(tr.desc, locale)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 bg-white text-primary font-semibold px-8 py-3.5 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg shadow-white/10"
          >
            {t(tr.cta1, locale)}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#products"
            className="group flex items-center gap-2 glass-light text-gray-300 font-medium px-8 py-3.5 rounded-xl hover:text-white transition-all duration-200"
          >
            <Play size={16} />
            {t(tr.cta2, locale)}
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-white font-medium px-6 py-3.5 transition-colors"
          >
            {t(tr.cta3, locale)}
          </a>
        </motion.div>

        {/* Trusted by — hamkor logotiplari sloti */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 pt-10 border-t border-border"
        >
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">
            {t(tr.trusted, locale)}
          </p>
          <div className="flex items-center justify-center gap-8 sm:gap-12 opacity-40">
            {partnerSlots.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center">
                {partner.logo ? (
                  // Haqiqiy logotip uchun slot
                  <>{partner.logo}</>
                ) : (
                  // Placeholder — haqiqiy logotip bilan almashtiring
                  <span className="text-sm sm:text-base font-semibold text-gray-500 tracking-wide">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
