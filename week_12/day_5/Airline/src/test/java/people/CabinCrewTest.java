package people;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class CabinCrewTest {
    CabinCrew crewMember;

    @BeforeAll
    public void setup() {
        crewMember = new CabinCrew("Leah", Rank.CADET);
    }

    @Test
    public void hasName() {
        assertEquals("Leah", crewMember.getName());
    }

    @Test
    public void hasRank() {
        assertEquals(Rank.CADET, crewMember.getRank());
    }

    @Test
    public void canMakeAnnouncement() {
        assertEquals("Hello!", crewMember.makeAnnouncement("Hello!"));
    }
}
