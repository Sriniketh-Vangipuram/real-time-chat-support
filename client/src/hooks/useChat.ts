import { useEffect, useRef, useState } from "react";

import { useSocket } from "./useSocket";

import { SOCKET_EVENTS } from "../socket/socketEvents";

import type {
  ChatMessage,
  JoinRoomPayload,
  SendMessagePayload,
  SocketAck,
  TypingPayload,
  User,
  ChatHistoryResponse,
} from "../types/socket";
import type { JoinRoomResponse } from "../types/socket";

export function useChat(session: JoinRoomPayload) {
  const socket = useSocket();

  const [connected, setConnected] = useState(socket.connected);

  const [users, setUsers] = useState<User[]>([]);

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const [typingUser, setTypingUser] = useState("");

  const typingTimeout = useRef<number>(0);

  useEffect(() => {

    if(!socket.connected){
      socket.connect();
    }
    function onConnect() {
      setConnected(true);
    }

    function onDisconnect() {
      setConnected(false);
    }

    function onUsersUpdated(users: User[]) {
      setUsers(users);
    }

    function onReceiveMessage(message: ChatMessage) {
      setMessages((prev) => [...prev, message]);
    }

    function onTyping(data: { username: string }) {
      setTypingUser(data.username);
    }

    function onStopTyping() {
      setTypingUser("");
    }

    function onUserJoined(data: { username: string }) {
  setMessages((prev) => [
    ...prev,
    {
      room: session.room,
      username: "System",
      message: `${data.username} joined the room.`,
      createdAt: new Date().toISOString(),
    },
  ]);
}

    function onUserLeft(data: { username: string }) {
  setMessages((prev) => [
    ...prev,
    {
      room: session.room,
      username: "System",
      message: `${data.username} left the room.`,
      createdAt: new Date().toISOString(),
    },
  ]);
}



    socket.on("connect", onConnect);

    socket.on("disconnect", onDisconnect);

    socket.on(SOCKET_EVENTS.USERS_UPDATED, onUsersUpdated);

    socket.on(SOCKET_EVENTS.RECEIVE_MESSAGE, onReceiveMessage);

    socket.on(
      SOCKET_EVENTS.USER_JOINED,
      onUserJoined
    );

    socket.on(
      SOCKET_EVENTS.USER_LEFT,
      onUserLeft
    );

    socket.on(SOCKET_EVENTS.USER_TYPING, onTyping);

    socket.on(
      SOCKET_EVENTS.USER_STOPPED_TYPING,
      onStopTyping
    );

    socket.emit(
    SOCKET_EVENTS.JOIN_ROOM,
    {
        username: session.username,
        room: session.room,
    },
    (response: JoinRoomResponse) => {

        if (!response.success) {
            console.error(response.message);
        }

    }
);
    socket.emit(
      SOCKET_EVENTS.GET_CHAT_HISTORY,
      {
        room: session.room,
      },
      (response: ChatHistoryResponse) => {
        if (response.success) {
          setMessages(response.messages);
        }
      }
    );

    return () => {

      socket.off("connect", onConnect);

      socket.off("disconnect", onDisconnect);

      socket.off(
        SOCKET_EVENTS.USERS_UPDATED,
        onUsersUpdated
      );

      socket.off(
        SOCKET_EVENTS.RECEIVE_MESSAGE,
        onReceiveMessage
      );

      socket.off(
        SOCKET_EVENTS.USER_TYPING,
        onTyping
      );

      socket.off(
        SOCKET_EVENTS.USER_STOPPED_TYPING,
        onStopTyping
      );

      socket.off(
        SOCKET_EVENTS.USER_JOINED,
        onUserJoined
      );

      socket.off(
        SOCKET_EVENTS.USER_LEFT,
        onUserLeft
      );

      socket.disconnect();
    };
  }, [socket, session.room,session.username]);

  function sendMessage(message: string) {
    const payload: SendMessagePayload = {
      room: session.room,
      username: session.username,
      message,
    };

    socket.emit(
      SOCKET_EVENTS.SEND_MESSAGE,
      payload,
      (response: SocketAck) => {
        if (!response.success) {
          console.error(response.message);
        }
      }
    );
  }

  function startTyping() {
    const payload: TypingPayload = {
      room: session.room,
      username: session.username,
    };

    socket.emit(
      SOCKET_EVENTS.USER_TYPING,
      payload
    );

    window.clearTimeout(typingTimeout.current);

    typingTimeout.current = window.setTimeout(() => {
      socket.emit(
        SOCKET_EVENTS.USER_STOPPED_TYPING,
        payload
      );
    }, 1000);
  }

  return {
    connected,
    users,
    messages,
    typingUser,
    sendMessage,
    startTyping,
  };
}