import React from "react";
import {Avocado} from "lucide-react";
import InputField from "./InputField";

const ChatArea = () => {
    const handleUserMessage = (msg)=> {
        console.log("user said: " , msg);
    }
    return(
        <div className="relative flex flex-col h-full justify-center items-center text-center px-4">
            {/* Plan Badge*/}
            <div className="absolute top-4 right-6 text-sm bg-white text-gray-800 px-3 py-1 rounded-full shadow">
                Free Plan. <span className="underline cursor-pointer">Upgrade</span>
            </div>

            {/* icon */}
                <div className="mb-6 text-blue-600 text-4xl">
                    <Avocado/>
                </div>
            {/* greeting*/}
                <h2 className="text-2xl text-gray-800 font-semibold mb-4">
                    Hi Cherry, How are you doing?
                </h2>
            {/*micdrop style input*/}
                <div className="bg-white w-full max-w-xl py-4 px-6 rounded-2xl shadow-md border border-gray-300 text-gray-700">
                    <p className="text-base text-left">Say something you feel...</p>
                </div>
        </div>
    )
};

export default ChatArea;