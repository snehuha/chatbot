import React from 'react';

export default function Notebook({ entry, setEntry }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-200 italic">
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write your thoughts here..."
        className="w-[600px] h-[600px] p-5 border-2 border-black-300 rounded shadow-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-800 font-medium leading-relaxed"
        style={{ minHeight: '300px' }}
      />
    </div>
  );
} 