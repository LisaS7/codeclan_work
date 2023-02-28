const Park = function (name, ticketPrice, dinos) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinos = dinos;
};

module.exports = Park;

Park.prototype.addDino = function (dino) {
  this.dinos.push(dino);
};

Park.prototype.removeDino = function (dino) {
  index = this.dinos.indexOf(dino);
  if (index > -1) {
    this.dinos.splice(index, 1);
  }
};

Park.prototype.mostPopularDino = function () {
  const winnerDino = this.dinos.reduce(function (prev, curr) {
    return prev.guestsAttractedPerDay > curr.guestsAttractedPerDay
      ? prev
      : curr;
  });
  return winnerDino;
};

Park.prototype.dinosBySpecies = function (species) {
  const dinoList = this.dinos.filter((dino) => dino.species === species);
  return dinoList ? dinoList : null;
};

Park.prototype.dailyVisitors = function () {
  const totalVisitors = this.dinos.reduce((total, dino) => {
    return total + dino.guestsAttractedPerDay;
  }, 0);
  return totalVisitors;
};

Park.prototype.annualVisitors = function () {
  const visitorsPerDay = this.dailyVisitors();
  return visitorsPerDay * 365;
};

Park.prototype.yearlyRevenue = function () {
  const visitors = this.annualVisitors();
  return visitors * this.ticketPrice;
};

Park.prototype.removeBySpecies = function (species) {
  this.dinos = this.dinos.filter((dino) => dino.species !== species);
};

Park.prototype.dinosByDiet = function () {
  let totals = { Herbivore: 0, Carnivore: 0, Omnivore: 0 };
  for (const dino of this.dinos) {
    totals[dino.diet] += 1;
  }
  return totals;
};
