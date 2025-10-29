import { MessageService } from '@/domain/entities';

export class InMemoryMessageService implements MessageService {
  private responses: Record<string, string> = {
    "architecture": "Hareesh is a Senior Full-Stack Software Engineer with 6+ years of experience specializing in React, Angular, Node.js, and NestJS. His most complex project involved building WCAG-compliant real-time collaboration tools across three products with WebSocket integration and Spring Boot + Kotlin backend.",
    "performance": "Performance is core to Hareesh's approach as a Senior Engineer. He's reduced client-side complexity by 40%, improved load times by 70%, and optimized Google Maps API calculations from 7 to 3 seconds using Web Workers. He focuses on critical path rendering and efficient state management.",
    "accessibility": "Hareesh ensures all interfaces meet WCAG AA standards. He developed and launched WCAG-compliant real-time collaboration tools across three products, implementing proper ARIA labels, keyboard navigation, and screen reader support. Accessibility isn't optional—it's fundamental.",
    "proud": "Hareesh is most proud of the real-time collaboration tools he built at Group 1001. The system enables teams to communicate asynchronously within applications, reducing reliance on external channels and improving team productivity through WebSocket-powered real-time features."
  };

  private starterPrompts = [
    "What's your most complex full-stack architecture?",
    "Tell me about performance optimization you've done.",
    "How do you approach accessibility in your applications?",
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
