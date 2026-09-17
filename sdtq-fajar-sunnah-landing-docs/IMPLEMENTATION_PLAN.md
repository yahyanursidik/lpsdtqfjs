# Implementation Plan

## Phase 0 — Verification

Sebelum coding:

- [ ] konfirmasi tahun ajaran final;
- [ ] konfirmasi usia minimal;
- [ ] konfirmasi URL pendaftaran;
- [ ] konfirmasi Instagram resmi;
- [ ] konfirmasi domain utama;
- [ ] konfirmasi nomor WhatsApp;
- [ ] konfirmasi seluruh biaya;
- [ ] kumpulkan logo resolusi baik;
- [ ] kumpulkan 6–10 foto asli;
- [ ] konfirmasi apakah brosur PDF perlu link download.

## Phase 1 — Bootstrap

- [ ] create Astro project;
- [ ] pin Astro version;
- [ ] setup TypeScript strict;
- [ ] setup global styles;
- [ ] install anti-slop project scope;
- [ ] create `AGENTS.md`;
- [ ] create `DESIGN.md`;
- [ ] create data modules.

## Phase 2 — Foundation

- [ ] BaseLayout;
- [ ] metadata;
- [ ] fonts;
- [ ] design tokens;
- [ ] Container;
- [ ] Button;
- [ ] Header;
- [ ] Footer.

## Phase 3 — Above the Fold

- [ ] Hero;
- [ ] Quick Facts;
- [ ] responsive hero;
- [ ] optimized hero image;
- [ ] WhatsApp CTA;
- [ ] registration CTA.

Review anti-slop sebelum lanjut.

## Phase 4 — Core Information

- [ ] About;
- [ ] Quran Program;
- [ ] Curriculum;
- [ ] Highlights;
- [ ] Graduate Profile.

## Phase 5 — Supporting Information

- [ ] Activities;
- [ ] Facilities;
- [ ] Gallery.

## Phase 6 — Conversion

- [ ] Admissions timeline;
- [ ] Requirements;
- [ ] Fees;
- [ ] FAQ;
- [ ] Final CTA;
- [ ] sticky/floating mobile CTA bila diperlukan.

## Phase 7 — SEO & Accessibility

- [ ] title;
- [ ] meta description;
- [ ] canonical;
- [ ] OG;
- [ ] JSON-LD;
- [ ] heading hierarchy;
- [ ] keyboard navigation;
- [ ] focus visible;
- [ ] alt text;
- [ ] contrast.

## Phase 8 — QA

- [ ] 360px;
- [ ] 390px;
- [ ] 768px;
- [ ] 1024px;
- [ ] 1280px;
- [ ] 1440px;
- [ ] Chrome;
- [ ] Firefox;
- [ ] Safari;
- [ ] Android;
- [ ] iPhone viewport.

## Phase 9 — Anti-Slop Delivery Gate

- [ ] no meaningless badge;
- [ ] no decorative dots;
- [ ] no fake metrics;
- [ ] no excessive cards;
- [ ] no glassmorphism;
- [ ] no gradient blobs;
- [ ] no generic AI copy;
- [ ] no fake testimonial;
- [ ] no needless animation;
- [ ] no overdecorated CTA.

## Phase 10 — Build & Deploy

```bash
pnpm astro check
pnpm build
pnpm preview
```

Kemudian:

- [ ] test all links;
- [ ] test WhatsApp deep link;
- [ ] test Instagram;
- [ ] test form registration;
- [ ] test OG preview;
- [ ] run Lighthouse;
- [ ] deploy.
