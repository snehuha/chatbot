import express from "express";
import Journal from "../models/journalModel.js";

const router = express.Router();

// ✅ POST new journal entry
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    const newEntry = new Journal({ title, content });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ GET all journal entries
router.get("/", async (req, res) => {
  try {
    const entries = await Journal.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
