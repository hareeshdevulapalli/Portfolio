import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  onClick: () => void;
}

const ProjectCard = ({ title, description, tech, highlights, onClick }: ProjectCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer p-6 rounded-2xl gradient-border bg-card hover:translate-y-[-4px] transition-all duration-500 hover:shadow-elevated liquid-shimmer"
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors">
            {title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-all group-hover:translate-x-1 group-hover:translate-y-[-2px]" />
        </div>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="pt-2 space-y-2">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <p className="text-sm text-muted-foreground">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
