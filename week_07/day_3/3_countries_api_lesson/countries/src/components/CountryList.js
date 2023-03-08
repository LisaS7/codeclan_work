import React from "react";
import ListItem from "./ListItem";

const CountryList = ({ countries, onCountryClicked }) => {
  const countryItems = countries.map((country, index) => {
    return (
      <ListItem
        onCountryClicked={onCountryClicked}
        country={country}
        key={index}
      />
    );
  });

  return (
    <div>
      <ul>{countryItems}</ul>
    </div>
  );
};

export default CountryList;
