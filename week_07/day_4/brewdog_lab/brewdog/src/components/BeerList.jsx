import Beer from "./Beer";
import "./BeerList.css";

function BeerList({ beers }) {
  const beerNodes = beers.map((beer) => {
    return <Beer key={beer.id} beer={beer} />;
  });

  return <main>{beerNodes}</main>;
}

export default BeerList;
