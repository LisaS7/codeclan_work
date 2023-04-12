import org.junit.Before;
import org.junit.Test;

import static junit.framework.TestCase.assertEquals;

public class PersonTest {
    Person person;

    @Before
    public void before() {
        person = new Person("Darren", "E16");
    }


    @Test
    public void hasName() {
        assertEquals("Darren", person.getName());
    }

    @Test
    public void hasCohort() {
        assertEquals("E16", person.getCohort());
    }

    @Test
    public void canChangeName() {
        person.setName("Tony");
        assertEquals("Tony", person.getName());
    }

    @Test
    public void canChangeCohort() {
        person.setCohort("E19");
        assertEquals("E19", person.getCohort());
    }

    @Test
    public void canTalk() {
        assertEquals("I love Java", person.talk("Java"));
    }

}