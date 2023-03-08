function CountrySelect({ countries, onCountrySelected }) {
  const countryOptions = countries.map((country) => {
    return (
      <option key={country.name.common} value={country.name.common}>
        {country.name.common}
      </option>
    );
  });

  function handleChoice(e) {
    const selectedCountry = e.target.value;
    const country = countries.find(
      (country) => country.name.common === selectedCountry
    );
    onCountrySelected(country);
  }
  return (
    <>
      <label htmlFor="countries">Choose a country:</label>
      <select onChange={handleChoice} name="countries" id="countries">
        {countryOptions}
      </select>
    </>
  );
}

export default CountrySelect;
