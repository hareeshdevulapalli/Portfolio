import { MessageCircle, Send, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
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
      role: 'assistant',
      content:
        "Hi! I'm Hareesh's AI assistant. Ask me anything about his 6+ years of experience as a Senior Full-Stack Software Engineer, his technical expertise, or his projects.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(!isMobile);
  const { starterPrompts, sendMessage } = useMessageService();

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);

    try {
      const response = await sendMessage(input);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setInput('');
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  if (isMobile && !isOpen) {
    return <MobileTriggerButton onClick={() => setIsOpen(true)} />;
  }

  const content = (
    <div className="flex h-full flex-col">
      <AssistantHeader isMobile={isMobile} onClose={() => setIsOpen(false)} />
      <MessageList
        messages={messages}
        starterPrompts={starterPrompts}
        onPromptClick={handlePromptClick}
      />
      <MessageInput input={input} setInput={setInput} onSend={handleSend} />
    </div>
  );

  if (isMobile) {
    return (
      <div className="glass animate-fade-up fixed inset-x-0 bottom-0 z-50 h-[70vh] border-t border-border/50">
        {content}
      </div>
    );
  }

  return (
    <aside className="hidden h-[calc(100vh-8rem)] lg:sticky lg:top-24 lg:block">
      <div className="glass h-full overflow-hidden rounded-2xl">{content}</div>
    </aside>
  );
};

// Single Responsibility: Mobile trigger button
const MobileTriggerButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="shadow-glow animate-pulse-slow fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-secondary transition-transform hover:scale-110"
    aria-label="Open AI Assistant"
  >
    <MessageCircle className="h-6 w-6 text-background" />
  </button>
);

// Single Responsibility: Assistant header
const AssistantHeader = ({
  isMobile,
  onClose,
}: {
  isMobile: boolean;
  onClose: () => void;
}) => (
  <div className="flex items-center justify-between border-b border-border/50 p-4">
    <div className="flex items-center gap-2">
      <Sparkles className="animate-pulse-slow h-5 w-5 text-accent" />
      <h3 className="font-semibold">Ask my AI</h3>
    </div>
    {isMobile && (
      <button
        onClick={onClose}
        className="rounded-lg p-2 transition-colors hover:bg-muted"
        aria-label="Close assistant"
      >
        <X className="h-5 w-5" />
      </button>
    )}
  </div>
);

// Single Responsibility: Message list
const MessageList = ({
  messages,
  starterPrompts,
  onPromptClick,
}: {
  messages: Message[];
  starterPrompts: string[];
  onPromptClick: (prompt: string) => void;
}) => (
  <div className="flex-1 space-y-4 overflow-y-auto p-4">
    {messages.map(message => (
      <MessageBubble key={message.id} message={message} />
    ))}

    {messages.length === 1 && (
      <StarterPrompts prompts={starterPrompts} onPromptClick={onPromptClick} />
    )}
  </div>
);

// Single Responsibility: Individual message bubble
const MessageBubble = ({ message }: { message: Message }) => (
  <div
    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
  >
    <div
      className={`max-w-[85%] rounded-2xl p-3 ${
        message.role === 'user' ? 'bg-accent text-background' : 'glass'
      }`}
    >
      <p className="text-sm leading-relaxed">{message.content}</p>
    </div>
  </div>
);

// Single Responsibility: Starter prompts
const StarterPrompts = ({
  prompts,
  onPromptClick,
}: {
  prompts: string[];
  onPromptClick: (prompt: string) => void;
}) => (
  <div className="space-y-2 pt-4">
    <p className="mb-3 text-center text-xs text-muted-foreground">
      Try asking:
    </p>
    {prompts.map(prompt => (
      <button
        key={prompt}
        onClick={() => onPromptClick(prompt)}
        className="glass w-full rounded-xl p-3 text-left text-sm transition-all hover:border-accent/50"
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
  onSend,
}: {
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
}) => (
  <div className="border-t border-border/50 p-4">
    <div className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && onSend()}
        placeholder="Ask about Hareesh's work..."
        className="flex-1 rounded-xl border border-border bg-muted px-4 py-2 transition-colors focus:border-accent focus:outline-none"
      />
      <button
        onClick={onSend}
        className="rounded-xl bg-accent p-2 text-background transition-colors hover:bg-accent/90"
        aria-label="Send message"
      >
        <Send className="h-5 w-5" />
      </button>
    </div>
  </div>
);
