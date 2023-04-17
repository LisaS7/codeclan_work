import attractions.*;
import org.junit.Before;
import org.junit.Test;
import people.Visitor;
import stalls.CandyflossStall;
import stalls.IceCreamStall;
import stalls.ParkingSpot;
import stalls.TobaccoStall;

import static junit.framework.TestCase.assertEquals;

public class ThemeParkTest {

    ThemePark themePark;
    Dodgems dodgem;
    Park park;
    Playground playground;
    RollerCoaster coaster;
    CandyflossStall floss;
    IceCreamStall iceCream;
    TobaccoStall baccy;

    @Before
    public void setup() {
        themePark = new ThemePark();
        dodgem = new Dodgems("Bumpy Cars", 4);
        park = new Park("Leaves and Stuff", 2);
       playground = new Playground("Swings and Things", 5);
        coaster = new RollerCoaster("The Beast", 5);
        themePark.addAttraction(dodgem, park, playground, coaster);
        floss = new CandyflossStall("Flossy Stuff", "Dave", ParkingSpot.B3, 4);
        iceCream = new IceCreamStall("Icey Stuff", "Alec", ParkingSpot.A1, 5);
        baccy = new TobaccoStall("Smokey Stuff", "Simon", ParkingSpot.A4, 3);
        themePark.addStall(floss, iceCream, baccy);
    }

    @Test
    public void hasAttractions() {
        assertEquals(4, themePark.getAttractions().size());
    }

    @Test
    public void hasStalls() {
        assertEquals(3, themePark.getStalls().size());
    }

    @Test
    public void canVisit() {
        Visitor visitor = new Visitor(23, 180, 10.50);
        themePark.visit(visitor, coaster);
        assertEquals(coaster, visitor.getVisitedAttractions().get(0));
        assertEquals(1, coaster.getVisitCount());
    }

}
