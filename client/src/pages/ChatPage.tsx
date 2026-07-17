import ChatHeader from "../components/chat/ChatHeader";
import ChatSidebar from "../components/chat/ChatSidebar";
import MessageInput from "../components/chat/MessageInput";
import MessageList from "../components/chat/MessageList";
import TypingIndicator from "../components/chat/TypingIndicator";

import { useChat } from "../hooks/useChat";

import type { JoinRoomPayload } from "../types/socket";

interface ChatPageProps {
  session: JoinRoomPayload;
}

function ChatPage({
  session,
}: ChatPageProps) {
  const {
    connected,
    users,
    messages,
    typingUser,
    sendMessage,
    startTyping,
  } = useChat(session);

  return (
    <main className="h-screen bg-neutral-100">

      <div className="mx-auto flex h-full max-w-7xl flex-col bg-white shadow-xl">

        <ChatHeader connected={connected} />

        <div className="flex flex-1 overflow-hidden">

          <ChatSidebar users={users} />

          <section className="flex flex-1 flex-col">

            <MessageList
              messages={messages}
              currentUser={session.username}
            />

            <TypingIndicator
              username={typingUser}
            />

            <MessageInput
              onSend={sendMessage}
              onTyping={startTyping}
            />

          </section>

        </div>

      </div>

    </main>
  );
}

export default ChatPage;