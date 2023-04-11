import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class BorrowerTest {
    private Borrower borrower = new Borrower();
    private Book book1;
    private Book book2;

    @BeforeAll
    public void setup() {
        book1 = new Book("V For Vendetta", "Alan Moore", "Thriller");
        book2 = new Book("The Pragmatic Programmer", "David Thomas / Andrew Hunt", "Programming");
    }

    @Test
    public void canBorrowBook() {
        borrower.borrowBook(book1);
        assertEquals(1, borrower.countBooks());
    }

    @Test
    public void canReturnBook() {
        borrower.borrowBook(book1);
        borrower.borrowBook(book2);
        borrower.returnBook();
        assertEquals(1, borrower.countBooks());
    }
}
