import { useState } from "react";

import JoinRoomPage from "./pages/JoinRoomPage";
import ChatPage from "./pages/ChatPage";

import type { JoinRoomPayload } from "./types/socket";

function App() {
  const [session, setSession] = useState<JoinRoomPayload | null>(() => {
    const savedSession = localStorage.getItem("chat-session");

    return savedSession
      ? JSON.parse(savedSession)
      : null;
  });

  function handleJoin(
    username: string,
    room: string
  ) {
    const newSession = {
      username,
      room,
    };

    localStorage.setItem(
      "chat-session",
      JSON.stringify(newSession)
    );

    setSession(newSession);
  }

  if (!session) {
    return (
      <JoinRoomPage
        onJoin={handleJoin}
      />
    );
  }

  return (
    <ChatPage
      session={session}
    />
  );
}

export default App;