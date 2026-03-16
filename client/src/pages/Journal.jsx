import React from 'react';
import Header from '../components/common/Header';
import { useState, useEffect } from "react";
import Button from '../components/common/Button';
import '../assets/app.css';
import "./Journal.css";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/entries";
const TEMP_USER_ID = "testUser123"; // Temporary user ID

export default function Journal() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [entries, setEntries] = useState([]);

  // Fetch user-specific entries on mount
  useEffect(() => {
    axios.get(`${API_BASE_URL}?userId=${TEMP_USER_ID}`)
      .then(res => {
        setEntries(res.data);
      })
      .catch(err => console.error("Error fetching entries:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    try {
      const res = await axios.post(API_BASE_URL, {
        userId: TEMP_USER_ID,
        title,
        content,
      });

      setEntries([res.data, ...entries]);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error saving entry:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      setEntries(entries.filter(entry => entry._id !== id));
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  return (
    <div className="journal-page">
      {/* Left Sidebar - Your Entries */}
      <aside className="entries-sidebar">
        <h2>Your Entries</h2>
        <ul id="entries">
          {entries.length === 0 ? (
            <li className="no-entries">No entries yet. Start writing!</li>
          ) : (
            entries.map((entry) => (
              <li key={entry._id}>
                <h3>
                  {entry.title}
                  <button className="delete-btn" onClick={() => handleDelete(entry._id)}>
                    Delete
                  </button>
                </h3>
                <p>{entry.content.substring(0, 100)}{entry.content.length > 100 ? '...' : ''}</p>
                <small>{new Date(entry.createdAt).toLocaleDateString()}</small>
              </li>
            ))
          )}
        </ul>
      </aside>

      {/* Right Content - Journal Form */}
      <main className="journal-main">
        <h1>My Journal</h1>

        <form onSubmit={handleSubmit}>
          <div id="a4-sheet">
            <input
              type="text"
              placeholder="What's the date and time right now?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

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
      </main>
    </div>
  );
}
