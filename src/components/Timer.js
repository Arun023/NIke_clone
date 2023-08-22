import { useEffect, useState } from "react";

const Timer = ({ Limit }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < Limit) {
        setCount(count + 10);
      }
    }, 9);
    return () => {
      clearInterval(interval);
    };
  }, [Limit,count]);

  return <div>{count}</div>;
};

export default Timer;
