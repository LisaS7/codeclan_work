import Beer from "./Beer";

function BeerList({ beers }) {
  const beerNodes = beers.map((beer) => {
    return <Beer key={beer.id} beer={beer} />;
  });

  return <>{beerNodes}</>;
}

export default BeerList;
