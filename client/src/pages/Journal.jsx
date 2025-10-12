import React from 'react';
import Header from '../components/common/Header';
import { useState, useEffect } from "react";
import Button from '../components/common/Button';
import '../assets/app.css';
export default function Journal() {


const JournalApp = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [entries, setEntries] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('journalEntries')) || [];
    setEntries(saved);
  }, []);

  // Save to localStorage when entries change
  useEffect(() => {
    localStorage.setItem('journalEntries', JSON.stringify(entries));
  }, [entries]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newEntry = {
      title,
      content,
      date: new Date().toLocaleString(),
    };

    setEntries([newEntry, ...entries]);
    setTitle('');
    setContent('');
  };

  const deleteEntry = (index) => {
    const updated = [...entries];
    updated.splice(index, 1);
    setEntries(updated);
  };

  return (
    <div className="container">
      <h1>📝 My Journal</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <div id="a4-sheet">
          <textarea
            placeholder="Write your thoughts here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <button type="submit">Save Entry</button>
      </form>

      <h2>Your Entries</h2>
      <ul id="entries">
        {entries.map((entry, index) => (
          <li key={index}>
            <h3>
              {entry.title}
              <button className="delete-btn" onClick={() => deleteEntry(index)}>Delete</button>
            </h3>
            <p>{entry.content}</p>
            <small>{entry.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

return <JournalApp />;
}