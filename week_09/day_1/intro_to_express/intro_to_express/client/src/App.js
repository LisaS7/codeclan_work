import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:8080/");
      const data = await response.json();
      setText(data.text);
    }
    getData();
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <p>Message: {text}</p>
    </>
  );
}

export default App;
