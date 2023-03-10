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

  let allIngredients = [];

  for (const category in beer.ingredients) {
    try {
      let newIngredients = beer.ingredients[category].map((item) => item.name);
      allIngredients = [...allIngredients, ...newIngredients];
    } catch {
      let newIngredient = beer.ingredients[category];
      allIngredients = [...allIngredients, newIngredient];
    }
  }
  const ingredients = [...new Set(allIngredients)];

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
            <h4>Ingredients: </h4>
            <p>{ingredients.join(", ")}</p>
          </aside>
        </section>
      </details>
    </div>
  );
}

export default Beer;
