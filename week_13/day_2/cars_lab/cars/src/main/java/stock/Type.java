package stock;

public enum Type {
    EV("Electric"),
    HYBRID("Hybrid"),
    PETROL("Petrol"),
    DIESEL("Diesel");

    private final String formattedName;

    Type(String formattedName) {
        this.formattedName = formattedName;
    }

    public String getFormattedName() {
        return formattedName;
    }
}
