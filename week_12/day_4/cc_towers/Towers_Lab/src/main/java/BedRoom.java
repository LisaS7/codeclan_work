public class BedRoom extends Room{

    private int roomNumber;
    private RoomType roomType;
    private double nightlyRate;

    public BedRoom(int roomNumber, RoomType roomType, double nightlyRate) {
        super(roomType.getCapacity());
        this.roomNumber = roomNumber;
        this.roomType = roomType;
        this.nightlyRate = nightlyRate;
    }

    public int getRoomNumber() {
        return this.roomNumber;
    }

    public String getRoomType() {
        return this.roomType.getFormattedRoomType();
    }

    public double getNightlyRate() {
        return nightlyRate;
    }
}
