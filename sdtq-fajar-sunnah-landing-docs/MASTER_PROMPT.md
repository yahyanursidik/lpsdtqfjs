# Master Prompt — Build Landing Page SDTQ Fajar Sunnah

Copy prompt ini ke AI coding agent setelah seluruh file dokumentasi tersedia di repository.

---

Kamu akan membangun landing page PPDB SDTQ Fajar Sunnah Tahun Ajaran 2027/2028.

Baca seluruh file dokumentasi project sebelum coding, terutama:

- AGENTS.md
- PROJECT_BRIEF.md
- CONTENT_MAP.md
- DESIGN_SYSTEM.md
- ANTI_SLOP_GUIDE.md
- TECH_STACK.md
- ARCHITECTURE.md
- DATA_MODEL.md
- VIBE_CODING_INSTRUCTIONS.md
- QA_CHECKLIST.md

## Target

Bangun landing page production-ready menggunakan Astro.

Gunakan Astro sebagai framework utama, bukan sebagai shell untuk React.

Gunakan static rendering dan native Astro components.

Jangan memasang frontend framework tambahan kecuali ada requirement yang benar-benar tidak dapat dipenuhi dengan Astro/native web platform.

## Stack

- Astro 7.3.3
- TypeScript
- CSS native + CSS custom properties
- Astro Assets
- static site generation
- minimal vanilla JavaScript
- anti-slop AI project rules

## Visual Direction

Buat landing page:

- clean;
- warm;
- modern;
- trustworthy;
- educational;
- mobile-first;
- banyak whitespace;
- fokus informasi.

Gunakan identitas navy + yellow dari logo.

Gunakan foto sekolah asli.

Jangan:

- glassmorphism;
- bento grid generik;
- gradient blobs;
- 3D icon;
- icon spam;
- card berlebihan;
- pulsing status dots;
- fake badges;
- fake metrics;
- fake testimonials;
- stock/AI student images;
- copy hiperbolik;
- animasi berlebihan.

## Information Architecture

Urutan:

1. Header
2. Hero
3. Quick Facts
4. Tentang
5. Program Al-Qur'an
6. Kurikulum
7. Program Unggulan
8. Profil Lulusan
9. Aktivitas / Ekstrakurikuler
10. Fasilitas
11. Timeline PPDB
12. Persyaratan
13. Biaya
14. Gallery
15. FAQ
16. Final CTA
17. Footer

## CTA

Primary:
`Daftar PPDB`

Secondary:
`Tanya via WhatsApp`

Tertiary:
`Lihat Instagram`

WhatsApp:

`https://wa.me/6285179681514`

Gunakan prefilled message yang sopan dan singkat.

Jangan membuat URL Instagram atau registration link bila belum tersedia di data.

## Data

Seluruh data faktual harus diambil dari `src/data/*`.

Jangan hard-code berulang.

Jangan memperbaiki data ambigu berdasarkan asumsi.

## Responsiveness

Wajib review:

- 360
- 390
- 768
- 1024
- 1280
- 1440

Jangan hanya membuat dua state mobile/desktop.

## SEO

Implementasikan:

- title;
- meta description;
- canonical;
- OG;
- JSON-LD School/EducationalOrganization;
- semantic markup.

## Performance

Target:

- Lighthouse Performance >= 95
- Accessibility >= 95
- Best Practices >= 95
- SEO >= 95

Minimalkan JS.

## Execution

Kerjakan dalam urutan:

1. inspect docs dan assets;
2. buat plan singkat;
3. scaffold;
4. data;
5. layout/design tokens;
6. hero;
7. remaining sections;
8. responsive;
9. accessibility;
10. SEO;
11. build;
12. anti-slop review;
13. delivery gate.

## Delivery Gate

Sebelum selesai:

- `pnpm astro check`
- `pnpm build`

Lalu review visual pada semua target viewport.

Jangan mengatakan selesai sebelum build sukses.

Beri final report:

```text
Build: PASS
Astro Check: PASS
Responsive: PASS
Accessibility: PASS
Anti-slop review: PASS
Unverified content: ...
```
