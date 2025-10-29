import { Skill, Highlight, Badge, ContactLink, PersonalInfo } from '@/domain/entities/static-content';
import { SkillRepository, HighlightRepository, BadgeRepository, ContactRepository, PersonalInfoRepository } from '@/domain/interfaces/static-content';
import { config } from '@/infrastructure/config/configuration';

export class InMemorySkillRepository implements SkillRepository {
  private skills: Skill[] = [
    // Web Technologies
    { id: '1', name: 'React', category: 'frontend', proficiency: 'expert' },
    { id: '2', name: 'Angular', category: 'frontend', proficiency: 'expert' },
    { id: '3', name: 'Node.js', category: 'backend', proficiency: 'expert' },
    { id: '4', name: 'NestJS', category: 'backend', proficiency: 'advanced' },
    { id: '5', name: 'Express.js', category: 'backend', proficiency: 'advanced' },
    { id: '6', name: 'Redux', category: 'frontend', proficiency: 'advanced' },
    { id: '7', name: 'GraphQL', category: 'frontend', proficiency: 'advanced' },
    { id: '8', name: 'Spring Boot', category: 'backend', proficiency: 'intermediate' },
    { id: '9', name: 'NgRx', category: 'frontend', proficiency: 'advanced' },
    { id: '10', name: 'Formly', category: 'frontend', proficiency: 'advanced' },
    
    // Programming Languages
    { id: '11', name: 'JavaScript', category: 'frontend', proficiency: 'expert' },
    { id: '12', name: 'TypeScript', category: 'frontend', proficiency: 'expert' },
    { id: '13', name: 'Java', category: 'backend', proficiency: 'advanced' },
    { id: '14', name: 'Python', category: 'backend', proficiency: 'intermediate' },
    { id: '15', name: 'Kotlin', category: 'backend', proficiency: 'intermediate' },
    { id: '16', name: 'HTML/CSS', category: 'frontend', proficiency: 'expert' },
    { id: '17', name: 'SCSS', category: 'frontend', proficiency: 'advanced' },
    
    // Tools and Databases
    { id: '18', name: 'Git', category: 'tools', proficiency: 'expert' },
    { id: '19', name: 'Docker', category: 'tools', proficiency: 'advanced' },
    { id: '20', name: 'Kubernetes', category: 'tools', proficiency: 'intermediate' },
    { id: '21', name: 'MySQL', category: 'tools', proficiency: 'advanced' },
    { id: '22', name: 'MongoDB', category: 'tools', proficiency: 'advanced' },
    { id: '23', name: 'PostgreSQL', category: 'tools', proficiency: 'intermediate' },
    { id: '24', name: 'Kafka', category: 'tools', proficiency: 'intermediate' },
    { id: '25', name: 'Jest', category: 'tools', proficiency: 'advanced' },
    { id: '26', name: 'Cypress', category: 'tools', proficiency: 'advanced' },
  ];

  async findAll(): Promise<Skill[]> {
    return [...this.skills];
  }

  async findByCategory(category: string): Promise<Skill[]> {
    return this.skills.filter(skill => skill.category === category);
  }
}

export class InMemoryHighlightRepository implements HighlightRepository {
  private highlights: Highlight[] = [
    {
      id: '1',
      icon: 'Code2',
      title: 'WCAG-Compliant Applications',
      description: 'Developed and launched WCAG-compliant real-time collaboration tools in Angular across three products'
    },
    {
      id: '2',
      icon: 'Zap',
      title: 'Performance Optimization',
      description: 'Reduced client-side complexity by 40% and improved load times by 70% through strategic optimizations'
    },
    {
      id: '3',
      icon: 'Palette',
      title: 'Real-time Collaboration',
      description: 'Built real-time Threads/Notes collaboration tool powered by WebSockets with Spring Boot + Kotlin'
    },
    {
      id: '4',
      icon: 'Shield',
      title: 'Microservices Architecture',
      description: 'Designed Producer and Client Onboarding microservices with RESTful APIs and automated workflows'
    }
  ];

  async findAll(): Promise<Highlight[]> {
    return [...this.highlights];
  }

  async findById(id: string): Promise<Highlight | null> {
    return this.highlights.find(highlight => highlight.id === id) || null;
  }
}

export class InMemoryBadgeRepository implements BadgeRepository {
  private badges: Badge[] = [
    { id: '1', text: 'React', category: 'frontend' },
    { id: '2', text: 'Angular', category: 'frontend' },
    { id: '3', text: 'Node.js', category: 'backend' },
    { id: '4', text: 'TypeScript', category: 'language' },
    { id: '5', text: 'NestJS', category: 'backend' },
    { id: '6', text: 'GraphQL', category: 'api' },
    { id: '7', text: 'NgRx', category: 'state' },
    { id: '8', text: 'WebSockets', category: 'realtime' },
    { id: '9', text: 'Spring Boot', category: 'backend' },
    { id: '10', text: 'Kafka', category: 'messaging' },
    { id: '11', text: 'Docker', category: 'devops' },
    { id: '12', text: 'MongoDB', category: 'database' },
    { id: '13', text: 'Jest', category: 'testing' },
    { id: '14', text: 'Cypress', category: 'testing' },
    { id: '15', text: 'WCAG Compliance', category: 'accessibility' },
  ];

  async findAll(): Promise<Badge[]> {
    return [...this.badges];
  }

  async findByCategory(category: string): Promise<Badge[]> {
    return this.badges.filter(badge => badge.category === category);
  }
}

export class InMemoryContactRepository implements ContactRepository {
  private contacts: ContactLink[] = [
    {
      id: '1',
      type: 'email',
      url: 'mailto:alex@example.com',
      label: 'Email',
      icon: 'Mail'
    },
    {
      id: '2',
      type: 'linkedin',
      url: 'https://linkedin.com',
      label: 'LinkedIn',
      icon: 'Linkedin'
    },
    {
      id: '3',
      type: 'github',
      url: 'https://github.com',
      label: 'GitHub',
      icon: 'Github'
    }
  ];

  async findAll(): Promise<ContactLink[]> {
    return [...this.contacts];
  }

  async findByType(type: string): Promise<ContactLink | null> {
    return this.contacts.find(contact => contact.type === type) || null;
  }
}

export class InMemoryPersonalInfoRepository implements PersonalInfoRepository {
  async get(): Promise<PersonalInfo> {
    const personalInfo = config.getPersonalInfo();
    const contactInfo = config.getContactInfo();
    
    return {
      name: personalInfo.name,
      title: personalInfo.title,
      bio: personalInfo.bio,
      location: personalInfo.location,
      contact: [
        {
          id: '1',
          type: 'email',
          url: `mailto:${contactInfo.email}`,
          label: 'Email',
          icon: 'Mail'
        },
        {
          id: '2',
          type: 'linkedin',
          url: contactInfo.linkedin,
          label: 'LinkedIn',
          icon: 'Linkedin'
        },
        {
          id: '3',
          type: 'github',
          url: contactInfo.github,
          label: 'GitHub',
          icon: 'Github'
        }
      ]
    };
  }
}
