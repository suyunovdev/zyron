import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "ZYRON blog — biznes texnologiyalar, SaaS, AI va startup yangiliklari. O'zbekiston IT bozori haqida eng so'nggi maqolalar.",
  alternates: { canonical: "https://zyron.uz/blog" },
  openGraph: {
    title: "Blog — ZYRON",
    description: "Biznes texnologiyalar, SaaS, AI va startup yangiliklari.",
    url: "https://zyron.uz/blog",
    type: "website",
  },
};

const posts = [
  {
    title: "ZYRON 1.0 — Platformamiz rasman ishga tushdi!",
    excerpt: "POS, ERP, CRM, AI va Cloud — barcha biznes ehtiyojlaringiz uchun yagona ekotizim. Birinchi versiyamiz nimalarni taklif qilishini bilib oling.",
    date: "17 iyul, 2026",
    readTime: "5 daqiqa",
    category: "Yangilik",
    categoryColor: "bg-emerald-500/15 text-emerald-400",
    image: "from-blue-600/20 to-cyan-600/20",
  },
  {
    title: "Nima uchun O'zbekiston bizneslariga POS tizimi kerak?",
    excerpt: "An'anaviy kassa apparatlaridan zamonaviy POS tizimlariga o'tish — nima uchun bu muhim va qanday boshlash kerak.",
    date: "15 iyul, 2026",
    readTime: "7 daqiqa",
    category: "Yo'riqnoma",
    categoryColor: "bg-blue-500/15 text-blue-400",
    image: "from-purple-600/20 to-pink-600/20",
  },
  {
    title: "AI biznesingizni qanday o'zgartiradi: 5 ta real misol",
    excerpt: "Sun'iy intellekt endi faqat katta korporatsiyalar uchun emas. Kichik va o'rta bizneslar AI dan qanday foyda olishi mumkin.",
    date: "12 iyul, 2026",
    readTime: "8 daqiqa",
    category: "AI",
    categoryColor: "bg-amber-500/15 text-amber-400",
    image: "from-amber-600/20 to-orange-600/20",
  },
  {
    title: "ERP vs CRM: Qaysi birini tanlash kerak?",
    excerpt: "Ko'p bizneslar ERP va CRM o'rtasidagi farqni tushunmaydi. Ikkalasining vazifalarini va qachon qaysi birini tanlashni tushuntiramiz.",
    date: "10 iyul, 2026",
    readTime: "6 daqiqa",
    category: "Yo'riqnoma",
    categoryColor: "bg-blue-500/15 text-blue-400",
    image: "from-emerald-600/20 to-green-600/20",
  },
  {
    title: "Cloud xavfsizlik: Ma'lumotlaringizni qanday himoya qilish",
    excerpt: "Bulutli xizmatlardan foydalanayotganda ma'lumotlar xavfsizligini ta'minlash uchun 10 ta muhim qadam.",
    date: "8 iyul, 2026",
    readTime: "9 daqiqa",
    category: "Xavfsizlik",
    categoryColor: "bg-red-500/15 text-red-400",
    image: "from-red-600/20 to-rose-600/20",
  },
  {
    title: "Restoran avtomatizatsiyasi: Stollardan oshxonagacha",
    excerpt: "Zamonaviy restoran boshqaruv tizimi — mijoz xizmatini yaxshilash, xarajatlarni kamaytirish va samaradorlikni oshirish.",
    date: "5 iyul, 2026",
    readTime: "6 daqiqa",
    category: "Mahsulot",
    categoryColor: "bg-purple-500/15 text-purple-400",
    image: "from-sky-600/20 to-indigo-600/20",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-10">
          <ArrowLeft size={16} />
          Bosh sahifa
        </Link>

        <div className="text-center mb-16">
          <p className="text-sm text-accent font-medium uppercase tracking-widest mb-4">Blog</p>
          <h1 className="text-3xl sm:text-5xl font-medium font-[family-name:var(--font-display)] gradient-text mb-6">
            Yangiliklar va maqolalar
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Biznes texnologiyalar, AI, SaaS va startup dunyosidan eng so&apos;nggi yangiliklar va foydali yo&apos;riqnomalar.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/5 border border-secondary/20 hover:border-secondary/40 transition-all group cursor-pointer">
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-[11px] px-2.5 py-1 rounded-full font-medium ${posts[0].categoryColor}`}>{posts[0].category}</span>
            <span className="text-xs text-gray-500 flex items-center gap-1"><Clock size={11} />{posts[0].readTime}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-medium text-white mb-3 group-hover:text-accent transition-colors font-[family-name:var(--font-display)]">
            {posts[0].title}
          </h2>
          <p className="text-sm text-gray-400 mb-4">{posts[0].excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">{posts[0].date}</span>
            <span className="flex items-center gap-1 text-sm text-accent group-hover:gap-2 transition-all">
              O&apos;qish <ArrowRight size={14} />
            </span>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {posts.slice(1).map((post) => (
            <article
              key={post.title}
              className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] transition-all group cursor-pointer"
            >
              {/* Colored header bar */}
              <div className={`h-24 rounded-lg bg-gradient-to-br ${post.image} mb-4 flex items-center justify-center`}>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">{post.category}</span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${post.categoryColor}`}>{post.category}</span>
                <span className="text-[10px] text-gray-600 flex items-center gap-1"><Clock size={10} />{post.readTime}</span>
              </div>

              <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-accent transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-xs text-gray-500 mb-3 line-clamp-2">{post.excerpt}</p>
              <span className="text-xs text-gray-600">{post.date}</span>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center">
          <h3 className="text-lg font-medium text-white mb-2 font-[family-name:var(--font-display)]">Yangiliklar obunasi</h3>
          <p className="text-sm text-gray-400 mb-4">Yangi maqolalar va ZYRON yangiliklari haqida birinchilardan bo&apos;lib xabardor bo&apos;ling</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email manzilingiz"
              className="flex-1 px-4 py-2.5 rounded-lg bg-white/[0.05] border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50"
            />
            <button className="px-5 py-2.5 rounded-lg bg-white text-[#0F172A] font-medium text-sm hover:bg-gray-200 transition-colors">
              Obuna
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
