import React from 'react';
import Header from '../components/common/Header';
import { useState, useEffect } from "react";
import Button from '../components/common/Button';
import '../assets/app.css';
import "./Journal.css"; 
import axios from "axios";

export default function Journal() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [entries, setEntries] = useState([]);


const saveEntry = async () => {
  await axios.post("http://localhost:5000/entries", { title, content });
};
useEffect(() => {
  axios.get("http://localhost:5000/entries").then(res => {
    setEntries(res.data);
  });
}, []);


  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!title.trim() || !content.trim()) return;

  try {
    // Send data to backend (MongoDB)
    const res = await axios.post("http://localhost:5000/entries", {
      title,
      content,
    });

    // Add new entry to your list (the one returned by MongoDB)
    setEntries([res.data, ...entries]);

    // Clear inputs
    setTitle("");
    setContent("");
  } catch (error) {
    console.error("Error saving entry:", error);
  }
};


  const handleDelete = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  return (
    <div className="container">
      <h1> My Journal</h1>

      <form onSubmit={handleSubmit}>
      
        <div id="a4-sheet">
          <input
      type="text"
      placeholder="What's the date and time right now?"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      required
    />
  

  {/* Content Section */}
  <div className="mb-4">
    <textarea
      placeholder="What are you thinking at the moment?"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      required
    />
  </div>
</div>

        <button type="submit">Save Entry</button>
      </form>

      <h2>Your Entries</h2>
      <ul id="entries">
        {entries.map((entry, index) => (
          <li key={index}>
            <h3>
              {entry.title}
              <button className="delete-btn" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </h3>
            <p>{entry.content}</p>
            <small>{entry.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
