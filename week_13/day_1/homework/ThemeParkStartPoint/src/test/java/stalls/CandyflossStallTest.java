package stalls;

import attractions.Park;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CandyflossStallTest {

    CandyflossStall candyflossStall;

    @Before
    public void setUp() throws Exception {
        candyflossStall = new CandyflossStall("Candy Land", "Harry Belafonte", ParkingSpot.A1, 4);
    }

    @Test
    public void hasName() {
        assertEquals("Candy Land", candyflossStall.getName());
    }

    @Test
    public void hasOwner() {
        assertEquals("Harry Belafonte", candyflossStall.getOwnerName());
    }

    @Test
    public void hasParkingSpot(){
        assertEquals(ParkingSpot.A1, candyflossStall.getParkingSpot());
    }

    @Test
    public void hasRating() {
        assertEquals(4, candyflossStall.getRating());
    }
}
