import { Code2, Zap, Palette, Shield } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Component Libraries",
    description: "Built internal component libraries and design systems that are WCAG AA accessible"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimized rendering and state management to improve performance and cut load times"
  },
  {
    icon: Palette,
    title: "Design Systems",
    description: "Created scalable design systems with theming, dark mode, and consistent patterns"
  },
  {
    icon: Shield,
    title: "Real-time Features",
    description: "Implemented real-time UI features with WebSockets and Kafka streams"
  }
];

const FrontendHighlights = () => {
  return (
    <section id="highlights" className="py-16 sm:py-20">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 group inline-block">
            Front-End Engineering Highlights
            <span className="block h-1 w-0 group-hover:w-full bg-gradient-to-r from-accent to-secondary transition-all duration-500"></span>
          </h2>
          <p className="text-muted-foreground">
            Core competencies in modern frontend development
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={highlight.title}
                className="p-6 rounded-2xl glass hover:border-accent/50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-glow group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FrontendHighlights;
