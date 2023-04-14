import people.CabinCrew;
import people.Passenger;
import people.Pilot;

import java.util.ArrayList;
import java.util.List;

public class Flight {
    private Pilot pilot;
    private ArrayList<CabinCrew> crew = new ArrayList<>();
    private ArrayList<Passenger> passengers = new ArrayList<>();
    private Plane plane;
    private String flightNumber;
    private String destination;
    private String departure;
    private String departureTime;

    public Flight(Plane plane, String flightNumber, String destination, String departure, String departureTime) {
        this.plane = plane;
        this.flightNumber = flightNumber;
        this.destination = destination;
        this.departure = departure;
        this.departureTime = departureTime;
    }

    public void setPilot(Pilot pilot) {
        this.pilot = pilot;
    }

    public void addCrew(CabinCrew crewMember) {
        this.crew.add(crewMember);
    }

    public void addCrew(CabinCrew ...crewMembers) {
        this.crew.addAll(List.of(crewMembers));
    }

    public void addPassenger(Passenger passenger) {
        if (availableSeats() > 0) {
            this.passengers.add(passenger);
        }
    }

    public void addPassengers(Passenger ...passengers) {
        if (availableSeats() >= passengers.length) {
            this.passengers.addAll(List.of(passengers));
        }
    }

    public Pilot getPilot() {
        return pilot;
    }

    public ArrayList<CabinCrew> getCrew() {
        return crew;
    }

    public ArrayList<Passenger> getPassengers() {
        return passengers;
    }

    public Plane getPlane() {
        return plane;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public String getDestination() {
        return destination;
    }

    public String getDeparture() {
        return departure;
    }

    public String getDepartureTime() {
        return departureTime;
    }

    public int getNumberOfPassengers() {
        return this.passengers.size();
    }

    public int getNumberOfBags() {
        int total = 0;
        for (Passenger passenger : passengers) {
            total += passenger.getNumberOfBags();
        }
        return total;
    }

    public int availableSeats() {
        int capacity = this.plane.getModel().getSeatingCapacity();
        return capacity - getNumberOfPassengers();
    }
}
