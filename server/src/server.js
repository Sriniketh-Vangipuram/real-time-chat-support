import app from "./app.js";
import {Server} from "socket.io";
import http from "http";

import {env} from "./config/env.js";
import {logger} from "./utils/logger.js";
import { registerSocketHandlers } from "./sockets/index.js";


const httpServer=http.createServer(app);

const io=new Server(httpServer,{
    cors:{
        origin:env.CLIENT_URL,
        credentials:true,
    },
});

registerSocketHandlers(io);

httpServer.listen(env.PORT,()=>{
    logger.info(`Server running on http://localhost:${env.PORT}`);
});

//Graceful Shutdown
process.on("SIGINT",()=>{
    logger.info("Gracefully shutting down...");

    io.close(()=>{
        httpServer.close(()=>{
            logger.info("Server stopped.");
            process.exit(0);
        });
    });
})