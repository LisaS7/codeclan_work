import React from "react";
import "./App.css";
import CommentBox from "./containers/CommentBox";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="app">
      <Counter />
      <CommentBox />
    </div>
  );
}

export default App;
