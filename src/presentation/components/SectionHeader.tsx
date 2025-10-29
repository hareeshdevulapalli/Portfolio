// Reusable section header component
interface SectionHeaderProps {
  title: string;
  description: string;
}

// Single Responsibility: This component only handles displaying section headers
export const SectionHeader = ({ title, description }: SectionHeaderProps) => (
  <div>
    <h2 className="group mb-3 inline-block text-3xl font-bold sm:text-4xl">
      {title}
      <span className="block h-1 w-0 bg-gradient-to-r from-accent to-secondary transition-all duration-500 group-hover:w-full"></span>
    </h2>
    <p className="text-muted-foreground">{description}</p>
  </div>
);
