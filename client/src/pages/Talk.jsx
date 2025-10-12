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

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 border-r border-gray-200">
        <ChatSidebar
          conversations={conversations}
          setConversations={setConversations}
          activeConversationId={activeConversationId}
          setActiveConversationId={setActiveConversationId}
        />
      </div>

      {/* Chat Area */}
      <div className="flex-1">
        {activeConversationId ? (
          <ChatArea activeConversationId={activeConversationId} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-600">
            Select or start a conversation
          </div>
        )}
      </div>
    </div>
  );
};

export default Talk;
