package people;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class PilotTest {
    Pilot pilot;

    @BeforeAll
    public void setup() {
        pilot = new Pilot("Leah", Rank.CADET, "ZE2412");
    }

    @Test
    public void hasName() {
        assertEquals("Leah", pilot.getName());
    }

    @Test
    public void hasRank() {
        assertEquals(Rank.CADET, pilot.getRank());
    }

    @Test
    public void hasLicenseNumber() {
        assertEquals("ZE2412", pilot.getLicenseNumber());
    }

    @Test
    public void canFly() {
        assertEquals("I'm flying!", pilot.fly());
    }
}
