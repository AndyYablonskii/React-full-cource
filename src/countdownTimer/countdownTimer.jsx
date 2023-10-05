import React, { useState, useEffect } from 'react';

function CountdownTimer({ initialSeconds, startCountdown }) {
  const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;

    if (startCountdown && !isPaused) {
      interval = setInterval(() => {
        if (secondsRemaining > 0) {
          setSecondsRemaining((prevSeconds) => prevSeconds - 1);
        } else {
          clearInterval(interval);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [startCountdown, secondsRemaining, isPaused]);

  const handlePauseResume = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  useEffect(() => {
    setSecondsRemaining(initialSeconds); // Reset the timer when the initialSeconds prop changes
  }, [initialSeconds]);

  const hours = Math.floor(secondsRemaining / 3600);
  const remainingMinutes = Math.floor((secondsRemaining % 3600) / 60);
  const remainingSeconds = secondsRemaining % 60;

  const formattedTime = `${hours > 0 ? `${hours}h ` : ''}${remainingMinutes}m ${remainingSeconds}s`;

  return (
    <div>
      <h1>Countdown Timer</h1>
      {secondsRemaining > 0 ? (
        <div>
          <p>Time Remaining: {formattedTime}</p>
          <button onClick={handlePauseResume}>
            {isPaused ? 'Resume' : 'Pause'}
          </button>
        </div>
      ) : (
        <p>Time's up!</p>
      )}
    </div>
  );
}

export default CountdownTimer;
