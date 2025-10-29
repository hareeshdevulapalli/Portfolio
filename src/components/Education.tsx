import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2013 - 2017",
    highlights: [
      "Focus on Human-Computer Interaction and Web Technologies",
      "Senior project: Built accessible web application for campus services",
      "Graduated with Honors (3.8 GPA)"
    ]
  },
  {
    degree: "Frontend Development Certification",
    institution: "freeCodeCamp",
    period: "2016",
    highlights: [
      "Completed 300+ hours of coursework",
      "Built responsive web applications with modern frameworks",
      "Focused on accessibility and performance optimization"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 group inline-block">
            Education
            <span className="block h-1 w-0 group-hover:w-full bg-gradient-to-r from-accent to-secondary transition-all duration-500"></span>
          </h2>
          <p className="text-muted-foreground">
            Academic foundation and continuous learning
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="liquid-glass p-6 rounded-2xl hover:border-accent/50 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-glow group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-110">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-accent">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                </div>

                <ul className="space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent mt-1">→</span>
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
