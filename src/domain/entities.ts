// Domain entities
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  details: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Domain value objects
export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  contact: ContactInfo;
}
