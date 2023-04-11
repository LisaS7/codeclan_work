import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class BearTest {
    private Bear bear;
    private River river;

    @BeforeEach
    public void setup(){
        bear = new Bear("Baloo");
        river = new River();

        Salmon salmon = new Salmon();
        river.addFish(salmon);
        river.addFish(salmon);
    }

    @Test
    public void bearHasName(){
        assertEquals("Baloo", bear.getName());
    }

    @Test
    public void bearStomachStartsEmpty() {
        assertEquals(0, bear.foodCount());
    }

    @Test
    public void bearCanEatSalmonFromRiver() {
        bear.eatSalmonFromRiver(river);
        assertEquals(1, bear.foodCount());
    }

    @Test
    public void bearStomachEmptiesAfterSleeping() {
        bear.eatSalmonFromRiver(river);
        bear.sleep();
        assertEquals(0, bear.foodCount());
    }
}
