---
lang: "ru"
title: "Практический воркшоп Red Hat OpenShift Virtualization"
subtitle: "OpenShift Virtualization Roadshow — миграция ВМ с VMware, Day-2 операции, MTV — 20 апреля 2026, Ташкент"
date: "20 апреля 2026"
dateISO: "2026-04-20"
location: "Ташкент, БЦ «TUT»"
eventType: "own"
partners:
  - name: "Red Hat"
    logo: "/images/partners/redhat.svg"
description: "ACROPOLIS INTEGRO провела однодневный практический воркшоп OpenShift Virtualization Roadshow: объединение ВМ и контейнеров в единой инфраструктуре, миграция с VMware через MTV, резервное копирование и Day-2 операции."
program:
  - time: "10:00"
    title: "Архитектура OpenShift Virtualization: объединение ВМ и контейнеров на Kubernetes-платформе"
  - time: "11:30"
    title: "Создание, управление и миграция ВМ. Migration Toolkit for Virtualization (MTV) — перенос с VMware"
  - time: "14:00"
    title: "Шаблоны, сети, хранилища. Резервное копирование и восстановление ВМ"
  - time: "15:00"
    title: "Day-2 операции и публикация приложений, работающих внутри ВМ"
conclusions:
  - title: "Платформа"
    items:
      - "OpenShift Virtualization поверх Kubernetes"
      - "ВМ и контейнеры в единой control plane"
      - "KubeVirt как основа для работы ВМ"
  - title: "Миграция с VMware"
    items:
      - "Migration Toolkit for Virtualization (MTV)"
      - "Планы миграции и cold/warm migration"
      - "Mapping сетей и хранилищ"
  - title: "Эксплуатация"
    items:
      - "Шаблоны ВМ и cloud-init"
      - "Сети, LoadBalancer, публикация сервисов"
      - "Резервное копирование и восстановление"
  - title: "Day-2"
    items:
      - "Мониторинг и логи ВМ"
      - "Обновления и снапшоты"
      - "Публикация приложений, работающих внутри ВМ"
recommendations:
  immediate:
    - "Развёртывание тестового кластера OpenShift Virtualization"
    - "Инвентаризация текущего парка ВМ на VMware для плана миграции"
    - "Практика с MTV в лабораторной среде"
    - "Ознакомление с официальным гайдом OpenShift Virtualization Roadshow"
  strategic:
    - "Миграция рабочих нагрузок с VMware на OpenShift Virtualization"
    - "Консолидация ВМ и контейнеров в единой Kubernetes-платформе"
    - "Построение Day-2 процессов: backup, DR, обновления"
    - "Путь сертификации Red Hat EX316 (OpenShift Virtualization)"
techStack:
  - name: "OpenShift"
    description: "Kubernetes Platform"
    color: "red"
  - name: "KubeVirt"
    description: "VM Runtime"
    color: "purple"
  - name: "MTV"
    description: "VMware Migration"
    color: "teal"
  - name: "OpenShift Data Foundation"
    description: "Storage"
    color: "green"
ctaQuestion: "Нужно обучение для вашей команды?"
photos:
  - "/images/events/2026-04-20/00.jpg"
contact:
  email: "info@acropolis.uz"
  telegram: "https://t.me/acropolis_integro"
  website: "acropolis.uz"
---

20 апреля 2026 года команда ACROPOLIS INTEGRO провела практический воркшоп **OpenShift Virtualization Roadshow** — однодневный интенсив для администраторов виртуализации, DevOps-инженеров и архитекторов, желающих освоить управление виртуальными машинами на современной Kubernetes-платформе Red Hat OpenShift.

Формат построен не как презентация продукта, а как рабочая лаборатория — с развёртыванием реальной среды и пошаговой отработкой сценариев, с которыми команды столкнутся при переходе на OpenShift Virtualization.

### Что разобрали за день

- Как объединить виртуальные машины и контейнеры в единую инфраструктуру OpenShift
- Создание, миграция и управление ВМ в OpenShift Virtualization
- **Migration Toolkit for Virtualization (MTV)** — инструмент для переноса ВМ с VMware
- Работа с шаблонами ВМ, сетями и хранилищами
- Практики резервного копирования и восстановления ВМ в OpenShift
- Day-2 операции и публикация приложений, работающих внутри ВМ

### Формат

Воркшоп сочетает теорию и практику — участники сразу применяют полученные знания в реальной среде. Пошаговая логика: архитектура → развёртывание → миграция → эксплуатация. Количество мест ограничено — это позволяет удерживать индивидуальный темп и отвечать на вопросы по ходу.

### Для кого полезно такое обучение

- Администраторы виртуализации, оценивающие альтернативы VMware
- DevOps-инженеры, объединяющие ВМ и контейнерные нагрузки
- Архитекторы инфраструктуры, проектирующие гибридные Kubernetes-среды
- Команды, планирующие миграцию рабочих нагрузок на OpenShift

### Результат для участников

Каждый участник получил практический опыт работы с OpenShift Virtualization в реальной среде и понимание, как спроектировать миграцию собственного парка ВМ. Для дальнейшего самостоятельного изучения — официальный гайд [OpenShift Virtualization Roadshow](https://rhpds.github.io/openshift-virt-roadshow-cnv-multi-user/modules/index.html).

### Следующие шаги

Пилотное развёртывание OpenShift Virtualization в инфраструктуре заказчиков, проработка планов миграции с VMware через MTV. В дальнейшем планируем расширенные сессии по Day-2 операциям, резервному копированию и disaster recovery для ВМ в OpenShift.

### Нужно обучение для вашей команды?

ACROPOLIS INTEGRO проводит технические обучения по портфелю ключевых вендоров: **Red Hat, Nutanix, SUSE, Lenovo, Check Point, NVIDIA, Commvault, Cloudflare**. Формат адаптируется под задачи команды — от вводных сессий для менеджмента до глубоких технических интенсивов для инженеров.

Оставьте заявку — согласуем формат и даты под ваш график.
