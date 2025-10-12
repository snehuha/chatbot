import React, { useEffect } from "react";
import { Search } from "lucide-react";
import { getConversations, createConversations } from "../../lib/conversations";

const ChatSidebar = ({
  conversations,
  setConversations,
  activeConversationId,
  setActiveConversationId,
}) => {
  // Fetch conversations on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getConversations("testUser123"); // later: replace with real userId
        setConversations(data);
      } catch (err) {
        console.error("Failed to fetch conversations:", err);
      }
    };
    fetchData();
  }, [setConversations]);

  // Create new conversation
  const handleNewChat = async () => {
    try {
      const newConv = await createConversations("testUser123"); // API call
      setConversations([newConv, ...conversations]);
      setActiveConversationId(newConv._id); // set active immediately
    } catch (err) {
      console.error("Failed to create new conversation:", err);
    }
  };

  return (
    <div className="h-full flex flex-col bg-sky-300 p-4">
      {/* App Title */}
      <div className="mb-6">
        <div className="bg-pink-100 rounded-lg px-4 py-2 inline-block">
          <h1 className="text-xl font-medium text-gray-800" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 'bold' }}>
           Luna
          </h1>

        </div>
      </div>

      {/* New Chat Button */}
      <button
        onClick={handleNewChat}
        className="mb-4 flex items-center gap-2 bg-white text-gray-800 px-4 py-3 rounded-lg shadow-sm hover:bg-gray-50 transition-colors border border-gray-200"
      >
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
          {conversations.length === 0 ? (
            <p className="text-sm text-gray-600">No conversations yet</p>
          ) : (
            conversations.map((conv) => (
              <div
                key={conv._id}
                onClick={() => setActiveConversationId(conv._id)}
                className={`p-3 rounded-lg shadow-sm text-sm cursor-pointer transition-colors border ${
                  activeConversationId === conv._id
                    ? "bg-pink-100 text-gray-900 border-gray-300"
                    : "bg-white text-gray-800 hover:bg-gray-50 border-gray-100"
                }`}
              >
                {conv.title}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
