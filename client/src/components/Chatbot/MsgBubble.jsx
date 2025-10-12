import React from "react";

const MsgBubble = ({sender, text})=>{
    const isUser = sender === "user";

    return(
        <div className={`flex w-full mb-4 ${isUser ? "justify-end" : "justify-start"}`}>
      {/* AI Avatar - only show for AI messages */}
      {!isUser && (
        <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
          <div className="w-4 h-4 bg-green-600 rounded-full"></div>
        </div>
      )}
      
      {/* Message Content */}
      <div 
        className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl whitespace-pre-wrap shadow-sm ${
          isUser 
            ? "bg-amber-700 text-gray-800 rounded-br-md" 
            : "text-white rounded-bl-md"
        }`}
        style={!isUser ? { backgroundColor: '#79deeb' } : {}}
      >
        <p className="text-sm leading-relaxed">{text}</p>
      </div>
    </div>
    )
};

export default MsgBubble;