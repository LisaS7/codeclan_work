package staff.management;

import lombok.Getter;

@Getter
public class Director extends Manager {

    private Double budget;

    public Director(String name, String NI_number, Double salary, String deptName, Double budget) {
        super(name, NI_number, salary, deptName);
        this.budget = budget;
    }

    @Override
    public Double payBonus() {
        return this.getSalary() * 0.02;
    }
}
