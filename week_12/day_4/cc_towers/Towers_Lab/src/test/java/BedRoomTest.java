import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class BedRoomTest {
    
    BedRoom bedRoom;
    @Before
    public void setUp() {
        bedRoom = new BedRoom(5, RoomType.SINGLE, 100.00);
    }

    @Test
    public void canGetCapacity() {
        assertEquals(1, bedRoom.getCapacity());
    }

    @Test
    public void canGetRoomNumber() {
        assertEquals(5, bedRoom.getRoomNumber());
    }

    @Test
    public void canGetRoomType() {
        assertEquals("Single", bedRoom.getRoomType());
    }

    @Test
    public void canAddGuest() {
        Guest guest = new Guest("Dave");
        bedRoom.addGuest(guest);
        assertEquals(1, bedRoom.getGuestCount());
    }

    @Test
    public void canGetNightlyRate() {
        assertEquals(100.00, bedRoom.getNightlyRate(), 0.01);
    }

    @Test
    public void canGetSize() {
        assertEquals(40, bedRoom.getRoomSize(10, 4), 0.01);
    }
}
