import React, { useState, useEffect, useRef } from "react";
import InputField from "./InputField";
import MsgBubble from "./MsgBubble";
import { getMessages, sendMessage } from "../../lib/messages";
import talkToBackend from "../../lib/api";

const ChatArea = ({ activeConversationId }) => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Fetch messages whenever the active conversation changes
  useEffect(() => {
    const fetchData = async () => {
      if (!activeConversationId) return;

      try {
        const data = await getMessages(activeConversationId);
        setMessages(data);
      } catch (err) {
        console.error("Failed to fetch messages:", err);
      }
    };

    fetchData();
  }, [activeConversationId]);

  // Handle user sending a message
  const handleUserMessage = async (msg) => {
    if (!activeConversationId) return;

    // Add user's message immediately
    const optimisticUser = { sender: "user", text: msg };
    setMessages((prev) => [...prev, optimisticUser]);

    setIsTyping(true);

    try {
      // Persist user's message
      await sendMessage(activeConversationId, "user", msg);

      // Call AI backend to get reply
      const aiReply = await talkToBackend(msg);

      // Persist AI reply
      await sendMessage(activeConversationId, "ai", aiReply);

      // Update UI with AI reply
      setMessages((prev) => [...prev, { sender: "ai", text: aiReply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="relative flex flex-col h-full bg-gray-50">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto">
          {/* Messages */}
          {messages.map((msg, idx) => (
            <MsgBubble key={idx} sender={msg.sender} text={msg.text} />
          ))}

          {/* Typing Indicator */}
          {isTyping && <MsgBubble sender="ai" text="Luna is typing..." />}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-500 bg-white">
        <div className="max-w-2xl mx-auto">
          <InputField onSend={handleUserMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
