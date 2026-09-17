# SDTQ Fajar Sunnah — Landing Page PPDB

Landing Page Resmi Penerimaan Peserta Didik Baru (PPDB) **Sekolah Dasar Tahfidzul Qur'an (SDTQ) Fajar Sunnah**, Lembang, Kabupaten Bandung Barat.

Dibangun dengan prinsip arsitektur statis murni (*Static Site Generation*), aksesibel, performa tinggi, dan standar desain *anti-slop*.

---

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (SSG)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Native CSS & CSS Custom Properties (Zero CSS Framework bloat)
- **Package Manager**: `pnpm`
- **Interactivity**: Native HTML5 (`<details>`, semantic tags) + Lightweight vanilla script untuk drawer navigasi

---

## 🚀 Memulai Proyek (Getting Started)

### Prasyarat
- Node.js >= 20.x atau 22.x
- `pnpm`

### Instalasi Dependensi
```bash
pnpm install
```

### Menjalankan Server Pengembangan (Local Dev)
```bash
pnpm dev
```
Akses di browser melalui `http://localhost:4321`.

### Pengecekan Type & Sintaks (Astro Check)
```bash
pnpm run check
```

### Membangun Versi Produksi (Production Build)
```bash
pnpm run build
```
Output static HTML siap deploy akan berada di folder `dist/`.

### Pratinjau Hasil Build (Preview)
```bash
pnpm run preview
```

---

## 📂 Struktur Direktori

```text
├── public/                  # Aset statis publik (favicon, logo, og)
├── src/
│   ├── assets/              # Aset gambar & logo teroptimasi
│   ├── components/
│   │   ├── layout/          # Header, MobileNav, Footer
│   │   ├── sections/        # Seluruh section halaman utama
│   │   └── ui/              # Komponen reusable (Container, Button, Heading, WA)
│   ├── data/                # Single source of truth seluruh data faktual sekolah
│   ├── layouts/             # BaseLayout (SEO, OpenGraph, JSON-LD, a11y)
│   ├── pages/               # Entrypoint halaman (index.astro)
│   ├── styles/              # Tokens, global reset, & utilities CSS
│   └── types/               # Definisi antarmuka TypeScript
├── sdtq-fajar-sunnah-landing-docs/ # Dokumentasi brief, arsitektur, & content map
└── astro.config.mjs
```

---

## 📄 Lisensi & Hak Cipta

© SDTQ Fajar Sunnah. Seluruh hak cipta dilindungi.
