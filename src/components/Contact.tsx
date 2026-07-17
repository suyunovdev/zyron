"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";
import { SendIcon, InstagramIcon } from "@/components/icons";

const socials = [
  { icon: SendIcon, name: "Telegram", href: "https://t.me/zyrontech", handle: "@zyrontech" },
  { icon: InstagramIcon, name: "Instagram", href: "https://instagram.com/zyron_tech1", handle: "@zyron_tech1" },
  { icon: Phone, name: "Phone", href: "tel:+998943292831", handle: "+998 94 329 28 31" },
];

export default function Contact() {
  const { locale } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const tr = translations.contact;
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  function validatePhone(value: string): boolean {
    if (!value) return true; // optional field
    const digits = value.replace(/[\s\-\(\)\+]/g, "");
    return digits.length >= 9 && digits.length <= 15 && /^\d+$/.test(digits);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const message = data.get("message") as string;

    if (!email || !message) return;

    if (phone && !validatePhone(phone)) {
      setPhoneError(t(tr.phoneError, locale));
      return;
    }
    setPhoneError("");

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email,
          company: data.get("company"),
          phone,
          message,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
      form.reset();
      setPhoneError("");
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setSubmitted(false);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="relative py-32">
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            {t(tr.desc, locale)}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <h3 className="text-xl font-bold text-white mb-6">
              {t(tr.formTitle, locale)}
            </h3>
            {submitted && (
              <div className="flex items-center gap-2 p-4 mb-4 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm">
                <CheckCircle size={18} />
                {t(tr.success, locale)}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <label className="sr-only" htmlFor="contact-first">{t(tr.firstName, locale)}</label>
                <input
                  id="contact-first"
                  name="firstName"
                  type="text"
                  placeholder={t(tr.firstName, locale)}
                  className="w-full px-4 py-3 rounded-xl bg-dark border border-border text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-secondary transition-colors"
                />
                <label className="sr-only" htmlFor="contact-last">{t(tr.lastName, locale)}</label>
                <input
                  id="contact-last"
                  name="lastName"
                  type="text"
                  placeholder={t(tr.lastName, locale)}
                  className="w-full px-4 py-3 rounded-xl bg-dark border border-border text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-secondary transition-colors"
                />
              </div>
              <label className="sr-only" htmlFor="contact-email">{t(tr.email, locale)}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder={t(tr.email, locale)}
                className="w-full px-4 py-3 rounded-xl bg-dark border border-border text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-secondary transition-colors"
              />
              <label className="sr-only" htmlFor="contact-company">{t(tr.company, locale)}</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                placeholder={t(tr.company, locale)}
                className="w-full px-4 py-3 rounded-xl bg-dark border border-border text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-secondary transition-colors"
              />
              <div>
                <label className="sr-only" htmlFor="contact-phone">{t(tr.phone, locale)}</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder={t(tr.phone, locale)}
                  onChange={() => phoneError && setPhoneError("")}
                  className={`w-full px-4 py-3 rounded-xl bg-dark border text-white placeholder:text-gray-600 text-sm focus:outline-none transition-colors ${
                    phoneError ? "border-red-500 focus:border-red-500" : "border-border focus:border-secondary"
                  }`}
                />
                {phoneError && (
                  <p className="mt-1.5 text-xs text-red-400">{phoneError}</p>
                )}
              </div>
              <label className="sr-only" htmlFor="contact-message">{t(tr.message, locale)}</label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                placeholder={t(tr.message, locale)}
                className="w-full px-4 py-3 rounded-xl bg-dark border border-border text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-secondary transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 bg-secondary text-white font-medium py-3.5 rounded-xl hover:bg-secondary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? t(tr.sending, locale) : t(tr.send, locale)}
                <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-border-hover transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <s.icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{s.name}</p>
                  <p className="text-xs text-gray-500">{s.handle}</p>
                </div>
                <ArrowRight
                  size={16}
                  className="ml-auto text-gray-600 group-hover:text-gray-400 group-hover:translate-x-1 transition-all"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
