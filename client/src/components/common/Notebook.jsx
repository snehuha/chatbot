import React from 'react';

export default function Notebook({ entry, setEntry }) {
  return (
    <div className="w-full italic">
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write your thoughts here..."
        className="w-40 h-96 p-8 border-2 border-gray-300 rounded-lg shadow-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-800 font-medium leading-relaxed"
        style={{ minHeight: '500px' }}
      />
    </div>
  );
} 