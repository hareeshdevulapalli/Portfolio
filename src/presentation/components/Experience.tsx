import { Experience } from '@/domain/entities';
import { useExperiences } from '@/presentation/hooks/use-data';
import { SectionHeader } from './SectionHeader';

// Single Responsibility: This component only handles displaying work experience
export const Experience = () => {
  const { experiences, loading, error } = useExperiences();

  if (loading) {
    return (
      <section id="experience" className="py-16 sm:py-20">
        <div className="space-y-8">
          <SectionHeader
            title="Experience"
            description="Professional journey building scalable frontend solutions"
          />
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-32 animate-pulse rounded-2xl bg-muted"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="experience" className="py-16 sm:py-20">
        <div className="space-y-8">
          <SectionHeader
            title="Experience"
            description="Professional journey building scalable frontend solutions"
          />
          <div className="text-center text-muted-foreground">
            <p>Failed to load experience: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="space-y-8">
        <SectionHeader
          title="Experience"
          description="Professional journey building scalable frontend solutions"
        />

        <div className="space-y-6">
          {experiences.map(experience => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Single Responsibility: Display individual experience card
const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <div className="gradient-border rounded-2xl p-6">
    <div className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold">{experience.position}</h3>
          <p className="font-medium text-accent">{experience.company}</p>
        </div>
        <span className="text-sm text-muted-foreground">
          {experience.duration}
        </span>
      </div>

      <p className="leading-relaxed text-muted-foreground">
        {experience.description}
      </p>

      <AchievementsList achievements={experience.achievements} />
      <TechStack tech={experience.tech} />
    </div>
  </div>
);

// Single Responsibility: Display achievements list
const AchievementsList = ({ achievements }: { achievements: string[] }) => (
  <div className="space-y-2">
    {achievements.map((achievement, index) => (
      <div key={index} className="flex items-start gap-2">
        <span className="mt-1 text-accent">•</span>
        <p className="text-sm text-muted-foreground">{achievement}</p>
      </div>
    ))}
  </div>
);

// Single Responsibility: Display tech stack
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
