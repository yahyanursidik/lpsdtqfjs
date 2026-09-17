export interface FacilityItem {
  title: string;
  detail: string;
  note?: string;
}

export const facilities: readonly FacilityItem[] = [
  {
    title: 'Perpustakaan Islami & Umum',
    detail: 'Menyediakan lebih dari 100 judul buku referensi kisah para nabi, sahabat, ensiklopedia anak, dan majalah edukasi.',
  },
  {
    title: 'Ruang Kelas Tahfidz & Akademik Nyaman',
    detail: 'Ruang belajar berhawa sejuk khas Lembang dengan pencahayaan alami dan sirkulasi udara bersih yang mendukung konsentrasi hafalan.',
  },
  {
    title: 'Creativity Area & Mading Karya Murid',
    detail: 'Area khusus untuk menumbuhkan minat literasi, publikasi kaligrafi, dan hasil karya seni anak secara berkala.',
  },
  {
    title: 'Lapangan Olahraga & Aktivitas Terbuka',
    detail: 'Fasilitas lapangan untuk senam pagi, latihan futsal, bulu tangkis, dan latihan memanah terbimbing.',
  },
  {
    title: 'Area Bermain Ramah Anak',
    detail: 'Ruang bermain outdoor yang aman untuk relaksasi motorik siswa di sela-sela istirahat pembelajaran.',
  },
  {
    title: 'Masjid untuk Shalat Berjamaah',
    detail: 'Sarana ibadah representatif untuk pembiasaan adab masjid, shalat dhuha, shalat fardhu berjamaah, dan dzikir bersama.',
  },
] as const;
