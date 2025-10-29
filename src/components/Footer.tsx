import { Mail, Github, Linkedin } from 'lucide-react';
import { config } from '@/infrastructure/config/configuration';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl text-muted-foreground">
            Building scalable, accessible applications with React, Angular,
            Node.js, NestJS, and modern web architecture.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${config.getEmail()}`}
              className="group rounded-full bg-muted p-3 transition-all hover:scale-110 hover:bg-accent/10"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
            </a>
            <a
              href={config.getLinkedIn()}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-muted p-3 transition-all hover:scale-110 hover:bg-accent/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
            </a>
            <a
              href={config.getGitHub()}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-muted p-3 transition-all hover:scale-110 hover:bg-accent/10"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            Let's build something reliable and beautiful.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
