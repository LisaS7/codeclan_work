import java.util.ArrayList;

public class Bus {
    // destination - string
    private String destination;
    // capacity - int
    private int capacity = 4;
    // passengers - arraylist
    private ArrayList<Person> passengers = new ArrayList<>();

    public Bus(String destination){
        this.destination = destination;
    }

    public String getDestination() {
        return destination;
    }

    // get number of passengers - return int
    public int getPassengerCount() {
        return passengers.size();
    }

    // add passenger (if there is space!) - void
    public void addPassenger(Person person) {
        if (getPassengerCount() < capacity) {
            passengers.add(person);
        }
    }

    // remove passenger - return passenger
    public Person removePassenger() {
        return passengers.remove(0);
    }

    // pickup
    public void pickup(BusStop busStop) {
        Person person = busStop.removePerson();
        addPassenger(person);
    }
}
