import React, { useState } from "react";
import "./App.css";
import BreakControl from "./BreakControl";
import SessionControl from "./SessionControl";
import Session from "./Session";
import Controls from "./Controls";

export default function App() {
  const [breakTimeDisplay, setBreakTimeDisplay] = useState(5);
  const [sessionTimeDisplay, setSessionTimeDisplay] = useState(25);
  const [counting, setCounting] = useState(false);
  const [counter, setCounter] = useState(null);
  const [sessionData, setSessionData] = useState({
    label: "Session",
    sessionTime: 1500,
  });

  const decreaseBreakTime = () => {
    if (breakTimeDisplay > 1) {
      setSessionData((prev) =>
        handleSessionState(prev, breakTimeDisplay, "Break", false)
      );
      setBreakTimeDisplay((prev) => prev - 1);
    }
  };

  const increaseBreakTime = () => {
    if (breakTimeDisplay < 60) {
      setSessionData((prev) =>
        handleSessionState(prev, breakTimeDisplay, "Break")
      );
      setBreakTimeDisplay((prev) => prev + 1);
    }
  };

  const decreaseSessionTime = () => {
    if (sessionTimeDisplay > 1) {
      setSessionData((prev) =>
        handleSessionState(prev, sessionTimeDisplay, "Session", false)
      );
      setSessionTimeDisplay((prev) => prev - 1);
    }
  };

  const increaseSessionTime = () => {
    if (sessionTimeDisplay < 60) {
      setSessionData((prev) =>
        handleSessionState(prev, sessionTimeDisplay, "Session")
      );
      setSessionTimeDisplay((prev) => prev + 1);
    }
  };

  const handleSessionState = (prev, time, label, increase = true) => {
    const newState = {
      label: prev.label,
      sessionTime: increase ? (time + 1) * 60 : (time - 1) * 60,
    };
    return prev.label === label ? newState : prev;
  };

  const handleReset = () => {
    clearInterval(counter);
    setBreakTimeDisplay(5);
    setSessionTimeDisplay(25);
    setCounting(false);
    setCounter(null);
    setSessionData({
      label: "Session",
      sessionTime: 1500,
    });
    const sound = document.getElementById("beep");
    sound.currentTime = 0;
    sound.pause();
  };

  const handleStartStop = () => {
    if (!counting && sessionData.sessionTime > 0) {
      setCounting(true);
      setCounter(setInterval(handleInterval, 1000));
    } else {
      clearInterval(counter);
      setCounting(false);
    }
  };

  const handleInterval = () => {
    setSessionData((prev) => {
      if (prev.sessionTime > 0) {
        return {
          label: prev.label,
          sessionTime: prev.sessionTime - 1,
        };
      }
      if (prev.sessionTime === 0) {
        playSound();
        if (prev.label === "Session") {
          return {
            label: "Break",
            sessionTime: breakTimeDisplay * 60,
          };
        }
        if (prev.label === "Break") {
          return {
            label: "Session",
            sessionTime: sessionTimeDisplay * 60,
          };
        }
      } else {
        return prev;
      }
    });
  };

  const playSound = () => {
    const sound = document.getElementById("beep");
    sound.play();
    sound.currentTime = 0;
  };

  return (
    <main>
      <h1>25 + 5 Clock</h1>
      <Session
        timerLabel={sessionData.label}
        sessionTime={sessionData.sessionTime}
      />
      <div className="grid">
        <SessionControl
          decreaseSessionTime={decreaseSessionTime}
          increaseSessionTime={increaseSessionTime}
          sessionTimeDisplay={sessionTimeDisplay}
        />
        <BreakControl
          decreaseBreakTime={decreaseBreakTime}
          increaseBreakTime={increaseBreakTime}
          breakTimeDisplay={breakTimeDisplay}
        />
      </div>
      <Controls
        handleStartStop={handleStartStop}
        handleReset={handleReset}
        counting={counting}
      />
      <audio
        id="beep"
        src={
          "//raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        }
      />
    </main>
  );
}
