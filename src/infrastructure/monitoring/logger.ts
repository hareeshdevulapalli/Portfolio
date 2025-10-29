// Logging and monitoring infrastructure
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: Date;
  context?: Record<string, any>;
  error?: Error;
}

export interface Logger {
  debug(message: string, context?: Record<string, any>): void;
  info(message: string, context?: Record<string, any>): void;
  warn(message: string, context?: Record<string, any>): void;
  error(message: string, error?: Error, context?: Record<string, any>): void;
}

export interface MonitoringService {
  trackEvent(event: string, properties?: Record<string, any>): void;
  trackPageView(page: string): void;
  trackError(error: Error, context?: Record<string, any>): void;
  trackPerformance(metric: string, value: number): void;
}

// Console Logger Implementation
export class ConsoleLogger implements Logger {
  private logLevel: LogLevel;

  constructor(logLevel: LogLevel = LogLevel.INFO) {
    this.logLevel = logLevel;
  }

  debug(message: string, context?: Record<string, any>): void {
    if (this.logLevel <= LogLevel.DEBUG) {
      console.debug(`[DEBUG] ${message}`, context);
    }
  }

  info(message: string, context?: Record<string, any>): void {
    if (this.logLevel <= LogLevel.INFO) {
      console.info(`[INFO] ${message}`, context);
    }
  }

  warn(message: string, context?: Record<string, any>): void {
    if (this.logLevel <= LogLevel.WARN) {
      console.warn(`[WARN] ${message}`, context);
    }
  }

  error(message: string, error?: Error, context?: Record<string, any>): void {
    if (this.logLevel <= LogLevel.ERROR) {
      console.error(`[ERROR] ${message}`, error, context);
    }
  }
}

// Enhanced Analytics Service with proper monitoring
export class EnhancedAnalyticsService implements MonitoringService {
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  trackEvent(event: string, properties?: Record<string, any>): void {
    this.logger.info(`Analytics Event: ${event}`, properties);

    // In a real application, you would send this to your analytics service
    // Example: Google Analytics, Mixpanel, etc.
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event, properties);
    }
  }

  trackPageView(page: string): void {
    this.logger.info(`Page View: ${page}`);

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: page,
        page_location: window.location.href,
      });
    }
  }

  trackError(error: Error, context?: Record<string, any>): void {
    this.logger.error(`Error tracked: ${error.message}`, error, context);

    // In a real application, you would send this to your error tracking service
    // Example: Sentry, Bugsnag, etc.
    if (typeof window !== 'undefined' && (window as any).Sentry) {
      (window as any).Sentry.captureException(error, { extra: context });
    }
  }

  trackPerformance(metric: string, value: number): void {
    this.logger.info(`Performance Metric: ${metric} = ${value}ms`);

    // In a real application, you would send this to your performance monitoring service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'timing_complete', {
        name: metric,
        value: Math.round(value),
      });
    }
  }
}

// Performance monitoring utilities
export class PerformanceMonitor {
  private static timers: Map<string, number> = new Map();

  static startTimer(name: string): void {
    this.timers.set(name, performance.now());
  }

  static endTimer(name: string): number {
    const startTime = this.timers.get(name);
    if (!startTime) {
      throw new Error(`Timer ${name} was not started`);
    }

    const duration = performance.now() - startTime;
    this.timers.delete(name);
    return duration;
  }

  static measureAsync<T>(name: string, fn: () => Promise<T>): Promise<T> {
    this.startTimer(name);
    return fn().finally(() => {
      const duration = this.endTimer(name);
      console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
    });
  }
}
