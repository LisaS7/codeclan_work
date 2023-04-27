package com.codeclan.course_booking.controllers;

import com.codeclan.course_booking.models.Customer;
import com.codeclan.course_booking.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping("/customers")
    public ResponseEntity<List<Customer>> getAllCustomers() {
        return new ResponseEntity<>(customerRepository.findAll(), HttpStatus.OK);
    }
}
