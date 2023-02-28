class Taxi {
  constructor(manufacturer, model, driver) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.driver = driver;
    this.passengers = [];
  }
  numberOfPassengers() {
    return this.passengers.length;
  }
  addPassenger(passenger) {
    this.passengers.push(passenger);
  }
  removePassengerByName(name) {
    const index = this.passengers.indexOf(name);
    this.passengers.splice(index, 1);
  }
  removeAllPassengers() {
    this.passengers = [];
  }
}

export default Taxi;
