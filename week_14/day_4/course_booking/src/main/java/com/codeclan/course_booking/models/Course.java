package com.codeclan.course_booking.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter @NoArgsConstructor
@Entity
@Table(name="courses")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String location;
    private int rating;

    @OneToMany(mappedBy = "course")
    @JsonIgnoreProperties({"course"})
    private List<Booking> bookings = new ArrayList<>();

    public Course(String name, String location, int rating) {
        this.name = name;
        this.location = location;

        if (rating > 0 && rating <= 5) {
            this.rating = rating;
        }
    }

    public void addBookings(Booking ...bookings) {
        this.bookings.addAll(List.of(bookings));
    }

}
