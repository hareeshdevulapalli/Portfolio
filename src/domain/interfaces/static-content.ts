// Domain interfaces for static content repositories
import {
  Skill,
  Highlight,
  Badge,
  ContactLink,
  PersonalInfo,
} from './static-content';

export interface SkillRepository {
  findAll(): Promise<Skill[]>;
  findByCategory(category: string): Promise<Skill[]>;
}

export interface HighlightRepository {
  findAll(): Promise<Highlight[]>;
  findById(id: string): Promise<Highlight | null>;
}

export interface BadgeRepository {
  findAll(): Promise<Badge[]>;
  findByCategory(category: string): Promise<Badge[]>;
}

export interface ContactRepository {
  findAll(): Promise<ContactLink[]>;
  findByType(type: string): Promise<ContactLink | null>;
}

export interface PersonalInfoRepository {
  get(): Promise<PersonalInfo>;
}
