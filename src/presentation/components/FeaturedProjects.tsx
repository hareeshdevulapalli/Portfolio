import { useState } from "react";
import { Project } from '@/domain/entities';
import { useProjects } from '@/presentation/hooks/use-data';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { SectionHeader } from './SectionHeader';

// Single Responsibility: This component only handles displaying featured projects
export const FeaturedProjects = () => {
  const { projects, loading, error } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (loading) {
    return (
      <section id="projects" className="py-16 sm:py-20">
        <div className="space-y-8">
          <SectionHeader 
            title="Featured Projects"
            description="Production systems showcasing frontend architecture, performance, and accessibility"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-64 bg-muted animate-pulse rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-16 sm:py-20">
        <div className="space-y-8">
          <SectionHeader 
            title="Featured Projects"
            description="Production systems showcasing frontend architecture, performance, and accessibility"
          />
          <div className="text-center text-muted-foreground">
            <p>Failed to load projects: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="space-y-8">
        <SectionHeader 
          title="Featured Projects"
          description="Production systems showcasing frontend architecture, performance, and accessibility"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
