// Configuration management following clean architecture
export interface AppConfig {
  app: {
    name: string;
    version: string;
    environment: 'development' | 'staging' | 'production';
  };
  api: {
    baseUrl: string;
    timeout: number;
  };
  analytics: {
    enabled: boolean;
    trackingId?: string;
  };
  features: {
    aiAssistant: boolean;
    analytics: boolean;
    darkMode: boolean;
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
    location: string;
  };
}

export class ConfigurationService {
  private static instance: ConfigurationService;
  private config: AppConfig;

  private constructor() {
    this.config = this.loadConfiguration();
  }

  static getInstance(): ConfigurationService {
    if (!ConfigurationService.instance) {
      ConfigurationService.instance = new ConfigurationService();
    }
    return ConfigurationService.instance;
  }

  private loadConfiguration(): AppConfig {
    const environment = (import.meta.env.MODE as 'development' | 'staging' | 'production') || 'development';
    
    return {
      app: {
        name: 'Alex Rodriguez - Frontend Engineer Portfolio',
        version: '1.0.0',
        environment
      },
      api: {
        baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
        timeout: parseInt(import.meta.env.VITE_API_TIMEOUT || '5000')
      },
      analytics: {
        enabled: import.meta.env.VITE_ANALYTICS_ENABLED === 'true',
        trackingId: import.meta.env.VITE_ANALYTICS_TRACKING_ID
      },
      features: {
        aiAssistant: import.meta.env.VITE_FEATURE_AI_ASSISTANT !== 'false',
        analytics: import.meta.env.VITE_FEATURE_ANALYTICS !== 'false',
        darkMode: import.meta.env.VITE_FEATURE_DARK_MODE !== 'false'
      },
      contact: {
        email: import.meta.env.VITE_CONTACT_EMAIL || 'alex@example.com',
        linkedin: import.meta.env.VITE_CONTACT_LINKEDIN || 'https://linkedin.com',
        github: import.meta.env.VITE_CONTACT_GITHUB || 'https://github.com',
        location: import.meta.env.VITE_CONTACT_LOCATION || 'San Francisco, CA'
      }
    };
  }

  getConfig(): AppConfig {
    return { ...this.config };
  }

  get<K extends keyof AppConfig>(key: K): AppConfig[K] {
    return this.config[key];
  }

  isDevelopment(): boolean {
    return this.config.app.environment === 'development';
  }

  isProduction(): boolean {
    return this.config.app.environment === 'production';
  }

  isFeatureEnabled(feature: keyof AppConfig['features']): boolean {
    return this.config.features[feature];
  }
}

// Export singleton instance
export const config = ConfigurationService.getInstance();
