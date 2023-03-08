function CountrySelect({ countries, onCountrySelected }) {
  const countryOptions = countries.map((country) => {
    return (
      <option key={country.name.common} value={country.name.common}>
        {country.name.common}
      </option>
    );
  });

  function handleChoice(e) {
    const country = countries[e.target.value];
    onCountrySelected(country);
  }
  return (
    <div className="select-container">
      <label htmlFor="countries">Choose a country:</label>
      <select onChange={handleChoice} name="countries" id="countries">
        {countryOptions}
      </select>
    </div>
  );
}

export default CountrySelect;
