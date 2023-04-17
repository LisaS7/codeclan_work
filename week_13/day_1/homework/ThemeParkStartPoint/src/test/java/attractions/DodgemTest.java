package attractions;

import org.junit.Before;
import org.junit.Test;
import people.Visitor;

import static org.junit.Assert.assertEquals;

public class DodgemTest {

    Dodgems dodgems;

    @Before
    public void setUp() throws Exception {
        dodgems = new Dodgems("Bumper Cars", 5);
    }


    @Test
    public void hasName() {
        assertEquals("Bumper Cars", dodgems.getName());
    }

    @Test
    public void hasRating() {
        assertEquals(5, dodgems.getRating());
    }

    @Test
    public void hasVisitCount() {
        assertEquals(0, dodgems.getVisitCount());
    }

    @Test
    public void hasHalfPriceForKids() {
        Visitor visitor = new Visitor(8, 230, 10.50);
        assertEquals(2.25, dodgems.priceFor(visitor), 0.01);
    }

    @Test
    public void hasDefaultPriceForNotKids() {
        Visitor visitor = new Visitor(23, 195, 10.50);
        assertEquals(4.50, dodgems.priceFor(visitor), 0.01);
    }
}
