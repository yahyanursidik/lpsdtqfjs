export const school = {
  name: 'SDTQ Fajar Sunnah',
  shortName: 'Fajar Sunnah',
  fullName: "Sekolah Dasar Tahfidzul Qur'an Fajar Sunnah",
  academicYear: '2027/2028',
  tagline: 'Penghafal Al Quran Meraih Masa Depan',
  subtagline: "Sekolah dasar Islam di Lembang yang mengintegrasikan pembelajaran Al-Qur'an, pendidikan keagamaan, kurikulum umum, serta pengembangan minat dan bakat anak.",

  contact: {
    whatsapp: '6285171051514',
    whatsappDisplay: '+62 851-7105-1514',
    email: 'ppdb@fajarsunnah.id',
    instagramUrl: '', // Kosongkan bila belum terverifikasi, sesuai DATA_MODEL.md
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSftrtAThJ_wM3BAVaWqgljldbhi14nd4xewQ47svSvD5Ht5yg/viewform?usp=sharing&ouid=112138208132391960503',
    website: 'https://fajarsunnah.id',
  },

  address: {
    line1: 'BTN Pusdikajen Jl. Wira No. A13',
    village: 'Kayuambon',
    district: 'Lembang',
    region: 'Kabupaten Bandung Barat',
    province: 'Jawa Barat',
    mapsUrl: 'https://maps.google.com/?q=BTN+Pusdikajen+Jl.+Wira+No.+A13+Kayuambon+Lembang',
  },
} as const;

// Helper untuk URL WhatsApp dengan pesan spesifik
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMessage = `Bismillah, halo Admin SPMB SDTQ Fajar Sunnah. Saya ingin menanyakan informasi pendaftaran murid baru untuk tahun ajaran ${school.academicYear}.`;
  const text = encodeURIComponent(customMessage || defaultMessage);
  return `https://wa.me/${school.contact.whatsapp}?text=${text}`;
}

export function getRegistrationUrl(): string {
  if (school.contact.registrationUrl) {
    return school.contact.registrationUrl;
  }
  // Fallback aman ke WhatsApp pendaftaran resmi jika tautan form online belum diverifikasi
  const msg = `Bismillah, halo Admin SPMB SDTQ Fajar Sunnah. Saya ingin mendaftar SPMB ${school.academicYear} untuk calon murid baru. Mohon bantuan formulir pendaftarannya.`;
  return getWhatsAppUrl(msg);
}
