// Domain interfaces (repositories)
import { Project, Experience, Education, Skill } from './entities';

export interface ProjectRepository {
  findAll(): Promise<Project[]>;
  findById(id: string): Promise<Project | null>;
  findByCategory(category: string): Promise<Project[]>;
}

export interface ExperienceRepository {
  findAll(): Promise<Experience[]>;
  findById(id: string): Promise<Experience | null>;
}

export interface EducationRepository {
  findAll(): Promise<Education[]>;
  findById(id: string): Promise<Education | null>;
}

export interface SkillRepository {
  findAll(): Promise<Skill[]>;
  findByCategory(category: string): Promise<Skill[]>;
}

// Domain services
export interface MessageService {
  sendMessage(message: string): Promise<string>;
  getStarterPrompts(): string[];
}

export interface AnalyticsService {
  trackEvent(event: string, properties?: Record<string, any>): void;
  trackPageView(page: string): void;
}

// Domain events
export interface DomainEvent {
  type: string;
  payload: any;
  timestamp: Date;
}

export interface EventPublisher {
  publish(event: DomainEvent): void;
}

export interface EventSubscriber {
  handle(event: DomainEvent): void;
}
