const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listFilmTitles = function () {
  return this.films.map((film) => film.title);
};

Cinema.prototype.filmByTitle = function (title) {
  return this.films.find((film) => film.title === title);
};

// Cinema.prototype.filmsByGenre = function (genre) {
//   return this.films.filter((film) => film.genre === genre);
// };

Cinema.prototype.someFilmsByYear = function (year) {
  return this.films.some((film) => film.year === year);
};

Cinema.prototype.allFilmsLongerThan = function (minutes) {
  return this.films.every((film) => film.length > minutes);
};

Cinema.prototype.totalRunTime = function () {
  return this.films.reduce((total, film) => (total += film.length), 0);
};

Cinema.prototype.filmsByProperty = function (property, value) {
  return this.films.filter((film) => film[property] === value);
};

module.exports = Cinema;
