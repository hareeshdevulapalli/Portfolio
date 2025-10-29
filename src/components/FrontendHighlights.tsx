import { Code2, Zap, Palette, Shield } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Component Libraries',
    description:
      'Built internal component libraries and design systems that are WCAG AA accessible',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Optimized rendering and state management to improve performance and cut load times',
  },
  {
    icon: Palette,
    title: 'Design Systems',
    description:
      'Created scalable design systems with theming, dark mode, and consistent patterns',
  },
  {
    icon: Shield,
    title: 'Real-time Features',
    description:
      'Implemented real-time UI features with WebSockets and Kafka streams',
  },
];

const FrontendHighlights = () => {
  return (
    <section id="highlights" className="py-16 sm:py-20">
      <div className="space-y-8">
        <div>
          <h2 className="group mb-3 inline-block text-3xl font-bold sm:text-4xl">
            Front-End Engineering Highlights
            <span className="block h-1 w-0 bg-gradient-to-r from-accent to-secondary transition-all duration-500 group-hover:w-full"></span>
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
                className="glass hover:shadow-glow group rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] hover:border-accent/50"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  {highlight.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
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
