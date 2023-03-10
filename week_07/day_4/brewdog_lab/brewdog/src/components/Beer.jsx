import React from "react";
import "./Beer.css";
import greyBottle from "./beer-bottle-grey.png";
import goldBottle from "./beer-bottle-gold.png";

function Beer({ beer, favourites, setFavourites }) {
  const isFavourite = favourites.includes(beer);

  function handleClick() {
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
          <div className="summary-card">
            <section className="card-title">
              <img
                className="product-image"
                src={beer.image_url}
                alt="product"
              />
              <h3>{beer.name}</h3>
            </section>
            <button>
              <img
                onClick={handleClick}
                src={isFavourite ? goldBottle : greyBottle}
                alt="beer bottle icon"
              />
            </button>
          </div>

          <p>{beer.tagline}</p>
        </summary>
        <section className="beer-details">
          <aside>
            <p>{beer.description}</p>
            <h4>Ingredients: </h4>
            <p>{ingredients.join(", ")}</p>
          </aside>
        </section>
      </details>
    </div>
  );
}

export default Beer;
