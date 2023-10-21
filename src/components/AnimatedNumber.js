import React, { useState, useEffect } from 'react';

const AnimatedNumber = ({ value, duration }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let startValue = 0;
    const endValue = parseInt(value);
    const interval = duration / endValue;
    const timer = setInterval(() => {
      startValue += 1;
      setCurrentValue(startValue);
      if (startValue >= endValue) {
        clearInterval(timer);
      }
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [value, duration]);

  return <span>{currentValue}</span>;
};

export default AnimatedNumber;
