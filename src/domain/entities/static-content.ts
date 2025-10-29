// Domain entities for static content
export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Highlight {
  id: string;
  icon: string; // Icon component name
  title: string;
  description: string;
}

export interface Badge {
  id: string;
  text: string;
  category: string;
}

export interface ContactLink {
  id: string;
  type: 'email' | 'linkedin' | 'github';
  url: string;
  label: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  contact: ContactLink[];
}
