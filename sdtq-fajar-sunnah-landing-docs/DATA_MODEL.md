# Data Model

Semua data faktual dipisahkan dari komponen.

## school.ts

```ts
export const school = {
  name: 'SDTQ Fajar Sunnah',
  tagline: "Menghafal Al-Qur'an, Membangun Masa Depan",

  contact: {
    whatsapp: '6285179681514',
    whatsappDisplay: '0851 7968 1514',
    email: 'ppdb@fajarsunnah.id',
    instagramUrl: '',
    registrationUrl: '',
    website: 'https://fajarsunnah.id',
  },

  address: {
    line1: 'BTN Pusdikajen Jl. Wira No. A13',
    village: 'Kayuambon',
    district: 'Lembang',
    region: 'Kabupaten Bandung Barat',
  },
} as const;
```

## admissions.ts

```ts
export const admissionWaves = [
  {
    name: 'Gelombang 1',
    note: null,
    dates: [
      ['Pendaftaran', '17 September – 31 Desember 2026'],
      ['Seleksi', '4 Januari 2027'],
      ['Pengumuman', '6 Januari 2027'],
      ['Daftar ulang', '6–31 Januari 2027'],
    ],
  },
  {
    name: 'Gelombang 2',
    note: 'Dibuka jika kuota belum terpenuhi',
    dates: [
      ['Pendaftaran', '26 Januari – 20 Maret 2027'],
      ['Seleksi & Wawancara', '22 Maret 2027'],
      ['Pengumuman', '30 Maret 2027'],
      ['Daftar ulang', '30 Maret – 10 April 2027'],
    ],
  },
] as const;
```

## programs.ts

```ts
export const curricula = [
  {
    title: "Kurikulum Al-Qur'an",
    items: ['Tahfidz', 'Tahsin', 'Tajwid dasar'],
  },
  {
    title: 'Kurikulum Keagamaan',
    items: [
      'Aqidah',
      'Akhlak',
      'Fiqih',
      'Sejarah Rasul dan sahabat',
      'Bahasa Arab',
      'Hadits',
      'Doa',
    ],
  },
  {
    title: 'Kurikulum Umum',
    items: [
      'Matematika',
      'IPA',
      'Bahasa Indonesia',
      'Bahasa Inggris',
      'SBDP',
      'Penjaskes',
    ],
  },
] as const;
```

## fees.ts

```ts
export const fees = {
  registration: {
    amount: 300000,
    note: 'Diskon 50% untuk 10 pendaftar pertama',
  },
  buildingAndDevelopment: {
    amount: 5900000,
    period: '6 tahun',
    installment: 'Dapat dicicil selama 1 tahun',
  },
  reRegistration: {
    amount: 2500000,
    breakdown: [
      { label: 'Buku', amount: 350000 },
      { label: 'SPP Juli', amount: 350000 },
      {
        label: 'Cicilan wajib sewa gedung & pembangunan awal masuk',
        amount: 1200000,
      },
      { label: 'Seragam', amount: 600000 },
      { label: 'Seragam Akhwat (plus)', amount: 70000 },
    ],
  },
} as const;
```

## faq.ts

```ts
export const faq = [
  {
    question: 'Berapa target hafalan siswa?',
    answer: 'Program menargetkan hafalan 3–6 juz selama enam tahun.',
  },
  {
    question: 'Apakah menerima siswa pindahan?',
    answer: 'Ya. PPDB menerima peserta didik baru dan siswa pindahan.',
  },
];
```

## TODO Fields

Jangan menerka nilai untuk:

- `instagramUrl`
- `registrationUrl`
- usia minimal yang tepat untuk tahun ajaran final
- domain final jika terdapat beberapa domain berbeda pada brosur

Sebelum publish:

- semua TODO harus diselesaikan;
- semua link diuji;
- semua angka diverifikasi.
