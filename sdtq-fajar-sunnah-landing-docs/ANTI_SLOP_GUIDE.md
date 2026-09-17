# Anti-Slop Guide

Dokumen ini harus dibaca bersama aturan dari `anti-slop AI`.

Versi referensi:

`v3.2.9`

## Cara Install

Jalankan:

```bash
npx antislop-ai
```

Pilih instalasi project-level untuk repo ini.

Setelah instalasi:

1. pastikan skill/config anti-slop tersedia di project;
2. pastikan `AGENTS.md` menunjuk ke instruksi anti-slop bila installer menambahkannya;
3. restart AI coding agent bila diperlukan;
4. jalankan review anti-slop sebelum delivery.

## Aturan Khusus Proyek Ini

### 1. Tidak Ada "Eyebrow Badge" Dekoratif

Jangan buat:

```text
● PPDB 2027/2028
```

dalam pill kecil di atas H1 hanya untuk dekorasi.

Jika label konteks perlu, tampilkan sebagai text biasa tanpa badge visual berlebihan.

### 2. Tidak Ada Decorative Status Dot

Dot hijau/kuning yang glowing atau pulsing tidak boleh digunakan kecuali benar-benar menyatakan status sistem nyata.

PPDB bukan dashboard realtime.

### 3. Tidak Ada Glassmorphism

Hindari:

- blur transparan;
- frosted glass;
- translucent cards;
- shiny borders.

### 4. Tidak Ada Bento Grid Generik

Jangan menata semua fitur menjadi bento cards hanya karena terlihat modern.

Gunakan layout editorial yang sesuai kebutuhan konten.

### 5. Tidak Ada Gradient Berlebihan

Logo sudah memiliki karakter kuning/navy.

Gunakan solid background sebagai default.

### 6. Tidak Ada AI Copy

Hindari frasa:

- "lebih dari sekadar sekolah";
- "tempat di mana mimpi bertumbuh";
- "masa depan gemilang dimulai di sini";
- "perjalanan luar biasa";
- "unlock potential";
- "membangun generasi masa depan" bila tidak spesifik.

Gunakan fakta yang dapat diverifikasi.

### 7. Tidak Semua Konten Menjadi Card

Daftar kurikulum boleh berupa columns sederhana.

Timeline boleh berupa rows.

Biaya boleh berupa table/list.

FAQ memakai disclosure.

### 8. Tidak Ada Fake Metrics

Jangan membuat angka seperti:

- 98% kepuasan orang tua;
- 100+ alumni sukses;
- 10 tahun dipercaya;

kecuali ada data resmi.

### 9. Tidak Ada Fake Testimonials

Jangan membuat testimoni placeholder.

Jika testimoni belum tersedia, hilangkan section.

### 10. Tidak Ada Fake Logos / Partner Strip

Jangan membuat "trusted by" tanpa sumber.

### 11. Responsive Harus Kontinu

Jangan hanya:

- mobile stack
- desktop grid

Pastikan tablet dan small laptop tetap masuk akal.

### 12. Hindari Over-Explained Comment

Komentar kode maksimal 1–2 baris.

Komentar menjelaskan "why", bukan mengulang "what".

### 13. Asset Clarification

Sebelum mengganti logo/foto:

- cek asset yang tersedia;
- jangan generate asset baru jika asset resmi sudah ada;
- jangan mengganti foto sekolah dengan AI image.

### 14. Delivery Gate

Sebelum selesai, agent wajib melakukan:

- desktop screenshot review;
- mobile screenshot review;
- scan visual hierarchy;
- scan copy generik;
- scan useless decoration;
- scan overflow;
- scan focus state;
- build verification;
- lint/type check;
- link check.

## Reject List

Jika ditemukan elemen berikut, review ulang:

- pill badge berlebihan;
- decorative dots;
- meaningless sparkle;
- glow;
- pulse;
- gradient blob;
- floating 3D icon;
- stock illustration;
- card dalam card;
- oversized border radius;
- icon untuk bullet sederhana;
- excessive drop shadow;
- fake stats;
- fake social proof;
- one-line generic marketing copy;
- title + subtitle + eyebrow + badge + chips sekaligus;
- CTA berulang tiap section tanpa kebutuhan.
