# Design System

## Design Direction

Kata kunci:

- clean
- warm
- trustworthy
- educational
- modern
- grounded
- calm
- clear

Bukan:

- playful berlebihan
- neon
- glossy
- glassmorphism
- 3D icon
- floating blobs
- gradient-heavy
- SaaS startup template
- AI-generated ornamental design

## Brand Colors

Ambil arah dari logo.

### Core Tokens

```css
:root {
  --color-navy-950: #071632;
  --color-navy-900: #0b1c3f;
  --color-navy-800: #142a57;

  --color-yellow-500: #ffd91a;
  --color-yellow-400: #ffe34b;
  --color-yellow-100: #fff7c7;

  --color-ink: #101828;
  --color-muted: #667085;
  --color-border: #e4e7ec;
  --color-bg: #ffffff;
  --color-bg-soft: #fafafa;

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;

  --shadow-soft: 0 10px 30px rgb(16 24 40 / 0.08);
}
```

Catatan:

- jangan menggunakan terlalu banyak shade;
- jangan membuat gradient dekoratif jika solid color cukup;
- kuning dipakai sebagai accent, bukan background seluruh halaman.

## Typography

Heading:

- font-weight 650–750;
- line-height ketat tapi tetap nyaman;
- heading lebih pendek daripada body.

Body:

- 16–18px desktop;
- 16px mobile;
- line-height 1.6–1.75.

Contoh scale:

```css
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.375rem;
--text-2xl: 1.75rem;
--text-3xl: clamp(2rem, 4vw, 3.5rem);
```

Jangan memaksakan fluid typography untuk semua ukuran.

## Layout

Maximum content width:

`1120–1200px`

Text content width:

`640–760px`

Section spacing:

- mobile: 64–80px
- desktop: 88–120px

Tidak semua section harus memiliki background sendiri.

## Cards

Card bukan default container.

Gunakan card hanya ketika:

- item memang independen;
- perlu grouping visual;
- metadata perlu dipisahkan.

Jangan membuat semua bullet menjadi card.

## Buttons

Primary:

- navy background;
- white text;
- medium radius;
- tidak pill penuh.

Secondary:

- border navy;
- white background.

WhatsApp:

- tidak perlu hijau menyala di seluruh halaman;
- bisa memakai icon WA dengan style brand pada CTA khusus.

Button text harus literal:

- `Daftar PPDB`
- `Tanya via WhatsApp`
- `Lihat Instagram`

Hindari:

- `Mulai Perjalanan`
- `Jelajahi Sekarang`
- `Discover More`
- `Learn More`

jika link sebenarnya bisa dijelaskan secara spesifik.

## Photography

Gunakan:

- foto gedung;
- kelas;
- kegiatan;
- fasilitas;
- hasil aktivitas sekolah.

Tidak gunakan:

- stock photo;
- AI-generated children;
- generic school imagery;
- foto dengan watermark.

Treatment:

- crop realistis;
- contrast wajar;
- tidak terlalu saturated;
- rounded corner seperlunya;
- tidak perlu decorative frames.

## Icons

Gunakan hanya jika membantu scan.

Contoh valid:

- phone
- Instagram
- email
- map pin
- calendar

Contoh tidak perlu:

- icon untuk setiap bullet mata pelajaran;
- icon bintang sebagai filler;
- icon rocket;
- icon sparkle.

## Motion

Default:

- hampir tidak ada.

Boleh:

- hover underline;
- button state;
- subtle disclosure animation;
- menu transition ringan.

Tidak boleh:

- parallax;
- scroll-jacking;
- infinite pulse;
- bouncing arrows;
- floating decorative objects;
- entrance animation untuk setiap section.

## Responsive States

Jangan desain hanya dua state:

- mobile
- desktop

Periksa minimal:

- 360
- 390
- 768
- 1024
- 1280
- 1440

Breakpoints muncul dari konten, bukan angka arbitrer.
