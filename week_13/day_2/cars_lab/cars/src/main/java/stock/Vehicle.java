package stock;

import parts.Engine;
import parts.Tyre;

public class Vehicle {
    private final String make;
    private Engine engine;
    private Tyre tyres;
    private String colour;
    private int price;
    private int damage;
    private final Type type;
    private String registration;

    public Vehicle(String make, Engine engine, Tyre tyres, String colour, int price, Type type, String registration) {
        this.make = make;
        this.engine = engine;
        this.tyres = tyres;
        this.colour = colour;
        this.price = price;
        this.type = type;
        this.registration = registration;
    }

    public String getMake() {
        return make;
    }

    public Engine getEngine() {
        return engine;
    }

    public Tyre getTyres() {
        return tyres;
    }

    public String getColour() {
        return colour;
    }

    public int getPrice() {
        return price;
    }

    public Type getType() {
        return type;
    }

    public String getRegistration() {
        return registration;
    }

    public void setEngine(Engine engine) {
        this.engine = engine;
    }

    public void setTyres(Tyre tyres) {
        this.tyres = tyres;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setRegistration(String registration) {
        this.registration = registration;
    }

    public void addDamage(int amount) {
        this.damage += amount;
    }

    public int getDamage() {
        return this.damage;
    }

    public int priceAfterDamage() {
        return this.price - this.damage;
    }

    public void repair() {
        this.damage = 0;
    }
}
