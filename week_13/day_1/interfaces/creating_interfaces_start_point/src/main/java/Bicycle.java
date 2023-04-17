public class Bicycle implements IMove, IStart, IStop{
    private int distanceTravelled;

    public Bicycle() {
        this.distanceTravelled = 0;
    }

    public int getDistanceTravelled() {
        return distanceTravelled;
    }

    public void move(int i) {
        distanceTravelled += i;
    }

    @Override
    public String start() {
        return "Start pedalling";
    }

    @Override
    public String stop() {
        return "Stop pedalling";
    }
}
