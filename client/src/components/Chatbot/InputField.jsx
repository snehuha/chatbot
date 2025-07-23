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
        <div>
            {/*Mic Icon*/}
            <Mic className="text-gray-400 mr-3" size={20} strokeWidth={1.8}/>


            {/*Input Field*/}
            <input
            type="text"
            className="flex-1 outline-none text-gray-800 placeholder-gray-500 bg-transparent"
            placeholder="Type something you feel..."
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
            onKeyDown={handleKeyDown()}

            />
            {/*Send icon*/}
            <button onClick={handleSend}>
                <Send className="text-blue-500 ml-3" size={20} strokeWidth={1.8}
                />

            </button>


        </div>
    );
};

export default InputField;