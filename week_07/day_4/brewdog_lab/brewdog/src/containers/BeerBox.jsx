import React, { useEffect, useState } from "react";
import BeerList from "../components/BeerList";
import Favourites from "../components/Favourites";
import "./BeerBox.css";

function BeerBox() {
  const [beers, setBeers] = useState([]);
  const [favourites, setFavourites] = useState([]);

  async function getBeers() {
    const url = "https://api.punkapi.com/v2/beers";
    let beerData = [];
    let page = 1;
    let result = true;

    while (result) {
      let response = await fetch(`${url}?page=${page}&per_page=80`);
      let newData = await response.json();
      if (newData.length) {
        beerData = [...beerData, ...newData];
      } else {
        result = false;
      }
      page++;
    }
    setBeers(beerData);
  }

  useEffect(() => {
    getBeers().then(
      setBeers(
        [...beers].sort((beer1, beer2) => {
          if (beer1.name < beer2.name) {
            console.log(beer1.name);
            return -1;
          }
          if (beer1.name > beer2.name) {
            return 1;
          }
          return 0;
        })
      )
    );
  }, []);

  return (
    <section className="beerbox">
      <Favourites favourites={favourites} setFavourites={setFavourites} />
      <BeerList
        beers={beers}
        favourites={favourites}
        setFavourites={setFavourites}
      />
    </section>
  );
}

export default BeerBox;
