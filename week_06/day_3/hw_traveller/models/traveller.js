class Traveller {
  constructor(journeys) {
    this.journeys = journeys;
  }
  getJourneyStartLocations() {}
  getJourneyEndLocations() {}
  getJourneysByTransport(transport) {}
  getJourneysByMinDistance(minDistance) {}
  calculateTotalDistanceTravelled() {}
  getUniqueModesOfTransport() {}
}

module.exports = Traveller;
