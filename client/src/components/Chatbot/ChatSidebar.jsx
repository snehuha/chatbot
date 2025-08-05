import React from "react";
import { Search } from "lucide-react";

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
    <div className="h-full flex flex-col bg-sky-300 p-4">
      {/* App Title */}
      <div className="mb-6">
        <div className="bg-pink-100 rounded-lg px-4 py-2 inline-block">
          <h1 className="text-xl font-medium text-gray-800">Luna</h1>
        </div>
      </div>
      
      {/* New Chat Button */}
      <button className="mb-4 flex items-center gap-2 bg-white text-gray-800 px-4 py-3 rounded-lg shadow-sm hover:bg-gray-50 transition-colors border border-gray-200">
        <span className="text-lg">➕</span> 
        New Chat
      </button>
      
      {/* Search Button */}
      <div className="mb-6">
        <button className="w-full flex items-center gap-2 bg-white text-gray-800 px-4 py-3 rounded-lg shadow-sm hover:bg-gray-50 transition-colors border border-gray-200">
          <Search size={16} className="text-gray-500" />
          Search Chats
        </button>
      </div>
      
      {/* Recent Chats */}
      <div className="flex-1 overflow-y-auto">
        <p className="text-sm text-gray-700 mb-3 font-medium">Recents</p>
        <div className="space-y-2">
          {recentChats.map((chat, idx) => (
            <div
              key={idx}
              className="bg-white p-3 rounded-lg shadow-sm text-sm text-gray-800 hover:bg-gray-50 cursor-pointer transition-colors border border-gray-100"
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