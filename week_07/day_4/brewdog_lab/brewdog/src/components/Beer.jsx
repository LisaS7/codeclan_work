import React, { useState } from "react";
import "./Beer.css";

function Beer({ beer, favourites, setFavourites }) {
  const [isFavourite, setIsFavourite] = useState(false);

  function handleClick() {
    setIsFavourite(!isFavourite);
    if (isFavourite) {
      const newFavourites = favourites.filter((item) => item.id !== beer.id);
      setFavourites(newFavourites);
    } else {
      setFavourites([...favourites, beer]);
    }
  }

  return (
    <div className="beer">
      <details>
        <summary>
          {beer.name}{" "}
          <button onClick={handleClick} className="favourite">
            <span
              className={`material-symbols-outlined favouriteIcon ${
                isFavourite && "favouriteFill"
              }`}
            >
              star
            </span>
          </button>
        </summary>
        <section className="beer-details">
          <figure>
            <img src={beer.image_url} alt="product" />
            <figcaption>{beer.tagline}</figcaption>
          </figure>
          <aside>
            <p>{beer.description}</p>
            <p>{beer.brewers_tips}</p>
          </aside>
        </section>
      </details>
    </div>
  );
}

export default Beer;
