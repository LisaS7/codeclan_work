import "./FavouriteBeer.css";
import goldBottle from "./beer-bottle-gold.png";

export default function FavouriteBeer({ beer, favourites, setFavourites }) {
  function handleClick() {
    const newFavourites = favourites.filter((item) => item.id !== beer.id);
    setFavourites(newFavourites);
  }

  return (
    <div className="beer-card" key={beer.id}>
      {beer.name}
      <img onClick={handleClick} src={goldBottle} alt="beer bottle icon" />
    </div>
  );
}
