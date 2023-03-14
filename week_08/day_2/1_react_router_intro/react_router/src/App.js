import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Choice from "./components/Choice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Error404 } from "./components/Error404";

const App = () => {
  const [prices, setPrices] = useState([1, 4, 7]);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing prices={prices} />} />
        <Route path="/choices/:choice" element={<Choice />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
