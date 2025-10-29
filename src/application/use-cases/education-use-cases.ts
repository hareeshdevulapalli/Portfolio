import { Education } from '@/domain/entities';
import { EducationRepository } from '@/domain/interfaces';
import { ProjectNotFoundError } from '@/domain/constants';

export class GetEducationsUseCase {
  constructor(private educationRepository: EducationRepository) {}

  async execute(): Promise<Education[]> {
    return this.educationRepository.findAll();
  }
}

export class GetEducationByIdUseCase {
  constructor(private educationRepository: EducationRepository) {}

  async execute(id: string): Promise<Education> {
    const education = await this.educationRepository.findById(id);
    if (!education) {
      throw new ProjectNotFoundError(id); // Reusing error for simplicity
    }
    return education;
  }
}
