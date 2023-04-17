import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CarTest {
    @Test
    public void canCovertCar() {
        Car car = new Car("Tesla", 3);
        String message = Converter.process(car);
        assertEquals("Car data", message);
    }
}
