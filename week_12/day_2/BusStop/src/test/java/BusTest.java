import org.junit.Before;
import org.junit.Test;


import static org.junit.Assert.assertEquals;

public class BusTest {
    private Bus bus;
    private Person person;
    private BusStop busStop;

    @Before
    public void setUp(){
        bus = new Bus("Linlithgow");
        person = new Person();
        busStop = new BusStop("Cross");

    }

    @Test
    public void busHasDestination() {
        assertEquals("Linlithgow", bus.getDestination());
    }

    @Test
    public void busHasPassenger() {
        bus.addPassenger(person);
        assertEquals(1, bus.getPassengerCount());
    }

    @Test
    public void busCannotAddPassengerWhenFull() {
        bus.addPassenger(person);
        bus.addPassenger(person);
        bus.addPassenger(person);
        bus.addPassenger(person);
        bus.addPassenger(person);
        assertEquals(4, bus.getPassengerCount());
    }

    @Test
    public void busCanRemovePassenger() {
        bus.addPassenger(person);
        bus.removePassenger();
        assertEquals(0, bus.getPassengerCount());
    }

    @Test
    public void busCanPickupPassenger() {
        busStop.addPerson(person);
        busStop.addPerson(person);
        bus.pickup(busStop);
        assertEquals(1, bus.getPassengerCount());
        assertEquals(1, busStop.getQueueLength());
    }
}
