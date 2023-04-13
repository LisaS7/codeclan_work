import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Booking {
    private BedRoom bedroom;
    private int nightsBooked;

    public Booking(BedRoom bedroom, int nightsBooked) {
        this.bedroom = bedroom;
        this.nightsBooked = nightsBooked;
    }

    public double getTotalBill() {
        return bedroom.getNightlyRate() * nightsBooked;
    }
}
