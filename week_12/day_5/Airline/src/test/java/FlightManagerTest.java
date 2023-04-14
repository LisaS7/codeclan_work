import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import people.Passenger;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class FlightManagerTest {
    private FlightManager flightManager;
    private Flight flight;

    @BeforeAll
    public void setup() {
        Plane plane = new Plane(PlaneModel.BOEING787);
        flight = new Flight(plane, "NO179", "OSL", "EDI", "09:50");
        Passenger passenger1 = new Passenger("Alec", 4);
        for (int i = 0; i < 100; i++) {
            flight.addPassenger(passenger1);
        }
        flightManager = new FlightManager(flight);
    }

    @Test
    public void canGetPassengerBaggageAllocation() {
        assertEquals(122, flightManager.cargoWeightPerPassenger());
    }

    @Test
    public void canGetCargoTotalForPassengers() {
        assertEquals(12200, flightManager.cargoBookedForPassengers());
    }

    @Test
    public void canGetCargoRemaining() {
        assertEquals(17997, flightManager.cargoAvailable());
    }
}
