import { Skill, Highlight, Badge, ContactLink, PersonalInfo } from '@/domain/entities/static-content';
import { SkillRepository, HighlightRepository, BadgeRepository, ContactRepository, PersonalInfoRepository } from '@/domain/interfaces/static-content';

export class InMemorySkillRepository implements SkillRepository {
  private skills: Skill[] = [
    { id: '1', name: 'React', category: 'frontend', proficiency: 'expert' },
    { id: '2', name: 'Angular', category: 'frontend', proficiency: 'advanced' },
    { id: '3', name: 'TypeScript', category: 'frontend', proficiency: 'expert' },
    { id: '4', name: 'GraphQL', category: 'frontend', proficiency: 'advanced' },
    { id: '5', name: 'Web Accessibility', category: 'frontend', proficiency: 'expert' },
    { id: '6', name: 'Design Systems', category: 'design', proficiency: 'expert' },
    { id: '7', name: 'Performance', category: 'frontend', proficiency: 'advanced' },
    { id: '8', name: 'Micro Frontends', category: 'frontend', proficiency: 'advanced' },
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
      title: 'Component Libraries',
      description: 'Built internal component libraries and design systems that are WCAG AA accessible'
    },
    {
      id: '2',
      icon: 'Zap',
      title: 'Performance Optimization',
      description: 'Optimized rendering and state management to improve performance and cut load times'
    },
    {
      id: '3',
      icon: 'Palette',
      title: 'Design Systems',
      description: 'Created scalable design systems with theming, dark mode, and consistent patterns'
    },
    {
      id: '4',
      icon: 'Shield',
      title: 'Real-time Features',
      description: 'Implemented real-time UI features with WebSockets and Kafka streams'
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
    { id: '1', text: 'Design Systems', category: 'ui' },
    { id: '2', text: 'Accessibility (WCAG AA)', category: 'ui' },
    { id: '3', text: 'Responsive Theming', category: 'ui' },
    { id: '4', text: 'Dark Mode Support', category: 'ui' },
    { id: '5', text: 'Micro Frontends', category: 'architecture' },
    { id: '6', text: 'Storybook / Component Docs', category: 'tools' },
    { id: '7', text: 'TypeScript', category: 'language' },
    { id: '8', text: 'Performance Tuning', category: 'optimization' },
    { id: '9', text: 'State Management', category: 'architecture' },
    { id: '10', text: 'Real-time Updates', category: 'features' },
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
  private personalInfo: PersonalInfo = {
    name: 'Alex Rodriguez',
    title: 'Frontend-focused Software Engineer',
    bio: '6+ years building accessible, high-performance UI systems in React, Angular, and modern web stacks.',
    location: 'San Francisco, CA',
    contact: [
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
    ]
  };

  async get(): Promise<PersonalInfo> {
    return { ...this.personalInfo };
  }
}
