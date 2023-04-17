package attractions;

import org.junit.Before;
import org.junit.Test;
import people.Visitor;

import static org.junit.Assert.assertEquals;

public class RollercoasterTest {

    RollerCoaster rollerCoaster;

    @Before
    public void setUp() {
        rollerCoaster = new RollerCoaster("Blue Ridge", 10);
    }

    @Test
    public void hasName() {
        assertEquals("Blue Ridge", rollerCoaster.getName());
    }

    @Test
    public void hasRating() {
        assertEquals(10, rollerCoaster.getRating());
    }

    @Test
    public void hasVisitCount() {
        assertEquals(0, rollerCoaster.getVisitCount());
    }

    @Test
    public void hasMinAgeRestriction__false() {
        Visitor visitor = new Visitor(10, 120, 4.30);
        assertEquals(false, rollerCoaster.isAllowedTo(visitor));
    }

    @Test
    public void hasMinAgeRestriction__true() {
        Visitor visitor = new Visitor(23, 180, 10.50);
        assertEquals(true, rollerCoaster.isAllowedTo(visitor));
    }

    @Test
    public void hasMinHeightRestriction__false() {
        Visitor visitor = new Visitor(10, 120, 4.30);
        assertEquals(false, rollerCoaster.isAllowedTo(visitor));
    }

    @Test
    public void hasMinHeightRestriction__true() {
        Visitor visitor = new Visitor(23, 180, 10.50);
        assertEquals(true, rollerCoaster.isAllowedTo(visitor));
    }

    @Test
    public void hasDoublePriceForTallPeople() {
        Visitor visitor = new Visitor(23, 230, 10.50);
        assertEquals(16.80, rollerCoaster.priceFor(visitor), 0.01);
    }

    @Test
    public void hasDefaultPriceForNotTallPeople() {
        Visitor visitor = new Visitor(23, 195, 10.50);
        assertEquals(8.40, rollerCoaster.priceFor(visitor), 0.01);
    }
}
