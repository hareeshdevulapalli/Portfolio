// Domain errors with proper error hierarchy
export abstract class DomainError extends Error {
  abstract readonly code: string;
  abstract readonly statusCode: number;

  constructor(message: string, public readonly context?: Record<string, any>) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class ValidationError extends DomainError {
  readonly code = 'VALIDATION_ERROR';
  readonly statusCode = 400;

  constructor(message: string, context?: Record<string, any>) {
    super(message, context);
  }
}

export class NotFoundError extends DomainError {
  readonly code = 'NOT_FOUND';
  readonly statusCode = 404;

  constructor(resource: string, id: string) {
    super(`${resource} with id ${id} not found`, { resource, id });
  }
}

export class ProjectNotFoundError extends NotFoundError {
  constructor(id: string) {
    super('Project', id);
  }
}

export class ExperienceNotFoundError extends NotFoundError {
  constructor(id: string) {
    super('Experience', id);
  }
}

export class EducationNotFoundError extends NotFoundError {
  constructor(id: string) {
    super('Education', id);
  }
}

export class InvalidProjectDataError extends ValidationError {
  constructor(message: string, context?: Record<string, any>) {
    super(`Invalid project data: ${message}`, context);
  }
}

export class InvalidEmailError extends ValidationError {
  constructor(email: string) {
    super(`Invalid email format: ${email}`, { email });
  }
}

export class InvalidUrlError extends ValidationError {
  constructor(url: string) {
    super(`Invalid URL format: ${url}`, { url });
  }
}

// Application errors
export abstract class ApplicationError extends Error {
  abstract readonly code: string;
  abstract readonly statusCode: number;

  constructor(message: string, public readonly context?: Record<string, any>) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class UseCaseError extends ApplicationError {
  readonly code = 'USE_CASE_ERROR';
  readonly statusCode = 500;

  constructor(message: string, context?: Record<string, any>) {
    super(message, context);
  }
}

export class RepositoryError extends ApplicationError {
  readonly code = 'REPOSITORY_ERROR';
  readonly statusCode = 500;

  constructor(message: string, context?: Record<string, any>) {
    super(message, context);
  }
}

// Infrastructure errors
export abstract class InfrastructureError extends Error {
  abstract readonly code: string;
  abstract readonly statusCode: number;

  constructor(message: string, public readonly context?: Record<string, any>) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class NetworkError extends InfrastructureError {
  readonly code = 'NETWORK_ERROR';
  readonly statusCode = 503;

  constructor(message: string, context?: Record<string, any>) {
    super(message, context);
  }
}

export class ConfigurationError extends InfrastructureError {
  readonly code = 'CONFIGURATION_ERROR';
  readonly statusCode = 500;

  constructor(message: string, context?: Record<string, any>) {
    super(message, context);
  }
}
