const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listFilmTitles = function () {
  return this.films.map((film) => film.title);
};

Cinema.prototype.filmByTitle = function (title) {
  return this.films.filter((film) => film.title === title)[0];
};

Cinema.prototype.filmsByGenre = function (genre) {
  return this.films.filter((film) => film.genre === genre);
};

Cinema.prototype.filmsByYear = function (year) {
  const result = this.films.filter((film) => film.year === year);
  return result.length ? result : null;
};

Cinema.prototype.allFilmsLongerThan = function (minutes) {
  return this.films.every((film) => film.length > minutes);
};

Cinema.prototype.totalRunTime = function () {
  return this.films.reduce((total, film) => (total += film.length), 0);
};

module.exports = Cinema;
