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
    <div className="min-h-screen bg-sky-200 pl-8 flex flex-col items-left">
      <Header />
      <div className="text-center mb-8">
        <button className="bg white px-4 py=4 inline-block text-3xl font-sans border-2 border-black rounded-lg px-6 py-2 shadow-md bg-gray-100 mb-4">
          <h1>Your Journal</h1>
        </button>
        
        <p className="text-gray-700 italic">Let it out, one word at a time.</p>
      </div>

      <div className="absolute top-5 left-5 flex flex-col gap-5">
        <div className="flex gap-8 pl-8" >
          <button className="bg-white px-4 py-4 pl-8 rounded-xl border-8 border-black shadow hover:bg-blue-100 transition-colors font-semibold">
            Prompt
          </button>
          <button className="bg-white px-4 py-2 rounded-xl border-[5px] shadow hover:bg-gray-100 transition-colors font-semibold">
           To Save
          </button>
        </div>

        <button type="submit">Save Entry</button>
      </div>

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