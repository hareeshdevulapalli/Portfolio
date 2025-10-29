import { X } from "lucide-react";
import { useEffect } from "react";
import { Project } from '@/domain/entities';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

// Single Responsibility: This component only handles displaying project details in a modal
export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto glass rounded-2xl shadow-elevated animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader project={project} onClose={onClose} />
        <ModalContent project={project} />
      </div>
    </div>
  );
};

// Single Responsibility: Modal header with title and close button
const ModalHeader = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <div className="sticky top-0 glass border-b border-border/50 p-6 flex items-start justify-between">
    <div>
      <h2 className="text-3xl font-bold">{project.title}</h2>
      <p className="text-muted-foreground mt-2">{project.description}</p>
    </div>
    <button
      onClick={onClose}
      className="p-2 rounded-lg hover:bg-muted transition-colors"
      aria-label="Close modal"
    >
      <X className="w-5 h-5" />
    </button>
  </div>
);

// Single Responsibility: Modal content with project details
const ModalContent = ({ project }: { project: Project }) => (
  <div className="p-6 space-y-6">
    <TechSection tech={project.tech} />
    <HighlightsSection highlights={project.highlights} />
    <DetailsSection details={project.details} />
  </div>
);

// Single Responsibility: Display tech stack section
const TechSection = ({ tech }: { tech: string[] }) => (
  <div>
    <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
    <div className="flex flex-wrap gap-2">
      {tech.map((item) => (
        <span
          key={item}
          className="px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20"
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
    <h3 className="text-lg font-semibold mb-3">What I Built</h3>
    <ul className="space-y-2">
      {highlights.map((highlight, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="text-accent mt-1">→</span>
          <span className="text-muted-foreground">{highlight}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Single Responsibility: Display detailed description section
const DetailsSection = ({ details }: { details: string[] }) => (
  <div>
    <h3 className="text-lg font-semibold mb-3">Deep Dive</h3>
    <div className="space-y-3">
      {details.map((detail, index) => (
        <p key={index} className="text-muted-foreground leading-relaxed">
          {detail}
        </p>
      ))}
    </div>
  </div>
);
