package staff.management;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class DirectorTest {
    private Director director;

    @BeforeAll
    public void setup() {
        director = new Director("Dave", "ABC123", 23000.00, "Consoles", 100000.00);
    }

    @Test
    public void hasName() {
        assertEquals("Dave", director.getName());
    }

    @Test
    public void hasDepartment() {
        assertEquals("Consoles", director.getDeptName());
    }

    @Test
    public void hasNINumber() {
        assertEquals("ABC123", director.getNI_number());
    }

    @Test
    public void hasSalary() {
        assertEquals(23000.00, director.getSalary());
    }

    @Test
    public void hasBudget() {
        assertEquals(100000.00, director.getBudget());
    }

    @Test
    public void canRaiseSalary() {
        director.raiseSalary(1000.50);
        assertEquals(24000.50, director.getSalary());
    }

    @Test
    public void canPayBonus() {
        assertEquals(460.00, director.payBonus());
    }

}
