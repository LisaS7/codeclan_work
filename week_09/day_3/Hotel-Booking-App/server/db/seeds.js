use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        guestName: "Tom",
        guestEmail: "tom@tommymail.com",
        checkedIn: true
      },
      {
        guestName: "Lisa",
        guestEmail: "Lisa@lismail.co.uk",
        checkedIn: true
      },
      {
        guestName: "Dave",
        guestEmail: "Dave@dave.com",
        checkedIn: false
      }
])