import "./Favourites.css";
import FavouriteBeer from "./FavouriteBeer";

function Favourites({ favourites, setFavourites }) {
  const beers = favourites.map((beer) => {
    return (
      <FavouriteBeer
        key={beer.id}
        beer={beer}
        favourites={favourites}
        setFavourites={setFavourites}
      />
    );
  });

  return (
    <section className="favourites">
      <h2>Favourites</h2>
      {beers}
    </section>
  );
}

export default Favourites;
