const baseURL = "http://localhost:5001/api/bookings/"

export async function getBookings() {
    const data = await fetch(baseURL)
    return await data.json()
}

export async function postBooking(booking) {
    const data = await fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(booking),
        headers: {"Content-Type": "application/json"}
    })
    return await data.json()
}

export async function deleteBooking(id) {
    return await fetch(baseURL + id, {
        method: "DELETE",
    })
}

export async function updateBooking(booking, id) {
    const data = await fetch(baseURL + id, {
        method: "PUT",
        body: JSON.stringify(booking),
        headers: {"Content-Type": "application/json"}
    })
    return await data.json()
}