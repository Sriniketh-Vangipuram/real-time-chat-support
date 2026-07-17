import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import {env} from "./config/env.js";
import healthRoutes from "./routes/health.routes.js";

const app = express();

app.use(helmet());
app.use(
    cors({
        origin:env.CLIENT_URL,
        credentials:true,
    })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/health",healthRoutes);


app.use((req,res)=>{
    res.status(404).json({
        success:false,
        message:`Route ${req.originalUrl} not found.`,
    });
});

export default app;