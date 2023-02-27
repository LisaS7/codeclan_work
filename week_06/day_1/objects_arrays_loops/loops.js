var sports = ["Strongman", "Crossfit", "Motocross"];

for (var sport of sports) {
  var upperSport = sport.toUpperCase();
  console.log(upperSport);
}

for (var i = 0; i < sports.length; i++) {
  console.log(sports[i]);
}

// ----------------------------------------------------

var movie = {
  title: "V For Vendetta",
  year: 2006,
  director: "James McTeigue",
};

for (var key in movie) {
  var value = movie[key];
  console.log(`The ${key} is ${value}`);
}

// IN gives keys, OF gives values
