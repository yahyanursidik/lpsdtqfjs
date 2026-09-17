# Architecture

## Prinsip

Arsitektur harus sederhana, predictable, dan mudah dirawat.

Tidak perlu DDD, service layer, store global, atau pola enterprise untuk landing page satu halaman.

## Folder Structure

```text
/
├── public/
│   ├── favicon.svg
│   ├── og/
│   │   └── ppdb-fajar-sunnah.jpg
│   └── files/
│       └── brosur-ppdb.pdf
│
├── src/
│   ├── assets/
│   │   ├── logo/
│   │   │   └── logo-fajar-sunnah.png
│   │   └── photos/
│   │       ├── school/
│   │       ├── tahfidz/
│   │       ├── activities/
│   │       └── facilities/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── MobileNav.astro
│   │   │   └── Footer.astro
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── QuickFacts.astro
│   │   │   ├── About.astro
│   │   │   ├── QuranProgram.astro
│   │   │   ├── Curriculum.astro
│   │   │   ├── Highlights.astro
│   │   │   ├── GraduateProfile.astro
│   │   │   ├── Activities.astro
│   │   │   ├── Facilities.astro
│   │   │   ├── Admissions.astro
│   │   │   ├── Requirements.astro
│   │   │   ├── Fees.astro
│   │   │   ├── Gallery.astro
│   │   │   ├── FAQ.astro
│   │   │   └── FinalCTA.astro
│   │   │
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── SectionHeading.astro
│   │       ├── Container.astro
│   │       ├── IconLink.astro
│   │       └── WhatsAppFloating.astro
│   │
│   ├── data/
│   │   ├── school.ts
│   │   ├── navigation.ts
│   │   ├── programs.ts
│   │   ├── admissions.ts
│   │   ├── fees.ts
│   │   ├── activities.ts
│   │   ├── facilities.ts
│   │   └── faq.ts
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── global.css
│   │   └── utilities.css
│   │
│   └── types/
│       └── content.ts
│
├── AGENTS.md
├── DESIGN.md
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## Data Flow

```text
src/data/*
   ↓
section components
   ↓
index.astro
   ↓
BaseLayout
   ↓
static HTML
```

Data tidak mengambil dari API untuk versi awal.

## Configuration

Buat `school.ts` sebagai single source of truth:

```ts
export const school = {
  name: 'SDTQ Fajar Sunnah',
  shortName: 'Fajar Sunnah',
  tagline: "Menghafal Al-Qur'an, Membangun Masa Depan",
  whatsapp: '6285179681514',
  instagramUrl: '',
  registrationUrl: '',
  email: 'ppdb@fajarsunnah.id',
  website: 'https://fajarsunnah.id',
  address: {
    line1: 'BTN Pusdikajen Jl. Wira No. A13',
    village: 'Kayuambon',
    district: 'Lembang',
    region: 'Kabupaten Bandung Barat',
  },
} as const;
```

Jika URL belum terverifikasi, gunakan string kosong dan jangan render CTA terkait sampai dikonfirmasi.

## Performance Architecture

- tidak ada client framework default;
- tidak ada global JS bundle besar;
- image optimization build-time;
- static HTML;
- CSS minimal;
- preload hanya asset penting;
- lazy-load gallery;
- defer non-critical script.

## Accessibility Architecture

- skip link;
- `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`;
- heading hierarchy valid;
- button/link semantics benar;
- focus-visible;
- aria hanya jika native semantics tidak cukup;
- image alt deskriptif, bukan keyword stuffing.

## Future Extension

Jika nanti ada:

- berita;
- artikel;
- profil sekolah;
- halaman program;
- galeri;
- FAQ dinamis;

gunakan Astro Content Collections.

Jangan memakainya sekarang jika konten masih satu landing page.
