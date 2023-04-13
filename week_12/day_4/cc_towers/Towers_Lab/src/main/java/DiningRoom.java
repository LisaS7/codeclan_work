import lombok.Getter;

@Getter
public class DiningRoom extends Room {
    private String name;

    public DiningRoom(int capacity, String name) {
        super(capacity);
        this.name = name;
    }
}
