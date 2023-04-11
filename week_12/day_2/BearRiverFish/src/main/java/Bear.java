
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Getter @Setter
public class Bear {
    private String name;
    private ArrayList<Salmon> stomach = new ArrayList<>();

    public Bear (String name) {
        this.name = name;
    }

    public int foodCount() {
        return stomach.size();
    }

    public void eatSalmonFromRiver(River river) {
        Salmon salmon  = river.removeFish();
        stomach.add(salmon);
    }

    public void sleep() {
        stomach.clear();
    }
}
