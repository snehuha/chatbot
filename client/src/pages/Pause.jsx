import React, { useEffect, useState } from "react";
import "./pause.css";

const breathingPattern = [
  { label: "Breathe In", duration: 4000, scale: 1.5 },
  { label: "Hold", duration: 4000, scale: 1.5 },
  { label: "Breathe Out", duration: 6000, scale: 1 },
  { label: "Hold", duration: 2000, scale: 1 }
];

const SESSION_DURATION = 2 * 60 * 1000; // 2 minutes

const Pause = () => {
  const [phase, setPhase] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [sessionStart, setSessionStart] = useState(null);

  // Breathing phase controller
  useEffect(() => {
    if (!isRunning) return;

    const timeout = setTimeout(() => {
      setPhase((prev) => (prev + 1) % breathingPattern.length);
    }, breathingPattern[phase].duration);

    return () => clearTimeout(timeout);
  }, [phase, isRunning]);

  // Session timer (2 minutes)
  useEffect(() => {
    if (!isRunning || !sessionStart) return;

    const timer = setTimeout(() => {
      setIsRunning(false);
      setIsFinished(true);
      setPhase(0);
    }, SESSION_DURATION);

    return () => clearTimeout(timer);
  }, [isRunning, sessionStart]);

  const startSession = () => {
    setPhase(0);
    setIsFinished(false);
    setIsRunning(true);
    setSessionStart(Date.now());
  };

  return (
    <div className="pause-container">
      {/* Circle always mounted so animation works */}
      <div
        className="circle"
        style={{
          transform: isRunning
            ? `scale(${breathingPattern[phase].scale})`
            : "scale(1)",
          transition: isRunning
            ? `transform ${breathingPattern[phase].duration}ms ease-in-out`
            : "none",
          opacity: isRunning ? 1 : 0
        }}
      />

      {/* Start button */}
      {!isRunning && !isFinished && (
        <button className="btn" onClick={startSession}>
          Start Breathing
        </button>
      )}

      {/* Breathing text */}
      {isRunning && (
        <p className="text">
          {breathingPattern[phase].label}
        </p>
      )}

      {/* Restart screen */}
      {isFinished && (
        <div className="restart">
          <p className="text">Session complete 🌿</p>
          <button className="btn" onClick={startSession}>
            Start Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Pause;
