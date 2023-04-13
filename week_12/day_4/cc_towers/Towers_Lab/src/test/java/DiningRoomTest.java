import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class DiningRoomTest {

    DiningRoom diningRoom;

    @Before
    public void setUp() { diningRoom = new DiningRoom( 30, "Skye");}

    @Test
    public void canGetName() {
        assertEquals("Skye", diningRoom.getName());
    }

    @Test
    public void canGetCapacity() {
        assertEquals(30, diningRoom.getCapacity());
    }

    @Test
    public void canGetSize() {
        assertEquals(40, diningRoom.getRoomSize(10, 4), 0.01);
    }
}
