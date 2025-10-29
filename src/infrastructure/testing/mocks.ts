// Testing utilities and mocks
import { Project, Experience, Education } from '@/domain/entities';
import { Skill, Highlight, Badge, ContactLink, PersonalInfo } from '@/domain/entities/static-content';
import { ProjectRepository, ExperienceRepository, EducationRepository, MessageService } from '@/domain/interfaces';
import { SkillRepository, HighlightRepository, BadgeRepository, ContactRepository, PersonalInfoRepository } from '@/domain/interfaces/static-content';

// Mock implementations for testing
export class MockProjectRepository implements ProjectRepository {
  private projects: Project[] = [];

  constructor(initialProjects: Project[] = []) {
    this.projects = [...initialProjects];
  }

  async findAll(): Promise<Project[]> {
    return [...this.projects];
  }

  async findById(id: string): Promise<Project | null> {
    return this.projects.find(project => project.id === id) || null;
  }

  async findByCategory(category: string): Promise<Project[]> {
    return this.projects; // Simplified for testing
  }

  // Test helper methods
  addProject(project: Project): void {
    this.projects.push(project);
  }

  clearProjects(): void {
    this.projects = [];
  }
}

export class MockExperienceRepository implements ExperienceRepository {
  private experiences: Experience[] = [];

  constructor(initialExperiences: Experience[] = []) {
    this.experiences = [...initialExperiences];
  }

  async findAll(): Promise<Experience[]> {
    return [...this.experiences];
  }

  async findById(id: string): Promise<Experience | null> {
    return this.experiences.find(exp => exp.id === id) || null;
  }

  addExperience(experience: Experience): void {
    this.experiences.push(experience);
  }

  clearExperiences(): void {
    this.experiences = [];
  }
}

export class MockEducationRepository implements EducationRepository {
  private educations: Education[] = [];

  constructor(initialEducations: Education[] = []) {
    this.educations = [...initialEducations];
  }

  async findAll(): Promise<Education[]> {
    return [...this.educations];
  }

  async findById(id: string): Promise<Education | null> {
    return this.educations.find(edu => edu.id === id) || null;
  }

  addEducation(education: Education): void {
    this.educations.push(education);
  }

  clearEducations(): void {
    this.educations = [];
  }
}

export class MockMessageService implements MessageService {
  private responses: Record<string, string> = {};
  private starterPrompts: string[] = [];

  constructor(responses: Record<string, string> = {}, starterPrompts: string[] = []) {
    this.responses = { ...responses };
    this.starterPrompts = [...starterPrompts];
  }

  async sendMessage(message: string): Promise<string> {
    const lowerInput = message.toLowerCase();
    let response = this.responses["default"] || "Default response";
    
    for (const [key, value] of Object.entries(this.responses)) {
      if (lowerInput.includes(key)) {
        response = value;
        break;
      }
    }
    
    return response;
  }

  getStarterPrompts(): string[] {
    return [...this.starterPrompts];
  }

  setResponse(key: string, response: string): void {
    this.responses[key] = response;
  }

  setStarterPrompts(prompts: string[]): void {
    this.starterPrompts = [...prompts];
  }
}

export class MockSkillRepository implements SkillRepository {
  private skills: Skill[] = [];

  constructor(initialSkills: Skill[] = []) {
    this.skills = [...initialSkills];
  }

  async findAll(): Promise<Skill[]> {
    return [...this.skills];
  }

  async findByCategory(category: string): Promise<Skill[]> {
    return this.skills.filter(skill => skill.category === category);
  }

  addSkill(skill: Skill): void {
    this.skills.push(skill);
  }

  clearSkills(): void {
    this.skills = [];
  }
}

export class MockHighlightRepository implements HighlightRepository {
  private highlights: Highlight[] = [];

  constructor(initialHighlights: Highlight[] = []) {
    this.highlights = [...initialHighlights];
  }

  async findAll(): Promise<Highlight[]> {
    return [...this.highlights];
  }

