import axios from "axios";
const BASE_URL = "http://localhost:5000/api"; // adjust if different

export const getConversations = async (userId) => {
  const res = await axios.get(`${BASE_URL}/${userId}`);
  return res.data;
};

export const createConversations = async (userId) => {
  const res = await axios.post(BASE_URL, { userId, title: "New Chat" });
  return res.data;
};

export const renameConversation = async (id, title) => {
  const res = await axios.put(`${BASE_URL}/${id}`, { title });
  return res.data;
};

export const deleteConversation = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
