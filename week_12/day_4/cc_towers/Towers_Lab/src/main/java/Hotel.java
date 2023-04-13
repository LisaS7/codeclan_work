import lombok.Getter;

import java.util.ArrayList;
import java.util.HashMap;

@Getter
public class Hotel {
    private ArrayList<BedRoom> bedrooms = new ArrayList<>();
    private ArrayList<ConferenceRoom> conferenceRooms = new ArrayList<>();
    private HashMap<String, DiningRoom> diningRooms = new HashMap<>();

    public Hotel() {
    }

    public void addBedroom(BedRoom room) {
        bedrooms.add(room);
    }

    public void addConferenceRoom(ConferenceRoom confRoom) {
        conferenceRooms.add(confRoom);
    }

    public void addDiningRoom(DiningRoom diningRoom) {
        diningRooms.put(diningRoom.getName(), diningRoom);
    }

    public BedRoom getRoomByNumber(int roomNumber) {
        for (BedRoom room : bedrooms) {
            if(room.getRoomNumber() == roomNumber) {
                return room;
            }
        }
        return null;
    }

    public void checkInGuest(Guest guest, int roomNumber) {
        BedRoom room = getRoomByNumber(1);
        if(room.isAvailable()) {
            room.addGuest(guest);
        }
    }

    public void checkOutGuest(String name, int roomNumber) {
        BedRoom room = getRoomByNumber(1);
        if(room.getRoomNumber() == roomNumber) {
            room.removeGuestByName(name);
        }
    }

    public Booking bookRoom(BedRoom room, int numberOfNights) {
        return new Booking(room, numberOfNights);
    }

    public ArrayList<BedRoom> getVacantRooms() {
        ArrayList<BedRoom> vacantRooms = new ArrayList<>();
        for (BedRoom room : bedrooms) {
            if(room.isAvailable()) {
                vacantRooms.add(room);
            }
        }
        return vacantRooms;
    }

}

