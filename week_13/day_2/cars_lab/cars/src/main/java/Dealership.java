import stock.Vehicle;

import java.util.*;

public class Dealership implements IBuy{
    private int till;
    private final ArrayList<Vehicle> stock = new ArrayList<>();

    public Dealership(int till) {
        this.till = till;
    }

    public int getTill() {
        return till;
    }

    public void addVehicles(Vehicle ...vehicles) {
        stock.addAll(List.of(vehicles));
    }

    public int stockCount() {
        return stock.size();
    }

    public Vehicle findVehicleByRegistration(String regNumber) {
        for (Vehicle vehicle: stock) {
            if (Objects.equals(vehicle.getRegistration(), regNumber)) {
                return vehicle;
            }
        }
        return null;
    }

    public void buy(Vehicle vehicle) {
        till -= vehicle.getPrice();
        addVehicles(vehicle);
    }

    public void sell(Vehicle vehicle) {
        stock.remove(vehicle);
        till += vehicle.getPrice();
    }

    public void repair(Vehicle vehicle) {
        till -= vehicle.getDamage();
        vehicle.repair();
    }

    public ArrayList<Vehicle> sortVehiclesByRegistration() {
        ArrayList<Vehicle> vehicles = new ArrayList<>(stock);
        vehicles.sort(Comparator.comparing(Vehicle::getRegistration));
        return vehicles;

    }

}
