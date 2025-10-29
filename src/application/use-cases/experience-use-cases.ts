import { Experience } from '@/domain/entities';
import { ExperienceRepository } from '@/domain/interfaces';
import { ProjectNotFoundError } from '@/domain/constants';

export class GetExperiencesUseCase {
  constructor(private experienceRepository: ExperienceRepository) {}

  async execute(): Promise<Experience[]> {
    return this.experienceRepository.findAll();
  }
}

export class GetExperienceByIdUseCase {
  constructor(private experienceRepository: ExperienceRepository) {}

  async execute(id: string): Promise<Experience> {
    const experience = await this.experienceRepository.findById(id);
    if (!experience) {
      throw new ProjectNotFoundError(id); // Reusing error for simplicity
    }
    return experience;
  }
}
