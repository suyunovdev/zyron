import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zyron.uz"),
  title: {
    default: "ZYRON — Biznes Texnologiya Ekotizimi | POS, ERP, CRM, AI, Cloud",
    template: "%s | ZYRON",
  },
  description:
    "O'zbekistondagi zamonaviy biznes texnologiya ekotizimi. POS tizimi, ERP, CRM, AI yordamchi, Cloud xizmatlar, Restoran va Chakana savdo boshqaruvi — barchasi bitta platformada. Biznesingizni ZYRON bilan rivojlantiring.",
  keywords: [
    "ZYRON",
    "biznes texnologiya",
    "POS tizimi",
    "POS sistema",
    "kassa apparati",
    "savdo nuqtasi tizimi",
    "ERP tizimi",
    "CRM tizimi",
    "biznes avtomatizatsiya",
    "restoran boshqaruv tizimi",
    "chakana savdo boshqaruvi",
    "bulutli xizmatlar",
    "sun'iy intellekt biznes",
    "biznes analitika",
    "SaaS O'zbekiston",
    "O'zbekiston biznes dasturi",
    "inventory management",
    "ombor boshqaruvi",
    "moliya boshqaruvi",
    "mijozlar bilan ishlash",
    "Business Management Software",
    "POS Systems Uzbekistan",
    "ERP Solutions",
    "CRM Platform",
    "AI Business Solutions",
    "Cloud Services",
    "Restaurant Management System",
    "Retail Management",
    "бизнес технологии Узбекистан",
    "POS система",
    "CRM система",
    "ERP система",
    "автоматизация бизнеса",
  ],
  authors: [{ name: "ZYRON", url: "https://zyron.uz" }],
  creator: "ZYRON",
  publisher: "ZYRON",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "ZYRON — Biznes Texnologiya Ekotizimi",
    description:
      "POS, ERP, CRM, AI, Cloud — O'zbekistondagi zamonaviy biznes texnologiya ekotizimi. Biznesingizni bitta platformada boshqaring.",
    type: "website",
    url: "https://zyron.uz",
    siteName: "ZYRON",
    locale: "uz_UZ",
    alternateLocale: ["en_US", "ru_RU"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZYRON — Biznes Texnologiya Ekotizimi",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZYRON — Biznes Texnologiya Ekotizimi",
    description:
      "POS, ERP, CRM, AI, Cloud — O'zbekistondagi zamonaviy biznes texnologiya platformasi.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://zyron.uz",
    languages: {
      "uz-UZ": "https://zyron.uz",
      "en-US": "https://zyron.uz/?lang=en",
      "ru-RU": "https://zyron.uz/?lang=ru",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  verification: {
    google: "GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://zyron.uz" />
        <link rel="alternate" hrefLang="uz" href="https://zyron.uz" />
        <link rel="alternate" hrefLang="en" href="https://zyron.uz/?lang=en" />
        <link rel="alternate" hrefLang="ru" href="https://zyron.uz/?lang=ru" />
        <link rel="alternate" hrefLang="x-default" href="https://zyron.uz" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://zyron.uz/#organization",
                  name: "ZYRON",
                  url: "https://zyron.uz",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://zyron.uz/zyron-mark-gradient.svg",
                    width: 512,
                    height: 512,
                  },
                  description: "O'zbekistondagi zamonaviy biznes texnologiya ekotizimi — POS, ERP, CRM, AI, Cloud",
                  foundingDate: "2026",
                  founder: { "@type": "Person", name: "Ilyos Suyunov" },
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Toshkent",
                    addressCountry: "UZ",
                  },
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+998943292831",
                      contactType: "customer service",
                      availableLanguage: ["Uzbek", "Russian", "English"],
                    },
                  ],
                  sameAs: [
                    "https://t.me/zyrontech",
                    "https://instagram.com/zyron_tech1",
                    "https://github.com/suyunovdev/zyron",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://zyron.uz/#website",
                  url: "https://zyron.uz",
                  name: "ZYRON",
                  publisher: { "@id": "https://zyron.uz/#organization" },
                  inLanguage: ["uz-UZ", "en-US", "ru-RU"],
                },
                {
                  "@type": "WebPage",
                  "@id": "https://zyron.uz/#webpage",
                  url: "https://zyron.uz",
                  name: "ZYRON — Biznes Texnologiya Ekotizimi",
                  isPartOf: { "@id": "https://zyron.uz/#website" },
                  about: { "@id": "https://zyron.uz/#organization" },
                  description: "POS, ERP, CRM, AI, Cloud — O'zbekistondagi zamonaviy biznes texnologiya ekotizimi",
                  inLanguage: "uz-UZ",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "ZYRON POS",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web, Android, iOS",
                  description: "Zamonaviy savdo nuqtasi tizimi — sotuv, to'lov, chek chiqarish, inventar boshqaruvi",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "UZS",
                    availability: "https://schema.org/ComingSoon",
                  },
                  provider: { "@id": "https://zyron.uz/#organization" },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "ZYRON ERP",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  description: "Korxona resurslarini rejalashtirish — moliya, HR, ombor boshqaruvi",
                  provider: { "@id": "https://zyron.uz/#organization" },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "ZYRON CRM",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  description: "Mijozlar bilan munosabatlar boshqaruvi — pipeline, kontaktlar, vazifalar",
                  provider: { "@id": "https://zyron.uz/#organization" },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans min-h-screen">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
