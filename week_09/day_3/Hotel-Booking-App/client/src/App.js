import './App.css'
import {useState, useEffect} from "react"
import BookingsGrid from './containers/BookingsGrid';
import { getBookings, postBooking, deleteBooking } from './BookingService';
import styled from 'styled-components';

const StyledForm = styled.form`
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`

const Button = styled.button`
    padding: 0.5rem;
    margin: 1rem;
    background-color: var(--gold);
    border: none;
`

function App() {
  const [bookings, setBookings] = useState([]);
  const [bookingName, setBookingName] = useState("")
  const [bookingEmail, setBookingEmail] = useState("")
  const [bookingCheckedIn, setBookingCheckedIn] = useState(false)
 const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    getBookings().then((data) => setBookings(data))
  }, [[], bookings])

  function addBooking(booking) {
    setBookings([...bookings, booking])
  }

  function removeBooking(id) {
    deleteBooking(id)
    const tempBookings = bookings.filter(booking => booking._id !== id)
    setBookings(tempBookings)
  }



  function handleSubmit(e) {
    e.preventDefault();
    console.log(bookingName, bookingEmail);
    if (bookingName && bookingEmail ) {
      postBooking({guestName: bookingName, guestEmail: bookingEmail, checkedIn: bookingCheckedIn})
      addBooking({guestName: bookingName, guestEmail: bookingEmail, checkedIn: bookingCheckedIn})
      setBookingName("")
      setBookingEmail("")
      setBookingCheckedIn(false)
    } else {
      setErrorMessage("Please provide name and email")
    }

  }


  return (
    <div className="App">
      <StyledForm onSubmit={handleSubmit}>
        <p>{errorMessage}</p>
        <label htmlFor="name">Enter Name</label>
        <input type="text" id="name" value={bookingName} onChange={(e) => setBookingName(e.target.value)}/>
        <label htmlFor="email">Enter Email</label>
        <input type="text" id="email" value={bookingEmail} onChange={(e) => setBookingEmail(e.target.value)} />
        <label htmlFor="checkedIn">Is checked in</label>
        <input type="checkbox" checked={bookingCheckedIn} onChange={(e) => setBookingCheckedIn(e.target.value)} />
        <Button>Save</Button>
      </StyledForm>
      <BookingsGrid bookings={bookings} removeBooking={removeBooking}/>
    </div>
  );
}

export default App;
