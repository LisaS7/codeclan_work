import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import people.CabinCrew;
import people.Passenger;
import people.Pilot;
import people.Rank;

import java.util.ArrayList;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class FlightTest {
    private Flight flight;
    private Plane plane;
    private Pilot pilot;
    private CabinCrew crewMember1;
    private CabinCrew crewMember2;
    private CabinCrew crewMember3;

    @BeforeEach
    public void setup() {
        plane = new Plane(PlaneModel.BOEING787);
        flight = new Flight(plane, "NO179", "OSL", "EDI", "09:50");
        pilot = new Pilot("Graham", Rank.CAPTAIN, "RU70857");
        crewMember1 = new CabinCrew("Frank", Rank.CADET);
        crewMember2 = new CabinCrew("Joyce", Rank.FLIGHTATTENDANT);
        crewMember3 = new CabinCrew("Tracy", Rank.FLIGHTATTENDANT);

    }

    @Test
    public void hasPlane() {
        assertEquals(plane, flight.getPlane());
    }

    @Test
    public void hasFlightNumber() {
        assertEquals("NO179", flight.getFlightNumber());
    }

    @Test
    public void hasDestination() {
        assertEquals("OSL", flight.getDestination());
    }

    @Test
    public void hasDeparture() {
        assertEquals("EDI", flight.getDeparture());
    }

    @Test
    public void hasDepartureTime() {
        assertEquals("09:50", flight.getDepartureTime());
    }

    @Test
    public void canAddPilot() {
        flight.setPilot(pilot);
        assertEquals(pilot, flight.getPilot());
    }

    @Test
    public void canAddSingleCrewMember() {
        ArrayList<CabinCrew> expected = new ArrayList<>(Arrays.asList(crewMember1));
        flight.addCrew(crewMember1);
        assertEquals(expected, flight.getCrew());
    }

    @Test
    public void canAddMultipleCrewMembers() {
        ArrayList<CabinCrew> expected = new ArrayList<>(Arrays.asList(crewMember2, crewMember3));
        flight.addCrew(crewMember2, crewMember3);
        assertEquals(expected, flight.getCrew());
    }

    @Test
    public void canAddPassenger() {
        Passenger passenger = new Passenger("Lesley", 2);
        ArrayList<Passenger> expected = new ArrayList<>(Arrays.asList(passenger));
        flight.addPassenger(passenger);
        assertEquals(expected, flight.getPassengers());
    }

    @Test
    public void canAddMultiplePassengers() {
        Passenger passenger1 = new Passenger("Alec", 4);
        Passenger passenger2 = new Passenger("Zeke", 2);
        ArrayList<Passenger> expected = new ArrayList<>(Arrays.asList(passenger1, passenger2));
        flight.addPassengers(passenger1, passenger2);
        assertEquals(expected, flight.getPassengers());
    }

    @Test
    public void canGetNumberOfPassengers() {
        Passenger passenger1 = new Passenger("Alec", 4);
        Passenger passenger2 = new Passenger("Zeke", 2);
        flight.addPassengers(passenger1, passenger2);
        assertEquals(2, flight.getNumberOfPassengers());
    }

    @Test
    public void canGetTotalBags() {
        Passenger passenger1 = new Passenger("Alec", 4);
        Passenger passenger2 = new Passenger("Zeke", 2);
        flight.addPassengers(passenger1, passenger2);
        assertEquals(6, flight.getNumberOfBags());
    }

    @Test
    public void canGetAvailableSeats() {
        Passenger passenger1 = new Passenger("Alec", 4);
        Passenger passenger2 = new Passenger("Zeke", 2);
        flight.addPassengers(passenger1, passenger2);
        assertEquals(244, flight.availableSeats());
    }

    @Test
    public void cantAddPassengerWhenFlightFull() {
        Passenger passenger1 = new Passenger("Alec", 4);
        for (int i = 0; i < 250; i++) {
            flight.addPassenger(passenger1);
        }
        assertEquals(246, flight.getNumberOfPassengers());
    }

    @Test
    public void cantAddMultiplePassengersWhenFlightFull() {
        Passenger passenger1 = new Passenger("Alec", 4);
        Passenger passenger2 = new Passenger("Zeke", 2);
        for (int i = 0; i < 130; i++) {
            flight.addPassengers(passenger1, passenger2);
        }
        assertEquals(246, flight.getNumberOfPassengers());
    }


}
