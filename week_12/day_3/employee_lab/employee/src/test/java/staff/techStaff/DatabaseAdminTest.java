package staff.techStaff;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class DatabaseAdminTest {
    private DatabaseAdmin dba;

    @BeforeAll
    public void setup() {
        dba = new DatabaseAdmin("Dave", "ABC123", 23000.00);
    }

    @Test
    public void hasName() {
        assertEquals("Dave", dba.getName());
    }


    @Test
    public void hasNINumber() {
        assertEquals("ABC123", dba.getNI_number());
    }

    @Test
    public void hasSalary() {
        assertEquals(23000.00, dba.getSalary());
    }

    @Test
    public void canRaiseSalary() {
        dba.raiseSalary(1000.50);
        assertEquals(24000.50, dba.getSalary());
    }

    @Test
    public void canPayBonus() {
        assertEquals(230.00, dba.payBonus());

    }

}
