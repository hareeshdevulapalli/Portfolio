import { Project, ProjectRepository } from '@/domain/entities';
import { ProjectCategory } from '@/domain/constants';

// Infrastructure implementations
export class InMemoryProjectRepository implements ProjectRepository {
  private projects: Project[] = [
    {
      id: '1',
      title: 'Enterprise Dashboard Platform',
      description: 'Real-time analytics dashboard with micro-frontend architecture serving 10K+ daily users',
      tech: ['React', 'GraphQL', 'WebSockets', 'Micro Frontends'],
      highlights: [
        'Built modular micro-frontend system with Module Federation',
        'Implemented real-time data streaming with GraphQL subscriptions',
        'Achieved WCAG AA accessibility compliance across all components'
      ],
      details: [
        'Led the frontend architecture for a mission-critical analytics platform handling millions of data points daily. Designed a scalable micro-frontend system that allows independent team deployments without breaking the main app.',
        'Implemented sophisticated state management with real-time GraphQL subscriptions, reducing data staleness and improving user experience. Optimized rendering performance with virtualization and memoization techniques.',
        'Ensured full accessibility compliance including screen reader support, keyboard navigation, and proper ARIA labels. All components tested with automated and manual accessibility audits.'
      ],
      createdAt: new Date('2023-01-15'),
      updatedAt: new Date('2023-06-20')
    },
    {
      id: '2',
      title: 'Design System & Component Library',
      description: 'Comprehensive UI component library used across 15+ products',
      tech: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS'],
      highlights: [
        'Created 80+ production-ready components with full TypeScript support',
        'Documented components in Storybook with interactive examples',
        'Reduced development time by 40% through reusable patterns'
      ],
      details: [
        'Built a production-grade design system from the ground up, establishing consistent design patterns and component APIs used by multiple product teams.',
        'Every component is fully typed with TypeScript, includes comprehensive unit tests, and is documented in Storybook with interactive controls and usage examples.',
        'Implemented theming system supporting light/dark modes and custom brand themes. Achieved 100% adoption across engineering teams with detailed migration guides and workshops.'
      ],
      createdAt: new Date('2022-08-10'),
      updatedAt: new Date('2023-03-15')
    },
    {
      id: '3',
      title: 'Customer Portal Redesign',
      description: 'Complete rebuild of customer-facing portal with Angular',
      tech: ['Angular', 'RxJS', 'NgRx', 'REST APIs'],
      highlights: [
        'Migrated legacy jQuery application to modern Angular',
        'Improved page load times by 60% through code splitting',
        'Implemented reactive forms with complex validation logic'
      ],
      details: [
        'Led the frontend modernization effort to replace a legacy jQuery codebase with a modern Angular application. Planned and executed a phased migration strategy that minimized disruption to users.',
        'Leveraged RxJS operators for complex data flows and NgRx for predictable state management. Implemented smart lazy loading strategies that dramatically improved initial load times.',
        'Built sophisticated form validation system handling complex business rules. Achieved 95+ Lighthouse scores for performance and accessibility.'
      ],
      createdAt: new Date('2022-03-01'),
      updatedAt: new Date('2022-12-10')
    },
    {
      id: '4',
      title: 'E-commerce Platform',
      description: 'High-performance shopping experience with advanced filtering and search',
      tech: ['React', 'Next.js', 'Elasticsearch', 'Stripe'],
      highlights: [
        'Built product catalog with instant search and faceted filtering',
        'Integrated Stripe for secure payment processing',
        'Optimized images and assets for sub-2s page loads'
      ],
      details: [
        'Developed a blazing-fast e-commerce frontend with server-side rendering for optimal SEO and performance. Implemented advanced product search with Elasticsearch integration.',
        'Created smooth checkout flow with Stripe integration, handling complex tax calculations and multiple payment methods. Reduced cart abandonment by 25% through UX improvements.',
        'Achieved exceptional Core Web Vitals scores through image optimization, code splitting, and performance budgets. All product pages load in under 2 seconds on 3G connections.'
      ],
      createdAt: new Date('2021-11-20'),
      updatedAt: new Date('2022-08-30')
    },
    {
      id: '5',
      title: 'Internal Admin Tools',
      description: 'Suite of admin interfaces for operations and support teams',
      tech: ['React', 'TypeScript', 'React Query', 'Material UI'],
      highlights: [
        'Built data-heavy interfaces with complex filtering and bulk actions',
        'Implemented optimistic UI updates for better perceived performance',
        'Created custom data visualization components'
      ],
      details: [
        'Designed and built admin dashboards used daily by operations teams to manage thousands of customer accounts and support tickets.',
        'Implemented sophisticated data tables with sorting, filtering, pagination, and bulk operations. Used React Query for efficient data fetching and caching.',
        'Created custom chart components for data visualization using D3.js. All interfaces are fully responsive and work seamlessly on tablets.'
      ],
      createdAt: new Date('2021-06-15'),
      updatedAt: new Date('2022-02-28')
    },
    {
      id: '6',
      title: 'Real-time Collaboration Tool',
      description: 'Collaborative workspace with live updates and presence indicators',
      tech: ['React', 'WebSockets', 'Kafka', 'Redis'],
      highlights: [
        'Built real-time collaboration features with WebSocket connections',
        'Implemented conflict resolution for concurrent edits',
        'Added presence indicators and user activity tracking'
      ],
      details: [
        'Created a real-time collaborative workspace where multiple users can edit documents simultaneously. Implemented WebSocket connections with automatic reconnection and state synchronization.',
        'Solved complex challenges around conflict resolution when multiple users edit the same content. Built operational transformation logic to merge concurrent changes.',
        'Added visual presence indicators showing who\'s online and where users are working. Implemented activity tracking and notifications for team awareness.'
      ],
      createdAt: new Date('2020-09-10'),
      updatedAt: new Date('2021-05-20')
    }
  ];

  async findAll(): Promise<Project[]> {
    return [...this.projects];
  }

  async findById(id: string): Promise<Project | null> {
    return this.projects.find(project => project.id === id) || null;
  }

  async findByCategory(category: string): Promise<Project[]> {
    // For now, return all projects since we don't have category in the data
    // In a real app, you'd filter by category
    return this.projects;
  }
}
