import {v4 as uuid} from "uuid";

export const createMessage=({
    room,
    username,
    message,
})=>{
    return {
        id:uuid(),
        room,
        username,
        message,
        createdAt:new Date().toISOString(),
    };
};

export const messageFactory={
    createMessage,
}