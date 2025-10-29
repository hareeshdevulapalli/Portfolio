import { Education, EducationRepository } from '@/domain/entities';

export class InMemoryEducationRepository implements EducationRepository {
  private educations: Education[] = [
    {
      id: '1',
      institution: 'Purdue University',
      degree: 'Master of Science',
      field: 'Computer Science',
      duration: 'December 2022',
      description: 'Advanced studies in computer science with focus on software engineering and system design'
    },
    {
      id: '2',
      institution: 'Jawaharlal Nehru Technological University (JNTUH)',
      degree: 'Bachelor of Technology',
      field: 'Computer Science',
      duration: 'May 2019',
      description: 'Comprehensive computer science education with emphasis on programming, algorithms, and software development'
    }
  ];

  async findAll(): Promise<Education[]> {
    return [...this.educations];
  }

  async findById(id: string): Promise<Education | null> {
    return this.educations.find(edu => edu.id === id) || null;
  }
}
