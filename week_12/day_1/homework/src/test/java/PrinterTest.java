import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PrinterTest {
    Printer printer = new Printer(250);

    @Test
    public void canPrint(){
        printer.print(10, 5);
        assertEquals(200, printer.getSheets());
    }

    @Test
    public void cantPrint(){
        printer.print(500, 100);
        assertEquals(250, printer.getSheets());
    }

    @Test
    public void reduceToner(){
        printer.print(10, 3);
        assertEquals(70, printer.getToner());
    }
}
