import express from "express";
import Conversation from "../models/Conversation.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title } = req.body;

    // Hardcoded userId for now (until we add auth)
    const userId = "testUser123";

    const conversation = new Conversation({
      userId,
      title,
    });

    await conversation.save();

    res.status(201).json(conversation);
  } catch (err) {
    console.error("Error creating conversation:", err);
    res.status(500).json({ error: "Failed to create conversation" });
  }
});

router.get("/:userId", async(req,res)=>{
    try {
        const {userId} = req.params;
        console.log("Looking for conversations of userId:", userId);

        const conversations = await Conversation.find({userId}).sort({createdAt: -1});
        console.log("Found conversations:", conversations);

        res.json(conversations);

    } catch (error) {
        console.error("Error fetching conversations, error");
        res.status(500).json({error: "Failed to fetch conversations"})
    }
})

export default router;