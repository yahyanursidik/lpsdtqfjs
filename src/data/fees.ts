export interface FeeItem {
  label: string;
  amount: number;
  note?: string;
}

export const fees = {
  registration: {
    amount: 300000,
    label: 'Biaya Formulir Pendaftaran',
    promo: 'Diskon 50% untuk 10 pendaftar pertama',
    note: 'Mencakup berkas administrasi dan sesi observasi calon murid.',
  },
  buildingAndDevelopment: {
    amount: 5900000,
    label: 'Sewa Gedung & Pengembangan Sarana',
    period: 'Berlaku untuk 6 Tahun Pendidikan',
    installmentNote: 'Dapat dicicil secara fleksibel selama 1 tahun pertama',
  },
  reRegistration: {
    total: 2500000,
    label: 'Paket Daftar Ulang Awal',
    note: 'Dibayarkan setelah dinyatakan diterima pada sesi seleksi',
    breakdown: [
      { label: 'Cicilan Wajib Pembangunan & Sewa Awal', amount: 1200000, note: 'Bagian dari dana pengembangan' },
      { label: 'Seragam Sekolah Lengkap (Ikhwan/Dasar)', amount: 600000, note: 'Paket seragam utama' },
      { label: 'SPP Bulan Pertama (Juli)', amount: 350000, note: 'Iuran bulanan reguler' },
      { label: 'Paket Modul & Buku Pembelajaran', amount: 350000, note: 'Materi belajar tahun pertama' },
    ],
    addon: {
      label: 'Tambahan Kelengkapan Seragam Akhwat',
      amount: 70000,
      note: 'Tambahan jilbab/kelengkapan syar\'i murid putri',
    },
  },
} as const;

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
