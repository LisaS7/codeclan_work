import java.util.ArrayList;

public class BusStop {
    private String name;
    private ArrayList<Person> queue = new ArrayList<>();

    public BusStop(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void addPerson(Person person) {
        queue.add(person);
    }

    public Person removePerson() {
        return queue.remove(0);
    }

    public int getQueueLength() {
        return queue.size();
    }


}
