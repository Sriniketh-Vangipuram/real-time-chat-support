import { SOCKET_EVENTS } from "../constants/socketEvents.js";
import { chatService } from "../services/chat.service.js";
import { roomService } from "../services/room.service.js";
import { logger } from "../utils/logger.js";

const acknowledge = (callback, data) => {
                if (typeof callback === "function") {
                    callback(data);
                }
            };


export const registerChatSocket=(io,socket)=>{

    //join the room
    socket.on(SOCKET_EVENTS.JOIN_ROOM,(payload,callback)=>{

        try{
            const result=roomService.joinRoom({
                room:payload.room,
                socketId:socket.id,
                username:payload.username,
            });

            socket.join(result.room);

            //acknowledge to sender
            acknowledge(callback,{
                success:true,
                room:result.room,
            });

            //Notify others
            socket.to(result.room).emit(
                SOCKET_EVENTS.USER_JOINED,
                {
                    username:payload.username,
                }
            );

            //update everyone
            io.to(result.room).emit(
                SOCKET_EVENTS.USERS_UPDATED,
                result.users
            );
        }
        catch(error){
            acknowledge(callback,{
                success:false,
                code:error.code,
                message:error.message,
            })
        }
    });

    //send message
    socket.on(SOCKET_EVENTS.SEND_MESSAGE,(payload,callback)=>{
        try{
            const chatMessage=chatService.sendMessage(payload);
            
            

            acknowledge(callback,{
                success:true,
            });


            io.to(payload.room).emit(
                SOCKET_EVENTS.RECEIVE_MESSAGE,
                chatMessage
            );
        }catch(error){
            acknowledge(callback,{
                success:false,
                code:error.code,
                message:error.message,
            })
        }
    });

    // User started typing
    socket.on(SOCKET_EVENTS.USER_TYPING,({room,username})=>{
        socket.to(room).emit(
            SOCKET_EVENTS.USER_TYPING,
            {
                username,
            }
        );
    });

    // User stopped typing
    socket.on(SOCKET_EVENTS.USER_STOPPED_TYPING,({room,username})=>{
        socket.to(room).emit(
            SOCKET_EVENTS.USER_STOPPED_TYPING,
            {
                username,
            }
        );
    });

    //Get socket chat history 
    socket.on(SOCKET_EVENTS.GET_CHAT_HISTORY,({room},callback)=>{
        try{
            const messages=chatService.getMessages(room);

            acknowledge(callback,{
                success:true,
                messages,
            });
        }
        catch(error){
             acknowledge(callback,{
                success:false,
                code:error.code,
                message:error.message,
            })
        }
    })

    // Socket got disconnected.
    socket.on(SOCKET_EVENTS.DISCONNECT,()=>{
        logger.info(`Client disconnected: ${socket.id}`);

        const result=roomService.leaveRoom(socket.id);

        if(!result){
            return;
        }

        socket.to(result.room).emit(
            SOCKET_EVENTS.USER_LEFT,
            {
                socketId:socket.id,
            }
        );

        io.to(result.room).emit(
            SOCKET_EVENTS.USERS_UPDATED,
            result.users
        );
    });
};

