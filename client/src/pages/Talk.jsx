import React from "react";
import ChatSidebar from "../components/Chatbot/ChatSidebar";
import ChatArea from "../components/Chatbot/ChatArea";


const Talk = () => {
  return (
    <div className="w-full h-screen flex bg-sky-200">
      {/* Left Sidebar */}
      <aside className="w-1/3 max-w-sm border-r border-gray-800">
        <ChatSidebar />
      </aside>
      
      {/* Right Chat Area */}
      <section className="flex-1 relative">
        <ChatArea />
      </section>
    </div>
  );
};


export default Talk;
