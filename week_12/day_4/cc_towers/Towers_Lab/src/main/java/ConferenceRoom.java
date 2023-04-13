import lombok.Getter;

@Getter
public class ConferenceRoom extends Room{
    private String name;

    public ConferenceRoom(int capacity, String name) {
        super(capacity);
        this.name = name;
    }
}
