import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import parts.Engine;
import parts.Tyre;
import stock.Type;
import stock.Vehicle;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TransactionTest {
    Transaction transaction;
    Vehicle vehicle;
    Customer customer;
    Dealership dealership;

    @BeforeEach
    public void setup() {
        Engine engine = new Engine("Vauxhall", 100, 8);
        Tyre tyres = new Tyre("Bridgestone", 4, 32);
        vehicle = new Vehicle("Vauxhall", engine, tyres, "Red", 8000, Type.PETROL, "SE16 KPG" );
        dealership = new Dealership(10000);
        customer = new Customer("Alec", 20000);
        dealership.addVehicles(vehicle);
        transaction = new Transaction(dealership, customer, vehicle);
    }

    @Test
    public void dealershipHasVehicle() {
        assertEquals(1, dealership.stockCount());
    }

    @Test
    public void customerCanPurchase() {
        transaction.customerPurchase();
        assertEquals(0, dealership.stockCount());
        assertEquals(1, customer.getVehicles().size());
        assertEquals(18000, dealership.getTill());
        assertEquals(12000, customer.getWallet());
    }
}
