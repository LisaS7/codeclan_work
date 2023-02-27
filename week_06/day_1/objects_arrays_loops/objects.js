var movie = {
  title: "V For Vendetta",
  year: 2006,
  director: "Orvill The Duck",
};

console.log(movie.director);
movie.director = "James McTeigue";
console.log(movie.director);

movie.cast = ["Hugo Weaving", "Natalie Portman", "Stephen Fry"];

delete movie.year;

movie.ratings = {
  critic: 94,
  audience: 95,
};

console.log(movie);

var keys = Object.keys(movie);
console.log(keys);
