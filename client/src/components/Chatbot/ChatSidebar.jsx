import React from "react";

const ChatSidebar = ()=> {
    const recentChats = [
    "Today masc said he loves me",
    "I fought with mumma",
    "work is being too stressful",
    "i'm having bad dreams recently",
    "i had an anxiety attack",
    "it was not okay how they treat...",
    "i miss my man so much",
    ]

    return (
        <div>
            {/* App title */}
            <div className="mb-6">
                <h1 className="text-2xl text-gray-800 font-semibold">Luna</h1>
            </div>

            {/*New Chat BUtton*/}
            <button className="mb-4 flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-md shadow hover:bg-gray-100 transition">
                <span>➕</span> New Chat
            </button>

            {/*search bar*/}
            <div>
                <input
                    type="text"
                    placeholder="Search Chats"
                    className="mb-6 px-4 py-2 rounded-md shadow bg-white text-gray-700 placeholder-gray-500 focus:outline-none"
                />
            </div>

            {/*recents*/}
            <div className="flex-1 overflow-y-auto">
                <p className="text-sm text-gray-600 mb-2">Recents</p>

                <div className="space-y-2">
                    {recentChats.map((chat,idx )=>(
                        <div 
                        key = {idx}
                        className="bg-white p-3 rounded-md shadow text-small text-gray-800 hover:bg-gray-100 cursor-pointer transition"
                        >
                            {chat}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );

};

export default ChatSidebar;