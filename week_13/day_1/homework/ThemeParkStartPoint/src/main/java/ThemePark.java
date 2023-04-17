import attractions.Attraction;
import behaviours.IReviewed;
import people.Visitor;
import stalls.Stall;

import java.util.ArrayList;
import java.util.List;

public class ThemePark {
    private ArrayList<Attraction> attractions = new ArrayList<>();
    private ArrayList<Stall> stalls = new ArrayList<>();

    public void addAttraction(Attraction... newAttractions) {
        attractions.addAll(List.of(newAttractions));
    }

    public void addStall(Stall... newStalls) {
        stalls.addAll(List.of(newStalls));
    }

    public ArrayList<Attraction> getAttractions() {
        return attractions;
    }

    public ArrayList<Stall> getStalls() {
        return stalls;
    }

    public ArrayList<IReviewed> getAllReviewed() {
        // ????????
        return null;
    }

    public void visit(Visitor visitor, Attraction attraction) {
        visitor.visitAttraction(attraction);
        attraction.addVisitCount(1);
    }
}
