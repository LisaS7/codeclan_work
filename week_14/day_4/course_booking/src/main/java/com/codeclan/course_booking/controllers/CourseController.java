package com.codeclan.course_booking.controllers;

import com.codeclan.course_booking.models.Booking;
import com.codeclan.course_booking.models.Course;
import com.codeclan.course_booking.repositories.BookingRepository;
import com.codeclan.course_booking.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CourseController {
    @Autowired
    CourseRepository courseRepository;

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getAllCourses(@RequestParam(required = false) Integer rating, @RequestParam(required = false) Long customerId) {
        if (rating != null) {
            return new ResponseEntity<>(courseRepository.findByRating(rating), HttpStatus.OK);
        }
        if (customerId != null) {
            List<Booking> bookings = bookingRepository.findByCustomerId(customerId);
            List<Course> courses = bookings.stream().map(Booking::getCourse).toList();
            return new ResponseEntity<>(courses, HttpStatus.OK);
        }
        return new ResponseEntity<>(courseRepository.findAll(), HttpStatus.OK);
    }
}
