# Technical Stack

## Core

### Astro

Gunakan Astro dari paket utama:

`withastro/astro -> packages/astro`

Versi yang terdeteksi pada repository `main` saat dokumen ini dibuat:

`astro@7.3.3`

Gunakan Astro sebagai framework utama, bukan sekadar shell untuk React.

### Runtime / Build

- Node.js >= 22.12
- Vite 8.x melalui Astro
- TypeScript
- ESM

### Rendering

Default:

- Static Site Generation
- prerender semua landing page
- tidak memerlukan server runtime

SSR hanya dipakai jika di masa depan ada kebutuhan server-side yang nyata.

## Styling

Pilihan utama:

- CSS native
- CSS custom properties
- cascade layers bila membantu
- component-scoped style pada `.astro`

Tidak perlu Tailwind untuk proyek ini kecuali tim memang membutuhkannya.

Alasan:

- halaman tunggal;
- desain sangat terarah;
- menjaga markup bersih;
- mengurangi utilitas berlebihan;
- lebih mudah menjaga anti-slop visual.

## Icons

Gunakan salah satu:

- inline SVG lokal;
- Iconify melalui build-time package bila benar-benar perlu.

Aturan:

- maksimal satu style icon;
- icon hanya untuk fungsi/informasi;
- jangan memakai icon sebagai filler.

## Fonts

Gunakan maksimal dua family.

Rekomendasi:

- Heading: Manrope atau Plus Jakarta Sans
- Body: Inter atau system sans

Lebih baik self-host font WOFF2 jika memungkinkan.

## Images

Gunakan Astro Assets:

- `astro:assets`
- `Image`
- `Picture`

Format target:

- AVIF
- WebP
- fallback bila perlu

Jangan menyimpan foto beresolusi besar tanpa optimasi.

## Interactivity

Tidak memasang React secara default.

Gunakan:

- HTML `<details>` untuk FAQ bila sesuai;
- script vanilla kecil untuk mobile navigation;
- script kecil untuk tabs bila tabs benar-benar diperlukan.

Prinsip:

> no hydration unless interaction truly needs it

## Validation

Recommended:

- `astro check`
- TypeScript strict
- ESLint bila tim sudah menggunakannya
- Prettier
- Playwright opsional untuk smoke test
- Lighthouse CI opsional

## Package Manager

Gunakan `pnpm`.

Contoh:

```bash
pnpm create astro@latest sdtq-fajar-sunnah
cd sdtq-fajar-sunnah
pnpm install
pnpm dev
```

Untuk reproducible install, pin versi Astro di `package.json` setelah proyek dibuat.

## Anti-slop AI

Gunakan anti-slop sebagai guardrail desain/coding.

Release yang digunakan saat dokumen dibuat:

`v3.2.9`

Installer:

```bash
npx antislop-ai
```

Ikuti prompt installer dan pilih scope project.

Jika agent mendukung project skills, pastikan instalasi masuk ke project dan pointer instruksi tersedia melalui `AGENTS.md`.

## Deployment

Pilihan:

1. Vercel
2. Netlify
3. Cloudflare Pages

Karena site static, seluruh opsi di atas memadai.

## Tidak Perlu

Jangan memasang tanpa alasan:

- React
- Next.js
- database
- authentication
- state management library
- animation library besar
- UI component library besar
- CMS
- server functions

Tambahkan hanya ketika requirement nyata muncul.
