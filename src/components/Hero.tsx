import { useEffect, useState } from "react";
import { config } from "@/infrastructure/config/configuration";

const skills = [
  "React",
  "Angular",
  "Node.js",
  "TypeScript",
  "NestJS",
  "WebSockets",
  "GraphQL",
  "Spring Boot",
];

const Hero = () => {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);

  useEffect(() => {
    skills.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSkills((prev) => [...prev, index]);
      }, index * 100);
    });
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {config.getTitle()}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl">
            {config.getBio()}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className={`px-4 py-2 rounded-full liquid-glass border border-accent/20 text-sm font-medium transition-all duration-700 ${
                visibleSkills.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              } hover:border-accent/60 hover:shadow-glow hover:scale-105`}
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
