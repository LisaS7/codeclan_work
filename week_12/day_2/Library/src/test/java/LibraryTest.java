import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class LibraryTest {
    private Library library = new Library();
    private Book book1;
    private Book book2;
    private Book book3;

    @BeforeAll
    public void setup() {
        book1 = new Book("V For Vendetta", "Alan Moore", "Thriller");
        book2 = new Book("The Pragmatic Programmer", "David Thomas / Andrew Hunt", "Programming");
        book3 = new Book("The Satsuma Complex", "Bob Mortimer", "Thriller");
        library.addBook(book1);
        library.addBook(book2);
        library.addBook(book3);
    }

    @Test
    public void canAddBookToLibrary() {
        assertEquals(2, library.countBooks());
    }

    @Test
    public void canRemoveBookFromLibrary() {
        library.removeBook(0);
        assertEquals(1, library.countBooks());
    }

    @Test
    public void cantAddBookWhenLibraryIsFull() {
        for (int i = 0; i < 7; i++) {
            library.addBook(book1);
        }
        assertEquals(5, library.countBooks());
    }

    @Test
    public void canGetTotalByGenre() {
        HashMap<String, Integer> expected = new HashMap<>();
        expected.put("Thriller", 1);
        expected.put("Programming", 1);
        assertEquals(expected, library.booksByGenre());
    }

    @Test
    public void canFindBookByTitle() {
        System.out.println(library.findByTitle("V For Vendetta").toString());
        assertEquals(book1, library.findByTitle("V For Vendetta"));
    }

}
