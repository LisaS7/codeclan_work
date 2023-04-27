package com.codeclan.course_booking.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.time.LocalDate;
import java.time.Month;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class BookingTest {

    Course course;
    Customer customer;
    Booking booking;

    @BeforeEach
    public void setup() {
        customer = new Customer("Alec", "Philpstoun", 3);
        course = new Course("Spring Boot For Dummies", "Glasgow", 4);
        booking = new Booking(LocalDate.of(2023, Month.APRIL, 20), course, customer);
    }

    @Test
    public void hasDate() {
        assertEquals(LocalDate.of(2023, Month.APRIL, 20), booking.getDate());
    }

    @Test
    public void canFormatDate() {
        assertEquals("20-04-23", booking.getFormattedDate());
    }

    @Test
    public void hasCourse() {
        assertEquals(course, booking.getCourse());
    }

    @Test
    public void hasCustomer() {
        assertEquals(customer, booking.getCustomer());
    }
}
