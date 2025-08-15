export type ExperienceItem = {
  company: string;
  period: string;
  role: string;
  description: string[];
};

export type ExperienceData = {
  career: ExperienceItem[];
  education: ExperienceItem[];
};
