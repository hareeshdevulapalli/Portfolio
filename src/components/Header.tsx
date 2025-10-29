import { Mail, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { config } from "@/infrastructure/config/configuration";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? "liquid-glass shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            <span className="text-gradient">{config.getName()}</span>
          </h1>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`mailto:${config.getEmail()}`}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-muted hover:bg-accent/10 transition-all hover:scale-105 group"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
              <span className="hidden sm:inline text-sm text-muted-foreground group-hover:text-accent transition-colors">
                Email
              </span>
            </a>
            <a
              href={config.getLinkedIn()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-muted hover:bg-accent/10 transition-all hover:scale-105 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
              <span className="hidden sm:inline text-sm text-muted-foreground group-hover:text-accent transition-colors">
                LinkedIn
              </span>
            </a>
            <a
              href={config.getGitHub()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-muted hover:bg-accent/10 transition-all hover:scale-105 group"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
              <span className="hidden sm:inline text-sm text-muted-foreground group-hover:text-accent transition-colors">
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
