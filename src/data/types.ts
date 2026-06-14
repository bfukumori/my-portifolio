export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  about: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  architecture: string;
  description: string;
  metrics: string[];
  link?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
}
