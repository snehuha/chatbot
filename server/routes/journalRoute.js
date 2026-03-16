import express from "express";
import Journal from "../models/journalModel.js";

const router = express.Router();

// ✅ POST new journal entry (user-specific)
router.post("/", async (req, res) => {
  try {
    const { userId, title, content } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }

    const newEntry = new Journal({ userId, title, content });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ GET all journal entries for a user (filtered by userId)
router.get("/", async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: "userId query parameter is required" });
    }

    const entries = await Journal.find({ userId }).sort({ createdAt: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ DELETE a journal entry by id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEntry = await Journal.findByIdAndDelete(id);

    if (!deletedEntry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.json({ message: "Entry deleted successfully", id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
