import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import chatMessage from "./models/chatMessage.js"
import router from "./routes/chatRoute.js"
import conversationRoute from "./routes/conversationRoute.js"

dotenv.config()

const app = express()
const dbName = "Luna";
const PORT = process.env.PORT;

//middle wires
app.use(cors());
app.use(express.json());
app.use("/api/chat" , router);
app.use("/api/conversations", conversationRoute);


//test route
app.get("/", (req, res)=>{
    res.send("server is running")
})

//mongodb connection
;( async ()=>{
    try {

        if (mongoose.connection.readyState === 0){
            await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`);

            console.log("mongodb is connected")
        }
        

       
       
    } catch (error) {
        console.error("error: ", error);
        process.exit(1);
    }
})().then(()=>{
    app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
    });
})

// temporary test route
app.post("/api/test-save" , async (req,res)=>{
    try {
        const newMessage = new chatMessage({
            sender : "user",
            text : "hello from test route"
        })
        await newMessage.save();
        res.json({success : true , message : "saved to mongodb"})
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({success : false, error: error.message});
    }
})