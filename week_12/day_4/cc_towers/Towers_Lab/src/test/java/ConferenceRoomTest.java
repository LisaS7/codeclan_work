import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ConferenceRoomTest {
    ConferenceRoom conferenceRoom;

    @Before
    public void setUp() { conferenceRoom = new ConferenceRoom(20, "Skye");}

    @Test
    public void canGetName() {
        assertEquals("Skye", conferenceRoom.getName());
    }

    @Test
    public void canGetCapacity() {
        assertEquals(20, conferenceRoom.getCapacity());
    }

    @Test
    public void canGetSize() {
        assertEquals(40, conferenceRoom.getRoomSize(10, 4), 0.01);
    }
}
