// Presentation layer hooks
import { useState, useEffect } from 'react';
import { container } from '@/infrastructure/di/container';
import { GetProjectsUseCase } from '@/application/use-cases/project-use-cases';
import { GetExperiencesUseCase } from '@/application/use-cases/experience-use-cases';
import { GetEducationsUseCase } from '@/application/use-cases/education-use-cases';
import {
  SendMessageUseCase,
  GetStarterPromptsUseCase,
} from '@/application/use-cases/message-use-cases';
import { Project, Experience, Education } from '@/domain/entities';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const getProjectsUseCase = new GetProjectsUseCase(
          container.getProjectRepository()
        );
        const projectsData = await getProjectsUseCase.execute();
        setProjects(projectsData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to load projects'
        );
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return { projects, loading, error };
};

export const useExperiences = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadExperiences = async () => {
      try {
        setLoading(true);
        const getExperiencesUseCase = new GetExperiencesUseCase(
          container.getExperienceRepository()
        );
        const experiencesData = await getExperiencesUseCase.execute();
        setExperiences(experiencesData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to load experiences'
        );
      } finally {
        setLoading(false);
      }
    };

    loadExperiences();
  }, []);

  return { experiences, loading, error };
};

export const useEducations = () => {
  const [educations, setEducations] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEducations = async () => {
      try {
        setLoading(true);
        const getEducationsUseCase = new GetEducationsUseCase(
          container.getEducationRepository()
        );
        const educationsData = await getEducationsUseCase.execute();
        setEducations(educationsData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to load educations'
        );
      } finally {
        setLoading(false);
      }
    };

    loadEducations();
  }, []);

  return { educations, loading, error };
};

export const useMessageService = () => {
  const [starterPrompts, setStarterPrompts] = useState<string[]>([]);

  useEffect(() => {
    const getStarterPromptsUseCase = new GetStarterPromptsUseCase(
      container.getMessageService()
    );
    setStarterPrompts(getStarterPromptsUseCase.execute());
  }, []);

  const sendMessage = async (message: string): Promise<string> => {
    const sendMessageUseCase = new SendMessageUseCase(
      container.getMessageService()
    );
    return sendMessageUseCase.execute(message);
  };

  return { starterPrompts, sendMessage };
};
