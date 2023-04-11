import java.util.ArrayList;

public class Borrower {
    private ArrayList<Book> books = new ArrayList<>();

    public int countBooks() {
        return books.size();
    }

    public void borrowBook(Book book) {
        books.add(book);
    }

    public Book returnBook() {
        return books.remove(0);
    }
}
