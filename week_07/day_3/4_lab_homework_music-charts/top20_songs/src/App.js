import "./App.css";
import React, { useState, useEffect } from "react";
import SongList from "./components/SongList";
import Header from "./components/Header";

function App() {
  const [chart, setChart] = useState([]);

  function getChart() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
      .then((response) => response.json())
      .then((data) => setChart(data.feed.entry));
  }

  useEffect(() => {
    getChart();
  }, []);

  return (
    <div className="App">
      <Header />
      <SongList chart={chart} />
    </div>
  );
}

export default App;
