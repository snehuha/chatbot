import React from 'react';
import Header from '../components/common/Header';
import { useState, useEffect } from "react";
import Button from '../components/common/Button';
import '../assets/app.css';
import "./Journal.css"; // keep your CSS file

export default function Journal() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [entries, setEntries] = useState([]);

  // Load entries from localStorage on mount
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(savedEntries);
  }, []);

  // Save entries to localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem("journalEntries", JSON.stringify(entries));
  }, [entries]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newEntry = {
      title: title.trim(),
      content: content.trim(),
      date: new Date().toLocaleString(),
    };

    // newest entry on top
    setEntries([newEntry, ...entries]);
    setTitle("");
    setContent("");
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
