import React from "react";

function CountryDetail({ country }) {
  return (
    <div className="country-detail">
      The capital of {country.name.common} is {country.capital}
    </div>
  );
}

export default CountryDetail;
