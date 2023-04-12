package staff.techStaff;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class DeveloperTest {

    private Developer developer;

    @BeforeAll
    public void setup() {
        developer = new Developer("Dave", "ABC123", 23000.00);
    }

    @Test
    public void hasName() {
        assertEquals("Dave", developer.getName());
    }

    @Test
    public void hasNINumber() {
        assertEquals("ABC123", developer.getNI_number());
    }

    @Test
    public void hasSalary() {
        assertEquals(23000.00, developer.getSalary());
    }

    @Test
    public void canRaiseSalary() {
        developer.raiseSalary(1000.50);
        assertEquals(24000.50, developer.getSalary());
    }

    @Test
    public void canPayBonus() {
        assertEquals(230.00, developer.payBonus());

    }
}
