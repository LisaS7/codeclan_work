package com.codeclan.course_booking.controllers;

import com.codeclan.course_booking.models.Booking;
import com.codeclan.course_booking.models.Customer;
import com.codeclan.course_booking.repositories.BookingRepository;
import com.codeclan.course_booking.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping("/customers")
    public ResponseEntity<List<Customer>> getAllCustomers(@RequestParam(required = false) String courseName) {
        if (courseName != null) {
            List<Booking> bookings = bookingRepository.findByCourseName(courseName);
            List<Customer> customers = bookings.stream().map(Booking::getCustomer).toList();
            return new ResponseEntity<>(customers, HttpStatus.OK);
        }
        return new ResponseEntity<>(customerRepository.findAll(), HttpStatus.OK);
    }
}
