const messages = new Map();

const saveMessage = (message) => {
  const roomMessages = messages.get(message.room) ?? [];

  roomMessages.push(message);

  messages.set(message.room, roomMessages);

  return message;
};

const getMessages = (room) => {
  return messages.get(room) ?? [];
};

const clear = () => {
  messages.clear();
};

export const chatStore = {
  saveMessage,
  getMessages,
  clear,
};