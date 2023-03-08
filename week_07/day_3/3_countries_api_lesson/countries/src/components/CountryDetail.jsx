import React from "react";

function CountryDetail({ country }) {
  const currencyData = country.currencies;
  let currencies;

  //could refactor this to loop over object.keys?
  if (Array.isArray(currencyData)) {
    currencies = currencyData.map((ccy) => `${ccy.name} (${ccy.symbol})`);
  } else {
    const ccy = currencyData[Object.keys(currencyData)[0]];
    currencies = `${ccy.name} (${ccy.symbol})`;
  }

  return (
    <div className="country-detail">
      <p>
        The capital of {country.name.common} is {country.capital}
      </p>
      <p>
        The flag is <span id="flag">{country.flag}</span>
      </p>
      <p>Currencies: {currencies}</p>
    </div>
  );
}

export default CountryDetail;
