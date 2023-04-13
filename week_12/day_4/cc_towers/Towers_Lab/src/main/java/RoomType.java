public enum RoomType {
    SINGLE(1, "Single"),
    DOUBLE(2, "Double"),
    TRIPLE(3, "Triple"),
    FAMILY(8, "Family");

    private final int capacity;
    private String formattedName;

    RoomType(int capacity, String formattedName) {
        this.capacity = capacity;
        this.formattedName = formattedName;
    }

    public int getCapacity() {
        return capacity;
    }

    public String getFormattedRoomType() {
        return formattedName;
    }
}
