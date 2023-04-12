package staff.management;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ManagerTest {
    Manager manager;

    @BeforeAll
    public void setup() {
        manager = new Manager("Dave", "ABC123", 23000.00, "Consoles");
    }

    @Test
    public void hasName() {
        assertEquals("Dave", manager.getName());
    }

    @Test
    public void hasDepartment() {
        assertEquals("Consoles", manager.getDeptName());
    }

    @Test
    public void hasNINumber() {
        assertEquals("ABC123", manager.getNI_number());
    }

    @Test
    public void hasSalary() {
        assertEquals(23000.00, manager.getSalary());
    }

    @Test
    public void canRaiseSalary() {
        manager.raiseSalary(1000.50);
        assertEquals(24000.50, manager.getSalary());
    }

    @Test
    public void canPayBonus() {
        assertEquals(230.00, manager.payBonus());

    }


}
