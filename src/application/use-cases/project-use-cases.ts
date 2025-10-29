import { Project } from '@/domain/entities';
import { ProjectRepository } from '@/domain/interfaces';
import { ProjectNotFoundError } from '@/domain/constants';

// Use cases (Application layer)
export class GetProjectsUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async execute(): Promise<Project[]> {
    return this.projectRepository.findAll();
  }
}

export class GetProjectByIdUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async execute(id: string): Promise<Project> {
    const project = await this.projectRepository.findById(id);
    if (!project) {
      throw new ProjectNotFoundError(id);
    }
    return project;
  }
}

export class GetProjectsByCategoryUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async execute(category: string): Promise<Project[]> {
    return this.projectRepository.findByCategory(category);
  }
}
