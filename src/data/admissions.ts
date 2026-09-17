import type { AdmissionWave } from '../types/content';

export const admissionWaves: readonly AdmissionWave[] = [
  {
    name: 'Gelombang 1',
    note: null,
    dates: [
      ['Pendaftaran', '17 September – 31 Desember 2026'],
      ['Seleksi Pemetaan', '4 Januari 2027'],
      ['Pengumuman Hasil', '6 Januari 2027'],
      ['Daftar Ulang', '6 – 31 Januari 2027'],
    ],
  },
  {
    name: 'Gelombang 2',
    note: 'Dibuka jika kuota murid baru belum terpenuhi',
    dates: [
      ['Pendaftaran', '26 Januari – 20 Maret 2027'],
      ['Seleksi & Wawancara', '22 Maret 2027'],
      ['Pengumuman Hasil', '30 Maret 2027'],
      ['Daftar Ulang', '30 Maret – 10 April 2027'],
    ],
  },
] as const;

export const admissionRequirements: readonly string[] = [
  'Usia minimal 6 tahun pada awal tahun ajaran baru (atau telah memiliki kesiapan belajar tingkat SD).',
  'Mengisi formulir pendaftaran SPMB SDTQ Fajar Sunnah.',
  'Mengisi lembar surat pernyataan kesediaan tata tertib orang tua / wali santri.',
  'Fotokopi Akta Kelahiran calon santri (2 lembar).',
  'Fotokopi Kartu Keluarga (KK) resmi (2 lembar).',
  'Fotokopi KTP ayah dan ibu / wali (masing-masing 2 lembar).',
  'Pas foto berwarna ukuran 3×4 cm (4 lembar).',
  'Surat keterangan lulus / ijazah TK (untuk murid baru kelas 1) atau rapor sekolah asal & surat pindah (untuk santri pindahan).',
] as const;
