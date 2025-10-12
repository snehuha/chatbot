import { useState } from "react";
import {Mic, Send} from "lucide-react"

const InputField = ({onSend})=>{
    const [message, setMessage] = useState("");

    const handleSend = ()=>{
        if (message.trim()==="") return;
        onSend(message);
        setMessage("");
    };

    const handleKeyDown = (e)=>{
        if (e.key === "Enter"){
            e.preventDefault();
            handleSend();
        }
    };


    return (
        <div className="flex items-center bg-white rounded-xl shadow-lg p-4 border border-gray-300">
      {/* Mic Icon */}
      <button className="text-gray-400 mr-3 p-1 hover:bg-gray-100 rounded-full transition-colors">
        <Mic size={20} strokeWidth={1.8} />
      </button>
      
      {/* Input Field */}
      <input
        type="text"
        className="flex-1 outline-none text-gray-800 placeholder-gray-500 bg-transparent text-sm"
        placeholder="Tell me how was your day"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      
      {/* Send Icon */}
      <button
        onClick={handleSend}
        className="ml-2 p-2 hover:bg-blue-50 rounded-full transition-colors"
        disabled={!message.trim()}
      >
        <Send 
          className={`${message.trim() ? 'text-blue-500' : 'text-gray-300'}`} 
          size={20} 
          strokeWidth={1.8}
        />
      </button>
    </div>
    );
};

export default InputField;