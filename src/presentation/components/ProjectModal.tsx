import { X } from 'lucide-react';
import { useEffect } from 'react';
import { Project } from '@/domain/entities';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

// Single Responsibility: This component only handles displaying project details in a modal
export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="glass shadow-elevated max-h-[90vh] w-full max-w-3xl animate-scale-in overflow-y-auto rounded-2xl"
        onClick={e => e.stopPropagation()}
      >
        <ModalHeader project={project} onClose={onClose} />
        <ModalContent project={project} />
      </div>
    </div>
  );
};

// Single Responsibility: Modal header with title and close button
const ModalHeader = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => (
  <div className="glass sticky top-0 flex items-start justify-between border-b border-border/50 p-6">
    <div>
      <h2 className="text-3xl font-bold">{project.title}</h2>
      <p className="mt-2 text-muted-foreground">{project.description}</p>
    </div>
    <button
      onClick={onClose}
      className="rounded-lg p-2 transition-colors hover:bg-muted"
      aria-label="Close modal"
    >
      <X className="h-5 w-5" />
    </button>
  </div>
);

// Single Responsibility: Modal content with project details
const ModalContent = ({ project }: { project: Project }) => (
  <div className="space-y-6 p-6">
    <TechSection tech={project.tech} />
    <HighlightsSection highlights={project.highlights} />
    <DetailsSection details={project.details} />
  </div>
);

// Single Responsibility: Display tech stack section
const TechSection = ({ tech }: { tech: string[] }) => (
  <div>
    <h3 className="mb-3 text-lg font-semibold">Tech Stack</h3>
    <div className="flex flex-wrap gap-2">
      {tech.map(item => (
        <span
          key={item}
          className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-accent"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

// Single Responsibility: Display highlights section
const HighlightsSection = ({ highlights }: { highlights: string[] }) => (
  <div>
    <h3 className="mb-3 text-lg font-semibold">What I Built</h3>
    <ul className="space-y-2">
      {highlights.map((highlight, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="mt-1 text-accent">→</span>
          <span className="text-muted-foreground">{highlight}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Single Responsibility: Display detailed description section
const DetailsSection = ({ details }: { details: string[] }) => (
  <div>
    <h3 className="mb-3 text-lg font-semibold">Deep Dive</h3>
    <div className="space-y-3">
      {details.map((detail, index) => (
        <p key={index} className="leading-relaxed text-muted-foreground">
          {detail}
        </p>
      ))}
    </div>
  </div>
);
