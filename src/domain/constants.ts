// Domain constants and enums
export enum ProjectCategory {
  FRONTEND = 'frontend',
  FULLSTACK = 'fullstack',
  MOBILE = 'mobile',
  TOOLS = 'tools',
}

export enum SkillCategory {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  TOOLS = 'tools',
  DESIGN = 'design',
}

export enum ProficiencyLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  EXPERT = 'expert',
}

export enum MessageRole {
  USER = 'user',
  ASSISTANT = 'assistant',
}

// Domain errors
export class DomainError extends Error {
  constructor(
    message: string,
    public readonly code: string
  ) {
    super(message);
    this.name = 'DomainError';
  }
}

export class ProjectNotFoundError extends DomainError {
  constructor(id: string) {
    super(`Project with id ${id} not found`, 'PROJECT_NOT_FOUND');
  }
}

export class InvalidProjectDataError extends DomainError {
  constructor(message: string) {
    super(message, 'INVALID_PROJECT_DATA');
  }
}
