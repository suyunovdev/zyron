import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie siyosati",
  description: "ZYRON veb-saytida cookie fayllaridan qanday foydalanilishi haqida.",
  alternates: { canonical: "https://zyron.uz/cookies" },
};

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-[#020617] text-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-10">
          <ArrowLeft size={16} />
          Bosh sahifa
        </Link>

        <h1 className="text-3xl sm:text-4xl font-medium font-[family-name:var(--font-display)] gradient-text mb-4">
          Cookie siyosati
        </h1>
        <p className="text-sm text-gray-500 mb-10">Oxirgi yangilanish: 17 iyul, 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-lg font-medium text-white mb-3">1. Cookie nima?</h2>
            <p>Cookie — bu veb-sayt tomonidan sizning qurilmangizga joylashtiriladigan kichik matn fayli. Cookielar veb-saytga sizni tanishga, afzalliklaringizni eslab qolishga va foydalanish tajribasini yaxshilashga yordam beradi.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">2. Biz ishlatadigan cookie turlari</h2>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <h3 className="text-sm font-semibold text-white mb-2">Zaruriy cookielar</h3>
                <p className="text-gray-400 text-sm">Saytning to&apos;g&apos;ri ishlashi uchun zarur. Autentifikatsiya, xavfsizlik va sessiya boshqaruvini ta&apos;minlaydi. Bu cookielarni o&apos;chirib bo&apos;lmaydi.</p>
                <div className="mt-2 text-xs text-gray-500">Misol: session_id, csrf_token, auth_token</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <h3 className="text-sm font-semibold text-white mb-2">Funksional cookielar</h3>
                <p className="text-gray-400 text-sm">Sizning afzalliklaringizni eslab qoladi — til tanlovi, mavzu sozlamalari va boshqa shaxsiy sozlamalar.</p>
                <div className="mt-2 text-xs text-gray-500">Misol: locale, theme, sidebar_collapsed</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <h3 className="text-sm font-semibold text-white mb-2">Analitik cookielar</h3>
                <p className="text-gray-400 text-sm">Saytdan qanday foydalanilishini tushunishimizga yordam beradi. Tashriflar soni, sahifalar ko&apos;rish, tashriflar davomiyligi kabi ma&apos;lumotlarni yig&apos;adi.</p>
                <div className="mt-2 text-xs text-gray-500">Misol: _ga, _gid (Google Analytics)</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <h3 className="text-sm font-semibold text-white mb-2">Marketing cookielar</h3>
                <p className="text-gray-400 text-sm">Sizga tegishli reklamalarni ko&apos;rsatish uchun ishlatiladi. Uchinchi tomon reklama platformalari tomonidan o&apos;rnatilishi mumkin.</p>
                <div className="mt-2 text-xs text-gray-500">Misol: _fbp, _gcl_au</div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">3. Cookie muddatlari</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 text-gray-400 font-medium">Tur</th>
                    <th className="text-left py-2 text-gray-400 font-medium">Muddat</th>
                    <th className="text-left py-2 text-gray-400 font-medium">Maqsad</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-white/5"><td className="py-2">Sessiya</td><td className="py-2">Brauzer yopilguncha</td><td className="py-2">Autentifikatsiya</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2">Doimiy</td><td className="py-2">1 yil</td><td className="py-2">Til sozlamalari</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2">Analitik</td><td className="py-2">2 yil</td><td className="py-2">Foydalanish statistikasi</td></tr>
                  <tr><td className="py-2">Marketing</td><td className="py-2">90 kun</td><td className="py-2">Reklama maqsadlari</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">4. Cookielarni boshqarish</h2>
            <p>Siz cookielarni brauzer sozlamalarida boshqarishingiz mumkin:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Barcha cookielarni qabul qilish yoki rad etish</li>
              <li>Cookie o&apos;rnatilganda ogohlantirish olish</li>
              <li>Mavjud cookielarni o&apos;chirish</li>
              <li>Ma&apos;lum saytlar uchun cookielarni bloklash</li>
            </ul>
            <p className="mt-3 text-gray-400">Diqqat: Zaruriy cookielarni o&apos;chirish saytning to&apos;g&apos;ri ishlashiga ta&apos;sir qilishi mumkin.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">5. Bog&apos;lanish</h2>
            <p>Cookie siyosati bo&apos;yicha savollar uchun:</p>
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
