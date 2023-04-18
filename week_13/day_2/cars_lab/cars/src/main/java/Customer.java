import stock.Vehicle;

import java.util.ArrayList;
import java.util.List;

public class Customer implements IBuy{
    private String name;
    private int wallet;
    private final ArrayList<Vehicle> vehicles = new ArrayList<>();

    public Customer(String name, int wallet) {
        this.name = name;
        this.wallet = wallet;
    }

    public void addVehicle(Vehicle ...newVehicles) {
        vehicles.addAll(List.of(newVehicles));
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getWallet() {
        return wallet;
    }

    public void buy(Vehicle vehicle) {
        addVehicle(vehicle);
        this.wallet -= vehicle.getPrice();
    }

    public ArrayList<Vehicle> getVehicles() {
        return vehicles;
    }

}
