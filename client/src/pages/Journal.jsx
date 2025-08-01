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
        <button className="bg white px-4 py-4 h-20 w-20 inline-block text-7xl font-serif border-20 border-black rounded-lg px-6 py-2 shadow-md bg-gray-100 mb-4">
         <h1>Your Journal</h1> 
        </button>
        
        <p className="text-gray-700 italic">Let it out, one word at a time.</p>
      </div>

      <div className="w-full max-w-3xl border-2 p-10">
      <div className="space-x-2 flex gap-8 mb-10 ml-20 ">

          <button className="bg-white px-4 py-4 rounded border-4 border-black-100 shadow hover:bg-gray-100 transition-colors mb-10">
           <h4>Prompt</h4> 
          </button>
          <button className="bg-white px-4 py-2 rounded border-[5px] shadow hover:bg-gray-100 transition-colors">
           <h4>To Save</h4> 
          </button>
        </div>
    
        <Notebook entry={entry} setEntry={setEntry} />
      </div>
    </div>
  );
}
