package stalls;

import org.junit.Before;
import org.junit.Test;
import people.Visitor;

import static org.junit.Assert.assertEquals;

public class TobaccoStallTest {

    TobaccoStall tobaccoStall;

    @Before
    public void setUp() throws Exception {
        tobaccoStall = new TobaccoStall("Jacks Drum", "Jack Jarvis", ParkingSpot.B1, 3);
    }

    @Test
    public void hasName() {
        assertEquals("Jacks Drum", tobaccoStall.getName());
    }

    @Test
    public void hasOwner() {
        assertEquals("Jack Jarvis", tobaccoStall.getOwnerName());
    }

    @Test
    public void hasParkingSpot() {
        assertEquals(ParkingSpot.B1, tobaccoStall.getParkingSpot());
    }

    @Test
    public void hasRating() {
        assertEquals(5, tobaccoStall.getRating());
    }

    @Test
    public void hasMinAgeRestriction__true() {
        Visitor visitor = new Visitor(23, 180, 10.50);
        assertEquals(true, tobaccoStall.isAllowedTo(visitor));
    }

    @Test
    public void hasMinAgeRestriction__false() {
        Visitor visitor = new Visitor(10, 120, 4.30);
        assertEquals(false, tobaccoStall.isAllowedTo(visitor));
    }
}
