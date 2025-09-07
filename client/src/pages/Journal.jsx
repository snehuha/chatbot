import React from 'react';
import Header from '../components/common/Header';
import { useState } from "react";
import Notebook from "../components/common/Notebook";
import Button from '../components/common/Button';
export default function Journal() {
  const [entry, setEntry] = useState("");

    return (
    <div className="min-h-screen bg-sky-200 pl-8 flex flex-col items-left">
      <Header />
      <div className="text-center mb-8">
        <button className="bg white py=4 inline-block text-3xl font-sans border-2 border-black rounded-lg px-6 py-2 shadow-md bg-gray-100 mb-4">
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
    
        <Notebook entry={entry} setEntry={setEntry} />
      </div>
    </div>
  );
}
