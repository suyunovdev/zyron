import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Zap, Heart, Coffee, Laptop, GraduationCap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Karyera",
  description: "ZYRON jamoasiga qo'shiling. Full-Stack Developer, UI/UX Designer, DevOps, AI/ML Engineer — ochiq pozitsiyalar. Biznes texnologiya kelajagini birga quramiz.",
  alternates: { canonical: "https://zyron.uz/careers" },
  openGraph: {
    title: "Karyera — ZYRON",
    description: "ZYRON jamoasiga qo'shiling. Ochiq pozitsiyalar va imkoniyatlar.",
    url: "https://zyron.uz/careers",
    type: "website",
  },
};

const positions = [
  {
    title: "Senior Full-Stack Developer",
    team: "Engineering",
    location: "Toshkent / Remote",
    type: "Full-time",
    description: "Next.js, React, Node.js texnologiyalari bo'yicha tajribaga ega dasturchi. ZYRON platformasi arxitekturasini rivojlantirish va yangi modullar yaratish.",
    requirements: ["3+ yil tajriba (React, Node.js)", "TypeScript bilishi", "PostgreSQL / MongoDB", "REST API va GraphQL", "Git, CI/CD"],
  },
  {
    title: "UI/UX Designer",
    team: "Design",
    location: "Toshkent",
    type: "Full-time",
    description: "Foydalanuvchi tajribasini loyihalash, prototiplar yaratish va dizayn tizimini boshqarish. ZYRON mahsulotlari uchun zamonaviy va intuitiv interfeys yaratish.",
    requirements: ["2+ yil UI/UX tajriba", "Figma, Adobe XD", "Design System tajribasi", "Prototiplash va user testing", "Portfolio talab qilinadi"],
  },
  {
    title: "DevOps Engineer",
    team: "Infrastructure",
    location: "Toshkent / Remote",
    type: "Full-time",
    description: "ZYRON Cloud infratuzilmasini boshqarish, CI/CD pipeline'larni optimizatsiya qilish, xavfsizlik va monitoring tizimlarini sozlash.",
    requirements: ["2+ yil DevOps tajriba", "Docker, Kubernetes", "AWS / GCP / Hetzner", "Terraform, Ansible", "Monitoring (Grafana, Prometheus)"],
  },
  {
    title: "AI/ML Engineer",
    team: "AI Lab",
    location: "Remote",
    type: "Full-time",
    description: "ZYRON AI modullari uchun machine learning modellari yaratish — savdo prognozi, anomaliya aniqlash, mijoz segmentatsiyasi.",
    requirements: ["Python, PyTorch / TensorFlow", "NLP va Computer Vision", "MLOps tajribasi", "Statistika va matematik asos", "2+ yil ML tajriba"],
  },
  {
    title: "Sales Manager",
    team: "Sales",
    location: "Toshkent",
    type: "Full-time",
    description: "B2B mijozlar bilan ishlash, demo o'tkazish, shartnomalar tuzish. O'zbekiston bozorida ZYRON mahsulotlarini sotish va kengaytirish.",
    requirements: ["2+ yil B2B savdo tajriba", "IT/SaaS sohasida tajriba afzal", "Mukammal kommunikatsiya", "CRM bilan ishlash tajribasi", "O'zbek va rus tillarida erkin"],
  },
  {
    title: "Technical Support Specialist",
    team: "Support",
    location: "Toshkent",
    type: "Full-time",
    description: "Mijozlarga texnik yordam ko'rsatish, muammolarni hal qilish, onboarding jarayonini boshqarish.",
    requirements: ["IT sohasida bilim", "Muloqot qobiliyati", "Muammolarni hal qilish ko'nikmasi", "O'zbek, rus, ingliz tillari", "Sabr-toqatli va yordamga tayyor"],
  },
];

const benefits = [
  { icon: Laptop, title: "Zamonaviy texnologiyalar", desc: "Eng so'nggi texnologiyalar bilan ishlash imkoniyati" },
  { icon: Coffee, title: "Qulay ofis", desc: "Zamonaviy ofis, bepul choy-qahva va snacklar" },
  { icon: GraduationCap, title: "O'sish imkoniyati", desc: "Kurslar, konferensiyalar va mentorlik dasturi" },
  { icon: Heart, title: "Tibbiy sug'urta", desc: "To'liq tibbiy sug'urta barcha xodimlar uchun" },
  { icon: Globe, title: "Remote ishlash", desc: "Ko'pgina pozitsiyalar uchun remote ishlash imkoniyati" },
  { icon: Zap, title: "Tez o'sish", desc: "Startup muhiti — tez qaror qabul qilish va ta'sir ko'rsatish" },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-10">
          <ArrowLeft size={16} />
          Bosh sahifa
        </Link>

        <div className="text-center mb-16">
          <p className="text-sm text-accent font-medium uppercase tracking-widest mb-4">Karyera</p>
          <h1 className="text-3xl sm:text-5xl font-medium font-[family-name:var(--font-display)] gradient-text mb-6">
            Kelajakni birga quramiz
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            ZYRON — O&apos;zbekistondagi eng tez rivojlanayotgan biznes texnologiya ekotizimi. Iste&apos;dodli mutaxassislarni jamoamizga taklif qilamiz.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16">
          {benefits.map((b) => (
            <div key={b.title} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] transition-all">
              <b.icon size={20} className="text-accent mb-3" />
              <h3 className="text-sm font-semibold text-white mb-1">{b.title}</h3>
              <p className="text-xs text-gray-500">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Positions */}
        <h2 className="text-xl font-medium text-white mb-6 font-[family-name:var(--font-display)]">Ochiq pozitsiyalar</h2>
        <div className="space-y-4">
          {positions.map((pos) => (
            <div key={pos.title} className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-accent/30 transition-all group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-base font-semibold text-white group-hover:text-accent transition-colors">{pos.title}</h3>
                  <p className="text-xs text-gray-500">{pos.team}</p>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><MapPin size={12} />{pos.location}</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{pos.type}</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-3">{pos.description}</p>
              <div className="flex flex-wrap gap-2">
                {pos.requirements.map((req) => (
                  <span key={req} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/[0.08]">
                    {req}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 text-center">
          <h3 className="text-lg font-medium text-white mb-2">Qiziqyapsizmi?</h3>
          <p className="text-sm text-gray-400 mb-4">Rezyumeingizni yuboring yoki savollaringizni bering</p>
          <a
            href="https://t.me/zyrontech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#0F172A] font-medium px-6 py-2.5 rounded-lg hover:bg-gray-200 transition-colors text-sm"
          >
            Telegram orqali bog&apos;lanish
          </a>
        </div>
      </div>
    </div>
  );
}
