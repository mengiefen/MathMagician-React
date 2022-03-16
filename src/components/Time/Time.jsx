import React, { useEffect, useState } from 'react';

const Time = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const nextTick = () => {
    setTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    const timer = setInterval(() => nextTick(), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return <div className="timer">{time}</div>;
};

export default Time;
