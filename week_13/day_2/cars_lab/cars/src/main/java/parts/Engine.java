package parts;

public class Engine {
    final String make;
    final int horsepower;
    final int cylinders;

    public Engine(String make, int horsepower, int cylinders) {
        this.make = make;
        this.horsepower = horsepower;
        this.cylinders = cylinders;
    }

    public String getMake() {
        return make;
    }

    public int getHorsepower() {
        return horsepower;
    }

    public int getCylinders() {
        return cylinders;
    }
}
