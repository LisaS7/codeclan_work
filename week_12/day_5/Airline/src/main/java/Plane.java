public class Plane {
    private PlaneModel model;

    public Plane(PlaneModel model) {
        this.model = model;
    }

    public PlaneModel getModel() {
        return model;
    }

    public void setModel(PlaneModel model) {
        this.model = model;
    }

    public int passengerCargoCapacity() {
        return this.getModel().getCargoCapacity_kg() / 2;
    }
}
