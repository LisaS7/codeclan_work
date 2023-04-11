import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class BookTest {
    private Book book = new Book("V For Vendetta", "Alan Moore", "Thriller");

    @Test
    public void bookHasTitle() {
        assertEquals("V For Vendetta", book.getTitle());
    }

    @Test
    public void bookHasAuthor() {
        assertEquals("Alan Moore", book.getAuthor());
    }

    @Test
    public void bookHasGenre() {
        assertEquals("Thriller", book.getGenre());
    }
}

