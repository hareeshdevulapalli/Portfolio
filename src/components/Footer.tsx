import { Mail, Github, Linkedin } from "lucide-react";
import { config } from "@/infrastructure/config/configuration";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-muted-foreground max-w-2xl">
            Building scalable, accessible applications with React, Angular, Node.js, NestJS, 
            and modern web architecture.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${config.getEmail()}`}
              className="p-3 rounded-full bg-muted hover:bg-accent/10 transition-all hover:scale-110 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
            <a
              href={config.getLinkedIn()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-accent/10 transition-all hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
            <a
              href={config.getGitHub()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-accent/10 transition-all hover:scale-110 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
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