  async findById(id: string): Promise<Highlight | null> {
    return this.highlights.find(highlight => highlight.id === id) || null;
  }

  addHighlight(highlight: Highlight): void {
    this.highlights.push(highlight);
  }

  clearHighlights(): void {
    this.highlights = [];
  }
}

export class MockBadgeRepository implements BadgeRepository {
  private badges: Badge[] = [];

  constructor(initialBadges: Badge[] = []) {
    this.badges = [...initialBadges];
  }

  async findAll(): Promise<Badge[]> {
    return [...this.badges];
  }

  async findByCategory(category: string): Promise<Badge[]> {
    return this.badges.filter(badge => badge.category === category);
  }

  addBadge(badge: Badge): void {
    this.badges.push(badge);
  }

  clearBadges(): void {
    this.badges = [];
  }
}

export class MockContactRepository implements ContactRepository {
  private contacts: ContactLink[] = [];

  constructor(initialContacts: ContactLink[] = []) {
    this.contacts = [...initialContacts];
  }

  async findAll(): Promise<ContactLink[]> {
    return [...this.contacts];
  }

  async findByType(type: string): Promise<ContactLink | null> {
    return this.contacts.find(contact => contact.type === type) || null;
  }

  addContact(contact: ContactLink): void {
    this.contacts.push(contact);
  }

  clearContacts(): void {
    this.contacts = [];
  }
}

export class MockPersonalInfoRepository implements PersonalInfoRepository {
  private personalInfo: PersonalInfo;

  constructor(personalInfo: PersonalInfo) {
    this.personalInfo = { ...personalInfo };
  }

  async get(): Promise<PersonalInfo> {
    return { ...this.personalInfo };
  }

  setPersonalInfo(personalInfo: PersonalInfo): void {
    this.personalInfo = { ...personalInfo };
  }
}

// Test data factories
export class TestDataFactory {
  static createProject(overrides: Partial<Project> = {}): Project {
    return {
      id: '1',
      title: 'Test Project',
      description: 'Test project description',
      tech: ['React', 'TypeScript'],
      highlights: ['Test highlight'],
      details: ['Test detail'],
      createdAt: new Date('2023-01-01'),
      updatedAt: new Date('2023-01-01'),
      ...overrides
    };
  }

  static createExperience(overrides: Partial<Experience> = {}): Experience {
    return {
      id: '1',
      company: 'Test Company',
      position: 'Test Position',
      duration: '2023 - Present',
      description: 'Test experience description',
      achievements: ['Test achievement'],
      tech: ['React', 'TypeScript'],
      ...overrides
    };
  }

  static createEducation(overrides: Partial<Education> = {}): Education {
    return {
      id: '1',
      institution: 'Test University',
      degree: 'Test Degree',
      field: 'Computer Science',
      duration: '2020 - 2024',
      description: 'Test education description',
      ...overrides
    };
  }

  static createSkill(overrides: Partial<Skill> = {}): Skill {
    return {
      id: '1',
      name: 'Test Skill',
      category: 'frontend',
      proficiency: 'advanced',
      ...overrides
    };
  }

  static createHighlight(overrides: Partial<Highlight> = {}): Highlight {
    return {
      id: '1',
      icon: 'TestIcon',
      title: 'Test Highlight',
      description: 'Test highlight description',
      ...overrides
    };
  }

  static createBadge(overrides: Partial<Badge> = {}): Badge {
    return {
      id: '1',
      text: 'Test Badge',
      category: 'test',
      ...overrides
    };
  }

  static createContactLink(overrides: Partial<ContactLink> = {}): ContactLink {
    return {
      id: '1',
      type: 'email',
      url: 'mailto:test@example.com',
      label: 'Test Contact',
      icon: 'Mail',
      ...overrides
    };
  }

  static createPersonalInfo(overrides: Partial<PersonalInfo> = {}): PersonalInfo {
    return {
      name: 'Test User',
      title: 'Test Title',
      bio: 'Test bio',
      location: 'Test Location',
      contact: [this.createContactLink()],
      ...overrides
    };
  }
}
