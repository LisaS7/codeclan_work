package staff.management;

import lombok.Getter;
import staff.Employee;

@Getter
public class Manager extends Employee {
    private String deptName;

    public Manager(String name, String NI_number, Double salary, String deptName) {
        super(name, NI_number, salary);
        this.deptName = deptName;
    }
}
