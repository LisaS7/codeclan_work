import React, { useEffect, useState } from "react";
import BeerList from "../components/BeerList";
import "./BeerBox.css";

function BeerBox() {
  const [beers, setBeers] = useState([]);
  const [favourites, setFavourites] = useState([]);

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
      <BeerList
        beers={beers}
        favourites={favourites}
        setFavourites={setFavourites}
      />
    </section>
  );
}

export default BeerBox;
