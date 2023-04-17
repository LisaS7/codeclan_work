package people;

import attractions.Attraction;

import java.util.ArrayList;
import java.util.List;

public class Visitor {

    private int age;
    private double height;
    private double money;
    private ArrayList<Attraction> visitedAttractions = new ArrayList<>();

    public Visitor(int age, double height, double money) {
        this.age = age;
        this.height = height;
        this.money = money;
    }

    public int getAge() {
        return age;
    }

    public double getHeight() {
        return height;
    }

    public double getMoney() {
        return money;
    }

    public ArrayList<Attraction> getVisitedAttractions() {
        return visitedAttractions;
    }

    public void visitAttraction(Attraction ...attractions) {
        visitedAttractions.addAll(List.of(attractions));
    }
}
