export const languages = {
  ru: 'Русский',
  en: 'English',
  uz: "O'zbekcha",
} as const;

export const defaultLang = 'ru' as const;
export type Lang = keyof typeof languages;

export const ui = {
  ru: {
    // Header / Nav
    'nav.events': 'Мероприятия',
    'nav.contact': 'Связаться →',
    'nav.menu': 'Меню',

    // Index page
    'index.title': 'Мероприятия — ACROPOLIS INTEGRO Events',
    'index.description': 'Инфраструктурный клуб ACROPOLIS — мероприятия для IT-профессионалов Центральной Азии. Бизнес-ужины, конференции, митапы.',
    'index.heroBadge': 'Инфраструктурный клуб',
    'index.heroSubtitle': 'Мероприятия для IT-профессионалов Центральной Азии.<br />Бизнес-ужины, конференции и экспертные встречи.',
    'index.allEvents': 'Все мероприятия',
    'index.allEventsSubtitle': 'Хронология событий инфраструктурного клуба',
    'index.ctaTitle': 'Хотите стать участником?',
    'index.ctaSubtitle': 'Присоединяйтесь к инфраструктурному клубу ACROPOLIS — закрытые встречи для IT-лидеров',
    'index.ctaTelegram': 'Написать в Telegram',

    // Event page
    'event.badgeOwn': 'Инфраструктурный клуб',
    'event.badgeParticipation': 'Участие в мероприятии',
    'event.backToList': 'Вернуться к списку',
    'event.program': 'Программа',
    'event.speakers': 'Доклады',
    'event.gallery': 'Галерея',
    'event.conclusions': 'Итоги',
    'event.recommendations': 'Рекомендации',
    'event.immediateActions': 'Немедленные действия',
    'event.strategicInitiatives': 'Стратегические инициативы',
    'event.techStack': 'Рекомендуемый стек технологий',
    'event.ctaDefault': 'Обсудим ваш проект?',
    'event.ctaContact': 'Свяжитесь с нами',
    'event.ctaSubtitle': 'Обсудите с экспертами Acropolis Integro решения для вашей инфраструктуры',
    'event.writeTelegram': 'Написать в Telegram',

    // EventCard
    'card.ownEvent': 'Собственное мероприятие',
    'card.participation': 'Участие',
    'card.readMore': 'Подробнее →',

    // PhotoGallery
    'gallery.photo': 'Фото',
    'gallery.close': 'Закрыть',
    'gallery.prev': 'Назад',
    'gallery.next': 'Вперёд',

    // Footer
    'footer.rights': 'Все права защищены.',

    // SEO
    'seo.keywords': 'IT мероприятия Узбекистан, инфраструктурный клуб, Acropolis Integro, IT конференции Ташкент, бизнес-ужины IT, Commvault, SUSE, Juniper, центр обработки данных, кибербезопасность',
    'seo.language': 'Russian',
    'seo.ogLocale': 'ru_RU',
    'seo.orgDescription': 'Системный интегратор и IT-дистрибьютор в Центральной Азии. Организатор инфраструктурного клуба для IT-профессионалов.',
    'seo.breadcrumbHome': 'Главная',
    'seo.itemListName': 'Мероприятия ACROPOLIS INTEGRO',
    'seo.itemListDescription': 'Список IT мероприятий инфраструктурного клуба ACROPOLIS',
  },
  en: {
    'nav.events': 'Events',
    'nav.contact': 'Contact →',
    'nav.menu': 'Menu',

    'index.title': 'Events — ACROPOLIS INTEGRO',
    'index.description': 'ACROPOLIS Infrastructure Club — events for IT professionals in Central Asia. Business dinners, conferences, meetups.',
    'index.heroBadge': 'Infrastructure Club',
    'index.heroSubtitle': 'Events for IT professionals in Central Asia.<br />Business dinners, conferences and expert meetings.',
    'index.allEvents': 'All Events',
    'index.allEventsSubtitle': 'Timeline of the infrastructure club events',
    'index.ctaTitle': 'Want to participate?',
    'index.ctaSubtitle': 'Join the ACROPOLIS infrastructure club — exclusive meetings for IT leaders',
    'index.ctaTelegram': 'Message on Telegram',

    'event.badgeOwn': 'Infrastructure Club',
    'event.badgeParticipation': 'Event Participation',
    'event.backToList': 'Back to list',
    'event.program': 'Program',
    'event.speakers': 'Presentations',
    'event.gallery': 'Gallery',
    'event.conclusions': 'Key Takeaways',
    'event.recommendations': 'Recommendations',
    'event.immediateActions': 'Immediate Actions',
    'event.strategicInitiatives': 'Strategic Initiatives',
    'event.techStack': 'Recommended Technology Stack',
    'event.ctaDefault': 'Discuss your project?',
    'event.ctaContact': 'Contact us',
    'event.ctaSubtitle': 'Discuss infrastructure solutions with Acropolis Integro experts',
    'event.writeTelegram': 'Message on Telegram',

    'card.ownEvent': 'Own Event',
    'card.participation': 'Participation',
    'card.readMore': 'Read more →',

    'gallery.photo': 'Photo',
    'gallery.close': 'Close',
    'gallery.prev': 'Previous',
    'gallery.next': 'Next',

    'footer.rights': 'All rights reserved.',

    'seo.keywords': 'IT events Uzbekistan, infrastructure club, Acropolis Integro, IT conferences Tashkent, IT business dinners, Commvault, SUSE, Juniper, data center, cybersecurity',
    'seo.language': 'English',
    'seo.ogLocale': 'en_US',
    'seo.orgDescription': 'System integrator and IT distributor in Central Asia. Organizer of the infrastructure club for IT professionals.',
    'seo.breadcrumbHome': 'Home',
    'seo.itemListName': 'ACROPOLIS INTEGRO Events',
    'seo.itemListDescription': 'List of IT events by the ACROPOLIS infrastructure club',
  },
  uz: {
    'nav.events': 'Tadbirlar',
    'nav.contact': 'Aloqa →',
    'nav.menu': 'Menyu',

    'index.title': 'Tadbirlar — ACROPOLIS INTEGRO',
    'index.description': "ACROPOLIS infratuzilma klubi — Markaziy Osiyo IT-mutaxassislari uchun tadbirlar. Biznes-kechliklar, konferensiyalar, uchrashuvlar.",
    'index.heroBadge': 'Infratuzilma klubi',
    'index.heroSubtitle': "Markaziy Osiyo IT-mutaxassislari uchun tadbirlar.<br />Biznes-kechliklar, konferensiyalar va ekspert uchrashuvlari.",
    'index.allEvents': 'Barcha tadbirlar',
    'index.allEventsSubtitle': 'Infratuzilma klubi tadbirlari xronologiyasi',
    'index.ctaTitle': "Ishtirokchi bo'lmoqchimisiz?",
    'index.ctaSubtitle': "ACROPOLIS infratuzilma klubiga qo'shiling — IT-yetakchilar uchun yopiq uchrashuvlar",
    'index.ctaTelegram': 'Telegramga yozish',

    'event.badgeOwn': 'Infratuzilma klubi',
    'event.badgeParticipation': 'Tadbirda ishtirok',
    'event.backToList': "Ro'yxatga qaytish",
    'event.program': 'Dastur',
    'event.speakers': "Ma'ruzalar",
    'event.gallery': 'Galereya',
    'event.conclusions': 'Yakunlar',
    'event.recommendations': 'Tavsiyalar',
    'event.immediateActions': 'Tezkor harakatlar',
    'event.strategicInitiatives': 'Strategik tashabbuslar',
    'event.techStack': 'Tavsiya etilgan texnologiya steki',
    'event.ctaDefault': 'Loyihangizni muhokama qilamizmi?',
    'event.ctaContact': 'Biz bilan bog\'laning',
    'event.ctaSubtitle': "Acropolis Integro ekspertlari bilan infratuzilma yechimlarini muhokama qiling",
    'event.writeTelegram': 'Telegramga yozish',

    'card.ownEvent': "O'z tadbirimiz",
    'card.participation': 'Ishtirok',
    'card.readMore': "Batafsil →",

    'gallery.photo': 'Rasm',
    'gallery.close': 'Yopish',
    'gallery.prev': 'Oldingi',
    'gallery.next': 'Keyingi',

    'footer.rights': 'Barcha huquqlar himoyalangan.',

    'seo.keywords': "IT tadbirlar O'zbekiston, infratuzilma klubi, Acropolis Integro, IT konferensiyalar Toshkent, IT biznes-kechliklar, Commvault, SUSE, Juniper, ma'lumotlar markazi, kiberxavfsizlik",
    'seo.language': 'Uzbek',
    'seo.ogLocale': 'uz_UZ',
    'seo.orgDescription': "Markaziy Osiyodagi tizim integratori va IT-distribyutor. IT-mutaxassislar uchun infratuzilma klubi tashkilotchisi.",
    'seo.breadcrumbHome': 'Bosh sahifa',
    'seo.itemListName': 'ACROPOLIS INTEGRO tadbirlari',
    'seo.itemListDescription': 'ACROPOLIS infratuzilma klubi IT tadbirlari ro\'yxati',
  },
} as const;
