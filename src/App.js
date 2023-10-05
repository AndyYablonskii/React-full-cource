import CountdownTimer from './countdownTimer/countdownTimer.jsx';
import countdownTimer from './countdownTimer/countdownTimer.css';

import React, { useState } from 'react';
  
function App() {
  const [startCountdown, setStartCountdown] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleStartCountdown = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    setStartCountdown(true);
  };

  return (
    <div className="App">
      <div className="input-container">
        <label>
          Hours:
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(parseInt(e.target.value, 10))}
          />
        </label>
        <label>
          Minutes:
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value, 10))}
          />
        </label>
        <label>
          Seconds:
          <input
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(parseInt(e.target.value, 10))}
          />
        </label>
      </div>
      <button onClick={handleStartCountdown}>Start Countdown</button>
      <CountdownTimer
        initialSeconds={hours * 3600 + minutes * 60 + seconds}
        startCountdown={startCountdown}
      />
    </div>
  );
}

export default App;
