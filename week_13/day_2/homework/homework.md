# Polymorphism & Composition Homework - Quiz

# Polymorphism

1. What does the **_word_** 'polymorphism' mean?
   Many shapes

2. What does it mean when we apply polymorphism to OO design? Give a simple Java example.
   When an object can behave in different ways depending on its role, e.g. a countries app could have a parent class of Country with child classes of Scotland, Russia, etc.

public abstract class Country {
private String name;
private ArrayList<String> languages;

    public Country(String name, String greeting){
        this.name = name;
        this.greeting = greeting;
    }

    public String sayHello() {
        return greeting;
    }

}

public class Scotland extends Country {
public Scotland(String name, String greeting) {
super(name, greeting)
}
}

public class Russia extends Country {
public Scotland(String name, String greeting) {
super(name, greeting)
}
}

Country Scotland = new Scotland("Scotland", "How ye daein?")
Country Russia = new Russia("Russia", "привет")

Scotland.sayHello()
Russia.sayHello()

3. What can we use to implement polymorphism in Java?
   We can use abstract classes

4. How many 'forms' can an object take when using polymorphism?
   It can only inherit from one parent.

5. Give an example of when you could use polymorphism.
   In a staff management app, Managers, Administrators, SalesPerson etc are all types of employee.

# Composition and Aggregation

6. What do we mean by 'composition' in reference to object-oriented programming?
   When an object is made up of several other parts/

7. When would you use composition? Provide a simple example in Java.
   When the parts of the object would stop existing without the object itself, e.g. the departments don't exist on their own without a shop.

public class Shop {
private ArrayList<Department> departments;
}

public class Department {
private String name;
}

8. Give a difference between composition and aggregation?
   With aggregation the component parts can exist independently.

9. What is/are the advantage(s) of using composition/aggregation?
   Composition and aggregation allow for reuse of code and avoid duplication.

10. When using composition, when an object is destroyed, what happens to all the objects it is composed of?
    The objects are also destroyed.

11. When using aggregation, when an object is destroyed, what happens to all the objects it is composed of?
    The objects continue to exist.
