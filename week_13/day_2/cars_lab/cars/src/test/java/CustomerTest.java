import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import parts.Engine;
import parts.Tyre;
import stock.Type;
import stock.Vehicle;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class CustomerTest {

    Customer customer;
    Vehicle vehicle1;

    @BeforeEach
    public void setup() {
        customer = new Customer("Dave", 50000);
        Engine engine = new Engine("Vauxhall", 100, 8);
        Tyre tyres = new Tyre("Bridgestone", 4, 32);
        vehicle1 = new Vehicle("Vauxhall", engine, tyres, "Red", 8000, Type.PETROL, "SE16 KPG" );
    }

    @Test
    public void hasName() {
        assertEquals("Dave", customer.getName());
    }

    @Test
    public void hasWallet() {
        assertEquals(50000, customer.getWallet());
    }

    @Test
    public void canBuyVehicles() {
        customer.buy(vehicle1);
        assertEquals(42000 ,customer.getWallet());
        assertEquals(vehicle1, customer.getVehicles().get(0));
    }
}
