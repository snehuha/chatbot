import React, { useEffect, useState } from "react";
import "./pause.css";
const Pause = () => {
  const [text, setText] = useState("Breathe In");
  const cycle = ["Breathe In", "Hold", "Breathe Out", "Hold"];
  let i = 0;
      useEffect(() => {
    const interval = setInterval(() => {
       setText(cycle[i]);
  i = (i + 1) % cycle.length;
}, 4000);

    return () => clearInterval(interval);
  }, []);
   

  return (
    <div className="pause container bg-sky-200 flex flex-col items-center justify-center h-screen">
      <div className="circle w-50 h-50 bg-white/30 rounded-full animate-breathe"></div>
      <p className="text-2xl font-Sans Serif mt-20 text-blue font-medium">{text}</p>

     
    </div>
  );
};

export default Pause;
