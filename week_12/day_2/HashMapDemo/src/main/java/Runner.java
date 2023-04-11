import java.util.HashMap;

public class Runner {
    public static void main(String[] args) {
        HashMap<String, String> favouriteFruits = new HashMap();

        favouriteFruits.put("Alec", "Orange");
        favouriteFruits.put("Lisa", "Watermelon");

        System.out.println(favouriteFruits);
        System.out.println(favouriteFruits.get("Alec"));

    }
}
