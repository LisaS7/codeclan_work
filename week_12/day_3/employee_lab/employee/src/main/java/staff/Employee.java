package staff;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public abstract class Employee {
    private String name;
    private String NI_number;
    private Double salary;

    public Employee(String name, String NI_number, Double salary) {
        if (name != null) {
            this.name = name;
        }
        this.NI_number = NI_number;
        this.salary = salary;
    }

    public void raiseSalary(Double amount) {
        double newSalary = this.salary + amount;
        if (newSalary > 0) {
            this.salary = newSalary;
        }
    }

    public Double payBonus() {
        return this.salary * 0.01;
    }
}
