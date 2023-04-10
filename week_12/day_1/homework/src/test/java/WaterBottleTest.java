import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class WaterBottleTest {

   WaterBottle bottle = new WaterBottle();

    @Test
    public void hasVolume(){
        assertEquals(100, bottle.getVolume());
    }

    @Test
    public void canDrink(){
        bottle.drink();
        assertEquals(90, bottle.getVolume());
    }

    @Test
    public void canEmpty(){
        bottle.empty();
        assertEquals(0, bottle.getVolume());
    }

    @Test
    public void canFill(){
        bottle.fill();
        assertEquals(100, bottle.getVolume());
    }

}
