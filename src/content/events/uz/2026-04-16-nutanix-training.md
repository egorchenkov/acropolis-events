---
lang: "uz"
title: "Nutanix platformasi bo'yicha ikki kunlik texnik o'quv"
subtitle: "HCI arxitekturasidan avtomatlashtirish va disaster recovery'gacha — 2026-yil aprel, Boku"
date: "2026-yil aprel"
dateISO: "2026-04-16"
location: "Boku, Ozarbayjon"
eventType: "own"
partners:
  - name: "Nutanix"
    logo: "/images/partners/nutanix.svg"
description: "ACROPOLIS INTEGRO buyurtmachilar jamoalari uchun Nutanix bo'yicha ikki kunlik texnik o'quv o'tkazdi. HCI arxitekturasi, AOS ekspluatatsiyasi, replikatsiya, avtomatlashtirish va ma'lumotlar bazasini boshqarishga chuqur sho'ng'ish."
program:
  - time: "1-kun"
    title: "Platforma asoslari: HCI, AOS/CVM, Data Locality, Prism Element, RF2/RF3, compression, deduplication, erasure coding"
  - time: "2-kun"
    title: "Ekspluatatsiya va avtomatlashtirish: Prism Central, Flow Network Security, Protection Policy, Recovery Plan, X-Play, NDB, External Storage"
conclusions:
  - title: "HCI arxitekturasi"
    items:
      - "AOS, CVM, Stargate, Cassandra"
      - "Data locality va unumdorlik"
      - "RF2 va RF3, compression, deduplication"
  - title: "Ekspluatatsiya"
    items:
      - "Prism Element va Prism Central"
      - "Rebuild Capacity Reservation, Rack Awareness"
      - "Kategoriyalar, teglar, Authorization Policies"
  - title: "Disaster Recovery"
    items:
      - "Protection Policy va Consistency Groups"
      - "Near-Sync replikatsiya"
      - "Test tarmog'i va re-IP bilan Recovery Plan"
  - title: "Avtomatlashtirish va ma'lumotlar bazasi"
    items:
      - "X-Play — low-code workflows"
      - "NDB: Oracle, PostgreSQL, MS SQL, MongoDB"
      - "Flow Network Security va mikrosegmentatsiya"
recommendations:
  immediate:
    - "Ishtirokchi eslatmasini ko'rib chiqish: asosiy tushunchalar va keyingi qadamlar"
    - "Laboratoriyada Protection Policy va Recovery Plan'ni amaliy sozlash"
    - "Joriy infratuzilmaning HCI'ga tayyorligini baholash"
    - "Nutanix NCA sertifikatlash yo'li"
  strategic:
    - "NDB orqali ma'lumotlar bazalarini konsolidatsiya qilish"
    - "Flow Network Security bilan mikrosegmentatsiyani joriy etish"
    - "X-Play yordamida ekspluatatsion workflow'larni avtomatlashtirish"
    - "Near-Sync replikatsiya bilan DR arxitekturasini qurish"
techStack:
  - name: "Nutanix AOS"
    description: "HCI Foundation"
    color: "green"
  - name: "Prism Central"
    description: "Control Plane"
    color: "purple"
  - name: "Flow Network Security"
    description: "Microsegmentation"
    color: "red"
  - name: "Nutanix NDB"
    description: "Database Services"
    color: "teal"
ctaQuestion: "Jamoangiz uchun o'quv kerakmi?"
photos:
  - "/images/events/2026-04-16/00.jpg"
  - "/images/events/2026-04-16/01.jpg"
  - "/images/events/2026-04-16/02.jpg"
  - "/images/events/2026-04-16/03.jpg"
contact:
  email: "info@acropolis.uz"
  telegram: "https://t.me/acropolis_integro"
  website: "acropolis.uz"
---

