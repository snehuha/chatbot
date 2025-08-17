import mongoose from "mongoose";

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

    sessionId: {
        type : String,
        default : "default"
    },

    timeStamp : {
        type : Date,
        default : Date.now
    }
});

const chatMessage = mongoose.model("chatMessage", chatMessageSchema);

export default chatMessage;