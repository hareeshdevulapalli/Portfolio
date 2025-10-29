import { Education } from '@/domain/entities';
import { useEducations } from '@/presentation/hooks/use-data';
import { SectionHeader } from './SectionHeader';

// Single Responsibility: This component only handles displaying education
export const Education = () => {
  const { educations, loading, error } = useEducations();

  if (loading) {
    return (
      <section id="education" className="py-16 sm:py-20">
        <div className="space-y-8">
          <SectionHeader
            title="Education"
            description="Academic foundation in computer science and software engineering"
          />
          <div className="space-y-4">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="h-24 animate-pulse rounded-2xl bg-muted"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="education" className="py-16 sm:py-20">
        <div className="space-y-8">
          <SectionHeader
            title="Education"
            description="Academic foundation in computer science and software engineering"
          />
          <div className="text-center text-muted-foreground">
            <p>Failed to load education: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="py-16 sm:py-20">
      <div className="space-y-8">
        <SectionHeader
          title="Education"
          description="Academic foundation in computer science and software engineering"
        />

        <div className="space-y-4">
          {educations.map(education => (
            <EducationCard key={education.id} education={education} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Single Responsibility: Display individual education card
const EducationCard = ({ education }: { education: Education }) => (
  <div className="gradient-border rounded-2xl p-6">
    <div className="space-y-2">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold">{education.degree}</h3>
          <p className="font-medium text-accent">{education.institution}</p>
          <p className="text-sm text-muted-foreground">{education.field}</p>
        </div>
        <span className="text-sm text-muted-foreground">
          {education.duration}
        </span>
      </div>

      <p className="leading-relaxed text-muted-foreground">
        {education.description}
      </p>
    </div>
  </div>
);
