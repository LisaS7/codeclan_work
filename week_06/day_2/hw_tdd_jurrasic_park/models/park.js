class Park {
  constructor(name, ticketPrice, dinos) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinos = dinos;
  }
  addDino(dino) {
    this.dinos.push(dino);
  }
  removeDino(dino) {
    index = this.dinos.indexOf(dino);
    if (index > -1) {
      this.dinos.splice(index, 1);
    }
  }
  mostPopularDino() {
    const winnerDino = this.dinos.reduce(function (prev, curr) {
      return prev.guestsAttractedPerDay > curr.guestsAttractedPerDay
        ? prev
        : curr;
    });
    return winnerDino;
  }
  dinosBySpecies(species) {
    const dinoList = this.dinos.filter((dino) => dino.species === species);
    return dinoList ? dinoList : null;
  }
  dailyVisitors() {
    const totalVisitors = this.dinos.reduce((total, dino) => {
      return total + dino.guestsAttractedPerDay;
    }, 0);
    return totalVisitors;
  }
  annualVisitors() {
    const visitorsPerDay = this.dailyVisitors();
    return visitorsPerDay * 365;
  }
  yearlyRevenue() {
    const visitors = this.annualVisitors();
    return visitors * this.ticketPrice;
  }
  removeBySpecies(species) {
    this.dinos = this.dinos.filter((dino) => dino.species !== species);
  }
  dinosByDiet() {
    let totals = { Herbivore: 0, Carnivore: 0, Omnivore: 0 };
    for (const dino of this.dinos) {
      totals[dino.diet] += 1;
    }
    return totals;
  }
}

export default Park;
