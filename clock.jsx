// Clock.jsx
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

const Clock = () => {
  const [time, setTime] = useState(dayjs().format("HH:mm:ss"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format("HH:mm:ss"));
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
      {time}
    </div>
  );
};

export default Clock;
