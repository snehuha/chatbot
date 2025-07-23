import React from "react";

const MsgBubble = ({sender, text})=>{
    const isUser = sender === "user";

    return(
        <div className={`flex ${isUser? "justify-end" : "justify-start"} w-full mb-2`}>
            <div className={`max-w-xs md:max-w-md px-4 py-2 rounded-xl text-sm whitespace-pre-wrap 
            ${isUser? "bg-blue-500 text-white rounded-br-none"
            :"bg-white text-gray-800 rounded-bl-none shadow"
            }`
                }>
                {text}
            </div>
        </div>
    )
};

export default MsgBubble;