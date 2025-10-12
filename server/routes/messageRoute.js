// backend/routes/messageRoute.js

import express from "express";
import ChatMessage from "../models/ChatMessage.js";
import Conversation from "../models/Conversation.js";

const router = express.Router();

// GET all messages for a conversation
router.get("/:conversationId", async (req, res) => {
  try {
    const { conversationId } = req.params;

    const messages = await ChatMessage.find({ conversationId }).sort({
      timeStamp: 1, // oldest → newest
    });

    res.json(messages);
  } catch (err) {
    console.error("Error fetching messages:", err);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// POST a new message
router.post("/", async (req, res) => {
  try {
    const { conversationId, sender, text, userId } = req.body;

    if (!conversationId || !sender || !text) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // make sure conversation exists
    const conversation = await Conversation.findById(conversationId);
    if (!conversation) {
      return res.status(404).json({ error: "Conversation not found" });
    }

    // create and save new message
    const newMessage = new ChatMessage({
      conversationId,
      sender,
      text,
      userId: userId || null,
    });

    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).json({ error: "Failed to save message" });
  }
});

export default router;
