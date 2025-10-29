// Application services
import { AnalyticsService } from '@/domain/interfaces';

export class AnalyticsApplicationService {
  constructor(private analyticsService: AnalyticsService) {}

  trackProjectView(projectId: string): void {
    this.analyticsService.trackEvent('project_viewed', { projectId });
  }

  trackMessageSent(messageLength: number): void {
    this.analyticsService.trackEvent('message_sent', { messageLength });
  }

  trackPageView(page: string): void {
    this.analyticsService.trackPageView(page);
  }
}
