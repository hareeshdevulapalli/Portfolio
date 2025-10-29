import { AnalyticsService } from '@/domain/interfaces';

export class ConsoleAnalyticsService implements AnalyticsService {
  trackEvent(event: string, properties?: Record<string, any>): void {
    console.log(`Analytics Event: ${event}`, properties);
    // In a real app, you'd send this to your analytics service
  }

  trackPageView(page: string): void {
    console.log(`Page View: ${page}`);
    // In a real app, you'd send this to your analytics service
  }
}
