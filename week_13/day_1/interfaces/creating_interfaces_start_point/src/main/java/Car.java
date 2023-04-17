public class Car implements IMove, IStart, IStop{
    private String make;
    private String model;
    private int odometerReading;

    public Car(String make, String model){
        this.make = make;
        this.model = model;
        this.odometerReading = 0;
    }

    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    public int getOdometerReading() {
        return odometerReading;
    }

    public void move(int distance) {
        odometerReading += distance;
    }

    @Override
    public String start() {
        return "Switch on the ignition";
    }

    @Override
    public String stop() {
        return "Switch off the ignition";
    }
}
