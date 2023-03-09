import React, { useEffect } from "react";

function BeerBox() {
  function getBeers() {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  useEffect(() => {
    getBeers();
  }, []);
}

export default BeerBox;
