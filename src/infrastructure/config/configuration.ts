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
        name: import.meta.env.VITE_APP_NAME || 'Hareesh Devulapalli - Software Engineer',
        version: import.meta.env.VITE_APP_VERSION || '1.0.0',
        environment
      },
      personal: {
        name: import.meta.env.VITE_PERSONAL_NAME || 'Hareesh Devulapalli',
        title: import.meta.env.VITE_PERSONAL_TITLE || 'Software Engineer II',
        bio: import.meta.env.VITE_PERSONAL_BIO || 'Experienced Software Engineer with expertise in React, Angular, Node.js, and full-stack development. Passionate about building scalable, accessible applications and real-time collaboration tools.',
        location: import.meta.env.VITE_PERSONAL_LOCATION || 'San Jose, CA'
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
        email: import.meta.env.VITE_CONTACT_EMAIL || 'hareeshdevulapalli777@gmail.com',
        linkedin: import.meta.env.VITE_CONTACT_LINKEDIN || 'https://linkedin.com/in/hareesh-devulapalli',
        github: import.meta.env.VITE_CONTACT_GITHUB || 'https://github.com/hareeshd',
        phone: import.meta.env.VITE_CONTACT_PHONE || '219-804-2554',
        location: import.meta.env.VITE_PERSONAL_LOCATION || 'San Jose, CA'
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
