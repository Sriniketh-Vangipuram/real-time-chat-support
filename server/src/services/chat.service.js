import { chatStore } from "../store/chat.store.js";
import { analytics } from "../utils/analytics.js";
import { messageFactory } from "../utils/createMessage.js";
import { messageSanitizer } from "../utils/sanitizeMessage.js";
import { messageValidator } from "../validators/message.validator.js";

const sendMessage = (payload) => {
  messageValidator.validateMessagePayload(payload);

  const sanitizedContent = messageSanitizer.sanitizeMessage(payload.message);

  messageValidator.validateSanitizedMessage(sanitizedContent);

  const chatMessage = messageFactory.createMessage({
    room: payload.room,
    username: payload.username,
    message: sanitizedContent,
  });

  chatStore.saveMessage(chatMessage);

  analytics.trackEvent("User sent a message");

  return chatMessage;
};

const getMessages=(room)=>{
  return chatStore.getMessages(room);
}
export const chatService = {
  sendMessage,
  getMessages,
};