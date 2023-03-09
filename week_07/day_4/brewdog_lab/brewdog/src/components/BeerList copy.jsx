import React, { useState, useEffect } from "react";
import Beer from "./Beer";
import "./BeerList.css";

function BeerList({ beers }) {
  let faveBeers = [];
  // const [faveBeers, setFaveBeers] = useState([]);

  function toggleFavourite(beer) {
    if (faveBeers.includes(beer)) {
      console.log("fav", faveBeers);
      const index = faveBeers.indexOf(beer);
      const newFavourites = faveBeers.splice(index, 1);
      // setFaveBeers(newFavourites);
      faveBeers = newFavourites;
    } else {
      // setFaveBeers([...faveBeers, beer]);
      faveBeers.push(beer);
    }
  }

  useEffect(() => {
    console.log("Rendered");
  });

  const beerNodes = beers.map((beer) => {
    return (
      <Beer
        key={beer.id}
        beer={beer}
        toggleFavourite={toggleFavourite}
        favourite={faveBeers.includes(beer)}
      />
    );
  });

  return <main>{beerNodes}</main>;
}

export default BeerList;
