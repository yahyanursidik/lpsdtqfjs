export interface SchoolData {
  name: string;
  shortName: string;
  tagline: string;
  subtagline: string;
  contact: {
    whatsapp: string;
    whatsappDisplay: string;
    email: string;
    instagramUrl: string;
    registrationUrl: string;
    website: string;
  };
  address: {
    line1: string;
    village: string;
    district: string;
    region: string;
    province: string;
    postalCode?: string;
    mapsUrl?: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  isCta?: boolean;
}

export interface AdmissionWave {
  name: string;
  note: string | null;
  dates: readonly [string, string][];
}

export interface CurriculumGroup {
  title: string;
  description?: string;
  items: readonly string[];
}

export interface ProgramHighlight {
  title: string;
  description: string;
}

export interface FeeItem {
  label: string;
  amount: number;
  note?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
