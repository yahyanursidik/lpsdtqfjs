# SDTQ Fajar Sunnah — Landing Page Documentation

Dokumentasi ini menjadi sumber kerja utama untuk membangun landing page PPDB SDTQ Fajar Sunnah Tahun Ajaran 2027/2028 menggunakan Astro dan pendekatan anti-slop.

## Tujuan

Landing page harus:

- cepat dipahami orang tua;
- mobile-first;
- fokus pada informasi PPDB;
- menampilkan program Al-Qur'an, keagamaan, akademik, profil lulusan, fasilitas, biaya, jadwal, FAQ, dan CTA;
- memiliki CTA langsung ke formulir pendaftaran, WhatsApp, dan Instagram;
- menggunakan foto asli sekolah;
- tidak menjadi "brosur yang dipanjangkan ke web";
- menghindari visual AI-slop, copy berlebihan, efek dekoratif yang tidak perlu, dan komponen generik ala SaaS.

## Stack Utama

- Astro 7.3.3
- TypeScript
- Astro Components
- CSS native + design tokens
- Astro Image / assets pipeline
- Static Site Generation
- Vite 8.x yang dibawa oleh Astro
- Anti-slop AI v3.2.9 sebagai guardrail desain dan implementasi
- Deploy: Vercel, Netlify, atau Cloudflare Pages

> Catatan: versi di atas mengikuti kondisi repository Astro `main/packages/astro/package.json` dan release anti-slop yang dicek pada 17 September 2026.

## Prinsip Implementasi

1. Jangan memasang React/Vue/Svelte bila tidak diperlukan.
2. Gunakan Astro untuk hampir seluruh UI.
3. JavaScript hanya untuk interaksi kecil seperti mobile menu, accordion FAQ, atau tab PPDB bila dibutuhkan.
4. Data sekolah tidak hard-coded di komponen.
5. Semua nomor WA, URL, timeline, biaya, dan program ditempatkan di `src/data/`.
6. Gunakan semantic HTML.
7. Gunakan progressive enhancement.
8. Gunakan foto sekolah asli dan logo resmi.
9. Jangan membuat dekorasi yang mengalihkan perhatian dari pesan.
10. Semua halaman harus lulus checklist anti-slop sebelum delivery.

## Dokumen Penting

- `PROJECT_BRIEF.md` — arah produk
- `TECH_STACK.md` — stack dan aturan teknis
- `ARCHITECTURE.md` — struktur proyek
- `CONTENT_MAP.md` — struktur informasi
- `DESIGN_SYSTEM.md` — visual system
- `ANTI_SLOP_GUIDE.md` — aturan desain anti-slop
- `COMPONENTS.md` — komponen dan API internal
- `DATA_MODEL.md` — sumber data terstruktur
- `SEO_PERFORMANCE.md` — SEO dan performa
- `IMPLEMENTATION_PLAN.md` — tahapan pengerjaan
- `QA_CHECKLIST.md` — quality gate
- `VIBE_CODING_INSTRUCTIONS.md` — instruksi utama untuk AI coding agent
- `MASTER_PROMPT.md` — prompt yang dapat ditempel langsung ke AI coding agent
- `AGENTS.md` — instruksi ringkas agent di root project

## Sumber Konten

Konten landing page diambil dari brosur PPDB SDTQ Fajar Sunnah dan harus diverifikasi ulang sebelum go-live, terutama:

- tahun ajaran;
- usia minimal;
- URL pendaftaran;
- username Instagram;
- domain utama;
- rincian biaya;
- nomor kontak;
- tanggal gelombang PPDB.

Jangan "memperbaiki" data berdasarkan asumsi. Jika ada data ambigu, tampilkan sebagai TODO sampai dikonfirmasi.
