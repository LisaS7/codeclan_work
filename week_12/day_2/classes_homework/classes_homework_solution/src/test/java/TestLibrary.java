import org.junit.Before;
import org.junit.Test;

import java.util.HashMap;

import static org.junit.Assert.assertEquals;

public class TestLibrary {
    private Book book1;
    private Book book2;
    private Book book3;
    private Library library;

    @Before
    public void setUp() {
        book1 = new Book("The Wild Sheep Chase", "Haruki Murakami", "Mystery");
        book2 = new Book("The Crow Road", "Ian Banks", "Mystery");
        book3 = new Book("Pride & Prejudice", "Jane Austen", "Classics");
        library = new Library();
    }

    @Test
    public void canAddBook() {
        library.addBook(book1);
        assertEquals(1, library.bookCount());
    }

    @Test
    public void checkBookAvailable__false() {
        assertEquals(false, library.checkInStock(book1.getTitle()));
    }

    @Test
    public void checkBookAvailable__true() {
        library.addBook(book1);
        assertEquals(true, library.checkInStock(book1.getTitle()));
    }

    @Test
    public void checkGenreFrequencies() {
        library.addBook(book1);
        library.addBook(book2);
        library.addBook(book3);

        HashMap<String, Integer> frequencies = library.genreFrequencies();

        int numberOfClassics = frequencies.get("Classics");
        assertEquals(1, numberOfClassics);

        int numberOfMysteries = frequencies.get("Mystery");
        assertEquals(2, numberOfMysteries);
    }
}
