import React, { useState } from "react";

export default function SearchForm({ setSearch }) {
  const [word, setWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSearch(word);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        id="search"
        onChange={(event) => setWord(event.target.value)}
      />
      <button>Search</button>
    </form>
  );
}
