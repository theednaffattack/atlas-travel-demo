export interface MessageBody {
  id: string;
  title?: string;
  messageText: string;
  timestamp: any;
}

export interface MessageThreadProperties {
  active: boolean;
  avatar: string;
  id: string;
  handleSelectMessageThread: any;
  userId: string;
  messageIndex: number;
  messages: MessageBody[];
  name: string;
}
