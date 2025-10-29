import { useEffect, useState } from 'react';

const badges = [
  'Design Systems',
  'Accessibility (WCAG AA)',
  'Responsive Theming',
  'Dark Mode Support',
  'Micro Frontends',
  'Storybook / Component Docs',
  'TypeScript',
  'Performance Tuning',
  'State Management',
  'Real-time Updates',
];

const UISystemsSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="ui-systems" className="py-16 sm:py-20">
      <div className="space-y-8">
        <div>
          <h2 className="group mb-3 inline-block text-3xl font-bold sm:text-4xl">
            UI Systems & Accessibility
            <span className="block h-1 w-0 bg-gradient-to-r from-accent to-secondary transition-all duration-500 group-hover:w-full"></span>
          </h2>
        </div>

        <div className="overflow-hidden py-8">
          <div
            className={`flex gap-4 ${isPaused ? '' : 'animate-marquee'}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...badges, ...badges].map((badge, index) => (
              <div
                key={`${badge}-${index}`}
                className="glass hover:shadow-glow whitespace-nowrap rounded-full border border-accent/30 px-6 py-3 text-sm font-medium transition-all hover:border-accent"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl space-y-4">
          <p className="leading-relaxed text-muted-foreground">
            Accessibility isn't optional—it's fundamental to good frontend
            engineering. I build interfaces that work for everyone, following
            WCAG AA standards and testing with screen readers, keyboard
            navigation, and assistive technologies.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Clean UI matters in production. Components should be predictable,
            performant, and maintainable. I focus on design systems that scale,
            performance budgets that stick, and code that other engineers can
            understand and extend.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UISystemsSection;
