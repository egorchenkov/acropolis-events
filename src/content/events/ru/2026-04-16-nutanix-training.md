---
lang: "ru"
title: "Двухдневное техническое обучение по платформе Nutanix"
subtitle: "От HCI-архитектуры до автоматизации и disaster recovery — апрель 2026, Баку"
date: "апрель 2026"
dateISO: "2026-04-16"
location: "Баку, Азербайджан"
eventType: "own"
partners:
  - name: "Nutanix"
    logo: "/images/partners/nutanix.svg"
description: "ACROPOLIS INTEGRO провела двухдневное техническое обучение по Nutanix для команд заказчиков. Глубокое погружение в HCI-архитектуру, эксплуатацию AOS, репликацию, автоматизацию и управление БД."
program:
  - time: "День 1"
    title: "Основы и устройство платформы: HCI, AOS/CVM, Data Locality, Prism Element, RF2/RF3, compression, deduplication, erasure coding"
  - time: "День 2"
    title: "Эксплуатация и автоматизация: Prism Central, Flow Network Security, Protection Policy, Recovery Plan, X-Play, NDB, External Storage"
conclusions:
  - title: "HCI-архитектура"
    items:
      - "AOS, CVM, Stargate, Cassandra"
      - "Data locality и производительность"
      - "RF2 vs RF3, compression, deduplication"
  - title: "Эксплуатация"
    items:
      - "Prism Element и Prism Central"
      - "Rebuild Capacity Reservation, Rack Awareness"
      - "Категории, теги, Authorization Policies"
  - title: "Disaster Recovery"
    items:
      - "Protection Policy и Consistency Groups"
      - "Near-Sync репликация"
      - "Recovery Plan с тестовой сетью и re-IP"
  - title: "Автоматизация и БД"
    items:
      - "X-Play — low-code workflows"
      - "NDB: Oracle, PostgreSQL, MS SQL, MongoDB"
      - "Flow Network Security и микросегментация"
recommendations:
  immediate:
    - "Разбор памятки участника: ключевые концепции и next steps"
    - "Практика Protection Policy и Recovery Plan в лабораторной среде"
    - "Оценка текущей инфраструктуры на готовность к HCI"
    - "Путь сертификации Nutanix NCA"
  strategic:
    - "Консолидация баз данных через NDB"
    - "Внедрение микросегментации через Flow Network Security"
    - "Автоматизация эксплуатационных workflow через X-Play"
    - "Построение DR-архитектуры с Near-Sync репликацией"
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
ctaQuestion: "Нужно обучение для вашей команды?"
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

В апреле 2026 года команда ACROPOLIS INTEGRO провела закрытое двухдневное техническое обучение по платформе **Nutanix** для инженерных команд наших заказчиков.

Обучение построено не как презентация продукта, а как рабочая сессия — с разбором реальных кейсов, архитектурных решений и эксплуатационных нюансов, которые не найти в официальной документации.

### Что разобрали за два дня

**День 1 — основы и устройство платформы:**

- Теоретические основы HCI, отличия от классических СХД
- Устройство AOS, CVM, Stargate, Cassandra, метаданные
- Data locality как источник производительности
- Prism Element: storage-контейнеры, volume groups, hardware-закладка
- Рекомендуемые настройки: Rebuild Capacity Reservation, Rack Awareness, Pulse, VIP/DSIP
- RF2 vs RF3, compression, deduplication, erasure coding — когда что включать

**День 2 — эксплуатация и автоматизация:**

- Prism Central: категории, теги, ролевая модель, Authorization Policies
- Развёртывание ВМ из Cloud Image через cloud-init и sysprep
- Flow Network Security и микросегментация без IP-адресов
- Protection Policy, Consistency Groups, Near-Sync репликация
- Recovery Plan с тестовой сетью и автоматическим re-IP
- X-Play — low-code автоматизация workflow
- NDB (Nutanix Database Services) — управление Oracle, PostgreSQL, MS SQL, MongoDB
- External Storage (Pure, NetApp, Dell) — когда применимо для региона
- Поиск и устранение неисправностей, работа с Nutanix Support

### Формат

Двухдневный интенсив с пошаговой логикой: теория → архитектура → практика в интерфейсе → эксплуатационные рекомендации. Формат 45-минутных блоков с перерывами доказал эффективность — материал усваивается без перегрузки, остаётся время на вопросы и «разборы полётов».

### Для кого полезно такое обучение

- IT-команды, переходящие с VMware на Nutanix или оценивающие платформу
- Архитекторы инфраструктуры, проектирующие HCI-решения
- DBA, рассматривающие NDB для консолидации баз данных
- Команды, внедряющие disaster recovery и микросегментацию

### Результат для участников

Каждый участник получил структурированную памятку с ключевыми концепциями, рекомендациями по эксплуатации и списком дальнейших шагов — включая путь сертификации Nutanix NCA, ссылки на Nutanix Bible и Portal.

### Следующие шаги

Демонстрация лабораторной среды с практической настройкой Protection Policy и Recovery Plan. В дальнейшем планируем расширенные обучения по NDB, Flow Network Security и автоматизации X-Play.

### Нужно обучение для вашей команды?

ACROPOLIS INTEGRO проводит технические обучения по портфелю ключевых вендоров: **Nutanix, Red Hat, SUSE, Lenovo, Check Point, NVIDIA, Commvault, Cloudflare**. Формат адаптируется под задачи команды — от вводных сессий для менеджмента до глубоких технических интенсивов для инженеров.

Оставьте заявку — согласуем формат и даты под ваш график.
