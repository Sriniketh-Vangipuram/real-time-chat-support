import type { ChatMessage } from "../../types/socket";

interface MessageBubbleProps {
  message: ChatMessage;
  isOwnMessage: boolean;
}

function MessageBubble({
  message,
  isOwnMessage,
}: MessageBubbleProps) {
  return (
    <div
      className={`flex mb-4 ${
        isOwnMessage
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-3 shadow-sm ${
          isOwnMessage
            ? "bg-black text-white"
            : "bg-white border border-neutral-200"
        }`}
      >
        <p
          className={`mb-1 text-xs font-semibold ${
            isOwnMessage
              ? "text-neutral-300"
              : "text-neutral-500"
          }`}
        >
          {message.username}
        </p>

        <p className="break-words">
          {message.message}
        </p>

        <p
          className={`mt-2 text-right text-[10px] ${
            isOwnMessage
              ? "text-neutral-400"
              : "text-neutral-400"
          }`}
        >
          {new Date(message.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
}

export default MessageBubble;