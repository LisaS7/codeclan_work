import "./FavouriteBeer.css";

export default function FavouriteBeer({ beer, favourites, setFavourites }) {
  function handleClick() {
    const newFavourites = favourites.filter((item) => item.id !== beer.id);
    setFavourites(newFavourites);
  }

  return (
    <p key={beer.id}>
      {beer.name}
      <button onClick={handleClick} className="favourite">
        <span className="material-symbols-outlined favouriteIcon favouriteFill">
          star
        </span>
      </button>
    </p>
  );
}
