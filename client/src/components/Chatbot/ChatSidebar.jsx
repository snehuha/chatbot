import React, { useState, useEffect } from "react";
import { Search, MoreVertical, Trash2, Edit2, Check, X } from "lucide-react";
import { getConversations, createConversations, renameConversation, deleteConversation } from "../../lib/conversations";
import { motion, AnimatePresence } from "framer-motion";


const ChatSidebar = ({
  conversations,
  setConversations,
  activeConversationId,
  setActiveConversationId

}) => {
  const [menuOpenId, setMenuOpenId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [editedTitle, setEditedTitle] = useState("");

  // Fetch conversations on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getConversations("testUser123"); // temporary userId
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
      setActiveConversationId(newConv._id); // activate immediately
    } catch (err) {
      console.error("Failed to create new conversation:", err);
    }
  };

// Rename a conversation
  const handleRename = async (id, title) => {
    if (!title.trim()) return;
    try {
      const updated = await renameConversation(id, title);
      setConversations((prev) =>
        prev.map((conv) => (conv._id === id ? updated : conv))
      );
      setEditingId(null);
      setNewTitle("");
    } catch (err) {
      console.error("Failed to rename conversation:", err);
    }
  };

  // Delete a conversation
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this chat?")) return;
    try {
      await deleteConversation(id);
      setConversations((prev) => prev.filter((conv) => conv._id !== id));
      if (activeConversationId === id) setActiveConversationId(null);
    } catch (err) {
      console.error("Failed to delete conversation:", err);
    }
  };

  return (
    <div className="h-full flex flex-col bg-sky-300 p-4">
      {/* App Title */}
      <div className="mb-6">
        <div className="bg-pink-100 rounded-lg px-4 py-2 inline-block">
          <h1
            className="text-xl font-medium text-gray-800"
            style={{ fontFamily: "'DM Serif Display', serif", fontWeight: "bold" }}
          >
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
            <AnimatePresence>
              {conversations.map((conv) => (
                <motion.div
                  key={conv._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`flex items-center justify-between p-3 rounded-lg shadow-sm text-sm transition-colors border ${
                      activeConversationId === conv._id
                        ? "bg-pink-100 text-gray-900 border-gray-300"
                        : "bg-white text-gray-800 hover:bg-gray-50 border-gray-100"
                    }`}
                  >
                    <div
                      onClick={() => setActiveConversationId(conv._id)}
                      className="flex-1 cursor-pointer"
                    >
                      {editingId === conv._id ? (
                        <input
                          value={editedTitle}
                          onChange={(e) => setEditedTitle(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && handleRename(conv._id, editedTitle)}
                          className="border border-gray-300 rounded px-2 py-1 text-sm w-full"
                          autoFocus
                        />
                      ) : (
                        <span>{conv.title}</span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 ml-2">
                      {editingId === conv._id ? (
                        <>
                          <button
                            onClick={() => handleRename(conv._id, editedTitle)}
                            className="text-green-600 hover:text-green-800"
                          >
                            <Check size={16} />
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <X size={16} />
                          </button>
                        </>
                      ) : (
                        <div className="relative">
                          <button
                            onClick={() => setMenuOpenId(menuOpenId === conv._id ? null : conv._id)}
                            className="text-gray-500 hover:text-gray-800"
                          >
                            <MoreVertical size={16} />
                          </button>
                          
                          {/* Dropdown Menu */}
                          {menuOpenId === conv._id && (
                            <div className="absolute right-0 mt-1 w-36 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                              <div className="py-1">
                                <button
                                  onClick={() => {
                                    setEditingId(conv._id);
                                    setEditedTitle(conv.title);
                                    setMenuOpenId(null);
                                  }}
                                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                >
                                  <Edit2 size={14} className="mr-2" />
                                  Rename
                                </button>
                                <button
                                  onClick={() => {
                                    handleDelete(conv._id);
                                    setMenuOpenId(null);
                                  }}
                                  className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                                >
                                  <Trash2 size={14} className="mr-2" />
                                  Delete
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
