import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Foydalanish shartlari — ZYRON",
  description: "ZYRON platformasi foydalanish shartlari va qoidalari.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-10">
          <ArrowLeft size={16} />
          Bosh sahifa
        </Link>

        <h1 className="text-3xl sm:text-4xl font-medium font-[family-name:var(--font-display)] gradient-text mb-4">
          Foydalanish shartlari
        </h1>
        <p className="text-sm text-gray-500 mb-10">Oxirgi yangilanish: 17 iyul, 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-lg font-medium text-white mb-3">1. Shartlarni qabul qilish</h2>
            <p>ZYRON platformasidan foydalanish orqali siz ushbu Foydalanish shartlarini to&apos;liq qabul qilasiz. Agar siz ushbu shartlardan birortasiga rozi bo&apos;lmasangiz, platformadan foydalanmang.</p>
            <p>ZYRON ushbu shartlarni istalgan vaqtda o&apos;zgartirish huquqini o&apos;zida saqlaydi. O&apos;zgarishlar veb-saytda e&apos;lon qilingan paytdan boshlab kuchga kiradi.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">2. Xizmatlar tavsifi</h2>
            <p>ZYRON quyidagi biznes texnologiya xizmatlarini taqdim etadi:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li><strong className="text-gray-300">ZYRON POS:</strong> Savdo nuqtasi tizimi — sotuv, to&apos;lov, chek chiqarish</li>
              <li><strong className="text-gray-300">ZYRON Restaurant:</strong> Restoran boshqaruv tizimi — stollar, oshxona, menyu</li>
              <li><strong className="text-gray-300">ZYRON Retail:</strong> Chakana savdo boshqaruvi — inventar, yetkazib beruvchilar</li>
              <li><strong className="text-gray-300">ZYRON ERP:</strong> Korxona resurslarini rejalashtirish — moliya, HR, ombor</li>
              <li><strong className="text-gray-300">ZYRON CRM:</strong> Mijozlar bilan munosabatlar — pipeline, kontaktlar, vazifalar</li>
              <li><strong className="text-gray-300">ZYRON AI:</strong> Sun&apos;iy intellekt yordamchisi — prognoz, tahlil, tavsiyalar</li>
              <li><strong className="text-gray-300">ZYRON Cloud:</strong> Bulutli infratuzilma — hosting, deploy, xavfsizlik</li>
              <li><strong className="text-gray-300">ZYRON Analytics:</strong> Biznes tahlil — hisobotlar, voronka, real-time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">3. Foydalanuvchi hisobi</h2>
            <p>Platformadan foydalanish uchun hisob yaratishingiz kerak. Siz:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>To&apos;g&apos;ri va to&apos;liq ma&apos;lumot berishga majbursiz</li>
              <li>Hisob xavfsizligi uchun javobgarsiz</li>
              <li>Parolingizni maxfiy saqlashga majbursiz</li>
              <li>Hisobingiz ostida amalga oshirilgan barcha harakatlar uchun javobgarsiz</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">4. To&apos;lov shartlari</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>To&apos;lovlar tanlangan tarif rejasiga muvofiq olinadi</li>
              <li>Barcha to&apos;lovlar O&apos;zbekiston so&apos;mida (UZS) amalga oshiriladi</li>
              <li>Obuna avtomatik ravishda yangilanadi, agar bekor qilinmasa</li>
              <li>To&apos;lovni qaytarish siyosati: Birinchi 14 kun ichida to&apos;liq qaytarish kafolatlanadi</li>
              <li>To&apos;lov kechiktirilganda xizmat 7 kundan keyin to&apos;xtatilishi mumkin</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">5. Intellektual mulk</h2>
            <p>ZYRON platformasi, uning dizayni, kodi, logotipi va barcha tegishli materiallar ZYRON kompaniyasining intellektual mulki hisoblanadi. Sizga:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Platformani nusxalash yoki ko&apos;chirish taqiqlanadi</li>
              <li>Kodni teskari muhandislik qilish taqiqlanadi</li>
              <li>ZYRON brendini ruxsatsiz ishlatish taqiqlanadi</li>
              <li>Sizning ma&apos;lumotlaringiz sizning mulkingiz bo&apos;lib qoladi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">6. Taqiqlangan harakatlar</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Platformani noqonuniy maqsadlarda ishlatish</li>
              <li>Boshqa foydalanuvchilarning hisoblariga ruxsatsiz kirish</li>
              <li>Zararli dasturlar (malware) yuklash yoki tarqatish</li>
              <li>Platformaga hujum qilish (DDoS, SQL injection va h.k.)</li>
              <li>Soxta ma&apos;lumotlar bilan ro&apos;yxatdan o&apos;tish</li>
              <li>API limitlarini qasddan buzish</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">7. Xizmatni to&apos;xtatish</h2>
            <p>ZYRON quyidagi hollarda xizmatni to&apos;xtatish yoki hisobni bloklash huquqiga ega:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Foydalanish shartlari buzilganda</li>
              <li>To&apos;lov muddati o&apos;tganda (7+ kun)</li>
              <li>Noqonuniy faoliyat aniqlanganda</li>
              <li>Texnik xavfsizlik tahdidi mavjud bo&apos;lganda</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">8. Javobgarlik cheklovi</h2>
            <p>ZYRON platformasi &quot;bor holaticha&quot; taqdim etiladi. Biz quyidagilar uchun javobgar emasmiz:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Texnik nosozliklar tufayli yuzaga kelgan zararlar</li>
              <li>Uchinchi tomon xizmatlari tufayli yuzaga kelgan muammolar</li>
              <li>Foydalanuvchi xatosi tufayli yo&apos;qotilgan ma&apos;lumotlar</li>
            </ul>
            <p>ZYRON 99.9% uptime kafolatini taqdim etadi. Uptime kafolati buzilganda, ta&apos;sirlanagan oylik to&apos;lovning proporsional qismi qaytariladi.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">9. Amaldagi qonun</h2>
            <p>Ushbu shartlar O&apos;zbekiston Respublikasi qonunchiligiga muvofiq tartibga solinadi va talqin qilinadi. Har qanday nizo Toshkent shahar sudlari tomonidan hal qilinadi.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">10. Bog&apos;lanish</h2>
            <p>Foydalanish shartlari bo&apos;yicha savollar uchun:</p>
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
