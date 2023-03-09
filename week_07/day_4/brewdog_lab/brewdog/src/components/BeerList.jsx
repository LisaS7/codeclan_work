import React from "react";
import Beer from "./Beer";
import "./BeerList.css";

function BeerList({ beers, favourites, setFavourites }) {
  const beerNodes = beers.map((beer) => {
    return (
      <Beer
        key={beer.id}
        beer={beer}
        favourites={favourites}
        setFavourites={setFavourites}
      />
    );
  });
  return <main>{beerNodes}</main>;
}

export default BeerList;
