# ACROPOLIS INTEGRO Events — Project Guidelines

## i18n: Three Languages (RU / EN / UZ)

This site supports three languages. **All changes must be applied to all three language versions simultaneously.**

### Languages & URL structure
- **Russian (default)**: `/` — no prefix
- **English**: `/en/`
- **Uzbek**: `/uz/`

### Adding a new event

1. Create the markdown file in **all three** directories:
   - `src/content/events/ru/<slug>.md` (lang: "ru")
   - `src/content/events/en/<slug>.md` (lang: "en")
   - `src/content/events/uz/<slug>.md` (lang: "uz")
2. The **filename (slug) must be identical** across all three directories — the language switcher depends on this.
3. Each file must include `lang: "ru"`, `lang: "en"`, or `lang: "uz"` in frontmatter.
4. Non-translatable fields must be **identical** across all three files: `dateISO`, `partners` (with logos), `photos`, `contact`, `eventType`, `techStack` (colors).
5. Translatable fields: `title`, `subtitle`, `date` (localized format), `location`, `description`, `speakers` (topics, details — names stay unchanged), `program` (titles), `conclusions`, `recommendations`, `ctaQuestion`, markdown body.
6. Date formats: RU: "28 января 2026", EN: "January 28, 2026", UZ: "2026-yil 28-yanvar".

### Modifying UI text (navigation, buttons, labels)

All UI strings live in `src/i18n/ui.ts`. When adding or changing a UI string:
1. Add/update the key in **all three** locale objects (`ru`, `en`, `uz`).
2. Use `t(lang, 'key.name')` in components — never hardcode text.

### Adding new pages or sections

1. Shared page logic goes in `src/pages/_IndexPage.astro` or `src/pages/_EventPage.astro`.
2. Locale wrappers in `src/pages/index.astro`, `src/pages/en/index.astro`, `src/pages/uz/index.astro` (and similarly for `[...slug].astro`).
3. All new components must accept a `lang: Lang` prop and use `t()` for any user-visible text.
4. Add any new strings to `src/i18n/ui.ts` in all three locales.

### Key files
- `src/i18n/ui.ts` — all UI translation strings
- `src/i18n/utils.ts` — helper functions: `t()`, `localizedPath()`, `getAlternateUrls()`
- `src/content/events/{ru,en,uz}/` — event markdown files per language
- `src/pages/_IndexPage.astro` — shared homepage logic
- `src/pages/_EventPage.astro` — shared event page logic
- `src/components/LanguageSwitcher.astro` — language switcher component
- `astro.config.mjs` — i18n routing config

### Verification checklist
After any content or structural change:
- [ ] All three language versions of affected content exist
- [ ] `npm run build` succeeds (generates 5 pages per language = 15 total)
- [ ] Language switcher correctly links between translations of the same page
- [ ] New UI strings are present in all three locales in `ui.ts`
