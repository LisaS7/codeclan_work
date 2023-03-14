import React from "react";

const Pricing = ({ prices }) => {
  const priceList = prices.map((price, index) => {
    return <li key={index}>{price}</li>;
  });

  return (
    <div>
      <h4>Pricing</h4>
      <ul>{priceList}</ul>
    </div>
  );
};

export default Pricing;
