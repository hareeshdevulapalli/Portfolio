import { Experience, ExperienceRepository } from '@/domain/entities';

export class InMemoryExperienceRepository implements ExperienceRepository {
  private experiences: Experience[] = [
    {
      id: '1',
      company: 'Group 1001',
      position: 'Software Engineer II',
      duration: 'March 2024 - Present',
      description: 'Developing and launching WCAG-compliant real-time collaboration tools in Angular across three products, translating Figma designs into responsive, accessible interfaces.',
      achievements: [
        'Developed and launched WCAG-compliant real-time collaboration tools in Angular across three products',
        'Published 2 internal React applications for Zendesk, reducing client-side complexity by 40%',
        'Developed Doc-AI feedback service integrated with Apryse Web Viewer, improving processing efficiency by 25%',
        'Launched real-time Threads/Notes collaboration tool powered by WebSockets with Spring Boot + Kotlin',
        'Reworked case creation logic using Kafka-driven processing to eliminate rate-limit delays'
      ],
      tech: ['Angular', 'React', 'NestJS', 'Spring Boot', 'Kotlin', 'WebSockets', 'Kafka', 'GraphQL']
    },
    {
      id: '2',
      company: 'Group 1001',
      position: 'Software Engineer I - Frontend',
      duration: 'December 2022 - March 2024',
      description: 'Refactored component structures across 2 products during migration to latest Angular Material UI, customizing themes for brand consistency.',
      achievements: [
        'Refactored component structures across 2 products during migration to latest Angular Material UI',
        'Published reusable common components as Angular packages, reducing duplicate development effort',
        'Leveraged GraphQL to strategically reduce component-level calls, improving API response times by 10%',
        'Instituted Storybook as standard for isolated UI component development, shrinking codebase by 7%',
        'Designed configuration-driven Angular Formly architecture, cutting form submission errors by 30%'
      ],
      tech: ['Angular', 'Angular Material', 'GraphQL', 'Storybook', 'Formly', 'NgRx', 'RxJS']
    },
    {
      id: '3',
      company: 'Group 1001',
      position: 'Software Engineer Intern',
      duration: 'May 2022 - December 2022',
      description: 'Built and maintained Cypress end-to-end test suites to validate FlowRight-driven onboarding and policy creation workflows.',
      achievements: [
        'Built and maintained Cypress end-to-end test suites, reducing manual QA effort by 40%',
        'Removed unused legacy frontend code in large-scale monorepo architecture',
        'Ensured 90%+ code coverage in critical application modules by applying TDD',
        'Resolved critical production bugs while improving maintainability'
      ],
      tech: ['Cypress', 'Angular', 'JavaScript', 'TDD', 'Testing']
    },
    {
      id: '4',
      company: 'Purdue University Northwest',
      position: 'Frontend Developer',
      duration: 'January 2022 - May 2022',
      description: 'Provided interactive dashboards using React, Node.js, and MongoDB to track robot tasks progress in real-time.',
      achievements: [
        'Provided interactive dashboards using React, Node.js, and MongoDB for real-time robot task tracking',
        'Enhanced monitoring efficiency by 40% through streamlined job assignment and tracking',
        'Refined legacy code and streamlined processes following clean architecture principles'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Real-time Tracking']
    },
    {
      id: '5',
      company: 'Berkadia - Berkshire Hathaway and Jefferies Financial Group',
      position: 'Associate Software Engineer',
      duration: 'October 2018 - August 2021',
      description: 'Designed and developed interactive brochures using React, dynamically transforming user input into visually appealing, data-driven formats.',
      achievements: [
        'Designed and developed interactive brochure using React with dynamic user input transformation',
        'Reduced Google Maps JavaScript API calculations from 7 to 3 seconds using Web Workers',
        'Optimized rendering and improved load times by 70% using Redux and critical path rendering',
        'Developed highly customizable Google Maps page with custom markers and color-coded legends',
        'Implemented interactive information dialogs with drag and drop functionality',
        'Championed Hackathon twice with innovative solutions'
      ],
      tech: ['React', 'Redux', 'Google Maps API', 'Web Workers', 'Node.js', 'MongoDB', 'JavaScript']
    }
  ];

  async findAll(): Promise<Experience[]> {
    return [...this.experiences];
  }

  async findById(id: string): Promise<Experience | null> {
    return this.experiences.find(exp => exp.id === id) || null;
  }
}
