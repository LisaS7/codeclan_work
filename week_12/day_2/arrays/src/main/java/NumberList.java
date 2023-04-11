import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

public class NumberList {
    private ArrayList<Integer> numbers;

    public NumberList(ArrayList<Integer> numbers) {
        this.numbers = numbers;
    }

    public int getNumberCount() {
        return this.numbers.size();
    }

    public void add(List<Integer> newNumbers) {
        this.numbers.addAll(newNumbers);
    }

    public void add(Integer newNumber) {
        this.numbers.add(newNumber);
    }

    public int getNumberAtIndex(int index) {
        return this.numbers.get(index);
    }

    public int total() {
        int sum = 0;

//  LONGFORM LOOP:
            for(int i = 0; i < getNumberCount(); i++) {
                sum += getNumberAtIndex(i);
            }

//  FOR EACH LOOP:
//        for(Integer number : this.numbers)
//            sum += number;

//  ITERATOR:
//        Iterator<Integer> it = this.numbers.iterator();
//        while(it.hasNext()) {
//            sum += it.next();
//        }

        return sum;
    }
}
