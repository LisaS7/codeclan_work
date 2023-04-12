import java.util.ArrayList;
import java.util.HashMap;

public class Library {
    private ArrayList<Book> collection;

    public Library() {
        this.collection = new ArrayList<>();
    }

    public int bookCount() {
        return collection.size();
    }

    public void addBook(Book book) {
        collection.add(book);
    }

    public boolean checkInStock(String title) {
        for (Book book : collection) {
            if (book.getTitle() == title) {
                return true;
            }
        }
        return false;
    }

    public HashMap<String, Integer> genreFrequencies() {
        HashMap<String, Integer> frequencies = new HashMap<>();

        for (Book book : collection) {
            String genre = book.getGenre();
            if (!frequencies.containsKey(genre)) {
                frequencies.put(genre, 1);
            } else {
                int previousFrequency = frequencies.get(genre);
                int newFrequency = previousFrequency + 1;
                frequencies.replace(genre, newFrequency);
            }
        }

        return frequencies;
    }
}
