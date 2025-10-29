// Reusable section header component
interface SectionHeaderProps {
  title: string;
  description: string;
}

// Single Responsibility: This component only handles displaying section headers
export const SectionHeader = ({ title, description }: SectionHeaderProps) => (
  <div>
    <h2 className="text-3xl sm:text-4xl font-bold mb-3 group inline-block">
      {title}
      <span className="block h-1 w-0 group-hover:w-full bg-gradient-to-r from-accent to-secondary transition-all duration-500"></span>
    </h2>
    <p className="text-muted-foreground">{description}</p>
  </div>
);
