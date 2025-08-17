import express from "express";
import { getGeminiReply } from "../utils/gemini.js";

const router = express.Router();

router.post("/" , async(req,res)=>{
    try {
        const { message } = req.body;

        const aiReply = await getGeminiReply(message);
        res.json({reply : aiReply});
    } catch (error) {
        console.error("Error in chat route: ", error);
        res.status(500).json({reply: "Something went wrong on the server"})
    }
})

export default router;