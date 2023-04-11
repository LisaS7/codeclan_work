import org.junit.Before;
import org.junit.Test;

import static junit.framework.TestCase.assertEquals;

public class BusStopTest {
    private BusStop busStop;
    private Person person;

    @Before
    public void setUp() {
        busStop = new BusStop("Cross");
        person = new Person();
    }

    @Test
    public void busStopHasName() {
        assertEquals("Cross", busStop.getName());
    }

    @Test
    public void canAddPerson() {
        busStop.addPerson(person);
        assertEquals(1, busStop.getQueueLength());
    }

    @Test
    public void canRemovePerson() {
        busStop.addPerson(person);
        busStop.addPerson(person);
        busStop.removePerson();
        assertEquals(1, busStop.getQueueLength());
    }
}
