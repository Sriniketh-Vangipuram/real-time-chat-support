import { createContext } from "react";
import { socket } from "../socket/socket";

export interface SocketContextType {
  socket: typeof socket;
}

export const SocketContext = createContext<SocketContextType | null>(null);