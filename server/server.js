import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import journalRoutes from "./routes/journalRoute.js";  // ✅ exact name

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/journalApp")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Server running fine!");
});

// ✅ Journal routes
app.use("/entries", journalRoutes);  // ✅ make sure this is the same variable name

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
