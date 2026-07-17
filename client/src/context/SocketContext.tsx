import type {ReactNode} from "react";
import { SocketContext } from "./SocketProvider";
import {socket} from "../socket/socket";


interface Props{
    children:ReactNode;
}

export function SocketProvider({
    children,
}:Props){
    return(
        <SocketContext.Provider value={{socket,}}>
            {children}
        </SocketContext.Provider>
    )
};

