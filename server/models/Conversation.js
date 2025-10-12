import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    title: {type: String, default: "New Conversation"},
    userId: {type:  String, ref: "User"},
    createdAt: {type: Date, default: Date.now}
})

export default mongoose.model("Conversation", conversationSchema);