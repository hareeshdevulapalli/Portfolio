import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/domain/entities';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

// Single Responsibility: This component only handles displaying a single project card
export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div
      onClick={onClick}
      className="gradient-border hover:shadow-elevated group cursor-pointer rounded-2xl p-6 transition-all duration-500 hover:translate-y-[-4px]"
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-semibold transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:translate-y-[-2px] group-hover:text-accent" />
        </div>

        <p className="leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <TechStack tech={project.tech} />
        <Highlights highlights={project.highlights} />
      </div>
    </div>
  );
};

// Single Responsibility: Display tech stack tags
const TechStack = ({ tech }: { tech: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {tech.map(item => (
      <span
        key={item}
        className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs text-accent"
      >
        {item}
      </span>
    ))}
  </div>
);

// Single Responsibility: Display project highlights
const Highlights = ({ highlights }: { highlights: string[] }) => (
  <div className="space-y-2 pt-2">
    {highlights.map((highlight, index) => (
      <div key={index} className="flex items-start gap-2">
        <span className="mt-1 text-accent">•</span>
        <p className="text-sm text-muted-foreground">{highlight}</p>
      </div>
    ))}
  </div>
);
