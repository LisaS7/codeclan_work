import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("Hello!");
  const [total, setTotal] = useState(0);

  const handleClick = () => {
    setGreeting(`Hello ${name}!`);
  };

  const deposit = () => {
    setTotal(total + 10);
  };

  const withdraw = () => {
    if (total - 10 < 0) {
      setTotal(0);
    } else {
      setTotal(total - 10);
    }
  };

  return (
    <>
      <h1>{greeting}</h1>
      <button onClick={handleClick}>Change Greeting</button>
      <p>Total: £{total}</p>
      <button onClick={deposit}>Deposit</button>
      <button onClick={withdraw}>Withdraw</button>
    </>
  );
}

export default App;
