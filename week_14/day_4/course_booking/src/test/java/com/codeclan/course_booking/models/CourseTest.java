package com.codeclan.course_booking.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.time.Month;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CourseTest {

    Course course;
    Customer customer;
    Booking booking1;
    Booking booking2;

    @BeforeEach
    public void setup() {
        customer = new Customer("Alec", "Philpstoun", 3);
        course = new Course("Spring Boot For Dummies", "Livingston", 5);
        booking1 = new Booking(LocalDate.of(2023, Month.APRIL, 20), course, customer);
        booking2 = new Booking(LocalDate.of(2023, Month.APRIL, 22), course, customer);
        course.addBookings(booking1, booking2);

    }

    @Test
    public void hasName() {
        assertEquals("Spring Boot For Dummies", course.getName());
    }

    @Test
    public void hasLocation() {
        assertEquals("Livingston", course.getLocation());
    }

    @Test
    public void hasRating() {
        assertEquals(5, course.getRating());
    }

    @Test
    public void hasBookings() {
        assertEquals(2, course.getBookings().size());
    }
}
