export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  tech: string;
  period: string;
  description: string[];
  link?: string;
  image?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string; // 'Analytics', 'Databases', 'Languages', 'Libraries'
  level: number; // 1-100
  perkDetail: string;
}

export enum Section {
  HERO = 'HERO',
  EXPERIENCE = 'GENESIS',
  SKILLS = 'ARSENAL',
  PROJECTS = 'GHOST',
  CONTACT = 'CONTACT'
}