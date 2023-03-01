class Traveller {
  constructor(journeys) {
    this.journeys = journeys;
  }
  getJourneyStartLocations() {
    return this.journeys.map((journey) => journey.startLocation);
  }
  getJourneyEndLocations() {
    return this.journeys.map((journey) => journey.endLocation);
  }
  getJourneysByTransport(transport) {
    return this.journeys.filter((journey) => journey.transport === transport);
  }
  getJourneysByMinDistance(minDistance) {
    return this.journeys.filter((journey) => journey.distance > minDistance);
  }

  calculateTotalDistanceTravelled() {
    return this.journeys.reduce(
      (total, journey) => (total += journey.distance),
      0
    );
  }
  getUniqueModesOfTransport() {
    const transports = this.journeys.map((journey) => journey.transport);
    return [...new Set(transports)];
  }
}

module.exports = Traveller;
