import { useState } from "react";
import { SendHorizontal } from "lucide-react";

interface MessageInputProps {
  onSend: (message: string) => void;
  onTyping: () => void;
}

function MessageInput({
  onSend,
  onTyping,
}: MessageInputProps) {

  const [message, setMessage] = useState("");

  function handleSend() {

    const trimmed = message.trim();

    if (!trimmed) return;

    onSend(trimmed);

    setMessage("");
  }

  return (
    <div className="border-t border-neutral-200 bg-white p-5">

      <div className="flex gap-4">

        <input
          value={message}
          aria-label="Message"
          placeholder="Type your message..."
          className="flex-1 rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-black"
          onChange={(e) => {
            setMessage(e.target.value);
            onTyping();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSend();
            }
          }}
        />

        <button
          type="button"
          aria-label="Send Message"
          onClick={handleSend}
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white transition hover:bg-neutral-800"
        >
          <SendHorizontal size={20} />
        </button>

      </div>

    </div>
  );
}

export default MessageInput;