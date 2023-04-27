package com.codeclan.course_booking.controllers;

import com.codeclan.course_booking.models.Booking;
import com.codeclan.course_booking.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping("/bookings")
    public ResponseEntity<List<Booking>> getAllBookings() {
        return new ResponseEntity<>(bookingRepository.findAll(), HttpStatus.OK);
    }
}
