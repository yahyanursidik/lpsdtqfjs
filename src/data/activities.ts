export interface ActivityItem {
  title: string;
  category: 'Sunnah' | 'Olahraga' | 'Edukasi' | 'Kemandirian';
  description: string;
}

export const activities: readonly ActivityItem[] = [
  {
    title: 'Berkuda',
    category: 'Sunnah',
    description: 'Melatih keberanian, postur tubuh, keseimbangan motorik, dan kepekaan santri terhadap makhluk ciptaan Allah.',
  },
  {
    title: 'Memanah',
    category: 'Sunnah',
    description: 'Menumbuhkan fokus, ketenangan jiwa, disiplin pernapasan, serta konsentrasi target yang tajam.',
  },
  {
    title: 'Renang',
    category: 'Olahraga',
    description: 'Membangun kebugaran fisik, stamina kardiovaskular, dan ketahanan tubuh di lingkungan air yang aman.',
  },
  {
    title: 'Sepak Bola & Futsal',
    category: 'Olahraga',
    description: 'Mengasah kerja sama tim (ta\'awun), sportivitas, komunikasi antarteman, dan kelincahan gerak.',
  },
  {
    title: 'Bulu Tangkis & Basket',
    category: 'Olahraga',
    description: 'Aktivitas fisik dinamis untuk melatih koordinasi mata, tangan, dan refleks motorik anak.',
  },
  {
    title: 'Outing Class & Rihlah Alam',
    category: 'Edukasi',
    description: 'Tadabbur alam di kawasan asri Lembang dan sekitarnya guna memperkaya wawasan saintifik dan keimanan.',
  },
  {
    title: 'Company / Islamic Center Visiting',
    category: 'Edukasi',
    description: 'Kunjungan edukatif ke institusi dan tempat usaha untuk mengenalkan ragam profesi serta muamalah islami.',
  },
  {
    title: 'Pekan Kreativitas & Majalah Dinding',
    category: 'Kemandirian',
    description: 'Wadah bagi santri untuk menampilkan karya tulis, kaligrafi, prakarya, dan adab presentasi di hadapan umum.',
  },
] as const;
