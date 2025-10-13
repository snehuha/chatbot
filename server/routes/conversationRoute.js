import express from "express";
import Conversation from "../models/Conversation.js";

const router = express.Router();

//create a new conversation
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

//get all conversations of a user
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

//rename a conversation
router.put("/:id", async(req,res)=>{
  try {
    const {id} = req.params;
    const {title} = req.body;

    const updatedConversation = await Conversation.findByIdAndUpdate(
      id,
      { title, updatedAt:Date.now() },
      { new: true }
    );

    if(!updatedConversation){
      return res.status(404).json({error: "Conversation not found"});
    }
    res.json(updatedConversation);
  } catch (error) {
    console.error("Error renaming conversation:", error);
    res.status(500).json({ error: "Failed to rename conversation" });
  }
});

//delete a conversation
router.delete("/:id", async(req,res)=>{
  try{
    const id = req.params.id;
    const deletedConversation = await Conversation.findByIdAndDelete(id);
    if(!deletedConversation){
      return res.status(404).json({error: "Conversation not found"});
    }
    res.json({message: "Conversation deleted successfully"});
  } catch (error) {
    console.error("Error deleting conversation:", error);
    res.status(500).json({ error: "Failed to delete conversation" });
  }
})

export default router;