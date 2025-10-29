import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Message } from '@/domain/entities';
import { useMessageService } from '@/presentation/hooks/use-data';

interface AIAssistantProps {
  isMobile?: boolean;
}

// Single Responsibility: This component handles AI assistant functionality
export const AIAssistant = ({ isMobile = false }: AIAssistantProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: "assistant",
      content: "Hi! I'm Hareesh's AI assistant. Ask me anything about his work, experience, or technical expertise.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(!isMobile);
  const { starterPrompts, sendMessage } = useMessageService();

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { 
      id: Date.now().toString(),
      role: "user", 
      content: input,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    try {
      const response = await sendMessage(input);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setInput("");
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  if (isMobile && !isOpen) {
    return <MobileTriggerButton onClick={() => setIsOpen(true)} />;
  }

  const content = (
    <div className="flex flex-col h-full">
      <AssistantHeader isMobile={isMobile} onClose={() => setIsOpen(false)} />
      <MessageList messages={messages} starterPrompts={starterPrompts} onPromptClick={handlePromptClick} />
      <MessageInput input={input} setInput={setInput} onSend={handleSend} />
    </div>
  );

  if (isMobile) {
    return (
      <div className="fixed inset-x-0 bottom-0 z-50 h-[70vh] glass border-t border-border/50 animate-fade-up">
        {content}
      </div>
    );
  }

  return (
    <aside className="hidden lg:block lg:sticky lg:top-24 h-[calc(100vh-8rem)]">
      <div className="h-full glass rounded-2xl overflow-hidden">
        {content}
      </div>
    </aside>
  );
};

// Single Responsibility: Mobile trigger button
const MobileTriggerButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-accent to-secondary shadow-glow flex items-center justify-center animate-pulse-slow hover:scale-110 transition-transform"
    aria-label="Open AI Assistant"
  >
    <MessageCircle className="w-6 h-6 text-background" />
  </button>
);

// Single Responsibility: Assistant header
const AssistantHeader = ({ isMobile, onClose }: { isMobile: boolean; onClose: () => void }) => (
  <div className="p-4 border-b border-border/50 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Sparkles className="w-5 h-5 text-accent animate-pulse-slow" />
      <h3 className="font-semibold">Ask my AI</h3>
    </div>
    {isMobile && (
      <button
        onClick={onClose}
        className="p-2 rounded-lg hover:bg-muted transition-colors"
        aria-label="Close assistant"
      >
        <X className="w-5 h-5" />
      </button>
    )}
  </div>
);

// Single Responsibility: Message list
const MessageList = ({ 
  messages, 
  starterPrompts, 
  onPromptClick 
}: { 
  messages: Message[]; 
  starterPrompts: string[];
  onPromptClick: (prompt: string) => void;
}) => (
  <div className="flex-1 overflow-y-auto p-4 space-y-4">
    {messages.map((message) => (
      <MessageBubble key={message.id} message={message} />
    ))}

    {messages.length === 1 && (
      <StarterPrompts prompts={starterPrompts} onPromptClick={onPromptClick} />
    )}
  </div>
);

// Single Responsibility: Individual message bubble
const MessageBubble = ({ message }: { message: Message }) => (
  <div className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
    <div
      className={`max-w-[85%] p-3 rounded-2xl ${
        message.role === "user"
          ? "bg-accent text-background"
          : "glass"
      }`}
    >
      <p className="text-sm leading-relaxed">{message.content}</p>
    </div>
  </div>
);

// Single Responsibility: Starter prompts
const StarterPrompts = ({ 
  prompts, 
  onPromptClick 
}: { 
  prompts: string[];
  onPromptClick: (prompt: string) => void;
}) => (
  <div className="space-y-2 pt-4">
    <p className="text-xs text-muted-foreground text-center mb-3">
      Try asking:
    </p>
    {prompts.map((prompt) => (
      <button
        key={prompt}
        onClick={() => onPromptClick(prompt)}
        className="w-full text-left p-3 rounded-xl glass hover:border-accent/50 transition-all text-sm"
      >
        {prompt}
      </button>
    ))}
  </div>
);

// Single Responsibility: Message input
const MessageInput = ({ 
  input, 
  setInput, 
  onSend 
}: { 
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
}) => (
  <div className="p-4 border-t border-border/50">
    <div className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && onSend()}
            placeholder="Ask about Hareesh's work..."
        className="flex-1 px-4 py-2 rounded-xl bg-muted border border-border focus:border-accent focus:outline-none transition-colors"
      />
      <button
        onClick={onSend}
        className="p-2 rounded-xl bg-accent text-background hover:bg-accent/90 transition-colors"
        aria-label="Send message"
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  </div>
);
