import React, { useState, useEffect, useRef } from "react";
import InputField from "./InputField";
import MsgBubble from "./MsgBubble";
import { fetchGeminiResponse } from "../../lib/gemini";

const ChatArea = () => {
  const [messages, setMessages] = useState([{
    sender: "ai", 
    text: "Hi Cherry, How are you doing?"
  }]);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  // Mock API call (replace with actual Gemini API)
  const fetchGeminiResponse = async (message) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `I understand you're saying: "${message}". How does that make you feel?`;
  };
  
  const handleUserMessage = async (msg) => {
    // Add user's message
    const newMessages = [...messages, { sender: "user", text: msg }];
    setMessages(newMessages);
    
    // Show typing indicator
    setIsTyping(true);
    
    try {
      // Call API (mock for now)
      const aiResponse = await fetchGeminiResponse(msg);
      // Add AI response
      setMessages([...newMessages, { sender: "ai", text: aiResponse }]);
    } catch (err) {
      setMessages([...newMessages, { 
        sender: "ai", 
        text: "Sorry, something went wrong. Please try again." 
      }]);
    } finally {
      setIsTyping(false);
    }
  };
  
  return (
    <div className="relative flex flex-col h-full bg-sky-100">
      
      
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto">
          {/* Welcome Message */}
          {messages.length === 1 && (
            <div className="text-center mb-8">
              <div className="bg-pink-50 rounded-2xl px-6 py-4 inline-block border border-gray-200 shadow-sm">
                <p className="text-lg text-gray-800 font-medium">
                  Welcome to your safe space. I'm here to listen.
                </p>
              </div>
            </div>
          )}
          
          {/* Messages */}
          {messages.map((msg, idx) => (
            <MsgBubble key={idx} sender={msg.sender} text={msg.text} />
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <MsgBubble sender="ai" text="Luna is typing..." />
          )}
          
          {/* Scroll Target */}
          <div ref={bottomRef} />
        </div>
      </div>
      
      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="max-w-2xl mx-auto">
          <InputField onSend={handleUserMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
