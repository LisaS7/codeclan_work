package attractions;

import org.junit.Before;
import org.junit.Test;
import people.Visitor;

import static org.junit.Assert.assertEquals;

public class PlaygroundTest {
    Playground playground;

    @Before
    public void setUp() throws Exception {
        playground = new Playground("Fun Zone", 7);
    }

    @Test
    public void hasName() {
        assertEquals("Fun Zone", playground.getName());
    }

    @Test
    public void hasRating() {
        assertEquals(7, playground.getRating());
    }

    @Test
    public void hasVisitCount() {
        assertEquals(0, playground.getVisitCount());
    }

    @Test
    public void hasMaxAgeRestriction__false() {
        Visitor visitor = new Visitor(23, 180, 10.50);
        assertEquals(false, playground.isAllowedTo(visitor));
    }

    @Test
    public void hasMaxAgeRestriction__true() {
        Visitor visitor = new Visitor(10, 120, 4.30);
        assertEquals(true, playground.isAllowedTo(visitor));
    }
}
