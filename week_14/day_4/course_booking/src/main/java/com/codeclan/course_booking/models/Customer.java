package com.codeclan.course_booking.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter @NoArgsConstructor
@Entity
@Table(name="customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String location;
    private int age;

    @OneToMany(mappedBy = "customer")
    @JsonIgnoreProperties({"customer"})
    private List<Booking> bookings = new ArrayList<>();

    public Customer(String name, String location, int age) {
        this.name = name;
        this.location = location;
        this.age = age;
    }

    public void addBookings(Booking ...bookings) {
        this.bookings.addAll(List.of(bookings));
    }
}
