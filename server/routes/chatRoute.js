import express from "express";
import { getGeminiReply } from "../utils/gemini.js";
import User from "../models/User.js";
import Conversation from "../models/Conversation.js";
import chatMessage from "../models/ChatMessage.js";

const router = express.Router();

router.post("/" , async(req,res)=>{
    try {
        const { message } = req.body;

        if (!message){
            return res.status(400).json({error: "Message is required!"})
        }

        let user = await User.findOne({email: "test@luna.com"})
        if (!user){
            user = await User.create({name: "Test User", email: "test@luna.com"})
        }


        let conversation = await Conversation.findOne({userId: user._id});
        if (!conversation){
            conversation = await Conversation.create({userId: user._id, title: "First chat"})
        }


        //save the user's message
        await chatMessage.create({
            sender: "user",
            text: message,
            conversationId: conversation._id,
            userId: user._id
        })

        const aiReply = await getGeminiReply(message);

        //save ai reply
        await chatMessage.create({
            sender: "ai",
            text: aiReply,
            conversationId: conversation._id,
            userId: user._id
        })
        res.json({reply : aiReply});
    } catch (error) {
        console.error("Error in chat route: ", error);
        res.status(500).json({reply: "Something went wrong on the server"})
    }
})

export default router;