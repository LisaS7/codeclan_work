import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class BookingTest {
    Booking booking;

    @Before
    public void setup() {
        BedRoom room = new BedRoom(5, RoomType.SINGLE, 100.00);
        booking = new Booking(room, 4);
    }

    @Test
    public void hasRoom() {
        assertEquals(5, booking.getBedroom().getRoomNumber());
    }

    @Test
    public void hasNumberOfNights() {
        assertEquals(4, booking.getNightsBooked());
    }

    @Test
    public void canGetTotalBill() {
        assertEquals(400.00, booking.getTotalBill(), 0.01);
    }
}
