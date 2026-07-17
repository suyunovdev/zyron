"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";
import { ZyronMark } from "./ZyronLogo";
import ParticleBackground from "./effects/ParticleBackground";
import Typewriter from "./effects/Typewriter";
import Marquee from "./effects/Marquee";
import MagneticButton from "./effects/MagneticButton";

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
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <ParticleBackground />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-secondary/8 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[130px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />

      {/* Floating elements */}
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[10%] w-3 h-3 rounded-full bg-secondary/20 hidden lg:block"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[12%] w-2 h-2 rounded-full bg-accent/25 hidden lg:block"
      />
      <motion.div
        animate={{ y: [-8, 12, -8] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[35%] left-[20%] w-2.5 h-2.5 rounded-full bg-secondary/15 hidden lg:block"
      />
      <motion.div
        animate={{ y: [12, -12, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] right-[18%] w-2 h-2 rounded-full bg-accent/20 hidden lg:block"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/8 border border-secondary/15 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-gray-400">{t(tr.badge, locale)}</span>
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
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          {t(tr.desc, locale)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl sm:text-2xl font-medium font-[family-name:var(--font-display)] mb-10 h-9"
        >
          <span className="text-gray-500">→ </span>
          <Typewriter
            texts={["POS & Kassa", "ERP & CRM", "AI Yordamchi", "Cloud Xizmatlar", "Restoran Tizimi", "Telegram Bot", "Mobile App"]}
            speed={70}
            deleteSpeed={35}
            pauseTime={1800}
            className="gradient-text-blue"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton strength={0.25}>
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-gradient-to-r from-secondary to-secondary/90 text-white font-semibold px-8 py-3.5 rounded-xl hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300"
            >
              {t(tr.cta1, locale)}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <a
              href="#products"
              className="group flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 font-medium px-8 py-3.5 rounded-xl hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
            >
              <Play size={16} />
              {t(tr.cta2, locale)}
            </a>
          </MagneticButton>
          <a
            href="#contact"
            className="text-gray-400 hover:text-accent font-medium px-6 py-3.5 transition-colors"
          >
            {t(tr.cta3, locale)}
          </a>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 pt-10 border-t border-white/5"
        >
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">
            {t(tr.trusted, locale)}
          </p>
          <Marquee speed={25} className="opacity-40">
            {partnerSlots.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center px-6 shrink-0">
                {partner.logo ? (
                  <>{partner.logo}</>
                ) : (
                  <span className="text-sm sm:text-base font-semibold text-gray-500 tracking-wide whitespace-nowrap">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
}
