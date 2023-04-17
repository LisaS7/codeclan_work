package behaviours;

import people.Visitor;

public interface ISecurity {
    boolean isAllowedTo(Visitor visitor);
}
