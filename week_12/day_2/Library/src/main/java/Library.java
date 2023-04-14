import java.util.ArrayList;
import java.util.HashMap;

public class Library {
    private ArrayList<Book> books = new ArrayList<>();
    private int capacity = 5;

    public void addBook(Book book) {
        if (countBooks() < capacity) {
            books.add(book);
        }
    }

    public Book removeBook(int index) {
        return books.remove(index);
    }

    public int countBooks() {
        return books.size();
    }
    
    public HashMap<String, Integer> booksByGenre() {
        HashMap<String, Integer> totals = new HashMap<>();
        for (Book book : books) {
            String bookGenre = book.getGenre();
            totals.merge(bookGenre, 1, Integer::sum);
        }
        return totals;
    }

    public Book findByTitle(String title) {
        for(Book book : books) {
            if(book.getTitle() == title) {
                return book;
            }
        }
        return null;
    }

}
