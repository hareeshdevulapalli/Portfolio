import { MessageService } from '@/domain/entities';

export class InMemoryMessageService implements MessageService {
  private responses: Record<string, string> = {
    "architecture": "Alex specializes in micro-frontend architectures and scalable component systems. His most complex project involved building a distributed dashboard platform serving 10K+ daily users with real-time data synchronization.",
    "performance": "Performance is core to Alex's approach. He's reduced load times by up to 60% through code splitting, lazy loading, and intelligent caching strategies. He uses Lighthouse scores and Core Web Vitals as key metrics.",
    "accessibility": "Alex ensures all interfaces meet WCAG AA standards. He tests with screen readers, implements proper ARIA labels, and builds keyboard navigation into every component. Accessibility isn't optional—it's fundamental.",
    "proud": "Alex is most proud of the design system he built that's now used across 15+ products. It reduced development time by 40% and established consistent patterns that improved both developer experience and end-user experience."
  };

  private starterPrompts = [
    "What's your most complex front-end architecture?",
    "Tell me about performance tuning you've done.",
    "How do you approach accessibility?",
    "Which project are you most proud of?"
  ];

  async sendMessage(message: string): Promise<string> {
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const lowerInput = message.toLowerCase();
    let response = this.responses["architecture"]; // default
    
    if (lowerInput.includes("performance") || lowerInput.includes("tuning")) {
      response = this.responses["performance"];
    } else if (lowerInput.includes("accessibility") || lowerInput.includes("wcag")) {
      response = this.responses["accessibility"];
    } else if (lowerInput.includes("proud") || lowerInput.includes("favorite")) {
      response = this.responses["proud"];
    }
    
    return response;
  }

  getStarterPrompts(): string[] {
    return [...this.starterPrompts];
  }
}
