"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Headphones, Lock, Infinity } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

const icons = [Shield, Headphones, Lock, Infinity];

function AnimatedCounter({ target, isInView }: { target: string; isInView: boolean }) {
  const [display, setDisplay] = useState("0");
  const numericPart = parseFloat(target);
  const suffix = target.replace(/[\d.]/g, "");

  useEffect(() => {
    if (!isInView || isNaN(numericPart)) {
      if (isInView) setDisplay(target);
      return;
    }
    let frame = 0;
    const totalFrames = 60;
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const current = numericPart * progress;
      setDisplay(
        (target.includes(".") ? current.toFixed(1) : Math.floor(current).toString()) + suffix
      );
      if (frame >= totalFrames) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [isInView, numericPart, suffix, target]);

  return <span>{display}</span>;
}

export default function Stats() {
  const { locale } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const tr = translations.stats;

  return (
    <section className="relative py-24">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {tr.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
                className="text-center p-8 rounded-2xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-secondary" />
                </div>
                <div className="text-3xl sm:text-4xl font-medium font-[family-name:var(--font-display)] gradient-text-blue mb-2">
                  <AnimatedCounter target={item.value} isInView={isInView} />
                </div>
                <p className="text-sm text-gray-400">{t(item.label, locale)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
