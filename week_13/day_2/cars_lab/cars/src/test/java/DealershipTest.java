import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import parts.Engine;
import parts.Tyre;
import stock.Type;
import stock.Vehicle;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class DealershipTest {

    Dealership dealership;
    Engine engine;
    Tyre tyres;
    Vehicle vehicle1;

    @BeforeEach
    public void setup() {
        engine = new Engine("Vauxhall", 100, 8);
        tyres = new Tyre("Bridgestone", 4, 32);
//        vehicle1 = new Vehicle("Vauxhall", engine, tyres, "Red", 8000, Type.PETROL, "SE16 KPG" );
//        Vehicle vehicle2 = new Vehicle("Ford", engine, tyres, "Blue", 7500, Type.EV, "GN20 RNQ" );
        dealership = new Dealership(50000);
//        dealership.addVehicles(vehicle1, vehicle2);
    }

    @Test
    public void hasTill() {
        assertEquals(50000, dealership.getTill());
    }

    @Test
    public void hasStock() {
        assertEquals(2, dealership.stockCount());
    }

    @Test
    public void canBuy() {
        Vehicle newVehicle = new Vehicle("Vauxhall", engine, tyres, "Red", 7000, Type.PETROL, "SE18 DLW" );
        dealership.buy(newVehicle);
        assertEquals(43000, dealership.getTill());
        assertEquals(3, dealership.stockCount());
    }

    @Test
    public void canSell() {
        dealership.sell(vehicle1);
        assertEquals(1, dealership.stockCount());
        assertEquals(58000, dealership.getTill());
    }

    @Test
    public void canRepair() {
        Vehicle vehicle1 = new Vehicle("Vauxhall", engine, tyres, "Red", 8000, Type.PETROL, "SE16 KPG" );
        vehicle1.addDamage(700);
        dealership.repair(vehicle1);
        assertEquals(49300, dealership.getTill());
        assertEquals(0, vehicle1.getDamage());
    }

    @Test
    public void canSortByRegistration() {
        Vehicle newVehicle1 = new Vehicle("Vauxhall", engine, tyres, "Red", 7000, Type.PETROL, "SE18 GHI" );
        Vehicle newVehicle2 = new Vehicle("Vauxhall", engine, tyres, "Red", 7000, Type.PETROL, "SE18 ABC" );
        Vehicle newVehicle3 = new Vehicle("Vauxhall", engine, tyres, "Red", 7000, Type.PETROL, "SE18 DEF" );

        dealership.addVehicles(newVehicle1, newVehicle2, newVehicle3);

        ArrayList<Vehicle> sortedVehicles = dealership.sortVehiclesByRegistration();
        for (Vehicle vehicle:sortedVehicles) {
            System.out.println(vehicle.getRegistration());
        }



    }
}
