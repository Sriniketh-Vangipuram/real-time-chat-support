export interface User {
  socketId: string;
  username: string;
}

export interface ChatMessage {
  id?: string;
  room: string;
  username: string;
  message: string;
  createdAt: string;
}

export interface ChatSession {
  username: string;
  room: string;
}