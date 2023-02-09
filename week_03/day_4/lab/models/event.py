class Event:
    def __init__(self, date, title, number_of_guests, room, description, recurring):
        self.date = date
        self.title = title
        self.number_of_guests = number_of_guests
        self.room = room
        self.description = description
        self.recurring = recurring
