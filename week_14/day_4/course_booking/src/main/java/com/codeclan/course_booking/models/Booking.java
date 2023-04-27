package com.codeclan.course_booking.models;

import lombok.*;

import java.text.SimpleDateFormat;
import java.util.Date;

@Getter @Setter @NoArgsConstructor
public class Booking {
    private Date date;

    public String getFormattedDate() {
        return new SimpleDateFormat("dd-MM-yy").format(this.date);
    }
}
