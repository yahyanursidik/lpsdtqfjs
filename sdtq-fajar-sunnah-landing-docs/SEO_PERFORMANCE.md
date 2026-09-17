# SEO & Performance

## SEO Title

`PPDB SDTQ Fajar Sunnah 2027/2028 | Sekolah Dasar Tahfidz Lembang`

Target panjang:

50–60 karakter bila memungkinkan.

## Meta Description

`Informasi PPDB SDTQ Fajar Sunnah Lembang Tahun Ajaran 2027/2028. Program Tahfidz dan Tahsin, pendidikan keagamaan dan akademik dengan target hafalan 3–6 juz.`

Jangan keyword stuffing.

## Canonical

Set canonical ke domain produksi final.

## Open Graph

Wajib:

- `og:title`
- `og:description`
- `og:type`
- `og:url`
- `og:image`
- `og:locale= id_ID`

OG image:

- 1200×630
- logo jelas
- nama sekolah
- headline singkat
- tidak crowded

## Twitter/X Cards

Gunakan `summary_large_image`.

## Structured Data

Gunakan JSON-LD:

- `EducationalOrganization`
- `School`
- `PostalAddress`
- `ContactPoint`

Jangan memasukkan rating jika tidak ada data nyata.

## Semantic Structure

Harus memiliki:

```html
<header>
<nav>
<main>
<section>
<footer>
```

Satu H1 per page.

## Internal Anchors

```text
#tentang
#program
#unggulan
#lulusan
#aktivitas
#fasilitas
#ppdb
#biaya
#faq
#kontak
```

## Image Optimization

- hero: eager / high priority
- below-fold: lazy
- set width & height
- gunakan responsive srcset
- prefer AVIF/WebP
- gunakan descriptive alt

## Font Optimization

- maksimal 2 families;
- WOFF2;
- subset bila tersedia;
- preload hanya font yang dipakai di above-the-fold;
- gunakan `font-display: swap`.

## JavaScript Budget

Target:

- initial JS seminimal mungkin;
- tanpa React runtime;
- hindari dependency hanya untuk accordion/menu.

## CSS Budget

Jaga agar global stylesheet tetap kecil.

Gunakan:

- custom properties;
- scoped component styles;
- shared primitive minimal.

## Lighthouse Target

Target minimum:

- Performance ≥ 95
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO ≥ 95

## Core Web Vitals

Prioritas:

- LCP: optimalkan hero image;
- CLS: tetapkan dimensi gambar;
- INP: minimalkan client JS.

## Analytics

Jangan pasang tracking sebelum ada requirement.

Jika diperlukan:

- privacy-conscious analytics;
- tidak blocking;
- defer script.
