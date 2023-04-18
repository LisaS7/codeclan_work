package parts;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class EngineTest {

    Engine engine;

    @BeforeAll
    public void setup() {
        engine = new Engine("Vauxhall", 100, 8);
    }

    @Test
    public void hasMake() {
        assertEquals("Vauxhall", engine.getMake());
    }

    @Test
    public void hasHorsepower() {
        assertEquals(100, engine.getHorsepower());
    }

    @Test
    public void hasCylinders() {
        assertEquals(8, engine.getCylinders());
    }
}
