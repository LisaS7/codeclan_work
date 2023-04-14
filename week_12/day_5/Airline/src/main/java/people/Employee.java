package people;

public abstract class Employee extends Person{
    private Rank rank;

    public Employee(String name, Rank rank) {
        super(name);
        this.rank = rank;
    }

    public Rank getRank() {
        return rank;
    }

    public void setRank(Rank rank) {
        this.rank = rank;
    }
}
