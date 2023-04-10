public class Printer {

    int sheets;
    int toner = 100;

    public Printer(int sheets) {
        this.sheets = sheets;
    }

    public int getSheets() {
        return sheets;
    }

    public int getToner() {
        return toner;
    }

    public void print(int pages, int copies) {

        int requiredSheets = pages * copies;

        if (this.sheets >= requiredSheets) {
            this.sheets -= requiredSheets;
            this.toner -= requiredSheets;
        }
    }
}
