"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";
import { SendIcon, InstagramIcon } from "@/components/icons";
import { ZyronMark } from "./ZyronLogo";

const socialLinks = [
  { icon: SendIcon, href: "https://t.me/zyrontech", label: "Telegram" },
  { icon: InstagramIcon, href: "https://instagram.com/zyron_tech1", label: "Instagram" },
];

export default function Footer() {
  const { locale } = useLanguage();
  const tr = translations.footer;

  const footerLinks = {
    [t(tr.products, locale)]: [
      { name: "POS", href: "#products" },
      { name: "ERP", href: "#products" },
      { name: "CRM", href: "#products" },
      { name: "AI", href: "#products" },
      { name: "Cloud", href: "#products" },
      { name: "Analytics", href: "#products" },
    ],
    [t(tr.company, locale)]: [
      { name: t(tr.about, locale), href: "#about" },
      { name: t(tr.careers, locale), href: "/careers" },
      { name: t(tr.contactLink, locale), href: "#contact" },
      { name: t(tr.blog, locale), href: "/blog" },
    ],
    [t(tr.legal, locale)]: [
      { name: t(tr.privacy, locale), href: "/privacy" },
      { name: t(tr.terms, locale), href: "/terms" },
      { name: t(tr.cookie, locale), href: "/cookies" },
    ],
  };

  return (
    <footer className="relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <ZyronMark size={28} />
              <span className="text-xl font-medium text-white tracking-tight font-[family-name:var(--font-display)]">
                ZYRON
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
              {t(tr.tagline, locale)}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-gray-500 hover:text-white hover:border-border-hover transition-all"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} ZYRON. {t(tr.rights, locale)}
          </p>
          <p className="text-xs text-gray-600">{t(tr.builtWith, locale)}</p>
        </div>
      </div>
    </footer>
  );
}
