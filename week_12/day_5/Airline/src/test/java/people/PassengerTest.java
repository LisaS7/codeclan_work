package people;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class PassengerTest {
    Passenger passenger;
    
    @BeforeAll
    public void setup() {
        passenger = new Passenger("Dave", 3);
    }
    
    @Test
    public void hasName() {
        assertEquals("Dave", passenger.getName());
    }

    @Test
    public void hasNumberOfBags() {
        assertEquals(3, passenger.getNumberOfBags());
    }
}
