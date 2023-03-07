import React from "react";
import Film from "./Film";

function FilmList({ films }) {
  const filmElements = films.map((film) => <Film key={film.id} film={film} />);

  return <>{filmElements}</>;
}

export default FilmList;
