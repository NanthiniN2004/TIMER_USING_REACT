import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="p-6 bg-gray-900 rounded-lg shadow-xl border-4 border-blue-400">
        <h1 className="text-4xl font-bold mb-4 text-center">⏳ Timer</h1>
        <div className="text-6xl font-mono bg-black px-6 py-3 rounded-md shadow-lg border border-gray-600 text-green-400">
          {new Date(time * 1000).toISOString().substring(11, 19)}
        </div>
        <div className="mt-6 flex gap-4">
          <button
            onClick={handleStartPause}
            className={`px-6 py-2 rounded-lg text-lg font-semibold transition-all 
              ${isRunning ? "bg-red-500 hover:bg-red-700" : "bg-green-500 hover:bg-green-700"}`}
          >
            {isRunning ? "Pause ⏸️" : "Start ▶️"}
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-2 bg-gray-500 hover:bg-gray-700 rounded-lg text-lg font-semibold"
          >
            Reset 🔄
          </button>
        </div>
      </div>
    </div>
  );
}
