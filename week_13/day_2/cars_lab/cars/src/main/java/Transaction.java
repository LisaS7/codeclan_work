import stock.Vehicle;

public class Transaction {

    private Dealership dealership;
    private Customer customer;
    private Vehicle vehicle;

    public Transaction(Dealership dealership, Customer customer, Vehicle vehicle) {
        this.customer = customer;
        this.vehicle = vehicle;
        this.dealership = dealership;
    }

    public void customerPurchase() {
        customer.buy(vehicle);
        dealership.sell(vehicle);
    }

}
