// Dependency Injection Container
import {
  ProjectRepository,
  ExperienceRepository,
  EducationRepository,
  MessageService,
  AnalyticsService,
} from '@/domain/interfaces';
import {
  SkillRepository,
  HighlightRepository,
  BadgeRepository,
  ContactRepository,
  PersonalInfoRepository,
} from '@/domain/interfaces/static-content';
import { Logger, MonitoringService } from '@/infrastructure/monitoring/logger';
import {
  ConsoleLogger,
  EnhancedAnalyticsService,
} from '@/infrastructure/monitoring/logger';
import { config } from '@/infrastructure/config/configuration';
import { InMemoryProjectRepository } from '@/infrastructure/repositories/project-repository';
import { InMemoryExperienceRepository } from '@/infrastructure/repositories/experience-repository';
import { InMemoryEducationRepository } from '@/infrastructure/repositories/education-repository';
import {
  InMemorySkillRepository,
  InMemoryHighlightRepository,
  InMemoryBadgeRepository,
  InMemoryContactRepository,
  InMemoryPersonalInfoRepository,
} from '@/infrastructure/repositories/static-content-repository';
import { InMemoryMessageService } from '@/infrastructure/services/message-service';

export class DIContainer {
  private static instance: DIContainer;
  private services: Map<string, any> = new Map();

  private constructor() {
    this.registerServices();
  }

  static getInstance(): DIContainer {
    if (!DIContainer.instance) {
      DIContainer.instance = new DIContainer();
    }
    return DIContainer.instance;
  }

  private registerServices(): void {
    // Register core repositories
    this.services.set('ProjectRepository', new InMemoryProjectRepository());
    this.services.set(
      'ExperienceRepository',
      new InMemoryExperienceRepository()
    );
    this.services.set('EducationRepository', new InMemoryEducationRepository());

    // Register static content repositories
    this.services.set('SkillRepository', new InMemorySkillRepository());
    this.services.set('HighlightRepository', new InMemoryHighlightRepository());
    this.services.set('BadgeRepository', new InMemoryBadgeRepository());
    this.services.set('ContactRepository', new InMemoryContactRepository());
    this.services.set(
      'PersonalInfoRepository',
      new InMemoryPersonalInfoRepository()
    );

    // Register services
    this.services.set('MessageService', new InMemoryMessageService());

    // Register monitoring services
    const logger = new ConsoleLogger(config.isDevelopment() ? 0 : 1); // DEBUG in dev, INFO in prod
    this.services.set('Logger', logger);
    this.services.set('AnalyticsService', new EnhancedAnalyticsService(logger));
  }

  get<T>(serviceName: string): T {
    const service = this.services.get(serviceName);
    if (!service) {
      throw new Error(`Service ${serviceName} not found`);
    }
    return service as T;
  }

  // Convenience methods for common services
  getProjectRepository(): ProjectRepository {
    return this.get<ProjectRepository>('ProjectRepository');
  }

  getExperienceRepository(): ExperienceRepository {
    return this.get<ExperienceRepository>('ExperienceRepository');
  }

  getEducationRepository(): EducationRepository {
    return this.get<EducationRepository>('EducationRepository');
  }

  getSkillRepository(): SkillRepository {
    return this.get<SkillRepository>('SkillRepository');
  }

  getHighlightRepository(): HighlightRepository {
    return this.get<HighlightRepository>('HighlightRepository');
  }

  getBadgeRepository(): BadgeRepository {
    return this.get<BadgeRepository>('BadgeRepository');
  }

  getContactRepository(): ContactRepository {
    return this.get<ContactRepository>('ContactRepository');
  }

  getPersonalInfoRepository(): PersonalInfoRepository {
    return this.get<PersonalInfoRepository>('PersonalInfoRepository');
  }

  getMessageService(): MessageService {
    return this.get<MessageService>('MessageService');
  }

  getAnalyticsService(): MonitoringService {
    return this.get<MonitoringService>('AnalyticsService');
  }

  getLogger(): Logger {
    return this.get<Logger>('Logger');
  }
}

// Export singleton instance
export const container = DIContainer.getInstance();
