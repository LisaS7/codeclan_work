import java.util.ArrayList;
import java.util.Objects;

public abstract class Room {
    private int capacity;
    private ArrayList<Guest> guests = new ArrayList<>();

    public Room(int capacity) {
        this.capacity = capacity;
    }

    public int getCapacity() {
        return capacity;
    }

    public int getGuestCount() {
        return guests.size();
    }

    public boolean isAvailable() {
        return guests.size() == 0;
    }

    public void addGuest(Guest guest) {
        this.guests.add(guest);
    }

    public void removeGuestByName(String name) {
        guests.removeIf(guest -> Objects.equals(guest.getName(), name));
    }

    public double getRoomSize(double width, double length) {
        return width * length;
    }
}
