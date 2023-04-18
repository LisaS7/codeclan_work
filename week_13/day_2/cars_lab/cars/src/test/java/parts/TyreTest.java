package parts;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TyreTest {
    Tyre tyre;

    @BeforeAll
    public void setup() {
        tyre = new Tyre("Bridgestone", 4, 32);
    }

    @Test
    public void hasBrand() {
        assertEquals("Bridgestone", tyre.getBrand());
    }

    @Test
    public void hasSize() {
        assertEquals(4, tyre.getSize());
    }

    @Test
    public void hasPressure() {
        assertEquals(32, tyre.getPressure());
    }
}
