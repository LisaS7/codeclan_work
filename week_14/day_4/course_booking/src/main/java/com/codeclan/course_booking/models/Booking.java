package com.codeclan.course_booking.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Getter @Setter @NoArgsConstructor
@Entity
@Table(name="bookings")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "course_id")
    @JsonIgnoreProperties({"bookings"})
    private Course course;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    @JsonIgnoreProperties({"bookings"})
    private Customer customer;

    public Booking(LocalDate date, Course course, Customer customer) {
        this.date = date;
        this.course = course;
        this.customer = customer;
    }

    public String getFormattedDate() {
        return this.date.format(DateTimeFormatter.ofPattern("dd-MM-yy"));
    }
}
