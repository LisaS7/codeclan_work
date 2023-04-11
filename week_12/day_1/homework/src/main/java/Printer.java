import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Printer {

    int sheets;
    int toner = 100;

    public Printer(int sheets) {
        this.sheets = sheets;
    }

    public void print(int pages, int copies) {

        int requiredSheets = pages * copies;

        if (this.sheets >= requiredSheets) {
            this.sheets -= requiredSheets;
            this.toner -= requiredSheets;
        }
    }
}
