import { Project, ProjectRepository } from '@/domain/entities';
import { ProjectCategory } from '@/domain/constants';

// Infrastructure implementations
export class InMemoryProjectRepository implements ProjectRepository {
  private projects: Project[] = [
    {
      id: '1',
      title: 'Real-time Collaboration Tools',
      description: 'WCAG-compliant real-time collaboration tools in Angular across three products with WebSocket integration',
      tech: ['Angular', 'WebSockets', 'Spring Boot', 'Kotlin', 'WCAG Compliance'],
      highlights: [
        'Developed and launched WCAG-compliant real-time collaboration tools across three products',
        'Translated Figma designs into responsive, accessible interfaces',
        'Implemented state management and component architecture for seamless user experience',
        'Built real-time Threads/Notes collaboration tool with Spring Boot + Kotlin backend'
      ],
      details: [
        'Led the development of comprehensive real-time collaboration tools that enable teams to communicate asynchronously within applications. The system supports multiple collaboration modes including threaded discussions, real-time notes, and document annotations.',
        'Implemented WebSocket connections with automatic reconnection and state synchronization. Built conflict resolution mechanisms for concurrent edits and operational transformation logic to merge changes seamlessly.',
        'Ensured full WCAG AA accessibility compliance including screen reader support, keyboard navigation, and proper ARIA labels. All components tested with automated and manual accessibility audits.',
        'Designed scalable architecture supporting multiple concurrent users with presence indicators and activity tracking. Integrated with existing authentication systems and implemented proper security measures.'
      ],
      createdAt: new Date('2024-03-01'),
      updatedAt: new Date('2024-12-01')
    },
    {
      id: '2',
      title: 'Zendesk Integration Platform',
      description: 'Internal React applications for Zendesk with NestJS Backend-for-Frontend layer to aggregate and normalize data',
      tech: ['React', 'NestJS', 'Zendesk API', 'GraphQL', 'Microservices'],
      highlights: [
        'Published 2 internal React applications for Zendesk integration',
        'Built NestJS Backend-for-Frontend layer to aggregate data from multiple services',
        'Reduced client-side complexity by 40% through strategic data normalization',
        'Implemented automated validation workflows for partner-ready onboarding'
      ],
      details: [
        'Architected a comprehensive Zendesk integration platform that streamlines customer support operations. The system aggregates data from multiple internal services and presents it through a unified interface.',
        'Developed NestJS Backend-for-Frontend layer that handles data aggregation, authorization, and normalization. This approach significantly reduced client-side complexity and improved performance.',
        'Implemented automated validation workflows that enable partner-ready onboarding without downtime. The system handles complex business rules and ensures data integrity across all integrations.',
        'Built responsive React applications with real-time updates and comprehensive error handling. Integrated with existing authentication systems and implemented proper security measures.'
      ],
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-11-15')
    },
    {
      id: '3',
      title: 'Doc-AI Feedback Service',
      description: 'AI-powered document feedback service integrated with Apryse Web Viewer for enhanced document processing',
      tech: ['Apryse Web Viewer', 'Node.js', 'AI/ML', 'Document Processing', 'REST APIs'],
      highlights: [
        'Developed Doc-AI feedback service integrated with Apryse Web Viewer',
        'Leveraged backend APIs to split documents and store annotations',
        'Improved document processing efficiency by 25%',
        'Implemented intelligent document analysis and feedback mechanisms'
      ],
      details: [
        'Created an intelligent document processing system that combines AI capabilities with advanced document viewing technology. The service analyzes documents and provides contextual feedback to users.',
        'Implemented document splitting algorithms that break down complex documents into manageable sections. Built annotation storage system that preserves user feedback and enables collaborative document review.',
        'Integrated with Apryse Web Viewer to provide seamless document viewing experience. The system handles various document formats and provides real-time feedback on document content.',
        'Optimized processing algorithms to improve efficiency by 25%. Implemented caching mechanisms and intelligent processing queues to handle high-volume document processing.'
      ],
      createdAt: new Date('2024-02-01'),
      updatedAt: new Date('2024-10-30')
    },
    {
      id: '4',
      title: 'Interactive Google Maps Platform',
      description: 'Highly customizable Google Maps application with custom markers, legends, and interactive features',
      tech: ['React', 'Google Maps API', 'Web Workers', 'Redux', 'JavaScript'],
      highlights: [
        'Developed highly customizable Google Maps page with custom markers and color-coded legends',
        'Reduced API calculation time from 7 to 3 seconds using JavaScript Web Workers',
        'Improved load times by 70% through Redux optimization and critical path rendering',
        'Implemented interactive information dialogs with drag and drop functionality'
      ],
      details: [
        'Built a comprehensive mapping platform that provides users with powerful visualization tools for geographic data. The system supports custom markers, color-coded legends, and tailored styling for different data types.',
        'Optimized performance by implementing JavaScript Web Workers for complex calculations. This approach moved heavy computational tasks off the main thread, improving user experience and reducing API response times.',
        'Implemented Redux for efficient state management and critical path rendering techniques. The system prioritizes essential content rendering and streams additional data as needed.',
        'Created interactive information dialogs that users can drag and drop for better visibility. The system maintains dialog positions and provides intuitive controls for managing multiple information windows.'
      ],
      createdAt: new Date('2019-06-01'),
      updatedAt: new Date('2021-08-30')
    },
    {
      id: '5',
      title: 'Two-Level Adaptive Branch Prediction',
      description: 'CPU-level branch prediction model using two-level adaptive predictor for speculative execution optimization',
      tech: ['C', 'Computer Architecture', 'Performance Optimization', 'Simulation'],
      highlights: [
        'Collaborated in team of 3 to design CPU-level branch prediction model',
        'Implemented two-level adaptive predictor for speculative execution',
        'Achieved over 90% prediction accuracy within 7-10 second window',
        'Developed performance-tuned C-language algorithms'
      ],
      details: [
        'Designed and implemented a sophisticated branch prediction system that optimizes CPU performance through intelligent speculative execution. The system uses historical pattern tracking to predict future branch behavior.',
        'Developed performance-tuned C algorithms that achieve over 90% prediction accuracy within realistic execution windows. The system simulates instruction-level parallelism scenarios and adapts to different workload patterns.',
        'Implemented two-level adaptive predictor that combines local and global prediction strategies. The system dynamically adjusts prediction algorithms based on branch behavior patterns.',
        'Created comprehensive simulation framework that validates prediction accuracy across various benchmark programs. The system provides detailed performance metrics and optimization recommendations.'
      ],
      createdAt: new Date('2021-08-01'),
      updatedAt: new Date('2022-05-30')
    },
    {
      id: '6',
      title: 'Faculty Management Android App',
      description: 'Android application for faculty members to manage schedules, track funds, and monitor assessments',
      tech: ['Android', 'Java', 'SQLite', 'Notifications', 'Mobile Development'],
      highlights: [
        'Designed and built Android application for faculty management',
        'Implemented SQLite database integration for offline access',
        'Added notification scheduling for real-time alerts and reminders',
        'Improved faculty task tracking efficiency through streamlined interface'
      ],
      details: [
        'Developed a comprehensive mobile application that streamlines faculty administrative tasks. The app provides tools for schedule management, fund tracking, and assessment monitoring.',
        'Implemented SQLite database integration that enables offline access and data synchronization. The system handles complex relational data and provides efficient querying capabilities.',
        'Built notification scheduling system that delivers real-time alerts and reminders. The system supports various notification types and allows users to customize alert preferences.',
        'Created intuitive user interface that simplifies complex administrative tasks. The app provides dashboard views, detailed reporting, and integration with existing university systems.'
      ],
      createdAt: new Date('2018-09-01'),
      updatedAt: new Date('2019-05-30')
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
