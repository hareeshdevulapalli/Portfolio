import { Education, EducationRepository } from '@/domain/entities';

export class InMemoryEducationRepository implements EducationRepository {
  private educations: Education[] = [
    {
      id: '1',
      institution: 'University of Technology',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      duration: '2014 - 2018',
      description: 'Focused on software engineering, algorithms, and web technologies'
    },
    {
      id: '2',
      institution: 'Code Academy',
      degree: 'Certificate',
      field: 'Full Stack Web Development',
      duration: '2017 - 2018',
      description: 'Intensive program covering modern web development technologies'
    }
  ];

  async findAll(): Promise<Education[]> {
    return [...this.educations];
  }

  async findById(id: string): Promise<Education | null> {
    return this.educations.find(edu => edu.id === id) || null;
  }
}
