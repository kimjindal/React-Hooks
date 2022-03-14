import { useEffect, useState } from 'react';

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Running Timer...');
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('Stopped Timer!');
    };
  }, []);

  return '...';
};

export default Timer;
