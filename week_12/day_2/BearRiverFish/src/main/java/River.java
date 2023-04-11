import java.util.ArrayList;

public class River {

    private ArrayList<Salmon> fish = new ArrayList<>();

    public int fishCount() {
        return this.fish.size();
    }

    public void addFish(Salmon salmon) {
        this.fish.add(salmon);
    }

    public Salmon removeFish() {
        return this.fish.remove(0);
    }
}
