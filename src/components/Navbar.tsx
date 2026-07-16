"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t, type Locale } from "@/lib/translations";
import { ZyronMark } from "./ZyronLogo";

const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
];

export default function Navbar() {
  const { locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const tr = translations.nav;

  const navLinks = [
    { name: t(tr.about, locale), href: "#about" },
    { name: t(tr.products, locale), href: "#products" },
    { name: t(tr.features, locale), href: "#features" },
{ name: t(tr.contact, locale), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <ZyronMark size={28} />
          <span className="text-xl font-medium text-white tracking-tight font-[family-name:var(--font-display)]">
            ZYRON
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Change language"
              aria-expanded={langOpen}
              aria-haspopup="true"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <Globe size={14} />
              {locales.find((l) => l.code === locale)?.label}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  role="menu"
                  className="absolute right-0 top-full mt-2 glass rounded-xl overflow-hidden min-w-[100px]"
                >
                  {locales.map((l) => (
                    <button
                      key={l.code}
                      role="menuitem"
                      onClick={() => {
                        setLocale(l.code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        locale === l.code
                          ? "text-white bg-secondary/20"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="https://t.me/zyrontech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-gradient-to-r from-secondary to-secondary/90 text-white font-medium px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300"
          >
            {t(tr.contactUs, locale)}
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="md:hidden text-gray-400 hover:text-white"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 pt-2 border-t border-border">
                {locales.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLocale(l.code)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      locale === l.code
                        ? "bg-secondary text-white"
                        : "text-gray-400 hover:text-white bg-white/5"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              <div className="pt-2 border-t border-border">
                <a
                  href="https://t.me/zyrontech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-white text-primary font-medium px-5 py-2.5 rounded-lg"
                >
                  {t(tr.contactUs, locale)}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
