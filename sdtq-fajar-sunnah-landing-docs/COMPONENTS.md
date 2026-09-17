# Components

## Design Rule

Komponen dibuat karena:

- dipakai ulang;
- menyederhanakan API;
- menjaga konsistensi;
- mengurangi duplikasi.

Jangan membuat komponen untuk satu baris HTML tanpa manfaat nyata.

## Core UI

### Container.astro

Props:

```ts
type Props = {
  as?: 'div' | 'section';
  class?: string;
};
```

Gunakan satu max-width utama.

### Button.astro

Props:

```ts
type Props = {
  href: string;
  variant?: 'primary' | 'secondary' | 'text';
  external?: boolean;
  ariaLabel?: string;
};
```

Tidak ada 8–12 variant.

### SectionHeading.astro

Props:

```ts
type Props = {
  title: string;
  description?: string;
  align?: 'left' | 'center';
};
```

Jangan mewajibkan eyebrow.

## Layout Components

### Header.astro

Responsibilities:

- logo;
- navigation;
- WhatsApp CTA;
- responsive nav trigger.

Tidak boleh:

- announcement bar dekoratif;
- fake status;
- scrolling marquee.

### Footer.astro

Isi:

- logo;
- navigation;
- contact;
- address;
- copyright.

## Section Components

### Hero.astro

Props/data:

- heading
- intro
- proof points
- image
- CTAs

Hero tidak boleh mengandung lebih dari 3 proof points.

### QuickFacts.astro

4 fakta singkat.

Gunakan dividers atau compact rows.

### About.astro

Text + 3 pillars.

### QuranProgram.astro

Visual anchor:

`3–6 Juz`

Detail:

- Tahfidz
- Tahsin
- Personalized Learning

### Curriculum.astro

Tiga columns.

Tidak perlu 15 cards.

### Highlights.astro

Daftar program unggulan.

Jika pakai grid, item hanya berisi title + 1 kalimat.

### GraduateProfile.astro

Checklist atau structured list.

### Activities.astro

Text list + curated images.

### Facilities.astro

Simple list.

### Admissions.astro

Timeline dua gelombang.

Bisa menggunakan stacked timeline pada mobile dan columns pada desktop jika tetap readable.

### Requirements.astro

Checklist persyaratan.

### Fees.astro

Gunakan table/list yang mudah dibaca.

Jangan menyembunyikan biaya dalam modal.

### Gallery.astro

6–8 gambar.

Lazy-load selain image pertama yang terlihat.

### FAQ.astro

Gunakan `<details>` bila dapat memenuhi UI.

### FinalCTA.astro

Hanya:

- satu headline;
- satu kalimat;
- primary + secondary CTA.

### WhatsAppFloating.astro

Render hanya pada viewport yang benar-benar membutuhkan.

Pastikan tidak menutup:

- cookie controls;
- sticky bottom bar;
- form element.

## Interaction Rule

Jika component bisa berfungsi tanpa client hydration, jangan tambahkan `client:*`.

## Component Naming

Gunakan nama literal.

Baik:

- `Admissions.astro`
- `Fees.astro`

Hindari:

- `MagicSection.astro`
- `EngagementExperience.astro`
- `PremiumFeatureGrid.astro`
