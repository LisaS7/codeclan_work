package people;

public class CabinCrew extends Employee {

    public CabinCrew(String name, Rank rank) {
        super(name, rank);
    }

    public String makeAnnouncement(String announcement) {
        return announcement;
    }

}
