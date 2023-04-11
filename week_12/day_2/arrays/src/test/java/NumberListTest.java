import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class NumberListTest {

    private NumberList myNumbers;

    @BeforeEach
    public void setup() {
        ArrayList<Integer> testNumbers = new ArrayList<>();
        testNumbers.add(1);
        testNumbers.add(2);
        testNumbers.add(3);
        testNumbers.add(4);
        myNumbers = new NumberList(testNumbers);
    }

    @Test
    public void hasNumberOfEntries() {
        assertEquals(4, myNumbers.getNumberCount());
    }

    @Test
    public void canAddEntries() {
        myNumbers.add(Arrays.asList(1,2,3));
        assertEquals(7, myNumbers.getNumberCount());
    }

    @Test
    public void canGetFirstNumber() {
        myNumbers.add(10);
        assertEquals(1, myNumbers.getNumberAtIndex(0));
    }

    @Test
    public void canGetTotal() {
        assertEquals(10, myNumbers.total());
    }
}
