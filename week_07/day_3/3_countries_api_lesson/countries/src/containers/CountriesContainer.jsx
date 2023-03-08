import React, { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import CountryDetail from "../components/CountryDetail";
import "./CountriesContainer.css";

const CountryContainer = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async function () {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();
    setCountries(countries);
  };

  function onCountryClicked(country) {
    setSelectedCountry(country);
  }

  return (
    <div className="main-container">
      <CountryList countries={countries} onCountryClicked={onCountryClicked} />
      {selectedCountry ? <CountryDetail country={selectedCountry} /> : null}
    </div>
  );
};

export default CountryContainer;
