import { useEffect, useRef } from "react";

import MessageBubble from "./MessageBubble";

import type { ChatMessage } from "../../types/socket";

interface MessageListProps {
  messages: ChatMessage[];
  currentUser: string;
}

function MessageList({
  messages,
  currentUser,
}: MessageListProps) {

  const bottomRef =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center">

        <div className="text-center">

          <h3 className="text-lg font-semibold text-neutral-600">
            No messages yet
          </h3>

          <p className="mt-2 text-sm text-neutral-400">
            Start the conversation.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto px-6 py-6">

      {messages.map((message, index) => (

        <MessageBubble
          key={`${message.createdAt}-${index}`}
          message={message}
          isOwnMessage={
            message.username === currentUser
          }
        />

      ))}

      <div ref={bottomRef} />

    </div>
  );
}

export default MessageList;