package people;

public class Pilot extends Employee {
    private String licenseNumber;

    public Pilot(String name, Rank rank, String licenseNumber) {
        super(name, rank);
        this.licenseNumber = licenseNumber;
    }

    public String getLicenseNumber() {
        return licenseNumber;
    }

    public void setLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
    }

    public String fly() {
        return "I'm flying!";
    }
}
