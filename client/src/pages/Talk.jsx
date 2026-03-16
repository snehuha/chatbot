import React, { useState, useEffect } from "react";
import ChatSidebar from "../components/Chatbot/ChatSidebar";
import ChatArea from "../components/Chatbot/ChatArea";
import { getConversations } from "../lib/conversations";

const Talk = () => {
  const [conversations, setConversations] = useState([]);
  const [activeConversationId, setActiveConversationId] = useState(null);

  // Fetch conversations on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getConversations("testUser123"); // temp user
        setConversations(data);

        // Automatically set first conversation as active (if exists)
        if (data.length > 0) {
          setActiveConversationId(data[0]._id);
        }
      } catch (err) {
        console.error("Failed to fetch conversations:", err);
      }
    };

    fetchData();
  }, []);

  // 🔹 Rename conversation (temporary — local only)
  const handleRenameConversation = async (id, newTitle) => {
    setConversations((prev) =>
      prev.map((c) => (c._id === id ? { ...c, title: newTitle } : c))
    );
  };

  // 🔹 Delete conversation (temporary — local only)
  const handleDeleteConversation = async (id) => {
    setConversations((prev) => prev.filter((c) => c._id !== id));
    if (activeConversationId === id) setActiveConversationId(null);
  };


  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <ChatSidebar
        conversations={conversations}
        setConversations={setConversations}
        activeConversationId={activeConversationId}
        setActiveConversationId={setActiveConversationId}
      />

      {/* Chat Area */}
      <div className="flex-1 h-full flex items-center justify-center bg-gray-50">
        {activeConversationId ? (
          <ChatArea activeConversationId={activeConversationId} />
        ) : (
          <div className="text-gray-500 text-lg font-medium">
            Select or start a conversation
          </div>
        )}
      </div>
    </div>
  );
};

export default Talk;
