export type Locale = "en" | "uz" | "ru";

export const translations = {
  // ===== NAVBAR =====
  nav: {
    about: { en: "About", uz: "Biz haqimizda", ru: "О нас" },
    products: { en: "Products", uz: "Mahsulotlar", ru: "Продукты" },
    features: { en: "Features", uz: "Imkoniyatlar", ru: "Возможности" },
    pricing: { en: "Pricing", uz: "Narxlar", ru: "Цены" },
    contact: { en: "Contact", uz: "Aloqa", ru: "Контакты" },
    contactUs: { en: "Contact Us", uz: "Bog'lanish", ru: "Связаться" },
  },

  // ===== HERO =====
  hero: {
    badge: {
      en: "Introducing ZYRON — Business Technology Ecosystem",
      uz: "Tanishtiring: ZYRON — biznes texnologiyalar ekotizimi",
      ru: "Представляем ZYRON — экосистему бизнес-технологий",
    },
    title1: { en: "Beyond", uz: "Innovatsiyadan", ru: "За пределами" },
    title2: { en: "Innovation.", uz: "Narida.", ru: "Инноваций." },
    desc: {
      en: "Build smarter businesses with innovative technology solutions. Automate, manage, and grow with the power of AI and cloud.",
      uz: "Innovatsion texnologik yechimlar yordamida zamonaviy biznes quring. Sun'iy intellekt va bulut texnologiyalari bilan avtomatlashtiring, boshqaring va rivojlaning.",
      ru: "Создавайте умный бизнес с помощью инновационных технологических решений. Автоматизируйте, управляйте и масштабируйтесь с ИИ и облачными технологиями.",
    },
    cta1: { en: "Get Started", uz: "Boshlash", ru: "Начать" },
    cta2: { en: "Book a Demo", uz: "Demo ko'rish", ru: "Запросить демо" },
    cta3: { en: "Contact Us", uz: "Bog'lanish", ru: "Связаться" },
    trusted: {
      en: "Trusted by innovative businesses",
      uz: "Innovatsion kompaniyalar ishonch bildiradi",
      ru: "Нам доверяют инновационные компании",
    },
  },

  // ===== ABOUT =====
  about: {
    label: { en: "About Us", uz: "Biz haqimizda", ru: "О нас" },
    title: { en: "What is ZYRON?", uz: "ZYRON nima?", ru: "Что такое ZYRON?" },
    desc: {
      en: "ZYRON is a modern technology ecosystem that provides innovative software solutions for businesses of all sizes. We empower companies to automate, manage, and scale with cutting-edge tools.",
      uz: "ZYRON — har qanday ko'lamdagi bizneslar uchun innovatsion dasturiy yechimlar taqdim etuvchi zamonaviy texnologiya ekotizimi. Biz kompaniyalarga ilg'or vositalar orqali avtomatlashtirish, boshqarish va o'sish imkonini yaratamiz.",
      ru: "ZYRON — современная технологическая экосистема, предоставляющая инновационные программные решения для бизнеса любого масштаба. Мы даём компаниям передовые инструменты для автоматизации, управления и роста.",
    },
    features: {
      innovation: {
        title: { en: "Innovation", uz: "Innovatsiya", ru: "Инновации" },
        desc: {
          en: "Cutting-edge solutions that push boundaries of business technology.",
          uz: "Biznes texnologiyalari chegaralarini kengaytiradigan ilg'or yechimlar.",
          ru: "Передовые решения, раздвигающие границы бизнес-технологий.",
        },
      },
      automation: {
        title: { en: "Automation", uz: "Avtomatlashtirish", ru: "Автоматизация" },
        desc: {
          en: "Streamline operations with intelligent automation workflows.",
          uz: "Aqlli avtomatlashtirish jarayonlari bilan ishlarni soddalashtiring.",
          ru: "Упростите бизнес-процессы с помощью интеллектуальной автоматизации.",
        },
      },
      scalability: {
        title: { en: "Scalability", uz: "Kengayuvchanlik", ru: "Масштабируемость" },
        desc: {
          en: "Infrastructure that grows seamlessly with your business needs.",
          uz: "Biznesingiz ehtiyojiga qarab muammosiz kengayadigan infratuzilma.",
          ru: "Инфраструктура, которая легко масштабируется вместе с вашим бизнесом.",
        },
      },
      cloud: {
        title: { en: "Cloud Technology", uz: "Bulut texnologiyasi", ru: "Облачные технологии" },
        desc: {
          en: "Enterprise-grade cloud infrastructure for maximum reliability.",
          uz: "Maksimal ishonchlilik uchun korporativ darajadagi bulut infratuzilmasi.",
          ru: "Облачная инфраструктура корпоративного класса для максимальной надёжности.",
        },
      },
      ai: {
        title: { en: "AI Integration", uz: "Sun'iy intellekt", ru: "Интеграция ИИ" },
        desc: {
          en: "Harness artificial intelligence to make smarter business decisions.",
          uz: "Sun'iy intellekt yordamida aniqroq biznes qarorlari qabul qiling.",
          ru: "Принимайте более точные бизнес-решения с помощью искусственного интеллекта.",
        },
      },
      architecture: {
        title: { en: "Modern Architecture", uz: "Zamonaviy arxitektura", ru: "Современная архитектура" },
        desc: {
          en: "Built with the latest technologies for performance and security.",
          uz: "Yuqori unumdorlik va xavfsizlik uchun eng so'nggi texnologiyalar asosida qurilgan.",
          ru: "Построено на новейших технологиях для высокой производительности и безопасности.",
        },
      },
    },
  },

  // ===== PRODUCTS =====
  products: {
    label: { en: "Our Products", uz: "Mahsulotlarimiz", ru: "Наши продукты" },
    title: {
      en: "One Ecosystem. Endless Possibilities.",
      uz: "Bitta ekotizim. Cheksiz imkoniyatlar.",
      ru: "Одна экосистема. Безграничные возможности.",
    },
    desc: {
      en: "From POS to AI, ZYRON provides everything your business needs to thrive in the digital age.",
      uz: "POS tizimidan sun'iy intellektgacha — ZYRON raqamli davrda biznesingiz muvaffaqiyati uchun barcha kerakli vositalarni taqdim etadi.",
      ru: "От POS до ИИ — ZYRON предоставляет всё необходимое для процветания вашего бизнеса в цифровую эпоху.",
    },
    learnMore: { en: "Learn More", uz: "Batafsil", ru: "Подробнее" },
    items: {
      pos: {
        name: "ZYRON POS",
        tagline: { en: "Smart Point of Sale System", uz: "Aqlli savdo nuqtasi tizimi", ru: "Умная POS-система" },
        desc: {
          en: "Modern, fast, and intelligent POS system designed for seamless transactions and real-time analytics.",
          uz: "Uzluksiz tranzaksiyalar va real vaqtda analitika uchun yaratilgan zamonaviy, tezkor va aqlli POS tizimi.",
          ru: "Современная, быстрая и интеллектуальная POS-система для бесперебойных транзакций и аналитики в реальном времени.",
        },
        features: {
          en: ["Fast Checkout", "Inventory Sync", "Multi-terminal"],
          uz: ["Tezkor hisob-kitob", "Ombor sinxronlash", "Ko'p terminal"],
          ru: ["Быстрая оплата", "Синхронизация склада", "Мульти-терминал"],
        },
        // Mahsulot modal uchun kengaytirilgan ma'lumot
        fullDesc: {
          en: "ZYRON POS is a next-generation point of sale system that combines speed, reliability, and smart analytics. Process transactions in milliseconds, track inventory in real time, and gain insights into your sales performance — all from a single, intuitive dashboard.",
          uz: "ZYRON POS — tezkorlik, ishonchlilik va aqlli analitikani birlashtirgan yangi avlod savdo nuqtasi tizimi. Tranzaksiyalarni millisekundlarda amalga oshiring, omborni real vaqtda kuzating va savdo ko'rsatkichlaringizni bitta qulay boshqaruv panelidan tahlil qiling.",
          ru: "ZYRON POS — POS-система нового поколения, сочетающая скорость, надёжность и умную аналитику. Проводите транзакции за миллисекунды, отслеживайте запасы в реальном времени и получайте данные о продажах — всё из единой панели управления.",
        },
        modalFeatures: {
          en: ["Lightning-fast checkout", "Real-time inventory management", "Multi-terminal support", "Offline mode", "Receipt customization", "Barcode & QR scanning", "Employee access control", "Daily sales reports"],
          uz: ["Chaqmoqdek tez hisob-kitob", "Real vaqtda ombor boshqaruvi", "Ko'p terminallarni qo'llab-quvvatlash", "Oflayn rejim", "Chekni sozlash", "Shtrix-kod va QR skanerlash", "Xodim kirish nazorati", "Kunlik savdo hisobotlari"],
          ru: ["Молниеносная оплата", "Управление складом в реальном времени", "Поддержка нескольких терминалов", "Офлайн-режим", "Настройка чеков", "Сканирование штрих-кодов и QR", "Контроль доступа сотрудников", "Ежедневные отчёты о продажах"],
        },
      },
      restaurant: {
        name: "ZYRON Restaurant",
        tagline: { en: "Restaurant Management Platform", uz: "Restoran boshqaruv platformasi", ru: "Платформа управления рестораном" },
        desc: {
          en: "Complete solution for restaurants — from orders and kitchen display to delivery and analytics.",
          uz: "Restoranlar uchun yaxlit yechim — buyurtmalar va oshxona displeyidan yetkazib berish va analitikagacha.",
          ru: "Полное решение для ресторанов — от заказов и кухонного дисплея до доставки и аналитики.",
        },
        features: {
          en: ["Order Management", "Kitchen Display", "Table Booking"],
          uz: ["Buyurtmalarni boshqarish", "Oshxona displeyi", "Stolni bron qilish"],
          ru: ["Управление заказами", "Кухонный дисплей", "Бронирование столов"],
        },
        fullDesc: {
          en: "ZYRON Restaurant is a comprehensive platform for managing every aspect of your food service business. From front-of-house table management to back-of-house kitchen coordination, delivery tracking, and detailed analytics.",
          uz: "ZYRON Restaurant — restoran biznesingizning barcha jihatlarini boshqarish uchun keng qamrovli platforma. Zalda stollarni boshqarishdan oshxonadagi koordinatsiyagacha, yetkazib berishni kuzatish va batafsil analitikagacha.",
          ru: "ZYRON Restaurant — комплексная платформа для управления всеми аспектами ресторанного бизнеса. От управления залом до координации кухни, отслеживания доставки и детальной аналитики.",
        },
        modalFeatures: {
          en: ["Table management & booking", "Kitchen display system (KDS)", "Delivery & takeaway tracking", "Menu management", "Split billing", "Waiter mobile app", "Customer feedback", "Revenue analytics"],
          uz: ["Stollarni boshqarish va bron", "Oshxona displey tizimi (KDS)", "Yetkazib berish va olib ketishni kuzatish", "Menyuni boshqarish", "Hisobni bo'lish", "Ofitsiant mobil ilovasi", "Mijoz fikrlari", "Daromad analitikasi"],
          ru: ["Управление столами и бронирование", "Кухонный дисплей (KDS)", "Отслеживание доставки и самовывоза", "Управление меню", "Разделение счёта", "Мобильное приложение официанта", "Обратная связь от гостей", "Аналитика выручки"],
        },
      },
      retail: {
        name: "ZYRON Retail",
        tagline: { en: "Retail Business Management", uz: "Chakana savdo boshqaruvi", ru: "Управление розничной торговлей" },
        desc: {
          en: "End-to-end retail management with inventory tracking, sales analytics, and customer insights.",
          uz: "Omborni kuzatish, savdo analitikasi va mijozlar tahlili bilan to'liq chakana savdo boshqaruvi.",
          ru: "Полное управление розничной торговлей: отслеживание запасов, аналитика продаж и информация о клиентах.",
        },
        features: {
          en: ["Stock Management", "Sales Reports", "Multi-store"],
          uz: ["Ombor boshqaruvi", "Savdo hisobotlari", "Ko'p filial"],
          ru: ["Управление запасами", "Отчёты о продажах", "Мульти-магазин"],
        },
        fullDesc: {
          en: "ZYRON Retail provides everything you need to manage your retail business — from a single boutique to a multi-store chain. Track inventory, manage suppliers, analyze sales trends, and understand your customers better.",
          uz: "ZYRON Retail — chakana savdoni boshqarish uchun kerakli hamma narsa: bitta butikdan ko'p filialli tarmoqqacha. Omborni kuzating, yetkazib beruvchilarni boshqaring, savdo tendensiyalarini tahlil qiling va mijozlaringizni yaxshiroq tushuning.",
          ru: "ZYRON Retail предоставляет всё необходимое для управления розничной торговлей — от одного бутика до сети магазинов. Отслеживайте запасы, управляйте поставщиками, анализируйте тренды продаж и лучше понимайте клиентов.",
        },
        modalFeatures: {
          en: ["Multi-store inventory sync", "Supplier management", "Loyalty programs", "Barcode management", "Purchase orders", "Profit margin tracking", "Customer segmentation", "Automated reordering"],
          uz: ["Filiallararo ombor sinxronlash", "Yetkazib beruvchilarni boshqarish", "Sodiqlik dasturlari", "Shtrix-kodni boshqarish", "Xarid buyurtmalari", "Foyda marjasini kuzatish", "Mijozlarni segmentlash", "Avtomatik qayta buyurtma"],
          ru: ["Синхронизация складов между магазинами", "Управление поставщиками", "Программы лояльности", "Управление штрих-кодами", "Заказы поставщикам", "Отслеживание маржи", "Сегментация клиентов", "Автоматический перезаказ"],
        },
      },
      erp: {
        name: "ZYRON ERP",
        tagline: { en: "Enterprise Resource Planning", uz: "Korxona resurslarini rejalashtirish", ru: "Планирование ресурсов предприятия" },
        desc: {
          en: "Comprehensive ERP solution to manage finance, HR, supply chain, and operations in one platform.",
          uz: "Moliya, HR, ta'minot zanjiri va operatsiyalarni bitta platformada boshqarish uchun keng qamrovli ERP yechimi.",
          ru: "Комплексное ERP-решение для управления финансами, HR, цепочкой поставок и операциями на единой платформе.",
        },
        features: {
          en: ["Finance Module", "HR Management", "Supply Chain"],
          uz: ["Moliya moduli", "HR boshqaruvi", "Ta'minot zanjiri"],
          ru: ["Финансовый модуль", "Управление HR", "Цепочка поставок"],
        },
        fullDesc: {
          en: "ZYRON ERP unifies your entire business operations — finance, human resources, procurement, supply chain, and manufacturing — into a single, powerful platform with real-time visibility across every department.",
          uz: "ZYRON ERP butun biznes operatsiyalaringizni — moliya, kadrlar, xaridlar, ta'minot zanjiri va ishlab chiqarishni — bitta kuchli platformada birlashtiradi. Har bir bo'lim bo'yicha real vaqtda to'liq ko'rinish imkonini beradi.",
          ru: "ZYRON ERP объединяет все бизнес-операции — финансы, HR, закупки, цепочку поставок и производство — в единую мощную платформу с прозрачностью по каждому отделу в реальном времени.",
        },
        modalFeatures: {
          en: ["General ledger & accounting", "Payroll & HR management", "Procurement automation", "Warehouse management", "Manufacturing planning", "Business intelligence", "Multi-currency support", "Compliance reporting"],
          uz: ["Bosh daftar va buxgalteriya", "Ish haqi va HR boshqaruvi", "Xaridlarni avtomatlashtirish", "Ombor boshqaruvi", "Ishlab chiqarishni rejalashtirish", "Biznes-intellekt", "Ko'p valyutani qo'llab-quvvatlash", "Muvofiqlik hisobotlari"],
          ru: ["Главная книга и бухгалтерия", "Расчёт зарплат и управление HR", "Автоматизация закупок", "Управление складом", "Планирование производства", "Бизнес-аналитика", "Мультивалютная поддержка", "Отчётность по соответствию"],
        },
      },
      crm: {
        name: "ZYRON CRM",
        tagline: { en: "Customer Relationship Management", uz: "Mijozlar bilan munosabatlarni boshqarish", ru: "Управление взаимоотношениями с клиентами" },
        desc: {
          en: "Build stronger customer relationships with intelligent tracking, automation, and insights.",
          uz: "Aqlli kuzatuv, avtomatlashtirish va tahlillar yordamida mijozlar bilan mustahkam munosabatlar quring.",
          ru: "Стройте прочные отношения с клиентами с помощью интеллектуального отслеживания, автоматизации и аналитики.",
        },
        features: {
          en: ["Lead Tracking", "Email Automation", "Pipeline View"],
          uz: ["Lidlarni kuzatish", "Email avtomatlashtirish", "Savdo voronkasi"],
          ru: ["Отслеживание лидов", "Email-автоматизация", "Воронка продаж"],
        },
        fullDesc: {
          en: "ZYRON CRM helps you manage every customer interaction — from first contact to loyal advocate. Track leads, automate follow-ups, visualize your sales pipeline, and close more deals with data-driven insights.",
          uz: "ZYRON CRM har bir mijoz bilan muloqotni — birinchi aloqadan sodiq hamkorgacha — boshqarishga yordam beradi. Lidlarni kuzating, qayta aloqalarni avtomatlashtiring, savdo voronkasini ko'ring va ma'lumotlarga asoslangan tahlillar bilan ko'proq bitimlar tuzing.",
          ru: "ZYRON CRM помогает управлять каждым взаимодействием с клиентом — от первого контакта до лояльного партнёра. Отслеживайте лиды, автоматизируйте последующие контакты, визуализируйте воронку продаж и закрывайте больше сделок с помощью аналитики.",
        },
        modalFeatures: {
          en: ["Contact management", "Sales pipeline & forecasting", "Email campaigns", "Task & activity tracking", "Custom fields & workflows", "Deal scoring", "Reporting dashboard", "Third-party integrations"],
          uz: ["Kontaktlarni boshqarish", "Savdo voronkasi va prognozlash", "Email kampaniyalar", "Vazifalar va faoliyatni kuzatish", "Maxsus maydonlar va jarayonlar", "Bitim baholash", "Hisobot paneli", "Uchinchi tomon integratsiyalari"],
          ru: ["Управление контактами", "Воронка продаж и прогнозирование", "Email-кампании", "Отслеживание задач и активности", "Кастомные поля и процессы", "Скоринг сделок", "Панель отчётности", "Интеграции с внешними сервисами"],
        },
      },
      ai: {
        name: "ZYRON AI",
        tagline: { en: "AI Powered Business Assistant", uz: "Sun'iy intellektli biznes yordamchi", ru: "ИИ-помощник для бизнеса" },
        desc: {
          en: "Leverage artificial intelligence for predictions, automation, and smarter business decisions.",
          uz: "Bashoratlar, avtomatlashtirish va aniqroq biznes qarorlari uchun sun'iy intellektdan foydalaning.",
          ru: "Используйте ИИ для прогнозирования, автоматизации и принятия более точных бизнес-решений.",
        },
        features: {
          en: ["Smart Predictions", "Auto Reports", "NLP Assistant"],
          uz: ["Aqlli bashoratlar", "Avtomatik hisobotlar", "NLP yordamchi"],
          ru: ["Умные прогнозы", "Авто-отчёты", "NLP-ассистент"],
        },
        fullDesc: {
          en: "ZYRON AI brings the power of artificial intelligence directly into your business workflows. Get predictive analytics, automated report generation, natural language querying, and intelligent recommendations — all without needing a data science team.",
          uz: "ZYRON AI sun'iy intellekt kuchini to'g'ridan-to'g'ri biznes jarayonlaringizga olib keladi. Bashoratli analitika, avtomatik hisobot yaratish, tabiiy til bilan so'rovlar va aqlli tavsiyalar — bularning barchasi uchun ma'lumotlar bo'yicha mutaxassislar jamoasi kerak emas.",
          ru: "ZYRON AI привносит мощь искусственного интеллекта прямо в ваши бизнес-процессы. Предиктивная аналитика, автоматическая генерация отчётов, запросы на естественном языке и умные рекомендации — без команды дата-сайентистов.",
        },
        modalFeatures: {
          en: ["Demand forecasting", "Anomaly detection", "Natural language queries", "Auto-generated reports", "Customer behavior analysis", "Price optimization", "Chatbot integration", "Trend analysis"],
          uz: ["Talab prognozi", "Anomaliyalarni aniqlash", "Tabiiy tilda so'rovlar", "Avtomatik hisobotlar", "Mijoz xulqi tahlili", "Narx optimallashtirish", "Chatbot integratsiyasi", "Trend tahlili"],
          ru: ["Прогнозирование спроса", "Обнаружение аномалий", "Запросы на естественном языке", "Авто-генерация отчётов", "Анализ поведения клиентов", "Оптимизация цен", "Интеграция чат-бота", "Анализ трендов"],
        },
      },
      cloud: {
        name: "ZYRON Cloud",
        tagline: { en: "Cloud Infrastructure Services", uz: "Bulut infratuzilma xizmatlari", ru: "Облачная инфраструктура" },
        desc: {
          en: "Secure, scalable cloud infrastructure designed for modern business applications.",
          uz: "Zamonaviy biznes ilovalar uchun yaratilgan xavfsiz va kengaytiriladigan bulut infratuzilmasi.",
          ru: "Безопасная масштабируемая облачная инфраструктура для современных бизнес-приложений.",
        },
        features: {
          en: ["99.9% Uptime", "Auto Scaling", "Data Backup"],
          uz: ["99.9% uzluksiz ishlash", "Avtomatik kengayish", "Ma'lumot zaxirasi"],
          ru: ["99.9% аптайм", "Авто-масштабирование", "Резервное копирование"],
        },
        fullDesc: {
          en: "ZYRON Cloud provides enterprise-grade cloud infrastructure with guaranteed 99.9% uptime, automatic scaling, and robust data protection. Your business data is always available, secure, and backed up across multiple regions.",
          uz: "ZYRON Cloud kafolatlangan 99.9% uzluksiz ishlash, avtomatik kengayish va kuchli ma'lumotlar himoyasi bilan korporativ darajadagi bulut infratuzilmasini taqdim etadi. Biznes ma'lumotlaringiz doimo mavjud, xavfsiz va bir nechta mintaqalarda zaxiralanadi.",
          ru: "ZYRON Cloud предоставляет облачную инфраструктуру корпоративного класса с гарантированным аптаймом 99.9%, автоматическим масштабированием и надёжной защитой данных. Ваши бизнес-данные всегда доступны, защищены и резервируются в нескольких регионах.",
        },
        modalFeatures: {
          en: ["99.9% SLA guarantee", "Multi-region deployment", "Auto-scaling infrastructure", "Automated backups", "DDoS protection", "SSL/TLS encryption", "CDN integration", "24/7 monitoring"],
          uz: ["99.9% SLA kafolati", "Ko'p mintaqali joylashtirish", "Avtomatik kengayadigan infratuzilma", "Avtomatik zaxiralash", "DDoS himoyasi", "SSL/TLS shifrlash", "CDN integratsiyasi", "24/7 monitoring"],
          ru: ["Гарантия SLA 99.9%", "Мультирегиональное развёртывание", "Авто-масштабируемая инфраструктура", "Автоматическое резервирование", "Защита от DDoS", "SSL/TLS шифрование", "Интеграция с CDN", "Мониторинг 24/7"],
        },
      },
      analytics: {
        name: "ZYRON Analytics",
        tagline: { en: "Smart Business Reports", uz: "Aqlli biznes hisobotlari", ru: "Умная бизнес-аналитика" },
        desc: {
          en: "Transform raw data into actionable insights with beautiful dashboards and real-time reports.",
          uz: "Xom ma'lumotlarni chiroyli boshqaruv panellari va real vaqtdagi hisobotlar yordamida amaliy xulosalarga aylantiring.",
          ru: "Превращайте сырые данные в полезные инсайты с помощью красивых дашбордов и отчётов в реальном времени.",
        },
        features: {
          en: ["Real-time Data", "Custom Dashboards", "Export Tools"],
          uz: ["Real vaqt ma'lumotlar", "Maxsus panellar", "Eksport vositalari"],
          ru: ["Данные в реальном времени", "Настраиваемые дашборды", "Инструменты экспорта"],
        },
        fullDesc: {
          en: "ZYRON Analytics turns your business data into a competitive advantage. Create custom dashboards, set up automated reports, track KPIs in real time, and share insights across your team — all with a beautiful, intuitive interface.",
          uz: "ZYRON Analytics biznes ma'lumotlaringizni raqobat ustunligiga aylantiradi. Maxsus panellar yarating, avtomatik hisobotlarni sozlang, KPI ko'rsatkichlarini real vaqtda kuzating va jamoangiz bilan tahlillarni ulashing — barchasi chiroyli va qulay interfeys orqali.",
          ru: "ZYRON Analytics превращает бизнес-данные в конкурентное преимущество. Создавайте кастомные дашборды, настраивайте автоматические отчёты, отслеживайте KPI в реальном времени и делитесь инсайтами с командой — всё через красивый и интуитивный интерфейс.",
        },
        modalFeatures: {
          en: ["Custom dashboard builder", "Real-time KPI tracking", "Automated scheduled reports", "Data visualization", "Export to PDF/Excel/CSV", "Comparative analysis", "Team sharing & permissions", "API data connectors"],
          uz: ["Maxsus panel yaratuvchi", "Real vaqtda KPI kuzatuv", "Avtomatik rejalashtirilgan hisobotlar", "Ma'lumotlarni vizualizatsiya", "PDF/Excel/CSV ga eksport", "Qiyosiy tahlil", "Jamoa bilan ulashish va ruxsatlar", "API ma'lumot ulagichlari"],
          ru: ["Конструктор дашбордов", "Отслеживание KPI в реальном времени", "Автоматические плановые отчёты", "Визуализация данных", "Экспорт в PDF/Excel/CSV", "Сравнительный анализ", "Шаринг и права доступа для команды", "API-коннекторы данных"],
        },
      },
    },
  },

  // ===== FEATURES =====
  features: {
    label: { en: "Features", uz: "Imkoniyatlar", ru: "Возможности" },
    title: { en: "Built for the Future", uz: "Kelajak uchun qurilgan", ru: "Создано для будущего" },
    desc: {
      en: "Every feature is designed to help your business move faster, operate smarter, and grow stronger.",
      uz: "Har bir imkoniyat biznesingiz tezroq ishlashi, aqlliroq boshqarilishi va barqaror o'sishi uchun yaratilgan.",
      ru: "Каждая функция создана, чтобы ваш бизнес работал быстрее, управлялся умнее и рос увереннее.",
    },
    items: [
      {
        title: { en: "AI Powered", uz: "Sun'iy intellekt", ru: "На базе ИИ" },
        desc: { en: "Machine learning and intelligent automation built-in.", uz: "Ichki mashinali o'rganish va aqlli avtomatlashtirish.", ru: "Встроенное машинное обучение и интеллектуальная автоматизация." },
      },
      {
        title: { en: "Cloud Based", uz: "Bulutga asoslangan", ru: "Облачное решение" },
        desc: { en: "Access your data anywhere with enterprise cloud.", uz: "Korporativ bulut orqali ma'lumotlaringizga istalgan joydan kiring.", ru: "Доступ к данным из любой точки мира через корпоративное облако." },
      },
      {
        title: { en: "Multi Platform", uz: "Ko'p platformali", ru: "Мультиплатформенность" },
        desc: { en: "Web, mobile, tablet — works on every device.", uz: "Veb, mobil, planshet — barcha qurilmalarda ishlaydi.", ru: "Веб, мобильный, планшет — работает на любом устройстве." },
      },
      {
        title: { en: "Secure Architecture", uz: "Xavfsiz arxitektura", ru: "Безопасная архитектура" },
        desc: { en: "End-to-end encryption and SOC2 compliance.", uz: "Uchidan uchigacha shifrlash va SOC2 standartlariga muvofiqlik.", ru: "Сквозное шифрование и соответствие стандарту SOC2." },
      },
      {
        title: { en: "Real Time Analytics", uz: "Real vaqt analitika", ru: "Аналитика в реальном времени" },
        desc: { en: "Live dashboards and instant business insights.", uz: "Jonli panellar va tezkor biznes tahlillari.", ru: "Живые дашборды и мгновенная бизнес-аналитика." },
      },
      {
        title: { en: "Automation Tools", uz: "Avtomatlashtirish", ru: "Автоматизация" },
        desc: { en: "Automate repetitive tasks and workflows.", uz: "Takroriy vazifalar va jarayonlarni avtomatlashtiring.", ru: "Автоматизируйте повторяющиеся задачи и рабочие процессы." },
      },
      {
        title: { en: "Modern Dashboard", uz: "Zamonaviy panel", ru: "Современная панель" },
        desc: { en: "Beautiful, intuitive management interface.", uz: "Chiroyli va qulay boshqaruv interfeysi.", ru: "Красивый и интуитивный интерфейс управления." },
      },
      {
        title: { en: "High Performance", uz: "Yuqori tezlik", ru: "Высокая скорость" },
        desc: { en: "Sub-second response times and 99.9% uptime.", uz: "1 soniyadan kam javob vaqti va 99.9% uzluksiz ishlash.", ru: "Время отклика менее секунды и аптайм 99.9%." },
      },
      {
        title: { en: "Scalable Infrastructure", uz: "Kengaytiriladigan tizim", ru: "Масштабируемость" },
        desc: { en: "From startup to enterprise, scales with you.", uz: "Startapdan korporatsiyagacha — siz bilan birga o'sadi.", ru: "От стартапа до корпорации — растёт вместе с вами." },
      },
      {
        title: { en: "Enterprise Security", uz: "Korporativ xavfsizlik", ru: "Корпоративная безопасность" },
        desc: { en: "Role-based access, audit logs, and compliance.", uz: "Rolga asoslangan kirish, audit loglari va standartlarga muvofiqlik.", ru: "Ролевой доступ, журналы аудита и соответствие стандартам." },
      },
    ],
  },

  // ===== INDUSTRIES =====
  industries: {
    label: { en: "Industries", uz: "Sohalar", ru: "Отрасли" },
    title: { en: "Who is it for?", uz: "Kim uchun?", ru: "Для кого?" },
    desc: {
      en: "ZYRON serves businesses across every industry, from local shops to global enterprises.",
      uz: "ZYRON mahalliy do'konlardan yirik korporatsiyalargacha — barcha sohalardagi bizneslarga xizmat qiladi.",
      ru: "ZYRON обслуживает бизнес во всех отраслях — от локальных магазинов до глобальных корпораций.",
    },
    items: [
      { name: { en: "Restaurants", uz: "Restoranlar", ru: "Рестораны" }, desc: { en: "Full-service dining to fast food chains", uz: "To'liq xizmatli restoranlardan tezkor ovqatlanish tarmoqlarigacha", ru: "От ресторанов полного обслуживания до сетей фастфуда" } },
      { name: { en: "Cafes", uz: "Kafelar", ru: "Кафе" }, desc: { en: "Coffee shops and casual eateries", uz: "Qahvaxonalar va kundalik ovqatlanish joylari", ru: "Кофейни и заведения повседневного формата" } },
      { name: { en: "Retail Stores", uz: "Chakana do'konlar", ru: "Розничные магазины" }, desc: { en: "Fashion, electronics, and specialty shops", uz: "Kiyim-kechak, elektronika va ixtisoslashgan do'konlar", ru: "Мода, электроника и специализированные магазины" } },
      { name: { en: "Supermarkets", uz: "Supermarketlar", ru: "Супермаркеты" }, desc: { en: "Grocery stores and hypermarkets", uz: "Oziq-ovqat do'konlari va gipermarketlar", ru: "Продуктовые магазины и гипермаркеты" } },
      { name: { en: "Educational Centers", uz: "Ta'lim markazlari", ru: "Учебные центры" }, desc: { en: "Schools, courses, and learning platforms", uz: "Maktablar, kurslar va onlayn ta'lim platformalari", ru: "Школы, курсы и образовательные платформы" } },
      { name: { en: "Startups", uz: "Startaplar", ru: "Стартапы" }, desc: { en: "Fast-growing tech and service startups", uz: "Tez rivojlanayotgan texnologiya va xizmat startaplari", ru: "Быстрорастущие технологические и сервисные стартапы" } },
      { name: { en: "SMEs", uz: "KO'B — Kichik va O'rta Biznes", ru: "МСБ — Малый и средний бизнес" }, desc: { en: "Small and medium-sized enterprises", uz: "Kichik va o'rta hajmdagi korxonalar", ru: "Предприятия малого и среднего бизнеса" } },
      { name: { en: "Enterprises", uz: "Korporatsiyalar", ru: "Корпорации" }, desc: { en: "Large-scale corporate organizations", uz: "Yirik korporativ tashkilotlar", ru: "Крупные корпоративные организации" } },
    ],
  },

  // ===== WHY ZYRON =====
  whyZyron: {
    label: { en: "Why ZYRON", uz: "Nega ZYRON", ru: "Почему ZYRON" },
    title: { en: "Why Choose ZYRON?", uz: "Nega aynan ZYRON?", ru: "Почему выбирают ZYRON?" },
    desc: {
      en: "We combine premium design, modern technology, and intelligent automation to deliver an unmatched business technology experience.",
      uz: "Biz premium dizayn, zamonaviy texnologiya va aqlli avtomatlashtirishni birlashtirib, tengsiz biznes texnologiya tajribasini taqdim etamiz.",
      ru: "Мы объединяем премиальный дизайн, современные технологии и интеллектуальную автоматизацию, создавая непревзойдённый опыт бизнес-технологий.",
    },
    items: [
      { title: { en: "Premium Experience", uz: "Premium tajriba", ru: "Премиальный опыт" }, desc: { en: "World-class UI/UX designed for maximum productivity.", uz: "Maksimal unumdorlik uchun yaratilgan jahon darajasidagi UI/UX.", ru: "UI/UX мирового уровня для максимальной продуктивности." } },
      { title: { en: "Modern Technology", uz: "Zamonaviy texnologiya", ru: "Современные технологии" }, desc: { en: "Built with the latest frameworks and architectures.", uz: "Eng so'nggi freymvorklar va arxitekturalar asosida qurilgan.", ru: "Построено на новейших фреймворках и архитектурах." } },
      { title: { en: "Secure Systems", uz: "Xavfsiz tizimlar", ru: "Безопасные системы" }, desc: { en: "Bank-grade security for all your business data.", uz: "Barcha biznes ma'lumotlaringiz uchun bank darajasidagi xavfsizlik.", ru: "Банковский уровень защиты для всех бизнес-данных." } },
      { title: { en: "Fast Performance", uz: "Tez ishlash", ru: "Высокая скорость" }, desc: { en: "Optimized for speed with sub-second load times.", uz: "1 soniyadan kam yuklanish vaqti bilan tezlik uchun optimallashtirilgan.", ru: "Оптимизировано для скорости с загрузкой менее секунды." } },
      { title: { en: "AI Integration", uz: "Sun'iy intellekt", ru: "Интеграция ИИ" }, desc: { en: "Smart recommendations and predictive analytics.", uz: "Aqlli tavsiyalar va bashoratli analitika.", ru: "Умные рекомендации и предиктивная аналитика." } },
      { title: { en: "Smart Automation", uz: "Aqlli avtomatlashtirish", ru: "Умная автоматизация" }, desc: { en: "Eliminate manual work with intelligent workflows.", uz: "Aqlli jarayonlar yordamida qo'l mehnatini bartaraf eting.", ru: "Устраните ручной труд с помощью интеллектуальных процессов." } },
      { title: { en: "24/7 Support", uz: "24/7 qo'llab-quvvatlash", ru: "Поддержка 24/7" }, desc: { en: "Dedicated support team available around the clock.", uz: "Kechayu kunduz xizmat ko'rsatuvchi maxsus yordam jamoasi.", ru: "Выделенная команда поддержки, доступная круглосуточно." } },
      { title: { en: "Scalable Solutions", uz: "Kengaytiriladigan yechimlar", ru: "Масштабируемые решения" }, desc: { en: "Grows with your business from day one to IPO.", uz: "Birinchi kundan to IPO gacha biznesingiz bilan birga o'sadi.", ru: "Растёт вместе с вашим бизнесом — от первого дня до IPO." } },
    ],
  },

  // ===== TECH STACK =====
  techStack: {
    label: { en: "Technology", uz: "Texnologiya", ru: "Технологии" },
    title: { en: "Our Technology Stack", uz: "Bizning texnologiyalarimiz", ru: "Наш технологический стек" },
    items: [
      { name: "AI", desc: { en: "Machine Learning & NLP", uz: "Mashinali o'rganish va NLP", ru: "Машинное обучение и NLP" } },
      { name: "Cloud", desc: { en: "Distributed Infrastructure", uz: "Taqsimlangan infratuzilma", ru: "Распределённая инфраструктура" } },
      { name: "SaaS", desc: { en: "Software as a Service", uz: "Xizmat sifatidagi dastur", ru: "Программное обеспечение как услуга" } },
      { name: "POS", desc: { en: "Point of Sale Systems", uz: "Savdo nuqtasi tizimlari", ru: "POS-системы" } },
      { name: "ERP", desc: { en: "Enterprise Resource Planning", uz: "Korxona resurslarini rejalashtirish", ru: "Планирование ресурсов предприятия" } },
      { name: "CRM", desc: { en: "Customer Management", uz: "Mijozlarni boshqarish", ru: "Управление клиентами" } },
      { name: "Automation", desc: { en: "Business Process Automation", uz: "Biznes jarayonlarni avtomatlashtirish", ru: "Автоматизация бизнес-процессов" } },
      { name: "Analytics", desc: { en: "Data Intelligence", uz: "Ma'lumotlar tahlili", ru: "Аналитика данных" } },
    ],
  },

  // ===== STATS =====
  stats: {
    items: [
      { value: "99.9%", label: { en: "System Reliability", uz: "Tizim ishonchliligi", ru: "Надёжность системы" } },
      { value: "24/7", label: { en: "Customer Support", uz: "Mijozlarni qo'llab-quvvatlash", ru: "Поддержка клиентов" } },
      { value: "100%", label: { en: "Enterprise Security", uz: "Korporativ xavfsizlik", ru: "Корпоративная безопасность" } },
      { value: "∞", label: { en: "Unlimited Scalability", uz: "Cheksiz kengayuvchanlik", ru: "Безграничная масштабируемость" } },
    ],
  },

  // ===== PRICING =====
  pricing: {
    label: { en: "Pricing", uz: "Narxlar", ru: "Цены" },
    title: { en: "Simple, Transparent Pricing", uz: "Sodda va shaffof narxlar", ru: "Простые и прозрачные цены" },
    desc: {
      en: "Choose the plan that fits your business. Upgrade or downgrade at any time.",
      uz: "Biznesingizga mos tarifni tanlang. Istalgan vaqtda o'zgartirish mumkin.",
      ru: "Выберите тариф, подходящий вашему бизнесу. Меняйте в любое время.",
    },
    monthly: { en: "Monthly", uz: "Oylik", ru: "Помесячно" },
    yearly: { en: "Yearly", uz: "Yillik", ru: "Годовой" },
    mostPopular: { en: "Most Popular", uz: "Eng ommabop", ru: "Самый популярный" },
    getStarted: { en: "Get Started", uz: "Boshlash", ru: "Начать" },
    contactSales: { en: "Contact Sales", uz: "Savdo bo'limiga murojaat", ru: "Связаться с отделом продаж" },
    perMonth: { en: "/mo", uz: "/oy", ru: "/мес" },
    custom: { en: "Custom", uz: "Kelishiladi", ru: "По запросу" },
    plans: {
      starter: {
        name: { en: "Starter", uz: "Boshlang'ich", ru: "Стартовый" },
        desc: { en: "For small businesses just getting started", uz: "Yangi boshlanayotgan kichik bizneslar uchun", ru: "Для малого бизнеса на старте" },
      },
      professional: {
        name: { en: "Professional", uz: "Professional", ru: "Профессиональный" },
        desc: { en: "For growing businesses that need more power", uz: "O'sib borayotgan va ko'proq imkoniyat kerak bo'lgan bizneslar uchun", ru: "Для растущего бизнеса, которому нужно больше возможностей" },
      },
      enterprise: {
        name: { en: "Enterprise", uz: "Korporativ", ru: "Корпоративный" },
        desc: { en: "For large organizations with custom needs", uz: "Individual ehtiyojlari bo'lgan yirik tashkilotlar uchun", ru: "Для крупных организаций с индивидуальными потребностями" },
      },
    },
    features: {
      en: {
        starter: ["1 POS Terminal", "Basic Analytics", "Email Support", "Cloud Storage 5GB", "1 User Account"],
        professional: ["5 POS Terminals", "Advanced Analytics", "Priority Support", "Cloud Storage 50GB", "10 User Accounts", "CRM Module", "API Access"],
        enterprise: ["Unlimited Terminals", "Custom Analytics", "24/7 Dedicated Support", "Unlimited Cloud Storage", "Unlimited Users", "Full ERP + CRM", "Custom Integrations", "SLA Guarantee"],
      },
      uz: {
        starter: ["1 ta POS terminal", "Asosiy analitika", "Email orqali yordam", "5 GB bulut xotira", "1 ta foydalanuvchi"],
        professional: ["5 ta POS terminal", "Kengaytirilgan analitika", "Ustuvor qo'llab-quvvatlash", "50 GB bulut xotira", "10 ta foydalanuvchi", "CRM moduli", "API kirish imkoni"],
        enterprise: ["Cheksiz terminallar", "Maxsus analitika", "24/7 shaxsiy qo'llab-quvvatlash", "Cheksiz bulut xotira", "Cheksiz foydalanuvchilar", "To'liq ERP + CRM", "Maxsus integratsiyalar", "SLA kafolati"],
      },
      ru: {
        starter: ["1 POS-терминал", "Базовая аналитика", "Поддержка по email", "Облачное хранилище 5 ГБ", "1 пользователь"],
        professional: ["5 POS-терминалов", "Расширенная аналитика", "Приоритетная поддержка", "Облачное хранилище 50 ГБ", "10 пользователей", "CRM-модуль", "Доступ к API"],
        enterprise: ["Безлимит терминалов", "Индивидуальная аналитика", "Выделенная поддержка 24/7", "Безлимит облачного хранилища", "Безлимит пользователей", "Полный ERP + CRM", "Индивидуальные интеграции", "Гарантия SLA"],
      },
    },
  },

  // ===== TESTIMONIALS =====
  testimonials: {
    label: { en: "Testimonials", uz: "Mijozlar fikri", ru: "Отзывы клиентов" },
    title: { en: "Loved by Businesses", uz: "Bizneslar tomonidan tan olingan", ru: "Выбор успешных компаний" },
    // Izoh: Quyidagi fikrlar namunaviy (placeholder) bo'lib, haqiqiy mijozlar
    // ma'lumotlari bilan almashtirilishi kerak.
    placeholder: {
      en: "These testimonials are sample placeholders. Replace with real customer feedback.",
      uz: "Bu fikrlar namunaviy. Haqiqiy mijozlar fikrlari bilan almashtiring.",
      ru: "Это примеры отзывов. Замените реальными отзывами клиентов.",
    },
    items: [
      {
        name: "Sarah Johnson",
        role: { en: "CEO, FoodChain Co.", uz: "Bosh direktor, FoodChain Co.", ru: "Генеральный директор, FoodChain Co." },
        content: {
          en: "ZYRON transformed our restaurant operations completely. We saw a 40% increase in efficiency within the first month.",
          uz: "ZYRON restoran faoliyatimizni tubdan o'zgartirdi. Birinchi oyning o'zidayoq samaradorlik 40% ga oshdi.",
          ru: "ZYRON полностью преобразил работу нашего ресторана. Уже в первый месяц эффективность выросла на 40%.",
        },
        stat: "+40%",
        isPlaceholder: true,
      },
      {
        name: "Michael Chen",
        role: { en: "CTO, RetailMax", uz: "Texnik direktor, RetailMax", ru: "Технический директор, RetailMax" },
        content: {
          en: "The POS system is incredibly fast and intuitive. Our staff training time dropped from 2 weeks to 2 days.",
          uz: "POS tizimi nihoyatda tez va tushunarli. Xodimlarni o'qitish vaqti 2 haftadan 2 kunga qisqardi.",
          ru: "POS-система невероятно быстрая и интуитивная. Время обучения персонала сократилось с 2 недель до 2 дней.",
        },
        stat: "85%",
        isPlaceholder: true,
      },
      {
        name: "Emily Rodriguez",
        role: { en: "Operations Director, TechStart", uz: "Operatsiyalar direktori, TechStart", ru: "Директор по операциям, TechStart" },
        content: {
          en: "Moving to ZYRON ERP consolidated our 5 separate tools into one platform. Game changer for our workflow.",
          uz: "ZYRON ERP ga o'tish 5 ta alohida vositamizni bitta platformaga birlashtirdi. Bu ish jarayonimizni keskin yaxshiladi.",
          ru: "Переход на ZYRON ERP объединил 5 наших инструментов в одну платформу. Это кардинально изменило наш рабочий процесс.",
        },
        stat: "5-in-1",
        isPlaceholder: true,
      },
      {
        name: "James Wilson",
        role: { en: "Founder, CloudFirst", uz: "Asoschisi, CloudFirst", ru: "Основатель, CloudFirst" },
        content: {
          en: "The AI analytics feature helped us identify revenue opportunities we were completely missing. ROI was immediate.",
          uz: "AI analitika xususiyati biz butunlay e'tibordan chetda qoldirayotgan daromad imkoniyatlarini aniqlashga yordam berdi. Natija darhol ko'rindi.",
          ru: "ИИ-аналитика помогла выявить возможности для дохода, которые мы полностью упускали. Окупаемость была мгновенной.",
        },
        stat: "+65%",
        isPlaceholder: true,
      },
    ],
  },

  // ===== FAQ =====
  faq: {
    label: { en: "FAQ", uz: "Ko'p beriladigan savollar", ru: "Вопросы и ответы" },
    title: { en: "Frequently Asked Questions", uz: "Ko'p beriladigan savollar", ru: "Часто задаваемые вопросы" },
    items: [
      {
        q: { en: "What products does ZYRON offer?", uz: "ZYRON qanday mahsulotlar taklif qiladi?", ru: "Какие продукты предлагает ZYRON?" },
        a: {
          en: "ZYRON offers a complete business technology ecosystem including POS Systems, Restaurant Management, Retail Management, ERP, CRM, AI Solutions, Cloud Services, and Analytics Platforms.",
          uz: "ZYRON POS tizimlari, restoran boshqaruvi, chakana savdo boshqaruvi, ERP, CRM, AI yechimlari, bulut xizmatlari va analitika platformalarini o'z ichiga olgan to'liq biznes texnologiya ekotizimini taklif qiladi.",
          ru: "ZYRON предлагает полную экосистему бизнес-технологий: POS-системы, управление ресторанами и розничной торговлей, ERP, CRM, ИИ-решения, облачные сервисы и аналитические платформы.",
        },
      },
      {
        q: { en: "Can I use ZYRON for my restaurant?", uz: "ZYRON ni restoranim uchun ishlata olamanmi?", ru: "Подходит ли ZYRON для ресторана?" },
        a: {
          en: "Absolutely! ZYRON Restaurant is specifically designed for food service businesses, featuring order management, kitchen display systems, table booking, delivery integration, and real-time analytics.",
          uz: "Albatta! ZYRON Restaurant oziq-ovqat xizmati bizneslari uchun maxsus ishlab chiqilgan: buyurtmalarni boshqarish, oshxona displeyi, stollarni bron qilish, yetkazib berish integratsiyasi va real vaqtda analitika.",
          ru: "Безусловно! ZYRON Restaurant специально разработан для ресторанного бизнеса: управление заказами, кухонный дисплей, бронирование столов, интеграция с доставкой и аналитика в реальном времени.",
        },
      },
      {
        q: { en: "How much does ZYRON cost?", uz: "ZYRON qancha turadi?", ru: "Сколько стоит ZYRON?" },
        a: {
          en: "ZYRON offers flexible pricing starting at $29/month for Starter plans. Professional plans start at $79/month, and Enterprise plans are custom-priced based on your needs.",
          uz: "ZYRON Boshlang'ich tarif uchun oyiga $29 dan boshlanadigan moslashuvchan narxlarni taklif qiladi. Professional tarif oyiga $79 dan, Korporativ tarif esa ehtiyojlaringizga qarab individual belgilanadi.",
          ru: "ZYRON предлагает гибкие тарифы от $29/мес за Стартовый план. Профессиональный — от $79/мес, а Корпоративный рассчитывается индивидуально под ваши потребности.",
        },
      },
      {
        q: { en: "Is my data secure with ZYRON?", uz: "Ma'lumotlarim ZYRON da xavfsizmi?", ru: "Безопасны ли мои данные в ZYRON?" },
        a: {
          en: "Yes, ZYRON uses enterprise-grade security with end-to-end encryption, SOC2 compliance, role-based access control, and regular security audits to protect your business data.",
          uz: "Ha, ZYRON biznes ma'lumotlaringizni himoya qilish uchun uchidan uchigacha shifrlash, SOC2 standartlariga muvofiqlik, rolga asoslangan kirish nazorati va muntazam xavfsizlik tekshiruvlaridan foydalanadi.",
          ru: "Да, ZYRON обеспечивает корпоративный уровень безопасности: сквозное шифрование, соответствие SOC2, ролевой контроль доступа и регулярные аудиты безопасности.",
        },
      },
      {
        q: { en: "Does ZYRON integrate with other tools?", uz: "ZYRON boshqa dasturlar bilan integratsiya qiladimi?", ru: "Интегрируется ли ZYRON с другими сервисами?" },
        a: {
          en: "ZYRON provides a robust API and pre-built integrations with popular tools like accounting software, payment gateways, delivery platforms, and communication tools.",
          uz: "ZYRON kuchli API va buxgalteriya dasturlari, to'lov tizimlari, yetkazib berish platformalari va aloqa vositalari kabi mashhur xizmatlar bilan tayyor integratsiyalarni taqdim etadi.",
          ru: "ZYRON предоставляет мощный API и готовые интеграции с популярными сервисами: бухгалтерия, платёжные системы, службы доставки и средства коммуникации.",
        },
      },
      {
        q: { en: "Can I try ZYRON before purchasing?", uz: "ZYRON ni sotib olishdan oldin sinab ko'rsa bo'ladimi?", ru: "Можно ли попробовать ZYRON перед покупкой?" },
        a: {
          en: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can also book a personalized demo with our team.",
          uz: "Ha! Biz barcha funksiyalarga to'liq kirish imkoni bilan 14 kunlik bepul sinov muddatini taklif qilamiz. Kredit karta talab qilinmaydi. Shuningdek, jamoamiz bilan shaxsiy demo uchrashuv belgilashingiz mumkin.",
          ru: "Да! Мы предлагаем 14-дневный бесплатный пробный период с полным доступом ко всем функциям. Без привязки карты. Также можно заказать персональную демонстрацию.",
        },
      },
      {
        q: { en: "Do you provide customer support?", uz: "Mijozlarni qo'llab-quvvatlash xizmatini ko'rsatasizmi?", ru: "Есть ли у вас служба поддержки?" },
        a: {
          en: "We provide 24/7 customer support via live chat, email, and phone. Enterprise customers get a dedicated account manager and priority support.",
          uz: "Biz jonli chat, email va telefon orqali 24/7 mijozlarni qo'llab-quvvatlashni ta'minlaymiz. Korporativ mijozlarga shaxsiy menejer va ustuvor yordam taqdim etiladi.",
          ru: "Мы обеспечиваем поддержку клиентов 24/7 через чат, email и телефон. Корпоративные клиенты получают персонального менеджера и приоритетную поддержку.",
        },
      },
      {
        q: { en: "Can ZYRON scale with my business?", uz: "ZYRON biznesim bilan birga o'sa oladimi?", ru: "Может ли ZYRON расти вместе с моим бизнесом?" },
        a: {
          en: "ZYRON is built on scalable cloud infrastructure that grows with your business. From a single location to hundreds, our platform handles it seamlessly.",
          uz: "ZYRON biznesingiz bilan birga o'sadigan kengaytiriladigan bulut infratuzilmasi asosida qurilgan. Bitta filialdan yuzlab filiallargacha — platformamiz buni muammosiz boshqaradi.",
          ru: "ZYRON построен на масштабируемой облачной инфраструктуре, которая растёт вместе с вашим бизнесом. От одной точки до сотен — наша платформа справляется без проблем.",
        },
      },
    ],
  },

  // ===== CONTACT =====
  contact: {
    label: { en: "Contact", uz: "Aloqa", ru: "Контакты" },
    title: { en: "Let's Build Together", uz: "Keling, birga quraylik", ru: "Давайте строить вместе" },
    desc: {
      en: "Ready to transform your business? Get in touch with our team.",
      uz: "Biznesingizni yangi bosqichga olib chiqishga tayyormisiz? Jamoamiz bilan bog'laning.",
      ru: "Готовы вывести бизнес на новый уровень? Свяжитесь с нашей командой.",
    },
    formTitle: { en: "Send a Message", uz: "Xabar yuborish", ru: "Отправить сообщение" },
    firstName: { en: "First Name", uz: "Ism", ru: "Имя" },
    lastName: { en: "Last Name", uz: "Familiya", ru: "Фамилия" },
    email: { en: "Email Address", uz: "Elektron pochta", ru: "Электронная почта" },
    company: { en: "Company Name", uz: "Kompaniya nomi", ru: "Название компании" },
    phone: { en: "Phone Number", uz: "Telefon raqam", ru: "Номер телефона" },
    phoneError: { en: "Enter a valid phone number (e.g. +998 XX XXX XX XX)", uz: "To'g'ri telefon raqam kiriting (masalan: +998 XX XXX XX XX)", ru: "Введите корректный номер телефона (напр. +998 XX XXX XX XX)" },
    message: { en: "Your Message", uz: "Xabaringiz", ru: "Ваше сообщение" },
    send: { en: "Send Message", uz: "Yuborish", ru: "Отправить" },
    sending: { en: "Sending...", uz: "Yuborilmoqda...", ru: "Отправляется..." },
    success: { en: "Message sent successfully!", uz: "Xabar muvaffaqiyatli yuborildi!", ru: "Сообщение успешно отправлено!" },
    required: { en: "Please fill in all required fields.", uz: "Barcha majburiy maydonlarni to'ldiring.", ru: "Заполните все обязательные поля." },
  },

  // ===== FOOTER =====
  footer: {
    products: { en: "Products", uz: "Mahsulotlar", ru: "Продукты" },
    company: { en: "Company", uz: "Kompaniya", ru: "Компания" },
    legal: { en: "Legal", uz: "Huquqiy", ru: "Правовая информация" },
    about: { en: "About", uz: "Biz haqimizda", ru: "О нас" },
    careers: { en: "Careers", uz: "Karyera", ru: "Карьера" },
    contactLink: { en: "Contact", uz: "Aloqa", ru: "Контакты" },
    blog: { en: "Blog", uz: "Blog", ru: "Блог" },
    privacy: { en: "Privacy Policy", uz: "Maxfiylik siyosati", ru: "Политика конфиденциальности" },
    terms: { en: "Terms of Service", uz: "Foydalanish shartlari", ru: "Условия использования" },
    cookie: { en: "Cookie Policy", uz: "Cookie siyosati", ru: "Политика Cookie" },
    tagline: {
      en: "Beyond Innovation. Building the future of business technology with AI-powered solutions.",
      uz: "Innovatsiyadan narida. Sun'iy intellekt yechimlar bilan biznes texnologiyasi kelajagini quramiz.",
      ru: "За пределами инноваций. Строим будущее бизнес-технологий с помощью решений на базе ИИ.",
    },
    rights: { en: "All rights reserved.", uz: "Barcha huquqlar himoyalangan.", ru: "Все права защищены." },
    builtWith: {
      en: "Built with precision. Designed for growth.",
      uz: "Aniqlik bilan qurilgan. O'sish uchun yaratilgan.",
      ru: "Построено с точностью. Создано для роста.",
    },
  },

  // ===== PRODUCT MODAL =====
  productModal: {
    features: { en: "Key Features", uz: "Asosiy imkoniyatlar", ru: "Ключевые возможности" },
    screenshots: { en: "Screenshots", uz: "Ekran rasmlari", ru: "Скриншоты" },
    screenshotPlaceholder: {
      en: "Product screenshots will be displayed here",
      uz: "Mahsulot ekran rasmlari shu yerda ko'rsatiladi",
      ru: "Здесь будут отображены скриншоты продукта",
    },
    cta: { en: "Start Free Trial", uz: "Bepul sinab ko'rish", ru: "Начать бесплатно" },
    close: { en: "Close", uz: "Yopish", ru: "Закрыть" },
  },
} as const;

export function t(
  obj: Record<string, string> | string,
  locale: Locale
): string {
  if (typeof obj === "string") return obj;
  return obj[locale] || obj["en"] || "";
}
