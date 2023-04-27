package com.codeclan.course_booking.controllers;

import com.codeclan.course_booking.models.Course;
import com.codeclan.course_booking.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CourseController {
    @Autowired
    CourseRepository courseRepository;

    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getAllCourses() {
        return new ResponseEntity<>(courseRepository.findAll(), HttpStatus.OK);
    }
}
