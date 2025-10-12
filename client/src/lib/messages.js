// src/lib/messages.js

import axios from "axios"

const API_URL = "http://localhost:5000/api/messages"; // adjust if backend URL differs

// Get all messages for a conversation
export const getMessages = async (conversationId) => {
  try {
    const res = await axios.get(`${API_URL}/${conversationId}`);
    return res.data; // array of messages
  } catch (err) {
    console.error("Error fetching messages:", err);
    throw err;
  }
};

// Send a new message
export const sendMessage = async (conversationId, sender, text, userId = null) => {
  try {
    const res = await axios.post(API_URL, {
      conversationId,
      sender,   // "user" or "ai"
      text,     // <-- aligned with your schema
      userId,   // optional
    });
    return res.data; // saved message
  } catch (err) {
    console.error("Error sending message:", err);
    throw err;
  }
};
