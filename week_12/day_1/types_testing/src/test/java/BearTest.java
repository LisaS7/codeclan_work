
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class BearTest {

    Bear bear;

    @BeforeEach
    public void setup() {
        bear = new Bear("Gary", 27, 95.62, 'M');
    }

    @Test
    public void hasName() {
        assertEquals("Gary", bear.getName());
    }

    @Test
    public void canChangeName() {
        bear.setName("Chris");
        assertEquals("Chris", bear.getName());
    }

    @Test
    public void hasAge() {
        assertEquals(27, bear.getAge());
    }

    @Test
    public void canChangeAge() {
        bear.setAge(20);
        assertEquals(20, bear.getAge());
    }

    @Test
    public void hasWeight() {
        assertEquals(95.62, bear.getWeight(), 0.01);
    }

    @Test
    public void canChangeWeight() {
        bear.setWeight(90);
        assertEquals(90, bear.getWeight(), 0.01);
    }

    @Test
    public void readyToHibernateIfGreaterThan80() {
        assertEquals(true, bear.readyToHibernate());
    }

    @Test
    public void readyToHibernateIfLowerThan80() {
        Bear lightBear = new Bear("David", 40, 65.49, 'N');
        assertEquals(false, lightBear.readyToHibernate());
    }

    @Test
    public void hasGender() {
        assertEquals('M', bear.getGender());
    }

    @Test
    public void canChangeGender() {
        bear.setGender('F');
        assertEquals('F', bear.getGender());
    }
}
