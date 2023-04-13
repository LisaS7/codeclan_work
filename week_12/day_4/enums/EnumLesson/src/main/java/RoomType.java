public enum RoomType {
    SINGLE("Single"),
    DOUBLE("Double"),
    TRIPLE("Triple"),
    FAMILY("Family");

    private final String formattedName;

    RoomType(String formattedName) {
        this.formattedName = formattedName;
    }

    public String getFormattedName() {
        return formattedName;
    }
}