2026-yil aprel oyida ACROPOLIS INTEGRO jamoasi buyurtmachilarning muhandislik jamoalari uchun **Nutanix** platformasi bo'yicha yopiq ikki kunlik texnik o'quv o'tkazdi.

O'quv mahsulot taqdimoti sifatida emas, balki ishchi sessiya sifatida qurilgan — rasmiy hujjatlarda topilmaydigan haqiqiy keyslar, arxitektura yechimlari va ekspluatatsion nuanslar tahlili bilan.

### Ikki kun davomida nimalarni ko'rib chiqdik

**1-kun — asoslar va platforma tuzilishi:**

- HCI nazariyasi, klassik xotira tizimlaridan farqlari
- AOS, CVM, Stargate, Cassandra, metama'lumotlar tuzilishi
- Data locality — unumdorlik manbai sifatida
- Prism Element: storage-konteynerlar, volume groups, hardware layout
- Tavsiya etilgan sozlamalar: Rebuild Capacity Reservation, Rack Awareness, Pulse, VIP/DSIP
- RF2 va RF3, compression, deduplication, erasure coding — qachon nimani yoqish kerak

**2-kun — ekspluatatsiya va avtomatlashtirish:**

- Prism Central: kategoriyalar, teglar, rollar modeli, Authorization Policies
- cloud-init va sysprep orqali Cloud Image'dan VM'larni joylashtirish
- Flow Network Security va IP'siz mikrosegmentatsiya
- Protection Policy, Consistency Groups, Near-Sync replikatsiya
- Test tarmog'i va avtomatik re-IP bilan Recovery Plan
- X-Play — low-code workflow avtomatlashtirish
- NDB (Nutanix Database Services) — Oracle, PostgreSQL, MS SQL, MongoDB'ni boshqarish
- External Storage (Pure, NetApp, Dell) — mintaqada qachon qo'llaniladi
- Nosozliklarni topish va Nutanix Support bilan ishlash

### Format

Ikki kunlik intensiv bosqichma-bosqich mantiq bilan: nazariya → arxitektura → interfeysda amaliyot → ekspluatatsion tavsiyalar. Tanaffuslar bilan 45-daqiqalik bloklar formati samarali ekanligini isbotladi — material ortiqcha yuksiz o'zlashtiriladi, savollar va "post-mortem"lar uchun vaqt qoladi.

### Kimlar uchun foydali

- VMware'dan Nutanix'ga o'tayotgan yoki platformani baholayotgan IT-jamoalar
- HCI yechimlarini loyihalashtiruvchi infratuzilma arxitektorlari
- Ma'lumotlar bazasini konsolidatsiya qilish uchun NDB'ni ko'rib chiqayotgan DBA'lar
- Disaster recovery va mikrosegmentatsiyani joriy etayotgan jamoalar

### Ishtirokchilar uchun natija

Har bir ishtirokchi asosiy tushunchalar, ekspluatatsion tavsiyalar va keyingi qadamlar ro'yxati bilan tuzilgan eslatmani oldi — shu jumladan Nutanix NCA sertifikatlash yo'li, Nutanix Bible va Portal havolalari.

### Keyingi qadamlar

Protection Policy va Recovery Plan'ni amaliy sozlash bilan laboratoriya muhitini namoyish qilish. Kelajakda NDB, Flow Network Security va X-Play avtomatlashtirish bo'yicha kengaytirilgan o'quvlar rejalashtirilgan.

### Jamoangiz uchun o'quv kerakmi?

ACROPOLIS INTEGRO asosiy vendorlar portfeli bo'yicha texnik o'quvlar o'tkazadi: **Nutanix, Red Hat, SUSE, Lenovo, Check Point, NVIDIA, Commvault, Cloudflare**. Format jamoaning vazifalariga moslashtiriladi — boshqaruv uchun kirish sessiyalaridan tortib muhandislar uchun chuqur texnik intensivlargacha.

Murojaat qiling — format va sanalarni sizning jadvalingizga moslashtiramiz.
