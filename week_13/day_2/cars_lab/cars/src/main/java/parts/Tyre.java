package parts;

public class Tyre {
    private final String brand;
    final int size;
    final int pressure;

    public Tyre(String brand, int size, int pressure) {
        this.brand = brand;
        this.size = size;
        this.pressure = pressure;
    }

    public String getBrand() {
        return brand;
    }

    public int getSize() {
        return size;
    }

    public int getPressure() {
        return pressure;
    }
}
