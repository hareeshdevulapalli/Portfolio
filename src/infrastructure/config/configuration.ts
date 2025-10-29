// Configuration management following clean architecture
export interface AppConfig {
  app: {
    name: string;
    version: string;
    environment: 'development' | 'staging' | 'production';
  };
  personal: {
    name: string;
    title: string;
    bio: string;
    location: string;
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
    phone: string;
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
        name: import.meta.env.VITE_APP_NAME!,
        version: import.meta.env.VITE_APP_VERSION!,
        environment
      },
      personal: {
        name: import.meta.env.VITE_PERSONAL_NAME!,
        title: import.meta.env.VITE_PERSONAL_TITLE!,
        bio: import.meta.env.VITE_PERSONAL_BIO!,
        location: import.meta.env.VITE_PERSONAL_LOCATION!
      },
      api: {
        baseUrl: import.meta.env.VITE_API_BASE_URL!,
        timeout: parseInt(import.meta.env.VITE_API_TIMEOUT!)
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
        email: import.meta.env.VITE_CONTACT_EMAIL!,
        linkedin: import.meta.env.VITE_CONTACT_LINKEDIN!,
        github: import.meta.env.VITE_CONTACT_GITHUB!,
        phone: import.meta.env.VITE_CONTACT_PHONE!,
        location: import.meta.env.VITE_PERSONAL_LOCATION!
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

  // Convenience methods for personal information
  getPersonalInfo(): AppConfig['personal'] {
    return { ...this.config.personal };
  }

  getContactInfo(): AppConfig['contact'] {
    return { ...this.config.contact };
  }

  getName(): string {
    return this.config.personal.name;
  }

  getTitle(): string {
    return this.config.personal.title;
  }

  getBio(): string {
    return this.config.personal.bio;
  }

  getLocation(): string {
    return this.config.personal.location;
  }

  getEmail(): string {
    return this.config.contact.email;
  }

  getLinkedIn(): string {
    return this.config.contact.linkedin;
  }

  getGitHub(): string {
    return this.config.contact.github;
  }

  getPhone(): string {
    return this.config.contact.phone;
  }
}

// Export singleton instance
export const config = ConfigurationService.getInstance();
