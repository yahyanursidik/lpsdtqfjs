import type { NavItem } from '../types/content';

export const mainNavItems: NavItem[] = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Program Al-Qur\'an', href: '#tahfidz' },
  { label: 'Kurikulum', href: '#kurikulum' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'SPMB', href: '#spmb' },
  { label: 'Biaya', href: '#biaya' },
  { label: 'FAQ', href: '#faq' },
];

export const quickFacts = [
  { label: 'Target Tahfidz', value: '3–6 Juz', desc: 'Selama 6 tahun pendidikan' },
  { label: 'Kurikulum Tiga Pilar', value: "Al-Qur'an, Diniyah & Umum", desc: 'Terintegrasi dan seimbang' },
  { label: 'Rasio Halaqah', value: '1 : 7 Siswa', desc: 'Pendampingan eksklusif & fokus' },
  { label: 'Penerimaan', value: 'Baru & Pindahan', desc: 'Terbuka untuk calon santri' },
] as const;
