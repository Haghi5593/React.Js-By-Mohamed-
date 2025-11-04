import { useState, useEffect } from 'react';

const App = () => {
  const [initialTime, setInitialTime] = useState(30);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (isRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    // Cleanup: clear interval
    return () => clearInterval(timerId);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    setInitialTime(value);
    setTimeLeft(value);
    setIsRunning(false);
  };

  return (
    <div>
      <h2>Saacad Hoos-u-Tirineed</h2>
      <label>Waqti Dejin (ilbiriqsiyo): </label>
      <input
        type="number"
        value={initialTime}
        onChange={handleInputChange}
      />
      <p>Wagtiga Haray: {timeLeft} ilbiriqsiyo</p>
      <button onClick={handleStart} disabled={isRunning || timeLeft === 0}>
        Bilow
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Jooji
      </button>
      <button onClick={handleReset}>
        Dib-u-Deji
      </button>
    </div>
  );
};

export default App;
