export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
}

export const educations: Education[] = [
  {
    institution: "Mercu Buana University",
    degree: "Bachelor of Science",
    field: "Informatics Engineering",
    period: "Feb 2018 – Jan 2020",
    location: "West Jakarta",
  },
  {
    institution: "Del Institute of Technology",
    degree: "Associate Degree",
    field: "Informatics Engineering",
    period: "Aug 2014 – Sept 2017",
    location: "Laguboti, North Sumatera",
  },
];
