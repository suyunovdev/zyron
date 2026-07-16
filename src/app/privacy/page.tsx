import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Maxfiylik siyosati — ZYRON",
  description: "ZYRON maxfiylik siyosati. Shaxsiy ma'lumotlaringiz qanday yig'ilishi, ishlatilishi va himoya qilinishi haqida.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-10">
          <ArrowLeft size={16} />
          Bosh sahifa
        </Link>

        <h1 className="text-3xl sm:text-4xl font-medium font-[family-name:var(--font-display)] gradient-text mb-4">
          Maxfiylik siyosati
        </h1>
        <p className="text-sm text-gray-500 mb-10">Oxirgi yangilanish: 17 iyul, 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-lg font-medium text-white mb-3">1. Kirish</h2>
            <p>ZYRON (&quot;biz&quot;, &quot;bizning&quot;, &quot;kompaniya&quot;) sizning maxfiyligingizni hurmat qiladi. Ushbu Maxfiylik siyosati biz sizning shaxsiy ma&apos;lumotlaringizni qanday yig&apos;ishimiz, ishlatishimiz, saqlashimiz va himoya qilishimizni tushuntiradi.</p>
            <p>Ushbu siyosat zyron.uz veb-saytimiz, mobil ilovalarimiz va barcha tegishli xizmatlarimizga taalluqli.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">2. Yig&apos;iladigan ma&apos;lumotlar</h2>
            <p>Biz quyidagi turdagi ma&apos;lumotlarni yig&apos;ishimiz mumkin:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li><strong className="text-gray-300">Shaxsiy ma&apos;lumotlar:</strong> Ism, familiya, elektron pochta manzili, telefon raqami, kompaniya nomi</li>
              <li><strong className="text-gray-300">Hisob ma&apos;lumotlari:</strong> Foydalanuvchi nomi, shifrlangan parol, profil sozlamalari</li>
              <li><strong className="text-gray-300">To&apos;lov ma&apos;lumotlari:</strong> To&apos;lov kartasi ma&apos;lumotlari (PCI DSS standartiga muvofiq xavfsiz saqlanadi)</li>
              <li><strong className="text-gray-300">Foydalanish ma&apos;lumotlari:</strong> IP manzil, brauzer turi, qurilma ma&apos;lumotlari, sahifa ko&apos;rishlari</li>
              <li><strong className="text-gray-300">Biznes ma&apos;lumotlari:</strong> Savdo, inventar, mijozlar bazasi va boshqa operatsion ma&apos;lumotlar</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">3. Ma&apos;lumotlardan foydalanish</h2>
            <p>Yig&apos;ilgan ma&apos;lumotlar quyidagi maqsadlarda ishlatiladi:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Xizmatlarimizni taqdim etish, boshqarish va yaxshilash</li>
              <li>Hisobingizni yaratish va boshqarish</li>
              <li>Texnik yordam va mijozlarga xizmat ko&apos;rsatish</li>
              <li>Xavfsizlik va firibgarlikni oldini olish</li>
              <li>Qonuniy majburiyatlarni bajarish</li>
              <li>Mahsulot va xizmatlarimizni takomillashtirish uchun tahlil o&apos;tkazish</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">4. Ma&apos;lumotlar xavfsizligi</h2>
            <p>Biz sizning ma&apos;lumotlaringizni himoya qilish uchun sanoat standartlaridagi xavfsizlik choralarini qo&apos;llaymiz:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>256-bit AES shifrlash (saqlashda va uzatishda)</li>
              <li>SSL/TLS sertifikatlari (A+ daraja)</li>
              <li>Muntazam xavfsizlik auditi va penetration testing</li>
              <li>SOC 2 Type II muvofiqlik</li>
              <li>Ikki faktorli autentifikatsiya (2FA)</li>
              <li>Ma&apos;lumotlar markazlari ISO 27001 sertifikatiga ega</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">5. Uchinchi tomonlar</h2>
            <p>Biz sizning ma&apos;lumotlaringizni uchinchi tomonlarga sotmaymiz yoki ijaraga bermaymiz. Quyidagi hollarda uchinchi tomonlar bilan bo&apos;lishishimiz mumkin:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Sizning roziligingiz bilan</li>
              <li>Xizmat ko&apos;rsatuvchi hamkorlarimiz (hosting, to&apos;lov protsessing)</li>
              <li>Qonuniy talablar asosida</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">6. Sizning huquqlaringiz</h2>
            <p>Siz quyidagi huquqlarga egasiz:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Ma&apos;lumotlaringizga kirish va nusxa olish</li>
              <li>Ma&apos;lumotlaringizni tuzatish yoki yangilash</li>
              <li>Ma&apos;lumotlaringizni o&apos;chirishni so&apos;rash</li>
              <li>Ma&apos;lumotlar qayta ishlashni cheklash</li>
              <li>Marketing xabarlaridan voz kechish</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">7. Bog&apos;lanish</h2>
            <p>Maxfiylik siyosati bo&apos;yicha savollaringiz bo&apos;lsa, biz bilan bog&apos;laning:</p>
            <ul className="list-none space-y-1 text-gray-400">
              <li>Telegram: <a href="https://t.me/zyrontech" className="text-accent hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">@zyrontech</a></li>
              <li>Telefon: <a href="tel:+998943292831" className="text-accent hover:text-white transition-colors">+998 94 329 28 31</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
