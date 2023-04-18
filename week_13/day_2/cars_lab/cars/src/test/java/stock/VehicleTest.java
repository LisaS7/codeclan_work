package stock;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import parts.Engine;
import parts.Tyre;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class VehicleTest {
    private Vehicle vehicle;
    private Engine engine;
    private Tyre tyres;

    @BeforeEach
    public void setup() {
        engine = new Engine("Vauxhall", 100, 8);
        tyres = new Tyre("Bridgestone", 4, 32);
        vehicle = new Vehicle("Vauxhall", engine, tyres, "Red", 8000, Type.PETROL, "SE16 KPG" );
    }

    @Test
    public void hasMake() {
        assertEquals("Vauxhall", vehicle.getMake());
    }

    @Test
    public void hasEngine() {
        assertEquals(engine, vehicle.getEngine());
    }

    @Test
    public void hasTyres() {
        assertEquals(tyres, vehicle.getTyres());
    }

    @Test
    public void hasColour() {
        assertEquals("Red", vehicle.getColour());
    }

    @Test
    public void hasPrice() {
        assertEquals(8000, vehicle.getPrice());
    }

    @Test
    public void hasType() {
        assertEquals("Petrol", vehicle.getType().getFormattedName());
    }

    @Test
    public void hasRegistration() {
        assertEquals("SE16 KPG", vehicle.getRegistration());
    }

    @Test
    public void canAddDamage() {
        vehicle.addDamage(200);
        assertEquals(200, vehicle.getDamage());
    }

    @Test
    public void canGetPriceLessDamage() {
        vehicle.addDamage(600);
        assertEquals(7400, vehicle.priceAfterDamage());
    }


}
