import type { Localized } from "@/lib/i18n";

export interface Education {
  institution: string;
  degree: Localized<string>;
  field: Localized<string>;
  period: string;
  location: string;
}

export const educations: Education[] = [
  {
    institution: "Mercu Buana University",
    degree: { en: "Bachelor of Science", id: "Sarjana Sains" },
    field: { en: "Informatics Engineering", id: "Teknik Informatika" },
    period: "Feb 2018 – Jan 2020",
    location: "West Jakarta",
  },
  {
    institution: "Del Institute of Technology",
    degree: { en: "Associate Degree", id: "Ahli Madya (D3)" },
    field: { en: "Informatics Engineering", id: "Teknik Informatika" },
    period: "Aug 2014 – Sept 2017",
    location: "Laguboti, North Sumatera",
  },
];
