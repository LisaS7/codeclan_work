function Film({ film }) {
  return (
    <li>
      <a href={film.url}>{film.name}</a>
    </li>
  );
}

export default Film;
