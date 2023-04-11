import lombok.Getter;

@Getter
public class WaterBottle {
    private int volume = 100;

    public void drink() {
        this.volume -= 10;
    }

    public void empty() {
        this.volume = 0;
    }

    public void fill() {
        this.volume = 100;
    }
}
