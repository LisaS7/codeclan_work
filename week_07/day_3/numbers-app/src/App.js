import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(1);
  const [squaredNumber, setSquaredNumber] = useState(1);

  useEffect(() => {
    setSquaredNumber(number ** 2);
  }, [number]);

  function plusNumber() {
    setNumber(number + 1);
  }

  function minusNumber(params) {
    setNumber(number - 1);
  }

  return (
    <div className="App">
      <p>The number is {number}</p>
      <p>The squared number is {squaredNumber}</p>
      <button onClick={minusNumber}>-</button>
      <button onClick={plusNumber}>+</button>
    </div>
  );
}

export default App;
