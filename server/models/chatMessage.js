import mongoose, { Schema } from "mongoose";

const chatMessageSchema = new mongoose.Schema({
    sender: {
        type: String,
        enum : ["user" , "ai"],
        required : true
    },

    text : {
        type : String,
        required : true
    },

    userId: {
        type : mongoose.Schema.Types.ObjectId,
        default : "default",
        ref : "User"
    },

    timeStamp : {
        type : Date,
        default : Date.now
    },

    conversationId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Conversation"
    }
});

const chatMessage = mongoose.model("chatMessage", chatMessageSchema);

export default chatMessage;