import { SocketError } from "../errors/socket.error.js";

const validateMessagePayload = (payload) => {
  if (!payload) {
    throw new SocketError(
      "Message payload is required.",
      "INVALID_PAYLOAD"
    );
  }

  const { room, username, message } = payload;

  if (!room || typeof room !== "string") {
    throw new SocketError(
      "Room is required.",
      "INVALID_ROOM"
    );
  }

  if (!username || typeof username !== "string") {
    throw new SocketError(
      "Username is required.",
      "INVALID_USERNAME"
    );
  }

  if (!message || typeof message !== "string") {
    throw new SocketError(
      "Message is required.",
      "INVALID_MESSAGE"
    );
  }
};

const validateSanitizedMessage = (message) => {
  if (!message) {
    throw new SocketError(
      "Message cannot be empty.",
      "EMPTY_MESSAGE"
    );
  }
};

export const messageValidator = {
  validateMessagePayload,
  validateSanitizedMessage,
};