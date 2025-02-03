
import "./styles.css";

import React, { useState, useEffect } from 'react';

const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="counter-container">
      <i className="fa-regular fa-clock"></i> 
      {String(seconds).padStart(6, '0').split('').map((digit, index) => (
        <div key={index} className="digit-box">
        
          {digit}
        </div>
      ))}
    </div>
  );
};

export default SecondsCounter;
