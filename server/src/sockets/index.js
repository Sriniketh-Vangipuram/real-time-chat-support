import { SOCKET_EVENTS } from "../constants/socketEvents.js";
import {logger} from "../utils/logger.js";
import { registerChatSocket } from "./chat.socket.js";

export const registerSocketHandlers=(io)=>{
    io.on(SOCKET_EVENTS.CONNECTION,(socket)=>{
        logger.info(`Client connected: ${socket.id}`);

        registerChatSocket(io,socket);
    });
};