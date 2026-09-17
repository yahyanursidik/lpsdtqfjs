import type { CurriculumGroup, ProgramHighlight } from '../types/content';

export const curricula: readonly CurriculumGroup[] = [
  {
    title: "Kurikulum Al-Qur'an",
    description: "Fokus utama pembentukan hafalan dan bacaan Al-Qur'an yang tartil dan mutqin.",
    items: [
      'Tahfidz Al-Qur\'an (Target 3–6 Juz)',
      'Tahsin & Makharijul Huruf',
      'Kaidah Tajwid Dasar',
      'Muroja\'ah Terbimbing',
    ],
  },
  {
    title: 'Kurikulum Keagamaan (Diniyah)',
    description: 'Penanaman aqidah shahihah, adab islami, dan bekal ibadah harian.',
    items: [
      'Aqidah Ahlussunnah',
      'Akhlak & Adab Islami',
      'Fiqih Ibadah Praktis',
      'Sejarah Rasulullah & Para Sahabat',
      'Bahasa Arab Dasar',
      'Hadits-Hadits Pilihan',
      'Doa & Dzikir Harian',
    ],
  },
  {
    title: 'Kurikulum Umum',
    description: 'Penguatan akademik dasar sesuai standar kurikulum pendidikan nasional.',
    items: [
      'Matematika',
      'Ilmu Pengetahuan Alam (IPA)',
      'Bahasa Indonesia',
      'Bahasa Inggris',
      'SBDP (Seni Budaya & Prakarya)',
      'Pendidikan Jasmani & Kesehatan (PJOK)',
    ],
  },
] as const;

export const highlights: readonly ProgramHighlight[] = [
  {
    title: 'Kelas Tahfidz Eksklusif (1 : 7)',
    description: 'Setiap kelompok halaqah tahfidz dibimbing oleh 1 guru pengampu untuk maksimal 7 siswa, memastikan setoran dan muroja\'ah terpantau intensif.',
  },
  {
    title: 'Pendekatan Personalized Learning',
    description: 'Kecepatan menghafal dan gaya belajar disesuaikan dengan kemampuan unik setiap anak tanpa memaksakan standar seragam yang kaku.',
  },
  {
    title: 'Porsi Keagamaan Lebih Dominan',
    description: 'Menjadikan Al-Qur\'an dan nilai-nilai diniyah sebagai ruh keseharian, diselaraskan secara proporsional dengan kurikulum pemerintah.',
  },
  {
    title: 'Ijazah Resmi Ganda',
    description: 'Lulusan memperoleh ijazah resmi negara (pendidikan formal) dan ijazah sekolah / syahadah tahfidz.',
  },
  {
    title: 'Pantauan Capaian Realtime',
    description: 'Progres setoran hafalan, kedisiplinan, dan nilai akademik dapat dipantau langsung oleh orang tua secara berkala dan transparan.',
  },
  {
    title: 'Pengembangan Minat & Bakat',
    description: 'Dukungan aktivitas fisik sunnah dan ekstrakurikuler terarah untuk melatih ketangkasan, kepemimpinan, dan kemandirian anak.',
  },
] as const;

export const graduateProfiles: readonly string[] = [
  'Berakhlakul karimah dan berkarakter islami dalam pergaulan sehari-hari.',
  'Berbakti kepada kedua orang tua (birrul walidain) dan santun kepada guru.',
  'Memiliki hafalan Al-Qur\'an 3–6 juz dengan kualitas bacaan yang baik.',
  'Menguasai kaidah dasar tajwid dan kelancaran makharijul huruf.',
  'Menghafal hadits-hadits pilihan serta doa-doa harian sunnah.',
  'Mengenal matan dasar keilmuan Islam sesuai jenjang sekolah dasar.',
  'Memiliki kecakapan hidup (soft skills) serta kebugaran fisik yang tangguh.',
  'Menyelesaikan kurikulum nasional dan kurikulum keagamaan secara tuntas.',
] as const;
