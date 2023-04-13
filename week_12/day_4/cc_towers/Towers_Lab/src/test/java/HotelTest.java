import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;

import static org.junit.Assert.assertEquals;

public class HotelTest {
    Hotel hotel;
    BedRoom bedroom1;
    BedRoom bedroom2;


    @Before
    public void setUp() {
        hotel = new Hotel();
        bedroom1 = new BedRoom(1, RoomType.SINGLE, 100.00);
        bedroom2 = new BedRoom(2, RoomType.DOUBLE, 100.00);
        ConferenceRoom confRoom1 = new ConferenceRoom(20, "Jura");
        DiningRoom diningRoom1 = new DiningRoom(30, "DiningRoom1");
        DiningRoom diningRoom2 = new DiningRoom(10, "DiningRoom2");
        hotel.addBedroom(bedroom1);
        hotel.addBedroom(bedroom2);
        hotel.addConferenceRoom(confRoom1);
        hotel.addDiningRoom(diningRoom1);
        hotel.addDiningRoom(diningRoom2);

        Guest guest = new Guest("Gary");
        hotel.checkInGuest(guest, 1);
    }

    @Test
    public void canCheckInGuest() {
        BedRoom room = hotel.getRoomByNumber(1);
        assertEquals(1, room.getGuestCount());

    }

    @Test
    public void canCheckOutGuest() {
        BedRoom room = hotel.getRoomByNumber(1);
        hotel.checkOutGuest("Gary", 1);
        assertEquals(0, room.getGuestCount());
    }

    @Test
    public void canBookRoom() {
        BedRoom room = hotel.getRoomByNumber(1);
        Booking booking = hotel.bookRoom(room, 5);
        assertEquals(5, booking.getNightsBooked());
    }

    @Test
    public void hasBedRooms() {
        assertEquals(2, hotel.getBedrooms().size());
    }

    @Test
    public void hasConferenceRooms() {
        assertEquals(1, hotel.getConferenceRooms().size());
    }

    @Test
    public void hasDiningRooms() {
        assertEquals(2, hotel.getDiningRooms().size());
    }

    @Test
    public void canGetVacantRooms() {
        ArrayList<BedRoom> vacantRooms = hotel.getVacantRooms();
        assertEquals(new ArrayList<BedRoom>(Arrays.asList(bedroom2)), vacantRooms);
    }
}
