const experiences = [
  {
    company: "TechCorp",
    role: "Senior Frontend Engineer",
    period: "2021 - Present",
    highlights: [
      "Led frontend architecture for enterprise dashboard serving 10K+ daily users",
      "Built design system adopted across 15+ products",
      "Mentored junior engineers on React best practices and accessibility"
    ]
  },
  {
    company: "StartupX",
    role: "Frontend Engineer",
    period: "2019 - 2021",
    highlights: [
      "Rebuilt customer portal from legacy jQuery to modern Angular",
      "Improved page load performance by 60% through optimization",
      "Implemented real-time features with WebSocket connections"
    ]
  },
  {
    company: "Digital Agency",
    role: "UI Developer",
    period: "2017 - 2019",
    highlights: [
      "Delivered 20+ client projects with React and Vue.js",
      "Created accessible, responsive interfaces for diverse industries",
      "Collaborated closely with designers to implement pixel-perfect UIs"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 group inline-block">
            Experience
            <span className="block h-1 w-0 group-hover:w-full bg-gradient-to-r from-accent to-secondary transition-all duration-500"></span>
          </h2>
          <p className="text-muted-foreground">
            6+ years building production frontends
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-secondary to-transparent hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="relative sm:pl-12 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-accent shadow-glow hidden sm:block group-hover:scale-150 transition-transform" />

                <div className="liquid-glass p-6 rounded-2xl hover:border-accent/50 transition-all duration-500 hover:translate-x-2 liquid-shimmer">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-accent">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-accent mt-1">→</span>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
