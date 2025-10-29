import { useEffect, useState } from 'react';
import { config } from '@/infrastructure/config/configuration';

const skills = [
  'React',
  'Angular',
  'Node.js',
  'TypeScript',
  'NestJS',
  'WebSockets',
  'GraphQL',
  'Spring Boot',
];

const Hero = () => {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);

  useEffect(() => {
    skills.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSkills(prev => [...prev, index]);
      }, index * 100);
    });
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {config.getTitle()}
          </h2>
          <p className="max-w-3xl text-lg text-muted-foreground sm:text-xl">
            {config.getBio()}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className={`liquid-glass rounded-full border border-accent/20 px-4 py-2 text-sm font-medium transition-all duration-700 ${
                visibleSkills.includes(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              } hover:shadow-glow hover:scale-105 hover:border-accent/60`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
