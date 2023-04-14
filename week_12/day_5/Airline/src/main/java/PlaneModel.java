public enum PlaneModel {
    BOEING747(416, 180500),
    BOEING787(246, 60395),
    AIRBUSA330(250, 46000),
    ANTONOVAN28(17, 1750);

    private int seatingCapacity;
    private int cargoCapacity_kg;

    PlaneModel(int seatingCapacity, int cargoCapacity_kg) {
        this.seatingCapacity = seatingCapacity;
        this.cargoCapacity_kg = cargoCapacity_kg;
    }

    public int getSeatingCapacity() {
        return seatingCapacity;
    }

    public int getCargoCapacity_kg() {
        return cargoCapacity_kg;
    }
}
