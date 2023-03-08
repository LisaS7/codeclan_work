import React from "react";
import "./ListItem.css";

const ListItem = ({ country, onCountryClicked }) => {
  function handleClick() {
    console.log("country : ", country);
    onCountryClicked(country);
  }

  return <li onClick={handleClick}>{country.name.common}</li>;
};

export default ListItem;
