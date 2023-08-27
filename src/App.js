import "./styles.css";
import React, { useState } from "react";
function App() {
  setInterval(setTime, 1000);
  const now = new Date().toLocaleTimeString();
  const [time, changeTime] = useState(now);
  function setTime() {
    const nowTime = new Date().toLocaleTimeString();
    changeTime(nowTime);
  }
  return (
    <div className="time">
      <h1>{time}</h1>
    </div>
  );
}
export default App;
