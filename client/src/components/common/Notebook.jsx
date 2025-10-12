
import React from 'react';

export default function Notebook({ entry, setEntry }) {
  return (
    <div className="w-[600px] h-[300px] -mt-4"> {/* fixed height + move upwards */}
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Dear Diary, ..."
        className="p-4 border-2 border-gray-400  shadow-md resize:none focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
