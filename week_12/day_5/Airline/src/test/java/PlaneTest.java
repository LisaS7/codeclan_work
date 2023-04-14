import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class PlaneTest {
    private Plane plane;

    @BeforeAll
    public void setup() {
        plane = new Plane(PlaneModel.BOEING787);
    }

    @Test
    public void canGetModel() {
        assertEquals(PlaneModel.BOEING787, plane.getModel());
    }

    @Test
    public void canGetPassengerCargoCapacity() {
        assertEquals(30197, plane.passengerCargoCapacity());
    }

}
