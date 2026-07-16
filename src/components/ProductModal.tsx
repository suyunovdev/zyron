"use client";

import { useEffect, useCallback, Suspense, useState } from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import { X, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

type ProductKey = keyof typeof translations.products.items;

interface ProductModalProps {
  productKey: ProductKey | null;
  onClose: () => void;
}

const colorMap: Record<ProductKey, string> = {
  pos: "from-blue-500 to-blue-600",
  restaurant: "from-orange-500 to-red-500",
  retail: "from-emerald-500 to-green-500",
  erp: "from-purple-500 to-violet-500",
  crm: "from-pink-500 to-rose-500",
  ai: "from-cyan-500 to-blue-500",
  cloud: "from-sky-500 to-indigo-500",
  analytics: "from-amber-500 to-yellow-500",
};

const demoComponents: Record<ProductKey, React.ComponentType> = {
  pos: dynamic(() => import("@/components/demos/POSDemo"), { ssr: false }),
  restaurant: dynamic(() => import("@/components/demos/RestaurantDemo"), { ssr: false }),
  retail: dynamic(() => import("@/components/demos/RetailDemo"), { ssr: false }),
  erp: dynamic(() => import("@/components/demos/ERPDemo"), { ssr: false }),
  crm: dynamic(() => import("@/components/demos/CRMDemo"), { ssr: false }),
  ai: dynamic(() => import("@/components/demos/AIDemo"), { ssr: false }),
  cloud: dynamic(() => import("@/components/demos/CloudDemo"), { ssr: false }),
  analytics: dynamic(() => import("@/components/demos/AnalyticsDemo"), { ssr: false }),
};

export default function ProductModal({ productKey, onClose }: ProductModalProps) {
  const { locale } = useLanguage();
  const modalTr = translations.productModal;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!productKey) return;
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [productKey, handleEscape]);

  if (!productKey || !mounted) return null;

  const product = translations.products.items[productKey];
  const color = colorMap[productKey];
  const modalFeatures = product.modalFeatures[locale] || product.modalFeatures.en;
  const DemoComponent = demoComponents[productKey];

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl animate-in fade-in zoom-in-95 duration-200"
      >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 pb-4 bg-card border-b border-border rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">
                    {product.name.split(" ")[1]?.[0] || "Z"}
                  </span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{product.name}</h2>
                  <p className="text-xs text-gray-500">{t(product.tagline, locale)}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Interactive Demo */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 rounded-full bg-emerald-400 animate-pulse`} />
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    {locale === "uz" ? "Interaktiv demo" : locale === "ru" ? "Интерактивная демо" : "Interactive Demo"}
                  </h3>
                  <span className="text-[10px] text-gray-500 ml-auto">
                    {locale === "uz" ? "Bosib ko'ring!" : locale === "ru" ? "Попробуйте!" : "Try it out!"}
                  </span>
                </div>
                <div className="rounded-xl bg-[#0a0f1a] border border-white/[0.08] p-4 overflow-hidden">
                  <Suspense fallback={<div className="flex items-center justify-center h-[200px] text-gray-500 text-sm">Yuklanmoqda...</div>}>
                    <DemoComponent />
                  </Suspense>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {t(product.fullDesc, locale)}
              </p>

              {/* Features */}
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  {t(modalTr.features, locale)}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {modalFeatures.map((feature: string) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-border"
                    >
                      <Check size={14} className="text-accent shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                onClick={onClose}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-white bg-gradient-to-r ${color} hover:opacity-90 transition-opacity`}
              >
                {t(modalTr.cta, locale)}
                <ArrowRight size={16} />
              </a>
            </div>
      </div>
    </div>,
    document.body
  );
}
