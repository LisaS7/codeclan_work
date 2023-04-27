package com.codeclan.course_booking.components;

import com.codeclan.course_booking.models.Booking;
import com.codeclan.course_booking.models.Course;
import com.codeclan.course_booking.models.Customer;
import com.codeclan.course_booking.repositories.*;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@NoArgsConstructor
public class DataLoader implements ApplicationRunner {

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    CourseRepository courseRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Customer customer1 = new Customer("Alec", "Philpstoun", 3);
        Customer customer2 = new Customer("Frank", "Inverness", 71);
        Customer customer3 = new Customer("Joyce", "Inverness", 67);
        customerRepository.saveAll(List.of(customer1, customer2, customer3));

        Course course1 = new Course("Python4Life", "Remote", 3);
        Course course2 = new Course("Design Patterns Are Cool", "Edinburgh", 5);
        Course course3 = new Course("Clean Code", "Edinburgh", 5);
        Course course4 = new Course("Live, Laugh, Java", "Glasgow", 4);
        courseRepository.saveAll(List.of(course1, course2, course3, course4));

        Booking booking1 = new Booking("10-04-23", course1, customer1);
        Booking booking2 = new Booking("10-04-23", course1, customer2);
        Booking booking3 = new Booking("12-04-23", course2, customer3);
        Booking booking4 = new Booking("12-04-23", course2, customer2);
        bookingRepository.saveAll(List.of(booking1, booking2, booking3, booking4));
    }
}
