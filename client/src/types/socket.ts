export interface JoinRoomPayload {
  username: string;
  room: string;
}

export interface JoinRoomResponse {
  success: boolean;
  room?: string;
  code?: string;
  message?: string;
}

export interface SendMessagePayload {
  room: string;
  username: string;
  message: string;
}

export interface SocketAck {
  success: boolean;
  code?: string;
  message?: string;
}

export interface TypingPayload {
  room: string;
  username: string;
}

export interface ChatHistoryResponse {
  success: boolean;
  messages: ChatMessage[];
  code?: string;
  message?: string;
}

export interface User {
  socketId: string;
  username: string;
}

export interface ChatMessage {
  room: string;
  username: string;
  message: string;
  createdAt: string;
}