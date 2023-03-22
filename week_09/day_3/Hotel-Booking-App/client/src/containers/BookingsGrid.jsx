import BookingCard from "../components/BookingCard";
import styled from "styled-components"

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
`

export default function BookingsGrid({bookings, removeBooking}) {

    const bookingNodes = bookings.map( booking => {
        return <BookingCard key={booking._id} booking={booking} removeBooking={removeBooking} />
    })


    return(
        <Container>
        {bookingNodes}
        </Container>
    );

};