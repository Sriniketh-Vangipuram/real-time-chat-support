import {Router} from "express";

const router=Router();

router.get("/",(_req,res)=>{
    res.status(200).json({
        success:true,
        message:"Real-Time Chat Support API is running.",
        timestamp:new Date().toISOString(),
    });
});

export default router;