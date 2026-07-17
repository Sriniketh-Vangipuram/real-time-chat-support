export const SOCKET_EVENTS = {
  // Connection
  CONNECTION: "connection",
  DISCONNECT: "disconnect",

  // Rooms
  JOIN_ROOM: "join-room",
  LEAVE_ROOM: "leave-room",

  // Messages
  SEND_MESSAGE: "send-message",
  RECEIVE_MESSAGE: "receive-message",

  // Presence
  USERS_UPDATED: "users-updated",
  USER_JOINED: "user-joined",
  USER_LEFT: "user-left",

  // Typing
  USER_TYPING: "user-typing",
  USER_STOPPED_TYPING: "user-stopped-typing",

  // Errors
  CHAT_ERROR: "chat-error",

  GET_CHAT_HISTORY: "get-chat-history",

  CHAT_HISTORY: "chat-history",
};