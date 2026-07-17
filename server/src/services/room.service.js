import { roomStore } from "../store/room.store.js";
import { analytics } from "../utils/analytics.js";
import { roomValidator } from "../validators/room.validator.js";

const joinRoom = ({ room, socketId, username }) => {
  roomValidator.validateRoom(room);
  roomValidator.validateUsername(username);

  const users = roomStore.addUser({
    room,
    socketId,
    username,
  });

  analytics.trackEvent("User joined chat room");

  return {
    room,
    users,
  };
};

const leaveRoom = (socketId) => {
  const room = roomStore.getRoomBySocketId(socketId);

  if (!room) {
    return null;
  }

  const users = roomStore.removeUser(room, socketId);

  analytics.trackEvent("User left chat room");

  return {
    room,
    users,
  };
};

const getUsers = (room) => {
  return roomStore.getUsers(room);
};

export const roomService = {
  joinRoom,
  leaveRoom,
  getUsers,
};