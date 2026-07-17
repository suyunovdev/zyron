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
    title1: { en: "Beyond", uz: "Kelajak", ru: "Технологии" },
    title2: { en: "Innovation.", uz: "Texnologiyasi.", ru: "Будущего." },
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
      hrm: {
        name: "ZYRON HRM",
        tagline: { en: "Human Resource Management System", uz: "Kadrlar boshqaruvi tizimi", ru: "Система управления персоналом" },
        desc: {
          en: "Streamline HR operations with smart payroll, attendance tracking, leave management, and digital contracts.",
          uz: "Aqlli ish haqi, davomat kuzatuvi, ta'til boshqaruvi va raqamli shartnomalar bilan HR jarayonlarini soddalashtiring.",
          ru: "Оптимизируйте HR-процессы с умным расчётом зарплат, учётом посещаемости, управлением отпусками и цифровыми договорами.",
        },
        features: {
          en: ["Payroll Automation", "Attendance Tracking", "Leave Management"],
          uz: ["Ish haqini avtomatlashtirish", "Davomat kuzatuvi", "Ta'til boshqaruvi"],
          ru: ["Автоматизация зарплат", "Учёт посещаемости", "Управление отпусками"],
        },
        fullDesc: {
          en: "ZYRON HRM is a comprehensive human resource management platform that automates every HR workflow — from onboarding and payroll to performance reviews and contract management. Empower your HR team to focus on people, not paperwork.",
          uz: "ZYRON HRM — ishga qabul qilishdan tortib ish haqi hisoblash, ish faoliyatini baholash va shartnomalarni boshqarishgacha barcha HR jarayonlarini avtomatlashtiradigan keng qamrovli kadrlar boshqaruvi platformasi. HR jamoangizni hujjatbozlik emas, odamlar bilan shug'ullanishga yo'naltiring.",
          ru: "ZYRON HRM — комплексная платформа управления персоналом, которая автоматизирует все HR-процессы: от найма и расчёта зарплат до оценки эффективности и управления договорами. Освободите HR-команду от бумажной работы, чтобы она занималась людьми.",
        },
        modalFeatures: {
          en: ["Automated payroll calculation", "Biometric attendance integration", "Leave & holiday management", "Digital contract signing", "Employee self-service portal", "Performance review system", "Recruitment & onboarding", "HR analytics dashboard"],
          uz: ["Avtomatik ish haqi hisoblash", "Biometrik davomat integratsiyasi", "Ta'til va dam olish boshqaruvi", "Raqamli shartnoma imzolash", "Xodim o'z-o'ziga xizmat portali", "Ish faoliyatini baholash tizimi", "Ishga qabul va onboarding", "HR analitika paneli"],
          ru: ["Автоматический расчёт зарплат", "Интеграция биометрической посещаемости", "Управление отпусками и праздниками", "Цифровое подписание договоров", "Портал самообслуживания сотрудников", "Система оценки эффективности", "Подбор персонала и адаптация", "HR-аналитика"],
        },
      },
      billing: {
        name: "ZYRON Billing",
        tagline: { en: "Invoice & Payment Management System", uz: "Hisob-faktura va to'lov boshqaruvi", ru: "Система выставления счетов и платежей" },
        desc: {
          en: "Manage invoices, automate payments, and integrate seamlessly with Payme, Click, and Uzum payment gateways.",
          uz: "Hisob-fakturalarni boshqaring, to'lovlarni avtomatlashtiring va Payme, Click, Uzum to'lov tizimlari bilan muammosiz integratsiya qiling.",
          ru: "Управляйте счетами, автоматизируйте платежи и легко интегрируйтесь с платёжными системами Payme, Click и Uzum.",
        },
        features: {
          en: ["Invoice Automation", "Payme & Click Integration", "Payment Tracking"],
          uz: ["Hisob-fakturani avtomatlashtirish", "Payme va Click integratsiyasi", "To'lovlarni kuzatish"],
          ru: ["Автоматизация счетов", "Интеграция Payme и Click", "Отслеживание платежей"],
        },
        fullDesc: {
          en: "ZYRON Billing simplifies your entire financial billing cycle. Create professional invoices, automate recurring payments, and accept online payments via Payme, Click, and Uzum. Get a full picture of your cash flow with real-time financial reporting.",
          uz: "ZYRON Billing moliyaviy hisob-faktura siklini to'liq soddalashtiradi. Professional hisob-fakturalar yarating, muntazam to'lovlarni avtomatlashtiring va Payme, Click, Uzum orqali onlayn to'lovlarni qabul qiling. Real vaqtdagi moliyaviy hisobotlar bilan pul oqimingizni to'liq nazorat qiling.",
          ru: "ZYRON Billing упрощает весь цикл финансовых расчётов. Создавайте профессиональные счета, автоматизируйте регулярные платежи и принимайте онлайн-оплату через Payme, Click и Uzum. Контролируйте денежный поток в режиме реального времени.",
        },
        modalFeatures: {
          en: ["Professional invoice generation", "Payme / Click / Uzum integration", "Recurring billing automation", "Payment reminders & notifications", "Multi-currency support", "Tax calculation & reporting", "Client payment portal", "Cash flow analytics"],
          uz: ["Professional hisob-faktura yaratish", "Payme / Click / Uzum integratsiyasi", "Muntazam hisob-fakturani avtomatlashtirish", "To'lov eslatmalari va bildirishnomalar", "Ko'p valyutani qo'llab-quvvatlash", "Soliq hisoblash va hisobot", "Mijoz to'lov portali", "Pul oqimi analitikasi"],
          ru: ["Генерация профессиональных счетов", "Интеграция Payme / Click / Uzum", "Автоматизация регулярных платежей", "Напоминания и уведомления об оплате", "Мультивалютная поддержка", "Расчёт налогов и отчётность", "Клиентский платёжный портал", "Аналитика денежного потока"],
        },
      },
      logistics: {
        name: "ZYRON Logistics",
        tagline: { en: "Delivery & Logistics Management", uz: "Yetkazib berish va logistika boshqaruvi", ru: "Управление доставкой и логистикой" },
        desc: {
          en: "Optimize delivery routes, track couriers in real time, and manage your entire logistics chain from one platform.",
          uz: "Yetkazib berish marshrutlarini optimallashtiring, kuryer harakatini real vaqtda kuzating va butun logistika zanjirini bitta platformadan boshqaring.",
          ru: "Оптимизируйте маршруты доставки, отслеживайте курьеров в реальном времени и управляйте всей логистической цепочкой с одной платформы.",
        },
        features: {
          en: ["Route Optimization", "Courier Tracking", "Delivery Analytics"],
          uz: ["Marshrut optimizatsiyasi", "Kuryer kuzatuvi", "Yetkazib berish analitikasi"],
          ru: ["Оптимизация маршрутов", "Отслеживание курьеров", "Аналитика доставки"],
        },
        fullDesc: {
          en: "ZYRON Logistics is a powerful end-to-end logistics platform that helps businesses manage deliveries with precision. From intelligent route planning and real-time courier GPS tracking to automated dispatch and customer delivery notifications — everything you need to run a modern delivery operation.",
          uz: "ZYRON Logistics — yetkazib berishni aniq boshqarish uchun kuchli platforma. Aqlli marshrut rejalashtirish va real vaqtdagi kuryer GPS kuzatuvidan tortib avtomatik dispetcherlik va mijozlarga yetkazib berish bildirishnomalarigacha — zamonaviy yetkazib berish xizmatini yuritish uchun kerak bo'lgan hamma narsa.",
          ru: "ZYRON Logistics — мощная платформа для управления доставкой. От интеллектуального планирования маршрутов и GPS-трекинга курьеров в реальном времени до автоматической диспетчеризации и уведомлений для клиентов — всё для современной службы доставки.",
        },
        modalFeatures: {
          en: ["Intelligent route optimization", "Real-time GPS courier tracking", "Automated order dispatching", "Customer delivery notifications", "Proof of delivery (e-signature)", "Multi-zone delivery management", "Driver performance analytics", "Integration with e-commerce platforms"],
          uz: ["Aqlli marshrut optimizatsiyasi", "Real vaqtda GPS kuryer kuzatuvi", "Avtomatik buyurtma dispetcherligi", "Mijozlarga yetkazib berish bildirishnomalari", "Yetkazib berishni tasdiqlash (elektron imzo)", "Ko'p zonali yetkazib berishni boshqarish", "Haydovchi samaradorligi analitikasi", "E-tijorat platformalari bilan integratsiya"],
          ru: ["Интеллектуальная оптимизация маршрутов", "GPS-трекинг курьеров в реальном времени", "Автоматическая диспетчеризация заказов", "Уведомления о доставке для клиентов", "Подтверждение доставки (электронная подпись)", "Управление многозональной доставкой", "Аналитика эффективности водителей", "Интеграция с e-commerce платформами"],
        },
      },
      education: {
        name: "ZYRON Education",
        tagline: { en: "Learning Center Management Platform", uz: "O'quv markaz boshqaruvi platformasi", ru: "Платформа управления учебным центром" },
        desc: {
          en: "Manage students, tuition payments, class schedules, and teacher performance all in one powerful platform.",
          uz: "Talabalar, to'lovlar, dars jadvali va o'qituvchilar samaradorligini bitta kuchli platformada boshqaring.",
          ru: "Управляйте студентами, оплатой обучения, расписанием и эффективностью преподавателей в единой мощной платформе.",
        },
        features: {
          en: ["Student Management", "Payment Tracking", "Schedule Builder"],
          uz: ["Talabalarni boshqarish", "To'lovlarni kuzatish", "Jadval tuzish"],
          ru: ["Управление студентами", "Отслеживание платежей", "Составление расписания"],
        },
        fullDesc: {
          en: "ZYRON Education is built specifically for educational institutions, training centers, and online learning platforms. Effortlessly manage student enrollment, track tuition payments, build class schedules, and monitor teacher and student performance — all from a clean, intuitive dashboard.",
          uz: "ZYRON Education ta'lim muassasalari, o'quv markazlari va onlayn ta'lim platformalari uchun maxsus yaratilgan. Talabalarni ro'yxatga olishni boshqaring, to'lovlarni kuzating, dars jadvallarini tuzing va o'qituvchi hamda talabalar samaradorligini nazorat qiling — barchasi qulay panel orqali.",
          ru: "ZYRON Education создан специально для образовательных учреждений, учебных центров и онлайн-платформ. Легко управляйте записью студентов, следите за оплатой, составляйте расписание и отслеживайте успеваемость через удобную панель.",
        },
        modalFeatures: {
          en: ["Student enrollment & profiles", "Tuition payment tracking", "Class schedule builder", "Teacher management", "Attendance monitoring", "Grade & progress tracking", "Parent notification system", "Course & curriculum management"],
          uz: ["Talabalarni ro'yxatga olish va profillari", "O'qish to'lovlarini kuzatish", "Dars jadvali tuzish", "O'qituvchilarni boshqarish", "Davomat kuzatuvi", "Baho va rivojlanishni kuzatish", "Ota-onalarga bildirishnoma tizimi", "Kurs va o'quv dasturini boshqarish"],
          ru: ["Запись студентов и профили", "Отслеживание оплаты обучения", "Конструктор расписания", "Управление преподавателями", "Контроль посещаемости", "Оценки и мониторинг прогресса", "Система уведомлений для родителей", "Управление курсами и учебными программами"],
        },
      },
      booking: {
        name: "ZYRON Booking",
        tagline: { en: "Online Reservation & Booking System", uz: "Online bron va uchrashuv tizimi", ru: "Система онлайн-бронирования" },
        desc: {
          en: "Accept online bookings 24/7 for barbershops, clinics, gyms, and any appointment-based business.",
          uz: "Sartaroshxona, klinika, sport zal va boshqa xizmat bizneslari uchun 24/7 online bron qabul qiling.",
          ru: "Принимайте онлайн-бронирования 24/7 для парикмахерских, клиник, спортзалов и любого бизнеса по записи.",
        },
        features: {
          en: ["24/7 Online Booking", "Staff Scheduling", "Reminder Notifications"],
          uz: ["24/7 Online bron", "Xodim jadvalini boshqarish", "Eslatma bildirishnomalari"],
          ru: ["Онлайн-бронирование 24/7", "Управление расписанием персонала", "Напоминания и уведомления"],
        },
        fullDesc: {
          en: "ZYRON Booking transforms how service businesses manage appointments. Let clients book online at any time, automate reminders to reduce no-shows, manage staff schedules, and track business performance — all through a beautifully designed platform that works for barbershops, medical clinics, fitness studios, and more.",
          uz: "ZYRON Booking xizmat bizneslarining uchrashuvlarni boshqarish usulini o'zgartiradi. Mijozlarga istalgan vaqtda online bron qilish imkonini bering, kelmay qolishlarni kamaytirish uchun eslatmalarni avtomatlashtiring, xodim jadvallarini boshqaring va biznes samaradorligini kuzating.",
          ru: "ZYRON Booking меняет подход к управлению записями для сервисного бизнеса. Позвольте клиентам бронировать онлайн в любое время, автоматизируйте напоминания для снижения пропусков, управляйте расписанием персонала и отслеживайте эффективность бизнеса.",
        },
        modalFeatures: {
          en: ["Online booking widget", "Staff calendar management", "Automated SMS/email reminders", "No-show & cancellation tracking", "Service & pricing catalog", "Client history & notes", "Multi-location support", "Booking analytics & reports"],
          uz: ["Online bron vidjet", "Xodim kalendarini boshqarish", "Avtomatik SMS/email eslatmalar", "Kelmay qolish va bekor qilishlarni kuzatish", "Xizmat va narx katalogi", "Mijoz tarixi va eslatmalari", "Ko'p filial qo'llab-quvvatlash", "Bron analitikasi va hisobotlari"],
          ru: ["Виджет онлайн-бронирования", "Управление календарём персонала", "Автоматические SMS/email-напоминания", "Учёт неявок и отмен", "Каталог услуг и цен", "История клиента и заметки", "Поддержка нескольких локаций", "Аналитика и отчёты по бронированиям"],
        },
      },
      marketplace: {
        name: "ZYRON Marketplace",
        tagline: { en: "B2B & B2C Online Marketplace Builder", uz: "B2B va B2C online savdo platformasi", ru: "Конструктор B2B и B2C маркетплейса" },
        desc: {
          en: "Launch your own online marketplace quickly — connect buyers and sellers in a powerful B2B or B2C platform.",
          uz: "O'zingizning online savdo platformangizni tez ishga tushiring — xaridor va sotuvchilarni kuchli B2B yoki B2C platformasida birlashtiring.",
          ru: "Быстро запустите собственный маркетплейс — объедините покупателей и продавцов на мощной платформе B2B или B2C.",
        },
        features: {
          en: ["Vendor Management", "Commission System", "Multi-store Catalog"],
          uz: ["Sotuvchilarni boshqarish", "Komissiya tizimi", "Ko'p do'kon katalogi"],
          ru: ["Управление продавцами", "Система комиссий", "Мульти-магазинный каталог"],
        },
        fullDesc: {
          en: "ZYRON Marketplace gives you everything you need to build and run a thriving online marketplace. Onboard multiple vendors, manage product listings, handle commissions, and provide buyers with a seamless shopping experience — whether you are building a local B2B platform or a nationwide B2C marketplace.",
          uz: "ZYRON Marketplace sizga rivojlanayotgan online savdo platformasini yaratish va boshqarish uchun kerak bo'lgan hamma narsani taqdim etadi. Ko'plab sotuvchilarni ulang, mahsulot ro'yxatlarini boshqaring, komissiyalarni hisoblab boring va xaridorlarga qulay xarid tajribasini yarating.",
          ru: "ZYRON Marketplace предоставляет всё необходимое для создания и управления успешным онлайн-маркетплейсом. Подключайте продавцов, управляйте каталогом товаров, рассчитывайте комиссии и обеспечивайте покупателям удобный опыт шопинга.",
        },
        modalFeatures: {
          en: ["Multi-vendor onboarding", "Product catalog management", "Commission & fee management", "Secure payment processing", "Order & dispute management", "Seller performance dashboards", "Buyer reviews & ratings", "SEO-optimized storefronts"],
          uz: ["Ko'p sotuvchini ulash", "Mahsulot katalogini boshqarish", "Komissiya va to'lovlarni boshqarish", "Xavfsiz to'lovlarni qayta ishlash", "Buyurtma va nizolarni boshqarish", "Sotuvchi samaradorlik paneli", "Xaridor sharhlari va reytinglari", "SEO-optimallashtirilgan do'kon sahifalari"],
          ru: ["Подключение множества продавцов", "Управление каталогом товаров", "Управление комиссиями и сборами", "Безопасная обработка платежей", "Управление заказами и спорами", "Дашборды эффективности продавцов", "Отзывы и рейтинги покупателей", "SEO-оптимизированные витрины"],
        },
      },
      inventory: {
        name: "ZYRON Inventory",
        tagline: { en: "Multi-branch Warehouse Management", uz: "Ko'p filial ombor boshqaruvi", ru: "Управление складом для нескольких филиалов" },
        desc: {
          en: "Control stock across multiple warehouses with QR and barcode scanning, automated alerts, and real-time sync.",
          uz: "QR va shtrix-kod skanerlash, avtomatik ogohlantirishlar va real vaqtdagi sinxronlash bilan bir nechta omborlardagi tovarlarni nazorat qiling.",
          ru: "Контролируйте запасы в нескольких складах с QR/штрих-кодами, автоматическими уведомлениями и синхронизацией в реальном времени.",
        },
        features: {
          en: ["QR & Barcode Scanning", "Multi-warehouse Sync", "Low Stock Alerts"],
          uz: ["QR va shtrix-kod skanerlash", "Ko'p ombor sinxronlash", "Kam qoldiq ogohlantirishlari"],
          ru: ["QR и штрих-код сканирование", "Синхронизация нескольких складов", "Оповещения о низком запасе"],
        },
        fullDesc: {
          en: "ZYRON Inventory delivers precise, real-time stock control across multiple warehouses and branches. Use QR codes or barcodes to receive, transfer, and dispatch goods. Get automatic low-stock alerts, manage suppliers, and generate detailed inventory reports — eliminating costly stockouts and overstocking.",
          uz: "ZYRON Inventory bir nechta ombor va filiallar bo'yicha aniq, real vaqtdagi tovar nazoratini ta'minlaydi. Tovarlarni qabul qilish, ko'chirish va jo'natish uchun QR kodlar yoki shtrix-kodlardan foydalaning. Avtomatik kam qoldiq ogohlantirishlari, yetkazib beruvchilarni boshqarish va batafsil hisobotlar.",
          ru: "ZYRON Inventory обеспечивает точный контроль запасов в реальном времени по нескольким складам и филиалам. Используйте QR-коды или штрих-коды для приёма, перемещения и отгрузки товаров. Автоматические уведомления о низком запасе, управление поставщиками и детальные отчёты.",
        },
        modalFeatures: {
          en: ["QR & barcode scanning", "Multi-warehouse management", "Real-time stock tracking", "Automated low-stock alerts", "Goods transfer between branches", "Supplier & purchase order management", "Inventory valuation reports", "Expiry date tracking"],
          uz: ["QR va shtrix-kod skanerlash", "Ko'p ombor boshqaruvi", "Real vaqtda tovar kuzatuvi", "Avtomatik kam qoldiq ogohlantirishlari", "Filiallar orasida tovar ko'chirish", "Yetkazib beruvchi va xarid buyurtmalarini boshqarish", "Ombor qiymatlash hisobotlari", "Yaroqlilik muddatini kuzatish"],
          ru: ["QR и штрих-код сканирование", "Управление несколькими складами", "Отслеживание запасов в реальном времени", "Автоматические уведомления о низком запасе", "Перемещение товаров между филиалами", "Управление поставщиками и заказами", "Отчёты по оценке запасов", "Отслеживание сроков годности"],
        },
      },
      medical: {
        name: "ZYRON Medical",
        tagline: { en: "Clinic & Hospital Management Platform", uz: "Klinika va kasalxona boshqaruvi platformasi", ru: "Платформа управления клиникой и больницей" },
        desc: {
          en: "Digitize your clinic with patient records, appointment scheduling, prescription management, and billing.",
          uz: "Bemorlar kartotekasi, qabul jadvali, retseptlar boshqaruvi va hisob-faktura bilan klinikangizni raqamlashtiring.",
          ru: "Оцифруйте клинику с картотекой пациентов, расписанием приёмов, управлением рецептами и выставлением счетов.",
        },
        features: {
          en: ["Patient Records (EMR)", "Appointment Scheduling", "Prescription Management"],
          uz: ["Bemor kartalari (EMR)", "Qabul jadvali", "Retseptlarni boshqarish"],
          ru: ["Карты пациентов (ЭМК)", "Расписание приёмов", "Управление рецептами"],
        },
        fullDesc: {
          en: "ZYRON Medical is a full-featured clinic management system that helps healthcare providers deliver better care and run more efficient operations. Maintain complete electronic medical records, manage doctor appointments, issue digital prescriptions, handle billing, and generate clinical reports — all in a secure, HIPAA-ready platform.",
          uz: "ZYRON Medical sog'liqni saqlash muassasalariga yaxshiroq xizmat ko'rsatish va samaraliroq ishlash imkonini beruvchi to'liq klinika boshqaruvi tizimi. To'liq elektron tibbiy kartotekani saqlang, shifokor qabullarini boshqaring, raqamli retseptlar bering, hisob-fakturalarni boshqaring va klinik hisobotlar yarating.",
          ru: "ZYRON Medical — полнофункциональная система управления клиникой для эффективной медицинской практики. Ведите электронные медицинские карты, управляйте записью к врачам, выписывайте цифровые рецепты, выставляйте счета и формируйте клинические отчёты в защищённой платформе.",
        },
        modalFeatures: {
          en: ["Electronic medical records (EMR)", "Doctor appointment scheduling", "Digital prescription issuing", "Patient history & diagnosis tracking", "Medical billing & invoicing", "Lab test result management", "Pharmacy integration", "Clinical analytics & reports"],
          uz: ["Elektron tibbiy kartoteka (EMR)", "Shifokor qabulini rejalashtirish", "Raqamli retsept berish", "Bemor tarixi va tashxis kuzatuvi", "Tibbiy hisob-faktura va to'lovlar", "Laboratoriya natijalarini boshqarish", "Dorixona integratsiyasi", "Klinik analitika va hisobotlar"],
          ru: ["Электронные медицинские карты (ЭМК)", "Расписание приёмов врачей", "Выдача цифровых рецептов", "История пациента и диагностика", "Медицинский биллинг и счета", "Управление результатами анализов", "Интеграция с аптекой", "Клиническая аналитика и отчёты"],
        },
      },
      hotel: {
        name: "ZYRON Hotel",
        tagline: { en: "Hotel & Hospitality Management System", uz: "Mehmonxona boshqaruvi tizimi", ru: "Система управления гостиницей" },
        desc: {
          en: "Manage room bookings, guest check-in and check-out, housekeeping, and hotel revenue from a single system.",
          uz: "Xona bronlari, mehmon check-in va check-out, xonalarni tozalash va mehmonxona daromadini bitta tizimdan boshqaring.",
          ru: "Управляйте бронированием номеров, заселением и выселением гостей, хозяйственной службой и доходами отеля в единой системе.",
        },
        features: {
          en: ["Room Booking & PMS", "Check-in / Check-out", "Revenue Management"],
          uz: ["Xona broni va PMS", "Check-in / Check-out", "Daromad boshqaruvi"],
          ru: ["Бронирование номеров и PMS", "Заезд / Выезд", "Управление доходами"],
        },
        fullDesc: {
          en: "ZYRON Hotel is a modern property management system (PMS) designed for hotels, guesthouses, and resorts. Manage room availability, process reservations from multiple channels, handle guest check-in and check-out, coordinate housekeeping, and maximize revenue — all from a centralized dashboard.",
          uz: "ZYRON Hotel — mehmonxonalar, kichik mehmonxonalar va kurortlar uchun yaratilgan zamonaviy mulk boshqaruvi tizimi (PMS). Xonalarning mavjudligini boshqaring, bir nechta kanaldan bronlarni qayta ishlang, mehmon check-in va check-outini boshqaring, xonalarni tozalashni muvofiqlashtiring va daromadni maksimallang.",
          ru: "ZYRON Hotel — современная система управления объектом размещения (PMS) для отелей, гостевых домов и курортов. Управляйте доступностью номеров, обрабатывайте бронирования из разных каналов, оформляйте заезд и выезд, координируйте уборку и максимизируйте доход.",
        },
        modalFeatures: {
          en: ["Room availability & reservation management", "Online booking channel integration", "Front desk check-in / check-out", "Housekeeping task management", "Guest profile & history", "Rate & revenue management", "Restaurant & room service billing", "Hotel analytics & occupancy reports"],
          uz: ["Xonalar mavjudligi va bron boshqaruvi", "Online bron kanallari integratsiyasi", "Qabul stoli check-in / check-out", "Xona tozalash vazifalarini boshqarish", "Mehmon profili va tarixi", "Tarif va daromad boshqaruvi", "Restoran va xona xizmati hisob-fakturasi", "Mehmonxona analitikasi va band bo'lish hisobotlari"],
          ru: ["Управление доступностью номеров и бронями", "Интеграция каналов онлайн-бронирования", "Заезд / выезд на ресепшене", "Управление задачами хозяйственной службы", "Профиль и история гостя", "Управление тарифами и доходами", "Счета за ресторан и обслуживание в номере", "Аналитика отеля и отчёты по заполняемости"],
        },
      },
      farm: {
        name: "ZYRON Farm",
        tagline: { en: "Agribusiness Management Platform", uz: "Agro biznes boshqaruvi platformasi", ru: "Платформа управления агробизнесом" },
        desc: {
          en: "Manage crop yield tracking, land records, weather monitoring, and agricultural finances in one smart platform.",
          uz: "Hosil hisobi, yer qaydlari, ob-havo kuzatuvi va qishloq xo'jaligi moliyasini bitta aqlli platformada boshqaring.",
          ru: "Управляйте урожайностью, земельными записями, мониторингом погоды и сельхоз-финансами в единой умной платформе.",
        },
        features: {
          en: ["Crop Yield Tracking", "Land Management", "Weather Monitoring"],
          uz: ["Hosil hisobi", "Yer boshqaruvi", "Ob-havo kuzatuvi"],
          ru: ["Учёт урожайности", "Управление земельными участками", "Мониторинг погоды"],
        },
        fullDesc: {
          en: "ZYRON Farm brings modern technology to agriculture, helping farmers and agribusinesses manage every aspect of their operations. Track crop cycles and yields, manage land parcels, monitor weather conditions, plan irrigation and fertilization schedules, and keep full financial records — making data-driven farming a reality.",
          uz: "ZYRON Farm zamonaviy texnologiyani qishloq xo'jaligiga olib keladi va fermerlar hamda agrobiznesga faoliyatlarining barcha jihatlarini boshqarishga yordam beradi. Ekinlar sikli va hosilini kuzating, yer uchastkalarini boshqaring, ob-havo sharoitlarini nazorat qiling, sug'orish va o'g'itlash jadvallarini rejalashtiring va to'liq moliyaviy yozuvlarni saqlang.",
          ru: "ZYRON Farm привносит современные технологии в сельское хозяйство, помогая фермерам и агробизнесу управлять всеми аспектами деятельности. Отслеживайте циклы и урожайность культур, управляйте земельными участками, следите за погодой, планируйте орошение и удобрение, ведите финансовый учёт.",
        },
        modalFeatures: {
          en: ["Crop cycle & yield tracking", "Land parcel management", "Real-time weather monitoring", "Irrigation & fertilization planning", "Farm equipment tracking", "Agricultural expense management", "Harvest forecasting with AI", "Farm performance analytics"],
          uz: ["Ekin sikli va hosil kuzatuvi", "Yer uchastkalarini boshqarish", "Real vaqtda ob-havo kuzatuvi", "Sug'orish va o'g'itlash rejalashtirish", "Qishloq xo'jaligi texnikasini kuzatish", "Qishloq xo'jaligi xarajatlarini boshqarish", "AI yordamida hosil prognozi", "Ferma samaradorligi analitikasi"],
          ru: ["Учёт циклов и урожайности культур", "Управление земельными участками", "Мониторинг погоды в реальном времени", "Планирование орошения и удобрений", "Отслеживание сельхозтехники", "Управление сельхоз-расходами", "Прогнозирование урожая с ИИ", "Аналитика эффективности фермы"],
        },
      },
      fleet: {
        name: "ZYRON Fleet",
        tagline: { en: "Vehicle Fleet Management System", uz: "Avtomobil parki boshqaruvi tizimi", ru: "Система управления автопарком" },
        desc: {
          en: "Manage your taxi fleet, freight vehicles, and drivers with real-time GPS tracking and operational analytics.",
          uz: "Taxi parki, yuk mashinalari va haydovchilarni real vaqtdagi GPS kuzatuvi va operatsion analitika bilan boshqaring.",
          ru: "Управляйте таксопарком, грузовым транспортом и водителями с GPS-трекингом в реальном времени и операционной аналитикой.",
        },
        features: {
          en: ["GPS Fleet Tracking", "Driver Management", "Fuel & Maintenance"],
          uz: ["GPS parki kuzatuvi", "Haydovchilarni boshqarish", "Yoqilg'i va texnik xizmat"],
          ru: ["GPS-трекинг автопарка", "Управление водителями", "Топливо и техобслуживание"],
        },
        fullDesc: {
          en: "ZYRON Fleet gives transport companies, taxi operators, and logistics providers full control over their vehicle fleets. Track every vehicle live on GPS, manage driver assignments, monitor fuel consumption, schedule maintenance, and analyze fleet efficiency — reducing costs and maximizing uptime.",
          uz: "ZYRON Fleet transport kompaniyalari, taxi operatorlari va logistika provayderlariga avtomobil parki ustidan to'liq nazoratni beradi. Har bir avtomobilni GPS orqali jonli kuzating, haydovchi tayinlashlarini boshqaring, yoqilg'i sarfini nazorat qiling, texnik xizmatni rejalashtiring va parki samaradorligini tahlil qiling.",
          ru: "ZYRON Fleet даёт транспортным компаниям, операторам такси и логистическим провайдерам полный контроль над автопарком. Отслеживайте каждый автомобиль в реальном времени, управляйте назначениями водителей, контролируйте расход топлива, планируйте ТО и анализируйте эффективность парка.",
        },
        modalFeatures: {
          en: ["Real-time GPS vehicle tracking", "Driver assignment & scheduling", "Fuel consumption monitoring", "Maintenance scheduling & alerts", "Trip history & route replay", "Driver behavior scoring", "Fleet cost & profitability reports", "Integration with dispatch systems"],
          uz: ["Real vaqtda GPS avtomobil kuzatuvi", "Haydovchi tayinlash va jadvallash", "Yoqilg'i sarfini kuzatish", "Texnik xizmat rejalash va ogohlantirishlar", "Sayohat tarixi va marshrut takrori", "Haydovchi xulqi baholash", "Parki xarajatlari va rentabellik hisobotlari", "Dispetcher tizimlari bilan integratsiya"],
          ru: ["GPS-трекинг транспортных средств в реальном времени", "Назначение водителей и составление расписания", "Мониторинг расхода топлива", "Планирование ТО и оповещения", "История поездок и воспроизведение маршрута", "Оценка поведения водителей", "Отчёты о затратах и рентабельности парка", "Интеграция с диспетчерскими системами"],
        },
      },
      construction: {
        name: "ZYRON Construction",
        tagline: { en: "Construction Project Management Platform", uz: "Qurilish loyiha boshqaruvi platformasi", ru: "Платформа управления строительными проектами" },
        desc: {
          en: "Manage construction projects end-to-end — from estimates and materials to timelines and team coordination.",
          uz: "Qurilish loyihalarini boshidan oxirigacha boshqaring — smetadan materiallar, muddat va jamoa muvofiqlashtiruvigacha.",
          ru: "Управляйте строительными проектами от начала до конца — от смет и материалов до сроков и координации команды.",
        },
        features: {
          en: ["Project Estimation", "Materials Management", "Timeline Tracking"],
          uz: ["Loyiha smetasi", "Materiallarni boshqarish", "Muddat kuzatuvi"],
          ru: ["Смета проекта", "Управление материалами", "Отслеживание сроков"],
        },
        fullDesc: {
          en: "ZYRON Construction is a comprehensive platform for builders, contractors, and construction companies. Create detailed project estimates, manage material procurement and inventory, assign tasks to teams, track progress against timelines, and keep financial control — all in one powerful construction management system.",
          uz: "ZYRON Construction quriluvchilar, pudratchilar va qurilish kompaniyalari uchun keng qamrovli platforma. Batafsil loyiha smetalarini tuzing, material xaridlari va omborini boshqaring, jamoalarga vazifalar tayinlang, muddat bo'yicha rivojlanishni kuzating va moliyaviy nazoratni saqlang.",
          ru: "ZYRON Construction — комплексная платформа для застройщиков, подрядчиков и строительных компаний. Создавайте детальные сметы, управляйте закупками и запасами материалов, назначайте задачи командам, отслеживайте прогресс и контролируйте финансы.",
        },
        modalFeatures: {
          en: ["Project estimation & budgeting", "Material procurement management", "Task & team assignment", "Timeline & milestone tracking", "Subcontractor management", "On-site progress photo reports", "Cost vs. budget analytics", "Client progress reporting"],
          uz: ["Loyiha smetasi va byudjet", "Material xaridlarini boshqarish", "Vazifa va jamoa tayinlash", "Muddat va bosqichlarni kuzatish", "Subpudratchilarni boshqarish", "Qurilish joyi fotosuratli hisobotlar", "Xarajat va byudjet analitikasi", "Mijozga rivojlanish hisoboti"],
          ru: ["Смета и бюджетирование проекта", "Управление закупками материалов", "Назначение задач и команд", "Отслеживание сроков и этапов", "Управление субподрядчиками", "Фотоотчёты о ходе строительства", "Аналитика затрат vs. бюджета", "Отчёты о прогрессе для клиента"],
        },
      },
      tgbot: {
        name: "ZYRON TG Bot",
        tagline: { en: "Telegram Business Automation Platform", uz: "Telegram biznes avtomatizatsiya platformasi", ru: "Платформа автоматизации бизнеса в Telegram" },
        desc: {
          en: "Build powerful Telegram bots to automate customer service, orders, notifications, and business workflows.",
          uz: "Mijozlarga xizmat ko'rsatish, buyurtmalar, bildirishnomalar va biznes jarayonlarini avtomatlashtirish uchun kuchli Telegram botlar yarating.",
          ru: "Создавайте мощные Telegram-боты для автоматизации обслуживания клиентов, заказов, уведомлений и бизнес-процессов.",
        },
        features: {
          en: ["No-code Bot Builder", "Order Automation", "CRM Integration"],
          uz: ["Kodsiz bot yaratuvchi", "Buyurtmalarni avtomatlashtirish", "CRM integratsiyasi"],
          ru: ["Конструктор без кода", "Автоматизация заказов", "Интеграция с CRM"],
        },
        fullDesc: {
          en: "ZYRON TG Bot enables businesses to harness the power of Telegram's 900M+ user base for automation. Build feature-rich bots without writing a single line of code — automate customer support, receive orders, send notifications, collect data, and integrate with your existing business systems — all through Telegram.",
          uz: "ZYRON TG Bot biznesga Telegramning 900M+ foydalanuvchi bazasini avtomatlashtirish uchun ishlatish imkonini beradi. Birorta ham kod yozmasdan boy funksiyali botlar yarating — mijozlarga avtomatik xizmat ko'rsating, buyurtmalar qabul qiling, bildirishnomalar yuboring, ma'lumot yig'ing va mavjud biznes tizimlari bilan integratsiya qiling.",
          ru: "ZYRON TG Bot позволяет бизнесу использовать аудиторию Telegram (900M+ пользователей) для автоматизации. Создавайте многофункциональных ботов без единой строки кода — автоматизируйте поддержку, принимайте заказы, отправляйте уведомления, собирайте данные и интегрируйтесь с бизнес-системами.",
        },
        modalFeatures: {
          en: ["Visual no-code bot builder", "Automated customer support flows", "Order receiving & processing", "Mass broadcast messaging", "Payment collection via bot", "CRM & database integration", "Bot analytics & user statistics", "Multi-language bot support"],
          uz: ["Visual kodsiz bot yaratuvchi", "Avtomatik mijozlarga xizmat ko'rsatish oqimlari", "Buyurtma qabul qilish va qayta ishlash", "Ommaviy xabar tarqatish", "Bot orqali to'lov yig'ish", "CRM va ma'lumotlar bazasi integratsiyasi", "Bot analitikasi va foydalanuvchi statistikasi", "Ko'p tilli bot qo'llab-quvvatlash"],
          ru: ["Визуальный конструктор без кода", "Автоматизированные потоки поддержки клиентов", "Приём и обработка заказов", "Массовые рассылки", "Приём платежей через бота", "Интеграция с CRM и базами данных", "Аналитика бота и статистика пользователей", "Многоязычная поддержка бота"],
        },
      },
      miniapp: {
        name: "ZYRON Mini App",
        tagline: { en: "Telegram Mini App Builder", uz: "Telegram Mini App yaratuvchi platforma", ru: "Конструктор Telegram Mini App" },
        desc: {
          en: "Build fully featured Telegram Mini Apps for your online store, services, or bookings — without deep coding.",
          uz: "Online do'kon, xizmatlar yoki bron uchun to'liq funksiyali Telegram Mini Applarni chuqur kodlashsiz yarating.",
          ru: "Создавайте полнофункциональные Telegram Mini Apps для интернет-магазина, услуг или бронирования — без сложного кодирования.",
        },
        features: {
          en: ["Drag & Drop Builder", "Telegram Payments", "Product Catalog"],
          uz: ["Drag & Drop yaratuvchi", "Telegram to'lovlari", "Mahsulot katalogi"],
          ru: ["Конструктор drag & drop", "Оплата через Telegram", "Каталог товаров"],
        },
        fullDesc: {
          en: "ZYRON Mini App empowers businesses to launch a full-featured store or service platform directly inside Telegram, where their customers already are. Use our intuitive drag-and-drop builder to create product catalogs, service menus, booking flows, and checkout experiences — all powered by Telegram's native payment system.",
          uz: "ZYRON Mini App biznesga to'liq funksiyali do'kon yoki xizmat platformasini mijozlari allaqachon bo'lgan Telegram ichida to'g'ridan-to'g'ri ishga tushirish imkonini beradi. Intuitiv drag-and-drop yaratuvchimizdan foydalanib mahsulot kataloglari, xizmat menyulari, bron oqimlari va to'lov tajribasini yarating.",
          ru: "ZYRON Mini App позволяет бизнесу запустить полноценный магазин или сервис прямо внутри Telegram, где уже находятся клиенты. Используйте интуитивный drag-and-drop конструктор для создания каталогов, меню услуг, форм бронирования и оплаты через нативную платёжную систему Telegram.",
        },
        modalFeatures: {
          en: ["Drag & drop Mini App builder", "Product & service catalog", "Telegram native payments", "Shopping cart & checkout", "Order management dashboard", "Customer notification system", "Analytics & conversion tracking", "Custom branding & design themes"],
          uz: ["Drag & drop Mini App yaratuvchi", "Mahsulot va xizmatlar katalogi", "Telegram mahalliy to'lovlari", "Savat va to'lov jarayoni", "Buyurtma boshqaruvi paneli", "Mijozlarga bildirishnoma tizimi", "Analitika va konversiya kuzatuvi", "Maxsus brend va dizayn mavzulari"],
          ru: ["Drag & drop конструктор Mini App", "Каталог товаров и услуг", "Нативные платежи Telegram", "Корзина и оформление заказа", "Панель управления заказами", "Система уведомлений клиентов", "Аналитика и отслеживание конверсий", "Кастомный брендинг и темы дизайна"],
        },
      },
      mobileapp: {
        name: "ZYRON Mobile App",
        tagline: { en: "Mobile App Development Platform", uz: "Mobil ilova yaratish platformasi", ru: "Платформа разработки мобильных приложений" },
        desc: {
          en: "Launch your own branded iOS and Android mobile app without a full development team — fast and affordable.",
          uz: "To'liq dasturlash jamoasisiz o'zingizning brendlangan iOS va Android mobil ilovangizni tez va arzon ishga tushiring.",
          ru: "Запустите фирменное iOS и Android приложение без команды разработчиков — быстро и доступно.",
        },
        features: {
          en: ["iOS & Android Apps", "No-code Builder", "Push Notifications"],
          uz: ["iOS va Android ilovalar", "Kodsiz yaratuvchi", "Push bildirishnomalar"],
          ru: ["iOS и Android приложения", "Конструктор без кода", "Push-уведомления"],
        },
        fullDesc: {
          en: "ZYRON Mobile App lets any business launch a professional, fully branded mobile application on iOS and Android without the cost and complexity of traditional app development. Choose from pre-built templates, customize your app with your brand, integrate with your existing ZYRON products, and publish to app stores — all from a single platform.",
          uz: "ZYRON Mobile App har qanday biznesga an'anaviy dastur ishlab chiqishning xarajati va murakkabligisiz iOS va Android da professional, to'liq brendlangan mobil ilova ishga tushirish imkonini beradi. Tayyor shablonlardan tanlang, ilovangizni brendingiz bilan sozlang, mavjud ZYRON mahsulotlari bilan integratsiya qiling va ilova do'konlariga joylashtiring.",
          ru: "ZYRON Mobile App позволяет любому бизнесу запустить профессиональное брендированное мобильное приложение на iOS и Android без затрат и сложностей традиционной разработки. Выбирайте готовые шаблоны, настраивайте под свой бренд, интегрируйтесь с продуктами ZYRON и публикуйте в магазинах приложений.",
        },
        modalFeatures: {
          en: ["iOS & Android app builder", "Pre-built industry templates", "Custom branding & UI theming", "Push notification campaigns", "In-app payments integration", "Offline mode support", "App Store & Google Play publishing", "App analytics & user behavior tracking"],
          uz: ["iOS va Android ilova yaratuvchi", "Sohaviy tayyor shablonlar", "Maxsus brend va UI mavzulash", "Push bildirishnoma kampaniyalari", "Ilova ichida to'lov integratsiyasi", "Oflayn rejim qo'llab-quvvatlash", "App Store va Google Play joylashtirish", "Ilova analitikasi va foydalanuvchi xulqini kuzatish"],
          ru: ["Конструктор iOS и Android приложений", "Готовые отраслевые шаблоны", "Кастомный брендинг и UI-темизация", "Кампании push-уведомлений", "Интеграция платежей внутри приложения", "Поддержка офлайн-режима", "Публикация в App Store и Google Play", "Аналитика приложения и отслеживание поведения"],
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
    title: { en: "Trusted by Leading Businesses", uz: "Yetakchi kompaniyalar ishonchi", ru: "Доверие ведущих компаний" },
    items: [
      {
        name: "Aziz Karimov",
        role: { en: "Founder, Milliy Taom", uz: "Asoschisi, Milliy Taom restoranlar tarmog'i", ru: "Основатель, сеть ресторанов Milliy Taom" },
        content: {
          en: "Before ZYRON, managing 4 restaurant branches was chaotic — paper orders, lost receipts, no analytics. Now everything runs from one dashboard. Kitchen delays dropped by 35%, and our monthly revenue grew 2.8x in 6 months.",
          uz: "ZYRON dan oldin 4 ta filialimizni boshqarish tartibsiz edi — qog'oz buyurtmalar, yo'qolgan cheklar, analitika yo'q. Endi hammasi bitta dashboarddan boshqariladi. Oshxona kechikishlari 35% ga kamaydi, oylik daromadimiz 6 oyda 2.8 barobar o'sdi.",
          ru: "До ZYRON управлять 4 филиалами ресторана было хаотично — бумажные заказы, потерянные чеки, никакой аналитики. Теперь всё управляется с одной панели. Задержки на кухне сократились на 35%, а месячная выручка выросла в 2.8 раза за 6 месяцев.",
        },
        stat: "2.8x",
      },
      {
        name: "Dilnoza Rahimova",
        role: { en: "CEO, GreenMarket", uz: "Bosh direktor, GreenMarket supermarketlar", ru: "Генеральный директор, сеть супермаркетов GreenMarket" },
        content: {
          en: "We replaced 3 different systems with ZYRON POS + Inventory. Stock discrepancies that used to cost us millions of so'm per month practically disappeared. The barcode scanning and real-time sync between branches is flawless.",
          uz: "Biz 3 ta turli tizimni ZYRON POS + Inventory bilan almashtirdik. Har oyda millionlab so'm zarar keltirgan ombor nomuvofiqliklar deyarli yo'qoldi. Shtrix-kod skanerlash va filiallar orasidagi real vaqt sinxronizatsiya mukammal ishlaydi.",
          ru: "Мы заменили 3 разные системы на ZYRON POS + Inventory. Складские расхождения, стоившие нам миллионы сумов ежемесячно, практически исчезли. Сканирование штрих-кодов и синхронизация между филиалами работают безупречно.",
        },
        stat: "-92%",
      },
      {
        name: "Sardor Aliyev",
        role: { en: "CTO, BuildPro Group", uz: "Texnik direktor, BuildPro Group qurilish", ru: "Технический директор, строительная компания BuildPro Group" },
        content: {
          en: "ZYRON ERP unified our project management, finance, and HR into one system. We used to spend 3 days on monthly reports — now it's automated in 10 minutes. The construction module tracks every brick and every worker perfectly.",
          uz: "ZYRON ERP loyiha boshqaruvi, moliya va HR ni bitta tizimga birlashtirdi. Oldin oylik hisobotga 3 kun sarflardik — endi 10 daqiqada avtomatik tayyor bo'ladi. Qurilish moduli har bir g'isht va har bir ishchini mukammal kuzatadi.",
          ru: "ZYRON ERP объединил управление проектами, финансы и HR в одну систему. Раньше на месячные отчёты уходило 3 дня — теперь они формируются автоматически за 10 минут. Строительный модуль отслеживает каждый кирпич и каждого рабочего.",
        },
        stat: "3x",
      },
      {
        name: "Nodira Usmonova",
        role: { en: "Director, Salomatlik Clinic", uz: "Direktori, Salomatlik tibbiyot klinikasi", ru: "Директор, медицинская клиника Salomatlik" },
        content: {
          en: "Patient management was our biggest headache. ZYRON Medical handles appointments, medical records, billing, and pharmacy stock in one place. Patient wait times dropped from 45 to 12 minutes, and our doctors love the interface.",
          uz: "Bemorlarni boshqarish eng katta muammomiz edi. ZYRON Medical qabullar, tibbiy yozuvlar, hisob-kitob va dorixona zahirasini bitta joyda boshqaradi. Bemorlar kutish vaqti 45 daqiqadan 12 daqiqaga tushdi, shifokorlarimiz interfeysni juda yaxshi ko'radi.",
          ru: "Управление пациентами было нашей главной проблемой. ZYRON Medical объединил запись, медкарты, биллинг и учёт аптеки в одном месте. Время ожидания пациентов сократилось с 45 до 12 минут, а врачи в восторге от интерфейса.",
        },
        stat: "-73%",
      },
      {
        name: "Bobur Toshmatov",
        role: { en: "Owner, FastFood Express", uz: "Egasi, FastFood Express yetkazib berish", ru: "Владелец, служба доставки FastFood Express" },
        content: {
          en: "The Telegram bot integration changed everything for us. 60% of our orders now come through the bot — no need for a separate app. Customers order in 30 seconds, and the kitchen gets instant notifications. Our delivery fleet tracking is also built right in.",
          uz: "Telegram bot integratsiyasi hamma narsani o'zgartirdi. Buyurtmalarimizning 60% hozir bot orqali keladi — alohida ilova kerak emas. Mijozlar 30 soniyada buyurtma beradi, oshxona darhol bildirishnoma oladi. Yetkazib berish avtoparki kuzatuvi ham o'rnatilgan.",
          ru: "Интеграция с Telegram-ботом изменила всё. 60% заказов теперь приходят через бота — отдельное приложение не нужно. Клиенты оформляют заказ за 30 секунд, кухня получает мгновенные уведомления. Отслеживание доставки тоже встроено.",
        },
        stat: "60%",
      },
      {
        name: "Kamola Nazarova",
        role: { en: "Head of Education, EduCenter", uz: "Ta'lim rahbari, EduCenter o'quv markazi", ru: "Руководитель, учебный центр EduCenter" },
        content: {
          en: "We manage 1,200+ students across 8 courses with ZYRON Education. Attendance tracking, payment reminders, grade reports — all automated. Parents get real-time updates via Telegram. Our admin team went from 5 people to 2.",
          uz: "Biz 8 ta kurs bo'yicha 1200+ talabani ZYRON Education bilan boshqaramiz. Davomat, to'lov eslatmalari, baho hisobotlari — hammasi avtomatlashtirilgan. Ota-onalar Telegram orqali real vaqtda yangilanishlar oladi. Admin jamoamiz 5 kishidan 2 taga qisqardi.",
          ru: "Мы управляем 1200+ студентами на 8 курсах через ZYRON Education. Посещаемость, напоминания об оплате, отчёты по оценкам — всё автоматизировано. Родители получают обновления через Telegram. Админ-команда сократилась с 5 до 2 человек.",
        },
        stat: "1200+",
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
