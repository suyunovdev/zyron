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
  title: "ZYRON — Beyond Innovation | Business Technology Ecosystem",
  description:
    "Build smarter businesses with innovative technology solutions. POS Systems, ERP, CRM, AI-Powered Business Solutions, Cloud Services, and more.",
  keywords: [
    "Business Management Software",
    "POS Systems",
    "ERP Solutions",
    "CRM Platforms",
    "AI Business Solutions",
    "SaaS Products",
    "Restaurant Management",
    "Retail Management",
    "Cloud Services",
    "Business Automation",
    "ZYRON",
    "Biznes texnologiya",
    "Savdo nuqtasi tizimi",
    "Бизнес технологии",
  ],
  openGraph: {
    title: "ZYRON — Beyond Innovation | Business Technology Ecosystem",
    description:
      "Build smarter businesses with innovative technology solutions. POS, ERP, CRM, AI, Cloud — all in one ecosystem.",
    type: "website",
    siteName: "ZYRON",
    locale: "en_US",
    alternateLocale: ["uz_UZ", "ru_RU"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZYRON — Beyond Innovation",
    description:
      "Business Technology Ecosystem — POS, ERP, CRM, AI, Cloud solutions.",
  },
  alternates: {
    languages: {
      en: "https://zyron.uz/",
      uz: "https://zyron.uz/?lang=uz",
      ru: "https://zyron.uz/?lang=ru",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="alternate" hrefLang="en" href="https://zyron.uz/" />
        <link rel="alternate" hrefLang="uz" href="https://zyron.uz/?lang=uz" />
        <link rel="alternate" hrefLang="ru" href="https://zyron.uz/?lang=ru" />
        <link rel="alternate" hrefLang="x-default" href="https://zyron.uz/" />
      </head>
      <body className="font-sans min-h-screen">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
