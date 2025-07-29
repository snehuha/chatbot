import React, { useState, useEffect, useRef } from "react";

import InputField from "./InputField";
import MsgBubble from "./MsgBubble";
import { fetchGeminiResponse } from "../../lib/gemini";

const ChatArea = () => {
    const [messages, setMessages] = useState([{
            sender: "ai", text: "Hi Cherry, how are you doing?"
        }]);

    const [isTyping, setIsTyping] = useState(false); 

    const handleUserMessage = async (msg)=> {

        // Add user's mesage
        const newMessages = [...messages, {sender: "user", text: msg}]
        setMessages(newMessages);

        //add loading feedback
        setIsTyping(true);
        const bottomRef = useRef(null);

        useEffect(()=>{
            bottomRef.current?.scrollIntoView({behavior: "smooth"});
        }, [messages]);

        try{
                //call gemini
            const aiResponse = await fetchGeminiResponse(msg);

            //add gemini response to the chat
            setMessages([...newMessages, {sender: "ai", text: aiResponse}]);

        } catch (err){
            setMessages([...newMessages, {sender: "ai", text: "Sorry something went wrong"}]);
        } finally{
            setIsTyping(false);
        }

        

    };


    return(
        <div className="relative flex flex-col h-full justify-center items-center text-center px-4">
            {/* Plan Badge*/}
            <div className="absolute top-4 right-6 text-sm bg-white text-gray-800 px-3 py-1 rounded-full shadow">
                Free Plan. <span className="underline cursor-pointer">Upgrade</span>
            </div>

            {/* Messages list */}
            <div className="flex-1 overflow-y-auto max-w-2xl mx-auto mb-6 px-2">
                {messages.map((msg,idx) => ( 
                    <MsgBubble key={idx} sender={msg.sender} text={msg.text}/>
                ))}

                 {/* typing indicator */}

            {isTyping && (
                <MsgBubble
                    sender = "ai"
                    text = "Luna is typing"
                />
            )}

            {/* 🔽 Scroll Target */}
            <div ref={bottomRef} />

            </div>

           
            {/* input*/}
            <div className="w-full max-w-2xl mx-auto">
                <InputField onSend={handleUserMessage} />
            </div>
        </div>
    )
};

export default ChatArea;