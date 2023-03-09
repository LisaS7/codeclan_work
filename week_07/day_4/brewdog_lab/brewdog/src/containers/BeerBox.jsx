import React, { useEffect, useState } from "react";
import BeerList from "../components/BeerList";
import "./BeerBox.css";

function BeerBox() {
  const [beers, setBeers] = useState([]);

  function getBeers() {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <section className="beerbox">
      <BeerList beers={beers} />
    </section>
  );
}

export default BeerBox;
