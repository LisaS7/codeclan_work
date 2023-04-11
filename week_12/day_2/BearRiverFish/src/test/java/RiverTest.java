import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class RiverTest {
    private River river;
    private Salmon salmon;

    @BeforeEach
    public void setup(){
        river = new River();
        salmon = new Salmon();
    }

    @Test
    public void riverCanAddFish() {
        river.addFish(salmon);
        assertEquals(1, river.fishCount());
    }

    @Test
    public void riverCanRemoveFish() {
        river.addFish(salmon);
        river.addFish(salmon);
        river.removeFish();
        assertEquals(1, river.fishCount());
    }
}
