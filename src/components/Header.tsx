import { Mail, Github, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { config } from '@/infrastructure/config/configuration';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'liquid-glass shadow-lg' : ''
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            <span className="text-gradient">{config.getName()}</span>
          </h1>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`mailto:${config.getEmail()}`}
              className="group flex items-center gap-2 rounded-full bg-muted px-3 py-2 transition-all hover:scale-105 hover:bg-accent/10 sm:px-4"
              aria-label="Email"
            >
              <Mail className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
              <span className="hidden text-sm text-muted-foreground transition-colors group-hover:text-accent sm:inline">
                Email
              </span>
            </a>
            <a
              href={config.getLinkedIn()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-muted px-3 py-2 transition-all hover:scale-105 hover:bg-accent/10 sm:px-4"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
              <span className="hidden text-sm text-muted-foreground transition-colors group-hover:text-accent sm:inline">
                LinkedIn
              </span>
            </a>
            <a
              href={config.getGitHub()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-muted px-3 py-2 transition-all hover:scale-105 hover:bg-accent/10 sm:px-4"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
              <span className="hidden text-sm text-muted-foreground transition-colors group-hover:text-accent sm:inline">
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
