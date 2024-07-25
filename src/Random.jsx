import React, { useEffect, useState } from 'react';

const NumberTicker = ({ value }) => {
  value=600
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (currentValue < value) {
      const interval = setInterval(() => {
        setCurrentValue((prev) => {
          if (prev < value) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 500); // Adjust the speed by changing the interval time
    }
  }, [currentValue, value]);

  return (
    <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
      {currentValue}
    </p>
  );
};

export default NumberTicker;
