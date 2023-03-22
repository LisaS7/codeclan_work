import {useState} from "react"
import styled from "styled-components"
import { updateBooking } from "../BookingService"

const Card = styled.div`
background-color: var(--dark);
    border: 1px solid var(--light-grey);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 2rem;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;
    margin: auto;
    padding: 1rem;
    border: 1px solid var(--light-grey);
`

const Button = styled.button`
    padding: 0.5rem;
    margin: 1rem;
    background-color: var(--gold);
    border: none;
`

export default function BookingCard({booking, removeBooking}) {
    const [formShown, setFormShown] = useState(false)
    const [name, setName] = useState(booking.guestName)
    const [email, setEmail] = useState(booking.guestEmail)
    const [checkedIn, setCheckedIn] = useState(booking.checkedIn)

    function handleDelete() {
        removeBooking(booking._id)
    }

    function handleSubmit(e) {
        e.preventDefault();

        const updatedBooking = {
            guestName: name, guestEmail: email, checkedIn
        }
        updateBooking(updatedBooking, booking._id)
        setFormShown(false)
    }

    function handleEdit ()  {
        setFormShown(true)
    }

    function handleChange(e) {
        switch (e.target.id) {
            case "name":
                setName(e.target.value)
                break
            case "email":
                setEmail(e.target.value)
                break
            case "checkedIn":
                setCheckedIn(e.target.checked)
                break
            default:
                break
        }
    }

    return (
        <Card>
            <h2>{booking.guestName}</h2>
            <p>{booking.checkedIn ? "Checked In":"Checked Out"}</p>
            {
                formShown && 
                <Form onSubmit={handleSubmit}>
                    <label htmlFor="name">Enter Name</label>
                    <input type="text" id="name" value={name} onChange={handleChange}/>
                    <label htmlFor="email">Enter Email</label>
                    <input type="text" id="email" value={email} onChange={handleChange} />
                    <label htmlFor="checkedIn">Is checked in</label>
                    <input type="checkbox" id="checkedIn" checked={checkedIn} onChange={handleChange} />
                    <Button>Save</Button>
                </Form>
            }

            <Button onClick={handleDelete}>Delete</Button>
            <Button onClick={handleEdit}>Edit</Button>
         </Card>
    )
}
