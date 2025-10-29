import { Experience, ExperienceRepository } from '@/domain/entities';

export class InMemoryExperienceRepository implements ExperienceRepository {
  private experiences: Experience[] = [
    {
      id: '1',
      company: 'TechCorp Solutions',
      position: 'Senior Frontend Engineer',
      duration: '2021 - Present',
      description: 'Leading frontend development for enterprise-scale applications',
      achievements: [
        'Architected micro-frontend system serving 10K+ daily users',
        'Reduced bundle size by 40% through code splitting optimization',
        'Implemented comprehensive design system used across 15+ products'
      ],
      tech: ['React', 'TypeScript', 'GraphQL', 'WebSockets', 'Micro Frontends']
    },
    {
      id: '2',
      company: 'Digital Innovations Inc',
      position: 'Frontend Developer',
      duration: '2019 - 2021',
      description: 'Developed customer-facing applications and internal tools',
      achievements: [
        'Migrated legacy jQuery application to modern Angular',
        'Improved page load times by 60% through performance optimization',
        'Built responsive admin dashboards with complex data visualization'
      ],
      tech: ['Angular', 'RxJS', 'NgRx', 'D3.js', 'Material UI']
    },
    {
      id: '3',
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      duration: '2018 - 2019',
      description: 'Built end-to-end web applications from scratch',
      achievements: [
        'Developed e-commerce platform with payment integration',
        'Implemented real-time collaboration features',
        'Achieved 95+ Lighthouse scores for performance'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'WebSockets']
    }
  ];

  async findAll(): Promise<Experience[]> {
    return [...this.experiences];
  }

  async findById(id: string): Promise<Experience | null> {
    return this.experiences.find(exp => exp.id === id) || null;
  }
}
