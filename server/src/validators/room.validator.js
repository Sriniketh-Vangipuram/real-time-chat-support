import { SocketError } from "../errors/socket.error.js";

const validateRoom = (room) => {
  if (typeof room !== "string" || room.trim().length === 0) {
    throw new SocketError(
      "Room is required.",
      "INVALID_ROOM"
    );
  }
};

const validateUsername = (username) => {
  if (
    typeof username !== "string" ||
    username.trim().length === 0
  ) {
    throw new SocketError(
      "Username is required.",
      "INVALID_USERNAME"
    );
  }
};

export const roomValidator = {
  validateRoom,
  validateUsername,
};