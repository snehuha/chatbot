import React from 'react';
import Header from '../components/common/Header';
import { useState } from "react";
import Notebook from "../components/common/Notebook";
import Button from '../components/common/Button';
export default function Journal() {
  const [entry, setEntry] = useState("");

    return (
    <div className="min-h-screen bg-sky-200 p-6 flex flex-col items-center">
      <Header />
      <div className="text-center mb-8">
        <button className="bg white px-4 py=4 inline-block text-3xl font-serif border-2 border-black rounded-lg px-6 py-2 shadow-md bg-gray-100 mb-4">
          Your Journal
        </button>
        
        <p className="text-gray-700 italic">Let it out, one word at a time.</p>
      </div>

      <div className="w-full max-w-3xl">
        <div className="flex gap- mb-8">
          <button className="bg-white px-4 py-4 rounded border-4 border-black shadow hover:bg-gray-100 transition-colors ">
            Prompt
          </button>
          <button className="bg-white px-4 py-2 rounded border shadow hover:bg-gray-100 transition-colors">
            To Save
          </button>
        </div>
    
        <Notebook entry={entry} setEntry={setEntry} />
      </div>
    </div>
  );
}
