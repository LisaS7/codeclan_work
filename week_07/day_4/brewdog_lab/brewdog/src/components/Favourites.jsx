import "./Favourites.css";

function Favourites({ favourites }) {
  const beers = favourites.map((beer) => {
    return <p key={beer.id}>{beer.name}</p>;
  });
  return (
    <section className="favourites">
      <h2>Favourites</h2>
      {beers}
    </section>
  );
}

export default Favourites;
