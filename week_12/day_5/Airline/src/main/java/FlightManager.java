import people.Passenger;

public class FlightManager {
    private Flight flight;

    public FlightManager(Flight flight) {
        this.flight = flight;
    }

    public int cargoWeightPerPassenger() {
        int totalCapacity = flight.getPlane().passengerCargoCapacity();
        return totalCapacity / flight.getPlane().getModel().getSeatingCapacity();
    }

    public int cargoBookedForPassengers() {
        return flight.getNumberOfPassengers() * cargoWeightPerPassenger();
    }

    public int cargoAvailable() {
        return flight.getPlane().passengerCargoCapacity() - cargoBookedForPassengers();
    }
}
