import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {

    Calculator calculator = new Calculator();

    @Test
    public void canAdd(){
        assertEquals(7, calculator.add(3, 4));
    }

    @Test
    public void canSubtract(){
        assertEquals(10, calculator.subtract(13, 3));
    }

    @Test
    public void canMultiply(){
        assertEquals(21, calculator.multiply(3, 7));
    }

    @Test
    public void canDivide(){
        assertEquals(5, calculator.divide(45, 9));
    }
}
