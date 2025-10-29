import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useState } from "react";

const starterPrompts = [
  "What's your most complex front-end architecture?",
  "Tell me about performance tuning you've done.",
  "How do you approach accessibility?",
  "Which project are you most proud of?"
];

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIAssistant = ({ isMobile = false }: { isMobile?: boolean }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Alex's AI assistant. Ask me anything about his work, experience, or technical expertise."
    }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(!isMobile);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const responses: Record<string, string> = {
        "architecture": "Alex specializes in micro-frontend architectures and scalable component systems. His most complex project involved building a distributed dashboard platform serving 10K+ daily users with real-time data synchronization.",
        "performance": "Performance is core to Alex's approach. He's reduced load times by up to 60% through code splitting, lazy loading, and intelligent caching strategies. He uses Lighthouse scores and Core Web Vitals as key metrics.",
        "accessibility": "Alex ensures all interfaces meet WCAG AA standards. He tests with screen readers, implements proper ARIA labels, and builds keyboard navigation into every component. Accessibility isn't optional—it's fundamental.",
        "proud": "Alex is most proud of the design system he built that's now used across 15+ products. It reduced development time by 40% and established consistent patterns that improved both developer experience and end-user experience."
      };

      let response = responses["architecture"]; // default
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes("performance") || lowerInput.includes("tuning")) {
        response = responses["performance"];
      } else if (lowerInput.includes("accessibility") || lowerInput.includes("wcag")) {
        response = responses["accessibility"];
      } else if (lowerInput.includes("proud") || lowerInput.includes("favorite")) {
        response = responses["proud"];
      }

      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    }, 800);

    setInput("");
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  if (isMobile && !isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full liquid-glass shadow-glow flex items-center justify-center animate-pulse-slow hover:scale-110 transition-all duration-500 border border-accent/40"
        aria-label="Open AI Assistant"
      >
        <MessageCircle className="w-6 h-6 text-accent" />
      </button>
    );
  }

  const content = (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-accent animate-pulse-slow" />
          <h3 className="font-semibold">Ask my AI</h3>
        </div>
        {isMobile && (
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Close assistant"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-2xl ${
                message.role === "user"
                  ? "bg-accent text-background"
                  : "liquid-glass liquid-shimmer"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}

        {messages.length === 1 && (
          <div className="space-y-2 pt-4">
            <p className="text-xs text-muted-foreground text-center mb-3">
              Try asking:
            </p>
            {starterPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handlePromptClick(prompt)}
                className="w-full text-left p-3 rounded-xl liquid-glass hover:border-accent/50 transition-all duration-500 text-sm liquid-shimmer"
              >
                {prompt}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 border-t border-border/50">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about Alex's work..."
            className="flex-1 px-4 py-2 rounded-xl bg-muted border border-border focus:border-accent focus:outline-none transition-colors"
          />
          <button
            onClick={handleSend}
            className="p-2 rounded-xl bg-accent text-background hover:bg-accent/90 transition-colors"
            aria-label="Send message"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div className="fixed inset-x-0 bottom-0 z-50 h-[70vh] liquid-glass border-t border-accent/30 animate-fade-up">
        {content}
      </div>
    );
  }

  return (
    <aside className="hidden lg:block lg:sticky lg:top-24 h-[calc(100vh-8rem)]">
      <div className="h-full liquid-glass rounded-2xl overflow-hidden border border-accent/20">
        {content}
      </div>
    </aside>
  );
};

export default AIAssistant;
