// Use cases for static content
import { Skill, Highlight, Badge, ContactLink, PersonalInfo } from '@/domain/entities/static-content';
import { SkillRepository, HighlightRepository, BadgeRepository, ContactRepository, PersonalInfoRepository } from '@/domain/interfaces/static-content';

export class GetSkillsUseCase {
  constructor(private skillRepository: SkillRepository) {}

  async execute(): Promise<Skill[]> {
    return this.skillRepository.findAll();
  }

  async executeByCategory(category: string): Promise<Skill[]> {
    return this.skillRepository.findByCategory(category);
  }
}

export class GetHighlightsUseCase {
  constructor(private highlightRepository: HighlightRepository) {}

  async execute(): Promise<Highlight[]> {
    return this.highlightRepository.findAll();
  }

  async executeById(id: string): Promise<Highlight | null> {
    return this.highlightRepository.findById(id);
  }
}

export class GetBadgesUseCase {
  constructor(private badgeRepository: BadgeRepository) {}

  async execute(): Promise<Badge[]> {
    return this.badgeRepository.findAll();
  }

  async executeByCategory(category: string): Promise<Badge[]> {
    return this.badgeRepository.findByCategory(category);
  }
}

export class GetContactLinksUseCase {
  constructor(private contactRepository: ContactRepository) {}

  async execute(): Promise<ContactLink[]> {
    return this.contactRepository.findAll();
  }

  async executeByType(type: string): Promise<ContactLink | null> {
    return this.contactRepository.findByType(type);
  }
}

export class GetPersonalInfoUseCase {
  constructor(private personalInfoRepository: PersonalInfoRepository) {}

  async execute(): Promise<PersonalInfo> {
    return this.personalInfoRepository.get();
  }
}
