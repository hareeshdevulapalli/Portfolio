import { Message } from '@/domain/entities';
import { MessageService } from '@/domain/interfaces';

export class SendMessageUseCase {
  constructor(private messageService: MessageService) {}

  async execute(message: string): Promise<string> {
    return this.messageService.sendMessage(message);
  }
}

export class GetStarterPromptsUseCase {
  constructor(private messageService: MessageService) {}

  execute(): string[] {
    return this.messageService.getStarterPrompts();
  }
}
