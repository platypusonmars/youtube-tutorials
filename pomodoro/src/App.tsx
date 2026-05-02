import { useEffect, useState, useRef } from "react";
import type { Durations, Mode, Session } from "./types";
import TimerDisplay from "./components/TimerDisplay";
import ModeSelector from "./components/ModeSelector";
import SettingsPanel from "./components/SettingsPanel";
import SessionList from "./components/SessionList";
import "./App.css";

const DEFAULT_DURATIONS: Durations = {
  focus: 25,
  shortBreak: 5,
  longBreak: 15,
};

const SESSIONS_STORAGE_KEY = "pomodoro.sessions";

function loadSessions(): Session[] {
  const raw = localStorage.getItem(SESSIONS_STORAGE_KEY);
  return raw ? (JSON.parse(raw) as Session[]) : [];
}

function App() {
  const [mode, setMode] = useState<Mode>("focus");
  const [durations, setDurations] = useState<Durations>(DEFAULT_DURATIONS);
  const [timeLeft, setTimeLeft] = useState<number>(
    DEFAULT_DURATIONS.focus * 60,
  );
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [sessions, setSessions] = useState<Session[]>(loadSessions);
  const loggedRef = useRef(false);

  useEffect(() => {
    localStorage.setItem(SESSIONS_STORAGE_KEY, JSON.stringify(sessions));
  }, [sessions]);

  useEffect(() => {
    if (!isRunning) return;
    loggedRef.current = false; // new session starting -> reset the flag

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const next = Math.max(0, prev - 1);

        if (next === 0 && !loggedRef.current) {
          loggedRef.current = true;
          // time's up — handle it here, in the same update
          setSessions((s) => [
            ...s,
            { id: crypto.randomUUID(), mode, duration: durations[mode] },
          ]);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, mode, durations]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    setTimeLeft(durations[newMode] * 60);
    setIsRunning(false);
  };

  const handleDurationsChange = (newDurations: Durations) => {
    setDurations(newDurations);
    setTimeLeft(newDurations[mode] * 60);
    setIsRunning(false);
  };

  const handleStartPause = () => setIsRunning((r) => !r);

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(durations[mode] * 60);
  };

  return (
    <div className="min-h-screen bg-orange-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-8 space-y-6">
        <h1 className="text-center text-2xl font-semibold text-gray-800">
          🍅 Pomodoro
        </h1>

        <ModeSelector mode={mode} onChange={handleModeChange} />

        <TimerDisplay minutes={minutes} seconds={seconds} />

        <div className="flex gap-3 justify-center">
          <button
            onClick={handleStartPause}
            className="px-6 py-2 rounded-2xl bg-[#f6c90f] text-gray-900 font-medium hover:bg-[#e6ba00] transition"
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-2 rounded-2xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition"
          >
            Reset
          </button>
        </div>

        <SettingsPanel durations={durations} onChange={handleDurationsChange} />

        <SessionList sessions={sessions} />
      </div>
    </div>
  );
}

export default App;
